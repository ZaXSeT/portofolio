# About Section Customization Guide

## How to Customize Your About Section

### 1. Update Personal Description
In `src/components/AboutSection.tsx`, find lines ~100-115 and update your personal story:

```tsx
<p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
  Write your introduction here...  {/* Change this */}
</p>
<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
  Add more about your interests and hobbies...  {/* Change this */}
</p>
```

### 2. Update Skills
Find lines ~25-45 and customize your skills:

```tsx
const skills = [
  {
    category: 'Frontend',  // Change category name
    items: ['React', 'Next.js', ...],  // Add/remove your skills
    icon: '🎨',  // Change emoji
    color: 'from-blue-500 to-cyan-500',  // Change gradient colors
  },
  // Add more skill categories...
]
```

### 3. Update Personal Info
Find lines ~48-53 and update your information:

```tsx
const personalInfo = [
  { label: 'Location', value: 'Your City, Country', icon: '📍' },
  { label: 'Email', value: 'your.email@example.com', icon: '✉️' },
  { label: 'Experience', value: '3+ Years', icon: '💼' },
  { label: 'Education', value: 'Computer Science', icon: '🎓' },
]
```

### 4. Customize Colors
The component uses gradient colors. To change:
- Main gradient: `from-blue-600 to-purple-600`
- Skill badges: Each category has its own gradient (lines ~26-44)
- Background cards: `from-blue-50 to-indigo-50`

### 5. Adjust Animation Timing
To change animation speeds, modify the transition values:

```tsx
transition={{ duration: 0.6, delay: 0.2 }}  // Adjust duration and delay
```

### 6. Change Scroll Trigger Point
Adjust when animations trigger by changing the margin in useInView:

```tsx
const isInView = useInView(ref, { once: true, margin: '-100px' })
// Change -100px to trigger earlier/later
```

## Features Included

✅ Scroll-triggered animations (fade-in, slide-in, scale)
✅ Personal description card
✅ Skills organized by category with animated badges
✅ Personal info cards with icons
✅ Hover effects on all cards
✅ Staggered animations for smooth appearance
✅ Fully responsive design
✅ Dark mode support
✅ Call-to-action button

## Animation Types Used

- **Fade-in**: Elements appear with opacity transition
- **Slide-in**: Elements slide up from below
- **Scale**: Cards grow from smaller size
- **Stagger**: Children animate one after another
- **Hover**: Cards lift and scale on mouse over
