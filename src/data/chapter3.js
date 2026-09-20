export const chapter3 = {
  id: "p3",
  no: 3,
  title: "বল",
  focus: "Force, effects of force, inertia, Newton's laws, momentum, conservation of momentum, friction and balanced/unbalanced forces",

  manual: [
    "বল কী এবং বলের বৈশিষ্ট্য বুঝতে হবে",
    "বলের বিভিন্ন প্রভাব উদাহরণসহ লিখতে হবে",
    "Force-এর vector nature ও SI unit জানতে হবে",
    "জড়তা কী এবং এটি ভরের সাথে কীভাবে সম্পর্কিত তা বুঝতে হবে",
    "স্থিতির জড়তা, গতির জড়তা ও দিকের জড়তা বুঝতে হবে",
    "নিউটনের প্রথম সূত্র ও inertia-এর সম্পর্ক ব্যাখ্যা করতে হবে",
    "Net force ও acceleration-এর সম্পর্ক বুঝতে হবে",
    "নিউটনের দ্বিতীয় সূত্র থেকে F = ma বুঝতে হবে",
    "নিউটনের তৃতীয় সূত্রের action-reaction pair চিহ্নিত করতে হবে",
    "ভরবেগ p = mv নির্ণয় করতে হবে",
    "ভরবেগের সংরক্ষণ সূত্র বুঝতে ও প্রয়োগ করতে হবে",
    "ঘর্ষণ বল কীভাবে motion-এর বিরোধিতা করে তা বুঝতে হবে",
    "Static, sliding ও rolling friction-এর পার্থক্য জানতে হবে",
    "ঘর্ষণের সুবিধা ও অসুবিধা বাস্তব উদাহরণসহ লিখতে হবে",
    "Balanced ও unbalanced force-এর পার্থক্য বুঝতে হবে",
    "Newton's laws ব্যবহার করে conceptual ও numerical problem সমাধান করতে হবে"
  ],

  concepts: [
    {
      id: "force",
      title: "বল (Force)",
      definition: "যে ভৌত রাশি কোনো বস্তুর স্থিতি বা গতির অবস্থা পরিবর্তন করতে পারে অথবা পরিবর্তনের চেষ্টা করে তাকে বল বলে।",
      simpleExplanation: "ধাক্কা বা টানকে সাধারণভাবে বল বলা যায়।",
      detailedExplanation: "Force একটি vector quantity। অর্থাৎ force-এর magnitude এবং direction দুটোই আছে। কোনো বস্তুর উপর force প্রয়োগ করলে তার velocity-এর মান বা direction পরিবর্তিত হতে পারে এবং কিছু ক্ষেত্রে বস্তুর shape-ও পরিবর্তিত হতে পারে। বলের SI unit হলো Newton (N)।",
      formula: "F = ma",
      units: "SI unit: Newton (N)\n1 N = 1 kg·m/s²",
      example: "5 kg ভরের একটি বস্তুকে 2 m/s² acceleration দিতে প্রয়োজনীয় force F = ma = 5 × 2 = 10 N।",
      realLifeExample: "দরজা খোলা, বলকে লাথি দেওয়া, গাড়িতে brake করা এবং কোনো বস্তু ঠেলে সরানো—সব ক্ষেত্রেই force কাজ করে।",
      examFocus: "বল-এর সংজ্ঞা, vector nature, SI unit এবং বিভিন্ন প্রভাব।",
      commonMistakes: "Force-কে scalar quantity মনে করা বা force-এর direction বাদ দেওয়া।",
      keyPoints: [
        "Force একটি vector quantity।",
        "SI unit Newton (N)।",
        "1 N = 1 kg·m/s²।",
        "Force motion বা shape পরিবর্তন করতে পারে।"
      ]
    },

    {
      id: "effects-force",
      title: "বলের প্রভাব (Effects of Force)",
      definition: "বল কোনো বস্তুর স্থিতি, গতি, গতির দিক বা আকার পরিবর্তন করতে পারে।",
      simpleExplanation: "বল দিলে বস্তু চলতে পারে, থামতে পারে, speed পরিবর্তন করতে পারে, direction পরিবর্তন করতে পারে বা shape বদলাতে পারে।",
      detailedExplanation: "একটি force কোনো স্থির বস্তুকে গতিশীল করতে পারে অথবা চলন্ত বস্তুকে থামাতে পারে। Force velocity-এর magnitude পরিবর্তন করে acceleration বা deceleration ঘটাতে পারে। Force-এর ফলে গতির direction পরিবর্তিত হতে পারে। আবার elastic বা deformable বস্তুতে force প্রয়োগ করলে তার shape ও size পরিবর্তিত হতে পারে। একাধিক force একসাথে কাজ করলে resultant বা net force-এর উপর motion-এর পরিবর্তন নির্ভর করে।",
      formula: "Net Force = Vector sum of all forces",
      units: "Newton (N)",
      example: "একটি moving ball-কে racket দিয়ে আঘাত করলে তার speed এবং direction দুটোই পরিবর্তিত হতে পারে।",
      realLifeExample: "স্প্রিং চাপ দিলে তার shape পরিবর্তিত হয়; bicycle brake করলে wheel-এর motion কমে যায়।",
      examFocus: "বলের প্রভাবগুলো আলাদা করে লিখে প্রতিটির উদাহরণ দিতে পারা।",
      commonMistakes: "বল শুধু বস্তুকে চলতে শুরু করায়—এমন ধারণা করা।",
      keyPoints: [
        "Force rest থেকে motion সৃষ্টি করতে পারে।",
        "Force motion কমাতে বা থামাতে পারে।",
        "Force direction পরিবর্তন করতে পারে।",
        "Force shape পরিবর্তন করতে পারে।",
        "Net force motion-এর পরিবর্তন নির্ধারণ করে।"
      ]
    },

    {
      id: "inertia",
      title: "জড়তা (Inertia)",
      definition: "কোনো বস্তু তার বর্তমান স্থিতি বা গতির অবস্থা পরিবর্তনে বাধা দেওয়ার যে ধর্ম প্রদর্শন করে তাকে জড়তা বলে।",
      simpleExplanation: "বস্তু তার বর্তমান অবস্থাই ধরে রাখতে চায়—এটাই inertia।",
      detailedExplanation: "Inertia কোনো force নয়; এটি বস্তুর একটি ধর্ম। বস্তুর mass যত বেশি, তার inertia তত বেশি। অর্থাৎ বেশি mass-এর বস্তুর motion state পরিবর্তন করা তুলনামূলকভাবে কঠিন। Inertia সাধারণত তিনভাবে আলোচনা করা হয়: inertia of rest, inertia of motion এবং inertia of direction।",
      formula: "Inertia ∝ Mass",
      units: "জড়তার আলাদা কোনো SI unit নেই।",
      example: "একটি ভারী ট্রাকের motion পরিবর্তন করা একটি হালকা খেলনা গাড়ির তুলনায় কঠিন।",
      realLifeExample: "গাড়িতে seat belt ব্যবহার করা inertia-এর প্রভাবের সাথে সম্পর্কিত।",
      examFocus: "জড়তার সংজ্ঞা, mass-এর সাথে সম্পর্ক এবং তিন প্রকার জড়তা।",
      commonMistakes: "জড়তাকে force বা acceleration মনে করা।",
      keyPoints: [
        "Inertia কোনো force নয়।",
        "Mass বাড়লে inertia বাড়ে।",
        "Inertia motion state পরিবর্তনকে বাধা দেয়।",
        "Rest, motion এবং direction—তিন ধরনের inertia আলোচনা করা হয়।"
      ]
    },

    {
      id: "inertia-rest",
      title: "স্থিতির জড়তা (Inertia of Rest)",
      definition: "স্থিতিশীল বস্তু তার স্থিতি বজায় রাখতে চাওয়ার ধর্মকে স্থিতির জড়তা বলে।",
      simpleExplanation: "স্থির বস্তু হঠাৎ নিজে থেকে চলতে চায় না।",
      detailedExplanation: "একটি স্থির বস্তু বাহ্যিক অসম বল না পাওয়া পর্যন্ত স্থির থাকতে চায়। বাস হঠাৎ চলা শুরু করলে বাসের যাত্রীর শরীরের নিচের অংশ বাসের সাথে চলতে শুরু করলেও উপরের অংশ কিছু সময় স্থির অবস্থায় থাকতে চায়। ফলে যাত্রী পিছনের দিকে হেলে পড়ে।",
      formula: "Inertia of rest ∝ Mass",
      units: "কোনো SI unit নেই।",
      example: "কার্পেট বা কম্বল জোরে ঝাড়লে ধুলো আলাদা হয়ে বেরিয়ে আসে।",
      realLifeExample: "বাস হঠাৎ চলা শুরু করলে যাত্রী পিছনে হেলে পড়ে।",
      examFocus: "স্থিতির জড়তার ২–৩টি দৈনন্দিন উদাহরণ লিখতে পারা।",
      commonMistakes: "যাত্রীর পিছনে হেলে পড়াকে সরাসরি কোনো নতুন force-এর ফল মনে করা।",
      keyPoints: [
        "স্থির বস্তু স্থির থাকতে চায়।",
        "বাস হঠাৎ চললে যাত্রী পিছনে হেলে পড়ে।",
        "কার্পেট ঝাড়লে ধুলো বের হওয়া স্থিতির জড়তার উদাহরণ।"
      ]
    },

    {
      id: "inertia-motion",
      title: "গতির জড়তা (Inertia of Motion)",
      definition: "গতিশীল বস্তু তার গতির অবস্থা বজায় রাখতে চাওয়ার ধর্মকে গতির জড়তা বলে।",
      simpleExplanation: "চলন্ত বস্তু চলতেই থাকতে চায়।",
      detailedExplanation: "একটি চলন্ত বস্তু তার motion state বজায় রাখতে চায়। চলন্ত বাস হঠাৎ brake করলে যাত্রীর শরীর সামনের দিকে এগিয়ে যেতে চায়। কারণ শরীর আগের motion বজায় রাখতে চায়। বাস্তবে friction ও অন্যান্য external force-এর কারণে বস্তু ধীরে ধীরে থামতে পারে।",
      formula: "Inertia of motion ∝ Mass",
      units: "কোনো SI unit নেই।",
      example: "চলন্ত বাস হঠাৎ থামলে যাত্রী সামনে ঝুঁকে পড়ে।",
      realLifeExample: "গাড়ির seat belt হঠাৎ brake করার সময় যাত্রীকে সামনে ছিটকে যাওয়া থেকে রক্ষা করতে সাহায্য করে।",
      examFocus: "গতির জড়তার উদাহরণ এবং seat belt-এর সাথে সম্পর্ক।",
      commonMistakes: "বাস থামার সাথে সাথে যাত্রীর শরীরও একই মুহূর্তে সম্পূর্ণ থেমে যাবে মনে করা।",
      keyPoints: [
        "চলন্ত বস্তু তার motion বজায় রাখতে চায়।",
        "হঠাৎ brake করলে যাত্রী সামনে ঝুঁকে পড়ে।",
        "Seat belt inertia-এর প্রভাব কমাতে সাহায্য করে।"
      ]
    },

    {
      id: "inertia-direction",
      title: "দিকের জড়তা (Inertia of Direction)",
      definition: "গতিশীল বস্তু তার গতির দিক বজায় রাখতে চাওয়ার ধর্মকে দিকের জড়তা বলে।",
      simpleExplanation: "চলন্ত বস্তু হঠাৎ নিজের গতির direction পরিবর্তন করতে চায় না।",
      detailedExplanation: "কোনো বস্তু একটি নির্দিষ্ট দিকে চলতে থাকলে external force ছাড়া তার direction পরিবর্তিত হয় না। গাড়ি হঠাৎ বাঁক নিলে যাত্রীর শরীর আগের সরল পথে চলতে চাওয়ার কারণে পাশের দিকে হেলে যেতে পারে।",
      formula: "Inertia of direction ∝ Mass",
      units: "কোনো SI unit নেই।",
      example: "বাস হঠাৎ বাঁ দিকে ঘুরলে যাত্রী ডান দিকে হেলে পড়তে পারে।",
      realLifeExample: "গাড়ি বা বাস দ্রুত বাঁক নিলে যাত্রীরা পাশের দিকে হেলে পড়ে।",
      examFocus: "দিকের জড়তার দৈনন্দিন উদাহরণ।",
      commonMistakes: "বাঁক নেওয়ার সময় যাত্রীর পাশের দিকে যাওয়াকে আলাদা driving force হিসেবে ধরা।",
      keyPoints: [
        "বস্তু তার গতির direction বজায় রাখতে চায়।",
        "গাড়ি বাঁক নিলে যাত্রী বিপরীত পাশে হেলে পড়তে পারে।",
        "Mass বেশি হলে inertia বেশি।"
      ]
    },

    {
      id: "newton-first",
      title: "নিউটনের প্রথম সূত্র",
      definition: "বাহ্যিক অসম বল প্রয়োগ না করলে স্থির বস্তু স্থির এবং গতিশীল বস্তু সরলরেখায় সমবেগে চলতে থাকে।",
      simpleExplanation: "Net external force zero হলে object তার বর্তমান motion state বজায় রাখে।",
      detailedExplanation: "Newton's first law-কে law of inertia বলা হয়। কোনো বস্তুর উপর resultant external force শূন্য হলে acceleration শূন্য হয়। ফলে বস্তুটি যদি আগে স্থির থাকে, স্থিরই থাকবে; আর আগে চলমান থাকলে একই velocity-তে সরলরেখায় চলতে থাকবে।",
      formula: "ΣF = 0 ⇒ a = 0",
      units: "Force: Newton (N)",
      example: "টেবিলের উপর রাখা বইয়ের উপর downward weight এবং upward normal force balance করলে বই স্থির থাকে।",
      realLifeExample: "Seat belt, sudden braking এবং table-এর উপর স্থির বই—Newton's first law বোঝাতে ব্যবহার করা যায়।",
      examFocus: "Newton's first law-এর statement, inertia-এর সাথে সম্পর্ক এবং ΣF = 0-এর অর্থ।",
      commonMistakes: "Net force zero মানেই বস্তু অবশ্যই স্থির—এমন ধারণা করা।",
      keyPoints: [
        "Net force zero হলে acceleration zero।",
        "বস্তু rest বা constant velocity-তে থাকতে পারে।",
        "এটি law of inertia নামেও পরিচিত।",
        "Zero net force মানে individual force-গুলো zero হওয়া নয়।"
      ]
    },

    {
      id: "newton-second",
      title: "নিউটনের দ্বিতীয় সূত্র",
      definition: "কোনো বস্তুর ভরবেগের পরিবর্তনের হার তার উপর প্রযুক্ত অসম বলের সমানুপাতিক এবং পরিবর্তনটি বলের দিকেই ঘটে।",
      simpleExplanation: "বস্তুর mass ও acceleration যত বেশি, প্রয়োজনীয় net force তত বেশি।",
      detailedExplanation: "Newton's second law force-এর quantitative relation দেয়। ধ্রুব mass-এর ক্ষেত্রে ভরবেগের পরিবর্তনের হার থেকে F = ma পাওয়া যায়। এই সূত্র ব্যবহার করে mass, acceleration অথবা force-এর যেকোনো একটি অজানা রাশি নির্ণয় করা যায়।",
      formula: "F = ma\nF = Net force",
      units: "N = kg·m/s²",
      example: "m = 5 kg এবং a = 2 m/s² হলে F = 5 × 2 = 10 N।",
      realLifeExample: "একই acceleration দিতে ভারী গাড়ির জন্য হালকা গাড়ির তুলনায় বেশি net force প্রয়োজন।",
      examFocus: "Newton's second law-এর statement, F = ma এবং numerical।",
      commonMistakes: "Mass-এর unit gram রেখে calculation করা অথবা net force-এর বদলে একটি arbitrary force বসানো।",
      keyPoints: [
        "F = ma।",
        "F হলো net/resultant force।",
        "Mass constant হলে force acceleration-এর সমানুপাতিক।",
        "SI unit Newton।",
        "1 N = 1 kg·m/s²।"
      ]
    },

    {
      id: "newton-third",
      title: "নিউটনের তৃতীয় সূত্র",
      definition: "প্রত্যেক ক্রিয়ার সমান ও বিপরীতমুখী প্রতিক্রিয়া আছে।",
      simpleExplanation: "একটি বস্তু অন্য বস্তুর উপর force দিলে দ্বিতীয় বস্তুটিও প্রথমটির উপর সমান মানের বিপরীতমুখী force দেয়।",
      detailedExplanation: "Action এবং reaction force একই interaction-এর অংশ এবং একই সময়ে সৃষ্টি হয়। তাদের magnitude সমান এবং direction বিপরীত। সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো action ও reaction দুটি ভিন্ন বস্তুর উপর কাজ করে। তাই তারা একই free-body diagram-এ পরস্পরকে simply cancel করে না।",
      formula: "F₁₂ = −F₂₁",
      units: "Newton (N)",
      example: "মানুষ মাটিকে পিছনের দিকে force দিলে মাটি মানুষকে সামনের দিকে সমান ও বিপরীত force দেয়।",
      realLifeExample: "হাঁটা, সাঁতার কাটা, নৌকা চালানো এবং rocket propulsion Newton's third law-এর উদাহরণ।",
      examFocus: "Action-reaction pair শনাক্ত করা এবং কেন তারা cancel করে না তা ব্যাখ্যা করা।",
      commonMistakes: "Action ও reaction একই বস্তুর উপর কাজ করে মনে করা।",
      keyPoints: [
        "Action ও reaction-এর magnitude সমান।",
        "তাদের direction বিপরীত।",
        "তারা একই সময়ে ঘটে।",
        "তারা ভিন্ন দুটি বস্তুর উপর কাজ করে।"
      ]
    },

    {
      id: "momentum",
      title: "ভরবেগ (Momentum)",
      definition: "কোনো বস্তুর ভর ও বেগের গুণফলকে ভরবেগ বলে।",
      simpleExplanation: "Mass এবং velocity একসাথে কোনো বস্তুর motion-এর পরিমাণ বোঝাতে momentum ব্যবহার করা হয়।",
      detailedExplanation: "Momentum একটি vector quantity। এর magnitude ভর এবং velocity-এর magnitude-এর গুণফল। Mass বা velocity বাড়লে momentum-এর magnitude বাড়ে। Velocity-এর direction পরিবর্তিত হলে momentum-এর direction-ও পরিবর্তিত হয়।",
      formula: "p = mv",
      units: "SI unit: kg·m/s",
      example: "m = 4 kg এবং v = 3 m/s হলে p = 4 × 3 = 12 kg·m/s।",
      realLifeExample: "একটি দ্রুতগতির ভারী ট্রাকের momentum বেশি হওয়ায় তাকে থামাতে বড় পরিবর্তন প্রয়োজন হয়।",
      examFocus: "p = mv, vector nature এবং unit।",
      commonMistakes: "Momentum-এর unit ভুল লেখা অথবা velocity-এর direction বাদ দেওয়া।",
      keyPoints: [
        "p = mv।",
        "Momentum vector quantity।",
        "SI unit kg·m/s।",
        "Momentum-এর direction velocity-এর direction-এর সাথে সম্পর্কিত।"
      ]
    },

    {
      id: "momentum-conservation",
      title: "ভরবেগের সংরক্ষণ সূত্র",
      definition: "বাহ্যিক অসম বলের প্রভাব না থাকলে কোনো বিচ্ছিন্ন system-এর মোট ভরবেগ অপরিবর্তিত থাকে।",
      simpleExplanation: "Collision-এর আগে total momentum = collision-এর পরে total momentum।",
      detailedExplanation: "দুটি বা ততোধিক বস্তুর interaction-এর ক্ষেত্রে system-এর উপর net external force শূন্য বা negligible হলে total momentum conserved থাকে। Collision, recoil এবং explosion-এর মতো সমস্যায় এই principle ব্যবহার করা যায়। Direction অনুযায়ী momentum-এর sign ঠিক রাখতে হয়।",
      formula: "Total initial momentum = Total final momentum\nΣp_initial = Σp_final",
      units: "kg·m/s",
      example: "দুটি বস্তুর collision-এর আগে system-এর total momentum 20 kg·m/s হলে external force negligible অবস্থায় collision-এর পরেও total momentum 20 kg·m/s থাকবে।",
      realLifeExample: "Billiard balls-এর collision এবং recoil-এর ঘটনা momentum conservation দিয়ে বিশ্লেষণ করা যায়।",
      examFocus: "Conservation equation তৈরি করা এবং collision-এর numerical solve করা।",
      commonMistakes: "External force গুরুত্বপূর্ণ থাকা অবস্থায় conservation law সরাসরি প্রয়োগ করা অথবা direction-এর sign ভুল করা।",
      keyPoints: [
        "Isolated system-এ total momentum constant।",
        "Initial momentum = final momentum।",
        "Collision ও recoil problem-এ গুরুত্বপূর্ণ।",
        "Direction অনুযায়ী positive/negative sign ব্যবহার করতে হবে।"
      ]
    },

    {
      id: "friction",
      title: "ঘর্ষণ বল (Friction)",
      definition: "দুটি সংস্পর্শে থাকা পৃষ্ঠের আপেক্ষিক গতি বা গতির প্রবণতাকে বাধা দেয় যে বল তাকে ঘর্ষণ বল বলে।",
      simpleExplanation: "দুটি surface-এর মধ্যে relative motion হলে friction সাধারণত সেই motion বা motion-এর tendency-এর বিপরীতে কাজ করে।",
      detailedExplanation: "Friction একটি contact force। Surface-এর প্রকৃতি, normal reaction এবং contact condition-এর উপর friction নির্ভর করে। Static friction motion শুরু হওয়ার আগে কাজ করে, আর sliding বা kinetic friction surface slide করার সময় কাজ করে।",
      formula: "Fᶠ = μN\n(প্রযোজ্য ক্ষেত্রে)",
      units: "Newton (N)",
      example: "মেঝের উপর একটি বাক্স ঠেললে বাক্সের relative sliding motion-এর বিপরীত দিকে friction কাজ করে।",
      realLifeExample: "হাঁটা, গাড়ির tyre-এর road grip, brake এবং লেখা—সবই friction-এর সাথে সম্পর্কিত।",
      examFocus: "Friction-এর সংজ্ঞা, কারণ, direction, সুবিধা ও অসুবিধা।",
      commonMistakes: "Friction সবসময় বস্তুর actual motion-এর বিপরীত দিকেই থাকবে মনে করা; আসলে relative motion বা tendency বিবেচনা করতে হয়।",
      keyPoints: [
        "Friction একটি contact force।",
        "Relative motion বা tendency-কে oppose করে।",
        "Friction-এর SI unit Newton।",
        "Surface ও normal reaction friction-এর সাথে সম্পর্কিত।"
      ]
    },

    {
      id: "friction-types",
      title: "ঘর্ষণের প্রকারভেদ",
      definition: "বস্তুর আপেক্ষিক অবস্থার উপর ভিত্তি করে friction-কে static, limiting, sliding এবং rolling friction-এ ভাগ করা যায়।",
      simpleExplanation: "বস্তু স্থির, slide বা roll করছে কিনা তার উপর friction-এর ধরন নির্ভর করে।",
      detailedExplanation: "Static friction স্থির contact-এ motion শুরু হওয়ার tendency-কে বাধা দেয় এবং প্রয়োজন অনুযায়ী পরিবর্তিত হতে পারে। Motion শুরু হওয়ার ঠিক আগের maximum static friction-কে limiting friction বলা হয়। Sliding বা kinetic friction surface slide করার সময় কাজ করে। Rolling friction rolling motion-এর ক্ষেত্রে কাজ করে এবং সাধারণ পরিস্থিতিতে sliding friction-এর তুলনায় কম হতে পারে।",
      formula: "F_static ≤ μsN\nF_kinetic = μkN",
      units: "Newton (N)",
      example: "একটি ভারী বাক্সকে ঠেলেও যদি সেটি না নড়ে, তখন static friction applied force-এর ভারসাম্য রাখতে পারে।",
      realLifeExample: "চাকা ব্যবহার করলে sliding-এর পরিবর্তে rolling হয়, ফলে friction-related resistance কমতে পারে।",
      examFocus: "Static, limiting, sliding ও rolling friction-এর পার্থক্য।",
      commonMistakes: "Static friction সবসময় maximum value ধরে নেওয়া অথবা rolling friction ও sliding friction গুলিয়ে ফেলা।",
      keyPoints: [
        "Static friction motion শুরু হওয়ার tendency-কে বাধা দেয়।",
        "Limiting friction হলো maximum static friction।",
        "Sliding friction sliding motion-এর সময় কাজ করে।",
        "Rolling friction rolling motion-এর সাথে সম্পর্কিত।"
      ]
    },

    {
      id: "friction-advantages",
      title: "ঘর্ষণের সুবিধা ও অসুবিধা",
      definition: "Friction দৈনন্দিন জীবনে প্রয়োজনীয় grip ও control প্রদান করে, তবে এটি energy loss ও wear সৃষ্টি করতে পারে।",
      simpleExplanation: "Friction না থাকলে হাঁটা বা গাড়ি চালানো কঠিন হতো; আবার অতিরিক্ত friction ক্ষয় ও তাপ সৃষ্টি করে।",
      detailedExplanation: "Friction-এর কারণে আমরা মাটির উপর হাঁটতে পারি, গাড়ির tyre road-এর সাথে grip পায় এবং brake কাজ করে। অন্যদিকে machine-এর moving parts-এর friction heat উৎপন্ন করে, parts ক্ষয় করে এবং mechanical energy-এর কিছু অংশ thermal energy-তে রূপান্তরিত করে।",
      formula: "Frictional force depends on contact conditions",
      units: "Newton (N)",
      example: "জুতা ও মাটির মধ্যে friction না থাকলে হাঁটার সময় পা পিছলে যেতে পারে।",
      realLifeExample: "Engine-এর moving parts-এ lubricant ব্যবহার করে unwanted friction কমানো হয়।",
      examFocus: "ঘর্ষণের অন্তত 3টি সুবিধা ও 3টি অসুবিধা।",
      commonMistakes: "Friction সবসময় ক্ষতিকর বা সবসময় উপকারী—একপাক্ষিকভাবে লেখা।",
      keyPoints: [
        "Friction হাঁটতে সাহায্য করে।",
        "Friction braking-এ প্রয়োজনীয়।",
        "Friction যন্ত্রের parts ক্ষয় করতে পারে।",
        "Friction heat ও energy loss সৃষ্টি করতে পারে।",
        "Lubrication unwanted friction কমাতে ব্যবহৃত হয়।"
      ]
    },

    {
      id: "balanced-force",
      title: "সাম্য বল ও অসাম্য বল",
      definition: "একাধিক বলের লব্ধি শূন্য হলে তাদের balanced forces এবং লব্ধি শূন্য না হলে unbalanced forces বলা হয়।",
      simpleExplanation: "সব force vectorially balance করলে net force zero হয়।",
      detailedExplanation: "Balanced forces-এর resultant zero হওয়ায় acceleration হয় না। বস্তু স্থির থাকতে পারে অথবা constant velocity-তে চলতে পারে। Unbalanced forces-এর resultant non-zero হলে Newton's second law অনুযায়ী acceleration সৃষ্টি হয়। Balanced forces থাকলেও individual forces শূন্য হওয়া প্রয়োজন নেই।",
      formula: "Balanced: ΣF = 0\nUnbalanced: ΣF ≠ 0",
      units: "Newton (N)",
      example: "টেবিলের উপর স্থির বইয়ের weight নিচের দিকে এবং normal force উপরের দিকে সমান হলে net force zero।",
      realLifeExample: "দুটি বিপরীত দিকে সমান force প্রয়োগ করলে কোনো বস্তুর net force zero হতে পারে।",
      examFocus: "Balanced ও unbalanced force-এর পার্থক্য এবং net force-এর সাথে সম্পর্ক।",
      commonMistakes: "Balanced force মানেই কোনো force নেই মনে করা।",
      keyPoints: [
        "Balanced forces-এর net force zero।",
        "Net force zero হলে acceleration zero।",
        "Balanced force থাকলেও individual forces থাকতে পারে।",
        "Unbalanced force acceleration সৃষ্টি করতে পারে।"
      ]
    }
  ],

  questions: [
    {
      id: "ch3-q01",
      conceptId: "force",
      type: "MCQ",
      question: "বল কোন ধরনের রাশি?",
      options: ["Scalar", "Vector", "Dimensionless", "Constant"],
      answer: "Vector",
      explanation: "Force-এর মান ও দিক দুটোই আছে।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch3-q02",
      conceptId: "inertia",
      type: "MCQ",
      question: "জড়তা কোন রাশির উপর নির্ভর করে?",
      options: ["Mass", "Temperature", "Volume only", "Time only"],
      answer: "Mass",
      explanation: "বস্তুর mass যত বেশি, inertia তত বেশি।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch3-q03",
      conceptId: "newton-first",
      type: "MCQ",
      question: "Newton's first law কোন ধারণার সাথে সম্পর্কিত?",
      options: ["Inertia", "Heat", "Pressure", "Electricity"],
      answer: "Inertia",
      explanation: "Newton's first law-কে law of inertia বলা হয়।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch3-q04",
      conceptId: "newton-second",
      type: "Numerical",
      question: "5 kg ভরের একটি বস্তুর acceleration 4 m/s² হলে force কত?",
      answer: "20 N",
      explanation: "F = ma = 5 × 4 = 20 N।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch3-q05",
      conceptId: "newton-third",
      type: "MCQ",
      question: "Action ও reaction force কেমন?",
      options: ["সমান ও বিপরীতমুখী", "অসমান ও একই দিকে", "শুধু সমান", "শুধু বিপরীত"],
      answer: "সমান ও বিপরীতমুখী",
      explanation: "Newton's third law অনুযায়ী action ও reaction equal and opposite।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch3-q06",
      conceptId: "momentum",
      type: "Numerical",
      question: "2 kg ভরের বস্তুর velocity 6 m/s হলে momentum কত?",
      answer: "12 kg·m/s",
      explanation: "p = mv = 2 × 6 = 12 kg·m/s।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch3-q07",
      conceptId: "momentum-conservation",
      type: "CQ",
      question: "ভরবেগ সংরক্ষণ সূত্রটি ব্যাখ্যা করো।",
      answer: "বাহ্যিক অসম বল না থাকলে কোনো isolated system-এর মোট ভরবেগ অপরিবর্তিত থাকে।",
      explanation: "Collision বা explosion-এর মতো interaction-এ এই সূত্র প্রয়োগ করা যায়।",
      difficulty: "Medium",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch3-q08",
      conceptId: "friction",
      type: "MCQ",
      question: "Friction সাধারণত কোন দিকে কাজ করে?",
      options: ["Relative motion-এর বিপরীতে", "সবসময় motion-এর দিকে", "উপরের দিকে", "নিচের দিকে"],
      answer: "Relative motion-এর বিপরীতে",
      explanation: "Friction relative motion বা তার tendency-কে oppose করে।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch3-q09",
      conceptId: "balanced-force",
      type: "MCQ",
      question: "Balanced forces-এর ক্ষেত্রে net force কত?",
      options: ["0", "1 N", "10 N", "অসীম"],
      answer: "0",
      explanation: "Balanced forces-এর resultant বা net force zero।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch3-q10",
      conceptId: "newton-second",
      type: "Numerical",
      question: "একটি 10 kg বস্তুর উপর 50 N force প্রয়োগ করা হলো। Acceleration কত?",
      answer: "5 m/s²",
      explanation: "a = F/m = 50/10 = 5 m/s²।",
      difficulty: "Medium",
      importance: 5,
      source: "Concept Practice"
    }
  ],

  sourcesNote: "এই chapter-এর প্রশ্নগুলো বর্তমানে Concept Practice হিসেবে দেওয়া হয়েছে। Verified Board/School প্রশ্ন পরে আলাদা source ও year tag সহ যুক্ত করা হবে।"
};
