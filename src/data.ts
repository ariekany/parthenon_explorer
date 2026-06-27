import { ModeData, HotspotData, LanguagePack } from "./types";

export const modesData: Record<string, ModeData> = {
  rebuilt: {
    id: "rebuilt",
    label_id: "Masa Kejayaan",
    label_en: "Golden Age Mode",
    title_id: "Rekonstruksi Parthenon Utuh",
    title_en: "The Parthenon Rebuilt",
    description_id: "Bayangkan kuil ini ketika bentuknya masih utuh dan warnanya membantu menceritakan kejayaan Athena kuno pada abad ke-5 SM.",
    description_en: "Imagine this temple when its form was fully intact and colored reliefs helped unfold the glory of ancient Athens in the 5th century BC.",
    previewText: "Rekonstruksi bentuk kuil saat masih utuh",
    src: "https://sketchfab.com/models/4552d90409924583b1fadfc9953134cb/embed",
    previewSrc: "https://sketchfab.com/models/4552d90409924583b1fadfc9953134cb/embed?autostart=1&ui_controls=0&ui_infos=0&ui_watermark=0",
    statEra: "447 SM",
    statFocus: "Utuh",
    statMode: "01",
    creditHtml: `<strong>Kredit model:</strong> <a href="https://sketchfab.com/3d-models/the-parthenon-rebuilt-4552d90409924583b1fadfc9953134cb" target="_blank" rel="noopener noreferrer" className="underline font-bold">The Parthenon Rebuilt</a> oleh <a href="https://sketchfab.com/mdzhang" target="_blank" rel="noopener noreferrer" className="underline font-bold">Myles Zhang</a> di Sketchfab.`
  },
  ruins: {
    id: "ruins",
    label_id: "Reruntuhan Saat Ini",
    label_en: "Present Ruins Mode",
    title_id: "Reruntuhan Parthenon Modern",
    title_en: "The Modern Parthenon Ruins",
    description_id: "Bandingkan dengan kondisi reruntuhan agar Anda melihat bagian yang hilang, struktur yang tersisa, dan pengaruh waktu berabad-abad.",
    description_en: "Compare with the current state of ruins to see the missing structure fragments, surviving columns, and the toll of long centuries.",
    previewText: "Kondisi reruntuhan untuk membaca bagian yang hilang",
    src: "https://sketchfab.com/models/0eca9f090252466aac691d0e5d449323/embed",
    previewSrc: "https://sketchfab.com/models/0eca9f090252466aac691d0e5d449323/embed?autostart=1&ui_controls=0&ui_infos=0&ui_watermark=0",
    statEra: "Kini",
    statFocus: "Reruntuhan",
    statMode: "02",
    creditHtml: `<strong>Kredit model:</strong> <a href="https://sketchfab.com/3d-models/cartoon-low-poly-greece-parthenon-landmark-0eca9f090252466aac691d0e5d449323" target="_blank" rel="noopener noreferrer" className="underline font-bold">Cartoon Low Poly Greece Parthenon</a> oleh <a href="https://sketchfab.com/antonmoek" target="_blank" rel="noopener noreferrer" className="underline font-bold">antonmoek</a> di Sketchfab.`
  }
};

export const hotspotsData: HotspotData[] = [
  {
    id: "columns",
    number: "01",
    title_id: "Kolom Dorik",
    title_en: "Doric Columns",
    description_id: "Kolom kokoh dengan alur vertikal khas arsitektur Klasik Yunani yang memberikan ilusi kelurusan simetris sempurna.",
    description_en: "Robust columns detailed with vertical fluting, a signature of Classical Greek architecture that offers a perfect vertical illusion."
  },
  {
    id: "pediment",
    number: "02",
    title_id: "Pedimen Segitiga",
    title_en: "Triangular Pediment",
    description_id: "Area atap berbentuk segitiga berisikan ukiran mitologis menceritakan kelahiran Athena dan perselisihannya dengan Poseidon.",
    description_en: "Triangular gable area housing mythological carvings depicting Athena's birth and her epic contest against Poseidon."
  },
  {
    id: "ar",
    number: "03",
    title_id: "Tampilan AR",
    title_en: "AR Web Viewport",
    description_id: "Ketuk ikon kacamata AR di sudut kanan bawah penampil 3D Sketchfab untuk menempatkan kuil di ruang nyata Anda.",
    description_en: "Tap the WebXR AR headset icon in Sketchfab's bottom right menu to project the temple into your physical environment."
  }
];

export const languages: Record<string, LanguagePack> = {
  id: {
    eyebrow: "Eksplorasi Sejarah melalui AR",
    heroTitle: "Jelajah The Parthenon",
    heroDesc: "Bandingkan masa kejayaan dan reruntuhan Parthenon melalui model 3D interaktif. Pilih perspektif waktu, buka penampil interaktif.",
    btnOpenViewer: "Buka Penampil 3D",
    btnCompareModes: "Bandingkan Mode",
    summaryLabel: "Status Sistem",
    summaryMeta: "2 Model // 3D Viewer // AR Ready",
    activeModeLabel: "Mode Aktif",
    scanlineLabel: "",
    statEraLabel: "SM konstruksi dimulai",
    statFocusLabel: "Fokus visual",
    statModeLabel: "Mode aktif",
    perspectiveLabel: "Pilih Perspektif",
    sectionTitle: "Dua Waktu, Satu Monumen",
    tagsLabel: "Teknologi & Standar",
    arBadge: "AR tersedia langsung dari viewer",
    hotspotsTitle: "Titik Fokus",
    tipText: "Muhammad Arief Furqany",
    footerProject: "The Parthenon",
    languageLabel: "Ganti Bahasa"
  },
  en: {
    eyebrow: "WebAR Historical Exploration",
    heroTitle: "Explore The Parthenon",
    heroDesc: "Compare the peak era and current ruins of the Parthenon through interactive 3D models. Choose a perspective, launch the custom viewer..",
    btnOpenViewer: "Open 3D Viewer",
    btnCompareModes: "Compare Modes",
    summaryLabel: "System Status",
    summaryMeta: "2 Models // 3D Viewer // AR Ready",
    activeModeLabel: "Active Mode",
    scanlineLabel: "",
    statEraLabel: "BC Construction Spark",
    statFocusLabel: "Visual Focus",
    statModeLabel: "Current Mode",
    perspectiveLabel: "Choose Perspective",
    sectionTitle: "Two Eras, One Monument",
    tagsLabel: "Tech & Standards",
    arBadge: "AR is ready inside the viewer",
    hotspotsTitle: "Hotspots",
    tipText: "Muhammad Arief Furqany",
    footerProject: "The Parthenon",
    languageLabel: "Switch Language"
  }
};
