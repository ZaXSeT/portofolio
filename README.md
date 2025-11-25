# Portfolio Website

A modern, minimalist portfolio website built with Next.js, TypeScript, and Framer Motion featuring scroll-linked animations.

## ✨ Features

- **Scroll-Linked Animations** - Smooth playback animations that respond to scroll position
- **Pure Black & White Theme** - Minimalist monochrome design
- **Smooth Navigation** - All navigation uses smooth scroll (no page reloads)
- **Responsive Design** - Optimized for all devices
- **Performance Optimized** - GPU-accelerated animations, 60fps
- **TypeScript** - Fully typed for better development experience

## 🎬 Animation System

This portfolio uses a unique scroll-linked animation system where:
- Animations play forward when scrolling down
- Animations reverse when scrolling up
- Content stays visible when scrolling past sections
- Hover animations are separated from scroll animations to prevent conflicts

See [SCROLL_LINKED_ANIMATIONS.md](./SCROLL_LINKED_ANIMATIONS.md) for detailed documentation.

## 🚀 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Deployment:** Vercel (recommended)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy!

## 📁 Project Structure

```
introduction/
├── src/
│   ├── components/      # React components
│   │   ├── Hero.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── TypographySection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── pages/          # Next.js pages
│   │   ├── _app.tsx
│   │   └── index.tsx
│   ├── styles/         # Global styles
│   │   └── globals.css
│   └── utils/          # Utility functions
│       └── hooks.ts
├── public/             # Static assets
├── SCROLL_LINKED_ANIMATIONS.md
└── README.md
```

## 🎨 Customization

### Update Content

1. **Personal Info:** Edit `src/components/Hero.tsx`
2. **About Section:** Edit `src/components/AboutSection.tsx`
3. **Projects:** Edit `src/components/ProjectsSection.tsx`
4. **Contact Info:** Edit `src/components/ContactSection.tsx`

### Change Theme

The project uses a pure black & white theme. To customize:
- Edit `src/styles/globals.css` for global styles
- Modify component-level styles in respective `.tsx` files

### Adjust Animations

Animation timings can be adjusted in each component:
- Scroll progress ranges: `[0, 0.3, 1]`
- Animation values: `[0, 1, 1]` (opacity), `[50, 0, 0]` (Y position)
- Stagger delays: `index * 0.1`

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## ⭐ Show your support

Give a ⭐️ if you like this project!
