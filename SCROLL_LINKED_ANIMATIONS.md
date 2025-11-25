# 🎬 SCROLL-LINKED ANIMATIONS

## Konsep

Animasi yang **terikat langsung dengan posisi scroll**, seperti video playback yang bisa maju/mundur sesuai scroll.

## Behavior

### ⬇️ Scroll ke Bawah (Forward)
```
User scroll down sedikit
  → Animasi maju sedikit (opacity 0 → 0.5, y: 50 → 25)
  
User scroll down lebih jauh
  → Animasi maju lebih jauh (opacity 0.5 → 1, y: 25 → 0)
  
User scroll down terus
  → Animasi TETAP di posisi akhir (opacity: 1, y: 0)
  → Section tetap visible, tidak hilang
```

### ⬆️ Scroll ke Atas (Reverse)
```
User scroll up sedikit
  → Animasi mundur sedikit (opacity 1 → 0.8, y: 0 → 10)
  
User scroll up lebih jauh
  → Animasi mundur lebih jauh (opacity 0.8 → 0.3, y: 10 → 30)
  
User scroll up sampai keluar viewport
  → Animasi kembali ke awal (opacity: 0, y: 50)
```

## Implementation

### 1. **useScroll Hook**
```typescript
const { scrollYProgress } = useScroll({
  target: elementRef,
  offset: ["start end", "end start"]
})
```

**Offset Explained:**
- `"start end"` = Mulai track saat element START menyentuh viewport END (bawah)
- `"end start"` = Berhenti track saat element END menyentuh viewport START (atas)
- Progress: 0 (element di bawah viewport) → 1 (element di atas viewport)

### 2. **useTransform Hook**
```typescript
const opacity = useTransform(
  scrollYProgress,
  [0, 0.3, 1],      // Input range (scroll progress)
  [0, 1, 1]         // Output range (opacity values)
)
```

**Transform Explained:**
- Progress 0 → 0.3: Opacity 0 → 1 (fade in)
- Progress 0.3 → 1: Opacity 1 → 1 (stay visible)
- Scroll up reverses automatically!

### 3. **Apply to Element**
```typescript
<motion.div
  style={{ opacity, y }}
  // Animasi otomatis mengikuti scroll
>
```

## AboutSection Structure

### Elements dengan Scroll Animations:

1. **Header** (Title + Description)
   - Opacity: 0 → 1 → 1
   - Y: 50px → 0 → 0
   - Progress: 0 → 0.3 → 1

2. **Bio Card**
   - Opacity: 0 → 1 → 1
   - Y: 50px → 0 → 0
   - Progress: 0 → 0.3 → 1

3. **Skills Cards** (3 cards dengan stagger)
   - Card 1: Progress 0 → 0.3 → 1
   - Card 2: Progress 0 → 0.4 → 1 (delay 0.1)
   - Card 3: Progress 0 → 0.5 → 1 (delay 0.2)
   - Stagger effect otomatis!

4. **Info Cards** (4 cards dengan stagger)
   - Card 1: Progress 0 → 0.3 → 1
   - Card 2: Progress 0 → 0.35 → 1 (delay 0.05)
   - Card 3: Progress 0 → 0.4 → 1 (delay 0.10)
   - Card 4: Progress 0 → 0.45 → 1 (delay 0.15)

5. **CTA Button**
   - Mengikuti Info section
   - Smooth fade in

## Advantages

✅ **Smooth & Responsive**
- Animasi mengikuti scroll pixel-by-pixel
- Tidak ada "jump" atau "snap"
- Natural feel

✅ **Automatic Reverse**
- Scroll up = animasi mundur otomatis
- Tidak perlu logic tambahan
- Perfect playback effect

✅ **Performance**
- GPU-accelerated (opacity, transform)
- Smooth 60fps
- No jank

✅ **Flexible**
- Mudah adjust timing (ubah range)
- Mudah tambah stagger
- Mudah customize

## Customization

### Adjust Animation Speed
```typescript
// Faster (animasi selesai lebih cepat)
const opacity = useTransform(progress, [0, 0.2, 1], [0, 1, 1])

// Slower (animasi lebih smooth)
const opacity = useTransform(progress, [0, 0.5, 1], [0, 1, 1])
```

### Adjust Start Position
```typescript
// Start dari lebih jauh
const y = useTransform(progress, [0, 0.3, 1], [100, 0, 0])

// Start dari lebih dekat
const y = useTransform(progress, [0, 0.3, 1], [20, 0, 0])
```

### Add More Properties
```typescript
const scale = useTransform(progress, [0, 0.3, 1], [0.8, 1, 1])
const rotate = useTransform(progress, [0, 0.3, 1], [-10, 0, 0])

<motion.div style={{ opacity, y, scale, rotate }}>
```

## Testing

```bash
npm run dev
```

**Test Steps:**
1. Scroll down perlahan → Lihat animasi maju smooth
2. Scroll down cepat → Animasi tetap smooth
3. Scroll up perlahan → Lihat animasi mundur smooth
4. Scroll up/down berulang → Animasi responsif

**Expected Result:**
- Animasi seperti video playback
- Smooth forward/reverse
- Responsive terhadap scroll speed
- No lag, no jank

## Performance Tips

1. **Use GPU Properties Only**
   - ✅ opacity, transform (x, y, scale, rotate)
   - ❌ width, height, margin, padding

2. **Limit Number of Animated Elements**
   - Max 10-15 elements per section
   - Use stagger untuk efficiency

3. **Use `will-change` for Complex Animations**
   ```css
   .animated-element {
     will-change: transform, opacity;
   }
   ```

## Browser Support

✅ Chrome, Edge, Safari, Firefox (latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)
⚠️ IE11 not supported (uses modern APIs)

---

**AboutSection sekarang menggunakan scroll-linked animations yang smooth dan responsive!** 🎬✨
