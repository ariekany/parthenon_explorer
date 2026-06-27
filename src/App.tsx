import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Compass, 
  Layers, 
  Check, 
  Moon, 
  Sun, 
  Activity, 
  RotateCcw, 
  Eye, 
  BookOpen, 
  Smartphone, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  Info,
  Globe,
  Paintbrush,
  Wrench,
  Camera,
  QrCode,
  HelpCircle,
  Copy
} from "lucide-react";
import { modesData, hotspotsData, languages } from "./data";
import { ModeData } from "./types";

export default function App() {
  // State variables
  const [activeMode, setActiveMode] = useState<string>("rebuilt");
  const [activeLang, setActiveLang] = useState<string>("id");
  const [isDark, setIsDark] = useState<boolean>(false);
  const [activeHotspot, setActiveHotspot] = useState<string>("columns");
  const [funFactIndex, setFunFactIndex] = useState<number>(0);
  const [isSwappingModel, setIsSwappingModel] = useState<boolean>(false);
  const [restoreColumns, setRestoreColumns] = useState<boolean>(true);
  const [restorePediment, setRestorePediment] = useState<boolean>(true);
  const [restoreColors, setRestoreColors] = useState<boolean>(true);
  const [selectedQuizOpt, setSelectedQuizOpt] = useState<Record<string, number | null>>({
    columns: null,
    pediment: null,
    ar: null
  });
  const [selectedCapital, setSelectedCapital] = useState<"doric" | "ionic" | "corinthian">("doric");
  const [selectedPedimentTab, setSelectedPedimentTab] = useState<"myth" | "replica" | "artists">("myth");
  const [selectedFriezeTab, setSelectedFriezeTab] = useState<"motif" | "symbolism" | "preservation">("motif");
  const [selectedAthenaTab, setSelectedAthenaTab] = useState<"statue" | "materials" | "nashville_statue">("statue");
  const [selectedAntefixTab, setSelectedAntefixTab] = useState<"design" | "function" | "reconstruction">("design");
  const [selectedSeleneTab, setSelectedSeleneTab] = useState<"history" | "anatomy" | "reconstruction">("history");
  const [selectedSculpture, setSelectedSculpture] = useState<"pediment" | "frieze" | "athena" | "antefix" | "selene_horse">("pediment");

  // AR Marker Hub state variables
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [simulatedHover, setSimulatedHover] = useState<boolean>(false);
  const [isMarkerZoomed, setIsMarkerZoomed] = useState<boolean>(false);
  const [hiroMarkerUrl, setHiroMarkerUrl] = useState<string>("https://upload.wikimedia.org/wikipedia/commons/4/48/Hiro_marker_ARjs.png");

  const handleHiroError = () => {
    if (hiroMarkerUrl === "https://upload.wikimedia.org/wikipedia/commons/4/48/Hiro_marker_ARjs.png") {
      setHiroMarkerUrl("https://cdn.jsdelivr.net/gh/AR-js-org/AR.js@master/data/images/HIRO.png");
    } else if (hiroMarkerUrl === "https://cdn.jsdelivr.net/gh/AR-js-org/AR.js@master/data/images/HIRO.png") {
      setHiroMarkerUrl("https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/HIRO.png");
    }
  };

  // Localized Athena Parthenos data
  const athenaSectionData = {
    statue: {
      title_id: "Patung Athena Parthenos",
      title_en: "The Colossus of Athena Parthenos",
      status_id: "Ikon Spiritual Utama",
      status_en: "Primary Cult Statue",
      desc_id: "Athena Parthenos adalah patung kultus emas-gading raksasa dewi Athena setinggi 11,5 meter (13 meter dengan dasar pilar) yang dibuat oleh pematung agung Phidias pada tahun 438 SM. Diposisikan megah di ruang utama dalam (cella) Parthenon, patung ini menggambarkan sang dewi dalam mode kemenangan setelah perang Persia, memegang pelindung bersisik (aegis), dewi Nike (kemenangan) di tangan kanannya, dan perisai berukir mitos raksasa di tangan kirinya.",
      desc_en: "Athena Parthenos was a colossal gold-and-ivory (chryselephantine) cult statue of the patron goddess Athena, standing nearly 38 feet tall (42 feet with base coordinates). Sculpted by the legendary master craftsman Phidias and dedicated in 438 BC, this monumental centerpiece stood proudly within the inner sanctuary (cella) of the Parthenon. She is depicted clad in armor after victory, holding a maiden Victory (Nike) in her right hand, and a relief-carved shield depicting ancient wars in her left.",
      facts_id: [
        "Menghadap langsung ke timur untuk menangkap cahaya matahari terbit.",
        "Ular besar Erichthonius melingkar dengan waspada di samping perisainya.",
        "Helm pelindungnya dihiasi oleh tiga figur mitologi Sphinx dan Griffin."
      ],
      facts_en: [
        "Positioned facing due East so that the morning sunrise fully illuminated her golden armor.",
        "The sacred serpent Erichthonius is coiled up protectively near her massive shield.",
        "Her ornate helmet features highly detailed crests flanked with winged Griffins and a central Sphinx."
      ]
    },
    materials: {
      title_id: "Teknik Krisgading (Chryselephantine)",
      title_en: "The Chryselephantine Masterwork",
      status_id: "Seni Pahat Emas & Gading",
      status_en: "Gold & Ivory Sculpting",
      desc_id: "Patung asli Phidias adalah mahakarya teknik 'chryselephantine' (dari kata Yunani chryso: emas, dan elephantas: gading). Struktur dalamnya terbuat dari kayu jati, yang kemudian dilapisi kulit gading halus untuk bagian tubuh luar, serta dilapisi 1.100 kilogram emas murni lepasan (termasuk pada jubah dan pelindung). Emas ini sengaja dirancang agar bisa dilepas pasang untuk digunakan sebagai cadangan kas darurat darurat negara kala perang.",
      desc_en: "Phidias implemented the ultra-exclusive 'chryselephantine' technique (derived from the Greek terms for gold and ivory). Built with a strong timber interlocking core, the sculpture was overlaid with finely polished sheet-ivory plates representing soft goddess flesh, and adorned with over 1,150 kilograms (2,500 lbs) of pure removable gold sheets. This massive treasury-reserve was engineered to be fully stripped and melted down in times of extreme city-state emergency.",
      facts_id: [
        "Kolam air dangkal di depan patung sengaja dibuat untuk menjaga kelembapan udara agar gading tidak retak.",
        "Total nilai emas yang digunakan melebihi seluruh biaya konstruksi fisik bangunan Parthenon.",
        "Menjadi pusat cadangan devisa paling aman bagi kekaisaran liga Delos."
      ],
      facts_en: [
        "A shallow reflecting pool of water stood in front to maintain high humidity so that the ivory wouldn't crack.",
        "The overall cost of the high-grade pure gold exceeded the cost of building the entire Parthenon shell itself.",
        "Served as the ultimate secure financial reservoir storage system for the Delian League's wealth."
      ]
    },
    nashville_statue: {
      title_id: "Rekonstruksi Alan LeQuire",
      title_en: "Alan LeQuire's Modern Wonder",
      status_id: "Rekonstruksi Modern",
      status_en: "Modern Replication",
      desc_id: "Pada tahun 1990, pematung Nashville Alan LeQuire meresmikan rekonstruksi berskala penuh (1:1) patung Athena Parthenos di dalam replika Parthenon Nashville setelah 8 tahun pengerjaan gigih. Dibuat menggunakan struktur rangka baja berkekuatan tinggi, fiberglass, dan plaster gipsum, patung raksasa ini kemudian dilapisi dengan lebih dari 23 karat lembaran emas murni yang disepuh tipis pada tahun 2002 untuk menyamakan nuansa kemegahan aslinya.",
      desc_en: "In 1990, Nashville native sculptor Alan LeQuire unveiled a breathtaking 1:1 full-scale physical replica of the Athena Parthenos statue inside the Nashville Parthenon after eight years of intense modeling. Built using structural steel frames, fiberglass, and gypsum plaster, the gigantic sculpture was beautifully gilded in 2002 with over 23.75-karat pure gold leaves to recreate Phidias' original majestic glow.",
      facts_id: [
        "Patung dalam ruangan terbesar di seluruh belahan bumi bagian barat.",
        "Pengerjaannya membutuhkan detail penelitian lukisan kuno dan patung kecil Varvakeion.",
        "Replika dewi Nike di tangan kanan Athena sendiri setinggi 1,8 meter (menyamai tinggi manusia dewasa)."
      ],
      facts_en: [
        "Stands proud as the largest indoor sculpture in the entire Western Hemisphere.",
        "Modeled by cross-referencing Roman marble copies, notably the small-scale Varvakeion Athena.",
        "The figure of Nike in her outstretched right palm is itself 6 feet tall—the size of an adult human."
      ]
    }
  };

  // Localized Parthenon Frieze data
  const friezeSectionData = {
    motif: {
      title_id: "Prosesi Akbar Panathenaic",
      title_en: "Panathenaic Procession",
      status_id: "Komposisi Relief Utama",
      status_en: "Primary Relief Composition",
      desc_id: "Friz (relief dinding atas) Parthenon menceritakan prosesi perayaan festival Panathenaic yang megah, sebuah upacara sakral memperingati ulang tahun dewi Athena. Relief marmer berkualitas tinggi ini (terutama Blok V pada friz timur) mengukir kehidupan nyata warga Athena: barisan penunggang kuda yang gagah berani, pembawa sesaji, pemusik, sesepuh kota, serta perkumpulan para dewa Olimpus yang duduk tenang menyaksikan pengabdian manusia.",
      desc_en: "The Parthenon frieze features a stylized depiction of the grand Panathenaic procession, a highly celebrated sacred festival held in honor of the birthday of the goddess Athena. This exceptional marble relief masterwork (notably Block V from the East frieze) beautifully records human citizens alongside divine presence: majestic cavalry riders rearing their steeds, maiden offering-bearers, musicians, respected civic elders, and the Olympian assembly gazing upon the human celebration.",
      facts_id: [
        "Relief ini membentang sepanjang 160 meter mengelilingi dinding luar cella.",
        "Mewakili puncak kejayaan seni pahat Klasik Tinggi di bawah pengawasan Phidias.",
        "Memadukan keindahan anatomi manusia yang realistis dengan lipatan jubah yang mengalir."
      ],
      facts_en: [
        "The complete frieze ran an astonishing 160 meters long around the outer cella walls.",
        "Represents the zenith of High Classical stone carving under direct supervision of Phidias.",
        "Harmoniously blends naturalistic human anatomy with complex, flowing wet-drapery garments."
      ]
    },
    symbolism: {
      title_id: "Penyerahan Jubah Peplos",
      title_en: "Handing Over of the Sacred Peplos",
      status_id: "Simbolisme & Teologi Kuno",
      status_en: "Symbolism & Ancient Theology",
      desc_id: "Inti spiritual dari seluruh prosesi friz ini terletak pada penyerahan jubah rajutan khusus bernama 'Peplos'. Jubah suci ini ditenun dengan penuh ketelitian oleh sekelompok gadis terpilih dari keluarga bangsawan Athena (Arrephoroi). Setiap empat tahun sekali dalam perayaan Akbar, jubah ini dipersembahkan langsung untuk menyarungi patung kayu zaitun kuno dewi Athena Polias di kuil Erechtheion terdekat.",
      desc_en: "The spiritual pinnacle of the entire frieze ceremony is the solemn presentation of the newly woven 'Peplos'—a sacred yellow-and-purple woolen robe. Intricately crafted by a handpicked guild of high-ranking Athenian maidens (Arrephoroi) over many months. Once every four years during the Great Panathenaia, this divine garment was ceremonially brought up the Acropolis hill to clothe the ancient olive-wood statue of Athena Polias.",
      facts_id: [
        "Mewakili integrasi spiritual mendalam antara tatanan sipil demokratis dan surga.",
        "Menjadi salah satu penggambaran langka di mana aktivitas warga sipil disandingkan langsung dengan para dewa.",
        "Para dewa digambarkan lebih besar dari manusia biasa agar tetap menjaga hierarki ilahi."
      ],
      facts_en: [
        "Showcases the deep civic pride and democratic alignment of Athens with divine favor.",
        "Stands as a rare artistic occurrence depicting ordinary mortal citizens alongside gods.",
        "Divine figures are sculpted in a slightly larger relative scale to preserve heavenly hierarchy."
      ]
    },
    preservation: {
      title_id: "Penyelamatan & Fragmen yang Tersisa",
      title_en: "Survival & Modern Exhibition",
      status_id: "Pelestarian Warisan Dunia",
      status_en: "Global Heritage & Controversy",
      desc_id: "Selama berabad-abad, friz Parthenon menderita kerusakan parah akibat ledakan bom, konversi kuil menjadi gereja/masjid, hingga polusi udara. Pada awal abad ke-19, Thomas Bruce (Lord Elgin) memindahkan sebagian besar friz yang bertahan ke Inggris, yang kini tersimpan rapi di Duveen Gallery di British Museum. Sisa-sisa blok penting lain dipelihara secara ketat di Museum Akropolis baru di Athena untuk menghindari degradasi lingkungan lebih lanjut.",
      desc_en: "Over long centuries, the Parthenon frieze suffered severe damage from catastrophic explosions, religious conversions of the temple, and weather degradation. In the early 19th century, Thomas Bruce (Lord Elgin) removed a huge portion of the surviving frieze blocks to London, where they are now displayed at the British Museum. Other primary sections are tightly curated in the Acropolis Museum in Athens, protected from modern air pollution.",
      facts_id: [
        "Sekitar 60% friz asli berada di London (dikenal sebagai Elgin Marbles).",
        "Pemerintah Yunani secara resmi menuntut pengembalian friz agar bersatu kembali di Athena.",
        "Model 3D fotogrametri modern membantu memetakan kecocokan pahatan antar fragmen melintasi batas negara."
      ],
      facts_en: [
        "Roughly 60% of the surviving frieze is now preserved in London (under the Elgin Marbles label).",
        "The Greek Government spearheads a persistent international push to reunify the entire sculpture in Athens.",
        "Modern high-resolution 3D photogrammetry scan models are used to map missing relief joints seamlessly."
      ]
    }
  };

  // Localized Nashville Pediment historical explorer data
  const pedimentSectionData = {
    myth: {
      title_id: "Perseteruan Athena vs Poseidon",
      title_en: "The Contest of Athena & Poseidon",
      status_id: "Mitos & Sejarah Klasik",
      status_en: "Classical Myth & Lore",
      desc_id: "Pedimen Barat menceritakan perseteruan legendaris memperebutkan perlindungan kota Athena yang baru lahir. Poseidon memukulkan trisulanya ke tanah batu Akropolis dan menghasilkan mata air asin, menandakan keunggulan angkatan laut laut lepas. Athena kemudian menanam pohon zaitun suci pertama, melambangkan perdamaian, penyembuhan, dan kemakmuran jangka panjang bagi masyarakat. Warga memilih hadiah Athena, menjadikannya pelindung utama mereka.",
      desc_en: "The West Pediment highlights the dramatic contest between Athena, goddess of wisdom, and Poseidon, god of the sea, to claim the title of patron deity of newly born Athens. Poseidon smashed his trident into the rocky ground of the Acropolis, bursting forth a salt spring symbolizing dominance of the sea. Athena countered by offering the first sacred agricultural olive tree, representing peace, wisdom, and rich trade. The citizens chose Athena's ultimate gift, naming the city in her honor.",
      facts_id: [
        "Sisi utara didominasi kereta perang Poseidon dan ombak samudera.",
        "Sisi selatan menampilkan dewi Kemenangan Nike menyambut kemenangan Athena.",
        "Patung-patung dirancang saling condong membentuk segitiga pedimen yang dinamis."
      ],
      facts_en: [
        "The northern tier houses Poseidon's magnificent chariot and ocean wave representations.",
        "The southern tier features victory-bearing Nike supporting Athena's supreme win.",
        "Statues lean inward beautifully, taking advantage of the tight triangular pediment contour."
      ]
    },
    replica: {
      title_id: "Replika Skala 1:1 di Nashville",
      title_en: "Nashville's 1:1 Full-Scale Rebuild",
      status_id: "Arsitektur Abad ke-20",
      status_en: "20th-Century Concrete Engineering",
      desc_id: "Terletak di Centennial Park, Nashville, Tennessee, bangunan ini adalah satu-satunya replika fisik Parthenon berskala penuh (1:1) pasca-era kuno. Awalnya didirikan sementara dari bahan plaster untuk Tennessee Centennial Exposition tahun 1897. Karena besarnya antusiasme publik, bangunan ini direkonstruksi permanen menggunakan beton berkualitas tinggi antara tahun 1920 hingga 1931 dengan akurasi rancangan milimeter.",
      desc_en: "Located in beautiful Centennial Park in Nashville, Tennessee, this structure stands proud as the world's only full-scale (1:1) literal physical replica of the ancient Parthenon. First erected out of temporary plaster for the 1897 Tennessee Centennial Exposition. Due to immense public adoration, the city permanently rebuilt it out of high-grade granite-mixture concrete between 1920 and 1931 with millimeter-level structural precision.",
      facts_id: [
        "Memiliki patung Athena Parthenos setinggi 13 meter sebagai inti kuil.",
        "Menggunakan teknik optik kuno (Entasis & kemiringan pilar) yang sama persis.",
        "Berperan sebagai Museum Seni rujukan bergaya neo-klasik di Amerika Serikat."
      ],
      facts_en: [
        "Houses a jaw-dropping 42-foot-tall Athena Parthenos statue at the sanctuary's core.",
        "Accurately reproduces the original's optical adjustments (Entasis and column slants).",
        "Operates as a highly revered fine arts museum and cultural venue in the central United States."
      ]
    },
    artists: {
      title_id: "Mengembalikan Karya yang Hilang",
      title_en: "Resurrecting Vanished Masterpieces",
      status_id: "Keahlian Leopold & Belle Scholz",
      status_en: "Sculpture of Leopold & Belle Scholz",
      desc_id: "Sebagian besar patung pedimen asli hancur akibat serangan bom Venesia tahun 1687 yang meledakkan gudang mesiu Ottoman di dalam Parthenon. Rekonstruksi patung pedimen di Nashville dikerjakan dengan gigih oleh duo pematung legendaris, Leopold Scholz dan Belle Kinney Scholz. Mereka memulihkan komposisinya berdasarkan cetakan gips Marmer Elgin di British Museum serta sketsa penjelajah Prancis Jacques Carrey buatan tahun 1674.",
      desc_en: "Most of the original marble pedimental statues on the Parthenon were lost forever during the tragic 1687 Venetian mortar strike on the Ottoman gunpowder store inside the temple. The replacement sculptures in Nashville were created with unmatched grit by husband-and-wife sculptors Leopold Scholz and Belle Kinney Scholz. They referenced exact casts of the surviving Elgin Marbles in the British Museum and the 1674 sketches of Jacques Carrey.",
      facts_id: [
        "Mereka memahat 20+ figur dewa-dewi berukuran raksasa secara proporsional.",
        "Rincian otot, ekspresi wajah, dan jubah tipis direkayasa kembali secara presisi Klasik.",
        "Dibutuhkan waktu satu dekade penelitian anatomis agar patung-patung ini tampak bernyawa."
      ],
      facts_en: [
        "Meticulously sculpted over 20 heroic-sized divine figures proportionately to the pediment.",
        "Intricate musculature, facial expressions, and thin wet drapery are masterfully re-carved.",
        "Required a full decade of intensive anatomical research to make the figures breathe with life."
      ]
    }
  };

  // Localized Antefix Section Data – exactly 3 tabs: design, function, reconstruction
  const antefixSectionData = {
    design: {
      title_id: "Estetika Motif Palmette",
      title_en: "Aesthetics of the Palmette Motif",
      status_id: "Desain Organik Klasik",
      status_en: "Classical Organic Design",
      desc_id: "Antefix Parthenon diukir indah dengan motif Palmette (daun palem klasik) dan kuncup bunga yang merepresentasikan harmoni tanaman suci dalam mitologi Mediterania. Setiap ukiran dikerjakan dengan presisi tinggi berbahan Marmer Pentelik, menciptakan bayangan dinamis yang dramatis saat terpapar sinar matahari Yunani, menegaskan ritme visual di sepanjang garis atap luar kuil.",
      desc_en: "The Parthenon antefix is sculpted with an intricate Palmette (classical palm leaf) design and delicate buds, representing sacred botanical balance from Mediterranean mythology. Each piece was hand-carved with exceptional precision from high-grade Pentelic marble, casting dynamic shadows under the Greek sun to enhance the rhythmic, ornamental outline of the temple's outer roofscape.",
      facts_id: [
        "Menggunakan motif tanaman palem simetris yang melambangkan keabadian dan kesucian.",
        "Pahatan bertekstur cekat membiarkan bayangan dramatis menonjolkan kedalaman relief dari kejauhan.",
        "Desain palmette menyatu harmonis dengan hiasan sudut atap (akroterion) kuil."
      ],
      facts_en: [
        "Utilizes a perfectly symmetrical palmette wave symbolizing peace, victory, and eternity.",
        "Finely undercut to allow bright sunlight to accentuate relief depth from the ground below.",
        "Designed to match and echo the corner and peak acroteria ornaments of the temple roof."
      ]
    },
    function: {
      title_id: "Fungsi Perlindungan Atap & Kayu",
      title_en: "Roof Drainage & Structure Protection",
      status_id: "Teknik Arsitektur Purba",
      status_en: "Functional Engineering",
      desc_id: "Meskipun sangat bernilai estetika tinggi, antefix memiliki peran struktural yang sangat vital. Terpasang berbaris rapat di sepanjang penutup ujung baris genteng atap Marmer Pentelik Parthenon, antefix berfungsi menyumbat celah air antara genteng datar (imbrices) dan genteng melengkung (tegulae). Ini mencegah air hujan menyusup masuk ke balok kasau kayu di dalam sasis langit-langit kuil.",
      desc_en: "Despite its artistic beauty, the antefix performed a vital engineering purpose on the Parthenon. Rigidly placed along the gutter edges, it plugged the terminal gaps where flat tiles met curved joints. This critical seal prevented destructive rainwater from seeping into the interlocking timber support beams of the ceiling, protecting the inner sanctuary from decay over many centuries.",
      facts_id: [
        "Berfungsi sebagai pemberat mekanis alami yang menahan ujung genteng terluar agar tidak bergeser.",
        "Mencegah rembesan embun dan rembesan air ke komponen interior struktural kuil.",
        "Membantu mengalirkan limpasan air hujan keluar dari dinding luar pilar marmer secara berkala."
      ],
      facts_en: [
        "Acted as a heavy physical block sealing the end tiles of the roof gradient from sliding.",
        "Successfully diverted harsh seasonal moisture away from critical internal timber joists.",
        "Aided in channeling roof rainwater cascades safely clear of the outer marble architraves."
      ]
    },
    reconstruction: {
      title_id: "Polikromi Pewarnaan Kontras",
      title_en: "Color Polychromy & Digital Mapping",
      status_id: "Arkeologi Spektroskopi",
      status_en: "Archeological Polychromy",
      desc_id: "Pada masa kejayaan Athena Klasik, antefix marmer Parthenon tidaklah berwarna putih polos seperti sekarang. Mereka dilukis dengan pigmen warna terang yang berani (polikromi), seperti merah marun tua, biru Mesir cerah, dan aksen emas. Pewarnaan kontras ini sangat krusial agar detail ornamen palmette dapat dinikmati dengan jelas dari bawah bukit Akropolis.",
      desc_en: "During antiquity, the Pentelic marble antefixes of the Parthenon were not plain white. They were richly decorated with vibrant colors (polychromy), including deep red, brilliant blue, and highlighted with bright gold leaf. These contrasting pigments ensured the delicate palmette patterns remained visible to citizens looking up from the busy Acropolis pathways below.",
      facts_id: [
        "Spektroskopi modern mengonfirmasi adanya residu pigmen biru mineral dan merah oker di pori batuan.",
        "Warna merah cerah digunakan sebagai latar kontras agar relief daun palem tampak mengapung.",
        "Nashville Parthenon merekonstruksi pola warna autentik ini di sekujur baris atap luar bangunan mereka."
      ],
      facts_en: [
        "Spectroscopic scans confirm residues of rich Egyptian blue and iron red ochre on the stone.",
        "Vivid red paint was applied behind the palmette leaves to make their organic shapes pop values.",
        "The Nashville Parthenon fully replicated these painted series along its complete roof line."
      ]
    }
  };

  // Localized Selene Horse Section Data – exactly 3 tabs: history, anatomy, reconstruction
  const seleneHorseSectionData = {
    history: {
      title_id: "Kepala Kuda Selene",
      title_en: "The Horse of Selene",
      status_id: "Relik Klasik Timur Pedimen",
      status_en: "East Pediment Classic Relic",
      desc_id: "Pahatan legendaris kepala Kuda Selene (dewi Bulan) ini awalnya menempati sudut paling kanan dari Pedimen Timur Parthenon. Patung ini menggambarkan salah satu kuda penarik kereta malam dewi Selene yang kelelahan setelah melintasi cakrawala langit malam. Dirancang oleh Phidias, kuda ini digambarkan bersiap turun ke laut tepat saat dewa matahari Helios terbit di ufuk timur.",
      desc_en: "The legendary marble head of the Horse of Selene (goddess of the Moon) originally occupied the far-right corner of the Parthenon's East pediment. It depicts a noble charger, exhausted after pulling the goddess' heavy chariot across the night sky. Designed under Phidias, this magnificent horse prepares to plunge into the cold ocean just as Helios (the Sun) rises in the far east.",
      facts_id: [
        "Menjadi salah satu ikon seni pahat realis binatang paling berpengaruh dalam peradaban barat.",
        "Posisinya di sudut ujung pedimen melambangkan transisi pergantian malam menuju fajar.",
        "Kini menjadi koleksi utama British Museum di London pasca dipisahkan oleh Lord Elgin."
      ],
      facts_en: [
        "Widely praised as one of the most powerful and anatomically realistic animal sculptures in art history.",
        "Its position at the extreme right of the East pediment represents the celestial transition from night to dawn.",
        "Currently displayed at the British Museum in London after being acquired by Lord Elgin."
      ]
    },
    anatomy: {
      title_id: "Ketegangan Anatomi Realistis",
      title_en: "Anatomical Realism & Tension",
      status_id: "Teknik Pahat Mahakarya Phidias",
      status_en: "Phidian Sculptural Genius",
      desc_id: "Tingkat ketelitian anatomi dan emosi pada patung ini sangat luar biasa. Pahatan ini tidak menyajikan kuda yang kaku, melainkan makhluk hidup yang bergelut dengan kelelahan hebat. Garis rahang yang mengunci keras, urat-urat halus yang menonjol di sekitar pelipis, serta lubang napas yang melebar lebar menggambarkan pemahaman mendalam Phidias terhadap struktur fungsional tubuh hewan.",
      desc_en: "The level of anatomical detail and raw energy frozen in this marble head is staggering. Rather than carving a generic equine figure, Phidias captured a living beast struggling against physical physical exhaustion. The tensed jawline, thin raised surface veins crawling across the muzzle, and wildly flared nostrils reveal a groundbreaking understanding of equine anatomy.",
      facts_id: [
        "Urat-urat darah halus yang menegang di wajah dipahat sangat jeli hingga berukuran milimeter.",
        "Mata dipahat sedikit menonjol ke luar untuk membiarkan bayangan dramatis bermain di wajahnya.",
        "Mengekspresikan dinamisme emosi tinggi yang membedakannya dari gaya arsitektur arkais sebelumnya."
      ],
      facts_en: [
        "Finely raised surface veins crawl across the temples, highlighting immense physical toll and strain.",
        "The eyes are slightly bulging, designed to capture sharp shadows under the Greek sky.",
        "Portrays a psychological heavy fatigue, standing in active contrast to regular heroic stallion poses."
      ]
    },
    reconstruction: {
      title_id: "Arkeologi Digital & Konservasi",
      title_en: "Digital Preservation & Scanning",
      status_id: "Teknologi Fotogrametri 3D",
      status_en: "3D Photogrammetry Science",
      desc_id: "Mengingat nilai historisnya yang tak ternilai, kepala Kuda Selene marmer asli telah melalui proses pemindaian 3D presisi tinggi. Melalui pemindaian non-kontak berkekuatan mikron, peneliti global kini dapat memetakan jejak pukulan pahat kuno Phidias serta mendeteksi sisa mikro pigmen warna masa lalu tanpa risiko merusak permukaan antik relik marmer Pentelik tersebut.",
      desc_en: "As an irreplaceable and highly fragile masterpiece, the original marble head of Selene's Horse has been digitally mapped using state-of-the-art high-resolution photogrammetry scanners. These precise digital representations allow historians globally to analyze Phidias' chisel marks and ancient paint pigment traces without ever touching or risking the fragile ancient surfaces.",
      facts_id: [
        "Menyediakan model cetak taktil 3D untuk membantu aksesibilitas pengunjung disabilitas di museum.",
        "Memungkinkan rekonstruksi digital warna-warni kuno yang hilang akibat cuaca ekstrem.",
        "Membantu melestarikan silsilah visual ikonik kuda klasik secara abadi dalam pangkalan data global."
      ],
      facts_en: [
        "Provides touchable 3D tactile replicas for visually impaired visitors inside modern museums.",
        "Allows digital recreation of original colored paints weathered away over two millennia.",
        "Ensures this peak Classical masterpiece's legacy is preserved eternally in a free digital format."
      ]
    }
  };

  // Localized column capitals data
  const capitalsData = {
    doric: {
      title_id: "Doric Capital (Kepala Pilar Dorik)",
      title_en: "Doric Capital",
      era_id: "Kuno & Kokoh (Abad ke-7 SM)",
      era_en: "Ancient & Sturdy (7th Century BC)",
      origin_id: "Peloponnesos, Yunani Daratan",
      origin_en: "Peloponnese, Mainland Greece",
      description_id: "Tipe kepala pilar tertua, paling sederhana, dan paling tebal dari tiga ordo arsitektur klasik. Desainnya dicirikan oleh piringan bulat cembung polos (echinus) di bawah lempengan persegi datar (abacus) tanpa ornamen hiasan ataupun sirkular berlebih. Dorik melambangkan kesederhanaan geometris, kekuatan murni, dan kestabilan monumental masa transisi Yunani Kuno. Di Parthenon, seluruh baris pilar luar menggunakan ordo Dorik Klasik yang sangat anggun.",
      description_en: "The oldest, simplest, and most robust style among the three Classical Greek orders. Its design is characterized by a plain, cushion-like circular disc (echinus) beneath a flat, undecorated square block (abacus), free of scrolls or leafy motifs. Doric symbolizes geometric purity, raw structural force, and monumental stability. On the Parthenon, the entirety of the majestic outer peripteral columns are styled in this prime Classical Doric fashion.",
      features_id: [
        "Abacus persegi polos tanpa ukiran relief",
        "Echinus berbentuk bantalan bulat cembung",
        "Karakter pilar cenderung gemuk & kokoh tanpa landasan bawah"
      ],
      features_en: [
        "Plain uncarved square abacus block",
        "Smooth cushion-like circular echinus disc",
        "Sturdy profile with no base ring support"
      ]
    },
    ionic: {
      title_id: "Ionic Capital (Kepala Pilar Ionik)",
      title_en: "Ionic Capital",
      era_id: "Anggun & Elok (Abad ke-6 SM)",
      era_en: "Graceful & Elegant (6th Century BC)",
      origin_id: "Ionia, Laut Aegea Timur",
      origin_en: "Ionia, Eastern Aegean Coast",
      description_id: "Ordo pelengkap berestetika tinggi yang berasal dari pesisir Ionia dan pulau-pulau sekitarnya. Ciri utama kepala pilar Ionik adalah sepasang gulungan spiral ganda simetris yang terkenal bernama 'volute', menyerupai gulungan kertas ramalan kuno, ombak laut Aegea, atau tanduk domba. Ordo ini merepresentasikan harmoni feminin, keanggunan berliku, dan kecerdasan filosofis. Parthenon menggunakannya secara jenius pada interior empat pilar agung pendukung ruang penyimpanan harta karun.",
      description_en: "An elegantly refined order hailing from the coastal and island regions of Ionia. The key identifier of the Ionic capital is its pair of symmetrical spiral scrolls (volutes), which closely mock ancient rolled parchment books, ocean wave crests, or coiled ram horns. Representing graceful femininity, intricate scrollwork, and higher philosophical detail. The Parthenon incorporates four slender Ionic columns in its highly secure inner treasury sanctuary.",
      features_id: [
        "Hiasan gulungan spiral ganda (volute) simetris",
        "Profil kepala pilar lebih ramping & dekoratif",
        "Memiliki landasan dasar cincin berlekuk (torus base)"
      ],
      features_en: [
        "Symmetrical dual spiral scrolls (volutes)",
        "Slender, highly ornamental capital profile",
        "Supported by circular carved base rings"
      ]
    },
    corinthian: {
      title_id: "Corinthian Capital (Kepala Pilar Korintus)",
      title_en: "Corinthian Capital",
      era_id: "Mewah & Kompleks (Abad ke-5 SM)",
      era_en: "Ornate & Luxurious (5th Century BC)",
      origin_id: "Kota Korintus, Peloponnesos Timur",
      origin_en: "City of Corinth, Eastern Greece",
      description_id: "Gaya dekorasi kepala pilar klasik yang paling megah, rumit, dan berlimpah ornamen. Desainnya didasarkan pada susunan dedaunan organik berlapis dari tanaman herba Acanthus yang tumbuh subur di wilayah Mediterania, dihiasi sulur-sulur kecil melengkung (caulicoli) pada keempat ujung sudutnya. Korintus adalah ordo termuda yang melambangkan kejayaan dinasti, kemandirian artistik, dan estetika kekaisaran yang luar biasa mewah, yang kelak diadopsi penuh oleh Kekaisaran Romawi untuk merayakan kaisar-kaisar mereka.",
      description_en: "The most ornate, detailed, and magnificent of the classical Greek column decorations. Its composition mimics beautiful stylized layers of overlapping acanthus herb leaves, detailed with tiny leaf sprigs (caulicoli) coiling tightly at each corner. Corinthian represents royal opulence, vegetative triumph, and grand masterwork. Developed later during the Hellenistic period, it became the signature design language later adopted by imperial Rome.",
      features_id: [
        "Dua susun daun tanaman Acanthus yang berliku indah",
        "Keempat sudut terdapat sulur gulung (volutes kecil)",
        "Puncak evolusi ornamen ordo klasik Yunani-Romawi"
      ],
      features_en: [
        "Multiple tiers of detailed acanthus leaf carvings",
        "Corner mini-helices or vegetative coiling",
        "The ultimate ornamental evolution under Hellenic age"
      ]
    }
  };

  // Interactive Quizzes for each Hotspot
  const hotspotQuizzes: Record<string, {
    question_id: string;
    question_en: string;
    options_id: string[];
    options_en: string[];
    correctIdx: number;
    explanation_id: string;
    explanation_en: string;
  }> = {
    columns: {
      question_id: "Mengapa tiang dibuat sedikit cembung (entasis) di bagian tengah?",
      question_en: "Why are the columns built slightly convex (entasis) in the middle?",
      options_id: ["Mencegah ilusi optik melengkung", "Menghemat penggunaan marmer", "Menahan beban gempa bumi"],
      options_en: ["To prevent sagging optical illusions", "To save premium marble volume", "To resist tectonic earthquake loads"],
      correctIdx: 0,
      explanation_id: "Benar! Tanpa Entasis, mata manusia akan mengira tiang-tiang lurus itu melengkung ke dalam (cekung).",
      explanation_en: "Correct! Without Entasis, human eyes would perceive straight columns as sagging inwards."
    },
    pediment: {
      question_id: "Dewi atau dewa manakah yang dirayakan kelahirannya di pedimen timur?",
      question_en: "Which deity's birth is celebrated on the eastern pediment?",
      options_id: ["Dewa Zeus", "Dewi Athena", "Dewa Poseidon"],
      options_en: ["Zeus", "Athena", "Poseidon"],
      correctIdx: 1,
      explanation_id: "Benar! Pedimen sisi timur khusus memuat ukiran megah kelahiran Dewi Athena.",
      explanation_en: "Correct! The eastern pediment is custom carved with the dramatic birth of Athena."
    },
    ar: {
      question_id: "Teknologi standard mobile apa yang mendasari visualisasi AR langsung?",
      question_en: "What standardized mobile tech powers direct AR visualizations?",
      options_id: ["Bluetooth Tethering", "Video Screencast", "WebXR Device API"],
      options_en: ["Bluetooth Tethering", "Video Screencast", "WebXR Device API"],
      correctIdx: 2,
      explanation_id: "Benar! WebXR adalah standard web modern yang mengirimkan koordinat 3D AR langsung ke browser.",
      explanation_en: "Correct! WebXR is the modern standard delivering native AR coordinates directly to browsers."
    }
  };

  // Translate helpers
  const dict = languages[activeLang] || languages.id;
  const currentModeData = modesData[activeMode] || modesData.rebuilt;

  // Additional educational facts for the quick pop-up deck
  const funFacts = [
    {
      id: "fact1",
      title_id: "Ilusi Optik Sempurna",
      title_en: "Perfect Optical Illusion",
      text_id: "Parthenon tidak memiliki garis lurus yang benar-benar kaku. Tiang-tiang melengkung sedikit ke dalam untuk mengompensasi ilusi mata manusia agar tampak tegak sempurna.",
      text_en: "The Parthenon has no strictly straight lines. The columns lean slightly inward and warp to compensate for human optical illusion, making them appear perfectly vertical."
    },
    {
      id: "fact2",
      title_id: "Proporsi Emas (Phi)",
      title_en: "The Golden Ratio (Phi)",
      text_id: "Rasio tinggi dan lebar fasad Parthenon mengikuti Rasio Emas (1.618), yang dianggap sebagai harmoni artistik dan matematika terindah dalam sejarah manusia.",
      text_en: "The ratio of height and width of the Parthenon facade follows the Golden Ratio (1.618), widely considered the peak of mathematical and visual harmony in history."
    },
    {
      id: "fact3",
      title_id: "Pengeboman Tragis 1687",
      title_en: "The Tragical 1687 Explosion",
      text_id: "Sebagian besar kehancuran Parthenon terjadi bukan karena usia, melainkan ledakan amunisi bubuk mesiu Utsmaniyah yang dihantam mortir Venesia pada tahun 1687.",
      text_en: "Much of the destruction of the Parthenon occurred not due to age, but from an Ottoman gunpowder ammunition store explosion hit by a Venetian mortar shell in 1687."
    },
    {
      id: "fact4",
      title_id: "Harta Karun Warna",
      title_en: "Colors of the Ancient World",
      text_id: "Meskipun saat ini kuil tampak berwarna putih marmer gersang, versi aslinya di masa lalu dilapisi cat cerah berwarna merah, biru tua, dan aksen emas mulia.",
      text_en: "While the temple today appears as sterile white marble, its ancient original was vibrant, painted in rich hues of red, deep blue, and elegant gold details."
    }
  ];

  const currentFact = funFacts[funFactIndex];

  // Initialize theme status on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("parthenon-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const startDark = savedTheme ? savedTheme === "dark" : prefersDark;
    setIsDark(startDark);
    document.documentElement.classList.toggle("dark", startDark);
  }, []);

  // Set dark mode helper
  const toggleDarkMode = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    localStorage.setItem("parthenon-theme", nextDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", nextDark);
  };

  // Switch perspective mode smoothly
  const handleModeChange = (modeId: string) => {
    if (modeId === activeMode) return;
    setIsSwappingModel(true);
    setActiveMode(modeId);
    setTimeout(() => {
      setIsSwappingModel(false);
    }, 450);
  };

  // Sync restoration states when mode changes
  useEffect(() => {
    if (activeMode === "rebuilt") {
      setRestoreColumns(true);
      setRestorePediment(true);
      setRestoreColors(true);
    } else {
      setRestoreColumns(false);
      setRestorePediment(false);
      setRestoreColors(false);
    }
  }, [activeMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ease-in-out font-sans ${isDark ? "bg-[#0a192f] text-slate-100 dark" : "bg-slate-50 text-slate-900"}`}>
      {/* Decorative Grid Mesh */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20 dark:opacity-10"
        style={{
          backgroundImage: isDark
            ? "linear-gradient(#233554 1px, transparent 1px), linear-gradient(90deg, #233554 1px, transparent 1px)"
            : "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        }}
      />

      {/* Main Page Thick Border (Neo-brutalism Frame) */}
      <div className={`min-h-screen border-8 transition-colors duration-300 ${isDark ? "border-[#f8fafc] bg-[#0a192f]/90" : "border-[#0f172a] bg-slate-50/85"} relative z-10 p-0 sm:p-2 md:p-3`}>
        
        {/* Navigation / Top Header bar */}
        <header className={`sticky top-0 z-50 flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border-b-4 ${isDark ? "bg-[#112240] border-[#f8fafc]" : "bg-white border-[#0f172a] shadow-sm"} transition-all duration-300`}>
          
          <a href="#top" className="flex items-center gap-3 group focus:outline-none focus:ring-4 focus:ring-blue-500">
            <span className={`grid w-10 h-10 place-items-center font-mono font-black text-lg border-2 ${isDark ? "border-[#f8fafc] bg-amber-400 text-slate-950" : "border-[#0f172a] bg-amber-400 text-slate-950"}`}>
              AR
            </span>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-black tracking-wider uppercase text-amber-500 dark:text-amber-400">
                History Learning Space
              </span>
              <span className="font-sans font-bold text-base tracking-tight leading-none">
                Parthenon Neo-Explorer
              </span>
            </div>
          </a>

          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="#modes" 
              className={`flex items-center px-4 py-2 font-mono text-xs font-black uppercase border-2 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 ${isDark ? "border-[#f8fafc] hover:bg-slate-800" : "border-[#0f172a] hover:bg-slate-100"}`}
            >
              <Layers className="w-3.5 h-3.5 mr-2" />
              {activeLang === "id" ? "Mode" : "Modes"}
            </a>
            <a 
              href="#viewer-workspace" 
              className={`flex items-center px-4 py-2 font-mono text-xs font-black uppercase border-2 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 ${isDark ? "border-[#f8fafc] hover:bg-slate-800" : "border-[#0f172a] hover:bg-slate-100"}`}
            >
              <Eye className="w-3.5 h-3.5 mr-2" />
              {activeLang === "id" ? "Penampil" : "Workspace"}
            </a>

            {/* Language Switch Ribbon */}
            <button
              onClick={() => setActiveLang(activeLang === "id" ? "en" : "id")}
              className={`flex items-center justify-center px-3 py-2 font-mono text-xs font-black border-2 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 ${
                isDark ? "border-[#f8fafc] bg-slate-800 text-slate-100" : "border-[#0f172a] bg-amber-50 text-slate-900"
              }`}
              title={dict.languageLabel}
            >
              <Globe className="w-3.5 h-3.5 mr-1.5" />
              <span className="uppercase">{activeLang === "id" ? "EN" : "ID"}</span>
            </button>

            {/* Dark Mode Neo-Brutalist Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`grid w-10 h-10 place-items-center border-2 transition-all duration-150 active:scale-95 ${
                isDark ? "border-[#f8fafc] bg-amber-400 text-slate-950" : "border-[#0f172a] bg-slate-900 text-white"
              }`}
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5 font-bold" /> : <Moon className="w-5 h-5 font-bold" />}
            </button>
          </div>
        </header>

        {/* Global Outer Wrapper */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10" id="top">
          
          {/* Welcome/Intro Hero section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20" aria-labelledby="hero-heading">
            
            {/* Left Copy block */}
            <div className={`col-span-1 lg:col-span-7 flex flex-col justify-between p-6 md:p-10 border-4 ${
              isDark ? "border-[#f8fafc] bg-[#112240] neo-shadow-dark" : "border-[#0f172a] bg-white neo-shadow"
            } transition-all duration-300 relative overflow-hidden`}>
              
              {/* Giant architectural drawing reference asset watermark */}
              <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none font-mono text-[14rem] select-none font-extrabold -mr-10 -mb-12">
                447BC
              </div>

              <div>
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 mb-6 font-mono text-xs font-bold uppercase border-2 ${
                  isDark ? "border-[#f8fafc] bg-amber-400 text-slate-950" : "border-[#0f172a] bg-amber-400 text-slate-950"
                }`}>
                  <Compass className="w-3.5 h-3.5 animate-pulse" />
                  {dict.eyebrow}
                </div>

                <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-6">
                  {dict.heroTitle}
                </h1>

                <p className={`text-base md:text-lg leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"} max-w-2xl`}>
                  {dict.heroDesc}
                </p>
              </div>

              <div className="mt-10 pt-6 border-t-2 border-dashed border-slate-300 dark:border-slate-700">
                <div className="flex flex-wrap gap-4 items-center mb-6">
                  <a 
                    href="#viewer-workspace" 
                    className={`flex items-center justify-center px-6 py-3 font-mono text-sm font-black uppercase border-2 transition-all duration-150 ${
                      isDark 
                        ? "bg-[#f8fafc] text-[#0a192f] border-[#f8fafc] hover:bg-amber-400 hover:text-slate-950" 
                        : "bg-[#0f172a] text-white border-[#0f172a] hover:bg-amber-400 hover:text-slate-950"
                    }`}
                  >
                    {dict.btnOpenViewer}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </a>

                </div>

                <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-500 dark:text-slate-400">
                  <Activity className="w-4 h-4 text-emerald-500 dark:text-emerald-400 animate-pulse" />
                  <span>{dict.summaryMeta}</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Telemetry & Archaeology Restoration Lab Panel */}
            <aside className={`col-span-1 lg:col-span-5 flex flex-col justify-between border-4 overflow-hidden shadow-2xl ${
              isDark ? "border-[#f8fafc] bg-[#112240]" : "border-[#0f172a] bg-white"
            } transition-all duration-300`}>
              
              {/* Header metadata */}
              <div className="flex items-center justify-between p-4 border-b-2 border-slate-900 dark:border-slate-100 bg-slate-900 text-slate-100 select-none">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                  </span>
                  <span className="font-mono text-[10px] font-black uppercase tracking-wider text-slate-200">
                    {activeLang === "id" ? "LABORATORIUM RESTORASI" : "RESTORATION PROCESSOR"}
                  </span>
                </div>
                <span className="font-mono text-[11px] font-extrabold text-amber-400">
                  {activeLang === "id" ? "INTERAKTIF v3.2" : "INTERACTIVE v3.2"}
                </span>
              </div>

              {/* Central Vector Restoration SVG Canvas Area */}
              <div className="relative bg-slate-950 overflow-hidden flex flex-col items-center justify-center pt-8 pb-4">
                
                {/* Score badge top-right corner */}
                <div className="absolute top-4 right-4 z-20 font-mono text-[11px] font-black border-2 border-amber-400 bg-slate-900/90 text-amber-400 px-2.5 py-1 flex items-center gap-1.5 rounded-sm shadow-md animate-pulse">
                  <Wrench className="w-3.5 h-3.5 text-lime-400" />
                  <span>
                    {activeLang === "id" 
                      ? `Restorasi: ${ (restoreColumns ? 40 : 0) + (restorePediment ? 40 : 0) + (restoreColors ? 20 : 0) }%`
                      : `Restored: ${ (restoreColumns ? 40 : 0) + (restorePediment ? 40 : 0) + (restoreColors ? 20 : 0) }%`
                    }
                  </span>
                </div>

                {/* Left Live Coordinates matrix */}
                <div className="absolute left-4 top-4 bg-slate-900/95 text-slate-400 border border-slate-800 p-2 font-mono text-[9px] leading-tight space-y-0.5 rounded pointer-events-none z-10 uppercase select-none">
                  <div>SIM_ENG: { (restoreColumns ? 40 : 0) + (restorePediment ? 40 : 0) + (restoreColors ? 20 : 0) === 100 ? "OPTIMIZED" : "DEGRADED" }</div>
                  <div>DIFFERENCE: { 100 - ((restoreColumns ? 40 : 0) + (restorePediment ? 40 : 0) + (restoreColors ? 20 : 0)) }% UNSTABLE</div>
                </div>

                {/* SVG Blueprint responding to all combinations of the 3 custom restoration levers */}
                <div className={`w-full flex items-center justify-center px-6 transition-all duration-300 ${isSwappingModel ? "scale-95 opacity-40" : "scale-100 opacity-90"}`}>
                  <svg viewBox="0 0 400 400" className="w-full max-w-[305px] h-auto select-none" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                    <g className={restoreColors ? "text-amber-400" : "text-amber-500"}>
                      
                      {/* Pediment & Architrave Block (Atap) - Clickable group */}
                      <g 
                        onClick={() => setRestorePediment(!restorePediment)} 
                        className="cursor-pointer group/ped transition-all duration-200 outline-none"
                        role="button"
                        aria-label="Toggle Pediment"
                      >
                        {/* Hover backplate overlay */}
                        <polygon 
                          points="40,110 200,30 360,110" 
                          className="fill-amber-400/0 group-hover/ped:fill-amber-400/5 transition-colors duration-150"
                        />
                        {restorePediment ? (
                          <g>
                            {/* Pristine high-detail triangular pediment */}
                            <polygon 
                              points="50,110 200,40 350,110" 
                              className={restoreColors ? "fill-sky-900/40 stroke-teal-405" : "fill-amber-400/10 stroke-amber-400"} 
                            />
                            {/* Center Ancient relief circle (Athena Shield / Medallion) */}
                            <circle 
                              cx="200" 
                              cy="80" 
                              r="12" 
                              className={restoreColors ? "fill-amber-300/40 stroke-amber-300" : "fill-amber-400/20 stroke-amber-400"} 
                            />
                            {/* Symmetrical sculptures outline */}
                            <path 
                              d="M130,102 L170,95 M230,95 L270,102" 
                              className={restoreColors ? "stroke-red-400" : "stroke-amber-400"} 
                            />
                            
                            {/* Pristine Architrave rect */}
                            <rect 
                              x="40" 
                              y="110" 
                              width="320" 
                              height="25" 
                              className={restoreColors ? "fill-red-950/40 stroke-red-500" : "fill-amber-400/5 stroke-amber-400"} 
                            />
                            {/* Triglyph stripes */}
                            <path 
                              d="M60,110 v25 M100,110 v25 M140,110 v25 M180,110 v25 M220,110 v25 M260,110 v25 M300,110 v25 M340,110 v25" 
                              className={restoreColors ? "stroke-red-400" : "stroke-amber-400"} 
                            />
                          </g>
                        ) : (
                          <g>
                            {/* Shattered crumbling Pediment outline */}
                            <path d="M50,110 L140,68" className="stroke-amber-500" />
                            <path d="M140,68 L154,82 L162,78 L182,96" className="stroke-rose-400" />
                            
                            {/* Collapsed missing roof right section represented as blueprint dots */}
                            <path d="M228,96 L250,68 L350,110" className="stroke-amber-500/25" strokeDasharray="4 4" />
                            
                            {/* Cracked / Fragmented Architrave Block */}
                            <path d="M40,110 h150 v25 h-150 Z" className="fill-amber-400/5 stroke-amber-500" />
                            <path d="M190,110 L195,123 L204,116 L214,135" className="stroke-rose-400" />
                            <path d="M214,110 h146 v25 h-146 Z" className="stroke-amber-500/20" strokeDasharray="3 3" />
                          </g>
                        )}
                        {/* Interactive SVG tooltip banner */}
                        <g className="opacity-0 group-hover/ped:opacity-100 transition-opacity duration-150 pointer-events-none">
                          <rect x="100" y="15" width="200" height="20" rx="3" className="fill-slate-950 stroke-amber-400" strokeWidth="1.2" />
                          <text x="200" y="28" textAnchor="middle" className="fill-amber-300 font-mono text-[8px] font-black uppercase">
                            {activeLang === "id" ? "📐 klik untuk pasang pedimen" : "📐 click to reconstruct roof"}
                          </text>
                        </g>
                      </g>

                      {/* Doric columns (7 Columns: x = 80, 120, 160, 200, 240, 280, 320) - Clickable group */}
                      <g 
                        onClick={() => setRestoreColumns(!restoreColumns)} 
                        className="cursor-pointer group/col transition-all duration-200 outline-none"
                        role="button"
                        aria-label="Toggle Columns"
                      >
                        {/* Hover backplate overlay */}
                        <rect 
                          x="60" 
                          y="135" 
                          width="280" 
                          height="195" 
                          className="fill-amber-400/0 group-hover/col:fill-amber-400/5 transition-colors duration-150"
                        />
                        {restoreColumns ? (
                          <g>
                            {/* 7 pristine restored Doric columns */}
                            <line x1="80" y1="135" x2="80" y2="330" className={restoreColors ? "stroke-amber-400" : "stroke-amber-400"} />
                            <line x1="120" y1="135" x2="120" y2="330" className={restoreColors ? "stroke-amber-400" : "stroke-amber-400"} />
                            <line x1="160" y1="135" x2="160" y2="330" className={restoreColors ? "stroke-amber-400" : "stroke-amber-400"} />
                            <line x1="200" y1="135" x2="200" y2="330" className={restoreColors ? "stroke-amber-400" : "stroke-amber-400"} />
                            <line x1="240" y1="135" x2="240" y2="330" className={restoreColors ? "stroke-amber-400" : "stroke-amber-400"} />
                            <line x1="280" y1="135" x2="280" y2="330" className={restoreColors ? "stroke-amber-400" : "stroke-amber-400"} />
                            <line x1="320" y1="135" x2="320" y2="330" className={restoreColors ? "stroke-amber-400" : "stroke-amber-400"} />

                            {/* Authentic architectural fine flutes overlay */}
                            {restoreColors && (
                              <g className="stroke-orange-400/30" strokeWidth="1">
                                <line x1="84" y1="135" x2="84" y2="330" />
                                <line x1="124" y1="135" x2="124" y2="330" />
                                <line x1="164" y1="135" x2="164" y2="330" />
                                <line x1="204" y1="135" x2="204" y2="330" />
                                <line x1="244" y1="135" x2="244" y2="330" />
                                <line x1="284" y1="135" x2="284" y2="330" />
                                <line x1="324" y1="135" x2="324" y2="330" />
                              </g>
                            )}

                            {/* Capitals (Column headers) */}
                            <path d="M72,135 h16 M112,135 h16 M152,135 h16 M192,135 h16 M232,135 h16 M272,135 h16 M312,135 h16" strokeWidth="5.5" />
                          </g>
                        ) : (
                          <g>
                            {/* Weathered collapsed Archeological Column footprint */}
                            {/* Col 1: Intact */}
                            <line x1="80" y1="135" x2="80" y2="330" className="stroke-amber-500" />
                            <path d="M72,135 h16" strokeWidth="3" className="stroke-amber-500" />

                            {/* Col 2: Intact but Leaning/unstable */}
                            <line x1="120" y1="138" x2="124" y2="330" className="stroke-amber-500" />
                            <path d="M112,138 L128,139" strokeWidth="3" className="stroke-amber-500" />

                            {/* Col 3: Intact */}
                            <line x1="160" y1="135" x2="160" y2="330" className="stroke-amber-500" />

                            {/* Col 4: Completely Missing / Blown out during war bombardment */}
                            <line x1="200" y1="135" x2="200" y2="330" className="stroke-[#f53b57]/20" strokeDasharray="3 3" />

                            {/* Col 5: Half collapsed (Jagged crack) */}
                            <line x1="240" y1="210" x2="240" y2="330" className="stroke-amber-500" />
                            <path d="M232,210 Q240,205 248,210" className="stroke-rose-400" />
                            <line x1="240" y1="135" x2="240" y2="210" className="stroke-amber-500/15" strokeDasharray="3 3" />

                            {/* Col 6: Stub remaining */}
                            <line x1="280" y1="275" x2="280" y2="330" className="stroke-amber-500" />
                            <line x1="280" y1="135" x2="280" y2="275" className="stroke-amber-500/10" strokeDasharray="3 3" />

                            {/* Col 7: Standing with cracks */}
                            <line x1="320" y1="135" x2="320" y2="330" className="stroke-amber-500" />
                            <path d="M312,135 h16" strokeWidth="3" className="stroke-amber-500" />
                            <path d="M315,220 L325,230 L318,245" className="stroke-rose-450/70" />
                          </g>
                        )}
                        {/* Interactive SVG tooltip banner */}
                        <g className="opacity-0 group-hover/col:opacity-100 transition-opacity duration-150 pointer-events-none">
                          <rect x="100" y="210" width="200" height="20" rx="3" className="fill-slate-950 stroke-amber-400" strokeWidth="1.2" />
                          <text x="200" y="223" textAnchor="middle" className="fill-amber-300 font-mono text-[8px] font-black uppercase">
                            {activeLang === "id" ? "🏛️ klik untuk berdirikan tiang" : "🏛️ click to rebuild columns"}
                          </text>
                        </g>
                      </g>

                      {/* Stylobate platform steps - Clickable group */}
                      <g 
                        onClick={() => setRestoreColors(!restoreColors)} 
                        className="cursor-pointer group/base transition-all duration-200 outline-none"
                        role="button"
                        aria-label="Toggle Stylobate"
                      >
                        {/* Hover backplate overlay */}
                        <rect 
                          x="10" 
                          y="325" 
                          width="380" 
                          height="45" 
                          className="fill-amber-400/0 group-hover/base:fill-amber-400/5 transition-colors duration-150"
                        />
                        <rect 
                          x="30" 
                          y="330" 
                          width="340" 
                          height="15" 
                          className={restoreColors ? "fill-orange-600/10 stroke-orange-500" : "fill-amber-400/25 stroke-amber-400"} 
                        />
                        <rect 
                          x="20" 
                          y="345" 
                          width="360" 
                          height="15" 
                          className={restoreColors ? "fill-red-800/25 stroke-red-700" : "fill-amber-400/40 stroke-amber-400"} 
                        />

                        {/* Realistic architectural deconstructed stone debris */}
                        {(!restoreColumns || !restorePediment) && (
                          <g className="fill-amber-500/20 stroke-amber-400/80">
                            {/* Fallen block chunks near the base stair */}
                            <rect x="208" y="318" width="16" height="11" rx="1" transform="rotate(18, 208, 318)" />
                            <rect x="245" y="322" width="15" height="10" rx="1.5" transform="rotate(-15, 245, 322)" />
                            <circle cx="102" cy="326" r="4.5" />
                          </g>
                        )}
                        {/* Interactive SVG tooltip banner */}
                        <g className="opacity-0 group-hover/base:opacity-100 transition-opacity duration-150 pointer-events-none">
                          <rect x="100" y="355" width="200" height="20" rx="3" className="fill-slate-950 stroke-amber-400" strokeWidth="1.2" />
                          <text x="200" y="368" textAnchor="middle" className="fill-amber-300 font-mono text-[8px] font-black uppercase">
                            {activeLang === "id" ? "🎨 klik untuk cat warna kuil" : "🎨 click to apply colors"}
                          </text>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>

                {/* Simulated Laser Radar scan line */}
                <span className="absolute inset-x-0 h-[2px] bg-red-500/40 dark:bg-amber-400/40 animate-scan pointer-events-none z-20" />

                {/* Real-time status text feedback overlay */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/95 border border-slate-700 p-2.5 pointer-events-none z-10 transition-all duration-200">
                  <div className="flex items-center gap-1.5 text-amber-400 font-mono text-[9px] font-bold uppercase tracking-wider mb-1">
                    <Activity className="w-3" />
                    <span>
                      {activeLang === "id" 
                        ? `Akurasi Sejarah: ${ (restoreColumns ? 40 : 0) + (restorePediment ? 40 : 0) + (restoreColors ? 20 : 0) }%`
                        : `Historical Accuracy: ${ (restoreColumns ? 40 : 0) + (restorePediment ? 40 : 0) + (restoreColors ? 20 : 0) }%`
                      }
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-350 line-clamp-1 leading-normal font-sans font-medium">
                    { (restoreColumns ? 40 : 0) + (restorePediment ? 40 : 0) + (restoreColors ? 20 : 0) === 100 ? (
                      activeLang === "id" ? "Kuil utuh sempurna & diwarnai cat terakota-emas!" : "Temple is fully standing with terracotta and gold painted colors!"
                    ) : (restoreColumns ? 40 : 0) + (restorePediment ? 40 : 0) + (restoreColors ? 20 : 0) === 0 ? (
                      activeLang === "id" ? "Reruntuhan Akropolis asli pasca-pengeboman 1687." : "Original Acropolis ruins remains post-1687 war bomb blast."
                    ) : (
                      activeLang === "id" ? "Modifikasi restorasi hibrida sedang aktif disimulasikan." : "Hybrid restoration custom blueprint simulation active."
                    )}
                  </p>
                </div>
              </div>

              {/* Lab Interactive Toggles Control Board */}
              <div className={`p-4 border-t-2 border-slate-900 dark:border-slate-100 flex flex-col gap-2.5 bg-slate-50 dark:bg-[#0e1d35]`}>
                <div className="flex items-center justify-between text-[11px] font-mono font-black uppercase text-slate-500 pb-1.5 border-b border-slate-300 dark:border-slate-800">
                  <span>{activeLang === "id" ? "KONTROL RESTORASI" : "SIMULATION SWITCHES"}</span>
                  <button 
                    onClick={() => {
                      setRestoreColumns(true);
                      setRestorePediment(true);
                      setRestoreColors(true);
                    }}
                    className="text-amber-500 hover:underline hover:text-amber-600 transition-all"
                  >
                    {activeLang === "id" ? "Reset Penuh" : "Full Reset"}
                  </button>
                </div>

                {/* Switch 1: Columns */}
                <button
                  type="button"
                  onClick={() => setRestoreColumns(!restoreColumns)}
                  className={`w-full flex items-center justify-between p-2.5 border-2 text-left transition-all duration-150 outline-none text-xs ${
                    restoreColumns
                      ? isDark 
                        ? "bg-slate-800 text-white border-amber-400" 
                        : "bg-white text-slate-900 border-[#0f172a] shadow-[2px_2px_0_#facc15]"
                      : "bg-transparent border-slate-300 dark:border-slate-800 text-slate-400"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`grid w-7 h-7 place-items-center border ${restoreColumns ? "bg-amber-400 text-slate-950" : "bg-slate-200 dark:bg-slate-900"}`}>
                      <Layers className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-bold uppercase tracking-tight text-[11px]">
                        {activeLang === "id" ? "Pilar Dorik [40%]" : "Doric Columns [40%]"}
                      </p>
                      <p className="text-[10px] opacity-75">
                        {activeLang === "id" ? "Tegakkan 7 pilar utama" : "Erect 7 columns"}
                      </p>
                    </div>
                  </div>
                  <div className={`w-8 h-4 rounded-full border flex items-center px-0.5 transition-colors duration-200 ${restoreColumns ? "bg-[#ffb900] justify-end" : "bg-slate-300 dark:bg-slate-900 justify-start"}`}>
                    <span className="w-3 h-3 rounded-full bg-white shadow-sm" />
                  </div>
                </button>

                {/* Switch 2: Pediment */}
                <button
                  type="button"
                  onClick={() => setRestorePediment(!restorePediment)}
                  className={`w-full flex items-center justify-between p-2.5 border-2 text-left transition-all duration-150 outline-none text-xs ${
                    restorePediment
                      ? isDark 
                        ? "bg-slate-800 text-white border-amber-400" 
                        : "bg-white text-slate-900 border-[#0f172a] shadow-[2px_2px_0_#facc15]"
                      : "bg-transparent border-slate-300 dark:border-slate-800 text-slate-400"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`grid w-7 h-7 place-items-center border ${restorePediment ? "bg-amber-400 text-slate-950" : "bg-slate-200 dark:bg-slate-900"}`}>
                      <Wrench className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-bold uppercase tracking-tight text-[11px]">
                        {activeLang === "id" ? "Gable Atap [40%]" : "Pediment Roof [40%]"}
                      </p>
                      <p className="text-[10px] opacity-75">
                        {activeLang === "id" ? "Revisi atap segitiga kuil" : "Restore triangular roof"}
                      </p>
                    </div>
                  </div>
                  <div className={`w-8 h-4 rounded-full border flex items-center px-0.5 transition-colors duration-200 ${restorePediment ? "bg-[#ffb900] justify-end" : "bg-slate-300 dark:bg-slate-900 justify-start"}`}>
                    <span className="w-3 h-3 rounded-full bg-white shadow-sm" />
                  </div>
                </button>

                {/* Switch 3: Colors */}
                <button
                  type="button"
                  onClick={() => setRestoreColors(!restoreColors)}
                  className={`w-full flex items-center justify-between p-2.5 border-2 text-left transition-all duration-150 outline-none text-xs ${
                    restoreColors
                      ? isDark 
                        ? "bg-slate-800 text-white border-amber-400" 
                        : "bg-white text-slate-900 border-[#0f172a] shadow-[2px_2px_0_#facc15]"
                      : "bg-transparent border-slate-300 dark:border-slate-800 text-slate-400"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`grid w-7 h-7 place-items-center border ${restoreColors ? "bg-amber-400 text-slate-950" : "bg-slate-200 dark:bg-slate-900"}`}>
                      <Paintbrush className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-bold uppercase tracking-tight text-[11px]">
                        {activeLang === "id" ? "Pigmen Kuno [20%]" : "Ancient Pigments [20%]"}
                      </p>
                      <p className="text-[10px] opacity-75">
                        {activeLang === "id" ? "Terapkan warna merah & biru" : "Apply red & blue hues"}
                      </p>
                    </div>
                  </div>
                  <div className={`w-8 h-4 rounded-full border flex items-center px-0.5 transition-colors duration-200 ${restoreColors ? "bg-[#ffb900] justify-end" : "bg-slate-300 dark:bg-slate-900 justify-start"}`}>
                    <span className="w-3 h-3 rounded-full bg-white shadow-sm" />
                  </div>
                </button>
              </div>

              {/* Achievements banner */}
              <div className="p-3 border-t bg-slate-900 text-slate-100 flex items-center justify-center font-mono text-[10px] uppercase font-black text-center border-slate-700">
                { (restoreColumns ? 40 : 0) + (restorePediment ? 40 : 0) + (restoreColors ? 20 : 0) === 100 ? (
                  <strong style={{ color: '#ffb900' }} className="animate-bounce font-black">🏆 {activeLang === "id" ? "PERFECT: ARSITEK AGUNG YUNANI!" : "PERFECT: ROYAL GREEK ARCHITECT!"}</strong>
                ) : (restoreColumns ? 40 : 0) + (restorePediment ? 40 : 0) + (restoreColors ? 20 : 0) === 0 ? (
                  <strong style={{ color: '#ffb900' }} className="font-black">⏳ {activeLang === "id" ? "SITUS AKROPOLIS ASLI" : "ORIGINAL ACROPOLIS PRESERVES"}</strong>
                ) : (
                  <strong style={{ color: '#ffb900' }} className="font-black">🔧 {activeLang === "id" ? "PENGUJIAN RESTORASI SEBAGIAN" : "HYBRID RESTORATION PHASE ACTIVE"}</strong>
                )}
              </div>
            </aside>
          </section>

          {/* Perspective Swappers (Mode Grid) Section */}
          <section className="mb-14 scroll-mt-24" id="modes" aria-labelledby="modes-heading">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <p className="font-mono text-xs font-black uppercase tracking-wider text-amber-500 dark:text-amber-400 mb-2">
                  {dict.perspectiveLabel}
                </p>
                <h2 id="modes-heading" className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
                  {dict.sectionTitle}
                </h2>
              </div>

            </div>

            {/* Selection Grid buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" role="tablist" aria-label="Mode Selection Tabs">
              <button 
                onClick={() => handleModeChange("rebuilt")}
                className={`p-6 text-left border-4 transition-all duration-200 outline-none flex flex-col justify-between ${
                  activeMode === "rebuilt"
                    ? isDark 
                      ? "bg-amber-400 text-slate-950 border-[#f8fafc] -translate-y-1.5 shadow-[8px_8px_0_rgba(248,252,252,1)]" 
                      : "bg-[#0f172a] text-[#f8fafc] border-[#0f172a] -translate-y-1.5 shadow-[8px_8px_0_#facc15]"
                    : isDark
                      ? "bg-[#112240] border-[#233554] hover:border-slate-400 text-slate-200"
                      : "bg-white border-[#e2e8f0] hover:border-[#0f172a] text-slate-800"
                }`}
                role="tab"
                aria-selected={activeMode === "rebuilt"}
                aria-controls="viewer-workspace"
                id="tab-rebuilt"
              >
                <div>
                  <span className="font-mono text-xs font-black uppercase opacity-60 tracking-widest block mb-4">
                    [01] Reconstruction Mode
                  </span>
                  <h3 className="text-xl md:text-3xl font-black uppercase leading-none tracking-tight mb-3">
                    {activeLang === "id" ? modesData.rebuilt.label_id : modesData.rebuilt.label_en}
                  </h3>
                </div>
                <p className={`text-xs md:text-sm leading-relaxed ${activeMode === "rebuilt" ? "opacity-90" : "opacity-70"}`}>
                  {activeLang === "id" ? modesData.rebuilt.description_id : modesData.rebuilt.description_en}
                </p>
              </button>

              <button 
                onClick={() => handleModeChange("ruins")}
                className={`p-6 text-left border-4 transition-all duration-200 outline-none flex flex-col justify-between ${
                  activeMode === "ruins"
                    ? isDark 
                      ? "bg-amber-400 text-slate-950 border-[#f8fafc] -translate-y-1.5 shadow-[8px_8px_0_rgba(248,252,252,1)]" 
                      : "bg-[#0f172a] text-[#f8fafc] border-[#0f172a] -translate-y-1.5 shadow-[8px_8px_0_#facc15]"
                    : isDark
                      ? "bg-[#112240] border-[#233554] hover:border-slate-400 text-slate-200"
                      : "bg-white border-[#e2e8f0] hover:border-[#0f172a] text-slate-800"
                }`}
                role="tab"
                aria-selected={activeMode === "ruins"}
                aria-controls="viewer-workspace"
                id="tab-ruins"
              >
                <div>
                  <span className="font-mono text-xs font-black uppercase opacity-60 tracking-widest block mb-4">
                    [02] Present Ruins Mode
                  </span>
                  <h3 className="text-xl md:text-3xl font-black uppercase leading-none tracking-tight mb-3">
                    {activeLang === "id" ? modesData.ruins.label_id : modesData.ruins.label_en}
                  </h3>
                </div>
                <p className={`text-xs md:text-sm leading-relaxed ${activeMode === "ruins" ? "opacity-90" : "opacity-70"}`}>
                  {activeLang === "id" ? modesData.ruins.description_id : modesData.ruins.description_en}
                </p>
              </button>
            </div>
          </section>

          {/* Primary 3D Workspace/Viewer section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start scroll-mt-24 mb-12" id="viewer-workspace">
            
            <div className={`lg:col-span-8 border-4 ${isDark ? "border-[#f8fafc] bg-[#112240] neo-shadow-dark" : "border-[#0f172a] bg-white neo-shadow"} overflow-hidden`}>
              
              {/* Workspace header */}
              <div className="p-4 sm:p-6 border-b-2 border-slate-900 dark:border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase text-amber-500 dark:text-amber-400 mb-1">
                    {activeLang === "id" ? currentModeData.title_id : currentModeData.title_en}
                  </h3>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase leading-none tracking-tight">
                    {activeMode === "rebuilt" 
                      ? (activeLang === "id" ? "Visualisasi Rekonstruksi" : "Reconstructed Blueprint")
                      : (activeLang === "id" ? "Situs Arkeologi Reruntuhan" : "Ruins Onsite Remains")
                    }
                  </h2>
                </div>
                <div className={`px-3 py-1.5 text-xs font-mono font-bold uppercase border-2 flex items-center gap-1.5 ${
                  isDark ? "border-[#f8fafc] bg-slate-800 text-amber-300" : "border-[#0f172a] bg-slate-100 text-amber-600"
                }`}>
                  <span className="inline-block w-2.5 h-2.5 bg-amber-400 animate-ping rounded-full" />
                  {dict.arBadge}
                </div>
              </div>

              {/* Embedding Sketchfab active frame */}
              <div className="relative aspect-[16/10] bg-slate-950 w-full overflow-hidden">
                <iframe 
                  key={activeMode}
                  title={activeLang === "id" ? currentModeData.title_id : currentModeData.title_en}
                  className={`w-full h-full border-0 transition-all duration-300 ${isSwappingModel ? "scale-[0.98] blur-sm opacity-50" : "scale-100 opacity-100"}`}
                  src={currentModeData.src}
                  allowFullScreen
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                />
              </div>

              {/* Credit footer line inside workspace */}
              <div 
                className={`p-4 font-sans text-xs border-t-2 border-slate-150 dark:border-slate-800 ${
                  isDark ? "text-slate-350 bg-slate-900/40" : "text-slate-500 bg-slate-50/50"
                }`}
                dangerouslySetInnerHTML={{ __html: currentModeData.creditHtml }}
              />

              {/* Detailed Historical Guide Board */}
              <div className={`p-5 sm:p-6 border-t-2 border-slate-900 dark:border-slate-200 ${
                isDark ? "bg-[#0d1e36]" : "bg-amber-500/5"
              }`}>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-amber-500 shrink-0" />
                  <h4 style={{ color: '#ffb900' }} className="font-mono text-xs font-black uppercase tracking-wider">
                    {activeLang === "id" ? "Arsip & Kronologi Sejarah Parthenon" : "Parthenon Historical Archives & Chronicle"}
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                   {/* Heyday Column */}
                  <div className={`p-4 border-2 ${isDark ? "border-slate-800/80 bg-slate-950/45" : "border-slate-200 bg-white"} rounded-sm flex flex-col justify-between`}>
                    <div>
                      <div 
                        style={{ color: '#ffb900', backgroundColor: '#000000' }}
                        className="inline-block px-2 py-0.5 font-mono text-[9px] font-black uppercase tracking-wider border mb-3 rounded-sm border-amber-500/30"
                      >
                        {activeLang === "id" ? "MASA KEJAYAAN (447 SM - Abad ke-4 M)" : "ERA OF GLORY (447 BC - 4th Century AD)"}
                      </div>
                      
                      <h5 className="text-xs font-black uppercase tracking-tight text-slate-900 dark:text-white mb-2">
                        {activeLang === "id" ? "Mengapa Kuil Ini Dibangun?" : "Why Was The Temple Constructed?"}
                      </h5>
                      <p className={`text-xs leading-relaxed mb-4 ${isDark ? "text-white" : "text-slate-700 font-medium"}`}>
                        {activeLang === "id" 
                          ? "Dibangun atas inisiatif negarawan agung Perikles untuk merayakan kemenangan mutlak pasukan koalisi Yunani atas invasi Kekaisaran Persia. Parthenon menjadi simbol supremasi militer, kekayaan budaya, dan kepemimpinan demokratis kota Athena di dunia Mediterania kuno."
                          : "Commissioned by the supreme statesman Pericles to celebrate the decisive victory of the Greek city-states over the invading Persian Empire. It stood as an epic monument to Athens' cultural supremacy, military peak, and democratic leadership in the ancient Mediterranean."
                        }
                      </p>

                      <h5 className="text-xs font-black uppercase tracking-tight text-slate-900 dark:text-white mb-2">
                        {activeLang === "id" ? "Bagaimana Kuil Digunakan?" : "How Was The Temple Utilized?"}
                      </h5>
                      <p className={`text-xs leading-relaxed ${isDark ? "text-white" : "text-slate-700 font-medium"}`}>
                        {activeLang === "id" 
                          ? "Kuil megah ini didedikasikan sepenuhnya untuk dewi pelindung kota, Athena Parthenos. Selain menjadi kuil persembahan suci dan tempat berdirinya patung gading-emas raksasa karya Pheidias, kuil ini berfungsi praktis sebagai tempat penyimpanan kas negara (perbendaharaan) Liga Delos yang sangat melimpah."
                          : "It was dedicated directly to the patron goddess of the city, Athena Parthenos. Aside from hosting religious offerings and casing the colossal gold-and-ivory statue sculpted by Phidias, it served as the highly secure central treasury of the Delian League."
                        }
                      </p>
                    </div>
                  </div>

                  {/* Ruins Column */}
                  <div className={`p-4 border-2 ${isDark ? "border-slate-800/80 bg-slate-950/45" : "border-slate-200 bg-white"} rounded-sm flex flex-col justify-between`}>
                    <div>
                      <div 
                        style={{ color: '#ffb900', backgroundColor: '#000000' }}
                        className="inline-block px-2 py-0.5 font-mono text-[9px] font-black uppercase tracking-wider border mb-3 rounded-sm border-amber-500/30"
                      >
                        {activeLang === "id" ? "RERUNTUHAN SAAT INI (Modern Era)" : "HOURS OF RUIN (Modern Era)"}
                      </div>

                      <h5 className="text-xs font-black uppercase tracking-tight text-slate-900 dark:text-white mb-2">
                        {activeLang === "id" ? "Mengapa Kuil Ini Runtuh?" : "Why Did The Temple Collapse?"}
                      </h5>
                      <p className={`text-xs leading-relaxed mb-4 ${isDark ? "text-white" : "text-slate-700 font-medium"}`}>
                        {activeLang === "id" 
                          ? "Meskipun sempat diubah menjadi gereja Kristen dan masjid Islam, bencana dahsyat menimpa pada tahun 1687 saat pengepungan tentara Venesia terhadap garnisun Kesultanan Utsmaniyah (Ottoman). Pasukan Ottoman menggunakan Parthenon sebagai gudang bubuk mesiu karena mengira musuh tidak akan menembaki situs bersejarah ini."
                          : "While surviving as a Christian church and later an Ottoman mosque, absolute tragedy hit in 1687 during the Venetian siege of the Ottoman Acropolis. Expecting invaders to spare the temple out of respect, the Ottoman garrison utilized the Parthenon as an active gunpowder magazine."
                        }
                      </p>

                      <h5 className="text-xs font-black uppercase tracking-tight text-slate-900 dark:text-white mb-2">
                        {activeLang === "id" ? "Ledakan Mortir 1687 & Penjarahan Artwork" : "The 1687 Mortar Blast & Art Salvage"}
                      </h5>
                      <p className={`text-xs leading-relaxed ${isDark ? "text-white" : "text-slate-700 font-medium"}`}>
                        {activeLang === "id" 
                          ? "Tembakan mortir artileri Venesia menghantam tumpukan mesiu tersebut secara langsung, memicu ledakan kosmis dahsyat yang meruntuhkan bagian tengah, merubuhkan pilar-pilar besar, dan menghancurkan patung relief di pedimen. Di awal abad ke-19, Lord Elgin menjarah sisa-sisa marmer terbaik (Elgin Marbles) ke Inggris, menyisakan reruntuhan sunyi seperti sekarang."
                          : "A direct hit from a Venetian mortar bomb ignited the explosives, causing a catastrophic firestorm that instantly blew out the sanctuary interior, toppled massive lateral columns, and shattered priceless high-relief sculptures. In the early 1800s, Lord Elgin removed the finest remaining marble sculptures to Britain, leaving the silent skeleton we see today."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Educational Sidemenu Hotspots list */}
            <aside className="lg:col-span-4 space-y-6">
              
              {/* Fun Fact interactive panel deck */}
              <div className={`p-6 border-4 ${
                isDark ? "border-amber-400 bg-slate-900" : "border-amber-400 bg-amber-50"
              } relative overflow-hidden flex flex-col justify-between min-h-[220px]`}>
                
                {/* Visual sparkles absolute accent */}
                <Sparkles className="absolute -right-2 -top-2 w-16 h-16 opacity-10 pointer-events-none rotate-12 text-amber-500" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 bg-amber-400 text-slate-950">
                      💡 Quick Fact
                    </span>
                    <button 
                      onClick={() => setFunFactIndex((funFactIndex + 1) % funFacts.length)}
                      className={`font-mono text-[10px] font-bold uppercase underline hover:text-amber-500 flex items-center gap-1`}
                    >
                      <RotateCcw className="w-3 h-3" />
                      {activeLang === "id" ? "Acak" : "Shuffle"}
                    </button>
                  </div>
                  
                  <h4 className="text-base font-black uppercase tracking-tight mb-2">
                    {activeLang === "id" ? currentFact.title_id : currentFact.title_en}
                  </h4>
                  <p className="text-xs leading-relaxed opacity-90">
                    {activeLang === "id" ? currentFact.text_id : currentFact.text_en}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-300 dark:border-amber-900/60 flex justify-between items-center text-[10px] font-mono text-slate-500">
                  <span>{activeLang === "id" ? "Klik Acak untuk fakta komparasi" : "Press shuffle to switch historical facts"}</span>
                  <span>{funFactIndex + 1}/{funFacts.length}</span>
                </div>
              </div>

              {/* Hotspot triggers */}
              <div className={`border-4 overflow-hidden ${
                isDark ? "border-[#f8fafc] bg-[#112240]" : "border-[#0f172a] bg-white"
              } transition-all duration-300`}>
                <div className="p-4 border-b-2 border-slate-900 dark:border-slate-100 bg-amber-400 text-slate-950 flex items-center justify-between">
                  <h3 className="font-mono text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    {dict.hotspotsTitle}
                  </h3>
                  <span className="font-mono text-xs font-bold">
                    {activeLang === "id" ? "[03 Titik]" : "[03 Spots]"}
                  </span>
                </div>

                <div className="divide-y-2 divide-slate-150 dark:divide-slate-800">
                  {hotspotsData.map((hotspot) => {
                    const isSelected = activeHotspot === hotspot.id;
                    const quiz = hotspotQuizzes[hotspot.id];
                    const userAns = selectedQuizOpt[hotspot.id];
                    const hasAnswered = userAns !== null;
                    const isCorrect = userAns === quiz?.correctIdx;

                    return (
                      <div key={hotspot.id} className="transition-all duration-300">
                        <button
                          type="button"
                          onClick={() => setActiveHotspot(hotspot.id)}
                          className={`w-full p-4 text-left transition-all duration-200 outline-none flex items-start gap-3 ${
                            isSelected 
                              ? isDark
                                ? "bg-slate-800 text-white" 
                                : "bg-slate-100 text-slate-900"
                              : "hover:bg-slate-50 dark:hover:bg-slate-800/40"
                          }`}
                          aria-pressed={isSelected}
                        >
                          <span className={`grid w-7 h-7 shrink-0 place-items-center font-mono text-xs font-extrabold border-2 ${
                            isSelected 
                              ? "bg-amber-400 text-slate-950 border-[#0f172a] dark:border-[#f8fafc]" 
                              : "border-slate-300 dark:border-slate-600 text-slate-400"
                          }`}>
                            {hotspot.number}
                          </span>
                          <div className="flex-1">
                            <p className={`font-bold text-sm uppercase tracking-tight flex items-center gap-1.5 ${
                              isSelected 
                                ? (isDark ? "text-amber-400" : "text-slate-950") 
                                : (isDark ? "text-white" : "text-slate-700")
                            }`}>
                              {activeLang === "id" ? hotspot.title_id : hotspot.title_en}
                              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />}
                            </p>
                            <p className={`text-xs mt-1 leading-relaxed ${
                              isSelected 
                                ? (isDark ? "text-white font-medium opacity-100" : "text-slate-900 font-medium opacity-100") 
                                : (isDark ? "text-white opacity-90" : "text-slate-650 opacity-90")
                            }`}>
                              {activeLang === "id" ? hotspot.description_id : hotspot.description_en}
                            </p>
                          </div>
                        </button>

                        {/* Interactive Nested Quiz Content for Selected Hotspot */}
                        <AnimatePresence>
                          {isSelected && quiz && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                              className={`overflow-hidden border-t ${isDark ? "bg-slate-900/60 border-slate-800" : "bg-amber-500/5 border-slate-200"}`}
                            >
                              <div className="p-4 space-y-3">
                                <div className="flex items-center gap-1.5 text-amber-500 dark:text-amber-400 font-mono text-[10px] font-black uppercase">
                                  <Sparkles className="w-3.5 h-3.5" />
                                  <span>{activeLang === "id" ? "Kuis Lapangan Interaktif" : "Spot Quiz Integration"}</span>
                                </div>
                                
                                <h5 className={`text-xs font-black leading-snug ${isDark ? "text-white" : "text-slate-900"}`}>
                                  {activeLang === "id" ? quiz.question_id : quiz.question_en}
                                </h5>

                                {/* Options list */}
                                <div className="space-y-1.5 pt-1">
                                  {(activeLang === "id" ? quiz.options_id : quiz.options_en).map((opt, idx) => {
                                    const isOptSelected = userAns === idx;
                                    let optStyle = isDark 
                                      ? "border-slate-800 bg-slate-900/80 text-slate-300 hover:border-amber-400" 
                                      : "border-slate-200 bg-white text-slate-700 hover:border-amber-500";
                                    
                                    if (hasAnswered) {
                                      if (idx === quiz.correctIdx) {
                                        optStyle = "border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold";
                                      } else if (isOptSelected) {
                                        optStyle = "border-rose-500 bg-rose-500/10 text-rose-600 dark:text-rose-400";
                                      } else {
                                        optStyle = "border-slate-100 opacity-40 pointer-events-none dark:border-slate-800";
                                      }
                                    }

                                    return (
                                      <button
                                        key={idx}
                                        disabled={hasAnswered}
                                        onClick={() => {
                                          setSelectedQuizOpt(prev => ({
                                            ...prev,
                                            [hotspot.id]: idx
                                          }));
                                        }}
                                        className={`w-full text-left p-2.5 text-xs border transition-all duration-150 flex items-center justify-between font-medium ${optStyle}`}
                                      >
                                        <span>{opt}</span>
                                        {hasAnswered && idx === quiz.correctIdx && (
                                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 ml-1.5" />
                                        )}
                                      </button>
                                    );
                                  })}
                                </div>

                                {/* Answers Explanation pop */}
                                {hasAnswered && (
                                  <div className={`p-3 border-2 text-xs leading-relaxed transition-all duration-200 ${
                                    isCorrect 
                                      ? "bg-emerald-500/10 border-emerald-500 text-emerald-850 dark:text-emerald-300"
                                      : "bg-rose-500/10 border-rose-500 text-rose-850 dark:text-rose-300"
                                  }`}>
                                    <p className="font-mono font-black uppercase text-[10px] tracking-wider mb-1 flex items-center gap-1">
                                      {isCorrect 
                                        ? `🎉 ${activeLang === "id" ? "Jawaban Tepat!" : "Excellent Work!"}`
                                        : `❌ ${activeLang === "id" ? "Belum Tepat" : "Incorrect Answer"}`
                                      }
                                    </p>
                                    <p className="text-xs">
                                      {activeLang === "id" ? quiz.explanation_id : quiz.explanation_en}
                                    </p>
                                    
                                    <div className="mt-3 flex justify-end">
                                      <button
                                        onClick={() => {
                                          setSelectedQuizOpt(prev => ({
                                            ...prev,
                                            [hotspot.id]: null
                                          }));
                                        }}
                                        className={`px-2 py-1 font-mono text-[9px] font-black uppercase border-2 transition-all duration-150 ${
                                          isDark 
                                            ? "border-[#f8fafc] bg-[#112240] text-white hover:bg-amber-400 hover:text-slate-950" 
                                            : "border-[#0f172a] bg-slate-100 text-slate-950 hover:bg-amber-400"
                                        }`}
                                      >
                                        {activeLang === "id" ? "Ulangi" : "Try Again"}
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </aside>
          </section>

          {/* SECTION 4: WebAR Mobile & Marker Hub */}
          <section className={`mb-14 scroll-mt-24 border-4 p-6 sm:p-8 ${
            isDark ? "border-[#f8fafc] bg-[#112240] neo-shadow-dark" : "border-[#0f172a] bg-white neo-shadow"
          }`} id="webar-marker-hub">
            
            {/* Header */}
            <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-slate-900 dark:border-slate-200 pb-5">
              <div>
                <span className="font-mono text-xs font-black uppercase tracking-wider text-amber-500 dark:text-amber-400 block mb-1">
                  {activeLang === "id" ? "Visualisasi Dunia Nyata (Bebas Lisensi)" : "Native Real-World AR Projection (Open-Source)"}
                </span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter leading-none">
                  {activeLang === "id" ? "Portal WebAR & Pusat Marker" : "WebAR Mobile Hub & Marker Center"}
                </h2>
                <p className="text-xs sm:text-sm mt-2 max-w-2xl opacity-85 leading-relaxed">
                  {activeLang === "id" 
                    ? "Teknologi Augmented Reality tanpa instalasi aplikasi tambahan. Cukup gunakan kamera smartphone Anda untuk memproyeksikan model 3D Parthenon langsung di atas meja Anda secara interaktif."
                    : "Experience frictionless Augmented Reality with zero app installs required. Simply use your mobile device's browser to project the interactive 3D Parthenon right onto your physical desk."
                  }
                </p>
              </div>

              <div className={`px-3 py-1.5 text-xs font-mono font-bold uppercase border-2 flex items-center gap-1.5 shrink-0 h-fit ${
                isDark ? "border-[#f8fafc] bg-slate-800 text-amber-300" : "border-[#0f172a] bg-slate-150 text-amber-600"
              }`}>
                <Camera className="w-4 h-4 text-amber-500 shrink-0" />
                <span>WebXR & AR.js Ready</span>
              </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: QR Code Mobile Entrance */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                <div className={`p-5 border-2 ${
                  isDark ? "border-slate-800 bg-slate-950/50" : "border-slate-200 bg-slate-50/50"
                } rounded-sm flex flex-col h-full`}>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <QrCode className="w-5 h-5 text-amber-500" />
                    <h3 className="font-mono text-xs font-black uppercase tracking-wider">
                      {activeLang === "id" ? "Langkah 1: Scan HP Anda" : "Step 1: Scan With Phone"}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-5 mb-5">
                    {/* QR Code Container */}
                    <div className="bg-white p-3 border-4 border-slate-900 rounded-sm shrink-0 shadow-md">
                      <img 
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
                          typeof window !== 'undefined' ? `${window.location.origin}/ar-camera.html` : "https://parthenon-explorer.com/ar-camera.html"
                        )}`}
                        alt="WebAR Entrance QR Code"
                        className="w-36 h-36"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex-1">
                      <p className="text-xs font-sans leading-relaxed mb-3">
                        {activeLang === "id"
                          ? "Scan QR Code di samping menggunakan kamera HP bawaan untuk masuk ke portal kamera AR interaktif kami."
                          : "Scan this QR code using your standard mobile phone camera app to securely launch the native WebAR camera lens."
                        }
                      </p>
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold">
                          {activeLang === "id" ? "Link Kamera AR Langsung:" : "Direct WebAR Camera Link:"}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <code className="text-[11px] font-mono bg-slate-200 dark:bg-slate-900 px-2 py-1 rounded truncate max-w-[150px] sm:max-w-[180px] block">
                            {typeof window !== 'undefined' ? `${window.location.origin}/ar-camera.html` : "/ar-camera.html"}
                          </code>
                          <button
                            type="button"
                            onClick={() => {
                              if (typeof window !== 'undefined') {
                                navigator.clipboard.writeText(`${window.location.origin}/ar-camera.html`);
                                setCopiedLink(true);
                                setTimeout(() => setCopiedLink(false), 2000);
                              }
                            }}
                            className="p-1.5 bg-amber-400 hover:bg-amber-500 text-slate-950 rounded-sm active:scale-90 transition-all shadow"
                            title="Copy link to clipboard"
                          >
                            {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                        {copiedLink && (
                          <span className="text-[10px] font-mono font-bold text-emerald-500 block animate-pulse">
                            {activeLang === "id" ? "✓ Berhasil disalin!" : "✓ Copied to clipboard!"}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Open Direct Button */}
                  <a 
                    href="/ar-camera.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-[#0f172a] hover:bg-slate-800 text-white font-mono text-xs font-black uppercase tracking-wider text-center border-2 border-amber-500/40 rounded-sm flex items-center justify-center gap-2 transition-all duration-150"
                  >
                    <span>{activeLang === "id" ? "Buka Kamera AR di Tab Baru" : "Launch Camera in New Tab"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: HIRO Marker & Simulation */}
              <div className="lg:col-span-7 flex flex-col gap-5">
                <div className={`p-5 border-2 ${
                  isDark ? "border-slate-800 bg-slate-950/50" : "border-slate-200 bg-slate-50/50"
                } rounded-sm flex flex-col items-center justify-between`}>
                  
                  <div className="flex justify-between items-center w-full mb-3">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-amber-500" />
                      <h3 className="font-mono text-xs font-black uppercase tracking-wider">
                        {activeLang === "id" ? "Langkah 2: Arahkan ke Marker Ini" : "Step 2: Point at this AR Marker"}
                      </h3>
                    </div>
                    {/* Simulated live indicators */}
                    <div className="flex items-center gap-1.5 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/30">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                      <span className="font-mono text-[9px] font-black text-rose-500 uppercase font-bold">SCAN TARGET</span>
                    </div>
                  </div>

                  {/* Marker and AR simulator viewport */}
                  <div className="relative w-full max-w-[280px] aspect-square bg-white border-8 border-slate-900 rounded-lg p-6 shadow-xl flex items-center justify-center overflow-hidden group">
                    
                    {/* Official Hiro Marker Image */}
                    <img 
                      src={hiroMarkerUrl}
                      onError={handleHiroError}
                      alt="Hiro AR Marker Target"
                      onClick={() => setIsMarkerZoomed(true)}
                      title={activeLang === "id" ? "Klik untuk memperbesar / unduh marker" : "Click to enlarge / download marker"}
                      className={`w-full h-full cursor-zoom-in transition-all duration-300 hover:scale-[1.04] active:scale-95 ${simulatedHover ? "opacity-30 blur-[2px]" : "opacity-100"}`}
                      referrerPolicy="no-referrer"
                    />

                    {/* Helper click indicator overlay */}
                    {!simulatedHover && (
                      <div className="absolute bottom-2 right-2 bg-slate-900/90 text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center gap-1">
                        <span>🔍</span>
                        <span>{activeLang === "id" ? "KLIK UNTUK MEMPERBESAR" : "CLICK TO ZOOM"}</span>
                      </div>
                    )}

                    {/* Interactive 3D Model Simulator Overlay */}
                    {simulatedHover && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#090d16] z-20 animate-fade-in pointer-events-auto">
                        
                        {/* Scanning beam effect */}
                        <div className="absolute left-0 right-0 h-1 bg-amber-400 shadow-[0_0_20px_#ffb900] top-0 animate-scan z-30 pointer-events-none"></div>
                        
                        {/* Interactive Sketchfab Iframe */}
                        <iframe 
                          src={`${modesData[activeMode]?.src}?autostart=1&preload=1&ui_controls=1&ui_infos=0&ui_watermark=0`}
                          title={activeLang === "id" ? "Simulasi Model 3D Parthenon" : "Parthenon 3D Simulation"}
                          className="w-full h-full border-none pointer-events-auto"
                          allow="autoplay; fullscreen; xr-spatial-tracking"
                        ></iframe>

                        {/* Top Status Indicator Overlay */}
                        <div className="absolute top-2 left-2 bg-slate-950/90 text-[#ffb900] border border-amber-500/30 font-mono text-[8px] font-bold px-1.5 py-0.5 rounded tracking-wider uppercase z-30 pointer-events-none flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          <span>
                            {activeLang === "id" 
                              ? `SIMULASI: ${activeMode === "rebuilt" ? "REKONSTRUKSI" : "RERUNTUHAN"}` 
                              : `SIMULATING: ${activeMode === "rebuilt" ? "RECONSTRUCTED" : "RUINS"}`
                            }
                          </span>
                        </div>

                        {/* Quick Exit Button overlay */}
                        <button 
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSimulatedHover(false);
                          }}
                          className="absolute bottom-2 right-2 bg-slate-950 hover:bg-rose-600 text-white hover:text-white border border-slate-800 hover:border-rose-500 font-mono text-[8px] font-bold px-1.5 py-0.5 rounded transition-all active:scale-95 z-30 pointer-events-auto shadow-md"
                        >
                          {activeLang === "id" ? "MATIKAN" : "DISABLE"}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Zoomed Marker Modal */}
                  <AnimatePresence>
                    {isMarkerZoomed && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
                        onClick={() => setIsMarkerZoomed(false)}
                      >
                        <motion.div 
                          initial={{ scale: 0.9, y: 20 }}
                          animate={{ scale: 1, y: 0 }}
                          exit={{ scale: 0.9, y: 20 }}
                          transition={{ type: "spring", damping: 25, stiffness: 350 }}
                          className="bg-[#0f172a] border-4 border-slate-700 p-6 sm:p-8 rounded-lg max-w-lg w-full shadow-2xl relative"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {/* Close Button */}
                          <button 
                            type="button"
                            onClick={() => setIsMarkerZoomed(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors active:scale-90"
                            title="Tutup / Close"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>

                          {/* Modal Header */}
                          <div className="text-center mb-5">
                            <span className="font-mono text-[10px] font-black uppercase text-amber-400 tracking-wider">
                              {activeLang === "id" ? "MARKER PELACAKAN AR AKTIF" : "ACTIVE AR TRACKING ANCHOR"}
                            </span>
                            <h3 className="text-xl font-black uppercase text-white mt-1">
                              {activeLang === "id" ? "Pola Marker HIRO Resmi" : "Official HIRO Marker Target"}
                            </h3>
                            <p className="text-xs text-slate-400 mt-1">
                              {activeLang === "id" 
                                ? "Gunakan tampilan ini untuk memindai langsung menggunakan kamera HP Anda."
                                : "Hold your smartphone camera up to scan this high-contrast screen anchor."
                              }
                            </p>
                          </div>

                          {/* Giant Pixel-Perfect High-Contrast Marker Canvas */}
                          <div className="bg-white p-8 rounded-sm shadow-inner flex items-center justify-center mb-6 max-w-[280px] sm:max-w-[320px] mx-auto aspect-square border-2 border-slate-200">
                            <img 
                              src={hiroMarkerUrl}
                              onError={handleHiroError}
                              alt="Official Hiro Marker Target Zoomed"
                              className="w-full h-full object-contain select-none"
                              style={{ imageRendering: "pixelated" }}
                              referrerPolicy="no-referrer"
                            />
                          </div>

                          {/* Action Row */}
                          <div className="flex flex-col sm:flex-row gap-3">
                            <a 
                              href={hiroMarkerUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 py-2 px-4 bg-amber-400 hover:bg-amber-500 text-slate-950 font-mono text-xs font-black uppercase text-center rounded-sm transition-all flex items-center justify-center gap-2 shadow"
                            >
                              <span>{activeLang === "id" ? "Unduh Gambar (PNG)" : "Download Marker (PNG)"}</span>
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                            </a>
                            <button
                              type="button"
                              onClick={() => {
                                const win = window.open();
                                if (win) {
                                  win.document.write(`
                                    <html>
                                      <head>
                                        <title>Print HIRO AR Marker</title>
                                        <style>
                                          body { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; font-family: sans-serif; background: #fff; }
                                          img { width: 450px; height: 450px; object-fit: contain; }
                                          p { font-size: 14px; color: #555; margin-top: 20px; }
                                          button { padding: 10px 20px; font-size: 14px; font-weight: bold; background: #000; color: #fff; border: none; border-radius: 4px; cursor: pointer; margin-bottom: 20px; }
                                          @media print { button { display: none; } }
                                        </style>
                                      </head>
                                      <body>
                                        <button onclick="window.print()">Print Marker</button>
                                        <img src="${hiroMarkerUrl}" referrerPolicy="no-referrer" />
                                        <p>Arahkan kamera WebAR ke pola di atas. Pastikan batas luar putih terlihat.</p>
                                      </body>
                                    </html>
                                  `);
                                  win.document.close();
                                }
                              }}
                              className="flex-1 py-2 px-4 bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-black uppercase text-center rounded-sm transition-all border border-slate-600 flex items-center justify-center gap-2"
                            >
                              <span>{activeLang === "id" ? "Cetak Marker" : "Print Marker Target"}</span>
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                              </svg>
                            </button>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Simulation Trigger button */}
                  <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                    <p className="text-xs opacity-75 max-w-sm">
                      {activeLang === "id"
                        ? "Arahkan kamera HP Anda ke marker HIRO di atas untuk menayangkan Parthenon."
                        : "Focus your mobile WebAR camera lens strictly inside the HIRO square outer border."
                      }
                    </p>
                    <button
                      type="button"
                      onMouseEnter={() => setSimulatedHover(true)}
                      onMouseLeave={() => setSimulatedHover(false)}
                      onClick={() => setSimulatedHover(!simulatedHover)}
                      className={`px-3 py-1.5 font-mono text-[10px] font-black uppercase border-2 shrink-0 rounded-sm transition-all duration-200 ${
                        simulatedHover
                          ? "bg-amber-400 text-slate-950 border-amber-400 shadow-[0_4px_12px_rgba(255,185,0,0.3)]"
                          : isDark
                            ? "border-slate-700 hover:border-amber-400 text-slate-300"
                            : "border-slate-300 hover:border-amber-500 text-slate-700"
                      }`}
                    >
                      {activeLang === "id" ? "Simulasikan AR" : "Simulate AR Projection"}
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Steps and FAQ section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
              
              {/* Step By Step Guide */}
              <div>
                <h4 className="font-mono text-xs font-black uppercase tracking-wider text-slate-800 dark:text-[#ffb900] mb-4 flex items-center gap-2">
                  <span className="bg-amber-400 text-slate-950 w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-black">?</span>
                  {activeLang === "id" ? "Panduan Menjalankan WebAR" : "WebAR Step-By-Step Playbook"}
                </h4>

                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      title_id: "Scan & Izinkan Kamera",
                      title_en: "Scan & Authorize Camera",
                      desc_id: "Arahkan HP ke QR Code dan klik linknya. Izinkan peramban (browser) HP untuk mengakses sensor kamera belakang saat muncul popup izin.",
                      desc_en: "Point your phone camera to the QR. Allow backend hardware camera permissions on your mobile browser popup when prompted."
                    },
                    {
                      id: 2,
                      title_id: "Pilih Mode Tampilan",
                      title_en: "Toggle Preferred Timeline",
                      desc_id: "Di layar HP, pilih antara tombol 'Masa Kejayaan' (kuil utuh berwarna) atau 'Reruntuhan' (struktur runtuh paska ledakan Venesia) sesuai riset Anda.",
                      desc_en: "On your phone HUD, choose either 'Golden Age' (fully intact) or 'Present Ruins' (collapsed state) to reflect the historical era."
                    },
                    {
                      id: 3,
                      title_id: "Tempatkan di Atas Meja",
                      title_en: "Align & Enjoy",
                      desc_id: "Hadapkan kamera HP Anda tegak lurus ke arah marker HIRO di monitor komputer Anda. Model 3D Parthenon virtual akan muncul mengapung secara interaktif!",
                      desc_en: "Keep your mobile camera steady and focus on the screen's HIRO marker. The virtual 3D Parthenon instantly locks and floats on your desk!"
                    }
                  ].map((step) => (
                    <div key={step.id} className="flex gap-3">
                      <span className="font-mono text-xs font-black text-amber-500 w-5 shrink-0">
                        0{step.id}.
                      </span>
                      <div>
                        <h5 className="text-xs font-black uppercase text-slate-900 dark:text-white mb-1">
                          {activeLang === "id" ? step.title_id : step.title_en}
                        </h5>
                        <p className="text-xs leading-relaxed opacity-80">
                          {activeLang === "id" ? step.desc_id : step.desc_en}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Troubleshooting FAQ Accordion */}
              <div>
                <h4 className="font-mono text-xs font-black uppercase tracking-wider text-slate-800 dark:text-[#ffb900] mb-4 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-500" />
                  {activeLang === "id" ? "Pecahkan Masalah (FAQ)" : "WebAR Troubleshooting (FAQ)"}
                </h4>

                <div className="space-y-2.5">
                  {[
                    {
                      id: 0,
                      q_id: "Mengapa kamera HP saya mendadak tidak menyala?",
                      q_en: "Why is my mobile camera not loading or streaming?",
                      a_id: "Hal ini umum terjadi karena browser menolak izin akses kamera. Anda bisa membuka Pengaturan Browser, cari izin situs ini, lalu ganti menjadi 'Izinkan Kamera', lalu muat ulang halaman kamera tersebut.",
                      a_en: "This occurs if camera permissions were previously denied. Go to your mobile browser Settings, check Site Permissions, switch Camera to 'Allowed', and refresh the WebAR portal."
                    },
                    {
                      id: 1,
                      q_id: "Apakah teknologi AR gratisan ini aman bagi privasi?",
                      q_en: "Is this free WebAR tracking safe for my privacy?",
                      a_id: "100% Aman! Seluruh proses pengenalan marker HIRO dan render objek 3D berjalan lokal di dalam HP Anda. Tidak ada data video kamera yang dikirim ke server luar manapun.",
                      a_en: "Absolutely! All HIRO marker detection and 3D rendering are computed entirely on-device inside your browser. No video data or logs ever leave your device."
                    },
                    {
                      id: 2,
                      q_id: "Bisakah saya mencobanya tanpa printer?",
                      q_en: "Do I need to print the marker on actual paper?",
                      a_id: "Sama sekali tidak perlu! Cukup biarkan marker kotak HIRO di atas tetap terbuka di layar laptop/komputer Anda, lalu scan dengan HP Anda secara langsung dari jarak 30-50 cm.",
                      a_en: "No printing required! Simply keep this web page open on your monitor and point your phone at the HIRO marker directly from about 1-2 feet away."
                    }
                  ].map((faq) => {
                    const isOpen = openFaq === faq.id;
                    return (
                      <div key={faq.id} className={`border-2 ${
                        isDark ? "border-slate-800 bg-slate-950/20" : "border-slate-200 bg-white"
                      } rounded-sm overflow-hidden`}>
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                          className="w-full p-3 text-left flex justify-between items-center outline-none hover:bg-slate-50 dark:hover:bg-slate-900/40"
                        >
                          <span className="text-xs font-black uppercase text-slate-900 dark:text-white leading-tight pr-4">
                            {activeLang === "id" ? faq.q_id : faq.q_en}
                          </span>
                          <span className={`text-xs font-mono font-black text-amber-500 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}>
                            ▶
                          </span>
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="p-3 border-t border-slate-150 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 text-xs leading-relaxed opacity-90">
                                {activeLang === "id" ? faq.a_id : faq.a_en}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </section>

          {/* Architectural Capitals Interactive 3D Explorer Section */}
          <section className="mb-14 scroll-mt-24" id="capitals-explorer" aria-labelledby="capitals-heading">
            <div className="mb-6">
              <p className="font-mono text-xs font-black uppercase tracking-wider text-amber-500 dark:text-amber-400 mb-2">
                {activeLang === "id" ? "Eksplorasi Detail Ornamen" : "Architectural Ornament Exploration"}
              </p>
              <h2 id="capitals-heading" className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
                {activeLang === "id" ? "Tiga Ordo Pilar Klasik" : "Three Classical Column Orders"}
              </h2>
            </div>

            <div className={`grid grid-cols-1 lg:grid-cols-12 border-4 overflow-hidden ${
              isDark ? "border-[#f8fafc] bg-[#112240] neo-shadow-dark" : "border-[#0f172a] bg-white neo-shadow"
            } transition-all duration-300`}>
              
              {/* Left Column: Sketchfab Embedded Viewport */}
              <div className="col-span-1 lg:col-span-6 flex flex-col bg-slate-950 border-b-4 lg:border-b-0 lg:border-r-4 border-slate-900 dark:border-slate-100 relative min-h-[420px]">
                
                {/* Visual indicator corner badge */}
                <div className="absolute top-4 left-4 z-20 bg-slate-900/90 border border-slate-800 text-slate-300 p-2 font-mono text-[9px] uppercase leading-none rounded-sm flex items-center gap-1.5 select-none font-black">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block" />
                  <span>
                    {activeLang === "id" ? "3D Kepala Pilar Ordo Klasik" : "3D Column Capital Order"}
                  </span>
                </div>

                <div className="flex-1 flex items-center justify-center w-full p-4 md:p-6">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <iframe 
                      title="The Parthenon in 3D | The Capitals" 
                      frameBorder="0" 
                      allowFullScreen 
                      mozallowfullscreen="true" 
                      webkitallowfullscreen="true" 
                      allow="autoplay; fullscreen; xr-spatial-tracking" 
                      xr-spatial-tracking="true"
                      execution-while-out-of-viewport="true" 
                      execution-while-not-rendered="true" 
                      web-share="true" 
                      src="https://sketchfab.com/models/1a70e54ebd2046ecb696e43c311e0dc8/embed"
                      className="w-full h-full absolute inset-0 border-0"
                    />
                  </div>
                </div>

                {/* Caption / Author info */}
                <div className="p-3 bg-slate-900/90 text-slate-400 text-[10px] font-mono flex flex-wrap items-center justify-between gap-2 border-t border-slate-800 shrink-0 w-full">
                  <span>
                    {activeLang === "id" ? "Model: Kepala Pilar 3D Terintegrasi" : "Model: 3D Classical Capitals"}
                  </span>
                  <a 
                    href="https://sketchfab.com/3d-models/the-parthenon-in-3d-the-capitals-1a70e54ebd2046ecb696e43c311e0dc8"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-amber-400 hover:underline flex items-center gap-1 font-bold"
                  >
                    Sketchfab Open Mirror <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Tab Swapper with Explanations */}
              <div className="col-span-1 lg:col-span-6 p-5 sm:p-8 flex flex-col justify-between bg-white dark:bg-[#0d1e36]">
                <div>
                  
                  {/* Selector Tabs Button Group */}
                  <div className="grid grid-cols-3 gap-2.5 mb-6" role="tablist" aria-label="Capitals Swapper">
                    {(["doric", "ionic", "corinthian"] as const).map((key) => {
                      const isActive = selectedCapital === key;
                      const title = capitalsData[key][activeLang === "id" ? "title_id" : "title_en"].split(" ")[0];
                      return (
                        <button
                          key={key}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          onClick={() => setSelectedCapital(key)}
                          onMouseEnter={() => setSelectedCapital(key)}
                          className={`py-3 px-2 text-center font-mono text-[11px] font-black uppercase border-2 transition-all duration-150 outline-none ${
                            isActive
                              ? isDark
                                ? "bg-amber-450 text-slate-950 border-white"
                                : "bg-[#0f172a] text-white border-[#0f172a] shadow-[4px_4px_0_#facc15]"
                              : isDark
                                ? "bg-slate-850 hover:bg-slate-800 text-slate-300 border-slate-700"
                                : "bg-white hover:bg-slate-100 text-slate-700 border-slate-300"
                          }`}
                        >
                          {title}
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Capital Metadata Display */}
                  <div className="space-y-4 min-h-[240px] sm:min-h-[200px] lg:min-h-[220px]">
                    <div className="space-y-1">
                      <span className="inline-block px-2.5 py-0.5 font-mono text-[9px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 rounded-sm">
                        {activeLang === "id" ? "ORDO KLASIK" : "CLASSICAL ORDER"}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900 dark:text-slate-100">
                        {activeLang === "id" ? capitalsData[selectedCapital].title_id : capitalsData[selectedCapital].title_en}
                      </h3>
                    </div>

                    {/* Timeline & Geographic Origin spec board */}
                    <div className="grid grid-cols-2 gap-3 pb-4 border-b border-dashed border-slate-300 dark:border-slate-750 font-mono text-[11px] uppercase">
                      <div className="p-2 border border-slate-300 dark:border-slate-800 bg-white/40 dark:bg-slate-950/20">
                        <span className="block text-[9px] text-slate-400 dark:text-slate-400 font-extrabold">
                          {activeLang === "id" ? "⏱️ ERA ASAL" : "⏱️ TIMELINE"}
                        </span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          {activeLang === "id" ? capitalsData[selectedCapital].era_id : capitalsData[selectedCapital].era_en}
                        </span>
                      </div>
                      <div className="p-2 border border-slate-300 dark:border-slate-800 bg-white/40 dark:bg-slate-950/20">
                        <span className="block text-[9px] text-slate-400 dark:text-slate-400 font-extrabold">
                          {activeLang === "id" ? "📍 ASAL WILAYAH" : "📍 GEOGRAPHY"}
                        </span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          {activeLang === "id" ? capitalsData[selectedCapital].origin_id : capitalsData[selectedCapital].origin_en}
                        </span>
                      </div>
                    </div>

                    {/* Core description paragraph */}
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
                      {activeLang === "id" ? capitalsData[selectedCapital].description_id : capitalsData[selectedCapital].description_en}
                    </p>

                    {/* Anatomical bullet key points */}
                    <div className="space-y-2 pt-2">
                      <h4 className={`font-mono text-[10px] font-black uppercase tracking-wider ${isDark ? "text-amber-400" : "text-[#000000] text-black"}`}>
                        {activeLang === "id" ? "Karakteristik Utama Anatomi:" : "Key Anatomical Identifiers:"}
                      </h4>
                      <div className="space-y-1.5">
                        {(activeLang === "id" ? capitalsData[selectedCapital].features_id : capitalsData[selectedCapital].features_en).map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                            <span className="grid w-4 h-4 mt-0.5 place-items-center shrink-0 border border-amber-500 rounded-full text-amber-500 font-mono text-[8px] font-black">
                              {i + 1}
                            </span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-[10px] font-mono text-slate-400 uppercase">
                  <span>{activeLang === "id" ? "Pilih tab ordo pilar di atas" : "Select order tabs to switch details"}</span>
                  <span className="font-bold">Greek Architecture</span>
                </div>
              </div>

            </div>
          </section>

          {/* Parthenon Masterwork Sculptures & Relics 3D Explorer Section */}
          <section className="mb-14 scroll-mt-24" id="pediment-explorer" aria-labelledby="pediment-heading">
            <div className="mb-6 flex flex-col xl:flex-row xl:items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs font-black uppercase tracking-wider text-amber-500 dark:text-amber-400 mb-2">
                  {activeLang === "id" ? "Eksplorasi Karya Seni Pahat & Relik" : "Masterpieces of Sculpture & Relics"}
                </p>
                <h2 id="pediment-heading" className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
                  {activeLang === "id" ? "Seni Relief & Patung Parthenon" : "Sculptural Masterpieces"}
                </h2>
              </div>
              
              {/* Main Sculpture Selector Control */}
              <motion.div 
                style={{ borderColor: '#ffffff' }}
                whileHover={{ scale: 1.01 }}
                className={`p-1.5 border-2 flex flex-wrap items-center gap-1.5 shrink-0 transition-all duration-300 ${
                  isDark 
                    ? "bg-slate-900 hover:bg-black hover:shadow-[0_8px_30px_rgba(255,185,0,0.15)] hover:brightness-110" 
                    : "bg-slate-100 hover:bg-slate-200/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:brightness-95"
                }`}
              >
                {(["athena", "pediment", "frieze", "antefix", "selene_horse"] as const).map((sculptKey) => {
                  const isActive = selectedSculpture === sculptKey;
                  const label = sculptKey === "athena"
                    ? (activeLang === "id" ? "Patung Athena" : "Athena Parthenos")
                    : sculptKey === "pediment"
                    ? (activeLang === "id" ? "Pedimen Barat" : "West Pediment")
                    : sculptKey === "frieze"
                    ? (activeLang === "id" ? "Friz Relik" : "Parthenon Frieze")
                    : sculptKey === "antefix"
                    ? (activeLang === "id" ? "Antefix Atap" : "The Antefix")
                    : (activeLang === "id" ? "Kuda Selene" : "Selene Horse");
                  return (
                    <motion.button
                      key={sculptKey}
                      type="button"
                      onClick={() => setSelectedSculpture(sculptKey)}
                      onMouseEnter={() => setSelectedSculpture(sculptKey)}
                      whileHover={{ scale: 1.06, y: -2 }}
                      whileTap={{ scale: 0.94 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      style={{ color: '#ffb900' }}
                      className={`px-3.5 py-1.5 font-mono text-[11px] font-black uppercase rounded-sm border transition-all duration-200 relative ${
                        isActive
                          ? "bg-[#0f172a] border-[#ffb900]/60 shadow-[0_4px_16px_rgba(255,185,0,0.3)] font-black"
                          : "border-transparent hover:border-[#ffb900]/20 hover:text-slate-800 dark:hover:text-slate-200"
                      }`}
                    >
                      {label}
                    </motion.button>
                  );
                })}
              </motion.div>
            </div>

            <div className={`grid grid-cols-1 lg:grid-cols-12 border-4 overflow-hidden ${
              isDark ? "border-[#f8fafc] bg-[#112240] neo-shadow-dark" : "border-[#0f172a] bg-white neo-shadow"
            } transition-all duration-300`}>
              
              {/* Left Column: Sketchfab Embedded Viewport */}
              <div className="col-span-1 lg:col-span-6 flex flex-col bg-slate-950 border-b-4 lg:border-b-0 lg:border-r-4 border-slate-900 dark:border-slate-100 relative min-h-[420px]">
                
                {/* Visual indicator corner badge */}
                <div className="absolute top-4 left-4 z-20 bg-slate-900/90 border border-slate-800 text-slate-300 p-2 font-mono text-[9px] uppercase leading-none rounded-sm flex items-center gap-1.5 select-none font-black">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block" />
                  <span>
                    {selectedSculpture === "athena" 
                      ? "3D Athena Cult Monument" 
                      : selectedSculpture === "pediment" 
                      ? "3D West Pediment Replica" 
                      : selectedSculpture === "frieze"
                      ? "3D Panathenaic East Frieze Block V"
                      : selectedSculpture === "antefix"
                      ? "3D Parthenon Roof Antefix"
                      : "3D Parthenon Selene Horse"}
                  </span>
                </div>

                <div className="flex-1 flex items-center justify-center w-full p-4 md:p-6">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    {selectedSculpture === "athena" && (
                      <iframe 
                        title="Athena Parthenos" 
                        frameBorder="0" 
                        allowFullScreen 
                        mozallowfullscreen="true" 
                        webkitallowfullscreen="true" 
                        allow="autoplay; fullscreen; xr-spatial-tracking" 
                        xr-spatial-tracking="true"
                        execution-while-out-of-viewport="true" 
                        execution-while-not-rendered="true" 
                        web-share="true" 
                        src="https://sketchfab.com/models/427682aa07484d39a0fed99bdf2429a9/embed"
                        className="w-full h-full absolute inset-0 border-0"
                      />
                    )}
                    {selectedSculpture === "pediment" && (
                      <iframe 
                        title="Nashville Parthenon West Pediment: JSW" 
                        frameBorder="0" 
                        allowFullScreen 
                        mozallowfullscreen="true" 
                        webkitallowfullscreen="true" 
                        allow="autoplay; fullscreen; xr-spatial-tracking" 
                        xr-spatial-tracking="true"
                        execution-while-out-of-viewport="true" 
                        execution-while-not-rendered="true" 
                        web-share="true" 
                        src="https://sketchfab.com/models/61ce499e64f046b89a568fc6c016d28a/embed"
                        className="w-full h-full absolute inset-0 border-0"
                      />
                    )}
                    {selectedSculpture === "frieze" && (
                      <iframe 
                        title="Large scene from Parthenon frieze" 
                        frameBorder="0" 
                        allowFullScreen 
                        mozallowfullscreen="true" 
                        webkitallowfullscreen="true" 
                        allow="autoplay; fullscreen; xr-spatial-tracking" 
                        xr-spatial-tracking="true"
                        execution-while-out-of-viewport="true" 
                        execution-while-not-rendered="true" 
                        web-share="true" 
                        src="https://sketchfab.com/models/d897efe667c24a198c942f4b61fa2549/embed"
                        className="w-full h-full absolute inset-0 border-0"
                      />
                    )}
                    {selectedSculpture === "antefix" && (
                      <iframe 
                        title="The Parthenon in 3D | The Antefix" 
                        frameBorder="0" 
                        allowFullScreen 
                        mozallowfullscreen="true" 
                        webkitallowfullscreen="true" 
                        allow="autoplay; fullscreen; xr-spatial-tracking" 
                        xr-spatial-tracking="true"
                        execution-while-out-of-viewport="true" 
                        execution-while-not-rendered="true" 
                        web-share="true" 
                        src="https://sketchfab.com/models/f8954f8f6e3e497abacc7e0f224eb18c/embed"
                        className="w-full h-full absolute inset-0 border-0"
                      />
                    )}
                    {selectedSculpture === "selene_horse" && (
                      <iframe 
                        title="Parthenon Selene Horse" 
                        frameBorder="0" 
                        allowFullScreen 
                        mozallowfullscreen="true" 
                        webkitallowfullscreen="true" 
                        allow="autoplay; fullscreen; xr-spatial-tracking" 
                        xr-spatial-tracking="true"
                        execution-while-out-of-viewport="true" 
                        execution-while-not-rendered="true" 
                        web-share="true" 
                        src="https://sketchfab.com/models/501a3d7badbe4d1688ec8e616d23a536/embed"
                        className="w-full h-full absolute inset-0 border-0"
                      />
                    )}
                  </div>
                </div>

                {/* Caption / Author info */}
                <div className="p-3 bg-slate-900/90 text-slate-400 text-[10px] font-mono flex flex-wrap items-center justify-between gap-2 border-t border-slate-800 shrink-0 w-full">
                  <span>
                    {selectedSculpture === "athena" 
                      ? (activeLang === "id" ? "Model: SpatialNeglect (Athena Parthenos)" : "Model: SpatialNeglect (Athena Parthenos)")
                      : selectedSculpture === "pediment"
                      ? (activeLang === "id" ? "Model: Soldtunic4 (Nashville West Pediment)" : "Model: Soldtunic4 (Nashville West Pediment)")
                      : selectedSculpture === "frieze"
                      ? (activeLang === "id" ? "Model: danielpett (Parthenon Frieze East Block V)" : "Model: danielpett (Parthenon Frieze East Block V)")
                      : selectedSculpture === "antefix"
                      ? (activeLang === "id" ? "Model: iPedia (The Parthenon Antefix)" : "Model: iPedia (The Parthenon Antefix)")
                      : (activeLang === "id" ? "Model: light_heists (Parthenon Selene Horse)" : "Model: light_heists (Parthenon Selene Horse)")
                    }
                  </span>
                  <a 
                    href={
                      selectedSculpture === "athena"
                        ? "https://sketchfab.com/3d-models/athena-parthenos-427682aa07484d39a0fed99bdf2429a9"
                        : selectedSculpture === "pediment"
                        ? "https://sketchfab.com/3d-models/nashville-parthenon-west-pediment-jsw-61ce499e64f046b89a568fc6c016d28a"
                        : selectedSculpture === "frieze"
                        ? "https://sketchfab.com/3d-models/large-scene-from-parthenon-frieze-d897efe667c24a198c942f4b61fa2549"
                        : selectedSculpture === "antefix"
                        ? "https://sketchfab.com/3d-models/the-parthenon-in-3d-the-antefix-f8954f8f6e3e497abacc7e0f224eb18c"
                        : "https://sketchfab.com/3d-models/parthenon-selene-horse-501a3d7badbe4d1688ec8e616d23a536"
                    } 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-amber-400 hover:underline flex items-center gap-1 font-bold"
                  >
                    Sketchfab Open Mirror <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Sub-Tab Swapper with Explanations */}
              <div className="col-span-1 lg:col-span-6 p-5 sm:p-8 flex flex-col justify-between bg-slate-50 dark:bg-[#0d1e36]">
                <div>
                  
                  {/* Sub-Selector Tabs Button Group based on active sculpture */}
                  <div className="grid grid-cols-3 gap-2.5 mb-6" role="tablist" aria-label="Sculpture Sub-Tabs">
                    {selectedSculpture === "athena" && (["statue", "materials", "nashville_statue"] as const).map((tabKey) => {
                      const isActive = selectedAthenaTab === tabKey;
                      const title = tabKey === "statue" 
                        ? (activeLang === "id" ? "Sejarah" : "History")
                        : tabKey === "materials"
                        ? (activeLang === "id" ? "Teknik" : "Technique")
                        : (activeLang === "id" ? "Replika" : "Replica");
                      return (
                        <button
                          key={tabKey}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          onClick={() => setSelectedAthenaTab(tabKey)}
                          onMouseEnter={() => setSelectedAthenaTab(tabKey)}
                          style={{ color: '#ffb900' }}
                          className={`py-3 px-1 text-center font-mono text-[11px] font-black uppercase border-2 transition-all duration-150 outline-none ${
                            isActive
                              ? isDark
                                ? "bg-amber-450 border-white"
                                : "bg-[#0f172a] border-[#0f172a] shadow-[4px_4px_0_#facc15]"
                              : isDark
                                ? "bg-slate-850 hover:bg-slate-800 border-slate-700"
                                : "bg-white hover:bg-slate-100 border-slate-300"
                          }`}
                        >
                          {title}
                        </button>
                      );
                    })}

                    {selectedSculpture === "pediment" && (["myth", "replica", "artists"] as const).map((tabKey) => {
                      const isActive = selectedPedimentTab === tabKey;
                      const title = tabKey === "myth" 
                        ? (activeLang === "id" ? "Mitos" : "The Myth")
                        : tabKey === "replica"
                        ? (activeLang === "id" ? "Replika 1:1" : "The Replica")
                        : (activeLang === "id" ? "Seniman" : "The Artists");
                      return (
                        <button
                          key={tabKey}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          onClick={() => setSelectedPedimentTab(tabKey)}
                          onMouseEnter={() => setSelectedPedimentTab(tabKey)}
                          style={{ color: '#ffb900' }}
                          className={`py-3 px-1 text-center font-mono text-[11px] font-black uppercase border-2 transition-all duration-150 outline-none ${
                            isActive
                              ? isDark
                                ? "bg-amber-450 border-white"
                                : "bg-[#0f172a] border-[#0f172a] shadow-[4px_4px_0_#facc15]"
                              : isDark
                                ? "bg-slate-850 hover:bg-slate-800 border-slate-700"
                                : "bg-white hover:bg-slate-100 border-slate-300"
                          }`}
                        >
                          {title}
                        </button>
                      );
                    })}

                    {selectedSculpture === "frieze" && (["motif", "symbolism", "preservation"] as const).map((tabKey) => {
                      const isActive = selectedFriezeTab === tabKey;
                      const title = tabKey === "motif" 
                        ? (activeLang === "id" ? "Tema" : "Theme")
                        : tabKey === "symbolism"
                        ? (activeLang === "id" ? "Simbol" : "Symbolism")
                        : (activeLang === "id" ? "Konflik" : "Controversy");
                      return (
                        <button
                          key={tabKey}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          onClick={() => setSelectedFriezeTab(tabKey)}
                          onMouseEnter={() => setSelectedFriezeTab(tabKey)}
                          style={{ color: '#ffb900' }}
                          className={`py-3 px-1 text-center font-mono text-[11px] font-black uppercase border-2 transition-all duration-150 outline-none ${
                            isActive
                              ? isDark
                                ? "bg-amber-450 border-white"
                                : "bg-[#0f172a] border-[#0f172a] shadow-[4px_4px_0_#facc15]"
                              : isDark
                                ? "bg-slate-850 hover:bg-slate-800 border-slate-700"
                                : "bg-white hover:bg-slate-100 border-slate-300"
                          }`}
                        >
                          {title}
                        </button>
                      );
                    })}

                    {selectedSculpture === "antefix" && (["design", "function", "reconstruction"] as const).map((tabKey) => {
                      const isActive = selectedAntefixTab === tabKey;
                      const title = tabKey === "design" 
                        ? (activeLang === "id" ? "Desain" : "Design")
                        : tabKey === "function"
                        ? (activeLang === "id" ? "Fungsi" : "Function")
                        : (activeLang === "id" ? "Warna" : "Polychromy");
                      return (
                        <button
                          key={tabKey}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          onClick={() => setSelectedAntefixTab(tabKey)}
                          onMouseEnter={() => setSelectedAntefixTab(tabKey)}
                          style={{ color: '#ffb900' }}
                          className={`py-3 px-1 text-center font-mono text-[11px] font-black uppercase border-2 transition-all duration-150 outline-none ${
                            isActive
                              ? isDark
                                ? "bg-amber-450 border-white"
                                : "bg-[#0f172a] border-[#0f172a] shadow-[4px_4px_0_#facc15]"
                              : isDark
                                ? "bg-slate-850 hover:bg-slate-800 border-slate-700"
                                : "bg-white hover:bg-slate-100 border-slate-300"
                          }`}
                        >
                          {title}
                        </button>
                      );
                    })}

                    {selectedSculpture === "selene_horse" && (["history", "anatomy", "reconstruction"] as const).map((tabKey) => {
                      const isActive = selectedSeleneTab === tabKey;
                      const title = tabKey === "history" 
                        ? (activeLang === "id" ? "Sejarah" : "History")
                        : tabKey === "anatomy"
                        ? (activeLang === "id" ? "Anatomi" : "Anatomy")
                        : (activeLang === "id" ? "Modern" : "Digital");
                      return (
                        <button
                          key={tabKey}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          onClick={() => setSelectedSeleneTab(tabKey)}
                          onMouseEnter={() => setSelectedSeleneTab(tabKey)}
                          style={{ color: '#ffb900' }}
                          className={`py-3 px-1 text-center font-mono text-[11px] font-black uppercase border-2 transition-all duration-150 outline-none ${
                            isActive
                              ? isDark
                                ? "bg-amber-450 border-white"
                                : "bg-[#0f172a] border-[#0f172a] shadow-[4px_4px_0_#facc15]"
                              : isDark
                                ? "bg-slate-850 hover:bg-slate-800 border-slate-700"
                                : "bg-white hover:bg-slate-100 border-slate-300"
                          }`}
                        >
                          {title}
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Tab Metadata Display & Animated Content block */}
                  <div className="space-y-4 min-h-[460px] sm:min-h-[400px] lg:min-h-[440px] xl:min-h-[380px]">
                    <div className="space-y-1">
                      <span className="inline-block px-2.5 py-0.5 font-mono text-[9px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 rounded-sm">
                        {selectedSculpture === "athena" && (
                          activeLang === "id" 
                            ? athenaSectionData[selectedAthenaTab].status_id 
                            : athenaSectionData[selectedAthenaTab].status_en
                        )}
                        {selectedSculpture === "pediment" && (
                          activeLang === "id" 
                            ? pedimentSectionData[selectedPedimentTab].status_id 
                            : pedimentSectionData[selectedPedimentTab].status_en
                        )}
                        {selectedSculpture === "frieze" && (
                          activeLang === "id" 
                            ? friezeSectionData[selectedFriezeTab].status_id 
                            : friezeSectionData[selectedFriezeTab].status_en
                        )}
                        {selectedSculpture === "antefix" && (
                          activeLang === "id" 
                            ? antefixSectionData[selectedAntefixTab].status_id 
                            : antefixSectionData[selectedAntefixTab].status_en
                        )}
                        {selectedSculpture === "selene_horse" && (
                          activeLang === "id" 
                            ? seleneHorseSectionData[selectedSeleneTab].status_id 
                            : seleneHorseSectionData[selectedSeleneTab].status_en
                        )}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900 dark:text-slate-100">
                        {selectedSculpture === "athena" && (
                          activeLang === "id" 
                            ? athenaSectionData[selectedAthenaTab].title_id 
                            : athenaSectionData[selectedAthenaTab].title_en
                        )}
                        {selectedSculpture === "pediment" && (
                          activeLang === "id" 
                            ? pedimentSectionData[selectedPedimentTab].title_id 
                            : pedimentSectionData[selectedPedimentTab].title_en
                        )}
                        {selectedSculpture === "frieze" && (
                          activeLang === "id" 
                            ? friezeSectionData[selectedFriezeTab].title_id 
                            : friezeSectionData[selectedFriezeTab].title_en
                        )}
                        {selectedSculpture === "antefix" && (
                          activeLang === "id" 
                            ? antefixSectionData[selectedAntefixTab].title_id 
                            : antefixSectionData[selectedAntefixTab].title_en
                        )}
                        {selectedSculpture === "selene_horse" && (
                          activeLang === "id" 
                            ? seleneHorseSectionData[selectedSeleneTab].title_id 
                            : seleneHorseSectionData[selectedSeleneTab].title_en
                        )}
                      </h3>
                    </div>

                    {/* Core description paragraph */}
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-200 font-medium pt-2 border-t border-dashed border-slate-300 dark:border-slate-700">
                      {selectedSculpture === "athena" && (
                        activeLang === "id" 
                          ? athenaSectionData[selectedAthenaTab].desc_id 
                          : athenaSectionData[selectedAthenaTab].desc_en
                      )}
                      {selectedSculpture === "pediment" && (
                        activeLang === "id" 
                          ? pedimentSectionData[selectedPedimentTab].desc_id 
                          : pedimentSectionData[selectedPedimentTab].desc_en
                      )}
                      {selectedSculpture === "frieze" && (
                        activeLang === "id" 
                          ? friezeSectionData[selectedFriezeTab].desc_id 
                          : friezeSectionData[selectedFriezeTab].desc_en
                      )}
                      {selectedSculpture === "antefix" && (
                        activeLang === "id" 
                          ? antefixSectionData[selectedAntefixTab].desc_id 
                          : antefixSectionData[selectedAntefixTab].desc_en
                      )}
                      {selectedSculpture === "selene_horse" && (
                        activeLang === "id" 
                          ? seleneHorseSectionData[selectedSeleneTab].desc_id 
                          : seleneHorseSectionData[selectedSeleneTab].desc_en
                      )}
                    </p>

                    {/* Facts bullet key points */}
                    <div className="space-y-2 pt-2">
                      <h4 className={`font-mono text-[10px] font-black uppercase tracking-wider ${isDark ? "text-amber-400" : "text-[#000000] text-black"}`}>
                        {activeLang === "id" ? "Detail & Fakta Penting:" : "Details & Notable Facts:"}
                      </h4>
                      <div className="space-y-1.5">
                        {selectedSculpture === "athena" && (
                          activeLang === "id" 
                            ? athenaSectionData[selectedAthenaTab].facts_id 
                            : athenaSectionData[selectedAthenaTab].facts_en
                        ).map((fact, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                            <span className="grid w-4 h-4 mt-0.5 place-items-center shrink-0 border border-amber-500 rounded-full text-amber-500 font-mono text-[8px] font-black">
                              ★
                            </span>
                            <span>{fact}</span>
                          </div>
                        ))}
                        {selectedSculpture === "pediment" && (
                          activeLang === "id" 
                            ? pedimentSectionData[selectedPedimentTab].facts_id 
                            : pedimentSectionData[selectedPedimentTab].facts_en
                        ).map((fact, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                            <span className="grid w-4 h-4 mt-0.5 place-items-center shrink-0 border border-amber-500 rounded-full text-amber-500 font-mono text-[8px] font-black">
                              ★
                            </span>
                            <span>{fact}</span>
                          </div>
                        ))}
                        {selectedSculpture === "frieze" && (
                          activeLang === "id" 
                            ? friezeSectionData[selectedFriezeTab].facts_id 
                            : friezeSectionData[selectedFriezeTab].facts_en
                        ).map((fact, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                            <span className="grid w-4 h-4 mt-0.5 place-items-center shrink-0 border border-amber-500 rounded-full text-amber-500 font-mono text-[8px] font-black">
                              ★
                            </span>
                            <span>{fact}</span>
                          </div>
                        ))}
                        {selectedSculpture === "antefix" && (
                          activeLang === "id" 
                            ? antefixSectionData[selectedAntefixTab].facts_id 
                            : antefixSectionData[selectedAntefixTab].facts_en
                        ).map((fact, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                            <span className="grid w-4 h-4 mt-0.5 place-items-center shrink-0 border border-amber-500 rounded-full text-amber-500 font-mono text-[8px] font-black">
                              ★
                            </span>
                            <span>{fact}</span>
                          </div>
                        ))}
                        {selectedSculpture === "selene_horse" && (
                          activeLang === "id" 
                            ? seleneHorseSectionData[selectedSeleneTab].facts_id 
                            : seleneHorseSectionData[selectedSeleneTab].facts_en
                        ).map((fact, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                            <span className="grid w-4 h-4 mt-0.5 place-items-center shrink-0 border border-amber-500 rounded-full text-amber-500 font-mono text-[8px] font-black">
                              ★
                            </span>
                            <span>{fact}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-[10px] font-mono text-slate-400 uppercase">
                  <span>{activeLang === "id" ? "Pilih tab navigasi di atas" : "Select info tabs to change context"}</span>
                  <span className="font-bold">
                    {selectedSculpture === "athena" 
                      ? "The Golden Cult Statue" 
                      : selectedSculpture === "pediment" 
                      ? "Symmetry & Proportion" 
                      : selectedSculpture === "frieze"
                      ? "Civic & Divine Frieze"
                      : selectedSculpture === "antefix"
                      ? "Classical Palmette Wave"
                      : "The Moon Chariot Steed"}
                  </span>
                </div>
              </div>

            </div>
          </section>

          {/* Educational tips & system summary */}
          <footer className="mt-14 border-t-2 border-dashed border-slate-300 dark:border-slate-700 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 shrink-0 text-amber-500" />
                {dict.tipText}
              </span>
              <span className="font-bold text-slate-500">
                {dict.footerProject}
              </span>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}
