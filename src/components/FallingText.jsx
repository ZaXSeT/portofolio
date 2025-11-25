import { useRef, useState, useEffect } from 'react';
import Matter from 'matter-js';

const FallingText = ({
  className = '',
  text = '',
  highlightWords = [],
  highlightClass = 'highlighted',
  trigger = 'auto',
  backgroundColor = 'transparent',
  wireframes = false,
  gravity = 1,
  mouseConstraintStiffness = 0.2,
  fontSize = '1rem'
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const canvasContainerRef = useRef(null);

  // Start immediately if trigger is auto
  const [effectStarted, setEffectStarted] = useState(trigger === 'auto');

  useEffect(() => {
    if (!textRef.current) return;
    const words = text.split(' ');
    const newHTML = words
      .map(word => {
        const isHighlighted = highlightWords.some(hw => word.startsWith(hw));
        return `<span class="word ${isHighlighted ? highlightClass : ''}">${word}</span>`;
      })
      .join(' ');
    textRef.current.innerHTML = newHTML;
  }, [text, highlightWords, highlightClass]);

  useEffect(() => {
    // For auto trigger, already started in initial state
    if (trigger === 'auto') {
      console.log('FallingText: Auto trigger - effect already started');
      return;
    }
    // For scroll trigger
    else if (trigger === 'scroll' && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            console.log('FallingText: Scroll trigger activated');
            setEffectStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [trigger]);

  useEffect(() => {
    if (!effectStarted) return;

    console.log('FallingText: Physics engine starting...');

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;

    const containerRect = containerRef.current.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;

    console.log('FallingText: Container size:', width, 'x', height);

    if (width <= 0 || height <= 0) {
      console.warn('FallingText: Invalid container size');
      return;
    }

    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    const render = Render.create({
      element: canvasContainerRef.current,
      engine,
      options: {
        width,
        height,
        background: backgroundColor,
        wireframes
      }
    });

    const boundaryOptions = {
      isStatic: true,
      render: { fillStyle: 'transparent' }
    };
    const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions);
    const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions);

    const wordSpans = textRef.current.querySelectorAll('.word');
    const wordBodies = [...wordSpans].map(elem => {
      const rect = elem.getBoundingClientRect();

      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top + rect.height / 2;

      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        render: { fillStyle: 'transparent' },
        restitution: 1.2,  // Higher bounce for continuous movement
        frictionAir: 0.001,  // Less air friction for longer movement
        friction: 0.1
      });

      // Add initial velocity for auto-falling (reduced for slower fall)
      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 6,
        y: Math.random() * 3 + 2  // Slower downward velocity (2-5)
      });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.15);
      return { elem, body };
    });

    wordBodies.forEach(({ elem, body }) => {
      elem.style.position = 'absolute';
      elem.style.left = `${body.position.x - body.bounds.max.x + body.bounds.min.x / 2}px`;
      elem.style.top = `${body.position.y - body.bounds.max.y + body.bounds.min.y / 2}px`;
      elem.style.transform = 'none';
    });

    // Create mouse from the canvas element for proper coordinate mapping
    const mouse = Mouse.create(render.canvas);
    mouse.element.removeEventListener('mousewheel', mouse.mousewheel);
    mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false }
      }
    });

    // Ensure canvas can capture mouse events
    render.canvas.style.position = 'absolute';
    render.canvas.style.top = '0';
    render.canvas.style.left = '0';
    render.canvas.style.pointerEvents = 'auto';

    World.add(engine.world, [floor, leftWall, rightWall, ceiling, mouseConstraint, ...wordBodies.map(wb => wb.body)]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    const updateLoop = () => {
      wordBodies.forEach(({ body, elem }) => {
        const { x, y } = body.position;
        elem.style.left = `${x}px`;
        elem.style.top = `${y}px`;
        elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
      });
      Matter.Engine.update(engine);
      requestAnimationFrame(updateLoop);
    };
    updateLoop();

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas && canvasContainerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        canvasContainerRef.current.removeChild(render.canvas);
      }
      World.clear(engine.world);
      Engine.clear(engine);
    };
  }, [effectStarted, gravity, wireframes, backgroundColor, mouseConstraintStiffness]);

  const handleTrigger = () => {
    if (!effectStarted && (trigger === 'click' || trigger === 'hover')) {
      setEffectStarted(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`falling-text-container ${className}`}
      onClick={trigger === 'click' ? handleTrigger : undefined}
      onMouseEnter={trigger === 'hover' ? handleTrigger : undefined}
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        ref={textRef}
        className="falling-text-target"
        style={{
          fontSize: fontSize,
          lineHeight: 1.4,
          color: 'white'
        }}
      />
      <div
        ref={canvasContainerRef}
        className="falling-text-canvas"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export default FallingText;
