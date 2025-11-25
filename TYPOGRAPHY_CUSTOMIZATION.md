# Typography Section Customization Guide

## How to Customize Your Typography Section

### 1. Update Hero Typography (Section 1)
In `src/components/TypographySection.tsx`, find lines ~93-103:

```tsx
<h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none mb-6">
  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
    Think Big.  {/* Change this */}
  </span>
</h1>
<p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 font-light max-w-4xl mx-auto leading-relaxed">
  Great design starts with bold ideas and beautiful typography.  {/* Change this */}
</p>
```

### 2. Update Statement Typography (Section 2)
Find lines ~109-119:

```tsx
<h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
  Typography is the voice of your design.  {/* Change this */}
</h2>
<p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400">
  Your message here...  {/* Change this */}
</p>
```

### 3. Update Split Layout (Section 3)
Find lines ~125-145:

```tsx
<h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
  Clarity meets creativity.  {/* Change this */}
</h3>
<p className="text-base md:text-lg lg:text-xl">
  Your description here...  {/* Change this */}
</p>
```

### 4. Update Staggered Words (Section 4)
Find lines ~158-160 to change the three words:

```tsx
{['Design.', 'Create.', 'Inspire.'].map((word, index) => (
  // Change to your own words: ['Your.', 'Words.', 'Here.']
```

### 5. Update Quote (Section 5)
Find lines ~179-186:

```tsx
<p className="text-3xl md:text-4xl lg:text-5xl font-medium">
  "The details are not the details. They make the design."  {/* Change quote */}
</p>
<footer className="text-lg md:text-xl">
  — Charles Eames  {/* Change author */}
</footer>
```

### 6. Update Stats/Numbers (Section 6)
Find lines ~195-199:

```tsx
{[
  { number: '100+', label: 'Projects Completed' },  // Change numbers
  { number: '50+', label: 'Happy Clients' },
  { number: '5+', label: 'Years Experience' },
].map((stat, index) => (
```

### 7. Update Call to Action (Section 7)
Find lines ~213-222:

```tsx
<h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
  Ready to make an impact?  {/* Change this */}
</h2>
<p className="text-xl md:text-2xl">
  Your CTA message here...  {/* Change this */}
</p>
```

## Customizing Font Sizes

### Responsive Font Sizes
The component uses Tailwind's responsive classes:

```tsx
text-6xl md:text-7xl lg:text-8xl xl:text-9xl
```

- `text-6xl` - Mobile (default)
- `md:text-7xl` - Tablet (768px+)
- `lg:text-8xl` - Desktop (1024px+)
- `xl:text-9xl` - Large Desktop (1280px+)

### Font Weights
- `font-light` - 300
- `font-normal` - 400
- `font-medium` - 500
- `font-semibold` - 600
- `font-bold` - 700
- `font-extrabold` - 800
- `font-black` - 900

## Customizing Colors

### Gradient Text
Change gradient colors:

```tsx
bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
// Change to your colors:
bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600
```

### Text Colors
- `text-gray-900 dark:text-white` - Primary text
- `text-gray-600 dark:text-gray-400` - Secondary text
- `text-gray-200 dark:text-gray-800` - Decorative text

## Customizing Animations

### Animation Variants
The component uses several animation types:

1. **fadeInUp** - Fade in while sliding up
2. **scaleUp** - Fade in while scaling up
3. **slideInLeft** - Slide in from left
4. **slideInRight** - Slide in from right
5. **staggerContainer** - Stagger children animations

### Adjust Animation Speed
Change duration in variants (lines ~7-60):

```tsx
transition: {
  duration: 0.8,  // Change to 0.5 for faster, 1.2 for slower
  ease: 'easeOut',
}
```

### Adjust Scroll Trigger
Change when animations trigger (lines ~73-77):

```tsx
const isInView1 = useInView(ref1, { once: true, margin: '-100px' })
// Change -100px to:
// - '-200px' for later trigger
// - '0px' for immediate trigger
// - '100px' for earlier trigger
```

## Customizing Spacing

### Section Spacing
- `mb-32` - Margin bottom between sections (8rem / 128px)
- Change to `mb-16`, `mb-24`, `mb-40` for different spacing

### Line Height
- `leading-none` - 1
- `leading-tight` - 1.25
- `leading-relaxed` - 1.625

## Features Included

✅ 7 Different typography sections
✅ Large, bold, impactful text
✅ Modern font hierarchy
✅ Proper line height and spacing
✅ Scroll-triggered animations
✅ Multiple animation types (fade, slide, scale)
✅ Fully responsive (mobile, tablet, desktop)
✅ Dark mode support
✅ Gradient text effects
✅ Quote section with border
✅ Stats/numbers display
✅ Call-to-action section
✅ Easy to customize placeholder text

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: > 1280px

## Tips for Best Results

1. **Keep it Simple**: Don't use too many different font sizes
2. **Hierarchy**: Maintain clear visual hierarchy
3. **Contrast**: Ensure good contrast for readability
4. **Spacing**: Use generous whitespace
5. **Consistency**: Keep font weights consistent
6. **Mobile First**: Test on mobile devices
7. **Performance**: Large text renders well on all screens
