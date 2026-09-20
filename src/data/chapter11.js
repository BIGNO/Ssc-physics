export const chapter11 = {
  id: 'p11',
  no: 11,
  title: 'চল তড়িৎ',
  focus: 'তড়িৎ প্রবাহ, বিভব পার্থক্য, রোধ, Ohm-এর সূত্র, রোধের সংযোগ, বৈদ্যুতিক শক্তি ও ক্ষমতা',

  manual: [
    "তড়িৎ প্রবাহের সংজ্ঞা, ধারণা ও SI একক জানতে হবে",
    "I = Q/t সূত্র বুঝতে ও numerical করতে হবে",
    "Conventional current ও electron flow-এর পার্থক্য বুঝতে হবে",
    "Current-এর দিক সঠিকভাবে নির্ণয় করতে হবে",
    "বিভব পার্থক্যের সংজ্ঞা, সূত্র ও একক জানতে হবে",
    "V = W/Q সূত্র ব্যবহার করে numerical করতে হবে",
    "তড়িৎ রোধের সংজ্ঞা, প্রতীক ও SI unit জানতে হবে",
    "R = V/I সূত্র ব্যবহার করতে হবে",
    "রোধের ওপর দৈর্ঘ্য, ক্ষেত্রফল, পদার্থ ও তাপমাত্রার প্রভাব বুঝতে হবে",
    "R = ρL/A সূত্র ব্যবহার করতে হবে",
    "বিশিষ্ট রোধ বা resistivity-এর ধারণা ও unit জানতে হবে",
    "Ohm-এর সূত্রের শর্ত ও mathematical form বুঝতে হবে",
    "V = IR ব্যবহার করে numerical সমাধান করতে হবে",
    "Ohmic conductor ও non-ohmic behavior-এর ধারণা বুঝতে হবে",
    "V-I graph আঁকতে ও graph থেকে resistance নির্ণয় করতে হবে",
    "Series connection-এর current, voltage ও resistance বুঝতে হবে",
    "Series equivalent resistance নির্ণয় করতে হবে",
    "Parallel connection-এর current, voltage ও resistance বুঝতে হবে",
    "Parallel equivalent resistance নির্ণয় করতে হবে",
    "Series ও parallel circuit-এর তুলনা করতে হবে",
    "বৈদ্যুতিক ক্ষমতার সংজ্ঞা ও সূত্র জানতে হবে",
    "P = VI, P = I²R ও P = V²/R ব্যবহার করতে হবে",
    "বৈদ্যুতিক শক্তির সূত্র W = Pt = VIt বুঝতে হবে",
    "Joule ও kWh-এর মধ্যে conversion করতে হবে",
    "Electricity bill-এর commercial unit kWh বুঝতে হবে",
    "Fuse-এর গঠন, কাজ ও working principle ব্যাখ্যা করতে হবে",
    "Electrical safety, insulation, grounding ও overcurrent protection বুঝতে হবে",
    "Current, voltage, resistance, power ও energy-এর numerical ধাপে ধাপে সমাধান করতে হবে"
  ],

  concepts: [
    {
      id: 'electric-current',
      title: 'তড়িৎ প্রবাহ',
      definition: 'কোনো পরিবাহকের প্রস্থচ্ছেদের মধ্য দিয়ে একক সময়ে যে পরিমাণ তড়িৎ আধান প্রবাহিত হয় তাকে তড়িৎ প্রবাহ বলে।',
      simpleExplanation: 'কত দ্রুত charge flow করছে সেটাই current।',
      detailedExplanation: 'কোনো পরিবাহকের একটি cross-section দিয়ে সময় t-তে Q charge প্রবাহিত হলে current I = Q/t। Current হলো charge flow-এর rate। এর SI unit Ampere (A), যেখানে 1 A = 1 C/s। ধাতব পরিবাহকে electron-এর প্রকৃত গতি conventional current-এর বিপরীত দিকে হলেও circuit analysis-এ conventional current ব্যবহৃত হয়।',
      formula: 'I = Q/t',
      units: 'অ্যাম্পিয়ার (A)',
      example: '2 C charge 1 s-এ প্রবাহিত হলে I = 2 A।',
      realLifeExample: 'Electric circuit চালু হলে wire-এর মাধ্যমে current flow করে।',
      examFocus: 'সংজ্ঞা, সূত্র, একক ও numerical',
      commonMistakes: 'Current-এর unit Coulomb লেখা।',
      keyPoints: ['I = Q/t', 'Ampere', 'Charge flow']
    },

    {
      id: 'conventional-current',
      title: 'প্রচলিত তড়িৎ প্রবাহের দিক',
      definition: 'বহিঃস্থ বর্তনীতে প্রচলিত তড়িৎ প্রবাহের দিককে উচ্চ বিভব থেকে নিম্ন বিভবের দিকে ধরা হয়।',
      simpleExplanation: 'Conventional current সাধারণভাবে + থেকে − দিকে ধরা হয়।',
      detailedExplanation: 'ধাতব পরিবাহকে চলমান charge carrier হলো electron এবং তারা সাধারণত negative terminal থেকে positive terminal-এর দিকে drift করে। কিন্তু প্রচলিত তড়িৎ প্রবাহের দিক positive terminal থেকে negative terminal-এর দিকে ধরা হয়। তাই electron flow ও conventional current-এর direction বিপরীত।',
      formula: 'প্রচলিত current direction: + → −',
      units: 'প্রযোজ্য নয়',
      example: 'Battery-এর external circuit-এ conventional current positive terminal থেকে negative terminal-এর দিকে।',
      realLifeExample: 'Circuit diagram-এ current arrow ব্যবহার।',
      examFocus: 'Current direction',
      commonMistakes: 'Electron flow ও conventional current-এর direction একই বলা।',
      keyPoints: ['Conventional current', 'Electron flow opposite']
    },

    {
      id: 'potential-difference',
      title: 'বিভব পার্থক্য',
      definition: 'একক আধানকে একটি বিন্দু থেকে অন্য বিন্দুতে স্থানান্তর করতে যে কাজ সম্পন্ন হয় তার পরিমাণকে বিভব পার্থক্য বলে।',
      simpleExplanation: 'Potential difference হলো charge চালানোর driving effect।',
      detailedExplanation: 'দুটি বিন্দুর electric potential-এর পার্থক্যকে potential difference বলে। Circuit-এ charge movement-এর জন্য এটি driving effect তৈরি করে। Work W করে Q charge স্থানান্তর করলে V = W/Q। এর SI unit Volt (V)।',
      formula: 'V = W/Q',
      units: 'ভোল্ট (V)',
      example: '12 V battery-এর terminal দুটির potential difference 12 V।',
      realLifeExample: 'Battery-powered torch।',
      examFocus: 'Formula ও numerical',
      commonMistakes: 'V = Q/W লেখা।',
      keyPoints: ['V = W/Q', 'Volt', 'Energy per charge']
    },

    {
      id: 'resistance',
      title: 'তড়িৎ রোধ',
      definition: 'কোনো পরিবাহকের মধ্য দিয়ে তড়িৎ প্রবাহকে বাধা দেওয়ার ধর্মকে তড়িৎ রোধ বলে।',
      simpleExplanation: 'Resistance current flow-কে oppose করে।',
      detailedExplanation: 'Resistance হলো কোনো পরিবাহকের মধ্য দিয়ে current প্রবাহে বাধা দেওয়ার ধর্ম। রোধকে R দ্বারা প্রকাশ করা হয় এবং Ohm-এর সূত্র অনুযায়ী নির্দিষ্ট অবস্থায় R = V/I। একই voltage-এ R বেশি হলে current কম হয়। এর SI unit Ohm (Ω)।',
      formula: 'R = V/I',
      units: 'ওহম (Ω)',
      example: 'V = 10 V এবং I = 2 A হলে R = 5 Ω।',
      realLifeExample: 'Heater coil-এর resistance ব্যবহার করে electrical energy তাপে রূপান্তর।',
      examFocus: 'Definition, formula, unit',
      commonMistakes: 'Resistance-এর unit Ampere লেখা।',
      keyPoints: ['Opposition', 'R = V/I', 'Ohm']
    },

    {
      id: 'factors-resistance',
      title: 'রোধের ওপর নির্ভরশীল বিষয়',
      definition: 'কোনো তারের রোধ তার দৈর্ঘ্য, প্রস্থচ্ছেদের ক্ষেত্রফল, পদার্থের প্রকৃতি ও তাপমাত্রার ওপর নির্ভর করে।',
      simpleExplanation: 'Long wire → বেশি resistance; thick wire → কম resistance।',
      detailedExplanation: 'তারটির resistance R = ρL/A। তাই একই material ও temperature-এ R ∝ L এবং R ∝ 1/A। অর্থাৎ তার যত লম্বা হবে resistance তত বাড়বে এবং তার যত মোটা হবে, অর্থাৎ cross-sectional area যত বেশি হবে, resistance তত কমবে। Material-এর resistivity ρ-ও resistance নির্ধারণ করে।',
      formula: 'R = ρL/A',
      units: 'R: Ω, ρ: Ω·m',
      example: 'তার দ্বিগুণ লম্বা করলে একই অবস্থায় resistance দ্বিগুণ হতে পারে।',
      realLifeExample: 'Long extension wire-এর resistance তুলনামূলক বেশি।',
      examFocus: 'Formula ও relation',
      commonMistakes: 'Area বাড়লে resistance বাড়ে বলা।',
      keyPoints: ['R ∝ L', 'R ∝ 1/A', 'R = ρL/A']
    },

    {
      id: 'resistivity',
      title: 'বিশিষ্ট রোধ বা Resistivity',
      definition: 'একক দৈর্ঘ্য ও একক প্রস্থচ্ছেদের ক্ষেত্রফলবিশিষ্ট কোনো পদার্থের তৈরি পরিবাহকের রোধকে সেই পদার্থের বিশিষ্ট রোধ বলে।',
      simpleExplanation: 'Resistivity হলো material-এর নিজস্ব electrical resistance property।',
      detailedExplanation: 'Resistivity বা বিশিষ্ট রোধ ρ একটি পদার্থের intrinsic electrical property। নির্দিষ্ট temperature-এ এটি material-এর প্রকৃতির ওপর নির্ভর করে। R = ρL/A থেকে ρ = RA/L। এর SI unit Ω·m।',
      formula: 'ρ = RA/L',
      units: 'Ω·m',
      example: 'Copper-এর resistivity কম, তাই এটি ভালো conductor।',
      realLifeExample: 'Different wire materials নির্বাচন।',
      examFocus: 'Definition, formula, unit',
      commonMistakes: 'Resistivity-এর unit Ω লেখা।',
      keyPoints: ['ρ', 'Ω·m', 'Material property']
    },

    {
      id: 'ohms-law',
      title: 'Ohm-এর সূত্র',
      definition: 'তাপমাত্রা ও অন্যান্য ভৌত অবস্থা অপরিবর্তিত থাকলে কোনো পরিবাহকের দুই প্রান্তের বিভব পার্থক্য তার মধ্য দিয়ে প্রবাহিত তড়িৎ প্রবাহের সমানুপাতিক।',
      simpleExplanation: 'Condition same থাকলে V বাড়লে I proportionally বাড়ে।',
      detailedExplanation: 'তাপমাত্রা ও অন্যান্য ভৌত অবস্থা অপরিবর্তিত থাকলে কোনো ohmic conductor-এর দুই প্রান্তের potential difference V তার current I-এর সমানুপাতিক। তাই V ∝ I এবং V/I = constant = R। ফলে V = IR।',
      formula: 'V = IR',
      units: 'V: V, I: A, R: Ω',
      example: 'R = 4 Ω এবং I = 2 A হলে V = 8 V।',
      realLifeExample: 'Resistor circuit analysis।',
      examFocus: 'Very important numerical',
      commonMistakes: 'Temperature constant condition না লেখা।',
      keyPoints: ['V ∝ I', 'V = IR', 'R constant']
    },

    {
      id: 'vi-graph',
      title: 'V-I গ্রাফ',
      definition: 'Ohmic conductor-এর ক্ষেত্রে voltage এবং current-এর সম্পর্ককে graph-এ দেখালে origin দিয়ে যাওয়া একটি সরলরেখা পাওয়া যায়।',
      simpleExplanation: 'Ohm’s law-এর V-I graph straight line হয়।',
      detailedExplanation: 'V-I graph-এ সাধারণত vertical axis-এ V এবং horizontal axis-এ I নিলে ohmic conductor-এর জন্য origin দিয়ে যাওয়া straight line পাওয়া যায়। এই graph-এর slope = ΔV/ΔI = R। তাই slope বেশি হলে resistance-ও বেশি।',
      formula: 'R = V/I = slope of V-I graph',
      units: 'Ω',
      example: 'Straight line through origin → ohmic behavior।',
      realLifeExample: 'Lab experiment-এ resistor-এর V-I characteristic।',
      examFocus: 'Graph drawing ও interpretation',
      commonMistakes: 'Axes উল্টো করলে slope-এর অর্থ পরিবর্তিত হতে পারে।',
      keyPoints: ['Straight line', 'Origin', 'Slope = R']
    },

    {
      id: 'series-resistance',
      title: 'Series সংযোগ',
      definition: 'একাধিক রোধকে একটির পর একটি একই পথে যুক্ত করলে তাকে series connection বলে।',
      simpleExplanation: 'Series-এ current-এর জন্য একটি মাত্র path থাকে।',
      detailedExplanation: 'Series connection-এ resistorগুলো একটির পর একটি একই path-এ থাকে। তাই প্রতিটি resistor-এর মধ্য দিয়ে একই current প্রবাহিত হয় এবং total voltage বিভিন্ন resistor-এর মধ্যে ভাগ হয়। Equivalent resistance হলো Rₛ = R₁ + R₂ + R₃ + ...।',
      formula: 'Rₛ = R₁ + R₂ + R₃ + ...',
      units: 'Ω',
      example: '2 Ω + 3 Ω + 5 Ω = 10 Ω।',
      realLifeExample: 'Certain sensor বা decorative circuits-এ series connection।',
      examFocus: 'Equivalent resistance',
      commonMistakes: 'Series-এ voltage same বলা।',
      keyPoints: ['Same current', 'Voltages add', 'Rₛ = sum R']
    },

    {
      id: 'parallel-resistance',
      title: 'Parallel সংযোগ',
      definition: 'একাধিক রোধকে একই দুই বিন্দুর মধ্যে যুক্ত করলে তাকে parallel connection বলে।',
      simpleExplanation: 'Parallel-এ একাধিক current path থাকে।',
      detailedExplanation: 'Parallel connection-এ প্রতিটি branch একই দুই potential point-এর মধ্যে যুক্ত থাকে। তাই সব branch-এর voltage একই থাকে, কিন্তু total current বিভিন্ন branch-এ ভাগ হয়ে যায়। Equivalent resistance reciprocal relation দিয়ে নির্ণয় করা হয় এবং তা সাধারণত সবচেয়ে ছোট branch resistance-এর চেয়েও কম।',
      formula: '1/Rₚ = 1/R₁ + 1/R₂ + 1/R₃ + ...',
      units: 'Ω',
      example: '2 Ω ও 2 Ω parallel হলে equivalent resistance = 1 Ω।',
      realLifeExample: 'বাড়ির বৈদ্যুতিক সংযোগ মূলত parallel arrangement-এ করা হয়।',
      examFocus: 'Numerical',
      commonMistakes: 'Parallel-এ current same বলা।',
      keyPoints: ['Same voltage', 'Current divides', 'Equivalent R less than smallest branch R']
    },

    {
      id: 'series-parallel-comparison',
      title: 'Series ও Parallel-এর পার্থক্য',
      definition: 'Series ও parallel connection-এ current, voltage এবং equivalent resistance-এর আচরণ ভিন্ন।',
      simpleExplanation: 'Series → same current; Parallel → same voltage।',
      detailedExplanation: 'Series-এ total resistance যোগফল। Parallel-এ reciprocal relation ব্যবহৃত হয় এবং equivalent resistance সাধারণত smallest resistance-এর চেয়েও কম হয়।',
      formula: 'Series: Rₛ = ΣR; Parallel: 1/Rₚ = Σ(1/R)',
      units: 'Ω',
      example: 'দুটি সমান resistor parallel করলে equivalent resistance অর্ধেক হয়।',
      realLifeExample: 'House wiring বনাম single-path circuits।',
      examFocus: 'CQ comparison',
      commonMistakes: 'দুই ধরনের formula mix করা।',
      keyPoints: ['Current', 'Voltage', 'Equivalent resistance']
    },

    {
      id: 'electric-power',
      title: 'বৈদ্যুতিক ক্ষমতা',
      definition: 'একক সময়ে বৈদ্যুতিক শক্তি রূপান্তর বা ব্যবহারের হারকে বৈদ্যুতিক ক্ষমতা বলে।',
      simpleExplanation: 'Electric power tells how fast electrical energy is being used. ',
      detailedExplanation: 'Power P = VI। Ohm’s law ব্যবহার করে P = I²R এবং P = V²/R পাওয়া যায়।',
      formula: 'P = VI = I²R = V²/R',
      units: 'ওয়াট (W)',
      example: '220 V-এ 2 A current হলে P = 440 W।',
      realLifeExample: 'Bulb-এর watt rating।',
      examFocus: 'Very important numerical',
      commonMistakes: 'Power-এর unit Joule লেখা।',
      keyPoints: ['P = VI', 'Watt', 'Energy per time']
    },

    {
      id: 'electrical-energy',
      title: 'বৈদ্যুতিক শক্তি',
      definition: 'বৈদ্যুতিক বর্তনীতে ব্যবহৃত বা রূপান্তরিত শক্তিকে বৈদ্যুতিক শক্তি বলে।',
      simpleExplanation: 'Power কত দ্রুত energy use করে; energy হলো মোট ব্যবহৃত amount।',
      detailedExplanation: 'Electrical energy হলো circuit-এ ব্যবহৃত বা রূপান্তরিত মোট electrical work। Power P এবং time t হলে W = Pt। Ohm-এর সূত্রের সাহায্যে W = VIt-ও লেখা যায়। SI unit Joule (J), আর household electricity billing-এ kWh ব্যবহৃত হয়।',
      formula: 'W = Pt = VIt',
      units: 'জুল (J)',
      example: '100 W device 10 s চললে energy = 1000 J।',
      realLifeExample: 'Home electricity consumption।',
      examFocus: 'Numerical ও unit conversion',
      commonMistakes: 'Joule এবং kWh একই unit মনে করা।',
      keyPoints: ['W = Pt', 'Joule', 'kWh']
    },

    {
      id: 'commercial-unit',
      title: 'বিদ্যুৎ শক্তির বাণিজ্যিক একক',
      definition: 'বৈদ্যুতিক শক্তির বাণিজ্যিক হিসাবের একক হলো kilowatt-hour বা kWh।',
      simpleExplanation: 'Electric bill-এ unit বলতে সাধারণত kWh বোঝায়।',
      detailedExplanation: '1 kWh = 1000 W × 1 hour = 3.6 × 10^6 J।',
      formula: '1 kWh = 3.6 × 10^6 J',
      units: 'kWh',
      example: '2 kW heater 3 hours চললে energy = 6 kWh।',
      realLifeExample: 'Electricity bill calculation।',
      examFocus: 'Conversion ও numerical',
      commonMistakes: 'kWh-কে power unit ভাবা।',
      keyPoints: ['kWh', '3.6 × 10^6 J', 'Billing unit']
    },

    {
      id: 'fuse',
      title: 'ফিউজ',
      definition: 'অতিরিক্ত current প্রবাহিত হলে circuit বিচ্ছিন্ন করে electrical equipment-কে সুরক্ষা দেয় এমন safety device হলো fuse।',
      simpleExplanation: 'Current বেশি হলে fuse melt হয়ে circuit break করে।',
      detailedExplanation: 'Fuse হলো overcurrent protection device। Fuse wire-এর melting point তুলনামূলক কম হওয়ায় অতিরিক্ত current প্রবাহিত হলে Joule heating-এর কারণে wire গলে যায় এবং circuit open করে দেয়। ফলে connected equipment ও wiring অতিরিক্ত current থেকে সুরক্ষিত থাকে।',
      formula: 'প্রয়োগভেদে',
      units: 'Current rating: A',
      example: 'Overcurrent হলে fuse wire melts।',
      realLifeExample: 'Domestic electrical safety।',
      examFocus: 'Function ও principle',
      commonMistakes: 'Fuse-কে voltage regulator ভাবা।',
      keyPoints: ['Safety', 'Overcurrent', 'Melting']
    },

    {
      id: 'electrical-safety',
      title: 'বৈদ্যুতিক নিরাপত্তা',
      definition: 'বিদ্যুৎ ব্যবহারের সময় shock, short circuit, fire ও equipment damage প্রতিরোধের ব্যবস্থা হলো electrical safety।',
      simpleExplanation: 'Electricity ব্যবহার করার সময় proper insulation, fuse ও grounding দরকার।',
      detailedExplanation: 'Electrical safety-এর জন্য damaged insulation ব্যবহার করা যাবে না, ভেজা হাতে electrical equipment ধরা উচিত নয়, অতিরিক্ত load এড়াতে হবে এবং proper fuse/MCB ও grounding ব্যবহার করতে হবে। Electrical circuit-এ safety device-এর উদ্দেশ্য হলো electric shock, overcurrent, short circuit ও fire risk কমানো।',
      formula: 'প্রযোজ্য নয়',
      units: 'প্রযোজ্য নয়',
      example: 'ভেজা হাতে switch না ধরা।',
      realLifeExample: 'Home electrical wiring safety।',
      examFocus: 'Short/CQ',
      commonMistakes: 'একটি fuse-এর জায়গায় অতিরিক্ত মোটা wire ব্যবহার করা।',
      keyPoints: ['Insulation', 'Fuse', 'Grounding', 'Safety']
    }
  ],

  formulaSheet: [
    "Current: I = Q/t",
    "Potential difference: V = W/Q",
    "Resistance: R = V/I",
    "Ohm's law: V = IR",
    "Resistance of a wire: R = ρL/A",
    "Resistivity: ρ = RA/L",
    "Series resistance: Rₛ = R₁ + R₂ + R₃ + ...",
    "Parallel resistance: 1/Rₚ = 1/R₁ + 1/R₂ + 1/R₃ + ...",
    "Electric power: P = VI",
    "Power using resistance: P = I²R = V²/R",
    "Electrical energy: W = Pt = VIt",
    "Commercial energy: 1 kWh = 3.6 × 10^6 J",
    "1 A = 1 C/s",
    "Series: Same current, voltage divides",
    "Parallel: Same voltage, current divides"
  ],

  questions: [
    {
      id: 'ch11-q01',
      chapterId: 'p11',
      conceptId: 'electric-current',
      type: 'Numerical',
      source: 'Concept Practice',
      importance: 5,
      question: '10 C আধান 2 s সময়ে প্রবাহিত হলে তড়িৎ প্রবাহ কত?',
      answer: '5 A',
      solution: 'I = Q/t = 10/2 = 5 A।'
    },
    {
      id: 'ch11-q02',
      chapterId: 'p11',
      conceptId: 'potential-difference',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 5,
      question: 'বিভব পার্থক্যের SI একক কোনটি?',
      options: ['Ampere', 'Volt', 'Ohm', 'Coulomb'],
      answer: 'Volt',
      solution: 'Potential difference-এর SI unit হলো Volt (V)।'
    },
    {
      id: 'ch11-q03',
      chapterId: 'p11',
      conceptId: 'resistance',
      type: 'Numerical',
      source: 'Concept Practice',
      importance: 5,
      question: 'একটি resistor-এর দুই প্রান্তে 12 V এবং current 3 A হলে resistance কত?',
      answer: '4 Ω',
      solution: 'R = V/I = 12/3 = 4 Ω।'
    },
    {
      id: 'ch11-q04',
      chapterId: 'p11',
      conceptId: 'factors-resistance',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 5,
      question: 'একই পদার্থের তারের দৈর্ঘ্য দ্বিগুণ করলে, area অপরিবর্তিত থাকলে resistance কী হবে?',
      options: ['অর্ধেক', 'দ্বিগুণ', 'চারগুণ', 'অপরিবর্তিত'],
      answer: 'দ্বিগুণ',
      solution: 'R = ρL/A এবং R ∝ L। তাই length দ্বিগুণ হলে resistance দ্বিগুণ।'
    },
    {
      id: 'ch11-q05',
      chapterId: 'p11',
      conceptId: 'resistivity',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 4,
      question: 'Resistivity-এর SI unit কোনটি?',
      options: ['Ω', 'Ω·m', 'V/A', 'A/V'],
      answer: 'Ω·m',
      solution: 'Resistivity-এর SI unit হলো ohm-meter (Ω·m)।'
    },
    {
      id: 'ch11-q06',
      chapterId: 'p11',
      conceptId: 'ohms-law',
      type: 'Numerical',
      source: 'Concept Practice',
      importance: 5,
      question: 'একটি 6 Ω resistor-এর মধ্যে 2 A current প্রবাহিত হলে voltage কত?',
      answer: '12 V',
      solution: 'V = IR = 2 × 6 = 12 V।'
    },
    {
      id: 'ch11-q07',
      chapterId: 'p11',
      conceptId: 'series-resistance',
      type: 'Numerical',
      source: 'Concept Practice',
      importance: 5,
      question: '2 Ω, 3 Ω এবং 5 Ω resistor series-এ যুক্ত করলে equivalent resistance কত?',
      answer: '10 Ω',
      solution: 'Rₛ = 2 + 3 + 5 = 10 Ω।'
    },
    {
      id: 'ch11-q08',
      chapterId: 'p11',
      conceptId: 'parallel-resistance',
      type: 'Numerical',
      source: 'Concept Practice',
      importance: 5,
      question: 'দুটি 6 Ω resistor parallel-এ যুক্ত করলে equivalent resistance কত?',
      answer: '3 Ω',
      solution: '1/R = 1/6 + 1/6 = 2/6 = 1/3, তাই R = 3 Ω।'
    },
    {
      id: 'ch11-q09',
      chapterId: 'p11',
      conceptId: 'series-parallel-comparison',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 5,
      question: 'Parallel connection-এ প্রতিটি branch-এর কোন রাশি একই থাকে?',
      options: ['Current', 'Voltage', 'Resistance', 'Power'],
      answer: 'Voltage',
      solution: 'Parallel branches একই দুই potential point-এর মধ্যে যুক্ত থাকায় voltage একই থাকে।'
    },
    {
      id: 'ch11-q10',
      chapterId: 'p11',
      conceptId: 'electric-power',
      type: 'Numerical',
      source: 'Concept Practice',
      importance: 5,
      question: '220 V voltage-এ 2 A current চললে electric power কত?',
      answer: '440 W',
      solution: 'P = VI = 220 × 2 = 440 W।'
    },
    {
      id: 'ch11-q11',
      chapterId: 'p11',
      conceptId: 'commercial-unit',
      type: 'Numerical',
      source: 'Concept Practice',
      importance: 5,
      question: '2 kW-এর একটি heater 3 ঘণ্টা চললে কত electrical energy খরচ হবে?',
      answer: '6 kWh',
      solution: 'Energy = Power × time = 2 × 3 = 6 kWh।'
    },
    {
      id: 'ch11-q12',
      chapterId: 'p11',
      conceptId: 'fuse',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 4,
      question: 'Fuse-এর প্রধান কাজ কী?',
      options: ['Voltage বাড়ানো', 'Overcurrent থেকে circuit রক্ষা করা', 'Current তৈরি করা', 'Resistance শূন্য করা'],
      answer: 'Overcurrent থেকে circuit রক্ষা করা',
      solution: 'অতিরিক্ত current হলে fuse গলে circuit বিচ্ছিন্ন করে।'
    }
  ],

  sourcesNote: 'এই অধ্যায়ের প্রশ্নগুলো Concept Practice হিসেবে দেওয়া হয়েছে। এগুলো verified board-question নয়। প্রকৃত বিগত ৬ বছরের বোর্ড/স্কুল প্রশ্ন যুক্ত করার জন্য verified question corpus প্রয়োজন।'
};
