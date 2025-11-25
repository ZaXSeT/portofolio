# Projects Section Customization Guide

## How to Customize Your Projects Section

### 1. Add/Edit Projects
In `src/components/ProjectsSection.tsx`, find lines ~7-59 and update the projects array:

```tsx
const projects = [
  {
    id: 1,
    title: 'Your Project Name',  // Change this
    description: 'Project description...',  // Change this
    image: '/projects/yourimage.jpg',  // Add your image
    tags: ['React', 'Node.js', ...],  // Your tech stack
    color: 'from-blue-500 to-cyan-500',  // Gradient color
    link: 'https://your-project-url.com',  // Project URL
  },
  // Add more projects...
]
```

### 2. Add Project Images
1. Place your project screenshots in `public/projects/` folder
2. Recommended size: 800x600px or 16:9 aspect ratio
3. Format: JPG or PNG
4. Update the `image` path in the projects array

### 3. Customize Grid Layout
Change the grid columns (line ~108):

```tsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// Change lg:grid-cols-3 to:
// - lg:grid-cols-2 for 2 columns
// - lg:grid-cols-4 for 4 columns
```

### 4. Customize Hover Effects
Adjust the hover animation (lines ~116-122):

```tsx
whileHover={{
  scale: 1.05,  // Change scale amount (1.0 - 1.2)
  rotateY: 5,   // Change tilt angle (0 - 15)
  rotateX: 5,   // Change tilt angle (0 - 15)
  z: 50,        // Change depth (0 - 100)
}}
```

### 5. Change Animation Timing
Modify stagger delay (line ~69):

```tsx
transition: {
  staggerChildren: 0.15,  // Change delay between cards (0.1 - 0.3)
}
```

### 6. Customize Colors
Each project has its own gradient color:
- `from-blue-500 to-cyan-500` - Blue/Cyan
- `from-purple-500 to-pink-500` - Purple/Pink
- `from-green-500 to-emerald-500` - Green
- `from-orange-500 to-red-500` - Orange/Red
- `from-indigo-500 to-blue-500` - Indigo/Blue
- `from-teal-500 to-cyan-500` - Teal/Cyan

### 7. Adjust Card Height
Change image height (line ~139):

```tsx
<div className="relative h-56 overflow-hidden">
// Change h-56 to h-48, h-64, etc.
```

### 8. Modify Scroll Trigger Point
Adjust when animations trigger (line ~87):

```tsx
const isInView = useInView(ref, { once: true, margin: '-100px' })
// Change -100px to trigger earlier/later
```

## Features Included

✅ Responsive grid layout (1/2/3 columns)
✅ Project cards with images, titles, descriptions
✅ Technology tags with gradient colors
✅ Hover animations:
  - Scale effect (1.05x)
  - 3D tilt effect (rotateY & rotateX)
  - Shadow enhancement
  - Image zoom
  - Gradient border glow
✅ Scroll-triggered animations
✅ Staggered card appearance
✅ "View Project" button on hover
✅ "View All Projects" CTA button
✅ Dark mode support
✅ Fully responsive

## Animation Types Used

- **Scroll-triggered**: Cards animate when scrolled into view
- **Stagger**: Cards appear one after another
- **Scale**: Cards grow on hover
- **3D Tilt**: Cards rotate in 3D space on hover
- **Image Zoom**: Project images zoom on hover
- **Tag Pop-in**: Technology tags animate individually
- **Overlay Fade**: "View Project" button fades in on hover

## Tips

1. **Image Quality**: Use high-quality screenshots for best results
2. **Consistent Sizing**: Keep all project images the same aspect ratio
3. **Tag Limit**: Use 3-5 tags per project for best layout
4. **Description Length**: Keep descriptions concise (2-3 lines)
5. **Color Variety**: Use different gradient colors for visual interest
