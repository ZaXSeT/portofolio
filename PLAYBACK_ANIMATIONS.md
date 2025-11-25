# 🎬 PLAYBACK ANIMATIONS - ABOUT SECTION

## Behavior Animasi

AboutSection menggunakan **reversible animations** seperti video playback:

### ⬇️ Scroll ke Bawah (Play Forward)
```
User scroll down
  → Section masuk viewport
  → Animasi PLAY (fade in, slide up)
  → Content muncul dengan smooth
```

### ⬆️ Scroll ke Atas (Rewind)
```
User scroll up
  → Section keluar viewport
  → Animasi REVERSE (fade out, slide down)
  → Content hilang dengan smooth
  → Seperti video di-rewind
```

## Implementation

```typescript
// Use once: false for reversible animations
const isInView = useInView(ref, { once: false, margin: '-100px' })

// Animate based on viewport
animate={isInView ? 'visible' : 'hidden'}
```

### Animation States:

**Hidden State** (saat keluar viewport):
- opacity: 0
- y: 50 (posisi bawah)
- scale: 0.8 (untuk cards)

**Visible State** (saat masuk viewport):
- opacity: 1
- y: 0 (posisi normal)
- scale: 1 (ukuran normal)

## Sections Affected:

1. **Header** - Title & description
2. **Personal Description** - Bio card
3. **Skills** - 3 skill cards dengan stagger
4. **Quick Info** - 4 info cards
5. **CTA Button** - Call to action

## Testing:

```bash
npm run dev
```

**Test Steps:**
1. Scroll down perlahan → Lihat animasi muncul
2. Scroll up perlahan → Lihat animasi reverse/hilang
3. Scroll down lagi → Animasi muncul lagi
4. Repeat → Infinite playback

## Result:

✅ Seperti video playback
✅ Smooth transitions
✅ Infinite replay
✅ Natural feel
