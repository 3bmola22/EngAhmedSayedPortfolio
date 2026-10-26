/* ============================================================================
   ✏️  EDIT YOUR INFO HERE  |  ✏️  عدّل بياناتك هنا
   ----------------------------------------------------------------------------
   📷 PHOTO: replace src/assets/profile.jpg (same name) | استبدل الصورة بنفس الاسم
   📄 CV LINK: Google Drive → Share → "Anyone with the link" → copy the ID from
      https://drive.google.com/file/d/FILE_ID_HERE/view  → paste below
      ارفع السيرة على درايف → مشاركة → أي شخص لديه الرابط → الصق المعرّف بالأسفل
   ========================================================================== */

import profilePhoto from "../assets/profile.jpg";
import villa1 from "../assets/villa.jpg" ;
import modernVilla from "../assets/modernVilla.jpg" ;
import modernVilla12 from "../assets/modernVilla12.jpg" ;
import modernVilla2 from "../assets/modernVilla2.jpg" ;
import modernVilla3 from "../assets/modernVilla3.jpg" ;
import modernVilla4 from "../assets/modernVilla4.jpg" ;
import modernVilla5 from "../assets/modernVilla5.jpg" ;
import modernVilla6 from "../assets/modernVilla6.jpg" ;
import modernVilla7 from "../assets/modernVilla7.jpg" ;
import modernVilla8 from "../assets/modernVilla8.jpg" ;
import modernVilla9 from "../assets/modernVilla9.jpg" ;
import modernVilla10 from "../assets/modernVilla10.jpg" ;
import modernVilla11 from "../assets/modernVilla11.jpg" ;
import contrastBedroom from "../assets/contrastBedroom.jpg" ;
import reception from "../assets/reception.jpg" ;
import reception2 from "../assets/reception2.jpg" ;
import reception3 from "../assets/reception3.jpg" ;
import warmWoodBedroom from "../assets/warmWoodBedroom.jpg" ;
import warmWoodBedroom2 from "../assets/warmWoodBedroom2.jpg" ;
import warmWoodBedroom3 from "../assets/warmWoodBedroom3.jpg" ;
export const profile = {
  photo: profilePhoto,
  cvDriveFileId: "PASTE_YOUR_CV_FILE_ID_HERE",
  phone: "+20 1159755510",
  phoneHref: "tel:+201159755510",
  whatsappHref: "https://wa.me/201159755510",
  email: "armedgalal2@gmail.com",
  emailHref: "mailto:armedgalal2@gmail.com",
  graduationYear: "2026",
};

// Direct-download link built from the file ID | رابط التحميل المباشر من المعرّف
export const cvDownloadUrl = `https://drive.google.com/uc?export=download&id=${profile.cvDriveFileId}`;

/* ============================================================================
   🏗️  PROJECT CATEGORIES  |  تصنيفات المشاريع  (3)
   • "exterior" → Exterior Design | تصميمات خارجية
   • "villa"    → Modern Villa     | فيلا مودرن
   • "interior" → Interior Design  | تصميم داخلي
   A project can sit in more than one category (see `categories` below).
   يمكن أن ينتمي المشروع لأكثر من تصنيف.
   ========================================================================== */
export type ProjectType = "exterior" | "villa" | "interior";
export const categoryOrder: ProjectType[] = ["exterior", "villa", "interior"];

/* ============================================================================
   🧰  TOOL CHAINS  |  سلاسل الأدوات  (3)
   • "sketchup-vray" → SketchUp + V-Ray
   • "max-vray"      → 3ds Max + V-Ray
   • "cad-revit"     → AutoCAD + Revit
   (These appear as badges on the card and inside the details modal)
   (تظهر كبادجات على الكارت وداخل نافذة التفاصيل)
   ========================================================================== */
export type ToolGroup = "sketchup-vray" | "max-vray" | "cad-revit";

export const TOOL_APPS: Record<ToolGroup, string[]> = {
  "sketchup-vray": ["SketchUp", "V-Ray"],
  "max-vray": ["3ds Max", "V-Ray"],
  "cad-revit": ["AutoCAD", "Revit"],
};

