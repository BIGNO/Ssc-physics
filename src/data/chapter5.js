export const chapter5 = {
  id: "p5",
  no: 5,
  title: "পদার্থের অবস্থা ও চাপ",
  focus: "States of matter, density, pressure, atmospheric pressure, liquid pressure and applications",

  manual: [
    "কঠিন, তরল ও গ্যাসীয় অবস্থার বৈশিষ্ট্য ব্যাখ্যা করতে হবে",
    "তিন অবস্থার কণার বিন্যাস ও আন্তঃকণিক আকর্ষণের পার্থক্য বুঝতে হবে",
    "তাপের প্রভাবে পদার্থের অবস্থার পরিবর্তন বুঝতে হবে",
    "ঘনত্বের সংজ্ঞা, সূত্র ও SI একক জানতে হবে",
    "Mass, volume ও density-এর মধ্যে সম্পর্ক ব্যবহার করতে হবে",
    "Relative density-এর ধারণা ও unit বুঝতে হবে",
    "Pressure-এর সংজ্ঞা, formula ও SI unit জানতে হবে",
    "Force ও area পরিবর্তনের সাথে pressure কীভাবে পরিবর্তিত হয় তা বুঝতে হবে",
    "তরলের চাপের সূত্র P = hρg ব্যবহার করতে হবে",
    "Depth, density ও liquid pressure-এর সম্পর্ক ব্যাখ্যা করতে হবে",
    "Atmospheric pressure-এর ধারণা ও উচ্চতার সাথে এর সম্পর্ক বুঝতে হবে",
    "Pascal's law ব্যাখ্যা করতে হবে",
    "Hydraulic press-এর working principle ও force-area relation বুঝতে হবে",
    "Pressure ও density-এর বাস্তব জীবনের applications ব্যাখ্যা করতে হবে",
    "সব numerical-এ SI unit ব্যবহার ও unit conversion করতে হবে",
    "Formula → substitution → calculation → unit—এই ধাপে numerical solve করতে হবে",
    "Pressure, density ও hydraulic machine-এর board-style numerical সমাধান করতে হবে"
  ],

  concepts: [

    {
      id: "states-of-matter",
      title: "পদার্থের অবস্থা",
      definition: "পদার্থ প্রধানত কঠিন, তরল ও গ্যাসীয়—এই তিন অবস্থায় থাকতে পারে।",
      simpleExplanation: "কঠিনের নির্দিষ্ট আকার ও আয়তন আছে। তরলের নির্দিষ্ট আয়তন আছে কিন্তু নির্দিষ্ট আকার নেই। গ্যাসের নির্দিষ্ট আকার ও আয়তন কোনোটিই নেই।",
      detailedExplanation: "কঠিন পদার্থে কণাগুলো ঘনভাবে সাজানো এবং আন্তঃকণিক আকর্ষণ তুলনামূলক বেশি। তারা নির্দিষ্ট অবস্থানের আশেপাশে কম্পন করে। তরলে কণাগুলোর মধ্যে দূরত্ব বেশি এবং তারা পরস্পরের উপর দিয়ে চলতে পারে, তাই তরল প্রবাহিত হয়। গ্যাসে কণাগুলোর মধ্যে দূরত্ব অনেক বেশি এবং তারা প্রায় স্বাধীনভাবে চলাচল করে।",
      formula: "কোনো নির্দিষ্ট সূত্র নেই",
      units: "প্রযোজ্য নয়",
      example: "লোহা = কঠিন, পানি = তরল, অক্সিজেন = গ্যাস",
      realLifeExample: "বরফ গলে পানি এবং পানি বাষ্পে পরিণত হতে পারে।",
      examFocus: "তিন অবস্থার বৈশিষ্ট্য তুলনা",
      commonMistakes: "তরলের নির্দিষ্ট আকার আছে মনে করা",
      keyPoints: [
        "Solid → নির্দিষ্ট আকার ও আয়তন",
        "Liquid → নির্দিষ্ট আয়তন, অনির্দিষ্ট আকার",
        "Gas → অনির্দিষ্ট আকার ও আয়তন"
      ]
    },

    {
      id: "properties-solid",
      title: "কঠিন পদার্থের বৈশিষ্ট্য",
      definition: "যে পদার্থের নির্দিষ্ট আকার ও আয়তন থাকে তাকে কঠিন পদার্থ বলে।",
      simpleExplanation: "কঠিনের কণাগুলো খুব কাছাকাছি থাকে।",
      detailedExplanation: "কঠিন পদার্থের আন্তঃকণিক আকর্ষণ বেশি হওয়ায় কণাগুলো ঘনভাবে সাজানো থাকে। তারা সম্পূর্ণ স্থির নয়; নিজ নিজ অবস্থানের আশেপাশে কম্পন করে। এই কণাবিন্যাসের কারণে কঠিনের নির্দিষ্ট আকার ও আয়তন থাকে এবং সহজে সংকুচিত করা যায় না।",
      formula: "প্রযোজ্য নয়",
      units: "প্রযোজ্য নয়",
      example: "কাঠ, লোহা, পাথর",
      realLifeExample: "টেবিল বা চেয়ার সহজে নিজের আকার পরিবর্তন করে না।",
      examFocus: "কঠিনের বৈশিষ্ট্য",
      commonMistakes: "কঠিন পদার্থের কণাগুলো একেবারে স্থির মনে করা",
      keyPoints: [
        "কণাগুলো ঘনভাবে সাজানো",
        "আকর্ষণ বল বেশি",
        "নির্দিষ্ট আকার ও আয়তন"
      ]
    },

    {
      id: "properties-liquid",
      title: "তরল পদার্থের বৈশিষ্ট্য",
      definition: "তরলের নির্দিষ্ট আয়তন থাকে কিন্তু নির্দিষ্ট আকার থাকে না।",
      simpleExplanation: "তরল যে পাত্রে রাখা হয় সেই পাত্রের আকার ধারণ করে।",
      detailedExplanation: "তরলের কণাগুলো কঠিনের তুলনায় কিছুটা দূরে থাকে এবং তাদের চলাচলের স্বাধীনতা বেশি। তাই তারা একে অপরের উপর দিয়ে চলতে পারে এবং তরল প্রবাহিত হয়। তরলের আয়তন প্রায় নির্দিষ্ট থাকে, কিন্তু নির্দিষ্ট আকার থাকে না।",
      formula: "প্রযোজ্য নয়",
      units: "প্রযোজ্য নয়",
      example: "পানি, তেল, দুধ",
      realLifeExample: "গ্লাসে পানি রাখলে পানির আকার গ্লাসের মতো হয়।",
      examFocus: "তরলের নির্দিষ্ট আয়তন কেন থাকে",
      commonMistakes: "তরলের নির্দিষ্ট আকার আছে বলা",
      keyPoints: [
        "নির্দিষ্ট আয়তন আছে",
        "নির্দিষ্ট আকার নেই",
        "প্রবাহিত হতে পারে"
      ]
    },

    {
      id: "properties-gas",
      title: "গ্যাসীয় পদার্থের বৈশিষ্ট্য",
      definition: "গ্যাসের নির্দিষ্ট আকার ও আয়তন কোনোটিই থাকে না।",
      simpleExplanation: "গ্যাস পুরো পাত্রে ছড়িয়ে পড়ে।",
      detailedExplanation: "গ্যাসের কণাগুলোর মধ্যে অনেক বেশি ফাঁকা স্থান থাকে এবং তারা দ্রুত ও প্রায় স্বাধীনভাবে চলাচল করে। তাই গ্যাসের নির্দিষ্ট আকার বা আয়তন নেই, সহজে সংকুচিত করা যায় এবং এটি যে পাত্রে রাখা হয় তার সম্পূর্ণ স্থান দখল করে।",
      formula: "প্রযোজ্য নয়",
      units: "প্রযোজ্য নয়",
      example: "অক্সিজেন, নাইট্রোজেন, কার্বন ডাই-অক্সাইড",
      realLifeExample: "বেলুনের ভিতরের বাতাস পুরো বেলুনে ছড়িয়ে থাকে।",
      examFocus: "গ্যাসের বৈশিষ্ট্য",
      commonMistakes: "গ্যাসের নির্দিষ্ট আয়তন আছে মনে করা",
      keyPoints: [
        "কণার মধ্যে দূরত্ব বেশি",
        "সহজে সংকুচিত করা যায়",
        "পুরো পাত্র পূর্ণ করে"
      ]
    },

    {
      id: "density",
      title: "ঘনত্ব",
      definition: "একক আয়তনের পদার্থের ভরকে ঘনত্ব বলে।",
      simpleExplanation: "একই আয়তনে কোন পদার্থের ভর বেশি তা ঘনত্ব দিয়ে বোঝা যায়।",
      detailedExplanation: "কোনো বস্তুর ভর m এবং আয়তন V হলে ঘনত্ব হলো ρ = m/V। একই আয়তনে বেশি ভরের পদার্থের density বেশি। Numerical করার সময় mass ও volume একই consistent unit system-এ রাখতে হবে।",
      formula: "ρ = m / V",
      units: "SI unit = kg/m³",
      example: "m = 10 kg, V = 2 m³ হলে ρ = 10/2 = 5 kg/m³",
      realLifeExample: "লোহার ঘনত্ব কাঠের চেয়ে বেশি।",
      examFocus: "Density numerical",
      commonMistakes: "g/cm³ ও kg/m³ conversion ভুল করা",
      keyPoints: [
        "ρ = m/V",
        "ঘনত্বের SI একক kg/m³",
        "ভর বাড়লে ঘনত্ব বাড়তে পারে, যদি আয়তন অপরিবর্তিত থাকে"
      ]
    },

    {
      id: "relative-density",
      title: "আপেক্ষিক ঘনত্ব",
      definition: "কোনো পদার্থের ঘনত্ব ও পানির ঘনত্বের অনুপাতকে আপেক্ষিক ঘনত্ব বলে।",
      simpleExplanation: "এটি বলে দেয় কোনো পদার্থ পানি অপেক্ষা কত গুণ বেশি বা কম ঘন।",
      detailedExplanation: "আপেক্ষিক ঘনত্ব হলো কোনো পদার্থের density এবং reference হিসেবে ব্যবহৃত পানির density-এর অনুপাত। একই unit-এ দুই density নিলে unit cancel হয়ে যায়, তাই relative density-এর কোনো unit নেই।",
      formula: "Relative Density = Density of substance / Density of water",
      units: "কোনো একক নেই",
      example: "কোনো পদার্থের ঘনত্ব 2000 kg/m³ এবং পানির ঘনত্ব 1000 kg/m³ হলে RD = 2",
      realLifeExample: "কোনো পদার্থ পানিতে ভাসবে নাকি ডুববে তা বুঝতে আপেক্ষিক ঘনত্ব কাজে লাগে।",
      examFocus: "RD calculation",
      commonMistakes: "আপেক্ষিক ঘনত্বের একক লেখা",
      keyPoints: [
        "এটি dimensionless",
        "পানির ঘনত্ব reference হিসেবে ব্যবহৃত হয়"
      ]
    },

    {
      id: "pressure",
      title: "চাপ",
      definition: "একক ক্ষেত্রফলের উপর লম্বভাবে ক্রিয়াশীল বলকে চাপ বলে।",
      simpleExplanation: "একই বল ছোট জায়গায় প্রয়োগ করলে চাপ বেশি হয়।",
      detailedExplanation: "কোনো পৃষ্ঠের উপর F বল A ক্ষেত্রফলের উপর লম্বভাবে ক্রিয়া করলে pressure P = F/A। তাই একই area-তে force বাড়লে pressure বাড়ে, আর একই force-এর ক্ষেত্রে area বাড়লে pressure কমে।",
      formula: "P = F / A",
      units: "Pascal (Pa) = N/m²",
      example: "F = 100 N এবং A = 2 m² হলে P = 50 Pa",
      realLifeExample: "ধারালো ছুরি সহজে কাটে কারণ ধারালো অংশের ক্ষেত্রফল কম।",
      examFocus: "Pressure numerical এবং unit",
      commonMistakes: "ক্ষেত্রফল বাড়লে চাপ বাড়ে মনে করা",
      keyPoints: [
        "P = F/A",
        "চাপ বলের সমানুপাতিক",
        "চাপ ক্ষেত্রফলের ব্যস্তানুপাতিক"
      ]
    },

    {
      id: "pressure-area",
      title: "চাপ ও ক্ষেত্রফলের সম্পর্ক",
      definition: "একই বলের ক্ষেত্রে চাপ ক্ষেত্রফলের ব্যস্তানুপাতিক।",
      simpleExplanation: "Area কম → Pressure বেশি; Area বেশি → Pressure কম।",
      detailedExplanation: "P = F/A থেকে বোঝা যায়, F ধ্রুব থাকলে pressure area-এর ব্যস্তানুপাতিক। অর্থাৎ area অর্ধেক হলে pressure দ্বিগুণ এবং area দ্বিগুণ হলে pressure অর্ধেক হয়।",
      formula: "P ∝ 1/A",
      units: "Pa",
      example: "একই ওজনের সরু হিলের জুতা মাটিতে বেশি চাপ সৃষ্টি করে।",
      realLifeExample: "ট্রাকের চাকা বড় ও প্রশস্ত রাখা হয় যাতে মাটির উপর চাপ কম পড়ে।",
      examFocus: "Reasoning question",
      commonMistakes: "চাপ ও ক্ষেত্রফলকে সমানুপাতিক ধরা",
      keyPoints: [
        "Area কম হলে pressure বেশি",
        "Area বেশি হলে pressure কম"
      ]
    },

    {
      id: "liquid-pressure",
      title: "তরলের চাপ",
      definition: "তরল তার সংস্পর্শে থাকা পাত্রের পৃষ্ঠে চাপ প্রয়োগ করে।",
      simpleExplanation: "তরলের গভীরতা বাড়লে তরলের চাপ বাড়ে।",
      detailedExplanation: "স্থির তরলের free surface থেকে h গভীরতায় তরল চাপের একটি অংশ P = hρg দ্বারা প্রকাশ করা যায়। এখানে h হলো depth, ρ হলো liquid density এবং g হলো gravitational acceleration। তাই একই তরলে depth বাড়লে pressure বাড়ে।",
      formula: "P = hρg",
      units: "Pa",
      example: "h = 2 m, ρ = 1000 kg/m³, g = 9.8 m/s² হলে P = 19600 Pa",
      realLifeExample: "বাঁধের নিচের অংশ বেশি মোটা করা হয় কারণ নিচে পানির চাপ বেশি।",
      examFocus: "P = hρg numerical",
      commonMistakes: "গভীরতা ও চাপের সম্পর্ক ভুল করা",
      keyPoints: [
        "Depth বাড়লে pressure বাড়ে",
        "Density বাড়লে pressure বাড়ে",
        "P = hρg"
      ]
    },

    {
      id: "atmospheric-pressure",
      title: "বায়ুমণ্ডলীয় চাপ",
      definition: "বায়ুমণ্ডলের ওজনের কারণে পৃথিবীর পৃষ্ঠে যে চাপ সৃষ্টি হয় তাকে বায়ুমণ্ডলীয় চাপ বলে।",
      simpleExplanation: "আমাদের চারপাশের বাতাসও চাপ সৃষ্টি করে।",
      detailedExplanation: "বায়ুমণ্ডল পৃথিবীকে ঘিরে থাকা গ্যাসের স্তর। এর ওজনের কারণে পৃথিবীর পৃষ্ঠ ও বস্তুর উপর atmospheric pressure সৃষ্টি হয়। উচ্চতা বাড়লে সাধারণত মাথার উপরের বায়ুর স্তর কমে যায়, তাই atmospheric pressure কমে।",
      formula: "P = F/A",
      units: "Pa",
      example: "সমুদ্রপৃষ্ঠে atmospheric pressure বেশি, পাহাড়ে তুলনামূলক কম।",
      realLifeExample: "স্ট্র দিয়ে পানীয় পান করার সময় atmospheric pressure গুরুত্বপূর্ণ ভূমিকা রাখে।",
      examFocus: "Atmospheric pressure explanation",
      commonMistakes: "বায়ু চাপ সৃষ্টি করে না মনে করা",
      keyPoints: [
        "বাতাসের ওজন আছে",
        "বাতাস চাপ সৃষ্টি করে",
        "উচ্চতা বাড়লে চাপ কমে"
      ]
    },

    {
      id: "pascal-law",
      title: "Pascal-এর সূত্র",
      definition: "আবদ্ধ তরলের কোনো অংশে চাপ প্রয়োগ করলে সেই চাপ তরলের সর্বত্র সমানভাবে সঞ্চারিত হয়।",
      simpleExplanation: "তরলের এক জায়গায় চাপ দিলে চাপটি সবদিকে ছড়িয়ে পড়ে।",
      detailedExplanation: "Pascal's law আবদ্ধ তরলের pressure transmission ব্যাখ্যা করে। Hydraulic press, hydraulic lift এবং hydraulic brake-এর মতো ব্যবস্থায় এই principle ব্যবহার করা হয়। দুই piston-এর ক্ষেত্রে pressure একই হলে F₁/A₁ = F₂/A₂ সম্পর্ক পাওয়া যায়।",
      formula: "F₁/A₁ = F₂/A₂",
      units: "Pressure → Pa",
      example: "ছোট piston-এ ছোট বল প্রয়োগ করে বড় piston-এ বড় বল পাওয়া যায়।",
      realLifeExample: "গাড়ির hydraulic brake system।",
      examFocus: "Pascal's law ও application",
      commonMistakes: "শুধু তরল চলাচল করে বলেই Pascal's law হয় মনে করা",
      keyPoints: [
        "আবদ্ধ তরল প্রয়োজন",
        "চাপ সবদিকে সঞ্চারিত হয়",
        "Hydraulic machine-এ ব্যবহৃত হয়"
      ]
    },

    {
      id: "hydraulic-press",
      title: "Hydraulic Press",
      definition: "Pascal's law ব্যবহার করে ছোট বল দিয়ে বড় বল উৎপন্ন করার যন্ত্রকে hydraulic press বলে।",
      simpleExplanation: "ছোট piston-এ চাপ দিলে বড় piston-এ বেশি force পাওয়া যায়।",
      detailedExplanation: "Hydraulic press-এ দুটি piston একটি আবদ্ধ তরলের মাধ্যমে যুক্ত থাকে। ছোট piston-এ F₁ force প্রয়োগ করলে liquid-এর মাধ্যমে pressure সঞ্চারিত হয়। Pascal's law অনুযায়ী pressure দুই piston-এ সমান, তাই F₁/A₁ = F₂/A₂। বড় piston-এর area বেশি হলে সেখানে তুলনামূলক বড় force পাওয়া যায়।",
      formula: "F₂ = F₁ × A₂/A₁",
      units: "Force → N",
      example: "A₂ যদি A₁-এর 10 গুণ হয়, তাহলে F₂ প্রায় F₁-এর 10 গুণ হবে।",
      realLifeExample: "গাড়ি তোলা, ধাতু চাপ দিয়ে আকৃতি দেওয়া ইত্যাদিতে hydraulic system ব্যবহৃত হয়।",
      examFocus: "Hydraulic numerical",
      commonMistakes: "ছোট piston-এ বড় force প্রয়োজন মনে করা",
      keyPoints: [
        "Pascal's law-এর প্রয়োগ",
        "Pressure দুই piston-এ সমান",
        "Area ratio force ratio নির্ধারণ করে"
      ]
    },

    {
      id: "pressure-depth-relation",
      title: "গভীরতা ও তরলের চাপ",
      definition: "স্থির তরলের চাপ গভীরতার সাথে বৃদ্ধি পায়।",
      simpleExplanation: "যত নিচে যাওয়া যায়, উপরের তরলের ওজন তত বেশি হয়।",
      detailedExplanation: "P = hρg। একই তরল ও একই স্থানে g ধ্রুব ধরে নিলে ρ ও g ধ্রুব থাকে, তাই P ∝ h। ফলে depth দ্বিগুণ হলে liquid pressure-ও দ্বিগুণ হয়। এই কারণে বাঁধের নিচের অংশে বেশি pressure সহ্য করার ব্যবস্থা করা হয়।",
      formula: "P ∝ h",
      units: "Pa",
      example: "গভীরতা 2 m থেকে 4 m হলে একই তরলে pressure দ্বিগুণ হবে।",
      realLifeExample: "সমুদ্রের গভীরে submarine-এর উপর বেশি pressure পড়ে।",
      examFocus: "Graph/reasoning question",
      commonMistakes: "চাপ গভীরতার সাথে কমে বলা",
      keyPoints: [
        "P ∝ h",
        "নিচে চাপ বেশি",
        "বাঁধের নিচের অংশ মোটা"
      ]
    },

    {
      id: "pressure-density-relation",
      title: "ঘনত্ব ও তরলের চাপ",
      definition: "একই গভীরতায় তরলের চাপ তার ঘনত্বের সমানুপাতিক।",
      simpleExplanation: "বেশি ঘন তরল একই গভীরতায় বেশি pressure তৈরি করে।",
      detailedExplanation: "P = hρg থেকে বোঝা যায়, একই depth ও একই g-এর জন্য liquid pressure density-এর সমানুপাতিক। অর্থাৎ একই গভীরতায় বেশি density-এর তরল বেশি pressure সৃষ্টি করবে।",
      formula: "P ∝ ρ",
      units: "Pa",
      example: "একই গভীরতায় তেলের তুলনায় বেশি ঘন তরল বেশি চাপ দিতে পারে।",
      realLifeExample: "বিভিন্ন তরলের pressure comparison করতে density ব্যবহার করা হয়।",
      examFocus: "Density-pressure relation",
      commonMistakes: "শুধু depth-এর উপর pressure নির্ভর করে বলা",
      keyPoints: [
        "Density বাড়লে pressure বাড়ে",
        "P = hρg"
      ]
    }
  ],

  formulaSheet: [
    {
      name: "ঘনত্ব",
      formula: "ρ = m/V",
      note: "ρ = density, m = mass, V = volume। SI unit: kg/m³।"
    },
    {
      name: "আপেক্ষিক ঘনত্ব",
      formula: "RD = ρ(substance) / ρ(water)",
      note: "Relative density-এর কোনো unit নেই।"
    },
    {
      name: "চাপ",
      formula: "P = F/A",
      note: "F = normal force, A = area। SI unit: Pa = N/m²।"
    },
    {
      name: "তরলের চাপ",
      formula: "P = hρg",
      note: "h = depth, ρ = liquid density, g = gravitational acceleration।"
    },
    {
      name: "Pascal's law",
      formula: "F₁/A₁ = F₂/A₂",
      note: "Hydraulic system-এ pressure transmission-এর সম্পর্ক।"
    },
    {
      name: "Hydraulic force",
      formula: "F₂ = F₁ × A₂/A₁",
      note: "Area ratio অনুযায়ী output force নির্ণয় করা যায়।"
    }
  ],

  questions: [
    {
      id: "ch5-q01",
      conceptId: "density",
      type: "MCQ",
      question: "ঘনত্বের SI একক কোনটি?",
      options: ["kg", "m³", "kg/m³", "N"],
      answer: "kg/m³",
      explanation: "ঘনত্ব = ভর/আয়তন, তাই SI একক kg/m³।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch5-q02",
      conceptId: "pressure",
      type: "MCQ",
      question: "চাপের SI একক কী?",
      options: ["Newton", "Joule", "Pascal", "Watt"],
      answer: "Pascal",
      explanation: "Pressure-এর SI unit Pascal (Pa)।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch5-q03",
      conceptId: "pressure",
      type: "MCQ",
      question: "চাপের সঠিক সূত্র কোনটি?",
      options: ["P = FA", "P = F/A", "P = A/F", "P = F + A"],
      answer: "P = F/A",
      explanation: "চাপ = লম্ব বল / ক্ষেত্রফল।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch5-q04",
      conceptId: "pressure-area",
      type: "MCQ",
      question: "ক্ষেত্রফল অর্ধেক করলে একই বলের জন্য চাপ কী হবে?",
      options: ["অর্ধেক", "দ্বিগুণ", "চারগুণ", "অপরিবর্তিত"],
      answer: "দ্বিগুণ",
      explanation: "P = F/A। Area অর্ধেক হলে pressure দ্বিগুণ হয়।",
      difficulty: "Medium",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch5-q05",
      conceptId: "liquid-pressure",
      type: "MCQ",
      question: "তরলের গভীরতা বাড়লে তরলের চাপ কী হয়?",
      options: ["কমে", "বাড়ে", "শূন্য হয়", "অপরিবর্তিত থাকে"],
      answer: "বাড়ে",
      explanation: "P = hρg, তাই depth বাড়লে pressure বাড়ে।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch5-q06",
      conceptId: "pascal-law",
      type: "MCQ",
      question: "Hydraulic press কোন সূত্রের উপর ভিত্তি করে কাজ করে?",
      options: ["Newton's law", "Pascal's law", "Ohm's law", "Hooke's law"],
      answer: "Pascal's law",
      explanation: "Hydraulic machine Pascal's law ব্যবহার করে।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch5-q07",
      conceptId: "atmospheric-pressure",
      type: "MCQ",
      question: "উচ্চতা বাড়লে atmospheric pressure সাধারণত কী হয়?",
      options: ["বাড়ে", "কমে", "অপরিবর্তিত", "শূন্যই থাকে"],
      answer: "কমে",
      explanation: "উচ্চতা বাড়লে উপরকার বায়ুর স্তর কম হওয়ায় atmospheric pressure কমে।",
      difficulty: "Medium",
      importance: 4,
      source: "Concept Practice"
    },
    {
      id: "ch5-q08",
      conceptId: "relative-density",
      type: "MCQ",
      question: "আপেক্ষিক ঘনত্বের একক কী?",
      options: ["kg/m³", "N/m²", "m/s", "কোনো একক নেই"],
      answer: "কোনো একক নেই",
      explanation: "দুটি ঘনত্বের অনুপাত হওয়ায় relative density dimensionless।",
      difficulty: "Easy",
      importance: 4,
      source: "Concept Practice"
    },
    {
      id: "ch5-q09",
      conceptId: "density",
      type: "Numerical",
      question: "একটি বস্তুর ভর 20 kg এবং আয়তন 4 m³ হলে তার ঘনত্ব কত?",
      answer: "5 kg/m³",
      explanation: "ρ = m/V = 20/4 = 5 kg/m³।",
      difficulty: "Medium",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch5-q10",
      conceptId: "pressure",
      type: "Numerical",
      question: "100 N বল 5 m² ক্ষেত্রফলের উপর প্রয়োগ করলে চাপ কত?",
      answer: "20 Pa",
      explanation: "P = F/A = 100/5 = 20 Pa।",
      difficulty: "Medium",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch5-q11",
      conceptId: "liquid-pressure",
      type: "Numerical",
      question: "পানির ঘনত্ব 1000 kg/m³, গভীরতা 2 m এবং g = 10 m/s² হলে তরলের চাপ কত?",
      answer: "20,000 Pa",
      explanation: "P = hρg = 2 × 1000 × 10 = 20,000 Pa।",
      difficulty: "Medium",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch5-q12",
      conceptId: "hydraulic-press",
      type: "Numerical",
      question: "Hydraulic machine-এ ছোট piston-এর area 2 cm² এবং বড় piston-এর area 20 cm²। ছোট piston-এ 50 N force দিলে বড় piston-এ কত force পাওয়া যাবে?",
      answer: "500 N",
      explanation: "F₁/A₁ = F₂/A₂। তাই F₂ = 50 × 20/2 = 500 N।",
      difficulty: "Hard",
      importance: 5,
      source: "Concept Practice"
    }
  ],

  sourcesNote: "এই chapter-এর প্রশ্নগুলো বর্তমানে Concept Practice হিসেবে দেওয়া হয়েছে। যাচাইকৃত Board/School question corpus পরে আলাদাভাবে যুক্ত করতে হবে।"
};
