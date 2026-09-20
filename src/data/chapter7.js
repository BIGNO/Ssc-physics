export const chapter7 = {
  id: "p7",
  no: 7,
  title: "তরঙ্গ ও শব্দ",
  focus: "Wave motion, types of waves, wavelength, frequency, velocity, sound, echo and applications",

  manual: [
    "তরঙ্গের সংজ্ঞা ও মূল ধারণা নিজের ভাষায় বলতে হবে",
    "তরঙ্গ শক্তি বহন করে কিন্তু মাধ্যমের কণার স্থায়ী স্থানান্তর সাধারণত করে না—এটি বুঝতে হবে",
    "Mechanical ও electromagnetic wave-এর মৌলিক পার্থক্য জানতে হবে",
    "Transverse ও longitudinal wave-এর পার্থক্য ব্যাখ্যা করতে হবে",
    "Crest, trough, compression ও rarefaction শনাক্ত করতে হবে",
    "Amplitude, wavelength, frequency ও time period-এর সংজ্ঞা ও unit জানতে হবে",
    "Frequency ও time period-এর reciprocal relation ব্যবহার করতে হবে",
    "v = fλ সূত্র দিয়ে wave numerical solve করতে হবে",
    "শব্দের উৎপত্তি ও medium-এর প্রয়োজনীয়তা ব্যাখ্যা করতে হবে",
    "Pitch, loudness ও quality/timbre-এর পার্থক্য বুঝতে হবে",
    "Sound-এর audible, infrasonic ও ultrasonic range জানতে হবে",
    "Ultrasonic sound-এর ব্যবহার লিখতে হবে",
    "Echo ও reverberation-এর পার্থক্য ব্যাখ্যা করতে হবে",
    "Echo numerical-এ d = vt/2 ব্যবহার করতে হবে",
    "Sound-এর speed medium-এর উপর নির্ভর করতে পারে—এটি বুঝতে হবে",
    "Real-life examples দিয়ে wave ও sound concepts ব্যাখ্যা করতে হবে",
    "Formula numerical-এ SI unit ঠিক রাখতে হবে",
    "Given data → formula → substitution → answer → unit ধাপে numerical solve করতে হবে",
    "MCQ-তে frequency, amplitude, wavelength ও time period-এর সম্পর্ক চিনতে হবে",
    "Board-style conceptual ও numerical প্রশ্ন সমাধান করতে হবে"
  ],

  concepts: [

    {
      id: "wave",
      title: "তরঙ্গ",
      definition: "যে প্রক্রিয়ায় কোনো মাধ্যমের কণার স্থায়ী স্থানান্তর ছাড়াই শক্তি এক স্থান থেকে অন্য স্থানে সঞ্চালিত হয় তাকে তরঙ্গ বলে।",
      simpleExplanation: "Wave শক্তি বহন করে, কিন্তু মাধ্যমের কণাগুলো সাধারণত স্থায়ীভাবে এক জায়গা থেকে অন্য জায়গায় যায় না।",
      detailedExplanation: "তরঙ্গের মাধ্যমে এক স্থান থেকে অন্য স্থানে energy transfer হয়। Mechanical wave-এর ক্ষেত্রে মাধ্যমের কণাগুলো equilibrium position-এর আশেপাশে oscillate করে এবং পাশের কণায় disturbance transfer করে। ফলে wave এগিয়ে যায়, কিন্তু কণাগুলোর স্থায়ী bulk displacement সাধারণত ঘটে না।",
      formula: "v = fλ",
      units: "Wave speed → m/s",
      example: "পানির উপর ঢেউ একটি wave-এর উদাহরণ।",
      realLifeExample: "সমুদ্রের ঢেউ, শব্দ এবং radio wave।",
      examFocus: "Wave definition",
      commonMistakes: "তরঙ্গের সাথে পদার্থের স্থায়ী স্থানান্তরকে একই মনে করা",
      keyPoints: [
        "তরঙ্গ শক্তি সঞ্চালন করে",
        "Energy transfer হয়",
        "Wave-এর বিভিন্ন ধরনের motion থাকতে পারে"
      ]
    },

    {
      id: "mechanical-wave",
      title: "যান্ত্রিক তরঙ্গ",
      definition: "যে তরঙ্গ সঞ্চালনের জন্য বস্তুগত মাধ্যম প্রয়োজন তাকে যান্ত্রিক তরঙ্গ বলে।",
      simpleExplanation: "Mechanical wave vacuum-এ চলতে পারে না।",
      detailedExplanation: "Mechanical wave-এর propagation-এর জন্য material medium প্রয়োজন। Solid, liquid বা gas-এর কণার interaction-এর মাধ্যমে disturbance transfer হয়। তাই mechanical wave vacuum-এ propagate করতে পারে না। Sound একটি গুরুত্বপূর্ণ mechanical wave।",
      formula: "v = fλ",
      units: "m/s",
      example: "Sound wave",
      realLifeExample: "বাতাসের মাধ্যমে মানুষের কানে শব্দ পৌঁছানো।",
      examFocus: "Mechanical বনাম electromagnetic wave",
      commonMistakes: "Sound vacuum-এ চলে বলা",
      keyPoints: [
        "Medium প্রয়োজন",
        "Vacuum-এ চলে না",
        "Sound একটি mechanical wave"
      ]
    },

    {
      id: "transverse-wave",
      title: "অনুপ্রস্থ তরঙ্গ",
      definition: "যে তরঙ্গে মাধ্যমের কণার কম্পনের দিক তরঙ্গ সঞ্চালনের দিকের লম্ব হয় তাকে transverse wave বলে।",
      simpleExplanation: "Wave সামনে যায়, কিন্তু particles উপর-নিচে vibrate করে।",
      detailedExplanation: "Transverse wave-এ medium-এর particle vibration wave propagation-এর দিকের লম্ব হয়। এ ধরনের wave-এ সাধারণত crest ও trough দেখা যায়। একটি পূর্ণ wavelength পরপর দুটি একই phase-এর point-এর মধ্যে দূরত্বকে নির্দেশ করে।",
      formula: "v = fλ",
      units: "m/s",
      example: "দড়িতে সৃষ্ট transverse wave",
      realLifeExample: "দড়ি নাড়ালে transverse wave দেখা যায়।",
      examFocus: "Crest ও trough",
      commonMistakes: "Compression ও rarefaction-কে transverse wave-এর অংশ বলা",
      keyPoints: [
        "Particle vibration ⟂ wave direction",
        "Crest থাকে",
        "Trough থাকে"
      ]
    },

    {
      id: "longitudinal-wave",
      title: "অনুদৈর্ঘ্য তরঙ্গ",
      definition: "যে তরঙ্গে মাধ্যমের কণার কম্পনের দিক তরঙ্গ সঞ্চালনের দিকের সমান্তরাল তাকে longitudinal wave বলে।",
      simpleExplanation: "Particles সামনে-পেছনে vibrate করে।",
      detailedExplanation: "Longitudinal wave-এ particle vibration wave propagation-এর দিকের সমান্তরাল হয়। ফলে particle-গুলোর ঘন ও কম ঘন অঞ্চল তৈরি হয়—এগুলোকে compression ও rarefaction বলা হয়। বায়ুতে sound wave সাধারণত longitudinal mechanical wave হিসেবে propagate করে।",
      formula: "v = fλ",
      units: "m/s",
      example: "বাতাসে sound wave",
      realLifeExample: "স্পিকারের সামনে বাতাসের compression ও rarefaction।",
      examFocus: "Compression ও rarefaction",
      commonMistakes: "Crest/trough দিয়ে longitudinal wave ব্যাখ্যা করা",
      keyPoints: [
        "Particle vibration ∥ wave direction",
        "Compression থাকে",
        "Rarefaction থাকে"
      ]
    },

    {
      id: "amplitude",
      title: "Amplitude",
      definition: "কম্পনশীল কণার equilibrium position থেকে সর্বোচ্চ সরণকে amplitude বলে।",
      simpleExplanation: "Wave কতটা বড় তা amplitude দিয়ে বোঝানো যায়।",
      detailedExplanation: "Amplitude হলো equilibrium position থেকে particle-এর maximum displacement। এটি wave-এর vibration-এর magnitude নির্দেশ করে। Sound-এর ক্ষেত্রে amplitude বৃদ্ধি পেলে সাধারণত sound বেশি loud শোনা যায়।",
      formula: "A = maximum displacement",
      units: "m",
      example: "দড়ির wave-এর maximum displacement 0.02 m হলে amplitude = 0.02 m।",
      realLifeExample: "জোরে কথা বললে sound wave-এর amplitude বেশি হয়।",
      examFocus: "Definition ও unit",
      commonMistakes: "পুরো wavelength-কে amplitude বলা",
      keyPoints: [
        "Maximum displacement",
        "Unit = metre",
        "Loudness-এর সাথে সম্পর্কিত"
      ]
    },

    {
      id: "wavelength",
      title: "তরঙ্গদৈর্ঘ্য",
      definition: "পরপর দুটি একই দশার বিন্দুর মধ্যবর্তী দূরত্বকে wavelength বলে।",
      simpleExplanation: "দুটি consecutive crest বা দুটি consecutive trough-এর দূরত্ব হলো wavelength।",
      detailedExplanation: "Wavelength λ দ্বারা প্রকাশ করা হয়। এটি একই phase-এ থাকা পরপর দুটি point-এর মধ্যবর্তী distance। Transverse wave-এ consecutive crest-to-crest বা trough-to-trough distance wavelength; longitudinal wave-এ consecutive compression-to-compression বা rarefaction-to-rarefaction distance wavelength।",
      formula: "λ = v/f",
      units: "m",
      example: "পরপর দুটি crest-এর দূরত্ব 2 m হলে wavelength = 2 m।",
      realLifeExample: "Radio wave-এর wavelength নির্ধারণে এই quantity ব্যবহৃত হয়।",
      examFocus: "λ calculation",
      commonMistakes: "Crest থেকে trough-এর দূরত্বকে wavelength বলা",
      keyPoints: [
        "Symbol = λ",
        "Unit = metre",
        "Crest-to-crest = wavelength"
      ]
    },

    {
      id: "frequency",
      title: "কম্পাঙ্ক",
      definition: "এক সেকেন্ডে সম্পন্ন কম্পনের সংখ্যাকে frequency বা কম্পাঙ্ক বলে।",
      simpleExplanation: "এক সেকেন্ডে কতবার vibration হচ্ছে সেটাই frequency।",
      detailedExplanation: "Frequency f দ্বারা প্রকাশ করা হয় এবং এটি প্রতি second-এ সম্পন্ন oscillation-এর সংখ্যা। এর SI unit Hertz (Hz)। Frequency বেশি হলে একই সময়ে বেশি oscillation সম্পন্ন হয়।",
      formula: "f = 1/T",
      units: "Hertz (Hz)",
      example: "এক সেকেন্ডে 50টি vibration হলে frequency = 50 Hz।",
      realLifeExample: "মানুষের audible sound-এর frequency range প্রায় 20 Hz থেকে 20 kHz।",
      examFocus: "Frequency numerical",
      commonMistakes: "Frequency-এর unit second বলা",
      keyPoints: [
        "f = number of oscillations per second",
        "Unit = Hz",
        "f = 1/T"
      ]
    },

    {
      id: "time-period",
      title: "পর্যায়কাল",
      definition: "একটি পূর্ণ কম্পন সম্পন্ন করতে যে সময় লাগে তাকে time period বলে।",
      simpleExplanation: "একবার complete vibration করতে যত সময় লাগে সেটাই T।",
      detailedExplanation: "Time period T হলো একটি complete oscillation সম্পন্ন করতে প্রয়োজনীয় সময়। এটি frequency-এর reciprocal: T = 1/f। তাই frequency বাড়লে time period কমে এবং frequency কমলে time period বাড়ে।",
      formula: "T = 1/f",
      units: "second (s)",
      example: "f = 5 Hz হলে T = 1/5 = 0.2 s।",
      realLifeExample: "Pendulum-এর oscillation analysis-এ time period ব্যবহৃত হয়।",
      examFocus: "T এবং f relation",
      commonMistakes: "T = f লেখা",
      keyPoints: [
        "T = 1/f",
        "Unit = second",
        "Frequency বাড়লে period কমে"
      ]
    },

    {
      id: "wave-speed",
      title: "তরঙ্গের বেগ",
      definition: "তরঙ্গ এক সেকেন্ডে যে দূরত্ব অতিক্রম করে তাকে wave speed বলে।",
      simpleExplanation: "Wave কত দ্রুত ছড়ায় তা wave speed দিয়ে বোঝায়।",
      detailedExplanation: "একটি wave এক period T সময়ে একটি wavelength λ distance অতিক্রম করে। তাই v = λ/T। যেহেতু f = 1/T, তাই v = fλ। Numerical-এ wavelength metre এবং frequency hertz হলে speed m/s পাওয়া যায়।",
      formula: "v = fλ",
      units: "m/s",
      example: "f = 10 Hz এবং λ = 2 m হলে v = 20 m/s।",
      realLifeExample: "Sound-এর speed বিভিন্ন medium-এ ভিন্ন।",
      examFocus: "v = fλ numerical",
      commonMistakes: "v = f/λ ব্যবহার করা",
      keyPoints: [
        "v = fλ",
        "Unit = m/s",
        "Medium পরিবর্তন হলে speed পরিবর্তিত হতে পারে"
      ]
    },

    {
      id: "sound-production",
      title: "শব্দের উৎপত্তি",
      definition: "কম্পনশীল বস্তুর কারণে যে mechanical disturbance সৃষ্টি হয় এবং শ্রবণযোগ্য sensation তৈরি করে তাকে শব্দ বলে।",
      simpleExplanation: "কোনো বস্তু vibrate করলে sound তৈরি হতে পারে।",
      detailedExplanation: "একটি vibrating source তার আশেপাশের medium-এর কণাগুলোকে oscillate করায়। এই disturbance successive particles-এর মাধ্যমে ছড়িয়ে পড়ে এবং energy transfer করে। Sound propagation-এর জন্য medium প্রয়োজন, তাই vacuum-এ সাধারণ sound travel করতে পারে না।",
      formula: "v = fλ",
      units: "Sound speed → m/s",
      example: "Guitar string vibrate করলে sound তৈরি হয়।",
      realLifeExample: "মানুষের vocal cord vibration থেকে voice তৈরি হয়।",
      examFocus: "Sound production",
      commonMistakes: "শব্দ নিজে একটি বস্তু মনে করা",
      keyPoints: [
        "Vibration produces sound",
        "Sound needs medium",
        "Sound is mechanical"
      ]
    },

    {
      id: "pitch",
      title: "Pitch",
      definition: "শব্দ কতটা চিকন বা মোটা শোনায় তার অনুভূত বৈশিষ্ট্যকে pitch বলে।",
      simpleExplanation: "High frequency → high pitch; low frequency → low pitch।",
      detailedExplanation: "Pitch হলো sound কতটা high বা low শোনায় তার perceptual characteristic। এটি প্রধানত frequency-এর উপর নির্ভর করে। Frequency বেশি হলে pitch high এবং frequency কম হলে pitch low হয়। Pitch ও loudness একই বিষয় নয়।",
      formula: "Pitch ∝ frequency",
      units: "Frequency → Hz",
      example: "মেয়েদের/শিশুদের কণ্ঠ সাধারণত বেশি pitch-এর হতে পারে।",
      realLifeExample: "সাইরেনের উচ্চ pitch।",
      examFocus: "Pitch vs frequency",
      commonMistakes: "Pitch-কে loudness-এর সাথে গুলিয়ে ফেলা",
      keyPoints: [
        "Pitch depends on frequency",
        "High f → high pitch",
        "Low f → low pitch"
      ]
    },

    {
      id: "loudness",
      title: "Loudness",
      definition: "শব্দ কত জোরে বা ক্ষীণ শোনা যায় তার অনুভূত বৈশিষ্ট্যকে loudness বলে।",
      simpleExplanation: "Amplitude বাড়লে sound সাধারণত বেশি loud শোনা যায়।",
      detailedExplanation: "Loudness হলো sound কত জোরে বা ক্ষীণ শোনা যায় তার perceptual characteristic। এটি sound intensity এবং amplitude-এর সাথে সম্পর্কিত। একই frequency-এর sound-এর amplitude পরিবর্তন করলে loudness পরিবর্তিত হতে পারে।",
      formula: "Loudness ∝ A² (conceptually)",
      units: "Sound level → decibel (dB)",
      example: "Speaker-এর volume বাড়ালে sound louder হয়।",
      realLifeExample: "Concert-এর speaker থেকে high-amplitude sound।",
      examFocus: "Pitch বনাম loudness",
      commonMistakes: "Frequency বাড়লেই loudness বাড়ে বলা",
      keyPoints: [
        "Loudness relates to amplitude",
        "Sound level often measured in dB",
        "Pitch relates to frequency"
      ]
    },

    {
      id: "quality",
      title: "শব্দের Quality",
      definition: "একই pitch ও loudness-এর শব্দকে আলাদা করে চেনার বৈশিষ্ট্যকে quality বা timbre বলে।",
      simpleExplanation: "একই note হলেও guitar আর piano-এর sound আলাদা শোনায় quality-এর কারণে।",
      detailedExplanation: "Quality বা timbre একই pitch ও loudness থাকা সত্ত্বেও বিভিন্ন sound source-এর শব্দকে আলাদা করে চিনতে সাহায্য করে। Waveform ও harmonic content-এর পার্থক্য quality-এর অন্যতম কারণ।",
      formula: "প্রযোজ্য নয়",
      units: "প্রযোজ্য নয়",
      example: "একই note guitar ও flute-এ আলাদা শোনায়।",
      realLifeExample: "মানুষের voice চিনতে quality সাহায্য করে।",
      examFocus: "Three characteristics of sound",
      commonMistakes: "Quality = loudness বলা",
      keyPoints: [
        "Quality/timbre source identify করতে সাহায্য করে",
        "Waveform-এর সাথে সম্পর্কিত"
      ]
    },

    {
      id: "audible-sound",
      title: "শ্রাব্য শব্দ",
      definition: "মানুষের কানে সাধারণত 20 Hz থেকে 20,000 Hz frequency-এর শব্দ শ্রাব্য।",
      simpleExplanation: "এই range-এর sound সাধারণত মানুষ শুনতে পারে।",
      detailedExplanation: "মানুষের স্বাভাবিক hearing range সাধারণভাবে প্রায় 20 Hz থেকে 20 kHz ধরা হয়। এর নিচের frequency-কে infrasonic এবং এর উপরের frequency-কে ultrasonic বলা হয়। Individual hearing range বয়স ও ব্যক্তিভেদে কিছুটা পরিবর্তিত হতে পারে।",
      formula: "20 Hz ≤ f ≤ 20 kHz",
      units: "Hz",
      example: "1000 Hz sound মানুষের শ্রবণযোগ্য।",
      realLifeExample: "মানুষের speech audible range-এর মধ্যে পড়ে।",
      examFocus: "Audible range",
      commonMistakes: "20 kHz-কে 20 Hz লেখা",
      keyPoints: [
        "Approximately 20 Hz–20 kHz",
        "Human hearing range"
      ]
    },

    {
      id: "ultrasonic",
      title: "Ultrasonic Sound",
      definition: "20 kHz-এর বেশি frequency-এর শব্দকে ultrasonic sound বলে।",
      simpleExplanation: "মানুষ সাধারণত ultrasonic sound শুনতে পারে না।",
      detailedExplanation: "Ultrasonic sound মানুষের স্বাভাবিক শ্রবণসীমার উপরে। এটি medical imaging/ultrasonography, কিছু industrial cleaning এবং non-destructive testing-এর মতো কাজে ব্যবহৃত হয়।",
      formula: "f > 20 kHz",
      units: "Hz",
      example: "25 kHz sound ultrasonic।",
      realLifeExample: "Ultrasonography-তে ultrasound ব্যবহৃত হয়।",
      examFocus: "Applications",
      commonMistakes: "Ultrasonic-এর frequency 20 Hz-এর নিচে বলা",
      keyPoints: [
        "f > 20 kHz",
        "Human ear cannot normally hear it",
        "Medical ও industrial applications"
      ]
    },

    {
      id: "infrasonic",
      title: "Infrasonic Sound",
      definition: "20 Hz-এর কম frequency-এর শব্দকে infrasonic sound বলে।",
      simpleExplanation: "মানুষ সাধারণত এই low-frequency sound শুনতে পারে না।",
      detailedExplanation: "Infrasonic sound-এর frequency মানুষের সাধারণ hearing range-এর নিচে। Natural events এবং কিছু large-scale phenomena থেকে low-frequency sound বা pressure waves তৈরি হতে পারে। কিছু প্রাণী এ ধরনের low-frequency signals detect করতে সক্ষম।",
      formula: "f < 20 Hz",
      units: "Hz",
      example: "10 Hz sound infrasonic।",
      realLifeExample: "ভূমিকম্প বা বড় বিস্ফোরণ থেকে low-frequency waves তৈরি হতে পারে।",
      examFocus: "Infrasonic vs ultrasonic",
      commonMistakes: "Infrasonic ও ultrasonic উল্টে ফেলা",
      keyPoints: [
        "f < 20 Hz",
        "Low frequency",
        "Human hearing-এর নিচে"
      ]
    },

    {
      id: "echo",
      title: "প্রতিধ্বনি (Echo)",
      definition: "কোনো শব্দ বাধায় প্রতিফলিত হয়ে কিছু সময় পরে আলাদাভাবে আবার শোনা গেলে তাকে echo বলে।",
      simpleExplanation: "শব্দ দেয়ালে গিয়ে ফিরে এলে কিছুক্ষণ পরে একই শব্দ আবার শোনা যায়।",
      detailedExplanation: "কোনো reflecting surface-এ sound wave গিয়ে প্রতিফলিত হয়ে পর্যাপ্ত time delay-এর পরে শ্রোতার কাছে ফিরে এলে আলাদা sound হিসেবে echo শোনা যায়। Sound source ও reflecting surface-এর দূরত্ব d হলে sound-কে surface পর্যন্ত গিয়ে আবার ফিরে আসতে হয়; তাই d = vt/2।",
      formula: "d = vt/2",
      units: "Distance → m",
      example: "Sound speed 340 m/s এবং echo time 0.2 s হলে d = 34 m।",
      realLifeExample: "পাহাড়ি এলাকায় চিৎকার করলে echo শোনা যায়।",
      examFocus: "Echo numerical",
      commonMistakes: "d = vt ব্যবহার করে factor 2 বাদ দেওয়া",
      keyPoints: [
        "Reflection of sound",
        "d = vt/2",
        "Reflecting surface প্রয়োজন"
      ]
    },

    {
      id: "reverberation",
      title: "Reverberation",
      definition: "একটি বড় কক্ষে শব্দ বারবার প্রতিফলিত হয়ে কিছু সময় স্থায়ীভাবে শোনা যাওয়াকে reverberation বলে।",
      simpleExplanation: "Hall-এ sound বারবার reflect হয়ে কিছুক্ষণ থেকে যায়।",
      detailedExplanation: "একটি enclosed space-এ sound বারবার বিভিন্ন surface থেকে reflect করলে sound কিছু সময় ধরে টিকে থাকে—এটিই reverberation। Echo-তে reflected sound আলাদা করে শোনা যেতে পারে, কিন্তু reverberation-এ successive reflections একে অন্যের সঙ্গে মিশে sound-এর persistence তৈরি করে। অতিরিক্ত reverberation speech clarity কমাতে পারে।",
      formula: "প্রযোজ্য নয়",
      units: "প্রযোজ্য নয়",
      example: "খালি বড় auditorium-এ বেশি reverberation হতে পারে।",
      realLifeExample: "Auditorium-এর দেয়ালে sound absorbing material ব্যবহার করা হয়।",
      examFocus: "Echo বনাম reverberation",
      commonMistakes: "দুটিকে পুরোপুরি একই ঘটনা বলা",
      keyPoints: [
        "Multiple reflection",
        "Large halls-এ গুরুত্বপূর্ণ",
        "Excess reverberation undesirable"
      ]
    }
  ],

  formulaSheet: [
    {
      name: "তরঙ্গের বেগ",
      formula: "v = fλ",
      note: "v = wave speed, f = frequency, λ = wavelength।"
    },
    {
      name: "Frequency",
      formula: "f = 1/T",
      note: "f = frequency এবং T = time period।"
    },
    {
      name: "Time period",
      formula: "T = 1/f",
      note: "একটি complete oscillation-এর সময়।"
    },
    {
      name: "Wavelength",
      formula: "λ = v/f",
      note: "Wave speed ও frequency জানা থাকলে wavelength নির্ণয় করা যায়।"
    },
    {
      name: "Echo distance",
      formula: "d = vt/2",
      note: "t হলো sound-এর যাওয়া ও ফিরে আসার total time; factor 2 কারণ sound round trip করে।"
    },
    {
      name: "Human audible range",
      formula: "20 Hz ≤ f ≤ 20 kHz",
      note: "এটি সাধারণ/প্রায় hearing range; ব্যক্তি ও বয়সভেদে পরিবর্তন হতে পারে।"
    },
    {
      name: "Ultrasonic",
      formula: "f > 20 kHz",
      note: "মানুষের সাধারণ শ্রবণসীমার উপরের sound।"
    },
    {
      name: "Infrasonic",
      formula: "f < 20 Hz",
      note: "মানুষের সাধারণ শ্রবণসীমার নিচের sound।"
    }
  ],

  questions: [
    {
      id: "ch7-q01",
      conceptId: "wave",
      type: "MCQ",
      question: "তরঙ্গের মাধ্যমে প্রধানত কী সঞ্চালিত হয়?",
      options: ["পদার্থ", "শক্তি", "ভর", "ঘনত্ব"],
      answer: "শক্তি",
      explanation: "Wave মূলত energy transfer করে।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch7-q02",
      conceptId: "transverse-wave",
      type: "MCQ",
      question: "Transverse wave-এ particle vibration ও wave direction-এর সম্পর্ক কী?",
      options: ["সমান্তরাল", "লম্ব", "একই", "কোনো সম্পর্ক নেই"],
      answer: "লম্ব",
      explanation: "Transverse wave-এ particle vibration wave direction-এর perpendicular।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch7-q03",
      conceptId: "longitudinal-wave",
      type: "MCQ",
      question: "Longitudinal wave-এ কী তৈরি হয়?",
      options: ["Crest ও trough", "Compression ও rarefaction", "Node ও antinode", "Only crest"],
      answer: "Compression ও rarefaction",
      explanation: "Longitudinal wave-এ compression এবং rarefaction তৈরি হয়।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch7-q04",
      conceptId: "frequency",
      type: "Numerical",
      question: "একটি wave প্রতি সেকেন্ডে 50টি vibration সম্পন্ন করে। এর frequency কত?",
      answer: "50 Hz",
      explanation: "Frequency = vibrations per second = 50 Hz।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch7-q05",
      conceptId: "time-period",
      type: "Numerical",
      question: "একটি wave-এর frequency 10 Hz হলে time period কত?",
      answer: "0.1 s",
      explanation: "T = 1/f = 1/10 = 0.1 s।",
      difficulty: "Medium",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch7-q06",
      conceptId: "wave-speed",
      type: "Numerical",
      question: "একটি wave-এর frequency 20 Hz এবং wavelength 3 m হলে speed কত?",
      answer: "60 m/s",
      explanation: "v = fλ = 20 × 3 = 60 m/s।",
      difficulty: "Medium",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch7-q07",
      conceptId: "pitch",
      type: "MCQ",
      question: "কোন quantity বাড়লে pitch বাড়ে?",
      options: ["Amplitude", "Frequency", "Wavelength", "Time period"],
      answer: "Frequency",
      explanation: "Pitch মূলত frequency-এর সাথে সম্পর্কিত।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch7-q08",
      conceptId: "loudness",
      type: "MCQ",
      question: "Sound-এর loudness প্রধানত কোনটির সাথে সম্পর্কিত?",
      options: ["Amplitude", "Frequency", "Wavelength", "Time period"],
      answer: "Amplitude",
      explanation: "Amplitude বাড়লে সাধারণত sound বেশি loud শোনা যায়।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch7-q09",
      conceptId: "ultrasonic",
      type: "MCQ",
      question: "কোন frequency ultrasonic sound-এর উদাহরণ?",
      options: ["10 Hz", "100 Hz", "10 kHz", "25 kHz"],
      answer: "25 kHz",
      explanation: "20 kHz-এর বেশি frequency ultrasonic।",
      difficulty: "Easy",
      importance: 5,
      source: "Concept Practice"
    },
    {
      id: "ch7-q10",
      conceptId: "echo",
      type: "Numerical",
      question: "Sound-এর speed 340 m/s এবং echo ফিরে আসতে 0.2 s সময় লাগলে reflecting surface-এর দূরত্ব কত?",
      answer: "34 m",
      explanation: "d = vt/2 = 340 × 0.2 / 2 = 34 m।",
      difficulty: "Medium",
      importance: 5,
      source: "Concept Practice"
    }
  ],

  sourcesNote: "এই chapter-এর প্রশ্নগুলো Concept Practice হিসেবে দেওয়া হয়েছে। যাচাইকৃত Board/School question corpus পরে আলাদাভাবে যুক্ত করতে হবে।"
};
