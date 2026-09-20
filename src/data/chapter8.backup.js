export const chapter8 = {
  id: "p8",
  no: 8,
  title: "আলোর প্রতিফলন",
  focus: "Reflection of light, laws of reflection, plane mirror, spherical mirrors, image formation and mirror formula",

  manual: [
    "আলোর প্রতিফলনের ধারণা বুঝতে পারা",
    "Reflection-এর দুইটি সূত্র বলতে ও প্রয়োগ করতে পারা",
    "Incident ray, reflected ray ও normal চিহ্নিত করতে পারা",
    "Angle of incidence ও angle of reflection বুঝতে পারা",
    "Plane mirror-এর বৈশিষ্ট্য ব্যাখ্যা করতে পারা",
    "Real ও virtual image-এর পার্থক্য বুঝতে পারা",
    "Spherical mirror-এর ধারণা বুঝতে পারা",
    "Concave ও convex mirror-এর পার্থক্য জানা",
    "Pole, centre of curvature, radius of curvature ও focus চিহ্নিত করতে পারা",
    "Ray diagram আঁকতে পারা",
    "Mirror formula ও magnification ব্যবহার করতে পারা",
    "Numerical problem সমাধান করতে পারা"
  ],

  concepts: [

    {
      id: "reflection",
      title: "আলোর প্রতিফলন",
      definition: "আলো কোনো পৃষ্ঠে আপতিত হয়ে একই মাধ্যমে ফিরে এলে তাকে আলোর প্রতিফলন বলে।",
      simpleExplanation: "আলো আয়না বা কোনো চকচকে পৃষ্ঠে পড়ে ফিরে আসে—এটাই reflection।",
      detailedExplanation: "যখন আলোকরশ্মি কোনো polished বা reflecting surface-এ পড়ে এবং সেই মাধ্যমেই ফিরে আসে, তখন ঘটনাটিকে reflection of light বলা হয়।",
      formula: "∠i = ∠r",
      units: "Angle → degree (°)",
      example: "আয়নায় আলো পড়লে প্রতিফলিত আলো চোখে আসে।",
      realLifeExample: "আয়না, পানি ও চকচকে ধাতুতে reflection দেখা যায়।",
      examFocus: "Definition ও laws of reflection",
      commonMistakes: "Refraction-এর সাথে reflection গুলিয়ে ফেলা",
      keyPoints: [
        "Light ফিরে আসে",
        "একই মাধ্যমে ফিরে আসে",
        "Reflection-এর দুটি প্রধান law আছে"
      ]
    },

    {
      id: "laws-reflection",
      title: "প্রতিফলনের সূত্র",
      definition: "আলোর প্রতিফলনের দুটি মৌলিক সূত্র হলো angle of incidence ও angle of reflection-এর সম্পর্ক এবং তিনটি ray-এর একই plane-এ থাকা।",
      simpleExplanation: "যে কোণে আলো আয়নায় পড়ে, সেই কোণেই প্রতিফলিত হয়।",
      detailedExplanation: "প্রথম সূত্র অনুযায়ী angle of incidence = angle of reflection। দ্বিতীয় সূত্র অনুযায়ী incident ray, reflected ray এবং normal একই plane-এ থাকে।",
      formula: "i = r",
      units: "degree (°)",
      example: "i = 40° হলে r = 40°।",
      realLifeExample: "Plane mirror-এ image formation এই law-এর উপর নির্ভর করে।",
      examFocus: "Two laws of reflection",
      commonMistakes: "Angle of incidence-কে mirror surface থেকে মাপা",
      keyPoints: [
        "i = r",
        "Incident ray, reflected ray ও normal একই plane-এ",
        "Angle normal থেকে মাপতে হয়"
      ]
    },

    {
      id: "incident-ray",
      title: "আপতিত রশ্মি",
      definition: "যে আলোকরশ্মি কোনো reflecting surface-এর উপর আপতিত হয় তাকে incident ray বলে।",
      simpleExplanation: "আয়নার দিকে যে light ray যাচ্ছে সেটাই incident ray।",
      detailedExplanation: "Incident ray surface-এর point of incidence-এ এসে পড়ে। এখান থেকেই reflected ray তৈরি হয়।",
      formula: "প্রযোজ্য নয়",
      units: "প্রযোজ্য নয়",
      example: "Laser beam আয়নার দিকে পাঠালে laser beam হলো incident ray।",
      realLifeExample: "Periscope-এ incident ray-এর পথ পরিবর্তিত হয়।",
      examFocus: "Ray identification",
      commonMistakes: "ফিরে যাওয়া ray-কে incident ray বলা",
      keyPoints: [
        "Surface-এর দিকে যায়",
        "Point of incidence-এ পড়ে"
      ]
    },

    {
      id: "normal",
      title: "Normal",
      definition: "Point of incidence-এ reflecting surface-এর উপর অঙ্কিত লম্ব রেখাকে normal বলে।",
      simpleExplanation: "Surface-এর সাথে 90° কোণে যে line আঁকা হয় সেটাই normal।",
      detailedExplanation: "Angle of incidence ও angle of reflection উভয়ই normal-এর সাথে মাপা হয়।",
      formula: "Normal ⟂ surface",
      units: "Angle → degree",
      example: "Plane mirror-এর উপর normal 90° angle তৈরি করে।",
      realLifeExample: "Ray diagram আঁকার সময় normal reference line হিসেবে কাজ করে।",
      examFocus: "Normal-based angle",
      commonMistakes: "Mirror surface থেকে angle মাপা",
      keyPoints: [
        "Normal surface-এর perpendicular",
        "i ও r normal থেকে মাপা হয়"
      ]
    },

    {
      id: "plane-mirror",
      title: "সমতল দর্পণ",
      definition: "যে দর্পণের reflecting surface সমতল তাকে plane mirror বলে।",
      simpleExplanation: "সাধারণ flat mirror হলো plane mirror।",
      detailedExplanation: "Plane mirror-এ সাধারণত virtual, erect এবং laterally inverted image তৈরি হয়। Image-এর size object-এর সমান এবং mirror-এর পেছনে সমদূরত্বে তৈরি হয়।",
      formula: "Image distance = Object distance",
      units: "m বা cm",
      example: "Object mirror থেকে 2 m দূরে হলে image mirror-এর পেছনে 2 m দূরে তৈরি হবে।",
      realLifeExample: "ড্রেসিং mirror।",
      examFocus: "Properties of plane mirror",
      commonMistakes: "Plane mirror real image তৈরি করে বলা",
      keyPoints: [
        "Virtual image",
        "Erect image",
        "Same size",
        "Laterally inverted",
        "Object distance = image distance"
      ]
    },

    {
      id: "real-image",
      title: "বাস্তব প্রতিবিম্ব",
      definition: "আলোর রশ্মি বাস্তবে মিলিত হয়ে যে image তৈরি করে তাকে real image বলে।",
      simpleExplanation: "Real image screen-এ ধরা যায়।",
      detailedExplanation: "Reflected বা refracted rays বাস্তবে converge করলে real image তৈরি হয়।",
      formula: "প্রযোজ্য নয়",
      units: "প্রযোজ্য নয়",
      example: "Concave mirror-এর কিছু অবস্থানে real image তৈরি হয়।",
      realLifeExample: "Camera sensor-এ real image তৈরি হয়।",
      examFocus: "Real বনাম virtual",
      commonMistakes: "Real image সবসময় erect মনে করা",
      keyPoints: [
        "Rays actually meet",
        "Screen-এ ধরা যায়",
        "সাধারণত inverted হতে পারে"
      ]
    },

    {
      id: "virtual-image",
      title: "অবাস্তব প্রতিবিম্ব",
      definition: "আলোকরশ্মির বাস্তব মিলন না ঘটলেও তাদের পিছনের দিকে বর্ধিত অংশের মিলন থেকে যে image দেখা যায় তাকে virtual image বলে।",
      simpleExplanation: "Virtual image screen-এ ধরা যায় না।",
      detailedExplanation: "Rays বাস্তবে meet করে না; observer-এর চোখে মনে হয় তারা কোনো বিন্দু থেকে এসেছে।",
      formula: "প্রযোজ্য নয়",
      units: "প্রযোজ্য নয়",
      example: "Plane mirror-এর image virtual।",
      realLifeExample: "সাধারণ আয়নায় নিজের image।",
      examFocus: "Virtual image properties",
      commonMistakes: "Virtual image screen-এ ধরা যায় বলা",
      keyPoints: [
        "Rays do not actually meet",
        "Screen-এ ধরা যায় না",
        "Plane mirror image virtual"
      ]
    },

    {
      id: "spherical-mirror",
      title: "গোলীয় দর্পণ",
      definition: "গোলকের কোনো অংশের পৃষ্ঠ দ্বারা তৈরি mirror-কে spherical mirror বলে।",
      simpleExplanation: "Curved mirror হলো spherical mirror-এর সাধারণ উদাহরণ।",
      detailedExplanation: "Spherical mirror দুই ধরনের—concave mirror এবং convex mirror।",
      formula: "R = 2f",
      units: "R, f → m বা cm",
      example: "Concave এবং convex mirror হলো spherical mirror।",
      realLifeExample: "Vehicle side mirror ও shaving mirror।",
      examFocus: "Types of spherical mirror",
      commonMistakes: "সব curved mirror-কে plane mirror বলা",
      keyPoints: [
        "Concave mirror",
        "Convex mirror",
        "R = 2f"
      ]
    },

    {
      id: "concave-mirror",
      title: "অবতল দর্পণ",
      definition: "যে spherical mirror-এর reflecting surface গোলকের কেন্দ্রের দিকে থাকে তাকে concave mirror বলে।",
      simpleExplanation: "Concave mirror ভিতরের দিকে বাঁকা।",
      detailedExplanation: "Concave mirror converging mirror হিসেবে কাজ করতে পারে। Object-এর position অনুযায়ী real বা virtual image তৈরি করতে পারে।",
      formula: "1/f = 1/v + 1/u",
      units: "m বা cm",
      example: "Shaving mirror হিসেবে concave mirror ব্যবহার করা হয়।",
      realLifeExample: "Dentist mirror, headlight reflector।",
      examFocus: "Concave mirror ray diagram",
      commonMistakes: "Concave mirror সবসময় virtual image তৈরি করে বলা",
      keyPoints: [
        "Converging mirror",
        "Real/virtual দুই ধরনের image হতে পারে",
        "Focus সামনে থাকে"
      ]
    },

    {
      id: "convex-mirror",
      title: "উত্তল দর্পণ",
      definition: "যে spherical mirror-এর reflecting surface গোলকের বাইরের দিকে থাকে তাকে convex mirror বলে।",
      simpleExplanation: "Convex mirror বাইরে দিকে বাঁকা।",
      detailedExplanation: "Convex mirror সবসময় virtual, erect এবং diminished image তৈরি করে। এর field of view বেশি।",
      formula: "1/f = 1/v + 1/u",
      units: "m বা cm",
      example: "Vehicle-এর rear-view mirror হিসেবে convex mirror ব্যবহৃত হয়।",
      realLifeExample: "বাস, গাড়ি ও মোটরসাইকেলের side mirror।",
      examFocus: "Convex mirror properties",
      commonMistakes: "Convex mirror real image তৈরি করে বলা",
      keyPoints: [
        "Diverging mirror",
        "Always virtual",
        "Always erect",
        "Always diminished",
        "Wide field of view"
      ]
    },

    {
      id: "pole",
      title: "Pole",
      definition: "Spherical mirror-এর reflecting surface-এর মধ্যবিন্দুকে pole বলে।",
      simpleExplanation: "Mirror-এর reflecting surface-এর মাঝের point হলো pole।",
      detailedExplanation: "Pole সাধারণত P দ্বারা প্রকাশ করা হয় এবং এটি principal axis-এর উপর থাকে।",
      formula: "P = Pole",
      units: "Distance → m/cm",
      example: "Mirror-এর central point P।",
      realLifeExample: "Ray diagram-এ P reference point হিসেবে ব্যবহৃত হয়।",
      examFocus: "Mirror terminology",
      commonMistakes: "Pole ও focus একই point মনে করা",
      keyPoints: [
        "Symbol = P",
        "Principal axis-এর উপর থাকে"
      ]
    },

    {
      id: "centre-curvature",
      title: "Centre of Curvature",
      definition: "যে spherical surface-এর অংশ দিয়ে mirror তৈরি, সেই sphere-এর কেন্দ্রকে centre of curvature বলে।",
      simpleExplanation: "যে গোলকের অংশ mirror, সেই গোলকের centre হলো C।",
      detailedExplanation: "Centre of curvature সাধারণত C দ্বারা প্রকাশ করা হয়। Pole থেকে C-এর দূরত্ব radius of curvature R।",
      formula: "PC = R",
      units: "m বা cm",
      example: "Concave mirror-এর C সামনে থাকে।",
      realLifeExample: "Spherical mirror-এর ray diagram-এ C ব্যবহৃত হয়।",
      examFocus: "C, R ও F relation",
      commonMistakes: "C এবং F একই point বলা",
      keyPoints: [
        "Symbol = C",
        "PC = R",
        "F এবং C আলাদা point"
      ]
    },

    {
      id: "focus",
      title: "Principal Focus",
      definition: "Principal axis-এর সমান্তরাল rays reflection-এর পরে যে point থেকে আসছে বলে মনে হয় বা যেখানে converge করে তাকে principal focus বলে।",
      simpleExplanation: "Parallel rays-এর reflection-এর গুরুত্বপূর্ণ point হলো focus।",
      detailedExplanation: "Concave mirror-এ parallel rays বাস্তবে focus-এ converge করে। Convex mirror-এ reflected rays focus থেকে আসছে বলে মনে হয়।",
      formula: "f = R/2",
      units: "m বা cm",
      example: "R = 20 cm হলে f = 10 cm।",
      realLifeExample: "Concave reflector-এ light focus করা যায়।",
      examFocus: "F ও C relation",
      commonMistakes: "Convex mirror-এর focus বাস্তবে সামনে থাকে বলা",
      keyPoints: [
        "f = R/2",
        "F lies on principal axis",
        "Concave → converging",
        "Convex → apparent divergence"
      ]
    },

    {
      id: "mirror-formula",
      title: "Mirror Formula",
      definition: "Spherical mirror-এর object distance, image distance এবং focal length-এর সম্পর্ককে mirror formula বলে।",
      simpleExplanation: "u, v এবং f-এর মধ্যে mathematical relation হলো mirror formula।",
      detailedExplanation: "Sign convention অনুসরণ করে spherical mirror-এর numerical problem সমাধান করা হয়।",
      formula: "1/f = 1/v + 1/u",
      units: "m বা cm",
      example: "u ও f দেওয়া থাকলে v বের করা যায়।",
      realLifeExample: "Mirror design ও optical calculations-এ ব্যবহৃত হয়।",
      examFocus: "Numerical",
      commonMistakes: "Sign convention না মানা",
      keyPoints: [
        "1/f = 1/v + 1/u",
        "Sign convention গুরুত্বপূর্ণ",
        "u, v, f একই unit-এ রাখতে হবে"
      ]
    },

    {
      id: "magnification",
      title: "Magnification",
      definition: "Image-এর height এবং object-এর height-এর অনুপাতকে magnification বলে।",
      simpleExplanation: "Image object-এর তুলনায় কত বড় বা ছোট তা magnification দিয়ে বোঝায়।",
      detailedExplanation: "Mirror-এর ক্ষেত্রে magnification m = hᵢ/hₒ = -v/u।",
      formula: "m = hᵢ/hₒ = -v/u",
      units: "কোনো একক নেই",
      example: "m = 2 হলে image object-এর দ্বিগুণ বড়।",
      realLifeExample: "Magnifying mirror-এ বড় image পাওয়ার ধারণা।",
      examFocus: "Magnification numerical",
      commonMistakes: "Magnification-এর unit লেখা",
      keyPoints: [
        "m = hi/ho",
        "m = -v/u",
        "Dimensionless"
      ]
    }
  ],

  questions: [
    {
      id: "ch8-q01",
      conceptId: "reflection",
      type: "MCQ",
      question: "আলো প্রতিফলিত হলে সাধারণত কোথায় ফিরে যায়?",
      options: ["অন্য মাধ্যমে", "একই মাধ্যমে", "শুধু vacuum-এ", "কোথাও নয়"],
      answer: "একই মাধ্যমে",
      explanation: "Reflection-এ light একই মাধ্যমে ফিরে আসে।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch8-q02",
      conceptId: "laws-reflection",
      type: "MCQ",
      question: "Angle of incidence 40° হলে angle of reflection কত?",
      options: ["20°", "40°", "80°", "90°"],
      answer: "40°",
      explanation: "Law of reflection অনুযায়ী i = r।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch8-q03",
      conceptId: "normal",
      type: "MCQ",
      question: "Angle of incidence কোন রেখার সাথে মাপা হয়?",
      options: ["Mirror surface", "Normal", "Principal axis", "Object"],
      answer: "Normal",
      explanation: "Incidence ও reflection angle normal-এর সাথে মাপা হয়।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch8-q04",
      conceptId: "plane-mirror",
      type: "MCQ",
      question: "Plane mirror-এ image কেমন হয়?",
      options: ["Real ও inverted", "Virtual ও erect", "Real ও enlarged", "Virtual ও inverted"],
      answer: "Virtual ও erect",
      explanation: "Plane mirror সাধারণত virtual, erect এবং same-size image তৈরি করে।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch8-q05",
      conceptId: "plane-mirror",
      type: "Numerical",
      question: "একটি object plane mirror থেকে 3 m দূরে। Image mirror-এর কত দূরে তৈরি হবে?",
      answer: "3 m",
      explanation: "Plane mirror-এ object distance = image distance।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch8-q06",
      conceptId: "concave-mirror",
      type: "MCQ",
      question: "কোন mirror converging mirror হিসেবে কাজ করে?",
      options: ["Plane", "Convex", "Concave", "None"],
      answer: "Concave",
      explanation: "Concave mirror parallel rays-কে converge করতে পারে।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch8-q07",
      conceptId: "convex-mirror",
      type: "MCQ",
      question: "Convex mirror সাধারণত কী ধরনের image তৈরি করে?",
      options: ["Real, inverted", "Virtual, erect, diminished", "Real, enlarged", "Virtual, inverted"],
      answer: "Virtual, erect, diminished",
      explanation: "Convex mirror-এর image সবসময় virtual, erect এবং diminished।",
      difficulty: "Medium",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch8-q08",
      conceptId: "focus",
      type: "Numerical",
      question: "একটি spherical mirror-এর radius of curvature 20 cm হলে focal length কত?",
      answer: "10 cm",
      explanation: "f = R/2 = 20/2 = 10 cm।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch8-q09",
      conceptId: "mirror-formula",
      type: "Numerical",
      question: "একটি mirror-এর focal length 10 cm এবং object distance 20 cm হলে mirror formula ব্যবহার করে image distance নির্ণয় করো।",
      answer: "Sign convention অনুযায়ী v নির্ণয় করতে হবে।",
      explanation: "1/f = 1/v + 1/u ব্যবহার করতে হবে এবং chosen Cartesian sign convention অনুসরণ করতে হবে।",
      difficulty: "Hard",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch8-q10",
      conceptId: "magnification",
      type: "MCQ",
      question: "Magnification-এর কোনো SI unit আছে কি?",
      options: ["m", "cm", "m/s", "কোনো unit নেই"],
      answer: "কোনো unit নেই",
      explanation: "Magnification হলো দুটি height-এর ratio, তাই এটি dimensionless।",
      difficulty: "Easy",
      importance: 4,
      source: "Concept Practice"
    }
  ],

  sourcesNote: "এই chapter-এর প্রশ্নগুলো Concept Practice হিসেবে দেওয়া হয়েছে। যাচাইকৃত Board/School question corpus পরে আলাদাভাবে যুক্ত করতে হবে।"
};
