/* ============================================================================
   🌍 TRANSLATIONS | الترجمات
   ----------------------------------------------------------------------------
   💡 HINT: هذا الملف يحتوي على جميع النصوص المترجمة للموقع باللغتين (EN / AR).
   عند إضافة قسم جديد أو تغيير أي نص في الواجهة، قم بتحديث القيم هنا للغتين.
   ========================================================================== */

export type Lang = "en" | "ar";

export const translations = {
  en: {
    dir: "ltr",
    brand: "AHMED GALAL",
    
    // 💡 HINT: Navigation bar links / روابط شريط التنقل
    nav: { about: "About", projects: "Projects", skills: "Skills", contact: "Contact" },
    downloadCv: "Download CV",
    langButton: "عربي",
    theme: { toLight: "Light mode", toDark: "Dark mode" },

    // 💡 HINT: Hero Section / القسم الرئيسي في أعلى الصفحة
    hero: {
      kicker: "Architect — Cairo, Egypt",
      firstName: "AHMED",
      middleName: "SAYED",
      lastName: "GALAL",
      role: "Architect & 3D Visualizer",
      tagline:
        "Designing residential & commercial spaces — from first concept sketch to construction detail.",
      contactMe: "Contact Me",
      myWork: "View Projects",
      available: "Open to opportunities",
      scroll: "Scroll",
      sheet: "SHEET A-00 · PORTFOLIO 2026",
      scale: "SCALE 1:1",
    },

    // 💡 HINT: About Me Section / قسم نبذة عني
    about: {
      number: "01",
      label: "About Me",
      sheet: "SHEET A-01",
      title: "The Architect",
      summaryTitle: "Professional Summary",
      summary:
        "Architect with experience in designing and developing residential and commercial projects. Proficient in architectural software (AutoCAD, Revit, 3ds Max, Lumion, Photoshop). Seeking a challenging role to leverage my design expertise, technical knowledge, and creativity in delivering innovative and sustainable architectural solutions.",
      infoTitle: "Personal Information",
      jobTitle: "Job Title",
      jobTitleValue: "Architect",
      phone: "Phone",
      email: "Email",
      location: "Location",
      locationValue: "Cairo, Egypt",
      educationTitle: "Education",
      degree: "Bachelor of Architecture",
      academy: "Thebes Academy — Cairo, Egypt",
      gradProject: "Graduation Project — Excellent Grade",
      gradYear: "Graduation Year",
      languagesTitle: "Languages",
      arabic: "Arabic",
      arabicLevel: "Native",
      english: "English",
      englishLevel: "Professional Working Proficiency",
    },

    // 💡 HINT: Projects Section & Filters / قسم المشاريع والتصنيفات
    projects: {
      number: "02",
      label: "Selected Work",
      sheet: "SHEET A-02",
      title: "Projects",
      subtitle:
        "seven selected projects in four categories — Exterior Design, Modern Villa, Interior Design and Architecture. Every project has its own photo slider with all its views.",
      all: "All Projects",
      exterior: "Exterior Design",
      villa: "Modern Villa",
      interior: "Interior Design",
      architecture: "Architecture",
      
      // 💡 HINT: Category Descriptions / أوصاف الفلاتر والتصنيفات
      catDesc: {
        all: "Every project in the portfolio — exterior, villa, interior and architecture work.",
        exterior: "Façades, commercial buildings and site massing studies.",
        villa: "Private modern villas and family residences.",
        interior: "Interior architecture, materials and 3D visualization.",
        architecture: "Integrated architectural complexes and urban master plans.",
      },
      projectWord: "Projects",
      viewProject: "View details",

      // 💡 HINT: Tool Chains Labels / مسميات البرامج والأدوات التي تظهر كبادجات
      "sketchup-vray": "SketchUp + V-Ray",
      "max-vray": "3ds Max + V-Ray",
      "cad-revit": "AutoCAD + Revit",
      "autocad-sketchup-revit-lumion": "AutoCAD + SketchUp + Revit + Lumion",
      
      status: { complete: "Completed", ongoing: "In progress" },
      reset: "Show all projects",
      imagePlaceholder: "Renders coming soon",
      slidesCountShort: "views",
      area: "Area",
      location: "Location",
      tools: "Tools",
      empty: "No projects in this category yet.",
      prevPhoto: "Previous photo",
      nextPhoto: "Next photo",
      slideOf: "of",
      slidesCount: "photos",
    },

    // 💡 HINT: Skills & Experience Section / قسم المهارات والخبرة
    skills: {
      number: "03",
      label: "Skills & Experience",
      sheet: "SHEET A-03",
      title: "Tools of the Trade",
      softwareTitle: "Software Proficiency",
      keySkillsTitle: "Key Skills",
      keySkills: [
        "Conceptual Design",
        "3D Visualization",
        "Construction Drawings",
        "Detailing",
        "Residential Projects",
        "Commercial Projects",
      ],
      experienceTitle: "Work Experience",
      experience: [
        "Prepared architectural drawings and 3D models for projects.",
        "Coordinated with engineers and consultants.",
        "Produced working drawings and construction details.",
      ],
      experienceRole: "Architect",
      experienceTag: "Project Work",
    },

    // 💡 HINT: Contact Section / قسم التواصل
    contact: {
      number: "04",
      label: "Contact",
      sheet: "SHEET A-04",
      title: "Let's Build Together",
      subtitle:
        "Have a project in mind or a role to fill? Reach out — I usually reply within a day.",
      phone: "Call Me",
      whatsapp: "WhatsApp",
      email: "Email Me",
      location: "Location",
      locationValue: "Cairo, Egypt",
      cvHint: "Prefer the full picture? Grab my CV.",
    },

    // 💡 HINT: Footer Section / تذييل الصفحة
    footer: {
      rights: "All rights reserved.",
      basedOn: "Based on",
      source: "source portfolio",
    },
  },

  ar: {
    dir: "rtl",
    brand: "أحمد جلال",
    
    // 💡 HINT: روابط شريط التنقل (بالعربية)
    nav: { about: "نبذة عني", projects: "المشاريع", skills: "المهارات", contact: "تواصل" },
    downloadCv: "تحميل السيرة الذاتية",
    langButton: "EN",
    theme: { toLight: "الوضع النهاري", toDark: "الوضع الليلي" },

    // 💡 HINT: القسم الرئيسي في أعلى الصفحة (بالعربية)
    hero: {
      kicker: "مهندس معماري — القاهرة، مصر",
      firstName: "أحمد",
      middleName: "سيد",
      lastName: "جلال",
      role: "مهندس معماري ومصمم ثلاثي الأبعاد",
      tagline:
        "أصمّم مشاريع سكنية وتجارية — من أول اسكتش للفكرة حتى أدق تفاصيل التنفيذ.",
      contactMe: "تواصل معي",
      myWork: "شاهد المشاريع",
      available: "متاح لفرص العمل",
      scroll: "مرّر للأسفل",
      sheet: "لوحة A-00 · ملف الأعمال 2026",
      scale: "مقياس 1:1",
    },

    // 💡 HINT: قسم نبذة عني (بالعربية)
    about: {
      number: "01",
      label: "نبذة عني",
      sheet: "لوحة A-01",
      title: "المهندس المعماري",
      summaryTitle: "الملخص المهني",
      summary:
        "مهندس معماري لديه خبرة في تصميم وتطوير المشاريع السكنية والتجارية. متمكن من البرامج المعمارية (أوتوكاد، ريفيت، ثري دي ماكس، لوميون، فوتوشوب). أسعى إلى دور يتيح لي توظيف خبرتي التصميمية ومعرفتي التقنية وإبداعي لتقديم حلول معمارية مبتكرة ومستدامة.",
      infoTitle: "البيانات الشخصية",
      jobTitle: "المسمى الوظيفي",
      jobTitleValue: "مهندس معماري",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      location: "الموقع",
      locationValue: "القاهرة، مصر",
      educationTitle: "التعليم",
      degree: "بكالوريوس العمارة",
      academy: "أكاديمية طيبة — القاهرة، مصر",
      gradProject: "مشروع التخرج — تقدير ممتاز",
      gradYear: "سنة التخرج",
      languagesTitle: "اللغات",
      arabic: "العربية",
      arabicLevel: "اللغة الأم",
      english: "الإنجليزية",
      englishLevel: "إتقان مهني في بيئة العمل",
    },

    // 💡 HINT: قسم المشاريع والتصنيفات (بالعربية)
    projects: {
      number: "02",
      label: "أعمال مختارة",
      sheet: "لوحة A-02",
      title: "المشاريع",
      subtitle:
        "سبعة مشاريع مختارة مقسّمة على أربع تصنيفات — تصميمات خارجية، فيلا مودرن وتصميم داخلي وعمارة. وكل مشروع يحتوي على سلايدر بجميع صوره.",
      all: "كل المشاريع",
      exterior: "تصميمات خارجية",
      villa: "فيلا مودرن",
      interior: "تصميم داخلي",
      architecture: "عمارة",
      
      // 💡 HINT: أوصاف الفلاتر والتصنيفات (بالعربية)
      catDesc: {
        all: "كل مشاريع الملف — تصميمات خارجية وفيلات مودرن وتصميم داخلي وعمارة.",
        exterior: "واجهات ومبانٍ تجارية ودراسات كتل للمواقع.",
        villa: "فيلات مودرن خاصة ومساكن عائلية.",
        interior: "تصميم داخلي وخامات وإظهار ثلاثي الأبعاد.",
        architecture: "مجمعات معمارية متكاملة وتخطيط عمراني.",
      },
      projectWord: "مشاريع",
      viewProject: "عرض التفاصيل",

      // 💡 HINT: مسميات البرامج والأدوات (بالعربية)
      "sketchup-vray": "سكتش أب + في راي",
      "max-vray": "ثري دي ماكس + في راي",
      "cad-revit": "أوتوكاد + ريفيت",
      "autocad-sketchup-revit-lumion": "أوتوكاد + سكتش أب + ريفيت + لوميون",
      
      status: { complete: "مكتمل", ongoing: "تحت التنفيذ" },
      reset: "عرض كل المشاريع",
      imagePlaceholder: "الرندرات قريبًا",
      slidesCountShort: "لقطات",
      area: "المساحة",
      location: "الموقع",
      tools: "البرامج",
      empty: "لا توجد مشاريع في هذا التصنيف بعد.",
      prevPhoto: "الصورة السابقة",
      nextPhoto: "الصورة التالية",
      slideOf: "من",
      slidesCount: "صور",
    },

    // 💡 HINT: قسم المهارات والخبرة (بالعربية)
    skills: {
      number: "03",
      label: "المهارات والخبرات",
      sheet: "لوحة A-03",
      title: "أدوات المهنة",
      softwareTitle: "إتقان البرامج",
      keySkillsTitle: "المهارات الأساسية",
      keySkills: [
        "التصميم المبدئي",
        "الإظهار ثلاثي الأبعاد",
        "الرسومات التنفيذية",
        "التفاصيل المعمارية",
        "المشاريع السكنية",
        "المشاريع التجارية",
      ],
      experienceTitle: "الخبرة العملية",
      experience: [
        "إعداد الرسومات المعمارية والنماذج ثلاثية الأبعاد للمشاريع.",
        "التنسيق مع المهندسين والاستشاريين.",
        "إنتاج الرسومات التنفيذية وتفاصيل البناء.",
      ],
      experienceRole: "مهندس معماري",
      experienceTag: "أعمال المشاريع",
    },

    // 💡 HINT: قسم التواصل (بالعربية)
    contact: {
      number: "04",
      label: "تواصل معي",
      sheet: "لوحة A-04",
      title: "لنبنِ معًا",
      subtitle: "لديك مشروع أو وظيفة شاغرة؟ تواصل معي — عادةً أرد خلال يوم واحد.",
      phone: "اتصل بي",
      whatsapp: "واتساب",
      email: "راسلني",
      location: "الموقع",
      locationValue: "القاهرة، مصر",
      cvHint: "تريد الصورة الكاملة؟ حمّل سيرتي الذاتية.",
    },

    // 💡 HINT: تذييل الصفحة (بالعربية)
    footer: {
      rights: "جميع الحقوق محفوظة.",
      basedOn: "مبني على",
      source: "الموقع الأصلي",
    },
  },
} as const;

export type Translation = (typeof translations)["en"];