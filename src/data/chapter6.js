export const chapter6 = {
  id: "p6",
  no: 6,
  title: "তাপ ও তাপমাত্রা",
  focus: "Heat, temperature, thermal expansion, specific heat, heat transfer and change of state",

  manual: [
    "তাপ ও তাপমাত্রার সংজ্ঞা আলাদা করে বলতে হবে",
    "Heat এবং temperature-এর মধ্যে পার্থক্য ব্যাখ্যা করতে হবে",
    "Temperature-এর SI unit Kelvin এবং অন্যান্য scale জানতে হবে",
    "Celsius, Fahrenheit ও Kelvin-এর conversion করতে হবে",
    "Temperature scale-এর fixed points বুঝতে হবে",
    "তাপীয় প্রসারণের কারণ ও বাস্তব জীবনের প্রয়োগ ব্যাখ্যা করতে হবে",
    "Linear expansion-এর ধারণা ও formula ব্যবহার করতে হবে",
    "Specific heat capacity-এর সংজ্ঞা, unit ও formula জানতে হবে",
    "Q = mcΔT ব্যবহার করে heat numerical solve করতে হবে",
    "Heat capacity ও specific heat capacity-এর পার্থক্য বুঝতে হবে",
    "Conduction, convection ও radiation আলাদা করে শনাক্ত করতে হবে",
    "প্রতিটি heat-transfer mode-এর বাস্তব উদাহরণ দিতে হবে",
    "Melting, freezing, boiling ও condensation ব্যাখ্যা করতে হবে",
    "Change of state-এর সময় temperature-এর আচরণ বুঝতে হবে",
    "Latent heat-এর ধারণা ও Q = mL formula ব্যবহার করতে হবে",
    "Specific latent heat-এর unit জানতে হবে",
    "Heat transfer-এর বাস্তব জীবনের applications ব্যাখ্যা করতে হবে",
    "Numerical-এ mass, temperature change ও specific heat-এর unit ঠিক রাখতে হবে",
    "Formula → substitution → calculation → unit ধাপে numerical solve করতে হবে",
    "Board-style conceptual ও numerical প্রশ্ন সমাধান করতে হবে"
  ],

  concepts: [

    {
      id: "heat",
      title: "তাপ",
      definition: "তাপ হলো তাপমাত্রার পার্থক্যের কারণে এক বস্তু থেকে অন্য বস্তুর মধ্যে সঞ্চারিত শক্তি।",
      simpleExplanation: "গরম বস্তু থেকে ঠান্ডা বস্তুর দিকে তাপ প্রবাহিত হয়।",
      detailedExplanation: "দুটি বস্তুর তাপমাত্রা ভিন্ন হলে তাপীয় সাম্য প্রতিষ্ঠার জন্য উচ্চ তাপমাত্রার বস্তু থেকে নিম্ন তাপমাত্রার বস্তুর দিকে শক্তি স্থানান্তরিত হয়। এই স্থানান্তরিত শক্তিকে heat বলা হয়। তাপ কোনো বস্তুর স্থায়ী বৈশিষ্ট্য নয়; এটি temperature difference-এর কারণে transfer হওয়া energy।",
      formula: "Q = mcΔT",
      units: "SI unit = Joule (J)",
      example: "গরম চা ঠান্ডা পরিবেশে রাখলে চা থেকে পরিবেশে তাপ যায়।",
      realLifeExample: "চুলায় রাখা পাত্র গরম হওয়া।",
      examFocus: "Heat-এর সংজ্ঞা ও unit",
      commonMistakes: "তাপ ও তাপমাত্রাকে একই জিনিস মনে করা",
      keyPoints: [
        "তাপ এক ধরনের শক্তি স্থানান্তর",
        "তাপ উচ্চ temperature থেকে নিম্ন temperature-এ যায়",
        "SI unit = Joule"
      ]
    },

    {
      id: "temperature",
      title: "তাপমাত্রা",
      definition: "কোনো বস্তুর উষ্ণতা বা শীতলতার মাত্রাকে তাপমাত্রা বলে।",
      simpleExplanation: "কোনো বস্তু কতটা গরম বা ঠান্ডা তা temperature দিয়ে বোঝা যায়।",
      detailedExplanation: "তাপমাত্রা কোনো বস্তুর উষ্ণতা বা শীতলতার মাত্রা নির্দেশ করে এবং পদার্থের কণাগুলোর গড় গতিশক্তির সাথে সম্পর্কিত। Temperature সরাসরি কোনো বস্তুর মধ্যে থাকা মোট heat-এর পরিমাণ নয়। একই temperature-এর দুটি বস্তুর heat content তাদের mass ও material-এর কারণে ভিন্ন হতে পারে।",
      formula: "প্রযোজ্য নয়",
      units: "Kelvin (K), Celsius (°C), Fahrenheit (°F)",
      example: "পানির freezing point 0°C।",
      realLifeExample: "Thermometer দিয়ে শরীরের temperature মাপা হয়।",
      examFocus: "Heat বনাম Temperature",
      commonMistakes: "Temperature-এর SI unit Celsius বলা",
      keyPoints: [
        "SI unit = Kelvin",
        "Temperature উষ্ণতার মাত্রা নির্দেশ করে",
        "Heat এবং temperature এক নয়"
      ]
    },

    {
      id: "temperature-scales",
      title: "তাপমাত্রার স্কেল",
      definition: "তাপমাত্রা পরিমাপের জন্য Celsius, Fahrenheit এবং Kelvin scale ব্যবহৃত হয়।",
      simpleExplanation: "একই temperature বিভিন্ন scale-এ বিভিন্ন numerical value দিয়ে প্রকাশ করা যায়।",
      detailedExplanation: "Celsius scale-এ সাধারণভাবে পানির ice point 0°C এবং boiling point 100°C ধরা হয়। Kelvin scale-এ একই temperature যথাক্রমে প্রায় 273 K ও 373 K। Kelvin হলো SI temperature scale এবং Kelvin temperature লেখার সময় degree symbol ব্যবহার করা হয় না।",
      formula: "K = °C + 273",
      units: "K, °C, °F",
      example: "25°C = 298 K",
      realLifeExample: "Scientific calculation-এ Kelvin scale বেশি ব্যবহৃত হয়।",
      examFocus: "Scale conversion",
      commonMistakes: "Kelvin-এর সাথে ° চিহ্ন ব্যবহার করা",
      keyPoints: [
        "0°C = 273 K",
        "100°C = 373 K",
        "K = °C + 273"
      ]
    },

    {
      id: "celsius-fahrenheit",
      title: "Celsius ও Fahrenheit সম্পর্ক",
      definition: "Celsius এবং Fahrenheit scale-এর মধ্যে নির্দিষ্ট mathematical relationship রয়েছে।",
      simpleExplanation: "এক scale-এর temperature অন্য scale-এ convert করা যায়।",
      detailedExplanation: "Celsius ও Fahrenheit scale-এর conversion relation হলো C/5 = (F−32)/9। তাই 0°C = 32°F এবং 100°C = 212°F। Conversion numerical-এ Celsius বা Fahrenheit-এর absolute value না মিশিয়ে সঠিক formula ব্যবহার করতে হবে।",
      formula: "C/5 = (F−32)/9",
      units: "°C এবং °F",
      example: "0°C = 32°F",
      realLifeExample: "বিভিন্ন দেশের weather report-এ আলাদা temperature scale দেখা যায়।",
      examFocus: "Conversion numerical",
      commonMistakes: "Fahrenheit থেকে 32 বাদ দিতে ভুল করা",
      keyPoints: [
        "C/5 = (F−32)/9",
        "0°C = 32°F",
        "100°C = 212°F"
      ]
    },

    {
      id: "thermal-expansion",
      title: "তাপীয় প্রসারণ",
      definition: "তাপমাত্রা বৃদ্ধির ফলে কোনো পদার্থের দৈর্ঘ্য, ক্ষেত্রফল বা আয়তন বৃদ্ধি পাওয়াকে তাপীয় প্রসারণ বলে।",
      simpleExplanation: "বস্তু গরম করলে সাধারণত তার size বাড়ে।",
      detailedExplanation: "সাধারণভাবে temperature বাড়লে পদার্থের কণাগুলোর গড় বিচ্ছেদ বৃদ্ধি পায় এবং পদার্থ প্রসারিত হয়। Temperature কমলে সাধারণত contraction ঘটে। Solid-এর ক্ষেত্রে length, area ও volume পরিবর্তিত হতে পারে।",
      formula: "ΔL = αL₀ΔT",
      units: "Length → m",
      example: "রেললাইনের মাঝে ছোট gap রাখা হয়।",
      realLifeExample: "ব্রিজে expansion joint ব্যবহার করা হয়।",
      examFocus: "Thermal expansion explanation",
      commonMistakes: "সব পদার্থ একই পরিমাণে প্রসারিত হয় মনে করা",
      keyPoints: [
        "Heating → সাধারণত expansion",
        "Cooling → সাধারণত contraction",
        "Solid-এর length/area/volume পরিবর্তিত হতে পারে"
      ]
    },

    {
      id: "linear-expansion",
      title: "রৈখিক প্রসারণ",
      definition: "তাপমাত্রা বৃদ্ধির ফলে কঠিন বস্তুর দৈর্ঘ্য বৃদ্ধি পাওয়াকে রৈখিক প্রসারণ বলে।",
      simpleExplanation: "একটি লোহার দণ্ড গরম করলে তার length বাড়ে।",
      detailedExplanation: "কঠিন দণ্ডের initial length L₀ এবং temperature change ΔT হলে linear expansion-এর পরিমাণ ΔL = αL₀ΔT। এখানে α হলো coefficient of linear expansion। নতুন দৈর্ঘ্য L = L₀ + ΔL।",
      formula: "ΔL = αL₀ΔT",
      units: "α → K⁻¹",
      example: "লোহার rod গরম করলে তার দৈর্ঘ্য কিছুটা বৃদ্ধি পায়।",
      realLifeExample: "রেললাইনে expansion gap রাখা হয়।",
      examFocus: "Formula-based numerical",
      commonMistakes: "ΔT-এর unit ভুল ব্যবহার করা",
      keyPoints: [
        "ΔL ∝ L₀",
        "ΔL ∝ ΔT",
        "Coefficient of linear expansion গুরুত্বপূর্ণ"
      ]
    },

    {
      id: "specific-heat",
      title: "Specific Heat Capacity",
      definition: "একক ভরের কোনো পদার্থের তাপমাত্রা 1°C বা 1 K বৃদ্ধি করতে প্রয়োজনীয় তাপের পরিমাণকে specific heat capacity বলে।",
      simpleExplanation: "কোনো পদার্থ কত সহজে গরম হয় তা specific heat দিয়ে বোঝা যায়।",
      detailedExplanation: "ভর m-এর কোনো পদার্থের temperature ΔT পরিবর্তনের জন্য প্রয়োজনীয় heat Q = mcΔT। এখানে c হলো specific heat capacity। একই mass ও temperature change-এর জন্য যার c বেশি, তার temperature পরিবর্তন করতে বেশি heat প্রয়োজন হয়।",
      formula: "Q = mcΔT",
      units: "J kg⁻¹ K⁻¹",
      example: "পানির specific heat capacity বেশি হওয়ায় পানি সহজে temperature change করে না।",
      realLifeExample: "পানি car radiator-এ coolant হিসেবে ব্যবহৃত হয়।",
      examFocus: "Q = mcΔT numerical",
      commonMistakes: "c এবং C-এর notation গুলিয়ে ফেলা",
      keyPoints: [
        "c = Q/(mΔT)",
        "Unit = J/kg K",
        "পানির specific heat capacity বেশি"
      ]
    },

    {
      id: "heat-capacity",
      title: "তাপ ধারণ ক্ষমতা",
      definition: "কোনো বস্তুর তাপমাত্রা 1 K বৃদ্ধি করতে প্রয়োজনীয় তাপকে heat capacity বলে।",
      simpleExplanation: "পুরো বস্তুকে 1°C গরম করতে কত তাপ লাগে তা heat capacity।",
      detailedExplanation: "Heat capacity হলো পুরো বস্তুর temperature 1 K পরিবর্তন করতে প্রয়োজনীয় heat। C = Q/ΔT এবং C = mc। তাই heat capacity বস্তুর mass ও material উভয়ের উপর নির্ভর করে, যেখানে specific heat capacity হলো unit mass-এর material property।",
      formula: "C = Q/ΔT = mc",
      units: "J/K",
      example: "একই material-এর বড় বস্তুর heat capacity বেশি।",
      realLifeExample: "বড় পানির tank অনেক তাপ ধারণ করতে পারে।",
      examFocus: "Heat capacity বনাম specific heat",
      commonMistakes: "দুটিকে একই quantity মনে করা",
      keyPoints: [
        "Heat capacity পুরো বস্তুর property",
        "Specific heat unit mass-এর property"
      ]
    },

    {
      id: "conduction",
      title: "Conduction",
      definition: "পদার্থের সামগ্রিক স্থানান্তর ছাড়াই কণার পারস্পরিক ক্রিয়ার মাধ্যমে তাপ সঞ্চালনকে conduction বলে।",
      simpleExplanation: "কঠিন পদার্থে এক প্রান্ত গরম করলে তাপ অন্য প্রান্তে পৌঁছে যায়।",
      detailedExplanation: "Conduction-এ পদার্থের সামগ্রিক bulk movement ছাড়াই কাছাকাছি কণার মধ্যে energy transfer হয়। Solid, বিশেষ করে metals-এ conduction গুরুত্বপূর্ণ। ধাতুতে free electrons-এর কারণে thermal conduction তুলনামূলক বেশি হতে পারে।",
      formula: "Q/t = kAΔT/L",
      units: "Thermal conductivity → W m⁻¹ K⁻¹",
      example: "লোহার rod-এর এক প্রান্ত আগুনে ধরলে অন্য প্রান্ত গরম হয়।",
      realLifeExample: "ধাতব cooking pan-এর handle গরম হওয়া।",
      examFocus: "Modes of heat transfer",
      commonMistakes: "Conduction-এ bulk motion হয় মনে করা",
      keyPoints: [
        "বিশেষত solids-এ গুরুত্বপূর্ণ",
        "Metals are good conductors",
        "No bulk movement of matter"
      ]
    },

    {
      id: "convection",
      title: "Convection",
      definition: "তরল বা গ্যাসের কণার সামগ্রিক চলাচলের মাধ্যমে তাপ সঞ্চালনকে convection বলে।",
      simpleExplanation: "গরম তরল/গ্যাস উপরে উঠে এবং ঠান্ডা অংশ নিচে নামে।",
      detailedExplanation: "Convection শুধু fluid—অর্থাৎ liquid ও gas—এর ক্ষেত্রে গুরুত্বপূর্ণ। Heating-এর ফলে fluid-এর density পরিবর্তিত হলে warmer, less-dense অংশ উপরে উঠতে পারে এবং cooler, denser অংশ নিচে নামতে পারে। এভাবে convection current তৈরি হয়।",
      formula: "প্রযোজ্য নয়",
      units: "প্রযোজ্য নয়",
      example: "পানি গরম করার সময় convection current তৈরি হয়।",
      realLifeExample: "সমুদ্রবায়ু ও স্থলবায়ু convection-এর উদাহরণ।",
      examFocus: "Convection current",
      commonMistakes: "Solids-এ convection হয় বলা",
      keyPoints: [
        "Liquids ও gases-এ হয়",
        "Fluid movement প্রয়োজন",
        "Density difference গুরুত্বপূর্ণ"
      ]
    },

    {
      id: "radiation",
      title: "Radiation",
      definition: "কোনো মাধ্যম ছাড়াই electromagnetic wave-এর মাধ্যমে তাপ সঞ্চালনকে radiation বলে।",
      simpleExplanation: "সূর্যের তাপ vacuum পার হয়ে পৃথিবীতে আসে।",
      detailedExplanation: "Radiation electromagnetic waves-এর মাধ্যমে energy transfer করে এবং এর জন্য material medium প্রয়োজন হয় না। তাই vacuum-এর মধ্যেও radiation সম্ভব। সূর্য থেকে পৃথিবীতে energy আসা এর গুরুত্বপূর্ণ উদাহরণ।",
      formula: "প্রযোজ্য নয়",
      units: "প্রযোজ্য নয়",
      example: "সূর্য থেকে পৃথিবীতে তাপ আসা।",
      realLifeExample: "আগুনের পাশে দাঁড়ালে দূর থেকেও গরম অনুভূত হয়।",
      examFocus: "Conduction, convection, radiation comparison",
      commonMistakes: "Radiation-এর জন্য air প্রয়োজন মনে করা",
      keyPoints: [
        "Medium প্রয়োজন নেই",
        "Vacuum-এ চলতে পারে",
        "Sun → Earth heat transfer"
      ]
    },

    {
      id: "change-of-state",
      title: "পদার্থের অবস্থার পরিবর্তন",
      definition: "তাপের প্রভাবে কোনো পদার্থের physical state পরিবর্তনকে change of state বলে।",
      simpleExplanation: "বরফ → পানি → বাষ্প হলো state change।",
      detailedExplanation: "পদার্থ heat গ্রহণ বা বর্জন করলে এক state থেকে অন্য state-এ যেতে পারে। Solid → liquid হলো melting, liquid → solid হলো freezing, liquid → gas হলো vaporization/boiling এবং gas → liquid হলো condensation। State change-এর সময় পদার্থের internal arrangement পরিবর্তিত হয়।",
      formula: "Q = mL",
      units: "Latent heat → J/kg",
      example: "বরফ গলে পানি হওয়া।",
      realLifeExample: "পানি ফুটে steam হওয়া।",
      examFocus: "Melting, boiling, condensation",
      commonMistakes: "State change-এর সময় সবসময় temperature বাড়ে মনে করা",
      keyPoints: [
        "Melting",
        "Freezing",
        "Boiling",
        "Condensation"
      ]
    },

    {
      id: "latent-heat",
      title: "সুপ্ত তাপ",
      definition: "তাপমাত্রা পরিবর্তন না ঘটিয়ে পদার্থের অবস্থার পরিবর্তনে যে তাপ প্রয়োজন বা নির্গত হয় তাকে সুপ্ত তাপ বলে।",
      simpleExplanation: "State change-এর সময় temperature constant থেকেও heat exchange হয়।",
      detailedExplanation: "State change-এর সময় temperature স্থির থাকতে পারে, কিন্তু heat transfer চলতে থাকে। ভর m-এর পদার্থের state change-এর জন্য Q = mL, যেখানে L হলো specific latent heat। তাই এই ক্ষেত্রে সাধারণ sensible-heating formula Q = mcΔT নয়, latent-heat relation ব্যবহার করা হয়।",
      formula: "Q = mL",
      units: "J/kg",
      example: "বরফ গলার সময় 0°C তাপমাত্রায় heat গ্রহণ করে।",
      realLifeExample: "বরফ গলতে সময় লাগে কারণ latent heat প্রয়োজন হয়।",
      examFocus: "Latent heat numerical",
      commonMistakes: "Q = mcΔT ব্যবহার করা",
      keyPoints: [
        "State change-এর সময় temperature constant থাকতে পারে",
        "Q = mL",
        "Unit = J/kg"
      ]
    }
  ],

  formulaSheet: [
    {
      name: "তাপের পরিমাণ",
      formula: "Q = mcΔT",
      note: "Q = heat, m = mass, c = specific heat capacity, ΔT = temperature change।"
    },
    {
      name: "Specific heat capacity",
      formula: "c = Q/(mΔT)",
      note: "SI unit: J kg⁻¹ K⁻¹।"
    },
    {
      name: "Heat capacity",
      formula: "C = Q/ΔT = mc",
      note: "SI unit: J/K।"
    },
    {
      name: "Linear expansion",
      formula: "ΔL = αL₀ΔT",
      note: "L₀ = initial length, α = coefficient of linear expansion।"
    },
    {
      name: "Final length",
      formula: "L = L₀ + ΔL",
      note: "Heating-এর ক্ষেত্রে সাধারণত length বৃদ্ধি পায়।"
    },
    {
      name: "Celsius → Kelvin",
      formula: "K = °C + 273",
      note: "More precisely, K = °C + 273.15; school numerical-এ সাধারণত 273 ব্যবহৃত হয়।"
    },
    {
      name: "Celsius ↔ Fahrenheit",
      formula: "C/5 = (F−32)/9",
      note: "0°C = 32°F এবং 100°C = 212°F।"
    },
    {
      name: "Latent heat",
      formula: "Q = mL",
      note: "L = specific latent heat; SI unit: J/kg।"
    }
  ],

  questions: [
    {
      id: "ch6-q01",
      conceptId: "heat",
      type: "MCQ",
      question: "তাপের SI একক কোনটি?",
      options: ["Watt", "Joule", "Kelvin", "Pascal"],
      answer: "Joule",
      explanation: "তাপ শক্তির একটি রূপ, তাই SI unit Joule।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch6-q02",
      conceptId: "temperature",
      type: "MCQ",
      question: "তাপমাত্রার SI একক কোনটি?",
      options: ["Celsius", "Fahrenheit", "Kelvin", "Joule"],
      answer: "Kelvin",
      explanation: "SI temperature unit হলো Kelvin।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch6-q03",
      conceptId: "temperature-scales",
      type: "Numerical",
      question: "25°C কত Kelvin?",
      answer: "298 K",
      explanation: "K = °C + 273 = 25 + 273 = 298 K।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch6-q04",
      conceptId: "celsius-fahrenheit",
      type: "Numerical",
      question: "0°C কত Fahrenheit?",
      answer: "32°F",
      explanation: "C/5 = (F−32)/9 থেকে F = 32°F।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch6-q05",
      conceptId: "specific-heat",
      type: "MCQ",
      question: "Specific heat capacity-এর SI unit কোনটি?",
      options: ["J/kg K", "J/kg", "J/K", "W/m"],
      answer: "J/kg K",
      explanation: "Specific heat-এর unit হলো J kg⁻¹ K⁻¹।",
      difficulty: "Medium",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch6-q06",
      conceptId: "specific-heat",
      type: "Numerical",
      question: "2 kg পানির specific heat 4200 J/kg K এবং temperature 5 K বাড়াতে কত তাপ লাগবে?",
      answer: "42,000 J",
      explanation: "Q = mcΔT = 2 × 4200 × 5 = 42,000 J।",
      difficulty: "Medium",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch6-q07",
      conceptId: "conduction",
      type: "MCQ",
      question: "ধাতুতে তাপ সঞ্চালনের প্রধান পদ্ধতি কোনটি?",
      options: ["Conduction", "Convection", "Radiation", "Evaporation"],
      answer: "Conduction",
      explanation: "ধাতু ভালো conductor এবং conduction-এর মাধ্যমে তাপ সঞ্চালন করে।",
      difficulty: "Easy",
      importance: 4,
      source: "Concept Practice"
    },
    {
      id: "ch6-q08",
      conceptId: "convection",
      type: "MCQ",
      question: "Convection সাধারণত কোথায় ঘটে?",
      options: ["শুধু solid-এ", "Liquid ও gas-এ", "শুধু vacuum-এ", "শুধু metal-এ"],
      answer: "Liquid ও gas-এ",
      explanation: "Fluid-এর bulk motion-এর মাধ্যমে convection ঘটে।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch6-q09",
      conceptId: "radiation",
      type: "MCQ",
      question: "কোন পদ্ধতিতে মাধ্যম ছাড়াই তাপ সঞ্চালিত হতে পারে?",
      options: ["Conduction", "Convection", "Radiation", "Diffusion"],
      answer: "Radiation",
      explanation: "Radiation vacuum-এর মধ্যেও চলতে পারে।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch6-q10",
      conceptId: "latent-heat",
      type: "Numerical",
      question: "0.5 kg পদার্থের specific latent heat 200,000 J/kg হলে state change-এর জন্য কত তাপ প্রয়োজন?",
      answer: "100,000 J",
      explanation: "Q = mL = 0.5 × 200,000 = 100,000 J।",
      difficulty: "Medium",
      importance: 5,
      source: "Concept Practice"
    }
  ],

  sourcesNote: "এই chapter-এর প্রশ্নগুলো Concept Practice হিসেবে দেওয়া হয়েছে। যাচাইকৃত Board/School question corpus পরে আলাদাভাবে যুক্ত করতে হবে।"
};
