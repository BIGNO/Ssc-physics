export const chapter4 = {
  id: "p4",
  no: 4,
  title: "কাজ, ক্ষমতা ও শক্তি",
  focus: "Work, energy, power, kinetic energy, potential energy, conservation of energy and efficiency",

  manual: [
    "কাজের সংজ্ঞা ও Physics-এ কাজের ধারণা বুঝতে হবে",
    "কাজ হওয়ার প্রয়োজনীয় শর্তগুলো বলতে হবে",
    "Force, displacement এবং তাদের মধ্যকার angle বুঝতে হবে",
    "W = Fs cosθ সূত্র ব্যবহার করতে হবে",
    "ধনাত্মক, ঋণাত্মক ও শূন্য কাজ শনাক্ত করতে হবে",
    "কাজের SI একক Joule এবং তার অর্থ বুঝতে হবে",
    "শক্তির সংজ্ঞা ও বিভিন্ন রূপ ব্যাখ্যা করতে হবে",
    "গতিশক্তির সূত্র KE = ½mv² ব্যবহার করতে হবে",
    "ভর ও বেগ পরিবর্তনে kinetic energy কীভাবে পরিবর্তিত হয় তা বুঝতে হবে",
    "বিভবশক্তির সূত্র PE = mgh ব্যবহার করতে হবে",
    "Reference level-এর ধারণা বুঝতে হবে",
    "যান্ত্রিক শক্তি = KE + PE সম্পর্ক বুঝতে হবে",
    "শক্তির নিত্যতা সূত্র ব্যাখ্যা করতে হবে",
    "Energy transformation-এর উদাহরণ দিতে হবে",
    "ক্ষমতা P = W/t নির্ণয় করতে হবে",
    "Watt, kilowatt এবং Joule/second-এর সম্পর্ক বুঝতে হবে",
    "kWh ও Joule-এর conversion করতে হবে",
    "Efficiency-এর সূত্র ব্যবহার করে numerical solve করতে হবে",
    "Input power ও output power থেকে efficiency নির্ণয় করতে হবে",
    "Work-Energy-Power সম্পর্কিত board-style numerical সমাধান করতে হবে"
  ],

  concepts: [
    {
      id: "work",
      title: "কাজ (Work)",
      definition: "কোনো বস্তুর উপর বল প্রয়োগের ফলে যদি বলের দিকে বা বলের উপাংশের দিকে বস্তুর সরণ ঘটে, তবে বল দ্বারা কাজ সম্পন্ন হয়েছে বলা হয়।",
      simpleExplanation: "বল প্রয়োগের কারণে বস্তু সরলে কাজ হয়।",
      detailedExplanation: "Physics-এ শুধু চেষ্টা বা force প্রয়োগ করলেই কাজ হয় না। Force প্রয়োগের ফলে displacement থাকতে হবে এবং force-এর displacement-এর দিকে component থাকতে হবে। Force ও displacement-এর মধ্যকার angle θ হলে কাজের পরিমাণ W = Fs cosθ দ্বারা নির্ণয় করা হয়।",
      formula: "W = Fs cosθ",
      units: "SI unit: Joule (J)",
      example: "10 N বল দিয়ে কোনো বস্তুকে বলের দিকে 5 m সরালে W = 10 × 5 = 50 J।",
      realLifeExample: "একটি বাক্স মেঝের উপর ঠেলে সরানো।",
      examFocus: "Work-এর শর্ত, formula এবং positive/negative/zero work।",
      commonMistakes: "বল প্রয়োগ হলেই কাজ হয়েছে মনে করা।",
      keyPoints: [
        "Work-এর জন্য force ও displacement প্রয়োজন।",
        "SI unit Joule (J)।",
        "W = Fs cosθ।"
      ]
    },

    {
      id: "conditions-work",
      title: "কাজ হওয়ার শর্ত",
      definition: "কাজ সম্পন্ন হওয়ার জন্য বস্তুর উপর বল প্রয়োগ এবং সেই বলের কারণে displacement থাকা প্রয়োজন।",
      simpleExplanation: "Force + displacement = work, যদি force-এর displacement-এর দিকে component থাকে।",
      detailedExplanation: "কাজের জন্য force এবং displacement উভয়ই বিবেচনা করতে হয়। Force থাকলেও displacement না হলে work zero। আবার force ও displacement পরস্পর লম্ব হলে force-এর displacement-direction component শূন্য হয়, তাই work zero।",
      formula: "W = Fs cosθ",
      units: "Joule (J)",
      example: "দেয়ালকে জোরে ধাক্কা দিলেও দেয়াল না সরলে mechanical work zero।",
      realLifeExample: "মাথায় ভার নিয়ে সমতল পথে হাঁটার সময় gravity-এর work zero হতে পারে, কারণ displacement horizontal এবং gravity vertical।",
      examFocus: "কখন কাজ শূন্য হয়।",
      commonMistakes: "শারীরিক পরিশ্রম ও Physics-এর mechanical work এক মনে করা।",
      keyPoints: [
        "Displacement না হলে work zero।",
        "θ = 90° হলে work zero।",
        "Force-এর displacement-direction component গুরুত্বপূর্ণ।"
      ]
    },

    {
      id: "positive-negative-zero-work",
      title: "ধনাত্মক, ঋণাত্মক ও শূন্য কাজ",
      definition: "Force ও displacement-এর মধ্যকার কোণের উপর নির্ভর করে work positive, negative বা zero হতে পারে।",
      simpleExplanation: "Force ও displacement একই দিকে হলে positive, বিপরীত হলে negative, আর 90° হলে zero work।",
      detailedExplanation: "Force ও displacement-এর মধ্যকার angle θ কাজের প্রকৃতি নির্ধারণ করে। 0° < θ < 90° হলে work positive, θ = 90° হলে work zero এবং 90° < θ ≤ 180° হলে work negative হতে পারে। একই দিকে force ও displacement হলে সর্বাধিক positive work পাওয়া যায়।",
      formula: "W = Fs cosθ",
      units: "Joule (J)",
      example: "Gravity-এর দিকে নিচে পড়া বস্তুর ক্ষেত্রে gravity positive work করে।",
      realLifeExample: "Brake force চলন্ত গাড়ির উপর negative work করে।",
      examFocus: "তিন ধরনের work-এর উদাহরণ।",
      commonMistakes: "Negative work মানে কাজ হয়নি ভাবা।",
      keyPoints: [
        "Same direction → positive work।",
        "Opposite direction → negative work।",
        "Perpendicular → zero work।"
      ]
    },

    {
      id: "energy",
      title: "শক্তি (Energy)",
      definition: "কোনো বস্তুর কাজ করার সামর্থ্যকে শক্তি বলে।",
      simpleExplanation: "কাজ করার ক্ষমতাই energy।",
      detailedExplanation: "Energy বিভিন্ন রূপে থাকতে পারে, যেমন kinetic, potential, thermal, electrical, chemical ও nuclear energy। Energy এক রূপ থেকে অন্য রূপে রূপান্তরিত হতে পারে। কোনো isolated system-এ মোট energy অপরিবর্তিত থাকে।",
      formula: "Energy = Capacity to do work",
      units: "SI unit: Joule (J)",
      example: "চলন্ত গাড়ির kinetic energy থাকে।",
      realLifeExample: "Battery-তে chemical energy electrical energy-তে রূপান্তরিত হয়।",
      examFocus: "Energy-এর সংজ্ঞা, একক ও বিভিন্ন রূপ।",
      commonMistakes: "Energy এবং power একই জিনিস মনে করা।",
      keyPoints: [
        "Energy-এর SI unit Joule।",
        "Energy কাজ করার সামর্থ্য।",
        "Energy এক রূপ থেকে অন্য রূপে পরিবর্তিত হতে পারে।"
      ]
    },

    {
      id: "kinetic-energy",
      title: "গতিশক্তি (Kinetic Energy)",
      definition: "গতিশীল বস্তুর গতির কারণে যে শক্তি থাকে তাকে গতিশক্তি বলে।",
      simpleExplanation: "বস্তু যত দ্রুত চলে, তার kinetic energy তত বেশি।",
      detailedExplanation: "Kinetic energy বস্তুর ভর এবং বেগের বর্গের উপর নির্ভর করে। KE = ½mv²। তাই ভর দ্বিগুণ হলে একই বেগে KE দ্বিগুণ হয়, কিন্তু বেগ দ্বিগুণ হলে KE চারগুণ হয়।",
      formula: "KE = ½mv²",
      units: "Joule (J)",
      example: "m = 2 kg এবং v = 4 m/s হলে KE = ½ × 2 × 16 = 16 J।",
      realLifeExample: "চলন্ত গাড়ি বা ছোড়া বলের kinetic energy থাকে।",
      examFocus: "KE formula এবং numerical।",
      commonMistakes: "KE = mv² লেখা এবং 1/2 বাদ দেওয়া।",
      keyPoints: [
        "KE = ½mv²।",
        "Velocity-এর square-এর সাথে KE proportional।",
        "বস্তু স্থির হলে KE = 0।"
      ]
    },

    {
      id: "potential-energy",
      title: "বিভবশক্তি (Potential Energy)",
      definition: "বস্তুর অবস্থান বা বিন্যাসের কারণে সঞ্চিত শক্তিকে বিভবশক্তি বলে।",
      simpleExplanation: "বস্তুর position বা configuration-এর কারণে stored energy হলো potential energy।",
      detailedExplanation: "মহাকর্ষীয় বিভবশক্তি সাধারণভাবে PE = mgh। এখানে m হলো ভর, g হলো gravitational acceleration এবং h হলো নির্বাচিত reference level থেকে উচ্চতা। একই ভর ও g-এর জন্য উচ্চতা বাড়লে PE বাড়ে।",
      formula: "PE = mgh",
      units: "Joule (J)",
      example: "2 kg বস্তুকে 5 m উচ্চতায় তুললে g=10 m/s² ধরে PE = 2×10×5 = 100 J।",
      realLifeExample: "উঁচু বাঁধে জমা পানির gravitational potential energy থাকে।",
      examFocus: "mgh formula এবং numerical।",
      commonMistakes: "Height-এর unit metre-এ convert না করা।",
      keyPoints: [
        "PE = mgh।",
        "Height বাড়লে gravitational PE বাড়ে।",
        "Reference level গুরুত্বপূর্ণ।"
      ]
    },

    {
      id: "mechanical-energy",
      title: "যান্ত্রিক শক্তি",
      definition: "কোনো বস্তুর kinetic energy এবং potential energy-এর সমষ্টিকে mechanical energy বলে।",
      simpleExplanation: "Motion-এর energy + position-এর energy = mechanical energy।",
      detailedExplanation: "Mechanical energy হলো kinetic এবং potential energy-এর সমষ্টি। কোনো ব্যবস্থায় mechanical energy loss না হলে KE ও PE-এর পারস্পরিক রূপান্তরের মধ্যেও মোট mechanical energy একই থাকতে পারে।",
      formula: "Mechanical Energy = KE + PE",
      units: "Joule (J)",
      example: "একটি বস্তুর KE = 20 J এবং PE = 30 J হলে mechanical energy = 50 J।",
      realLifeExample: "Pendulum-এর motion-এ kinetic ও potential energy পরস্পরের মধ্যে পরিবর্তিত হয়।",
      examFocus: "KE + PE এবং conservation।",
      commonMistakes: "Mechanical energy-কে total energy-এর সাথে সবসময় একই ধরা।",
      keyPoints: [
        "ME = KE + PE।",
        "KE ও PE পরস্পরে রূপান্তরিত হতে পারে।"
      ]
    },

    {
      id: "conservation-energy",
      title: "শক্তির নিত্যতা সূত্র",
      definition: "শক্তি সৃষ্টি বা ধ্বংস করা যায় না; এটি এক রূপ থেকে অন্য রূপে রূপান্তরিত হতে পারে, কিন্তু মোট শক্তির পরিমাণ অপরিবর্তিত থাকে।",
      simpleExplanation: "Energy হারিয়ে যায় না, শুধু form পরিবর্তন করে।",
      detailedExplanation: "শক্তির নিত্যতা সূত্র অনুযায়ী energy সৃষ্টি বা ধ্বংস হয় না। একটি isolated system-এর মোট energy constant থাকে। উদাহরণস্বরূপ, friction-এর কারণে mechanical energy কমে গেলেও সেই energy-এর একটি অংশ thermal energy-তে রূপান্তরিত হয়।",
      formula: "Total Energy = Constant",
      units: "Joule (J)",
      example: "উঁচু থেকে পড়ার সময় PE কমে KE বাড়ে।",
      realLifeExample: "Hydroelectric power plant-এ water-এর potential energy electrical energy-তে রূপান্তরিত হয়।",
      examFocus: "Energy transformation ও conservation।",
      commonMistakes: "Friction-এর কারণে energy পুরোপুরি নষ্ট হয়ে যায় মনে করা।",
      keyPoints: [
        "Energy সৃষ্টি বা ধ্বংস হয় না।",
        "Energy form পরিবর্তন করতে পারে।",
        "Total energy conserved।"
      ]
    },

    {
      id: "power",
      title: "ক্ষমতা (Power)",
      definition: "একক সময়ে সম্পন্ন কাজের পরিমাণকে ক্ষমতা বলে।",
      simpleExplanation: "কত দ্রুত কাজ করা হচ্ছে তা power দিয়ে বোঝায়।",
      detailedExplanation: "Power হলো কাজ করার হার। একই পরিমাণ কাজ কম সময়ে সম্পন্ন করলে power বেশি হয়। Power-এর SI unit Watt এবং 1 W = 1 J/s। Electrical appliances-এর power rating সাধারণত Watt বা kilowatt-এ দেওয়া হয়।",
      formula: "P = W/t",
      units: "Watt (W) = Joule/second",
      example: "100 J কাজ 20 s-এ হলে P = 5 W।",
      realLifeExample: "100 W bulb প্রতি সেকেন্ডে 100 J হারে electrical energy ব্যবহার করে।",
      examFocus: "Power formula এবং Watt conversion।",
      commonMistakes: "Power এবং energy-এর unit একই মনে করা।",
      keyPoints: [
        "P = W/t।",
        "SI unit Watt।",
        "1 W = 1 J/s।"
      ]
    },

    {
      id: "commercial-unit-energy",
      title: "বৈদ্যুতিক শক্তির বাণিজ্যিক একক",
      definition: "বৈদ্যুতিক শক্তির বাণিজ্যিক পরিমাপে kilowatt-hour বা kWh ব্যবহৃত হয়।",
      simpleExplanation: "Electricity bill-এ যে unit ব্যবহার করা হয় সেটি সাধারণত kWh।",
      detailedExplanation: "1 kWh হলো 1 kW ক্ষমতার কোনো যন্ত্র 1 hour চললে ব্যবহৃত energy। যেহেতু 1 kW = 1000 J/s এবং 1 hour = 3600 s, তাই 1 kWh = 3.6 × 10⁶ J।",
      formula: "1 kWh = 3.6 × 10⁶ J",
      units: "kWh বা commercial unit",
      example: "1 kW heater 2 hour চললে energy consumption = 2 kWh।",
      realLifeExample: "বাসার electricity bill-এ consumed units kWh-এ হিসাব করা হয়।",
      examFocus: "kWh থেকে Joule conversion।",
      commonMistakes: "kWh-কে power-এর unit মনে করা।",
      keyPoints: [
        "kWh energy-এর unit।",
        "1 kWh = 3.6 MJ।",
        "Electricity billing-এ ব্যবহৃত হয়।"
      ]
    },

    {
      id: "efficiency",
      title: "কর্মদক্ষতা (Efficiency)",
      definition: "কোনো যন্ত্রে প্রাপ্ত useful output energy বা work এবং supplied input energy বা work-এর অনুপাতকে efficiency বলে।",
      simpleExplanation: "Input-এর কত অংশ useful output হিসেবে পাওয়া যাচ্ছে তা efficiency।",
      detailedExplanation: "কোনো যন্ত্রের supplied input-এর কত অংশ useful output হিসেবে পাওয়া যায় তা efficiency দিয়ে প্রকাশ করা হয়। Friction, heat, sound ইত্যাদির কারণে বাস্তব যন্ত্রে input energy-এর সবটুকু useful output হয় না। তাই বাস্তব যন্ত্রের efficiency সাধারণত 100% এর কম।",
      formula: "Efficiency = (Useful Output / Input) × 100%",
      units: "Percentage (%)",
      example: "Input 500 J এবং useful output 400 J হলে efficiency = 80%।",
      realLifeExample: "Electric motor-এর efficiency input electrical energy-এর কত অংশ useful mechanical output দেয় তা বোঝায়।",
      examFocus: "Efficiency numerical এবং percentage calculation।",
      commonMistakes: "Output/Input-এর বদলে Input/Output করা।",
      keyPoints: [
        "Efficiency = useful output/input × 100%।",
        "বাস্তব যন্ত্রে efficiency সাধারণত 100%-এর কম।",
        "Efficiency-এর unit percentage।"
      ]
    },

    {
      id: "power-efficiency-relation",
      title: "ক্ষমতা ও কর্মদক্ষতার সম্পর্ক",
      definition: "একটি যন্ত্রের input power এবং useful output power-এর অনুপাত দিয়েও efficiency প্রকাশ করা যায়।",
      simpleExplanation: "Power ব্যবহার করেও efficiency বের করা যায়।",
      detailedExplanation: "একই সময়ের ক্ষেত্রে energy ratio-এর পরিবর্তে power ratio ব্যবহার করা যায়।",
      formula: "Efficiency = (Output Power / Input Power) × 100%",
      units: "Percentage (%)",
      example: "Input power 1000 W এবং output power 800 W হলে efficiency = 80%。",
      realLifeExample: "Motor, generator এবং pump-এর efficiency power ratio দিয়ে নির্ণয় করা যায়।",
      examFocus: "Input-output power থেকে efficiency নির্ণয়।",
      commonMistakes: "Percentage sign বাদ দেওয়া।",
      keyPoints: [
        "Output power/input power দিয়ে efficiency নির্ণয় করা যায়।",
        "Efficiency একটি ratio।"
      ]
    }
  ],

  formulaSheet: [
    {
      name: "কাজ",
      formula: "W = Fs cosθ",
      note: "Force ও displacement-এর মধ্যকার angle θ।"
    },
    {
      name: "গতিশক্তি",
      formula: "KE = ½mv²",
      note: "m = mass, v = velocity।"
    },
    {
      name: "বিভবশক্তি",
      formula: "PE = mgh",
      note: "m = mass, g = gravitational acceleration, h = height।"
    },
    {
      name: "যান্ত্রিক শক্তি",
      formula: "ME = KE + PE",
      note: "Kinetic ও potential energy-এর সমষ্টি।"
    },
    {
      name: "ক্ষমতা",
      formula: "P = W/t",
      note: "কাজের হার।"
    },
    {
      name: "Efficiency",
      formula: "η = (Useful Output / Input) × 100%",
      note: "Energy/work অথবা power ratio ব্যবহার করা যায়।"
    },
    {
      name: "বাণিজ্যিক বৈদ্যুতিক শক্তি",
      formula: "1 kWh = 3.6 × 10⁶ J",
      note: "Electricity consumption-এর প্রচলিত commercial unit।"
    }
  ],

  questions: [
    {
      id: "ch4-q01",
      conceptId: "work",
      type: "MCQ",
      question: "Work-এর SI unit কোনটি?",
      options: ["Newton", "Joule", "Watt", "Pascal"],
      answer: "Joule",
      explanation: "Work-এর SI unit হলো Joule (J)।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch4-q02",
      conceptId: "work",
      type: "Numerical",
      question: "10 N force দিয়ে একটি বস্তুকে force-এর দিকে 5 m সরানো হলো। Work কত?",
      answer: "50 J",
      explanation: "W = Fs = 10 × 5 = 50 J।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch4-q03",
      conceptId: "positive-negative-zero-work",
      type: "MCQ",
      question: "Force ও displacement পরস্পর লম্ব হলে work কত?",
      options: ["Maximum", "Zero", "Negative", "Infinite"],
      answer: "Zero",
      explanation: "W = Fs cos90° = 0।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch4-q04",
      conceptId: "energy",
      type: "MCQ",
      question: "Energy-এর SI unit কী?",
      options: ["Watt", "Joule", "Newton", "Volt"],
      answer: "Joule",
      explanation: "Energy-এর SI unit Joule।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch4-q05",
      conceptId: "kinetic-energy",
      type: "Numerical",
      question: "2 kg ভরের একটি বস্তুর velocity 4 m/s। তার kinetic energy কত?",
      answer: "16 J",
      explanation: "KE = ½mv² = ½ × 2 × 4² = 16 J।",
      difficulty: "Medium",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch4-q06",
      conceptId: "potential-energy",
      type: "Numerical",
      question: "2 kg ভরের একটি বস্তু 5 m উচ্চতায় আছে। g = 10 m/s² হলে PE কত?",
      answer: "100 J",
      explanation: "PE = mgh = 2 × 10 × 5 = 100 J।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch4-q07",
      conceptId: "conservation-energy",
      type: "CQ",
      question: "শক্তির নিত্যতা সূত্র ব্যাখ্যা করো।",
      answer: "শক্তি সৃষ্টি বা ধ্বংস হয় না; এটি এক রূপ থেকে অন্য রূপে পরিবর্তিত হয় এবং মোট শক্তি অপরিবর্তিত থাকে।",
      explanation: "উঁচু থেকে পড়ন্ত বস্তুর ক্ষেত্রে potential energy kinetic energy-তে রূপান্তরিত হয়।",
      difficulty: "Medium",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch4-q08",
      conceptId: "power",
      type: "Numerical",
      question: "100 J কাজ 20 s-এ সম্পন্ন করা হলো। Power কত?",
      answer: "5 W",
      explanation: "P = W/t = 100/20 = 5 W।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch4-q09",
      conceptId: "commercial-unit-energy",
      type: "MCQ",
      question: "1 kWh সমান কত Joule?",
      options: ["3.6 × 10⁶ J", "3.6 × 10³ J", "360 J", "36 J"],
      answer: "3.6 × 10⁶ J",
      explanation: "1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J।",
      difficulty: "Medium",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch4-q10",
      conceptId: "efficiency",
      type: "Numerical",
      question: "একটি যন্ত্রে input energy 500 J এবং useful output energy 400 J। Efficiency কত?",
      answer: "80%",
      explanation: "Efficiency = (400/500) × 100 = 80%。",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    }
  ],

  sourcesNote: "এই chapter-এর প্রশ্নগুলো বর্তমানে Concept Practice হিসেবে দেওয়া হয়েছে। Verified Board/School প্রশ্ন পরে আলাদা source ও year tag সহ যুক্ত করা হবে।"
};
