export const chapter1 = {
  "id": "p1",
  "no": 1,
  "title": "ভৌত রাশি ও পরিমাপ",
  "focus": "ভৌত রাশি, মৌলিক ও লব্ধ রাশি, SI একক, পরিমাপ, একক রূপান্তর, ত্রুটি, significant figure ও dimensional analysis",
  "manual": [
    "ভৌত রাশি কী তা নিজের ভাষায় বলতে পারা",
    "ভৌত রাশি ও অ-ভৌত রাশির পার্থক্য বুঝতে পারা",
    "মৌলিক ও লব্ধ রাশি আলাদা করতে পারা",
    "SI-এর ৭টি মৌলিক রাশি ও একক লিখতে পারা",
    "লব্ধ রাশির SI একক নির্ণয় করতে পারা",
    "একক conversion করতে পারা",
    "Measurement ও Least Count বুঝতে পারা",
    "Accuracy ও Precision-এর পার্থক্য বলতে পারা",
    "Absolute ও percentage error বুঝতে পারা",
    "Significant figure নির্ণয় ও rounding করতে পারা",
    "Dimensional formula বের করতে পারা",
    "Dimensional equation দিয়ে formula যাচাই করতে পারা",
    "Scientific notation ব্যবহার করতে পারা",
    "Board-style numerical solve করতে পারা"
  ],
  "concepts": [
    {
      "id": "p1-c1",
      "title": "ভৌত রাশি",
      "definition": "যে রাশিকে পরিমাপ করা যায় এবং সংখ্যা ও এককের মাধ্যমে প্রকাশ করা যায় তাকে ভৌত রাশি বলে।",
      "simpleExplanation": "সহজভাবে, যে রাশির পরিমাণ মাপা যায় এবং সংখ্যামান ও একক দিয়ে প্রকাশ করা যায় সেটিই ভৌত রাশি।",
      "detailedExplanation": "একটি ভৌত রাশির পূর্ণ পরিমাপ প্রকাশ করতে সংখ্যামান ও একক প্রয়োজন। যেমন 5 m-এ 5 হলো সংখ্যামান এবং m হলো একক। দৈর্ঘ্য, ভর, সময়, তাপমাত্রা ইত্যাদি ভৌত রাশির উদাহরণ।",
      "formula": "পরিমাপ = সংখ্যামান × একক",
      "units": "রাশি অনুযায়ী একক পরিবর্তিত হয়; যেমন দৈর্ঘ্য → m, ভর → kg, সময় → s",
      "example": "একটি টেবিলের দৈর্ঘ্য 2 m হলে 2 হলো সংখ্যামান এবং m হলো একক।",
      "realLifeExample": "5 kg চাল, 2 L পানি বা 10 m কাপড়ের পরিমাণ পরিমাপযোগ্য হওয়ায় এগুলো ভৌত রাশির উদাহরণ।",
      "examFocus": "ভৌত রাশির সংজ্ঞা, সংখ্যামান ও একক এবং উদাহরণ।",
      "commonMistakes": "একক ছাড়া শুধু সংখ্যাকে সম্পূর্ণ measurement মনে করা।",
      "keyPoints": [
        "ভৌত রাশি পরিমাপযোগ্য",
        "সংখ্যামান ও একক দিয়ে প্রকাশ করা হয়",
        "উদাহরণ: দৈর্ঘ্য, ভর, সময়, তাপমাত্রা"
      ]
    },
    {
      "id": "p1-c2",
      "title": "মৌলিক ও লব্ধ রাশি",
      "definition": "যেসব ভৌত রাশি অন্য কোনো ভৌত রাশির ওপর নির্ভর করে সংজ্ঞায়িত নয় সেগুলো মৌলিক রাশি। মৌলিক রাশি থেকে গাণিতিক সম্পর্কের মাধ্যমে পাওয়া রাশিকে লব্ধ রাশি বলে।",
      "simpleExplanation": "মৌলিক রাশি হলো physics-এর basic building block। মৌলিক রাশি ব্যবহার করে যে নতুন রাশি তৈরি হয় সেটি লব্ধ রাশি।",
      "detailedExplanation": "SI পদ্ধতিতে ৭টি মৌলিক রাশি হলো দৈর্ঘ্য, ভর, সময়, তড়িৎ প্রবাহ, তাপমাত্রা, পদার্থের পরিমাণ এবং দীপন তীব্রতা। বেগ, ত্বরণ, ক্ষেত্রফল, আয়তন, ঘনত্ব, বল ইত্যাদি মৌলিক রাশি থেকে পাওয়া লব্ধ রাশি।",
      "formula": "বেগ v = s/t\nত্বরণ a = v/t\nবল F = ma\nঘনত্ব ρ = m/V",
      "units": "মৌলিক: m, kg, s, A, K, mol, cd\nলব্ধ: m/s, m/s², N, kg/m³ ইত্যাদি",
      "example": "বেগ = সরণ/সময়। তাই বেগ একটি লব্ধ রাশি।",
      "realLifeExample": "গাড়ির speedometer বেগের মান দেখায়; বেগ একটি লব্ধ রাশি।",
      "examFocus": "৭টি মৌলিক রাশি, মৌলিক ও লব্ধ রাশির পার্থক্য এবং derived unit।",
      "commonMistakes": "ভর ও ওজনকে একই রাশি মনে করা বা derived quantity-কে fundamental বলা।",
      "keyPoints": [
        "SI-তে ৭টি মৌলিক রাশি",
        "লব্ধ রাশি মৌলিক রাশি থেকে পাওয়া যায়",
        "Force, velocity, density হলো লব্ধ রাশি"
      ]
    },
    {
      "id": "p1-c3",
      "title": "SI পদ্ধতি ও একক",
      "definition": "আন্তর্জাতিকভাবে স্বীকৃত একক পদ্ধতিকে SI বা International System of Units বলা হয়।",
      "simpleExplanation": "সারা বিশ্বে একই standard unit ব্যবহার করার জন্য SI system ব্যবহৃত হয়।",
      "detailedExplanation": "SI পদ্ধতিতে ভৌত রাশির জন্য নির্দিষ্ট standard unit ব্যবহার করা হয়। Numerical problem করার সময় প্রয়োজন অনুযায়ী রাশিগুলোকে SI unit-এ প্রকাশ করলে হিসাব সহজ ও সামঞ্জস্যপূর্ণ হয়।",
      "formula": "1 N = 1 kg·m·s⁻²\n1 J = 1 N·m\n1 W = 1 J/s",
      "units": "দৈর্ঘ্য → metre (m)\nভর → kilogram (kg)\nসময় → second (s)\nতড়িৎ প্রবাহ → ampere (A)\nতাপমাত্রা → kelvin (K)\nপদার্থের পরিমাণ → mole (mol)\nদীপন তীব্রতা → candela (cd)",
      "example": "500 cm = 5 m",
      "realLifeExample": "Laboratory, engineering এবং scientific measurement-এ standard unit হিসেবে SI system ব্যবহৃত হয়।",
      "examFocus": "SI-এর ৭টি মৌলিক একক, derived unit এবং unit conversion।",
      "commonMistakes": "cm, g, minute ইত্যাদি conversion না করে সরাসরি SI equation-এ বসানো।",
      "keyPoints": [
        "SI হলো আন্তর্জাতিক standard unit system",
        "মৌলিক রাশির ৭টি SI unit আছে",
        "Calculation-এর আগে প্রয়োজনীয় unit conversion করতে হবে"
      ]
    },
    {
      "id": "p1-c4",
      "title": "পরিমাপ ও Least Count",
      "definition": "কোনো ভৌত রাশির মান নির্ণয় করাকে পরিমাপ বা measurement বলে। কোনো measuring instrument দিয়ে পরিমাপ করা যায় এমন ক্ষুদ্রতম মানকে Least Count বলে।",
      "simpleExplanation": "একটি instrument কত ছোট পরিমাণ মাপতে পারে তার একটি গুরুত্বপূর্ণ ধারণা হলো least count।",
      "detailedExplanation": "Measuring instrument-এর scale বা smallest division থেকে তার least count নির্ধারণ করা যায়। সাধারণভাবে least count যত ছোট হয়, instrument তত সূক্ষ্মভাবে reading প্রকাশ করতে পারে।",
      "formula": "Least Count = ক্ষুদ্রতম পরিমাপযোগ্য division",
      "units": "Instrument অনুযায়ী mm, cm, g, s ইত্যাদি",
      "example": "একটি ruler-এর smallest division 1 mm হলে তার least count 1 mm।",
      "realLifeExample": "Ruler, stopwatch, thermometer, vernier calipers ইত্যাদি measuring instrument।",
      "examFocus": "Least count-এর সংজ্ঞা, smallest division এবং instrument reading।",
      "commonMistakes": "Least count-কে instrument-এর maximum range বা total length মনে করা।",
      "keyPoints": [
        "Least count হলো ক্ষুদ্রতম পরিমাপযোগ্য division",
        "Instrument-এর সূক্ষ্মতা বোঝার ক্ষেত্রে গুরুত্বপূর্ণ",
        "Different instrument-এর least count ভিন্ন হতে পারে"
      ]
    },
    {
      "id": "p1-c5",
      "title": "Accuracy ও Precision",
      "definition": "পরিমাপের মান প্রকৃত বা accepted value-এর কতটা কাছাকাছি তাকে accuracy বলে। একই রাশির repeated measurements পরস্পরের কতটা কাছাকাছি তাকে precision বলে।",
      "simpleExplanation": "Accuracy = আসল মানের কাছাকাছি। Precision = বারবার মাপলে কাছাকাছি একই ফল পাওয়া।",
      "detailedExplanation": "Accuracy এবং precision একই বিষয় নয়। কোনো measurement-এর readings পরস্পরের খুব কাছাকাছি হতে পারে, অর্থাৎ precision বেশি, কিন্তু accepted value থেকে দূরে হলে accuracy কম হতে পারে।",
      "formula": "Accuracy → true/accepted value-এর কাছাকাছি হওয়া\nPrecision → repeated readings-এর পারস্পরিক কাছাকাছি হওয়া",
      "units": "Measurement-এর রাশি অনুযায়ী",
      "example": "True value 10 cm এবং readings 10.1, 10.1, 10.1 cm হলে readings-এর precision বেশি।",
      "realLifeExample": "একটি weighing scale বারবার একই reading দিলে repeated measurement-এর precision ভালো বোঝায়।",
      "examFocus": "Accuracy ও Precision-এর সংজ্ঞা এবং পার্থক্য।",
      "commonMistakes": "Accuracy এবং precision-কে একই অর্থে ব্যবহার করা।",
      "keyPoints": [
        "Accuracy → true value-এর নিকটতা",
        "Precision → repeated readings-এর নিকটতা",
        "দুটির অর্থ এক নয়"
      ]
    },
    {
      "id": "p1-c6",
      "title": "Measurement Error",
      "definition": "পরিমাপ করা মান এবং প্রকৃত বা accepted value-এর মধ্যে যে পার্থক্য থাকে তাকে measurement error বলা হয়।",
      "simpleExplanation": "মাপার সময় পাওয়া মানে যে deviation বা অনিশ্চয়তা থাকে সেটিই error-এর সঙ্গে সম্পর্কিত।",
      "detailedExplanation": "Instrument, observer, environment বা measurement procedure-এর কারণে measurement error হতে পারে। Error-এর মান প্রকাশের জন্য absolute error এবং percentage error ব্যবহার করা যায়।",
      "formula": "Absolute Error = |Measured Value − True Value|\nPercentage Error = (Absolute Error / True Value) × 100%",
      "units": "Absolute error-এর unit মূল quantity-এর unit-এর মতো; percentage error সাধারণত %",
      "example": "True length = 10 cm এবং measured length = 9.8 cm হলে Absolute Error = |9.8 − 10| = 0.2 cm।",
      "realLifeExample": "Ruler দিয়ে কোনো বস্তুর দৈর্ঘ্য মাপলে scale reading ও actual value-এর মধ্যে সামান্য পার্থক্য হতে পারে।",
      "examFocus": "Absolute error, percentage error এবং numerical problem।",
      "commonMistakes": "Absolute error-এর negative sign রেখে দেওয়া অথবা percentage error-এর formula-তে denominator ভুল নেওয়া।",
      "keyPoints": [
        "Error measurement-এর deviation নির্দেশ করে",
        "Absolute error-এর মান non-negative magnitude হিসেবে নেওয়া হয়",
        "Percentage error relative error প্রকাশে সাহায্য করে"
      ]
    },
    {
      "id": "p1-c7",
      "title": "Significant Figures",
      "definition": "কোনো measured quantity-এর যে digits তার পরিমাপের অর্থপূর্ণ নির্ভুলতা প্রকাশ করে তাদের significant figures বলে।",
      "simpleExplanation": "Measurement-এর meaningful digits-গুলোই significant figures।",
      "detailedExplanation": "Significant figures একটি measured value কতটা precise তা বোঝাতে সাহায্য করে। Leading zero সাধারণত significant নয়। Decimal-এর পরে থাকা trailing zero অনেক ক্ষেত্রে significant হতে পারে। Scientific notation ব্যবহার করলে significant figures সহজে বোঝা যায়।",
      "formula": "Percentage uncertainty ≈ (Absolute uncertainty / Measured value) × 100%",
      "units": "Significant figure-এর নিজস্ব unit নেই; এটি measurement-এর digits-এর বৈশিষ্ট্য।",
      "example": "0.00450 সংখ্যাটিতে 3টি significant figure আছে: 4, 5 এবং শেষের 0।",
      "realLifeExample": "Laboratory measurement যেমন 12.50 cm লিখলে শেষের zero-ও measurement-এর precision সম্পর্কে তথ্য দেয়।",
      "examFocus": "Significant figure গণনা, zero-এর নিয়ম এবং rounding।",
      "commonMistakes": "সব zero-কে significant figure ধরে নেওয়া।",
      "keyPoints": [
        "Leading zero সাধারণত significant নয়",
        "Meaningful trailing zero significant হতে পারে",
        "Scientific notation-এ significant figures স্পষ্টভাবে প্রকাশ করা যায়"
      ]
    },
    {
      "id": "p1-c8",
      "title": "মাত্রা ও Dimensional Formula",
      "definition": "কোনো ভৌত রাশিকে মৌলিক রাশিগুলোর ঘাতের সাহায্যে প্রকাশ করলে যে রূপ পাওয়া যায় তাকে ওই রাশির dimensional formula বলে।",
      "simpleExplanation": "একটি derived quantity কোন মৌলিক quantity থেকে কীভাবে তৈরি হয়েছে তা M, L, T ইত্যাদির মাধ্যমে প্রকাশ করা যায়।",
      "detailedExplanation": "Mechanical quantities-এর dimensional formula সাধারণত Mass (M), Length (L) এবং Time (T) ব্যবহার করে প্রকাশ করা হয়। Dimension এবং unit এক জিনিস নয়।",
      "formula": "[v] = LT⁻¹\n[a] = LT⁻²\n[F] = MLT⁻²\n[W] = ML²T⁻²\n[P] = ML²T⁻³",
      "units": "Dimensional formula-এর conventional physical unit নেই।",
      "example": "F = ma হলে [F] = M × LT⁻² = MLT⁻²।",
      "realLifeExample": "কোনো physics formula সঠিকভাবে dimensionally consistent কিনা যাচাই করতে dimensional formula ব্যবহার করা হয়।",
      "examFocus": "Velocity, acceleration, force, work, power ইত্যাদির dimension নির্ণয়।",
      "commonMistakes": "Dimension এবং unit-কে একই বিষয় মনে করা।",
      "keyPoints": [
        "Dimension ≠ Unit",
        "M, L, T দিয়ে অনেক mechanical quantity প্রকাশ করা যায়",
        "Derived quantity-এর dimension বের করা যায়"
      ]
    },
    {
      "id": "p1-c9",
      "title": "Dimensional Analysis",
      "definition": "মৌলিক রাশির dimensions ব্যবহার করে কোনো physical equation-এর dimensional consistency যাচাই করার পদ্ধতিকে dimensional analysis বলে।",
      "simpleExplanation": "Formula-এর দুই পাশে একই dimension আছে কিনা check করাই dimensional analysis-এর একটি প্রধান ব্যবহার।",
      "detailedExplanation": "একটি equation dimensionally consistent হলে দুই পাশের dimension একই হতে হবে। একই equation-এ যোগ বা বিয়োগ করা terms-গুলোর dimension-ও একই হতে হয়। এটি formula যাচাই ও কিছু সম্পর্ক নির্ণয়ে সাহায্য করে, তবে numerical constant বা সব ধরনের physical validity শুধু dimension দিয়ে যাচাই করা যায় না।",
      "formula": "LHS dimension = RHS dimension\ns = ut + ½at²\n[ut] = L\n[at²] = LT⁻² × T² = L",
      "units": "M, L, T এবং প্রয়োজন অনুযায়ী অন্যান্য base dimensions",
      "example": "s = ut + ½at² সমীকরণে ut এবং at² উভয়ের dimension L; তাই terms দুটো dimensionally compatible।",
      "realLifeExample": "কোনো numerical problem-এ formula ব্যবহার করার আগে dimensional consistency check করা যায়।",
      "examFocus": "Equation verification, missing exponent বা unknown dimension নির্ণয়।",
      "commonMistakes": "Numerical constant-এর dimension আলাদা করে নেওয়া বা dimensionally correct হলেই equation সম্পূর্ণ physically correct ধরে নেওয়া।",
      "keyPoints": [
        "LHS এবং RHS-এর dimension compatible হতে হবে",
        "Addition/subtraction-এর terms-এর dimension একই হতে হয়",
        "Dimensional analysis formula যাচাইয়ের একটি গুরুত্বপূর্ণ tool"
      ]
    },
    {
      "id": "p1-c10",
      "title": "Scientific Notation",
      "definition": "খুব বড় বা খুব ছোট সংখ্যাকে a × 10ⁿ আকারে প্রকাশ করাকে scientific notation বলে, যেখানে 1 ≤ a < 10।",
      "simpleExplanation": "অনেক বড় বা ছোট সংখ্যাকে ছোট ও standard আকারে লেখার পদ্ধতি হলো scientific notation।",
      "detailedExplanation": "Scientific notation-এ decimal point এমনভাবে সরানো হয় যাতে coefficient 1 থেকে 10-এর মধ্যে থাকে। Decimal বামে সরালে exponent positive হয় এবং ডানে সরালে exponent negative হয়।",
      "formula": "a × 10ⁿ, যেখানে 1 ≤ a < 10",
      "units": "মূল physical quantity-এর unit অপরিবর্তিত থাকে।",
      "example": "300000 = 3 × 10⁵\n0.00045 = 4.5 × 10⁻⁴",
      "realLifeExample": "আলোর বেগ, পরমাণুর আকার বা মহাকাশীয় দূরত্বের মতো বড়/ছোট মান প্রকাশে scientific notation ব্যবহার করা হয়।",
      "examFocus": "Ordinary number থেকে scientific notation এবং scientific notation থেকে ordinary number-এ conversion।",
      "commonMistakes": "Decimal কোন দিকে সরানো হয়েছে তার সঙ্গে exponent-এর sign মিলিয়ে না নেওয়া।",
      "keyPoints": [
        "Coefficient 1 থেকে 10-এর মধ্যে হবে",
        "বড় সংখ্যায় exponent সাধারণত positive",
        "খুব ছোট সংখ্যায় exponent negative"
      ]
    }
  ],
  "diagram": "measure"
};
