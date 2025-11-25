# 🚀 CARA TERMUDAH PUSH KE GITHUB

## ⚡ Quick Start (3 Langkah)

### 1️⃣ Buat Personal Access Token

1. Buka browser, login ke GitHub
2. Klik foto profil (kanan atas) → **Settings**
3. Scroll ke bawah → **Developer settings** (paling bawah)
4. **Personal access tokens** → **Tokens (classic)**
5. **Generate new token** → **Generate new token (classic)**
6. Isi form:
   - Note: `Antigravity Portfolio`
   - Expiration: `No expiration` (atau pilih durasi)
   - Select scopes: ✅ **repo** (centang semua di bawah repo)
7. Scroll ke bawah → **Generate token**
8. **COPY TOKEN** (simpan di notepad, token hanya muncul sekali!)

### 2️⃣ Jalankan Script

**Double-click:** `easy-push.bat`

Script akan tanya:
```
Your GitHub username: [ketik username Anda]
Your GitHub email: [ketik email Anda]
Repository URL: [paste URL repository]
```

**Repository URL** bisa didapat dari:
- GitHub → Your repository → Code (tombol hijau) → Copy HTTPS URL
- Contoh: `https://github.com/username/portfolio.git`

### 3️⃣ Authenticate

Pilih authentication method:
```
Choose authentication method:
1. Personal Access Token (Recommended)
2. GitHub Account (Browser)

Enter 1 or 2: 1
```

**Pilih 1**, lalu:
- Script akan push ke GitHub
- Saat diminta **password**, **PASTE TOKEN** yang tadi di-copy
- Enter
- Done! ✅

## 📸 Visual Guide

### Buat Token:
```
GitHub.com
  → Settings (klik foto profil)
    → Developer settings (paling bawah)
      → Personal access tokens
        → Tokens (classic)
          → Generate new token (classic)
            → Centang "repo"
              → Generate token
                → COPY TOKEN! 📋
```

### Get Repository URL:
```
GitHub.com
  → Your repository
    → Code (tombol hijau)
      → HTTPS
        → Copy URL 📋
```

## ⚠️ PENTING!

1. **Token adalah password** - Jangan share ke siapapun!
2. **Token hanya muncul sekali** - Copy dan simpan di tempat aman
3. **Jika lupa token** - Generate token baru
4. **Repository URL harus benar** - Copy dari GitHub

## 🔄 Update Selanjutnya

Setelah setup pertama kali, untuk push update:

```bash
git add .
git commit -m "Update: your message"
git push
```

Atau jalankan `easy-push.bat` lagi!

## ❌ Troubleshooting

### "Authentication failed"
→ Token salah atau expired
→ Generate token baru

### "Repository not found"
→ URL salah
→ Copy ulang dari GitHub

### "Permission denied"
→ Token tidak punya permission "repo"
→ Generate token baru dengan scope "repo"

## 🎉 Setelah Berhasil

1. ✅ Code Anda ada di GitHub
2. ✅ Bisa deploy ke Vercel/Netlify
3. ✅ Bisa share portfolio
4. ✅ Backup aman di cloud

---

**READY? Double-click `easy-push.bat` sekarang!** 🚀