/* ============================================================================
   🖼️  PROJECTS  |  المشاريع
   ----------------------------------------------------------------------------
   ✏️ ADD ANOTHER PROJECT — copy this template | لإضافة مشروع: انسخ القالب
   ┌──────────────────────────────────────────────────────────────────────┐
   {
     categories: ["interior"],            // exterior | villa | interior (or both)
     toolsets: ["sketchup-vray"],         // sketchup-vray | max-vray | cad-revit
     images: [myRender],                  // one or many images | صورة أو أكثر
     year: "2026",                        // optional | اختياري
     area: "120 m²",                      // optional | اختياري
     status: "complete",                  // complete | ongoing
     en: { title: "...", desc: "...", location: "Cairo, Egypt" },
     ar: { title: "...", desc: "...", location: "القاهرة، مصر" },
   },
   └──────────────────────────────────────────────────────────────────────┘

   📸 PHOTOS FOR PROJECTS 2 → 6 | صور المشاريع من الثاني للسادس:
      They currently use temporary stock photo links (marked "STOCK placeholder")
      so the sliders and photo counts work right away.
      استبدلها بصورك الحقيقية:
      • الأسهل: ضع الصور في src/assets واستوردها أعلى الملف:
        import p2 from "../assets/project-2.jpg";
        ثم: images: [p2]
      • أو الصق روابط مباشرة بين علامتي التنصيص، مع الحفاظ على عدد الصور
        المطلوب لكل مشروع (١ / ٢ / ٣ / ١ / ١٣).
      • عدد الصور المطلوب لكل مشروع مكتوب في تعليق فوقه.
      Current images are placeholder stock photos — replace them with your renders.
      الصور الحالية مؤقتة من الإنترنت — استبدلها برندراتك.

   ⚠️ PROJECT 1 IMAGE: src/assets/project-bedroom.jpg is also a temporary
      placeholder — replace it with your original bedroom render (same name).
      صورة المشروع الأول مؤقتة أيضًا — استبدلها برندرك الأصلي بنفس الاسم.
   ========================================================================== */
import projectBedroom from "../assets/project-bedroom.jpg";

export type ProjectStatus = "complete" | "ongoing";

export interface Project {
  images: string[];
  categories: ProjectType[]; // first one is the main category | الأول هو التصنيف الأساسي
  toolsets: ToolGroup[];
  year?: string;
  area?: string;
  status?: ProjectStatus;
  en: { title: string; desc: string; location: string };
  ar: { title: string; desc: string; location: string };
}

