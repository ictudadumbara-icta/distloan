import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyApn9F_EyiuF9n-GpM0HhR1GD6wklmzoYA",
  authDomain: "distloan-7d6e4.firebaseapp.com",
  projectId: "distloan-7d6e4",
  storageBucket: "distloan-7d6e4.firebasestorage.app",
  messagingSenderId: "1031093333182",
  appId: "1:1031093333182:web:89e26737e873bad8ce82ef"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// පරණ (9 ඉලක්කම් + V/X) සහ අලුත් (12 ඉලක්කම්) NIC දෙකම එකම ආකාරයකට හරවයි
export function normalizeNic(raw) {
  const s = (raw || "").trim().toUpperCase().replace(/\s+/g, "");
  if (/^\d{9}[VX]$/.test(s)) return "19" + s.slice(0, 5) + "0" + s.slice(5, 9);
  if (/^\d{12}$/.test(s)) return s;
  return null;
}

// NIC එක කෙලින්ම ගබඩා නොකර hash එකක් ලෙස පමණක් පොදු ලිස්ට් එකේ තබයි
export async function hashNic(nic) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", enc.encode(nic), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt: enc.encode("udadumbara-distloan-v1"), iterations: 100000, hash: "SHA-256" },
    key, 256);
  return [...new Uint8Array(bits)].map(b => b.toString(16).padStart(2, "0")).join("");
}

export const STYLE = `
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@400;600;700&display=swap');
*{box-sizing:border-box}
body{margin:0;font-family:'Noto Sans Sinhala',system-ui,sans-serif;background:#f3f6f4;color:#1b2a22;line-height:1.6}
header{background:#14532d;color:#fff;padding:16px 20px}
header h1{margin:0;font-size:1.15rem}
header p{margin:2px 0 0;font-size:.85rem;opacity:.85}
main{max-width:720px;margin:0 auto;padding:18px}
.card{background:#fff;border-radius:12px;padding:18px;margin-bottom:16px;box-shadow:0 1px 3px rgba(0,0,0,.08)}
input,button{font:inherit}
input{width:100%;padding:11px 12px;border:1px solid #b8c7bd;border-radius:8px;margin:6px 0 12px}
button{background:#15803d;color:#fff;border:0;padding:10px 16px;border-radius:8px;cursor:pointer}
button:hover{background:#166534}
button.sec{background:#e5ece7;color:#14532d}
button.warn{background:#b91c1c}
button.small{padding:5px 10px;font-size:.85rem}
.msg{padding:10px 12px;border-radius:8px;margin-top:10px}
.err{background:#fee2e2;color:#991b1b}.ok{background:#dcfce7;color:#14532d}
.big{font-size:2.4rem;font-weight:700;color:#15803d;margin:0}
ol.names{padding-left:1.6rem;margin:8px 0}
ol.names li{padding:2px 0}
.hidden{display:none}
.tabs{display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap}
.tabs button{background:#e5ece7;color:#14532d}.tabs button.on{background:#15803d;color:#fff}
table{width:100%;border-collapse:collapse;font-size:.92rem}
td,th{padding:8px 6px;border-bottom:1px solid #e3e9e5;text-align:left;vertical-align:middle}
.row-actions{display:flex;gap:6px;flex-wrap:wrap}
.muted{color:#5c6f63;font-size:.85rem}
`;
