# Hero Component Customization Guide

## How to Customize Your Hero Section

### 1. Update Your Name
In `src/components/Hero.tsx`, find line ~125 and replace "Your Name" with your actual name:

```tsx
<span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
  Your Name Here  {/* Change this */}
</span>
```

### 2. Update Your Tagline
Find lines ~135-140 and customize your professional title and description:

```tsx
<motion.p>
  Your Professional Title  {/* Change this */}
  <br />
  <span>
    Your description or motto  {/* Change this */}
  </span>
</motion.p>
```

### 3. Replace Profile Photo
Replace the file `public/profile.jpg` with your own professional photo.
- Recommended size: 800x800px or larger
- Format: JPG or PNG
- Square aspect ratio works best

### 4. Update Social Links
Find lines ~165-175 and update the social media links:

```tsx
{['GitHub', 'LinkedIn', 'Twitter'].map((social, index) => (
  <motion.a
    href={`https://your-social-link.com`}  {/* Update URLs */}
  >
```

### 5. Customize Colors
The component uses a gradient color scheme. To change colors, look for:
- `from-blue-600 to-indigo-600` - Main gradient
- `bg-blue-600` - Primary color
- Modify these throughout the component for your brand colors

### 6. Adjust Parallax Sensitivity
In lines ~15-16, adjust the parallax range:

```tsx
const parallaxX = useTransform(mouseX, [0, 1], [-20, 20])  // Change -20, 20 values
const parallaxY = useTransform(mouseY, [0, 1], [-20, 20])  // Increase for more movement
```

## Features Included

✅ Smooth fade-in and slide-in animations
✅ Cursor-responsive parallax background
✅ Profile photo with gradient border
✅ Animated "Available for Work" badge
✅ CTA buttons with hover effects
✅ Social media links
✅ Scroll indicator
✅ Fully responsive design
✅ Dark mode support
