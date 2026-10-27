# ආපදා ණය පොරොත්තු ලේඛනය - උඩදුම්බර ප්‍රා.ලේ.කාර්යාලය

ගොනු:
- `index.html`  : අයදුම්කරු පිටුව (QR එකෙන් විවෘත වන්නේ මේකයි)
- `admin.html`  : පරිපාලක පිටුව (ලොගින් අවශ්‍යයි)
- `common.js`   : Firebase config සහ NIC hash කිරීම
- `firestore.rules` : Firestore ආරක්ෂණ නීති

## පියවර

### 1. Firestore rules
Firebase console → Firestore Database → **Rules** → `firestore.rules` හි අන්තර්ගතය paste කරන්න.
`ADMIN_EMAIL_HERE` වෙනුවට Authentication හි ඔබ හදපු පරිපාලක ඊමේල් එක දමන්න (උදා: `'admin@udadumbara.lk'`). ඊට පසු **Publish**.

### 2. අලුත් පරිශීලකයින් හැදීම වැළැක්වීම (වැදගත්)
Firebase console → Authentication → **Settings** → **User actions** → "Enable create (sign-up)" **අක්‍රිය** කරන්න.
(එසේ නොකළොත් තව අයෙකුට ගිණුමක් හදාගත හැක. rules මගින් ඔවුන්ට දත්ත කියවීමට ඉඩ නොදෙතත්, අක්‍රිය කිරීම වඩා හොඳයි.)

### 3. GitHub Pages
1. GitHub හි අලුත් repository එකක් හදන්න (උදා: `distloan`).
2. `index.html`, `admin.html`, `common.js`, `README.md` upload කරන්න. (`firestore.rules` ඕනෑ නම් තබාගන්න.)
3. Repository → **Settings → Pages** → Branch: `main`, folder: `/ (root)` → Save.
4. විනාඩියකින් පමණ `https://<ඔබේ-username>.github.io/distloan/` ලිපිනයෙන් සයිටුව ක්‍රියාත්මක වේ.
5. Firebase console → Authentication → Settings → **Authorized domains** → `<ඔබේ-username>.github.io` එකතු කරන්න.

### 4. QR කේතය
`admin.html` ට ලොගින් වී **QR කේතය** බොත්තම ඔබා, ලැබෙන QR එක print කරන්න.

## පරිපාලක මුරපදය
මුරපදය කේතය තුළ නැත. Firebase Authentication හි පමණක් ඇත. වෙනස් කිරීමට console එකෙන් user ගේ password reset කරන්න.
