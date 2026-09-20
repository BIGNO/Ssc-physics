export const chapter12 = {
  id: 'p12',
  no: 12,
  title: 'তড়িৎ প্রবাহের চৌম্বক ক্রিয়া',
  focus: 'তড়িৎ প্রবাহের চৌম্বক প্রভাব, চৌম্বক ক্ষেত্র, right-hand rule, solenoid, electromagnet ও motor effect',

  manual: [
    'তড়িৎ প্রবাহের চৌম্বক ক্রিয়া কী তা বুঝতে হবে',
    'তড়িৎ প্রবাহের কারণে চৌম্বক ক্ষেত্র সৃষ্টি হওয়ার বিষয়টি জানতে হবে',
    'চৌম্বক ক্ষেত্রের সংজ্ঞা, দিক ও SI একক জানতে হবে',
    'Magnetic field lines-এর বৈশিষ্ট্য জানতে হবে',
    'সোজা তড়িৎবাহী তারের চারপাশের circular magnetic field বুঝতে হবে',
    'Current ও distance পরিবর্তনে magnetic field-এর পরিবর্তন বুঝতে হবে',
    'Right-hand thumb rule ব্যবহার করে magnetic field-এর direction নির্ণয় করতে হবে',
    'তড়িৎবাহী তারের ওপর চৌম্বক বলের ধারণা জানতে হবে',
    'Magnetic force-এর ওপর current, magnetic field ও angle-এর প্রভাব বুঝতে হবে',
    'Fleming-এর left-hand rule বুঝতে ও প্রয়োগ করতে হবে',
    'Circular current ও coil-এর magnetic field বুঝতে হবে',
    'Coil-এর turns ও current বাড়লে magnetic effect কীভাবে পরিবর্তিত হয় জানতে হবে',
    'Solenoid কী এবং কীভাবে কাজ করে তা জানতে হবে',
    'Solenoid-এর magnetic field ও pole নির্ণয় করতে হবে',
    'Solenoid-এর magnetic field কীভাবে শক্তিশালী করা যায় জানতে হবে',
    'Electromagnet-এর গঠন, কাজ ও ব্যবহার জানতে হবে',
    'Electromagnet ও permanent magnet-এর পার্থক্য বুঝতে হবে',
    'Electric motor-এর principle ও basic working বুঝতে হবে',
    'Electric motor-এর প্রধান অংশগুলোর কাজ জানতে হবে',
    'Split-ring commutator-এর কাজ বুঝতে হবে',
    'Motor-এ Fleming-এর left-hand rule প্রয়োগ করতে হবে',
    'চৌম্বক বলের direction ও magnitude সম্পর্কিত numerical solve করতে হবে',
    'Magnetic field সম্পর্কিত formula ব্যবহার করতে হবে',
    'Straight wire, coil ও solenoid-এর magnetic field তুলনা করতে হবে',
    'Electromagnet-এর বাস্তব জীবনের ব্যবহারগুলো জানতে হবে',
    'চৌম্বক ক্রিয়ার বাস্তব প্রয়োগগুলো জানতে হবে'
  ],

  concepts: [
    {
      id: 'magnetic-effect-current',
      title: 'তড়িৎ প্রবাহের চৌম্বক ক্রিয়া',
      definition: 'কোনো পরিবাহকের মধ্য দিয়ে তড়িৎ প্রবাহিত হলে তার চারপাশে চৌম্বক ক্ষেত্র সৃষ্টি হয়—এ ঘটনাকে তড়িৎ প্রবাহের চৌম্বক ক্রিয়া বলে।',
      simpleExplanation: 'Current flowing wire-এর চারপাশে magnetic field তৈরি হয়।',
      detailedExplanation: 'তড়িৎ প্রবাহিত হলে পরিবাহকের চারপাশে magnetic field সৃষ্টি হয়। Current-এর মান ও direction পরিবর্তনের সাথে field-এর strength ও direction-ও পরিবর্তিত হয়।',
      formula: 'B ∝ I',
      units: 'চৌম্বক ক্ষেত্রের তীব্রতা: Tesla (T)',
      example: 'Current-carrying straight wire-এর চারপাশে magnetic field।',
      realLifeExample: 'Electromagnet ও electric motor।',
      examFocus: 'সংজ্ঞা ও experiment',
      commonMistakes: 'স্থির charge-এর চারপাশে একইভাবে magnetic field আছে বলা।',
      keyPoints: ['Current', 'Magnetic field', 'Direction']
    },

    {
      id: 'magnetic-field',
      title: 'চৌম্বক ক্ষেত্র',
      definition: 'চুম্বক বা তড়িৎ প্রবাহিত পরিবাহকের চারপাশের যে অঞ্চলে চৌম্বক বল অনুভূত হয় তাকে চৌম্বক ক্ষেত্র বলে।',
      simpleExplanation: 'যেখানে magnetic force কাজ করতে পারে সেটাই magnetic field।',
      detailedExplanation: 'Magnetic field একটি vector quantity। Field-এর direction ও strength magnetic field lines দিয়ে প্রকাশ করা যায়।',
      formula: 'B = F/(I L) — suitable conductor case',
      units: 'Tesla (T)',
      example: 'Bar magnet-এর চারপাশে magnetic field।',
      realLifeExample: 'Earth-এর magnetic field।',
      examFocus: 'Definition ও unit',
      commonMistakes: 'Magnetic field-এর unit Newton লেখা।',
      keyPoints: ['Magnetic region', 'Vector', 'Tesla']
    },

    {
      id: 'field-lines',
      title: 'চৌম্বক ক্ষেত্ররেখা',
      definition: 'চৌম্বক ক্ষেত্রে এমন কাল্পনিক রেখা যার কোনো বিন্দুতে অঙ্কিত স্পর্শক ঐ বিন্দুতে চৌম্বক ক্ষেত্রের দিক নির্দেশ করে তাকে চৌম্বক ক্ষেত্ররেখা বলে।',
      simpleExplanation: 'Field lines magnetic field-এর direction বোঝায়।',
      detailedExplanation: 'Bar magnet-এর বাইরে field lines North থেকে South এবং magnet-এর ভেতরে South থেকে North দিকে যায়। Field lines পরস্পরকে ছেদ করে না।',
      formula: 'কোনো নির্দিষ্ট scalar formula নেই',
      units: 'প্রযোজ্য নয়',
      example: 'Bar magnet-এর field lines।',
      realLifeExample: 'Compass দিয়ে magnetic field direction বোঝা।',
      examFocus: 'চিত্র',
      commonMistakes: 'Magnetic field lines-এর শুরু ও শেষ ভুল দেখানো।',
      keyPoints: ['Direction', 'Closed loops', 'Never intersect']
    },

    {
      id: 'straight-wire-field',
      title: 'সোজা তড়িৎবাহী তারের চৌম্বক ক্ষেত্র',
      definition: 'সোজা তড়িৎবাহী পরিবাহকের চারপাশে বৃত্তাকার চৌম্বক ক্ষেত্র সৃষ্টি হয়।',
      simpleExplanation: 'Straight current-carrying wire-এর চারপাশে circular magnetic field থাকে।',
      detailedExplanation: 'তার থেকে দূরত্ব বাড়লে magnetic field সাধারণত কমে এবং current বাড়লে field strength বাড়ে।',
      formula: 'B = μ₀I/(2πr)',
      units: 'Tesla (T)',
      example: 'Vertical current-carrying wire-এর চারপাশে concentric circles।',
      realLifeExample: 'Electrical cable-এর চারপাশের magnetic field।',
      examFocus: 'Formula ও direction',
      commonMistakes: 'Field lines-কে straight line আঁকা।',
      keyPoints: ['Circular field', 'B ∝ I', 'B ∝ 1/r']
    },

    {
      id: 'right-hand-rule',
      title: 'Right-hand Thumb Rule',
      definition: 'ডান হাতের বৃদ্ধাঙ্গুলি তড়িৎ প্রবাহের দিকে নির্দেশ করলে বাঁকানো আঙুলগুলো তার চারপাশের চৌম্বক ক্ষেত্রের দিক নির্দেশ করে।',
      simpleExplanation: 'Thumb = current, curled fingers = magnetic field।',
      detailedExplanation: 'সোজা current-carrying conductor-এর magnetic field-এর direction নির্ণয়ে right-hand thumb rule ব্যবহার করা হয়।',
      formula: 'কোনো নির্দিষ্ট সূত্র নেই',
      units: 'প্রযোজ্য নয়',
      example: 'Thumb upward হলে fingers-এর curl field direction দেখায়।',
      realLifeExample: 'Wire-এর magnetic field direction নির্ণয়।',
      examFocus: 'Diagram-based question',
      commonMistakes: 'Left hand ব্যবহার করা।',
      keyPoints: ['Thumb = current', 'Fingers = field']
    },

    {
      id: 'force-current-wire',
      title: 'চৌম্বক ক্ষেত্রে তড়িৎবাহী তারের ওপর বল',
      definition: 'চৌম্বক ক্ষেত্রে স্থাপিত তড়িৎবাহী পরিবাহকের ওপর একটি চৌম্বক বল ক্রিয়া করতে পারে।',
      simpleExplanation: 'Current + magnetic field থাকলে wire-এর ওপর force হতে পারে।',
      detailedExplanation: 'বলটির মান current, magnetic field, conductor-এর দৈর্ঘ্য এবং তাদের মধ্যকার কোণের ওপর নির্ভর করে।',
      formula: 'F = BIL sinθ',
      units: 'নিউটন (N)',
      example: 'Wire field-এর perpendicular হলে θ = 90° এবং force maximum।',
      realLifeExample: 'Electric motor।',
      examFocus: 'Formula ও direction',
      commonMistakes: 'Parallel অবস্থায় force maximum বলা।',
      keyPoints: ['F = BIL sinθ', 'Maximum at 90°']
    },

    {
      id: 'fleming-left-hand',
      title: 'Fleming-এর Left-Hand Rule',
      definition: 'বাম হাতের বৃদ্ধাঙ্গুলি, তর্জনী ও মধ্যমা পরস্পর লম্ব রাখলে তর্জনী magnetic field, মধ্যমা current এবং বৃদ্ধাঙ্গুলি force-এর দিক নির্দেশ করে।',
      simpleExplanation: 'First finger = Field, middle finger = Current, thumb = Force।',
      detailedExplanation: 'Motor effect-এর ক্ষেত্রে conductor-এর ওপর force-এর direction নির্ণয়ে Fleming’s left-hand rule ব্যবহৃত হয়।',
      formula: 'কোনো নির্দিষ্ট সূত্র নেই',
      units: 'প্রযোজ্য নয়',
      example: 'Magnetic field ও current direction জানা থাকলে force direction নির্ণয়।',
      realLifeExample: 'Electric motor-এর rotation direction।',
      examFocus: 'Rule + diagram',
      commonMistakes: 'Left-hand rule-এর জায়গায় right-hand rule ব্যবহার করা।',
      keyPoints: ['First finger = Field', 'Middle finger = Current', 'Thumb = Force']
    },

    {
      id: 'current-loop',
      title: 'তড়িৎবাহী কুণ্ডলীর চৌম্বক ক্ষেত্র',
      definition: 'তড়িৎ প্রবাহিত বৃত্তাকার কুণ্ডলীর চারপাশে ও কেন্দ্রে চৌম্বক ক্ষেত্র সৃষ্টি হয়।',
      simpleExplanation: 'Current loop acts somewhat like a small magnet।',
      detailedExplanation: 'Coil-এর turn সংখ্যা ও current বাড়লে magnetic effect বৃদ্ধি পায়। Coil-এর দুই প্রান্ত magnetic poles-এর মতো আচরণ করতে পারে।',
      formula: 'B ∝ NI',
      units: 'Tesla (T)',
      example: 'Circular coil carrying current।',
      realLifeExample: 'Electromagnet ও motor coil।',
      examFocus: 'Field direction',
      commonMistakes: 'Current direction না দেখে pole নির্ধারণ করা।',
      keyPoints: ['Coil', 'Current', 'Magnetic poles']
    },

    {
      id: 'solenoid',
      title: 'Solenoid',
      definition: 'অনেকগুলো পাকবিশিষ্ট দীর্ঘ цилинд্রাকার কুণ্ডলীকে solenoid বলে।',
      simpleExplanation: 'Many turns of wire wound into a cylindrical shape = solenoid।',
      detailedExplanation: 'Solenoid-এর ভেতরে current প্রবাহিত হলে এর ভিতরে প্রায় uniform magnetic field তৈরি হতে পারে। এটি bar magnet-এর মতো আচরণ করতে পারে।',
      formula: 'B ≈ μ₀nI',
      units: 'Tesla (T)',
      example: 'Long coil carrying current।',
      realLifeExample: 'Electromagnet তৈরি করতে solenoid ব্যবহার।',
      examFocus: 'Definition, field ও diagram',
      commonMistakes: 'একটি single circular loop-কে solenoid বলা।',
      keyPoints: ['Many turns', 'Cylindrical coil', 'Uniform field']
    },

    {
      id: 'electromagnet',
      title: 'তড়িৎ চুম্বক',
      definition: 'তড়িৎ প্রবাহের সাহায্যে সাময়িকভাবে চুম্বকত্ব অর্জনকারী যন্ত্রকে তড়িৎ চুম্বক বা electromagnet বলে।',
      simpleExplanation: 'Current থাকলে magnetism থাকে; current বন্ধ করলে magnetism অনেকটা কমে যায়।',
      detailedExplanation: 'সাধারণত soft iron core-এর ওপর insulated wire coil পেঁচিয়ে electromagnet তৈরি করা হয়।',
      formula: 'Magnetic strength ∝ NI',
      units: 'প্রযোজ্য নয়',
      example: 'Iron core + coil + current।',
      realLifeExample: 'Electric bell, relay, magnetic crane।',
      examFocus: 'Construction, principle ও uses',
      commonMistakes: 'Permanent magnet ও electromagnet-এর পার্থক্য ভুল করা।',
      keyPoints: ['Soft iron', 'Coil', 'Temporary magnet']
    },

    {
      id: 'motor-principle',
      title: 'Electric Motor-এর মূলনীতি',
      definition: 'চৌম্বক ক্ষেত্রে তড়িৎবাহী কুণ্ডলীর ওপর বল ক্রিয়া করে কুণ্ডলীকে ঘোরাতে পারে—এই motor effect-এর ওপর electric motor কাজ করে।',
      simpleExplanation: 'Current-carrying coil in magnetic field experiences torque and rotates।',
      detailedExplanation: 'Coil-এর দুই পাশে বিপরীতমুখী force-এর ফলে torque সৃষ্টি হয় এবং coil ঘুরতে থাকে। Split-ring commutator current-এর direction উপযুক্তভাবে পরিবর্তন করতে সাহায্য করে।',
      formula: 'τ = NBIA sinθ',
      units: 'Torque: N·m',
      example: 'DC motor-এর rotating coil।',
      realLifeExample: 'Fan, toy car, water pump।',
      examFocus: 'Principle ও working',
      commonMistakes: 'Motor ও generator-এর কাজ এক বলা।',
      keyPoints: ['Motor effect', 'Torque', 'Commutator']
    },

    {
      id: 'motor-parts',
      title: 'Electric Motor-এর প্রধান অংশ',
      definition: 'Electric motor-এর প্রধান অংশগুলোর মধ্যে armature/coil, permanent magnet বা field magnet, split-ring commutator, brushes ও DC source রয়েছে।',
      simpleExplanation: 'Coil rotates inside magnetic field with current supplied through brushes and commutator।',
      detailedExplanation: 'Armature-এর coil magnetic field-এর মধ্যে থাকে। Brushes current supply করে এবং split-ring commutator coil-এর current direction পরিবর্তন করে continuous rotation বজায় রাখে।',
      formula: 'F = BIL sinθ',
      units: 'Force: N',
      example: 'Simple DC motor model।',
      realLifeExample: 'Ceiling fan ও small DC motor।',
      examFocus: 'Labelled diagram',
      commonMistakes: 'Slip ring ও split ring-এর কাজ গুলিয়ে ফেলা।',
      keyPoints: ['Coil', 'Magnet', 'Brush', 'Split ring']
    },

    {
      id: 'applications',
      title: 'চৌম্বক ক্রিয়ার ব্যবহার',
      definition: 'তড়িৎ প্রবাহের চৌম্বক ক্রিয়া ব্যবহার করে বিভিন্ন electrical ও electronic device তৈরি করা হয়।',
      simpleExplanation: 'Current-এর magnetic effect দিয়ে অনেক machine কাজ করে।',
      detailedExplanation: 'Electric motor, electromagnet, relay, electric bell, loudspeaker ও magnetic lifting equipment-এ এই principle ব্যবহৃত হয়।',
      formula: 'প্রয়োগভেদে',
      units: 'প্রযোজ্য নয়',
      example: 'Electric bell-এ electromagnet ব্যবহার।',
      realLifeExample: 'Industrial magnetic crane।',
      examFocus: 'Application-based CQ',
      commonMistakes: 'Motor-এর পরিবর্তে generator-এর principle লেখা।',
      keyPoints: ['Motor', 'Relay', 'Bell', 'Electromagnet']
    }
  ],

  questions: [
    {
      id: 'ch12-q01',
      chapterId: 'p12',
      conceptId: 'magnetic-effect-current',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 5,
      question: 'তড়িৎ প্রবাহিত হলে পরিবাহকের চারপাশে কী সৃষ্টি হয়?',
      options: ['শুধু তাপ', 'চৌম্বক ক্ষেত্র', 'শুধু আলো', 'শূন্যস্থান'],
      answer: 'চৌম্বক ক্ষেত্র',
      solution: 'Current-carrying conductor-এর চারপাশে magnetic field সৃষ্টি হয়।'
    },
    {
      id: 'ch12-q02',
      chapterId: 'p12',
      conceptId: 'straight-wire-field',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 5,
      question: 'সোজা তড়িৎবাহী তারের চারপাশের magnetic field lines কেমন?',
      options: ['সমান্তরাল সরল রেখা', 'সমকেন্দ্রিক বৃত্ত', 'ত্রিভুজ', 'উপবৃত্ত'],
      answer: 'সমকেন্দ্রিক বৃত্ত',
      solution: 'Straight current-carrying wire-এর চারপাশে concentric circular magnetic field lines থাকে।'
    },
    {
      id: 'ch12-q03',
      chapterId: 'p12',
      conceptId: 'right-hand-rule',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 5,
      question: 'Right-hand thumb rule-এ বৃদ্ধাঙ্গুলি কী নির্দেশ করে?',
      options: ['Magnetic field', 'Current direction', 'Force', 'Resistance'],
      answer: 'Current direction',
      solution: 'Thumb current-এর direction এবং curled fingers magnetic field-এর direction নির্দেশ করে।'
    },
    {
      id: 'ch12-q04',
      chapterId: 'p12',
      conceptId: 'force-current-wire',
      type: 'Numerical',
      source: 'Concept Practice',
      importance: 5,
      question: 'একটি তারের দৈর্ঘ্য 0.5 m, current 2 A এবং magnetic field 3 T। তারটি field-এর লম্ব হলে force কত?',
      answer: '3 N',
      solution: 'F = BIL sin90° = 3 × 2 × 0.5 × 1 = 3 N।'
    },
    {
      id: 'ch12-q05',
      chapterId: 'p12',
      conceptId: 'fleming-left-hand',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 5,
      question: 'Fleming-এর left-hand rule-এ thumb কী নির্দেশ করে?',
      options: ['Current', 'Magnetic field', 'Force', 'Voltage'],
      answer: 'Force',
      solution: 'Thumb force-এর direction, first finger field এবং middle finger current নির্দেশ করে।'
    },
    {
      id: 'ch12-q06',
      chapterId: 'p12',
      conceptId: 'current-loop',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 4,
      question: 'একটি current-carrying coil-এর magnetic effect বাড়াতে কোনটি করা যায়?',
      options: ['Current কমানো', 'Turns বাড়ানো', 'Coil খুলে ফেলা', 'Current শূন্য করা'],
      answer: 'Turns বাড়ানো',
      solution: 'অন্যান্য শর্ত একই থাকলে coil-এর turns ও current বাড়ালে magnetic effect বাড়ে।'
    },
    {
      id: 'ch12-q07',
      chapterId: 'p12',
      conceptId: 'solenoid',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 5,
      question: 'অনেকগুলো পাকবিশিষ্ট দীর্ঘ cylindrical coil-কে কী বলে?',
      options: ['Resistor', 'Solenoid', 'Capacitor', 'Diode'],
      answer: 'Solenoid',
      solution: 'Long cylindrical multi-turn coil হলো solenoid।'
    },
    {
      id: 'ch12-q08',
      chapterId: 'p12',
      conceptId: 'electromagnet',
      type: 'Short',
      source: 'Concept Practice',
      importance: 4,
      question: 'Electromagnet তৈরিতে soft iron core কেন ব্যবহার করা হয়?',
      answer: 'Soft iron সহজে চুম্বকিত হয় এবং current বন্ধ হলে দ্রুত চুম্বকত্ব হারায়।',
      solution: 'এই বৈশিষ্ট্যের কারণে electromagnet-কে প্রয়োজন অনুযায়ী on/off করা যায়।'
    },
    {
      id: 'ch12-q09',
      chapterId: 'p12',
      conceptId: 'motor-principle',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 5,
      question: 'Electric motor কোন principle-এর ওপর কাজ করে?',
      options: [
        'Current-carrying conductor in magnetic field experiences force',
        'Only heating effect',
        'Only chemical effect',
        'Gravitational effect'
      ],
      answer: 'Current-carrying conductor in magnetic field experiences force',
      solution: 'Motor effect-এর মাধ্যমে current-carrying coil magnetic field-এর মধ্যে force ও torque পায়।'
    },
    {
      id: 'ch12-q10',
      chapterId: 'p12',
      conceptId: 'motor-parts',
      type: 'Short',
      source: 'Concept Practice',
      importance: 5,
      question: 'Electric motor-এর split-ring commutator-এর কাজ কী?',
      answer: 'প্রতি অর্ধ-ঘূর্ণনে coil-এর current direction পরিবর্তন করে continuous rotation বজায় রাখা।',
      solution: 'Commutator current-এর direction reverse করে যাতে torque-এর কার্যকর দিক rotation-এর জন্য বজায় থাকে।'
    },
    {
      id: 'ch12-q11',
      chapterId: 'p12',
      conceptId: 'applications',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 4,
      question: 'নিচের কোন যন্ত্রে electromagnet ব্যবহার করা হয়?',
      options: ['Electric bell', 'Glass', 'Thermometer', 'Mirror'],
      answer: 'Electric bell',
      solution: 'Electric bell-এ electromagnet armature-কে আকর্ষণ করে bell mechanism চালায়।'
    },
    {
      id: 'ch12-q12',
      chapterId: 'p12',
      conceptId: 'field-lines',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 4,
      question: 'Magnetic field lines কি পরস্পরকে ছেদ করে?',
      options: ['হ্যাঁ, সবসময়', 'না', 'শুধু North pole-এ', 'শুধু South pole-এ'],
      answer: 'না',
      solution: 'কোনো বিন্দুতে field-এর direction একাধিক হতে পারে না, তাই magnetic field lines সাধারণত intersect করে না।'
    }
  ],

  sourcesNote: 'এই অধ্যায়ের প্রশ্নগুলো Concept Practice হিসেবে দেওয়া হয়েছে। এগুলো verified board-question নয়। প্রকৃত বিগত ৬ বছরের বোর্ড/স্কুল প্রশ্ন যুক্ত করার জন্য verified question corpus প্রয়োজন।'
};
