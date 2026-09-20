export const chapter2 = {
  id: "p2",
  no: 2,
  title: "গতি",
  focus: "স্থিতি ও গতি, distance, displacement, speed, velocity, average speed, average velocity, acceleration, retardation, equations of motion এবং motion graphs",

  manual: [
    "স্থিতি ও গতি এবং reference point বুঝতে হবে",
    "স্থিতি ও গতি আপেক্ষিক—ব্যাখ্যা করতে পারা",
    "দূরত্ব ও সরণের পার্থক্য বুঝতে হবে",
    "Scalar ও vector quantity-এর পার্থক্য বুঝতে হবে",
    "দ্রুতি ও বেগের ধারণা ও সূত্র শিখতে হবে",
    "Average speed ও average velocity নির্ণয় করতে হবে",
    "Acceleration ও retardation বুঝতে হবে",
    "Acceleration-এর SI unit ও sign convention বুঝতে হবে",
    "সমবেগ ও অসমবেগের গতি ব্যাখ্যা করতে হবে",
    "গতির তিনটি সমীকরণ সঠিকভাবে প্রয়োগ করতে হবে",
    "প্রশ্নের data দেখে উপযুক্ত motion equation নির্বাচন করতে হবে",
    "Distance-time এবং velocity-time graph পড়তে হবে",
    "Graph-এর slope ও area-এর physical meaning বুঝতে হবে",
    "Board-style conceptual ও numerical problem সমাধান করতে হবে"
  ],

  concepts: [
    {
      id: "motion",
      title: "স্থিতি ও গতি (Rest and Motion)",
      definition: "সময়ের পরিবর্তনের সাথে কোনো বস্তুর অবস্থানের পরিবর্তন হলে তাকে গতি বলে। কোনো নির্দিষ্ট প্রসঙ্গের সাপেক্ষে অবস্থানের পরিবর্তন না হলে বস্তুটি স্থির অবস্থায় আছে।",
      simpleExplanation: "কোনো বস্তুর অবস্থান সময়ের সাথে বদলালে সেটি গতিশীল। অবস্থান না বদলালে সেটি স্থির।",
      detailedExplanation: "গতি ও স্থিতি আপেক্ষিক। কোনো বস্তুর গতি বা স্থিতি নির্ণয়ের জন্য একটি reference point বা প্রসঙ্গবিন্দু প্রয়োজন। যেমন, চলন্ত বাসের যাত্রী বাসের তুলনায় স্থির থাকতে পারে, কিন্তু রাস্তার গাছের তুলনায় সে গতিশীল। তাই একই বস্তু এক reference point-এর তুলনায় স্থির এবং অন্য reference point-এর তুলনায় গতিশীল হতে পারে।",
      formula: "অবস্থান পরিবর্তন = চূড়ান্ত অবস্থান − প্রাথমিক অবস্থান",
      units: "Position-এর SI unit: metre (m)",
      example: "একটি গাড়ি A স্থান থেকে B স্থানে গেলে গাড়িটির অবস্থান পরিবর্তিত হয়। তাই A-এর তুলনায় গাড়িটি গতিশীল।",
      realLifeExample: "চলন্ত বাস, চলন্ত ট্রেন, উড়ন্ত বিমান এবং লিফটের ওঠানামা।",
      examFocus: "স্থিতি ও গতি আপেক্ষিক কেন—উদাহরণসহ ব্যাখ্যা করতে পারা।",
      commonMistakes: "Reference point বিবেচনা না করে কোনো বস্তুকে সবসময় স্থির বা গতিশীল বলা।",
      keyPoints: [
        "গতি নির্ণয়ের জন্য reference point প্রয়োজন।",
        "স্থিতি ও গতি আপেক্ষিক।",
        "সময় ও অবস্থানের পরিবর্তন motion-এর মূল বিষয়।"
      ]
    },

    {
      id: "distance",
      title: "দূরত্ব (Distance)",
      definition: "কোনো বস্তু যে মোট পথ অতিক্রম করে তার দৈর্ঘ্যকে দূরত্ব বলে।",
      simpleExplanation: "বস্তুটি মোট যতটা পথ অতিক্রম করেছে সেটিই distance।",
      detailedExplanation: "Distance একটি scalar quantity। এর শুধু মান আছে, দিক নেই। বস্তুটি সোজা, বাঁকা বা বিভিন্ন পথে চললেও মোট অতিক্রান্ত পথের দৈর্ঘ্য distance হিসেবে গণনা করা হয়। Distance সবসময় শূন্য বা ধনাত্মক হয়; ঋণাত্মক হয় না।",
      formula: "Distance = মোট অতিক্রান্ত পথ",
      units: "SI unit: metre (m)",
      example: "একজন ছাত্র 3 m সামনে গিয়ে 2 m পিছনে এলে মোট distance = 3 + 2 = 5 m।",
      realLifeExample: "একটি গাড়ি বিভিন্ন রাস্তা দিয়ে মোট 20 km চললে তার travelled distance হলো 20 km।",
      examFocus: "Distance-এর সংজ্ঞা, SI unit, scalar nature এবং numerical problem।",
      commonMistakes: "Distance-কে displacement-এর সাথে গুলিয়ে ফেলা অথবা দিক ব্যবহার করা।",
      keyPoints: [
        "Distance scalar quantity।",
        "Distance-এর direction নেই।",
        "Distance কখনো negative হয় না।",
        "Distance হলো মোট অতিক্রান্ত পথ।"
      ]
    },

    {
      id: "displacement",
      title: "সরণ (Displacement)",
      definition: "কোনো বস্তুর প্রাথমিক অবস্থান থেকে চূড়ান্ত অবস্থানের দিকসহ সরলরেখার দূরত্বকে সরণ বলে।",
      simpleExplanation: "শুরু থেকে শেষ অবস্থান পর্যন্ত দিকসহ সবচেয়ে ছোট সরলরেখার পরিবর্তন হলো displacement।",
      detailedExplanation: "Displacement একটি vector quantity। তাই এর magnitude ও direction দুটোই থাকে। বস্তুটি চলার পথে অনেক distance অতিক্রম করলেও displacement শুধু initial এবং final position-এর উপর নির্ভর করে। বস্তু আবার শুরুর অবস্থানে ফিরে এলে displacement শূন্য হতে পারে।",
      formula: "Displacement = Final position − Initial position",
      units: "SI unit: metre (m)",
      example: "একজন ব্যক্তি 5 m পূর্বদিকে গিয়ে 2 m পশ্চিমে এলে displacement = 3 m পূর্বদিকে।",
      realLifeExample: "বাড়ি থেকে স্কুলে গিয়ে আবার বাড়িতে ফিরে এলে পুরো যাত্রার displacement শূন্য।",
      examFocus: "Distance ও displacement-এর পার্থক্য এবং displacement-এর direction নির্ণয়।",
      commonMistakes: "Displacement-কে মোট পথ মনে করা এবং direction বাদ দেওয়া।",
      keyPoints: [
        "Displacement vector quantity।",
        "Displacement-এর magnitude distance-এর চেয়ে বড় হতে পারে না।",
        "Displacement positive, negative বা zero হতে পারে।",
        "Distance ≥ magnitude of displacement।"
      ]
    },

    {
      id: "speed",
      title: "দ্রুতি (Speed)",
      definition: "একক সময়ে কোনো বস্তু যে দূরত্ব অতিক্রম করে তাকে দ্রুতি বলে।",
      simpleExplanation: "কোনো বস্তু কত দ্রুত পথ অতিক্রম করছে তা speed দিয়ে বোঝানো হয়।",
      detailedExplanation: "Speed একটি scalar quantity। নির্দিষ্ট সময়ে অতিক্রান্ত distance-এর ভিত্তিতে speed নির্ণয় করা হয়। Speed-এর শুধু magnitude থাকে, direction থাকে না।",
      formula: "Speed = Distance / Time",
      units: "SI unit: m/s; প্রচলিত unit: km/h",
      example: "একটি গাড়ি 100 m পথ 20 s-এ অতিক্রম করলে speed = 100/20 = 5 m/s।",
      realLifeExample: "গাড়ির speedometer গাড়ির তাৎক্ষণিক speed নির্দেশ করে।",
      examFocus: "v = s/t সূত্র, unit conversion এবং numerical problem।",
      commonMistakes: "Distance-এর বদলে displacement ব্যবহার করা এবং km/h ও m/s conversion ভুল করা।",
      keyPoints: [
        "Speed scalar quantity।",
        "Speed = distance/time।",
        "Speed-এর direction নেই।",
        "1 m/s = 3.6 km/h।",
        "1 km/h = 5/18 m/s।"
      ]
    },

    {
      id: "velocity",
      title: "বেগ (Velocity)",
      definition: "একক সময়ে কোনো বস্তুর সরণের হারকে বেগ বলে।",
      simpleExplanation: "কত দ্রুত এবং কোন দিকে বস্তুটি অবস্থান পরিবর্তন করছে সেটি velocity।",
      detailedExplanation: "Velocity একটি vector quantity। এটি displacement-এর পরিবর্তনের হার। একই speed থাকলেও direction পরিবর্তিত হলে velocity পরিবর্তিত হতে পারে। তাই velocity বোঝাতে magnitude-এর পাশাপাশি direction গুরুত্বপূর্ণ।",
      formula: "Velocity = Displacement / Time",
      units: "SI unit: m/s",
      example: "10 m পূর্বদিকে displacement 2 s-এ হলে velocity = 10/2 = 5 m/s পূর্বদিকে।",
      realLifeExample: "বাতাসের velocity বলতে বাতাসের গতির পাশাপাশি কোন দিকে প্রবাহিত হচ্ছে সেটিও বোঝায়।",
      examFocus: "Speed ও velocity-এর পার্থক্য এবং directionসহ velocity প্রকাশ।",
      commonMistakes: "Velocity-তে direction না লেখা অথবা distance ব্যবহার করা।",
      keyPoints: [
        "Velocity vector quantity।",
        "Velocity = displacement/time।",
        "Direction পরিবর্তিত হলে velocity পরিবর্তিত হয়।",
        "কোনো বস্তু starting point-এ ফিরে এলে average velocity zero হতে পারে।"
      ]
    },

    {
      id: "average-speed",
      title: "গড় দ্রুতি (Average Speed)",
      definition: "মোট অতিক্রান্ত দূরত্বকে মোট সময় দিয়ে ভাগ করলে গড় দ্রুতি পাওয়া যায়।",
      simpleExplanation: "পুরো যাত্রায় গড়ে প্রতি একক সময়ে কত distance অতিক্রম করেছে সেটিই average speed।",
      detailedExplanation: "যাত্রার বিভিন্ন অংশে speed ভিন্ন হতে পারে। তবুও পুরো যাত্রার average speed বের করতে total distance এবং total time ব্যবহার করতে হয়। শুধু বিভিন্ন speed-এর সাধারণ arithmetic average সবসময় সঠিক average speed দেয় না।",
      formula: "Average Speed = Total Distance / Total Time",
      units: "SI unit: m/s",
      example: "60 m পথ 10 s এবং 40 m পথ 10 s-এ গেলে total distance = 100 m, total time = 20 s। Average speed = 100/20 = 5 m/s।",
      realLifeExample: "একটি গাড়ির পুরো যাত্রার average speed বের করতে total travelled distance ও total travel time ব্যবহার করা হয়।",
      examFocus: "Total distance ও total time শনাক্ত করে numerical solve করা।",
      commonMistakes: "Speed-এর মানগুলোর সাধারণ average নিয়ে নেওয়া।",
      keyPoints: [
        "Average speed = total distance / total time।",
        "Average speed scalar quantity।",
        "Total distance ব্যবহার করতে হবে।"
      ]
    },

    {
      id: "average-velocity",
      title: "গড় বেগ (Average Velocity)",
      definition: "মোট সরণকে মোট সময় দিয়ে ভাগ করলে গড় বেগ পাওয়া যায়।",
      simpleExplanation: "পুরো সময়ের মধ্যে মোট displacement কত হয়েছে তার হার হলো average velocity।",
      detailedExplanation: "Average velocity একটি vector quantity। এটি total displacement-এর উপর নির্ভর করে, total distance-এর উপর নয়। কোনো ব্যক্তি বা বস্তু starting point-এ ফিরে এলে total displacement শূন্য এবং তাই average velocity-ও শূন্য হয়।",
      formula: "Average Velocity = Total Displacement / Total Time",
      units: "SI unit: m/s",
      example: "একজন ব্যক্তি 100 m পূর্বে গিয়ে 100 m পশ্চিমে ফিরে এলে total displacement = 0। তাই average velocity = 0।",
      realLifeExample: "একজন দৌড়বিদ একটি track ঘুরে আবার starting point-এ ফিরে এলে পুরো দৌড়ের average velocity শূন্য।",
      examFocus: "Average speed ও average velocity-এর পার্থক্য।",
      commonMistakes: "Total distance ব্যবহার করে average velocity নির্ণয় করা।",
      keyPoints: [
        "Average velocity displacement-এর উপর নির্ভর করে।",
        "Average velocity vector quantity।",
        "Starting point-এ ফিরে এলে average velocity zero হতে পারে।"
      ]
    },

    {
      id: "acceleration",
      title: "ত্বরণ (Acceleration)",
      definition: "একক সময়ে বেগের পরিবর্তনের হারকে ত্বরণ বলে।",
      simpleExplanation: "সময় অনুযায়ী velocity কত দ্রুত পরিবর্তিত হচ্ছে তা acceleration।",
      detailedExplanation: "Acceleration হলো velocity পরিবর্তনের হার। Velocity-এর magnitude অথবা direction পরিবর্তিত হলেই acceleration থাকতে পারে। তাই speed constant হলেও direction পরিবর্তনের কারণে acceleration থাকতে পারে।",
      formula: "a = (v − u) / t",
      units: "SI unit: m/s²",
      example: "Initial velocity u = 5 m/s, final velocity v = 15 m/s এবং time t = 2 s হলে a = (15−5)/2 = 5 m/s²।",
      realLifeExample: "একটি গাড়ি স্থির অবস্থা থেকে দ্রুত speed বাড়ালে গাড়িটির acceleration থাকে।",
      examFocus: "a = (v-u)/t এবং acceleration-এর numerical problem।",
      commonMistakes: "Acceleration-এর unit m/s লেখা অথবা initial ও final velocity উল্টো বসানো।",
      keyPoints: [
        "Acceleration velocity-এর পরিবর্তনের হার।",
        "Acceleration vector quantity।",
        "SI unit m/s²।",
        "Velocity পরিবর্তিত হলেই acceleration থাকতে পারে।"
      ]
    },

    {
      id: "retardation",
      title: "মন্দন (Retardation)",
      definition: "সময়ের সাথে কোনো বস্তুর বেগের মান কমার হারকে মন্দন বলে।",
      simpleExplanation: "কোনো বস্তুর speed কমতে থাকলে তার retardation থাকতে পারে।",
      detailedExplanation: "Retardation হলো velocity-এর magnitude কমার অবস্থা। নির্দিষ্ট sign convention-এ retardation-কে negative acceleration হিসেবেও প্রকাশ করা যায়। Numerical problem-এ retardation-এর magnitude সাধারণত (u-v)/t দিয়ে নির্ণয় করা হয় যখন u > v।",
      formula: "Retardation = (u − v) / t",
      units: "SI unit: m/s²",
      example: "একটি গাড়ির velocity 20 m/s থেকে 10 m/s-এ 5 s-এ কমলে retardation = (20−10)/5 = 2 m/s²।",
      realLifeExample: "গাড়িতে brake প্রয়োগ করলে গাড়ির velocity কমে এবং retardation হয়।",
      examFocus: "Acceleration ও retardation-এর পার্থক্য এবং numerical।",
      commonMistakes: "Retardation-এর unit m/s লেখা অথবা negative sign-এর অর্থ না বোঝা।",
      keyPoints: [
        "Retardation-এ velocity-এর magnitude কমে।",
        "Retardation-এর SI unit m/s²।",
        "Sign convention অনুযায়ী retardation negative acceleration হিসেবে প্রকাশিত হতে পারে।"
      ]
    },

    {
      id: "equations-motion",
      title: "গতির সমীকরণ (Equations of Motion)",
      definition: "সমত্বরণে চলমান বস্তুর initial velocity, final velocity, acceleration, time এবং displacement-এর পারস্পরিক সম্পর্ক প্রকাশকারী সমীকরণগুলোকে গতির সমীকরণ বলে।",
      simpleExplanation: "সমত্বরণে চলার সময় অজানা রাশি নির্ণয়ের জন্য motion equations ব্যবহার করা হয়।",
      detailedExplanation: "প্রধান তিনটি motion equation হলো v = u + at, s = ut + 1/2 at² এবং v² = u² + 2as। এখানে u হলো initial velocity, v হলো final velocity, a হলো acceleration, t হলো time এবং s হলো displacement। প্রশ্নে কোন রাশি দেওয়া ও কোনটি বের করতে হবে তা দেখে equation নির্বাচন করতে হয়।",
      formula: "v = u + at\ns = ut + 1/2 at²\nv² = u² + 2as",
      units: "u,v: m/s; a: m/s²; t: s; s: m",
      example: "একটি বস্তু স্থির অবস্থা থেকে u = 0, a = 2 m/s² সমত্বরণে 5 s চললে v = u+at = 0+(2×5) = 10 m/s।",
      realLifeExample: "স্থির অবস্থা থেকে একটি গাড়ি প্রায় সমত্বরণে চলার ক্ষেত্রে এই equations ব্যবহার করে velocity বা displacement হিসাব করা যায়।",
      examFocus: "তিনটি equation মুখস্থ করার পাশাপাশি কোন প্রশ্নে কোন equation ব্যবহার হবে তা বুঝতে হবে।",
      commonMistakes: "u, v, a, s, t-এর মান ভুল বসানো এবং sign convention না মানা।",
      keyPoints: [
        "Motion equations সমত্বরণের ক্ষেত্রে প্রযোজ্য।",
        "v = u + at",
        "s = ut + 1/2 at²",
        "v² = u² + 2as",
        "Question-এর given data দেখে formula নির্বাচন করতে হবে।",
        "Sign convention ঠিক রাখতে হবে।"
      ]
    },

    {
      id: "uniform-motion",
      title: "সমবেগ ও অসমবেগের গতি",
      definition: "সমান সময়ে সমান দূরত্ব অতিক্রম করলে সমদ্রুতি বা uniform speed-এর motion হয়। সময়ের সাথে speed পরিবর্তিত হলে motion অসমবেগের হয়।",
      simpleExplanation: "সমান সময়ের ব্যবধানে সমান distance অতিক্রম করলে uniform motion; speed পরিবর্তিত হলে non-uniform motion।",
      detailedExplanation: "Uniform motion-এ equal time interval-এ equal distance অতিক্রান্ত হয়। Non-uniform motion-এ equal time interval-এ অতিক্রান্ত distance সমান নাও হতে পারে। তবে velocity-এর ক্ষেত্রে direction-ও বিবেচনা করতে হয়। Direction পরিবর্তিত হলে speed constant থাকলেও velocity constant নাও থাকতে পারে।",
      formula: "Uniform speed: v = constant",
      units: "m/s",
      example: "একটি বস্তু প্রতি 1 s-এ 5 m করে অতিক্রম করলে তার speed uniform হতে পারে।",
      realLifeExample: "একটি conveyor belt নির্দিষ্ট constant speed-এ চললে সেটি uniform motion-এর কাছাকাছি উদাহরণ।",
      examFocus: "Uniform ও non-uniform motion-এর বৈশিষ্ট্য এবং graph-based identification।",
      commonMistakes: "Uniform motion মানেই সবসময় velocity constant ধরে নেওয়া।",
      keyPoints: [
        "Uniform motion-এ equal time-এ equal distance।",
        "Non-uniform motion-এ equal time-এ distance পরিবর্তিত হতে পারে।",
        "Direction পরিবর্তন হলে velocity constant থাকে না।"
      ]
    },

    {
      id: "motion-graph",
      title: "গতি লেখচিত্র (Motion Graph)",
      definition: "সময় এবং motion-related quantity যেমন distance, displacement বা velocity-এর মধ্যকার সম্পর্ক graph-এর মাধ্যমে প্রকাশ করলে তাকে motion graph বলা হয়।",
      simpleExplanation: "সময় অনুযায়ী কোনো বস্তুর distance, displacement বা velocity কীভাবে পরিবর্তিত হচ্ছে তা graph দিয়ে বোঝানো যায়।",
      detailedExplanation: "Distance-time graph-এর slope speed নির্দেশ করে। Displacement-time graph-এর slope velocity নির্দেশ করতে পারে। Velocity-time graph-এর slope acceleration নির্দেশ করে। আবার velocity-time graph-এর নিচের signed area displacement নির্দেশ করে। Graph বিশ্লেষণের সময় axis-এর quantity ও unit প্রথমে শনাক্ত করতে হবে।",
      formula: "Slope of distance-time graph = speed\nSlope of displacement-time graph = velocity\nSlope of velocity-time graph = acceleration\nArea under velocity-time graph = displacement",
      units: "Graph-এর slope বা area অনুযায়ী unit নির্ধারিত হয়।",
      example: "একটি velocity-time graph-এর slope 2 m/s² হলে acceleration = 2 m/s²।",
      realLifeExample: "Vehicle data logger-এর সাহায্যে গাড়ির velocity-time data সংগ্রহ করে motion graph তৈরি করা যায়।",
      examFocus: "Graph-এর slope, area, axis, unit এবং motion interpretation।",
      commonMistakes: "v-t graph-এর area-কে acceleration মনে করা বা slope ও area গুলিয়ে ফেলা।",
      keyPoints: [
        "Distance-time graph-এর slope = speed।",
        "Displacement-time graph-এর slope = velocity।",
        "Velocity-time graph-এর slope = acceleration।",
        "Velocity-time graph-এর signed area = displacement।",
        "Graph পড়ার আগে x-axis ও y-axis শনাক্ত করতে হবে।"
      ]
    }
  ],

  questions: [
    {
      id: "ch2-q01",
      conceptId: "motion",
      type: "MCQ",
      question: "গতি নির্ণয়ের জন্য কোনটি প্রয়োজন?",
      options: ["Reference point", "শুধু ভর", "শুধু বল", "শুধু তাপমাত্রা"],
      answer: "Reference point",
      explanation: "কোনো বস্তুর অবস্থান পরিবর্তন বোঝার জন্য reference point প্রয়োজন।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },

    {
      id: "ch2-q02",
      conceptId: "distance",
      type: "MCQ",
      question: "Distance কোন ধরনের রাশি?",
      options: ["Scalar", "Vector", "Tensor", "Dimensionless"],
      answer: "Scalar",
      explanation: "Distance-এর শুধু মান আছে, দিক নেই।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },

    {
      id: "ch2-q03",
      conceptId: "displacement",
      type: "MCQ",
      question: "Displacement কোন ধরনের রাশি?",
      options: ["Scalar", "Vector", "Dimensionless", "Constant"],
      answer: "Vector",
      explanation: "Displacement-এর মান ও দিক দুটোই থাকে।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },

    {
      id: "ch2-q04",
      conceptId: "speed",
      type: "Numerical",
      question: "একটি গাড়ি 200 m পথ 20 s-এ অতিক্রম করে। গাড়িটির speed কত?",
      answer: "10 m/s",
      explanation: "Speed = distance/time = 200/20 = 10 m/s।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },

    {
      id: "ch2-q05",
      conceptId: "velocity",
      type: "MCQ",
      question: "Velocity-এর ক্ষেত্রে কোন বিষয়টি অবশ্যই বিবেচনা করতে হয়?",
      options: ["Direction", "শুধু mass", "শুধু temperature", "শুধু volume"],
      answer: "Direction",
      explanation: "Velocity একটি vector quantity, তাই direction প্রয়োজন।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },

    {
      id: "ch2-q06",
      conceptId: "acceleration",
      type: "Numerical",
      question: "একটি বস্তুর velocity 10 m/s থেকে 30 m/s হয় 5 s-এ। Acceleration নির্ণয় করো।",
      answer: "4 m/s²",
      explanation: "a = (v-u)/t = (30-10)/5 = 4 m/s²।",
      difficulty: "Medium",
      importance: 5,
      source: "Concept Practice"
    },

    {
      id: "ch2-q07",
      conceptId: "retardation",
      type: "Numerical",
      question: "একটি গাড়ির velocity 20 m/s থেকে 5 m/s-এ 3 s-এ কমে। Retardation কত?",
      answer: "5 m/s²",
      explanation: "Retardation = (20-5)/3 = 5 m/s²।",
      difficulty: "Medium",
      importance: 4,
      source: "Concept Practice"
    },

    {
      id: "ch2-q08",
      conceptId: "equations-motion",
      type: "Numerical",
      question: "একটি বস্তু স্থির অবস্থা থেকে 2 m/s² সমত্বরণে 5 s চলে। Final velocity কত?",
      answer: "10 m/s",
      explanation: "v = u+at = 0+(2×5)=10 m/s।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },

    {
      id: "ch2-q09",
      conceptId: "average-speed",
      type: "Numerical",
      question: "একটি বস্তু মোট 150 m পথ 30 s-এ অতিক্রম করে। Average speed কত?",
      answer: "5 m/s",
      explanation: "Average speed = total distance/total time = 150/30 = 5 m/s।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },

    {
      id: "ch2-q10",
      conceptId: "motion-graph",
      type: "MCQ",
      question: "Velocity-time graph-এর slope কী নির্দেশ করে?",
      options: ["Acceleration", "Distance", "Mass", "Force"],
      answer: "Acceleration",
      explanation: "v-t graph-এর slope = change in velocity/time = acceleration।",
      difficulty: "Medium",
      importance: 5,
      source: "Concept Practice"
    }
  ],

  sourcesNote: "এই chapter-এর প্রশ্নগুলো বর্তমানে Concept Practice হিসেবে দেওয়া হয়েছে। Verified Board/School প্রশ্ন পরে আলাদা source ও year tag সহ যুক্ত করা হবে।"
};
