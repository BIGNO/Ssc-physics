export const chapter10 = {
  id: 'p10',
  no: 10,
  title: 'স্থির তড়িৎ',
  focus: 'তড়িৎ আধান, আধানের ধর্ম, কুলম্বের সূত্র, তড়িৎ ক্ষেত্র, বিভব ও ধারকত্ব',

  manual: [
    "তড়িৎ আধানের সংজ্ঞা ও SI একক জানতে হবে",
    "ধনাত্মক ও ঋণাত্মক আধানের ধারণা বুঝতে হবে",
    "Like ও unlike charge-এর আকর্ষণ-বিকর্ষণ ব্যাখ্যা করতে হবে",
    "আধানের মৌলিক ধর্মগুলো বুঝতে হবে",
    "আধানের সংরক্ষণ সূত্র ব্যাখ্যা করতে হবে",
    "আধানের কোয়ান্টাইজেশন ও q = ne সূত্র বুঝতে হবে",
    "Elementary charge-এর মান মনে রাখতে হবে",
    "কুলম্বের সূত্র লিখতে ও প্রয়োগ করতে হবে",
    "দুটি আধানের মধ্যে electrostatic force নির্ণয় করতে হবে",
    "দূরত্ব পরিবর্তন হলে Coulomb force কীভাবে পরিবর্তিত হয় তা বুঝতে হবে",
    "তড়িৎ বলের মান ও দিক নির্ণয় করতে হবে",
    "তড়িৎ ক্ষেত্রের সংজ্ঞা ও ধারণা বুঝতে হবে",
    "তড়িৎ ক্ষেত্রের তীব্রতার সংজ্ঞা ও সূত্র জানতে হবে",
    "E = F/q ও E = kQ/r² ব্যবহার করে numerical সমাধান করতে হবে",
    "Electric field-এর direction নির্ণয় করতে হবে",
    "তড়িৎ ক্ষেত্ররেখার সংজ্ঞা ও বৈশিষ্ট্য জানতে হবে",
    "Positive ও negative charge-এর field-line diagram আঁকতে হবে",
    "তড়িৎ বিভবের সংজ্ঞা, প্রকৃতি ও SI unit জানতে হবে",
    "V = W/q ও V = kQ/r সূত্র ব্যবহার করতে হবে",
    "Potential ও potential difference-এর পার্থক্য বুঝতে হবে",
    "ধারক ও capacitor-এর মৌলিক গঠন বুঝতে হবে",
    "ধারকত্বের সংজ্ঞা ও C = Q/V সূত্র জানতে হবে",
    "Capacitance-এর SI unit Farad জানতে হবে",
    "Static electricity-এর বাস্তব প্রয়োগ ব্যাখ্যা করতে হবে",
    "Electrostatic discharge, grounding ও basic safety ধারণা বুঝতে হবে",
    "Charge, force, field, potential ও capacitance-এর numerical ধাপে ধাপে সমাধান করতে হবে"
  ],

  concepts: [
    {
      id: 'electric-charge',
      title: 'তড়িৎ আধান',
      definition: 'বস্তুর এমন একটি মৌলিক ধর্ম যার কারণে তড়িৎ আকর্ষণ বা বিকর্ষণ সৃষ্টি হয় তাকে তড়িৎ আধান বলে।',
      simpleExplanation: 'Charge হলো এমন একটি বৈশিষ্ট্য যার কারণে বস্তু অন্য charged বস্তুকে আকর্ষণ বা বিকর্ষণ করে।',
      detailedExplanation: 'তড়িৎ আধান দুই প্রকার—ধনাত্মক ও ঋণাত্মক। প্রোটনের আধান ধনাত্মক এবং ইলেকট্রনের আধান ঋণাত্মক। কোনো বস্তুর charge সাধারণত electron গ্রহণ বা বর্জনের ফলে পরিবর্তিত হয়। আধানের SI একক Coulomb (C) এবং elementary charge-এর মান প্রায় 1.6 × 10^-19 C।',
      formula: 'q = ne',
      units: 'কুলম্ব (C)',
      example: 'একটি ইলেকট্রনের আধান −1.6 × 10^-19 C।',
      realLifeExample: 'চিরুনিতে কাপড় ঘষলে ছোট কাগজ আকর্ষণ করা।',
      examFocus: 'সংজ্ঞা, প্রকার ও একক',
      commonMistakes: 'Mass এবং charge-কে একই ধরনের রাশি মনে করা।',
      keyPoints: ['Positive', 'Negative', 'Unit = C']
    },

    {
      id: 'types-charge',
      title: 'তড়িৎ আধানের প্রকারভেদ',
      definition: 'তড়িৎ আধান দুই প্রকার—ধনাত্মক আধান ও ঋণাত্মক আধান।',
      simpleExplanation: 'দুই ধরনের charge হলো positive ও negative।',
      detailedExplanation: 'একই ধরনের আধান পরস্পরকে বিকর্ষণ করে এবং বিপরীত ধরনের আধান পরস্পরকে আকর্ষণ করে।',
      formula: 'Like charges → Repulsion; Unlike charges → Attraction',
      units: 'কোনো একক নেই',
      example: 'দুটি positive charge একে অপরকে repel করবে।',
      realLifeExample: 'ঘর্ষণের মাধ্যমে charge তৈরি হলে আকর্ষণ-বিকর্ষণ দেখা যায়।',
      examFocus: 'আকর্ষণ ও বিকর্ষণ',
      commonMistakes: 'Unlike charges বিকর্ষণ করে বলা।',
      keyPoints: ['Positive', 'Negative', 'Attraction', 'Repulsion']
    },

    {
      id: 'charge-conservation',
      title: 'আধান সংরক্ষণ সূত্র',
      definition: 'কোনো বিচ্ছিন্ন সিস্টেমে মোট তড়িৎ আধানের পরিমাণ সৃষ্টি বা ধ্বংস হয় না; কেবল এক বস্তু থেকে অন্য বস্তুর মধ্যে স্থানান্তরিত হয়।',
      simpleExplanation: 'Charge disappear করে না; এক জায়গা থেকে অন্য জায়গায় transfer হয়।',
      detailedExplanation: 'ঘর্ষণের মাধ্যমে একটি বস্তু electron গ্রহণ করলে অন্য বস্তু electron হারায়। ফলে charge এক বস্তু থেকে অন্য বস্তুর মধ্যে স্থানান্তরিত হয়, কিন্তু একটি isolated system-এর মোট charge অপরিবর্তিত থাকে। অর্থাৎ charge সৃষ্টি বা ধ্বংস না হয়ে transfer হয়।',
      formula: 'Total charge before = Total charge after',
      units: 'কুলম্ব (C)',
      example: 'একটি বস্তু +5 C ও অন্যটি −5 C হলে মোট charge শূন্য।',
      realLifeExample: 'চিরুনি ও চুলের মধ্যে charge transfer।',
      examFocus: 'সূত্র ও ব্যাখ্যা',
      commonMistakes: 'Electron তৈরি বা ধ্বংস হয়েছে মনে করা।',
      keyPoints: ['Conservation', 'Transfer', 'Total charge']
    },

    {
      id: 'quantization-charge',
      title: 'আধানের কোয়ান্টাইজেশন',
      definition: 'তড়িৎ আধান মৌলিক আধানের পূর্ণসংখ্যা গুণিতক হিসেবে পাওয়া যায়—একে আধানের কোয়ান্টাইজেশন বলে।',
      simpleExplanation: 'Charge যেকোনো arbitrary value নয়; elementary charge-এর integer multiple হিসেবে থাকে।',
      detailedExplanation: 'ইলেকট্রন বা প্রোটনের আধান e দ্বারা প্রকাশ করা হয় এবং কোনো বস্তুর মোট charge q = ne দ্বারা নির্ণয় করা যায়।',
      formula: 'q = ne',
      units: 'কুলম্ব (C)',
      example: 'n = 5 হলে q = 5e।',
      realLifeExample: 'Electron transfer-এর মাধ্যমে charged body তৈরি হয়।',
      examFocus: 'Numerical',
      commonMistakes: 'n-কে fractional value ধরা।',
      keyPoints: ['q = ne', 'e = 1.6 × 10^-19 C', 'n is integer']
    },

    {
      id: 'coulomb-law',
      title: 'কুলম্বের সূত্র',
      definition: 'দুটি বিন্দু আধানের মধ্যকার তড়িৎ বলের মান আধানদ্বয়ের গুণফলের সমানুপাতিক এবং তাদের মধ্যকার দূরত্বের বর্গের ব্যস্তানুপাতিক।',
      simpleExplanation: 'Charge বেশি হলে force বেশি, distance বেশি হলে force দ্রুত কমে।',
      detailedExplanation: 'শূন্যস্থান বা বায়ুতে দুটি point charge-এর মধ্যে electrostatic force-এর মান F = kq₁q₂/r²। এখানে k হলো Coulomb constant, q₁ ও q₂ হলো আধান এবং r হলো তাদের মধ্যকার দূরত্ব। Like charges হলে force repulsive এবং unlike charges হলে attractive।',
      formula: 'F = kq₁q₂/r²',
      units: 'বল: নিউটন (N)',
      example: 'q₁ ও q₂ দ্বিগুণ করলে force-এর মান চারগুণ হতে পারে, অন্যান্য শর্ত অপরিবর্তিত থাকলে।',
      realLifeExample: 'Charged particles-এর মধ্যে electrostatic interaction।',
      examFocus: 'Formula-based numerical',
      commonMistakes: 'r-এর জায়গায় r² না বসানো।',
      keyPoints: ['F ∝ q₁q₂', 'F ∝ 1/r²', 'k']
    },

    {
      id: 'electric-force',
      title: 'তড়িৎ বল',
      definition: 'দুটি charged বস্তুর মধ্যে যে আকর্ষণ বা বিকর্ষণ বল ক্রিয়া করে তাকে তড়িৎ বল বলে।',
      simpleExplanation: 'Charge-এর কারণে যে force তৈরি হয় সেটাই electric force।',
      detailedExplanation: 'তড়িৎ বল আকর্ষণধর্মী বা বিকর্ষণধর্মী হতে পারে। দুটি unlike charge আকর্ষণ করে এবং like charge বিকর্ষণ করে।',
      formula: 'F = kq₁q₂/r²',
      units: 'নিউটন (N)',
      example: 'দুটি positive charge-এর মধ্যে repulsive force।',
      realLifeExample: 'Static electricity-এর কারণে হালকা কাগজের টুকরা আকর্ষণ।',
      examFocus: 'দিক ও মান',
      commonMistakes: 'Electric force-এর unit C লেখা।',
      keyPoints: ['Attraction', 'Repulsion', 'Newton']
    },

    {
      id: 'electric-field',
      title: 'তড়িৎ ক্ষেত্র',
      definition: 'কোনো আধানের চারপাশের সেই অঞ্চল যেখানে অন্য একটি আধান তড়িৎ বল অনুভব করে তাকে তড়িৎ ক্ষেত্র বলে।',
      simpleExplanation: 'Charge-এর চারপাশে এমন একটি region থাকে যেখানে অন্য charge force অনুভব করে।',
      detailedExplanation: 'Electric field হলো source charge-এর চারপাশের এমন region যেখানে একটি পরীক্ষণ আধান electric force অনুভব করে। এটি একটি vector quantity। কোনো বিন্দুতে field intensity E হলে একক positive test charge-এর ওপর বলের দিকই electric field-এর direction।',
      formula: 'E = F/q',
      units: 'N/C',
      example: 'একটি positive charge-এর চারপাশে electric field থাকে।',
      realLifeExample: 'Charged balloon-এর আশেপাশের effect।',
      examFocus: 'সংজ্ঞা ও সূত্র',
      commonMistakes: 'Electric field এবং electric force একই মনে করা।',
      keyPoints: ['Region', 'Force', 'E = F/q']
    },

    {
      id: 'field-intensity',
      title: 'তড়িৎ ক্ষেত্রের তীব্রতা',
      definition: 'তড়িৎ ক্ষেত্রে একক ধনাত্মক পরীক্ষণ আধান যে তড়িৎ বল অনুভব করে তাকে তড়িৎ ক্ষেত্রের তীব্রতা বলে।',
      simpleExplanation: 'Unit positive charge-এর ওপর যত force পড়ে সেটাই field intensity।',
      detailedExplanation: 'Electric field intensity E দ্বারা প্রকাশ করা হয় এবং E = F/q। একটি isolated point charge Q-এর জন্য distance r-এ E = kQ/r²। Positive source charge-এর ক্ষেত্রে field বাইরে দিকে এবং negative source charge-এর ক্ষেত্রে ভিতরের দিকে নির্দেশ করে।',
      formula: 'E = F/q = kQ/r²',
      units: 'N/C',
      example: 'Q বাড়লে একই দূরত্বে E বাড়ে।',
      realLifeExample: 'Charged body-এর চারপাশের field strength তুলনা।',
      examFocus: 'Numerical',
      commonMistakes: 'পরীক্ষণ আধান q এবং source charge Q গুলিয়ে ফেলা।',
      keyPoints: ['E', 'F/q', 'kQ/r²']
    },

    {
      id: 'field-lines',
      title: 'তড়িৎ ক্ষেত্ররেখা',
      definition: 'তড়িৎ ক্ষেত্রে এমন কাল্পনিক রেখা যার কোনো বিন্দুতে অঙ্কিত স্পর্শক সেই বিন্দুতে তড়িৎ ক্ষেত্রের দিক নির্দেশ করে তাকে তড়িৎ ক্ষেত্ররেখা বলে।',
      simpleExplanation: 'Field line electric field-এর direction ও relative strength বোঝাতে সাহায্য করে।',
      detailedExplanation: 'Electric field lines একটি কাল্পনিক representation। এগুলো positive charge থেকে বের হয়ে negative charge-এর দিকে যায়। কোনো বিন্দুতে field line-এর tangent সেই বিন্দুর field direction নির্দেশ করে। Field lines যেখানে ঘন, সেখানে field তুলনামূলক শক্তিশালী বোঝানো হয়; দুটি field line পরস্পরকে ছেদ করে না।',
      formula: 'কোনো নির্দিষ্ট scalar formula নেই',
      units: 'প্রযোজ্য নয়',
      example: 'Isolated positive charge-এর field lines বাইরে দিকে যায়।',
      realLifeExample: 'Electric field visualization।',
      examFocus: 'চিত্র ও বৈশিষ্ট্য',
      commonMistakes: 'Negative charge থেকে field lines বাইরে আঁকা।',
      keyPoints: ['Direction', 'Positive to negative', 'Never intersect']
    },

    {
      id: 'electric-potential',
      title: 'তড়িৎ বিভব',
      definition: 'অসীম দূরত্ব থেকে একক ধনাত্মক পরীক্ষণ আধানকে তড়িৎ ক্ষেত্রের কোনো বিন্দুতে আনতে যে কাজ করতে হয় তাকে ঐ বিন্দুর তড়িৎ বিভব বলে।',
      simpleExplanation: 'Unit positive charge-এর জন্য required work-কে electric potential বলা হয়।',
      detailedExplanation: 'Electric potential একটি scalar quantity। অসীম থেকে একক positive test charge-কে কোনো বিন্দুতে আনতে যে work done per unit charge প্রয়োজন, সেটিই সেই বিন্দুর potential। Point charge Q-এর জন্য V = kQ/r। Potential-এর SI unit Volt (V)।',
      formula: 'V = W/q = kQ/r',
      units: 'ভোল্ট (V)',
      example: 'Q বেশি হলে একই r-এ potential-এর magnitude বাড়ে।',
      realLifeExample: 'Battery terminal-এর potential ধারণা।',
      examFocus: 'সংজ্ঞা ও numerical',
      commonMistakes: 'Potential-কে vector quantity লেখা।',
      keyPoints: ['Scalar', 'V = W/q', 'Volt']
    },

    {
      id: 'potential-difference',
      title: 'বিভব পার্থক্য',
      definition: 'একক আধানকে একটি বিন্দু থেকে অন্য বিন্দুতে স্থানান্তর করতে যে কাজ সম্পন্ন হয় তার পরিমাণকে ঐ দুই বিন্দুর বিভব পার্থক্য বলে।',
      simpleExplanation: 'দুটি point-এর electric potential-এর difference হলো potential difference।',
      detailedExplanation: 'দুটি বিন্দুর electric potential-এর পার্থক্যকে potential difference বলে। Circuit-এ charge movement-এর জন্য এটি driving effect প্রদান করে। দুই বিন্দুর মধ্যে work W এবং charge q হলে potential difference V = W/q।',
      formula: 'V = W/q',
      units: 'ভোল্ট (V)',
      example: '12 V battery-এর দুই terminal-এর potential difference 12 V।',
      realLifeExample: 'Battery দিয়ে circuit চালানো।',
      examFocus: 'সংজ্ঞা, unit, relation',
      commonMistakes: 'Volt এবং Coulomb-এর unit গুলিয়ে ফেলা।',
      keyPoints: ['Work', 'Charge', 'Volt']
    },

    {
      id: 'capacitor',
      title: 'ধারক',
      definition: 'বৈদ্যুতিক আধান সঞ্চয় করার জন্য ব্যবহৃত দুটি পরিবাহী পৃষ্ঠবিশিষ্ট যন্ত্রকে ধারক বা capacitor বলে।',
      simpleExplanation: 'Capacitor হলো charge store করার device।',
      detailedExplanation: 'একটি সাধারণ capacitor-এ দুটি conducting plate বা conductor থাকে এবং তাদের মাঝখানে insulating dielectric থাকতে পারে। বিপরীত আধান সঞ্চয়ের মাধ্যমে capacitor বৈদ্যুতিক শক্তি সঞ্চয় করতে পারে। Capacitance C = Q/V।',
      formula: 'C = Q/V',
      units: 'ফ্যারাড (F)',
      example: 'Parallel plate capacitor একটি সাধারণ capacitor।',
      realLifeExample: 'Electronic circuit-এ energy storage ও filtering।',
      examFocus: 'গঠন ও কাজ',
      commonMistakes: 'Capacitance-এর unit Volt লেখা।',
      keyPoints: ['Charge storage', 'Two conductors', 'Dielectric']
    },

    {
      id: 'capacitance',
      title: 'ধারকত্ব',
      definition: 'কোনো ধারকের সঞ্চিত আধান ও দুই পৃষ্ঠের বিভব পার্থক্যের অনুপাতকে ধারকত্ব বলে।',
      simpleExplanation: 'একটি capacitor কত charge store করতে পারে তার measure হলো capacitance।',
      detailedExplanation: 'Capacitance হলো নির্দিষ্ট potential difference-এ capacitor কত charge সঞ্চয় করতে পারে তার পরিমাপ। C = Q/V। একই voltage-এ যে capacitor বেশি charge সঞ্চয় করতে পারে তার capacitance বেশি। এর SI unit Farad (F)।',
      formula: 'C = Q/V',
      units: 'ফ্যারাড (F)',
      example: 'একই voltage-এ বেশি charge store করতে পারলে capacitance বেশি।',
      realLifeExample: 'ক্যামেরা flash circuit-এ capacitor।',
      examFocus: 'Numerical',
      commonMistakes: 'C-কে Coulomb ভাবা।',
      keyPoints: ['C = Q/V', 'Farad', 'Charge storage']
    },

    {
      id: 'static-electricity',
      title: 'স্থির তড়িৎ-এর ব্যবহার',
      definition: 'স্থির তড়িৎ বা electrostatic phenomena বিভিন্ন বাস্তব প্রযুক্তি ও দৈনন্দিন কাজে ব্যবহৃত হয়।',
      simpleExplanation: 'Static charge শুধু experiment নয়; বাস্তব জীবনেও এর অনেক application আছে।',
      detailedExplanation: 'Photocopier, electrostatic precipitator, spray painting এবং বিভিন্ন manufacturing process-এ electrostatic force ব্যবহার করা হয়।',
      formula: 'প্রয়োগভেদে বিভিন্ন সূত্র',
      units: 'প্রয়োগভেদে ভিন্ন',
      example: 'Electrostatic spray painting।',
      realLifeExample: 'Photocopier এবং air pollution control।',
      examFocus: 'Application-based question',
      commonMistakes: 'সব static electricity-কে বিপজ্জনক মনে করা।',
      keyPoints: ['Photocopier', 'Spray painting', 'Precipitator']
    },

    {
      id: 'electrostatic-safety',
      title: 'স্থির তড়িৎ ও নিরাপত্তা',
      definition: 'স্থির তড়িৎ সঞ্চিত আধান হঠাৎ discharge হলে spark সৃষ্টি হতে পারে, তাই কিছু ক্ষেত্রে নিরাপত্তামূলক ব্যবস্থা প্রয়োজন।',
      simpleExplanation: 'Static charge জমে হঠাৎ discharge হলে ছোট spark হতে পারে।',
      detailedExplanation: 'Fuel handling, electronics এবং sensitive equipment-এর ক্ষেত্রে grounding ও anti-static ব্যবস্থা ব্যবহার করা হয়।',
      formula: 'প্রয়োগভেদে',
      units: 'প্রযোজ্য নয়',
      example: 'Grounding-এর মাধ্যমে charge discharge করা।',
      realLifeExample: 'Electronic component handling-এর সময় anti-static protection।',
      examFocus: 'Short explanation',
      commonMistakes: 'Grounding এবং short circuit একই মনে করা।',
      keyPoints: ['Discharge', 'Grounding', 'Safety']
    }
  ],

  formulaSheet: [
    "Charge quantization: q = ne",
    "Elementary charge: e = 1.6 × 10^-19 C",
    "Coulomb's law: F = kq₁q₂/r²",
    "Coulomb constant: k ≈ 9 × 10^9 N·m²/C²",
    "Electric field intensity: E = F/q",
    "Point charge field: E = kQ/r²",
    "Electric potential: V = W/q",
    "Point charge potential: V = kQ/r",
    "Potential difference: V = W/q",
    "Capacitance: C = Q/V",
    "Charge conservation: Total charge before = Total charge after",
    "Like charges → Repulsion",
    "Unlike charges → Attraction",
    "Electric field direction: Positive → Negative"
  ],

  questions: [
    {
      id: 'ch10-q01',
      chapterId: 'p10',
      conceptId: 'electric-charge',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 'High',
      question: 'তড়িৎ আধানের SI একক কোনটি?',
      options: ['Volt', 'Coulomb', 'Newton', 'Watt'],
      answer: 'Coulomb',
      solution: 'Electric charge-এর SI unit হলো Coulomb (C)।'
    },
    {
      id: 'ch10-q02',
      chapterId: 'p10',
      conceptId: 'types-charge',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 'High',
      question: 'সমজাতীয় আধানের মধ্যে কী ঘটে?',
      options: ['আকর্ষণ', 'বিকর্ষণ', 'কোনো বল নেই', 'সংযোজন'],
      answer: 'বিকর্ষণ',
      solution: 'Like charges একে অপরকে repel করে।'
    },
    {
      id: 'ch10-q03',
      chapterId: 'p10',
      conceptId: 'charge-conservation',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 'High',
      question: 'আধান সংরক্ষণ সূত্র অনুযায়ী মোট আধান কীভাবে আচরণ করে?',
      options: ['সবসময় সৃষ্টি হয়', 'সবসময় ধ্বংস হয়', 'বিচ্ছিন্ন সিস্টেমে অপরিবর্তিত থাকে', 'সবসময় দ্বিগুণ হয়'],
      answer: 'বিচ্ছিন্ন সিস্টেমে অপরিবর্তিত থাকে',
      solution: 'Charge সৃষ্টি বা ধ্বংস না হয়ে transfer হয়।'
    },
    {
      id: 'ch10-q04',
      chapterId: 'p10',
      conceptId: 'quantization-charge',
      type: 'Numerical',
      source: 'Concept Practice',
      importance: 'High',
      question: 'একটি বস্তুর আধান 3.2 × 10^-19 C হলে এতে অতিরিক্ত কতটি elementary charge আছে?',
      answer: '2',
      solution: 'q = ne ⇒ n = q/e = (3.2 × 10^-19)/(1.6 × 10^-19) = 2।'
    },
    {
      id: 'ch10-q05',
      chapterId: 'p10',
      conceptId: 'coulomb-law',
      type: 'Numerical',
      source: 'Concept Practice',
      importance: 'High',
      question: 'দুটি point charge q₁ ও q₂-এর মধ্যকার দূরত্ব দ্বিগুণ করলে electrostatic force কত গুণ হবে?',
      answer: '1/4 গুণ',
      solution: 'F ∝ 1/r²। তাই r দ্বিগুণ হলে F নতুন = F/4।'
    },
    {
      id: 'ch10-q06',
      chapterId: 'p10',
      conceptId: 'electric-field',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 'High',
      question: 'তড়িৎ ক্ষেত্রের SI unit কোনটি?',
      options: ['N/C', 'C/N', 'J/C', 'C/V'],
      answer: 'N/C',
      solution: 'E = F/q, তাই unit = N/C।'
    },
    {
      id: 'ch10-q07',
      chapterId: 'p10',
      conceptId: 'field-intensity',
      type: 'Numerical',
      source: 'Concept Practice',
      importance: 'High',
      question: 'একটি 2 μC পরীক্ষণ আধান 6 N বল অনুভব করলে electric field intensity কত?',
      answer: '3 × 10^6 N/C',
      solution: 'E = F/q = 6/(2 × 10^-6) = 3 × 10^6 N/C।'
    },
    {
      id: 'ch10-q08',
      chapterId: 'p10',
      conceptId: 'field-lines',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 'Medium',
      question: 'Electric field lines সাধারণত কোন দিক নির্দেশ করে?',
      options: ['Negative থেকে positive', 'Positive থেকে negative', 'সবসময় বাম থেকে ডানে', 'কোনো নির্দিষ্ট দিক নেই'],
      answer: 'Positive থেকে negative',
      solution: 'Field line-এর direction positive test charge-এর force-এর direction অনুসরণ করে।'
    },
    {
      id: 'ch10-q09',
      chapterId: 'p10',
      conceptId: 'electric-potential',
      type: 'Numerical',
      source: 'Concept Practice',
      importance: 'High',
      question: '20 J কাজ করে 5 C charge স্থানান্তর করলে potential difference কত?',
      answer: '4 V',
      solution: 'V = W/q = 20/5 = 4 V।'
    },
    {
      id: 'ch10-q10',
      chapterId: 'p10',
      conceptId: 'potential-difference',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 'High',
      question: 'Potential difference-এর SI unit কোনটি?',
      options: ['Coulomb', 'Volt', 'Newton', 'Farad'],
      answer: 'Volt',
      solution: 'Potential difference-এর SI unit হলো Volt (V)।'
    },
    {
      id: 'ch10-q11',
      chapterId: 'p10',
      conceptId: 'capacitance',
      type: 'Numerical',
      source: 'Concept Practice',
      importance: 'High',
      question: 'একটি capacitor-এ 6 C charge জমা আছে এবং potential difference 3 V। Capacitance কত?',
      answer: '2 F',
      solution: 'C = Q/V = 6/3 = 2 F।'
    },
    {
      id: 'ch10-q12',
      chapterId: 'p10',
      conceptId: 'static-electricity',
      type: 'Short',
      source: 'Concept Practice',
      importance: 'Medium',
      question: 'স্থির তড়িৎ-এর দুটি ব্যবহার লেখ।',
      answer: 'Photocopier এবং electrostatic spray painting।',
      solution: 'Electrostatic phenomena ব্যবহার করে photocopying, spray painting ও pollution control-এর মতো কাজে সুবিধা পাওয়া যায়।'
    }
  ],

  sourcesNote: 'এই অধ্যায়ের প্রশ্নগুলো Concept Practice হিসেবে দেওয়া হয়েছে। এগুলো verified board-question নয়। প্রকৃত বিগত ৬ বছরের বোর্ড/স্কুল প্রশ্ন যুক্ত করার জন্য verified question corpus প্রয়োজন।'
};
