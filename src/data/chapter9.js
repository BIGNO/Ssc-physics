export const chapter9 = {
  id: 'p9',
  no: 9,
  title: 'আলোর প্রতিসরণ',
  focus: 'আলোর প্রতিসরণ, প্রতিসরণাঙ্ক, Snell-এর সূত্র, কাচের স্ল্যাব, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন',

  manual: [
    "প্রতিসরণ কী এবং কেন ঘটে তা বুঝতে হবে",
    "আপতিত রশ্মি, প্রতিসরিত রশ্মি ও অভিলম্ব শনাক্ত করতে হবে",
    "আপতন বিন্দু চিহ্নিত করতে হবে",
    "আপতন কোণ ও প্রতিসরণ কোণ নির্ণয় করতে হবে",
    "প্রতিসরণের প্রথম সূত্র বলতে ও প্রয়োগ করতে হবে",
    "Snell-এর সূত্র লিখতে ও numerical-এ ব্যবহার করতে হবে",
    "প্রতিসরণাঙ্কের সংজ্ঞা ও সূত্র বুঝতে হবে",
    "n = c/v সূত্র ব্যবহার করে numerical সমাধান করতে হবে",
    "লঘু ও ঘন মাধ্যমের পার্থক্য বুঝতে হবে",
    "আলো লঘু থেকে ঘন ও ঘন থেকে লঘু মাধ্যমে গেলে ray-এর দিক নির্ণয় করতে হবে",
    "Optical density ও mass density-এর পার্থক্য বুঝতে হবে",
    "কাচের স্ল্যাবের মধ্য দিয়ে আলোর পথের ray diagram আঁকতে হবে",
    "Emergent ray কেন incident ray-এর সমান্তরাল হয় তা বুঝতে হবে",
    "Lateral displacement-এর ধারণা ও সূত্র বুঝতে হবে",
    "Real depth ও apparent depth-এর পার্থক্য বুঝতে হবে",
    "Apparent depth-এর numerical সমাধান করতে হবে",
    "সংকট কোণের সংজ্ঞা ও শর্ত বুঝতে হবে",
    "Critical angle-এর numerical সমাধান করতে হবে",
    "পূর্ণ অভ্যন্তরীণ প্রতিফলনের দুটি শর্ত বলতে হবে",
    "Optical fibre-এর গঠন ও TIR-এর ভূমিকা ব্যাখ্যা করতে হবে",
    "মরীচিকার কারণ ব্যাখ্যা করতে হবে",
    "Refraction-এর ray diagram দেখে বিভিন্ন angle ও medium শনাক্ত করতে হবে",
    "প্রতিসরণ-সংক্রান্ত numerical-এ সঠিক formula ও unit ব্যবহার করতে হবে"
  ],

  concepts: [
    {
      id: 'refraction',
      title: 'আলোর প্রতিসরণ',
      definition: 'আলো এক স্বচ্ছ মাধ্যম থেকে অন্য স্বচ্ছ মাধ্যমে তির্যকভাবে প্রবেশ করলে তার গতির পরিবর্তনের কারণে গতিপথ পরিবর্তন করাকে আলোর প্রতিসরণ বলে।',
      simpleExplanation: 'এক মাধ্যম থেকে অন্য মাধ্যমে গেলে আলো বাঁকা পথে চলে। এই বাঁকাই প্রতিসরণ।',
      detailedExplanation: 'বিভিন্ন স্বচ্ছ মাধ্যমে আলোর বেগ ভিন্ন। আলো যখন এক মাধ্যম থেকে অন্য মাধ্যমে তির্যকভাবে প্রবেশ করে, তখন নতুন মাধ্যমে তার বেগ পরিবর্তিত হয় এবং সেই কারণে গতিপথ পরিবর্তিত হয়। Normal বরাবর আপতিত হলে দিকের পরিবর্তন দেখা যায় না, যদিও বেগ পরিবর্তিত হতে পারে।',
      formula: 'প্রতিসরণের ক্ষেত্রে আলোর বেগ পরিবর্তিত হয়',
      units: 'কোনো একক নেই',
      example: 'বাতাস থেকে পানিতে প্রবেশের সময় আলোর পথ পরিবর্তিত হয়।',
      realLifeExample: 'পানিতে রাখা কলমকে বাঁকা মনে হওয়া।',
      examFocus: 'সংজ্ঞা, কারণ ও চিত্র',
      commonMistakes: 'প্রতিসরণকে প্রতিফলনের সাথে গুলিয়ে ফেলা।',
      keyPoints: ['মাধ্যম পরিবর্তন', 'আলোর বেগ পরিবর্তন', 'গতিপথ পরিবর্তন']
    },

    {
      id: 'cause-refraction',
      title: 'প্রতিসরণের কারণ',
      definition: 'বিভিন্ন স্বচ্ছ মাধ্যমে আলোর বেগ ভিন্ন হওয়ার কারণে প্রতিসরণ ঘটে।',
      simpleExplanation: 'মাধ্যম বদলালে আলোর speed বদলায়, তাই আলো বাঁকে।',
      detailedExplanation: 'আলো একটি মাধ্যম থেকে অন্য মাধ্যমে গেলে নতুন মাধ্যমে আলোর বেগ পরিবর্তিত হয়। তির্যকভাবে প্রবেশ করলে এই বেগের পরিবর্তনের ফলে আলোর দিকও পরিবর্তিত হয়।',
      formula: 'v = c/n',
      units: 'v: m/s',
      example: 'বাতাসে আলোর বেগ পানির তুলনায় বেশি।',
      realLifeExample: 'পানিতে বস্তু তার প্রকৃত অবস্থান থেকে অন্য জায়গায় দেখা যায়।',
      examFocus: 'প্রতিসরণের কারণ',
      commonMistakes: 'শুধু বেগের পরিবর্তন বললে অসম্পূর্ণ; দিক পরিবর্তনের বিষয়টিও লিখতে হবে।',
      keyPoints: ['আলোর বেগ', 'মাধ্যম', 'দিক পরিবর্তন']
    },

    {
      id: 'incident-ray',
      title: 'আপতিত রশ্মি',
      definition: 'যে আলোকরশ্মি কোনো বিভেদতলে এসে আপতিত হয় তাকে আপতিত রশ্মি বলে।',
      simpleExplanation: 'যে ray এসে surface-এ পড়ে সেটাই incident ray।',
      detailedExplanation: 'দুটি স্বচ্ছ মাধ্যমের বিভেদতলে আলো পড়ার আগে যে রশ্মিটি বিভেদতলের দিকে অগ্রসর হয় সেটিই আপতিত রশ্মি।',
      formula: 'কোনো নির্দিষ্ট সূত্র নেই',
      units: 'কোনো একক নেই',
      example: 'বাতাস থেকে কাচের পৃষ্ঠে আসা আলো।',
      realLifeExample: 'সূর্যের আলো জানালার কাচে পড়া।',
      examFocus: 'চিত্রে শনাক্তকরণ',
      commonMistakes: 'প্রতিসরিত রশ্মিকে আপতিত রশ্মি বলা।',
      keyPoints: ['বিভেদতল', 'আপতন', 'Incident ray']
    },

    {
      id: 'normal',
      title: 'অভিলম্ব',
      definition: 'আপতন বিন্দুতে বিভেদতলের উপর অঙ্কিত লম্ব রেখাকে অভিলম্ব বলে।',
      simpleExplanation: 'Surface-এর উপর 90° কোণে আঁকা line হলো normal।',
      detailedExplanation: 'আপতন বিন্দুতে বিভেদতলের সাথে 90° কোণে যে কাল্পনিক রেখা আঁকা হয়, তাকে অভিলম্ব বলা হয়।',
      formula: 'Normal ⟂ Surface',
      units: 'কোনো একক নেই',
      example: 'কাচের পৃষ্ঠে আলো পড়লে আপতন বিন্দুতে একটি normal আঁকা হয়।',
      realLifeExample: 'আলোর প্রতিসরণ চিত্র আঁকার সময় normal ব্যবহার করা হয়।',
      examFocus: 'চিত্র',
      commonMistakes: 'Normal-কে surface-এর সমান্তরাল আঁকা।',
      keyPoints: ['আপতন বিন্দু', '90°', 'বিভেদতল']
    },

    {
      id: 'angles',
      title: 'আপতন কোণ ও প্রতিসরণ কোণ',
      definition: 'আপতিত রশ্মি ও অভিলম্বের মধ্যবর্তী কোণকে আপতন কোণ এবং প্রতিসরিত রশ্মি ও অভিলম্বের মধ্যবর্তী কোণকে প্রতিসরণ কোণ বলে।',
      simpleExplanation: 'Incident ray + normal = angle of incidence; refracted ray + normal = angle of refraction।',
      detailedExplanation: 'আপতন কোণকে i এবং প্রতিসরণ কোণকে r দ্বারা প্রকাশ করা হয়। কোণ সবসময় surface-এর সাথে নয়, normal-এর সাথে মাপতে হবে।',
      formula: 'i = angle between incident ray and normal; r = angle between refracted ray and normal',
      units: 'ডিগ্রি (°)',
      example: 'যদি incident ray ও normal-এর মধ্যে 30° হয়, তবে i = 30°।',
      realLifeExample: 'Refraction diagram থেকে angle নির্ণয়।',
      examFocus: 'i ও r শনাক্ত করা',
      commonMistakes: 'surface-এর সাথে কোণকে i বা r ধরা।',
      keyPoints: ['i', 'r', 'Normal-এর সাথে কোণ']
    },

    {
      id: 'laws-refraction',
      title: 'আলোর প্রতিসরণের সূত্র',
      definition: 'আলোর প্রতিসরণের দুটি মৌলিক সূত্র হলো প্রতিসরণের প্রথম ও দ্বিতীয় সূত্র।',
      simpleExplanation: 'প্রথম সূত্রে তিনটি ray একই plane-এ থাকে এবং দ্বিতীয় সূত্রে Snell-এর relation পাওয়া যায়।',
      detailedExplanation: 'প্রথম সূত্র অনুযায়ী আপতিত রশ্মি, প্রতিসরিত রশ্মি এবং আপতন বিন্দুতে অঙ্কিত অভিলম্ব একই সমতলে থাকে। দ্বিতীয় সূত্র বা Snell-এর সূত্র অনুযায়ী নির্দিষ্ট দুটি মাধ্যমের জন্য sin i/sin r ধ্রুবক থাকে। এই ধ্রুবকটি মাধ্যম দুটির আপেক্ষিক প্রতিসরণাঙ্কের সাথে সম্পর্কিত।',
      formula: 'sin i / sin r = constant',
      units: 'কোনো একক নেই',
      example: 'একই দুই মাধ্যমে i পরিবর্তন করলে r-ও পরিবর্তিত হয়।',
      realLifeExample: 'কাচ ও বাতাসের interface-এ refraction।',
      examFocus: 'দুটি সূত্র লিখতে হবে',
      commonMistakes: 'sin i/sin r-এর পরিবর্তে i/r লেখা।',
      keyPoints: ['একই সমতল', 'sin i', 'sin r']
    },

    {
      id: 'snell-law',
      title: 'Snell-এর সূত্র',
      definition: 'নির্দিষ্ট দুটি মাধ্যমের জন্য আপতন কোণের sine এবং প্রতিসরণ কোণের sine-এর অনুপাত ধ্রুবক থাকে।',
      simpleExplanation: 'Refraction-এর প্রধান mathematical relation হলো Snell’s law।',
      detailedExplanation: 'প্রথম মাধ্যমের তুলনায় দ্বিতীয় মাধ্যমের প্রতিসরণাঙ্ককে μ₂₁ ধরলে μ₂₁ = sin i/sin r।',
      formula: 'μ = sin i / sin r',
      units: 'কোনো একক নেই',
      example: 'i = 30° এবং r = 20° হলে μ = sin30°/sin20°।',
      realLifeExample: 'প্রিজম ও কাচের ক্ষেত্রে প্রতিসরণাঙ্ক নির্ণয়।',
      examFocus: 'Numerical',
      commonMistakes: 'degree mode ছাড়া calculator ব্যবহার করা।',
      keyPoints: ['Snell’s law', 'sin i', 'sin r', 'refractive index']
    },

    {
      id: 'refractive-index',
      title: 'প্রতিসরণাঙ্ক',
      definition: 'শূন্যস্থানে আলোর বেগ ও কোনো মাধ্যমে আলোর বেগের অনুপাতকে ঐ মাধ্যমের পরম প্রতিসরণাঙ্ক বলে।',
      simpleExplanation: 'কোনো medium-এ আলো কতটা ধীর হয় তা বোঝাতে refractive index ব্যবহার করা হয়।',
      detailedExplanation: 'প্রতিসরণাঙ্ক সাধারণত n বা μ দ্বারা প্রকাশ করা হয়। শূন্যস্থানে আলোর বেগ c এবং কোনো মাধ্যমে আলোর বেগ v হলে n = c/v। তাই n যত বেশি হয়, সেই মাধ্যমে আলোর বেগ তত কম হয়। প্রতিসরণাঙ্ক একটি dimensionless quantity।',
      formula: 'n = c/v',
      units: 'কোনো একক নেই',
      example: 'কোনো মাধ্যমে আলোর বেগ কমলে n-এর মান বাড়ে।',
      realLifeExample: 'কাচ ও পানির optical properties তুলনা।',
      examFocus: 'সূত্র ও numerical',
      commonMistakes: 'n-এর unit লেখা।',
      keyPoints: ['n = c/v', 'dimensionless', 'light speed']
    },

    {
      id: 'optical-density',
      title: 'অপটিক্যাল ঘনত্ব',
      definition: 'কোনো মাধ্যমের মধ্য দিয়ে আলো কত ধীরে চলতে পারে তার সাথে সম্পর্কিত ধর্মকে অপটিক্যাল ঘনত্ব বলে।',
      simpleExplanation: 'যে মাধ্যমে আলো ধীরে চলে সেটি তুলনামূলকভাবে optically denser।',
      detailedExplanation: 'অপটিক্যাল ঘনত্ব ভরঘনত্বের মতো বিষয় নয়। সাধারণভাবে বেশি refractive index-এর মাধ্যমকে বেশি optically dense বলা হয়।',
      formula: 'n = c/v',
      units: 'কোনো একক নেই',
      example: 'কাচ সাধারণত বাতাসের চেয়ে optically denser।',
      realLifeExample: 'বাতাস থেকে কাচে আলো প্রবেশের সময় normal-এর দিকে বাঁকে।',
      examFocus: 'Optically dense বনাম rarer medium',
      commonMistakes: 'Optical density-কে mass density ভাবা।',
      keyPoints: ['Optical density', 'Refractive index', 'Light speed']
    },

    {
      id: 'rarer-denser',
      title: 'লঘু ও ঘন মাধ্যম',
      definition: 'যে মাধ্যমে আলোর বেগ বেশি তাকে তুলনামূলক লঘু এবং যে মাধ্যমে আলোর বেগ কম তাকে তুলনামূলক ঘন মাধ্যম বলা হয়।',
      simpleExplanation: 'Rarer → denser গেলে আলো normal-এর দিকে যায়; denser → rarer গেলে normal থেকে দূরে যায়।',
      detailedExplanation: 'বাতাস থেকে কাচে গেলে আলো সাধারণত normal-এর দিকে বাঁকে। কাচ থেকে বাতাসে গেলে normal থেকে দূরে সরে যায়।',
      formula: 'n = c/v',
      units: 'কোনো একক নেই',
      example: 'Air → Glass: normal-এর দিকে bending।',
      realLifeExample: 'পানির মধ্যে থাকা বস্তু অন্য অবস্থানে দেখা।',
      examFocus: 'Ray diagram',
      commonMistakes: 'Rarer/denser নির্ধারণে আলোর বেগের সম্পর্ক ভুল করা।',
      keyPoints: ['Normal-এর দিকে', 'Normal থেকে দূরে', 'Light speed']
    },

    {
      id: 'apparent-depth',
      title: 'দৃশ্যমান গভীরতা',
      definition: 'প্রতিসরণের কারণে পানির নিচের কোনো বস্তুকে প্রকৃত গভীরতার চেয়ে কম গভীরে দেখা যাওয়াকে দৃশ্যমান গভীরতার ধারণা বলে।',
      simpleExplanation: 'পানির নিচের জিনিস আসলের চেয়ে উপরে দেখা যায়।',
      detailedExplanation: 'পানি থেকে বাতাসে আসার সময় আলো normal থেকে দূরে সরে যায়। চোখ সেই rays-কে সরলরেখায় পিছনে বাড়ালে বস্তুটি প্রকৃত অবস্থানের চেয়ে উপরে মনে হয়।',
      formula: 'Refractive index = Real depth / Apparent depth',
      units: 'প্রতিসরণাঙ্কের কোনো একক নেই',
      example: 'Real depth = 12 cm, apparent depth = 9 cm হলে n = 12/9।',
      realLifeExample: 'পুকুরের তলদেশকে অগভীর মনে হওয়া।',
      examFocus: 'Numerical',
      commonMistakes: 'Real depth এবং apparent depth উল্টো বসানো।',
      keyPoints: ['Real depth', 'Apparent depth', 'n']
    },

    {
      id: 'glass-slab',
      title: 'কাচের স্ল্যাবের মধ্য দিয়ে প্রতিসরণ',
      definition: 'সমান্তরাল দুই পৃষ্ঠবিশিষ্ট কাচের স্ল্যাবে আলো প্রবেশ ও বের হওয়ার সময় প্রতিসরণ ঘটে।',
      simpleExplanation: 'Glass slab-এ ঢোকার সময় ray একদিকে বাঁকে এবং বের হওয়ার সময় আবার বাঁকে।',
      detailedExplanation: 'Parallel-sided glass slab-এ প্রথম পৃষ্ঠে আলো প্রতিসরিত হয়ে normal-এর দিকে যায় এবং দ্বিতীয় পৃষ্ঠে glass থেকে air-এ বের হওয়ার সময় normal থেকে দূরে সরে যায়। দুই পৃষ্ঠ সমান্তরাল হওয়ায় emergent ray incident ray-এর সমান্তরাল হয়, কিন্তু তার অবস্থান কিছুটা পাশে সরে যায়। এই সরণকে lateral displacement বলে।',
      formula: 'Emergent ray ∥ Incident ray',
      units: 'কোনো একক নেই',
      example: 'Air → Glass → Air',
      realLifeExample: 'জানালার কাচের মধ্য দিয়ে আলো যাওয়া।',
      examFocus: 'Ray diagram',
      commonMistakes: 'Emergent ray-কে incident ray-এর সাথে অসমান্তরাল দেখানো।',
      keyPoints: ['Parallel surfaces', 'Emergent ray', 'Lateral shift']
    },

    {
      id: 'lateral-displacement',
      title: 'পার্শ্ব সরণ',
      definition: 'কাচের স্ল্যাবের মধ্য দিয়ে যাওয়ার পর নির্গত রশ্মি মূল আপতিত রশ্মির তুলনায় যে পাশের দিকে সরে যায় তাকে পার্শ্ব সরণ বলে।',
      simpleExplanation: 'Ray parallel থাকে, কিন্তু side-এ একটু shift করে।',
      detailedExplanation: 'কাচের slab-এর thickness, refractive index এবং angle of incidence-এর ওপর lateral displacement নির্ভর করে।',
      formula: 'd = t sin(i-r) / cos r',
      units: 'দৈর্ঘ্য (m, cm ইত্যাদি)',
      example: 'একটি glass slab-এ ray কিছু দূর পাশের দিকে সরে যায়।',
      realLifeExample: 'কাচের পাতের মধ্য দিয়ে লেখা দেখলে অবস্থান সামান্য displaced মনে হতে পারে।',
      examFocus: 'সূত্র ও চিত্র',
      commonMistakes: 'Lateral displacement-কে angular deviation বলা।',
      keyPoints: ['d', 'slab thickness', 'i', 'r']
    },

    {
      id: 'critical-angle',
      title: 'সংকট কোণ',
      definition: 'ঘন মাধ্যম থেকে লঘু মাধ্যমে আলো যাওয়ার সময় যে আপতন কোণে প্রতিসরণ কোণ 90° হয় তাকে সংকট কোণ বলে।',
      simpleExplanation: 'Refracted ray যখন surface বরাবর চলে, সেই incidence angle হলো critical angle।',
      detailedExplanation: 'Critical angle কেবল optically denser medium থেকে optically rarer medium-এ যাওয়ার ক্ষেত্রে সংজ্ঞায়িত হয়। এই বিশেষ আপতন কোণে refracted ray বিভেদতল বরাবর চলে, অর্থাৎ refraction angle 90° হয়।',
      formula: 'For denser to air: sin C = 1/n',
      units: 'ডিগ্রি (°)',
      example: 'Glass-air interface-এ নির্দিষ্ট একটি critical angle থাকে।',
      realLifeExample: 'Optical fibre-এর কাজের ভিত্তি।',
      examFocus: 'সংজ্ঞা ও numerical',
      commonMistakes: 'Rarer to denser-এর জন্য critical angle ব্যবহার করা।',
      keyPoints: ['Denser → rarer', 'r = 90°', 'Critical angle']
    },

    {
      id: 'tir',
      title: 'পূর্ণ অভ্যন্তরীণ প্রতিফলন',
      definition: 'ঘন মাধ্যম থেকে লঘু মাধ্যমে আলো যাওয়ার সময় আপতন কোণ সংকট কোণের চেয়ে বেশি হলে আলো সম্পূর্ণভাবে ঘন মাধ্যমের ভেতরে প্রতিফলিত হওয়াকে পূর্ণ অভ্যন্তরীণ প্রতিফলন বলে।',
      simpleExplanation: 'Critical angle-এর বেশি angle হলে light বাইরে refract না হয়ে পুরোপুরি reflect করে।',
      detailedExplanation: 'পূর্ণ অভ্যন্তরীণ প্রতিফলনের জন্য দুটি শর্ত একসাথে পূরণ হতে হয়: প্রথমত, আলোকে optically denser medium থেকে rarer medium-এ যেতে হবে; দ্বিতীয়ত, angle of incidence-কে critical angle-এর চেয়ে বড় হতে হবে। i = C হলে refracted ray surface বরাবর যায়, আর i > C হলে TIR ঘটে।',
      formula: 'i > C',
      units: 'কোণ ডিগ্রিতে',
      example: 'Glass থেকে air-এ আলো যাওয়ার সময় i > C হলে TIR হতে পারে।',
      realLifeExample: 'Optical fibre, prism এবং কিছু optical instrument।',
      examFocus: 'দুটি শর্ত অবশ্যই লিখতে হবে',
      commonMistakes: 'শুধু i > C লিখে denser-to-rarer শর্ত বাদ দেওয়া।',
      keyPoints: ['Denser → rarer', 'i > C', 'Complete reflection']
    },

    {
      id: 'optical-fibre',
      title: 'অপটিক্যাল ফাইবার',
      definition: 'অতি সূক্ষ্ম স্বচ্ছ তন্তুর মাধ্যমে পূর্ণ অভ্যন্তরীণ প্রতিফলন ব্যবহার করে আলো বা তথ্য পরিবহনকারী ব্যবস্থা হলো optical fibre।',
      simpleExplanation: 'Fiber-এর ভেতরে light বারবার TIR করে সামনে যায়।',
      detailedExplanation: 'Optical fibre-এর প্রধান অংশ হলো core ও cladding। Core-এর refractive index cladding-এর চেয়ে বেশি থাকে। উপযুক্ত angle-এ core-এর ভেতরে প্রবেশ করা আলো core-cladding boundary-তে বারবার total internal reflection করে দীর্ঘ দূরত্ব অতিক্রম করতে পারে।',
      formula: 'n(core) > n(cladding)',
      units: 'কোনো একক নেই',
      example: 'একটি optical fibre-এর core-এ light signal চলাচল করে।',
      realLifeExample: 'Internet communication এবং medical endoscope।',
      examFocus: 'গঠন, principle ও ব্যবহার',
      commonMistakes: 'Optical fibre-এর কাজকে ordinary electrical wire-এর মতো ব্যাখ্যা করা।',
      keyPoints: ['Core', 'Cladding', 'TIR']
    },

    {
      id: 'mirage',
      title: 'মরীচিকা',
      definition: 'বায়ুমণ্ডলের বিভিন্ন স্তরের তাপমাত্রা ও ঘনত্বের পার্থক্যের কারণে আলোর প্রতিসরণ/পূর্ণ অভ্যন্তরীণ প্রতিফলনের ফলে দূরে পানির মতো দৃশ্য তৈরি হওয়াকে মরীচিকা বলে।',
      simpleExplanation: 'গরম রাস্তার ওপর দূরে পানি আছে মনে হওয়া একটি mirage-এর উদাহরণ।',
      detailedExplanation: 'ভূমির কাছাকাছি উত্তপ্ত বায়ু এবং উপরের তুলনামূলক ঠান্ডা বায়ুর কারণে refractive index পরিবর্তিত হয়। আলোর পথ বাঁকতে বাঁকতে এমন দৃশ্য তৈরি করতে পারে যা পানির মতো মনে হয়।',
      formula: 'নির্দিষ্ট একক সূত্র নেই',
      units: 'প্রযোজ্য নয়',
      example: 'গরম মরুভূমি বা পিচঢালা রাস্তায় দূরে পানি দেখা।',
      realLifeExample: 'Hot road mirage।',
      examFocus: 'কারণ ও ব্যাখ্যা',
      commonMistakes: 'মরীচিকাকে বাস্তব পানি মনে করা।',
      keyPoints: ['Atmosphere', 'Temperature gradient', 'Refraction/TIR']
    }
  ],

  formulaSheet: [
    "Snell's law: n = sin i / sin r",
    "Absolute refractive index: n = c/v",
    "Relative refractive index: n₂₁ = sin i / sin r",
    "Speed of light in medium: v = c/n",
    "Apparent depth relation: n = Real depth / Apparent depth",
    "Lateral displacement: d = t sin(i-r) / cos r",
    "Critical angle for denser medium to air: sin C = 1/n",
    "For TIR: i > C",
    "At critical angle: r = 90°",
    "Optical fibre: n(core) > n(cladding)",
    "Rarer → denser: ray bends towards normal",
    "Denser → rarer: ray bends away from normal"
  ],

  questions: [
    {
      id: 'ch9-q01',
      chapterId: 'p9',
      conceptId: 'refraction',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 'High',
      question: 'আলো এক স্বচ্ছ মাধ্যম থেকে অন্য স্বচ্ছ মাধ্যমে তির্যকভাবে গেলে কী ঘটে?',
      options: ['শুধু রং পরিবর্তন হয়', 'গতিপথ পরিবর্তিত হতে পারে', 'ভর পরিবর্তিত হয়', 'আলো স্থির হয়ে যায়'],
      answer: 'গতিপথ পরিবর্তিত হতে পারে',
      solution: 'মাধ্যম পরিবর্তনের ফলে আলোর বেগ পরিবর্তিত হয় এবং তির্যকভাবে প্রবেশ করলে গতিপথ পরিবর্তিত হয়।'
    },
    {
      id: 'ch9-q02',
      chapterId: 'p9',
      conceptId: 'angles',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 'High',
      question: 'আপতন কোণ কোন দুটির মধ্যকার কোণ?',
      options: ['আপতিত রশ্মি ও অভিলম্ব', 'আপতিত রশ্মি ও surface', 'প্রতিসরিত রশ্মি ও surface', 'দুটি surface'],
      answer: 'আপতিত রশ্মি ও অভিলম্ব',
      solution: 'আপতন কোণ সবসময় incident ray এবং normal-এর মধ্যকার কোণ।'
    },
    {
      id: 'ch9-q03',
      chapterId: 'p9',
      conceptId: 'laws-refraction',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 'High',
      question: 'প্রতিসরণের প্রথম সূত্র অনুযায়ী আপতিত রশ্মি, প্রতিসরিত রশ্মি ও অভিলম্ব কী অবস্থায় থাকে?',
      options: ['তিনটি ভিন্ন সমতলে', 'একই সমতলে', 'সবসময় সমান্তরাল', 'সবসময় লম্ব'],
      answer: 'একই সমতলে',
      solution: 'প্রতিসরণের প্রথম সূত্র অনুযায়ী তিনটি একই সমতলে থাকে।'
    },
    {
      id: 'ch9-q04',
      chapterId: 'p9',
      conceptId: 'snell-law',
      type: 'Numerical',
      source: 'Concept Practice',
      importance: 'High',
      question: 'একটি মাধ্যমে আপতন কোণ 30° এবং প্রতিসরণ কোণ 20° হলে sin i/sin r এর মান নির্ণয় কর।',
      answer: 'প্রায় 1.46',
      solution: 'sin i/sin r = sin30°/sin20° = 0.5/0.342 ≈ 1.46।'
    },
    {
      id: 'ch9-q05',
      chapterId: 'p9',
      conceptId: 'refractive-index',
      type: 'Numerical',
      source: 'Concept Practice',
      importance: 'High',
      question: 'কোনো মাধ্যমে আলোর বেগ 2 × 10^8 m/s হলে সেই মাধ্যমের প্রতিসরণাঙ্ক কত? শূন্যস্থানে আলোর বেগ 3 × 10^8 m/s।',
      answer: '1.5',
      solution: 'n = c/v = (3 × 10^8)/(2 × 10^8) = 1.5।'
    },
    {
      id: 'ch9-q06',
      chapterId: 'p9',
      conceptId: 'rarer-denser',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 'High',
      question: 'আলো লঘু মাধ্যম থেকে ঘন মাধ্যমে গেলে সাধারণত কোন দিকে বাঁকে?',
      options: ['অভিলম্বের দিকে', 'অভিলম্ব থেকে দূরে', 'surface বরাবর', 'কোনো পরিবর্তন হয় না'],
      answer: 'অভিলম্বের দিকে',
      solution: 'লঘু মাধ্যম থেকে ঘন মাধ্যমে গেলে আলো সাধারণত normal-এর দিকে বাঁকে।'
    },
    {
      id: 'ch9-q07',
      chapterId: 'p9',
      conceptId: 'apparent-depth',
      type: 'Numerical',
      source: 'Concept Practice',
      importance: 'High',
      question: 'পানিতে একটি বস্তুর প্রকৃত গভীরতা 12 cm এবং দৃশ্যমান গভীরতা 9 cm হলে পানির প্রতিসরণাঙ্ক কত?',
      answer: '4/3 ≈ 1.33',
      solution: 'n = Real depth/Apparent depth = 12/9 = 4/3 ≈ 1.33।'
    },
    {
      id: 'ch9-q08',
      chapterId: 'p9',
      conceptId: 'glass-slab',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 'High',
      question: 'সমান্তরাল কাচের স্ল্যাব থেকে বের হওয়ার পর emergent ray সাধারণত incident ray-এর কেমন হয়?',
      options: ['লম্ব', 'সমান্তরাল', 'সবসময় বিপরীতমুখী', 'সম্পূর্ণ অনিয়মিত'],
      answer: 'সমান্তরাল',
      solution: 'Parallel-sided glass slab-এ emergent ray incident ray-এর সমান্তরাল হয়, তবে lateral displacement থাকতে পারে।'
    },
    {
      id: 'ch9-q09',
      chapterId: 'p9',
      conceptId: 'critical-angle',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 'High',
      question: 'Critical angle-এর ক্ষেত্রে প্রতিসরণ কোণের মান কত?',
      options: ['0°', '45°', '90°', '180°'],
      answer: '90°',
      solution: 'Critical angle হলো সেই incidence angle যার জন্য refracted ray surface বরাবর চলে, অর্থাৎ r = 90°।'
    },
    {
      id: 'ch9-q10',
      chapterId: 'p9',
      conceptId: 'tir',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 'High',
      question: 'পূর্ণ অভ্যন্তরীণ প্রতিফলনের জন্য কোন দুটি শর্ত প্রয়োজন?',
      options: [
        'লঘু থেকে ঘন এবং i < C',
        'ঘন থেকে লঘু এবং i > C',
        'ঘন থেকে লঘু এবং i < C',
        'শুধু i = C'
      ],
      answer: 'ঘন থেকে লঘু এবং i > C',
      solution: 'TIR-এর জন্য আলোকে denser থেকে rarer medium-এ যেতে হবে এবং incidence angle critical angle-এর বেশি হতে হবে।'
    },
    {
      id: 'ch9-q11',
      chapterId: 'p9',
      conceptId: 'optical-fibre',
      type: 'MCQ',
      source: 'Concept Practice',
      importance: 'Medium',
      question: 'Optical fibre প্রধানত কোন নীতির ওপর কাজ করে?',
      options: ['Diffraction', 'Interference', 'Total Internal Reflection', 'Dispersion'],
      answer: 'Total Internal Reflection',
      solution: 'Optical fibre-এর core-এর ভেতর আলো বারবার TIR করে এগিয়ে যায়।'
    },
    {
      id: 'ch9-q12',
      chapterId: 'p9',
      conceptId: 'mirage',
      type: 'Short',
      source: 'Concept Practice',
      importance: 'Medium',
      question: 'গরম রাস্তায় দূরে পানি দেখা যাওয়ার মতো মনে হয় কেন?',
      answer: 'মরীচিকার কারণে',
      solution: 'ভূমির কাছাকাছি উত্তপ্ত বায়ুর স্তরগুলোর optical properties পরিবর্তনের ফলে আলোর পথ বাঁকতে পারে এবং পানির মতো দৃশ্য তৈরি হয়।'
    }
  ],

  sourcesNote: 'এই অধ্যায়ের প্রশ্নগুলো Concept Practice হিসেবে দেওয়া হয়েছে। এগুলোকে verified board-question হিসেবে দাবি করা হচ্ছে না। প্রকৃত বিগত ৬ বছরের বোর্ড/স্কুল প্রশ্ন যুক্ত করার জন্য আলাদা verified question corpus প্রয়োজন।'
};