const IMG = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=800`;

export const projects: Project[] = [
  /* ============ 01 · INTERIOR DESIGN — MODERN BEDROOM | تصميم داخلي ============ */
  {
    // 📸 1 photo — replace src/assets/project-bedroom.jpg with your render
    images: [projectBedroom],
    categories: ["interior"],
    toolsets: ["sketchup-vray"],
    year: "2026",
    status: "complete",
    en: {
      title: "Warm Modern Bedroom",
      desc: "A modern bedroom design in warm tones, combining wood with dark marble, soft lighting and elegant furniture to achieve comfort and luxury.",
      location: "Cairo, Egypt",
    },
    ar: {
      title: "غرفة نوم مودرن دافئة",
      desc: "تصميم غرفة نوم مودرن بألوان دافئة، يجمع بين الخشب والرخام الداكن مع إضاءة هادئة وأثاث أنيق لتحقيق الراحة والفخامة.",
      location: "القاهرة، مصر",
    },
  },

  /* ============ 02 · INTERIOR — CONTRAST BEDROOM | غرفة نوم التباين ============ */
  {
    // 📸 1 photo (STOCK placeholder) — replace with your render
    images: [contrastBedroom],
    categories: ["interior"],
    toolsets: ["sketchup-vray"],
    status: "complete",
    en: {
      title: "Contrast Bedroom",
      desc: "A luxurious modern bedroom design built on the contrast between dark and light tones, with integrated storage units and natural and decorative lighting that add a touch of elegance.",
      location: "Cairo, Egypt",
    },
    ar: {
      title: "غرفة نوم التباين",
      desc: "تصميم غرفة نوم مودرن فاخر يعتمد على التباين بين الألوان الداكنة والفاتحة، مع وحدات تخزين مدمجة وإضاءة طبيعية وديكورية تضيف لمسة من الأناقة.",
      location: "القاهرة، مصر",
    },
  },

  /* ============ 03 · INTERIOR — WARM WOOD BEDROOM | غرفة نوم الخشب ============ */
  {
    // 📸 2 photos (STOCK placeholders) — replace with your renders
    images: [warmWoodBedroom,warmWoodBedroom2,warmWoodBedroom3],
    categories: ["interior"],
    toolsets: ["max-vray"],
    status: "complete",
    en: {
      title: "Warm Wood Bedroom",
      desc: "A modern bedroom design combining luxury and warmth, using wooden panels and concealed lighting, with calm colors, elegant furniture and integrated storage units to achieve harmony and comfort.",
      location: "Cairo, Egypt",
    },
    ar: {
      title: "غرفة نوم الخشب الدافئ",
      desc: "تصميم غرفة نوم مودرن يجمع بين الفخامة والدفء، باستخدام الألواح الخشبية والإضاءة المخفية، مع ألوان هادئة وأثاث أنيق ووحدات تخزين مدمجة لتحقيق التناسق والراحة.",
      location: "القاهرة، مصر",
    },
  },

  /* ============ 04 · INTERIOR — RECEPTION & DINING | ريسبشن وسفرة ============ */
  {
    // 📸 3 photos (STOCK placeholders) — replace with your renders
    images: [reception,reception2,reception3],
    categories: ["interior"],
    toolsets: ["max-vray"],
    status: "complete",
    en: {
      title: "Luxury Reception & Dining",
      desc: "A luxurious modern reception design combining elegance and practicality, integrating marble, wood and calm colors, with a harmonious layout for the seating and dining areas and distinctive decorative lighting that adds a sense of luxury and spaciousness.",
      location: "Cairo, Egypt",
    },
    ar: {
      title: "ريسبشن وسفرة فاخرة",
      desc: "تصميم ريسبشن مودرن فاخر يجمع بين الأناقة والعملية، مع دمج الرخام والخشب والألوان الهادئة، وتوزيع متناسق لمنطقة الجلوس والسفرة، مع إضاءة ديكورية مميزة تضيف إحساسًا بالفخامة والاتساع.",
      location: "القاهرة، مصر",
    },
  },

  /* ============ 05 · EXTERIOR — CLASSIC LUXURY VILLA | فيلا كلاسيكية ============ */
  {
    // 📸 1 photo (STOCK placeholder) — replace with your render
    images: [villa1],
    categories: ["exterior"],
    toolsets: ["max-vray"],
    status: "complete",
    en: {
      title: "Classic Luxury Villa",
      desc: "A luxurious classic villa design characterized by symmetry and balance in the façades, using columns, gypsum ornaments and precise architectural details, and combining white with exterior lighting and landscaping to highlight the building's luxury.",
      location: "Cairo, Egypt",
    },
    ar: {
      title: "فيلا كلاسيكية فاخرة",
      desc: "تصميم فيلا كلاسيكية فاخرة يتميز بالتناسق والتماثل في الواجهات، مع استخدام الأعمدة والزخارف الجبسية والتفاصيل المعمارية الدقيقة، ودمج اللون الأبيض مع الإضاءة الخارجية واللاندسكيب لإبراز فخامة المبنى.",
      location: "القاهرة، مصر",
    },
  },

  /* ============ 06 · MODERN VILLA + EXTERIOR | فيلا الأقواس المودرن ============ */
  {
    // 📸 13 photos (STOCK placeholders) — replace with your 13 renders
    images: [
     modernVilla ,modernVilla2,modernVilla3,modernVilla4,modernVilla5,modernVilla6,modernVilla7,modernVilla8,modernVilla9,modernVilla10,modernVilla11,modernVilla12
    ],
    categories: ["villa", "exterior"], // فيلا مودرن + تصميمات خارجية
    toolsets: ["cad-revit"],
    status: "complete",
    en: {
      title: "Arched Modern Villa",
      desc: "A modern villa featuring interlocking geometric masses and arched openings, integrating glass, concrete and vertical slats to give the design a contemporary and elegant character.",
      location: "Cairo, Egypt",
    },
    ar: {
      title: "فيلا مودرن",
      desc: "فيلا مودرن تتميز بتداخل الكتل الهندسية، واستخدام الأقواس في الفتحات، مع دمج الزجاج والخرسانة والشرائح الرأسية لإضفاء طابع عصري وأنيق على التصميم.",
      location: "القاهرة، مصر",
    },
  },
];

/* Union of app names for a project, used as card badges
   كل برامج المشروع مجمّعة بدون تكرار لعرضها على الكارت */
export const projectApps = (p: Project): string[] =>
  Array.from(new Set(p.toolsets.flatMap((ts) => TOOL_APPS[ts] ?? [])));

/* 💻 Software skill levels (%) — edit freely | نسب إتقان البرامج — عدّلها بحرية */
export const softwareSkills = [
  { name: "AutoCAD", level: 95 },
  { name: "Revit", level: 90 },
  { name: "3ds Max", level: 88 },
  { name: "V-Ray", level: 86 },
  { name: "Lumion", level: 85 },
  { name: "SketchUp", level: 85 },
  { name: "Photoshop", level: 90 },
  { name: "InDesign", level: 78 },
];
