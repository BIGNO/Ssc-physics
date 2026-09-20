import React from "react";

function topicModel(c = {}) {
  const id = String(c.id || "").toLowerCase();
  const title = String(c.title || "").toLowerCase();
  const text = [
    c.title,
    c.definition,
    c.simpleExplanation,
    c.detailedExplanation,
    c.formula,
    c.examFocus
  ].filter(Boolean).join(" ").toLowerCase();

  // ---------------- P1: Physical quantities & measurement ----------------

  if (/least count|পরিমাপ|measurement/.test(title + " " + text) &&
      (/p1/.test(id) || /least count|পরিমাপ|measurement/.test(title))) {
    return {
      type: "ruler",
      label: "Least Count",
      note: "সবচেয়ে ছোট division = Least Count"
    };
  }

  if (/accuracy|precision/.test(title + " " + text)) {
    return {
      type: "accuracy",
      label: "Accuracy vs Precision",
      note: "Accuracy → true value-এর কাছে, Precision → repeated values-এর কাছাকাছি"
    };
  }

  if (/measurement error|error/.test(title + " " + text)) {
    return {
      type: "error",
      label: "Measurement Error",
      note: "|Measured − True|"
    };
  }

  if (/dimension|dimensional/.test(title + " " + text)) {
    return {
      type: "dimension",
      label: "Dimensional Formula",
      note: "[v] = LT⁻¹"
    };
  }

  // ---------------- P2: Motion ----------------

  if (/motion-graph|motion graph|s-t|v-t|গ্রাফ/.test(id + " " + title + " " + text)) {
    return {
      type: "motionGraph",
      label: "Motion Graph",
      note: "s–t slope = velocity • v–t slope = acceleration"
    };
  }

  if (/acceleration|ত্বরণ|মন্দন|retardation/.test(title + " " + text)) {
    return {
      type: "acceleration",
      label: "Acceleration",
      note: "Slope of v–t graph = acceleration"
    };
  }

  if (/distance|displacement|দূরত্ব|সরণ/.test(title + " " + text)) {
    return {
      type: "distance",
      label: "Distance vs Displacement",
      note: "Distance = path length • Displacement = straight-line change"
    };
  }

  if (/velocity|speed|দ্রুতি|বেগ/.test(title + " " + text)) {
    return {
      type: "velocity",
      label: "Velocity",
      note: "Velocity = speed + direction"
    };
  }

  if (/equation.*motion|motion.*equation|গতি.*সূত্র/.test(title + " " + text)) {
    return {
      type: "equationMotion",
      label: "Equation of Motion",
      note: "v = u + at"
    };
  }

  if (/rest|স্থিতি/.test(title + " " + text) && /motion|গতি/.test(title + " " + text)) {
    return {
      type: "restMotion",
      label: "Rest & Motion",
      note: "Reference point অনুযায়ী position change"
    };
  }

  // ---------------- P3: Force ----------------

  if (/free body|fbd|মুক্ত বস্তু|বলসমূহ/.test(title + " " + text)) {
    return {
      type: "fbd",
      label: "Free Body Diagram",
      note: "Weight, Normal, Applied force, Friction"
    };
  }

  if (/newton|নিউটনের|f\s*=\s*ma|force.*mass|বল.*ভর/.test(title + " " + text)) {
    return {
      type: "newton",
      label: "Newton's 2nd Law",
      note: "F = ma"
    };
  }

  if (/friction|ঘর্ষণ/.test(title + " " + text)) {
    return {
      type: "friction",
      label: "Friction",
      note: "Friction opposes relative motion"
    };
  }

  // ---------------- P4: Work, Energy, Power ----------------

  if (/work|কাজ/.test(title + " " + text) && !/homework/.test(text)) {
    return {
      type: "work",
      label: "Work",
      note: "W = Fs cosθ"
    };
  }

  if (/kinetic|গতিশক্তি|potential|বিভবশক্তি/.test(title + " " + text)) {
    return {
      type: "energy",
      label: "Energy Conversion",
      note: "PE ↔ KE"
    };
  }

  if (/power|ক্ষমতা/.test(title + " " + text)) {
    return {
      type: "power",
      label: "Power",
      note: "P = W/t"
    };
  }

  // ---------------- P5: Matter / Pressure ----------------

  if (/pressure|চাপ|তরলের চাপ/.test(title + " " + text)) {
    return {
      type: "liquidPressure",
      label: "Liquid Pressure",
      note: "P = hρg • গভীরতা বাড়লে pressure বাড়ে"
    };
  }

  if (/density|ঘনত্ব/.test(title + " " + text)) {
    return {
      type: "density",
      label: "Density",
      note: "ρ = m/V"
    };
  }

  if (/molecule|particle|অণু|কণা/.test(title + " " + text)) {
    return {
      type: "particles",
      label: "Particle Model",
      note: "Particles are in continuous motion"
    };
  }

  if (/hydraulic|হাইড্রোলিক/.test(title + " " + text)) {
    return {
      type: "hydraulic",
      label: "Hydraulic Press",
      note: "Pascal's principle"
    };
  }

  // ---------------- P6: Heat ----------------

  if (/heat transfer|তাপ সঞ্চালন|conduction|convection|radiation|পরিবহন/.test(title + " " + text)) {
    return {
      type: "heatTransfer",
      label: "Heat Transfer",
      note: "Conduction • Convection • Radiation"
    };
  }

  if (/temperature|তাপমাত্রা|thermal|তাপীয়|specific heat|তাপধারণ ক্ষমতা/.test(title + " " + text)) {
    return {
      type: "heat",
      label: "Heating Process",
      note: "Q = mcΔT"
    };
  }

  if (/expansion|প্রসারণ/.test(title + " " + text)) {
    return {
      type: "expansion",
      label: "Thermal Expansion",
      note: "Heating → dimensions increase"
    };
  }

  // ---------------- P7: Waves / Sound ----------------

  if (/sound|শব্দ|longitudinal|compression|rarefaction|সংকোচন|প্রসারণ অঞ্চল/.test(title + " " + text)) {
    return {
      type: "sound",
      label: "Longitudinal Sound Wave",
      note: "Compression + Rarefaction"
    };
  }

  if (/wave|তরঙ্গ|wavelength|তরঙ্গদৈর্ঘ্য/.test(title + " " + text)) {
    return {
      type: "wave",
      label: "Transverse Wave",
      note: "v = fλ"
    };
  }

  if (/echo|প্রতিধ্বনি/.test(title + " " + text)) {
    return {
      type: "echo",
      label: "Echo",
      note: "Reflected sound returns to observer"
    };
  }

  // ---------------- P8: Reflection ----------------

  if (/plane mirror|সমতল দর্পণ/.test(title + " " + text)) {
    return {
      type: "planeMirror",
      label: "Plane Mirror",
      note: "i = r"
    };
  }

  if (/reflection|প্রতিফলন|দর্পণ|mirror/.test(title + " " + text)) {
    return {
      type: "reflection",
      label: "Reflection of Light",
      note: "Angle of incidence = angle of reflection"
    };
  }

  // ---------------- P9: Refraction ----------------

  if (/refraction|প্রতিসরণ|snell|লেন্স|lens/.test(title + " " + text)) {
    if (/lens|লেন্স/.test(title + " " + text)) {
      return {
        type: "lens",
        label: "Convex Lens",
        note: "Converging rays • 1/f = 1/v − 1/u"
      };
    }

    return {
      type: "refraction",
      label: "Refraction",
      note: "n₁ sin i = n₂ sin r"
    };
  }

  // ---------------- P10: Static electricity ----------------

  if (/static electricity|স্থির বিদ্যুৎ|charge|আধান/.test(title + " " + text)) {
    return {
      type: "charges",
      label: "Electric Charges",
      note: "Like charges repel • unlike charges attract"
    };
  }

  if (/electric field|তড়িৎ ক্ষেত্র|field line/.test(title + " " + text)) {
    return {
      type: "electricField",
      label: "Electric Field",
      note: "Field lines show field direction"
    };
  }

  // ---------------- P11: Current electricity ----------------

  if (/ohm|ওহম|v-i graph|v-i/.test(title + " " + text)) {
    return {
      type: "ohm",
      label: "Ohm's Law",
      note: "V ∝ I • V = IR"
    };
  }

  if (/series.*resistance|parallel.*resistance|রোধ.*সমবায়/.test(title + " " + text)) {
    return {
      type: "resistors",
      label: "Series / Parallel Resistance",
      note: "Series: R = R₁ + R₂ • Parallel: 1/R = 1/R₁ + 1/R₂"
    };
  }

  if (/circuit|বর্তনী|current|বিদ্যুৎ প্রবাহ/.test(title + " " + text)) {
    return {
      type: "circuit",
      label: "Simple Electric Circuit",
      note: "Conventional current flows through the closed circuit"
    };
  }

  // ---------------- P12: Magnetism ----------------

  if (/motor|মোটর/.test(title + " " + text)) {
    return {
      type: "motor",
      label: "Electric Motor",
      note: "Electrical energy → mechanical motion"
    };
  }

  if (/generator|জেনারেটর/.test(title + " " + text)) {
    return {
      type: "generator",
      label: "Electric Generator",
      note: "Mechanical motion → electrical energy"
    };
  }

  if (/magnetic field|চৌম্বক ক্ষেত্র|magnetism|চৌম্বক/.test(title + " " + text)) {
    return {
      type: "magneticField",
      label: "Magnetic Field",
      note: "Field lines: N → S outside magnet"
    };
  }

  // ---------------- P13: Radioactivity ----------------

  if (/radioactive|radioactivity|তেজস্ক্রিয়|alpha|beta|gamma/.test(title + " " + text)) {
    return {
      type: "radiation",
      label: "Radioactive Emission",
      note: "α, β, γ have different penetrating abilities"
    };
  }

  if (/half life|অর্ধায়ু|decay|ক্ষয়/.test(title + " " + text)) {
    return {
      type: "decay",
      label: "Radioactive Decay",
      note: "N = N₀(1/2)ⁿ"
    };
  }

  // ---------------- P14: Electronics / Semiconductor ----------------

  if (/p-n|pn junction|diode|ডায়োড/.test(title + " " + text)) {
    return {
      type: "diode",
      label: "P-N Junction Diode",
      note: "Forward bias → current flows strongly"
    };
  }

  if (/rectifier|রেকটিফায়ার/.test(title + " " + text)) {
    return {
      type: "rectifier",
      label: "Diode Rectifier",
      note: "AC → pulsating DC"
    };
  }

  if (/transistor|ট্রানজিস্টর/.test(title + " " + text)) {
    return {
      type: "transistor",
      label: "Transistor",
      note: "Emitter • Base • Collector"
    };
  }

  // No standard diagram for this topic.
  return null;
}


// =========================================================
// SVG VISUALS
// =========================================================

function Visual({type}) {

  if (type === "ruler") {
    return <svg viewBox="0 0 360 190">
      <line x1="28" y1="112" x2="332" y2="112" className="sp-axis"/>
      {[0,1,2,3,4,5,6,7,8,9,10].map(i =>
        <g key={i}>
          <line
            x1={38+i*28}
            y1="112"
            x2={38+i*28}
            y2={i%5===0 ? "70" : "87"}
            className="sp-tick"
          />
          <text x={35+i*28} y="135" className="sp-small">{i}</text>
        </g>
      )}
      <rect x="92" y="55" width="132" height="34" rx="7" className="sp-box sp-measure"/>
      <line x1="224" y1="72" x2="300" y2="72" className="sp-arrow sp-measure-arrow"/>
      <text x="158" y="77" className="sp-text">1 mm</text>
      <text x="180" y="163" className="sp-small">Smallest division = Least Count</text>
    </svg>;
  }

  if (type === "accuracy") {
    return <svg viewBox="0 0 360 190">
      <circle cx="92" cy="92" r="55" className="sp-target"/>
      <circle cx="92" cy="92" r="35" className="sp-target-inner"/>
      <circle cx="92" cy="92" r="13" className="sp-target-core"/>
      <circle cx="92" cy="92" r="5" className="sp-dot sp-center"/>
      <circle cx="255" cy="92" r="55" className="sp-target"/>
      <circle cx="255" cy="92" r="35" className="sp-target-inner"/>
      <circle cx="255" cy="92" r="13" className="sp-target-core"/>
      <circle cx="248" cy="86" r="5" className="sp-dot sp-group"/>
      <circle cx="260" cy="91" r="5" className="sp-dot sp-group"/>
      <circle cx="253" cy="98" r="5" className="sp-dot sp-group"/>
      <circle cx="262" cy="88" r="5" className="sp-dot sp-group"/>
      <text x="92" y="165" className="sp-small">Accurate</text>
      <text x="255" y="165" className="sp-small">Precise</text>
    </svg>;
  }

  if (type === "error") {
    return <svg viewBox="0 0 360 190">
      <circle cx="180" cy="86" r="62" className="sp-target"/>
      <circle cx="180" cy="86" r="12" className="sp-target-core"/>
      <circle cx="180" cy="86" r="5" className="sp-dot sp-center"/>
      <circle cx="232" cy="60" r="5" className="sp-dot sp-error e1"/>
      <circle cx="245" cy="75" r="5" className="sp-dot sp-error e2"/>
      <circle cx="238" cy="91" r="5" className="sp-dot sp-error e3"/>
      <line x1="180" y1="86" x2="240" y2="74" className="sp-error-line"/>
      <text x="180" y="165" className="sp-small">True value → error = deviation</text>
    </svg>;
  }

  if (type === "dimension") {
    return <svg viewBox="0 0 360 190">
      <rect x="42" y="72" width="82" height="38" rx="8" className="sp-box"/>
      <text x="83" y="97" className="sp-text">L</text>
      <line x1="124" y1="91" x2="166" y2="91" className="sp-arrow"/>
      <rect x="168" y="72" width="82" height="38" rx="8" className="sp-box"/>
      <text x="209" y="97" className="sp-text">T⁻¹</text>
      <text x="180" y="145" className="sp-formula">[v] = LT⁻¹</text>
    </svg>;
  }

  if (type === "restMotion") {
    return <svg viewBox="0 0 360 190">
      <line x1="35" y1="125" x2="325" y2="125" className="sp-axis"/>
      <circle cx="75" cy="108" r="12" className="sp-ball"/>
      <text x="72" y="151" className="sp-small">t₁</text>
      <line x1="90" y1="108" x2="210" y2="108" className="sp-motion-arrow"/>
      <circle cx="230" cy="108" r="12" className="sp-ball sp-moving"/>
      <text x="230" y="151" className="sp-small">t₂</text>
      <text x="180" y="34" className="sp-small">Position changes → Motion</text>
    </svg>;
  }

  if (type === "distance") {
    return <svg viewBox="0 0 360 190">
      <path d="M45 126 C95 38 148 157 205 88 S285 55 320 122" className="sp-path"/>
      <line x1="45" y1="126" x2="320" y2="122" className="sp-displacement"/>
      <circle cx="45" cy="126" r="7" className="sp-dot"/>
      <circle cx="320" cy="122" r="7" className="sp-dot"/>
      <text x="180" y="45" className="sp-small">curved path = distance</text>
      <text x="185" y="158" className="sp-small">straight vector = displacement</text>
    </svg>;
  }

  if (type === "velocity") {
    return <svg viewBox="0 0 360 190">
      <rect x="62" y="93" width="72" height="34" rx="8" className="sp-box"/>
      <circle cx="78" cy="130" r="9" className="sp-wheel"/>
      <circle cx="118" cy="130" r="9" className="sp-wheel"/>
      <line x1="138" y1="110" x2="285" y2="110" className="sp-arrow sp-long"/>
      <text x="215" y="92" className="sp-text">v = direction + speed</text>
      <text x="180" y="160" className="sp-small">Velocity is a vector quantity</text>
    </svg>;
  }

  if (type === "acceleration") {
    return <svg viewBox="0 0 360 210">
      <line x1="48" y1="165" x2="320" y2="165" className="sp-axis"/>
      <line x1="48" y1="165" x2="48" y2="35" className="sp-axis"/>
      <line x1="70" y1="145" x2="285" y2="58" className="sp-graph-rise"/>
      <circle cx="70" cy="145" r="5" className="sp-graph-dot"/>
      <circle cx="285" cy="58" r="5" className="sp-graph-dot"/>
      <text x="180" y="195" className="sp-small">time →</text>
      <text x="18" y="44" className="sp-small">v</text>
      <text x="208" y="45" className="sp-formula">slope = a</text>
      <circle cx="70" cy="145" r="5" className="sp-trace"/>
    </svg>;
  }

  if (type === "motionGraph") {
    return <svg viewBox="0 0 360 210">
      <line x1="32" y1="95" x2="164" y2="95" className="sp-axis"/>
      <line x1="32" y1="95" x2="32" y2="25" className="sp-axis"/>
      <polyline points="42,82 74,68 104,54 140,39" className="sp-graph"/>
      <text x="94" y="117" className="sp-small">t</text>
      <text x="12" y="31" className="sp-small">s</text>
      <text x="98" y="22" className="sp-small">s–t: slope = v</text>

      <line x1="195" y1="165" x2="330" y2="165" className="sp-axis"/>
      <line x1="195" y1="165" x2="195" y2="95" className="sp-axis"/>
      <polyline points="205,151 237,135 270,118 314,101" className="sp-graph-2"/>
      <text x="265" y="188" className="sp-small">t</text>
      <text x="179" y="102" className="sp-small">v</text>
      <text x="262" y="93" className="sp-small">v–t: slope = a</text>

      <circle cx="42" cy="82" r="4" className="sp-trace sp-trace-a"/>
      <circle cx="205" cy="151" r="4" className="sp-trace sp-trace-b"/>
    </svg>;
  }

  if (type === "equationMotion") {
    return <svg viewBox="0 0 360 190">
      <line x1="38" y1="130" x2="322" y2="130" className="sp-axis"/>
      <rect x="78" y="88" width="58" height="34" rx="7" className="sp-box"/>
      <line x1="138" y1="105" x2="278" y2="105" className="sp-arrow sp-long"/>
      <circle cx="96" cy="142" r="8" className="sp-wheel"/>
      <circle cx="120" cy="142" r="8" className="sp-wheel"/>
      <text x="180" y="63" className="sp-formula">v = u + at</text>
      <text x="180" y="166" className="sp-small">uniform acceleration</text>
    </svg>;
  }

  if (type === "fbd") {
    return <svg viewBox="0 0 360 210">
      <rect x="130" y="80" width="100" height="55" rx="8" className="sp-box"/>
      <line x1="180" y1="80" x2="180" y2="35" className="sp-arrow"/>
      <line x1="180" y1="135" x2="180" y2="182" className="sp-arrow sp-weight"/>
      <line x1="130" y1="108" x2="58" y2="108" className="sp-arrow sp-friction"/>
      <line x1="230" y1="108" x2="305" y2="108" className="sp-arrow sp-force"/>
      <text x="189" y="47" className="sp-small">N</text>
      <text x="188" y="175" className="sp-small">W = mg</text>
      <text x="51" y="98" className="sp-small">f</text>
      <text x="302" y="98" className="sp-small">F</text>
      <text x="180" y="202" className="sp-small">Free Body Diagram</text>
    </svg>;
  }

  if (type === "newton") {
    return <svg viewBox="0 0 360 190">
      <rect x="82" y="88" width="75" height="42" rx="8" className="sp-box"/>
      <line x1="158" y1="109" x2="292" y2="109" className="sp-arrow sp-long"/>
      <text x="218" y="89" className="sp-text">F</text>
      <text x="180" y="153" className="sp-formula">F = ma</text>
      <text x="180" y="178" className="sp-small">more F → more acceleration (same m)</text>
    </svg>;
  }

  if (type === "friction") {
    return <svg viewBox="0 0 360 190">
      <line x1="35" y1="130" x2="325" y2="130" className="sp-rough"/>
      <rect x="120" y="84" width="86" height="42" rx="8" className="sp-box sp-fric-block"/>
      <line x1="210" y1="105" x2="298" y2="105" className="sp-arrow"/>
      <line x1="117" y1="105" x2="52" y2="105" className="sp-arrow sp-friction-arrow"/>
      <text x="275" y="87" className="sp-small">motion</text>
      <text x="67" y="88" className="sp-small">friction</text>
    </svg>;
  }

  if (type === "work") {
    return <svg viewBox="0 0 360 190">
      <rect x="98" y="93" width="78" height="42" rx="8" className="sp-box"/>
      <line x1="176" y1="114" x2="302" y2="114" className="sp-arrow sp-long"/>
      <text x="235" y="95" className="sp-text">F</text>
      <line x1="98" y1="155" x2="302" y2="155" className="sp-displacement"/>
      <text x="201" y="176" className="sp-small">s</text>
      <text x="180" y="44" className="sp-formula">W = Fs cosθ</text>
    </svg>;
  }

  if (type === "energy") {
    return <svg viewBox="0 0 360 190">
      <line x1="45" y1="145" x2="310" y2="145" className="sp-axis"/>
      <path d="M70 145 L150 62 L230 145" className="sp-ramp"/>
      <circle cx="148" cy="62" r="12" className="sp-ball sp-energy-ball"/>
      <line x1="153" y1="68" x2="208" y2="120" className="sp-arrow"/>
      <text x="108" y="48" className="sp-small">PE</text>
      <text x="225" y="124" className="sp-small">KE</text>
      <text x="180" y="180" className="sp-formula">PE → KE</text>
    </svg>;
  }

  if (type === "power") {
    return <svg viewBox="0 0 360 190">
      <rect x="65" y="75" width="75" height="45" rx="8" className="sp-box"/>
      <line x1="142" y1="98" x2="245" y2="98" className="sp-arrow sp-long"/>
      <circle cx="270" cy="98" r="25" className="sp-clock"/>
      <line x1="270" y1="98" x2="270" y2="82" className="sp-clock-hand"/>
      <line x1="270" y1="98" x2="282" y2="106" className="sp-clock-hand"/>
      <text x="155" y="75" className="sp-formula">P = W/t</text>
      <text x="180" y="155" className="sp-small">same work in less time → greater power</text>
    </svg>;
  }

  if (type === "density") {
    return <svg viewBox="0 0 360 190">
      <rect x="60" y="58" width="72" height="78" rx="8" className="sp-box"/>
      <text x="96" y="103" className="sp-text">m</text>
      <rect x="215" y="57" width="72" height="80" rx="20" className="sp-cylinder"/>
      <path d="M215 96 Q251 110 287 96" className="sp-liquid-line"/>
      <text x="251" y="150" className="sp-small">V</text>
      <line x1="137" y1="96" x2="207" y2="96" className="sp-arrow"/>
      <text x="180" y="48" className="sp-formula">ρ = m/V</text>
    </svg>;
  }

  if (type === "liquidPressure") {
    return <svg viewBox="0 0 360 210">
      <path d="M95 40 V175 H265 V40" className="sp-container"/>
      <path d="M95 92 H265 V175 H95 Z" className="sp-water"/>
      <circle cx="180" cy="108" r="5" className="sp-pressure-point p1"/>
      <circle cx="180" cy="138" r="5" className="sp-pressure-point p2"/>
      <circle cx="180" cy="166" r="5" className="sp-pressure-point p3"/>
      <line x1="186" y1="108" x2="278" y2="108" className="sp-arrow sp-pressure-arrow"/>
      <line x1="186" y1="138" x2="295" y2="138" className="sp-arrow sp-pressure-arrow"/>
      <line x1="186" y1="166" x2="312" y2="166" className="sp-arrow sp-pressure-arrow"/>
      <text x="278" y="91" className="sp-small">less</text>
      <text x="296" y="121" className="sp-small">more</text>
      <text x="180" y="198" className="sp-formula">P = hρg</text>
    </svg>;
  }

  if (type === "particles") {
    return <svg viewBox="0 0 360 190">
      <rect x="60" y="40" width="240" height="110" rx="10" className="sp-container"/>
      {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => {
        const xs = [84,122,164,205,250,278,96,145,188,228,266,115];
        const ys = [64,83,57,91,68,109,123,117,135,117,78,143];
        return <circle key={i} cx={xs[i]} cy={ys[i]} r={5} className="sp-particle particle"/>
      })}
      <text x="180" y="176" className="sp-small">Particles are in continuous motion</text>
    </svg>;
  }

  if (type === "hydraulic") {
    return <svg viewBox="0 0 360 200">
      <path d="M85 72 V158 H275 V72" className="sp-container"/>
      <line x1="95" y1="118" x2="175" y2="118" className="sp-water-line"/>
      <line x1="185" y1="105" x2="265" y2="105" className="sp-water-line"/>
      <rect x="70" y="61" width="55" height="18" rx="4" className="sp-piston"/>
      <rect x="250" y="48" width="38" height="31" rx="4" className="sp-piston"/>
      <line x1="98" y1="61" x2="98" y2="35" className="sp-arrow"/>
      <line x1="269" y1="48" x2="269" y2="20" className="sp-arrow"/>
      <text x="180" y="183" className="sp-small">Pressure transmitted through enclosed fluid</text>
    </svg>;
  }

  if (type === "heatTransfer") {
    return <svg viewBox="0 0 360 200">
      <rect x="45" y="65" width="92" height="70" rx="8" className="sp-box sp-hot-source"/>
      <rect x="223" y="65" width="92" height="70" rx="8" className="sp-box"/>
      <line x1="137" y1="100" x2="223" y2="100" className="sp-heat-arrow"/>
      <text x="92" y="105" className="sp-text">HOT</text>
      <text x="269" y="105" className="sp-text">COLD</text>
      <circle cx="82" cy="82" r="5" className="sp-hot-dot h1"/>
      <circle cx="104" cy="113" r="5" className="sp-hot-dot h2"/>
      <circle cx="250" cy="84" r="5" className="sp-cold-dot"/>
    </svg>;
  }

  if (type === "heat") {
    return <svg viewBox="0 0 360 200">
      <rect x="90" y="58" width="180" height="88" rx="10" className="sp-box"/>
      {[0,1,2,3,4,5,6,7].map(i => {
        const x = [112,150,190,230,252,130,175,218][i];
        const y = [83,75,96,81,118,120,126,109][i];
        return <circle key={i} cx={x} cy={y} r="6" className="sp-thermal"/>
      })}
      <text x="180" y="176" className="sp-formula">Q = mcΔT</text>
    </svg>;
  }

  if (type === "expansion") {
    return <svg viewBox="0 0 360 190">
      <rect x="55" y="93" width="105" height="30" rx="7" className="sp-box"/>
      <rect x="200" y="83" width="105" height="40" rx="7" className="sp-box sp-expanded"/>
      <line x1="160" y1="108" x2="197" y2="108" className="sp-arrow"/>
      <path d="M86 75 Q180 28 274 75" className="sp-heat-curve"/>
      <text x="180" y="45" className="sp-small">Heating → expansion</text>
    </svg>;
  }

  if (type === "wave") {
    return <svg viewBox="0 0 360 190">
      <line x1="26" y1="96" x2="334" y2="96" className="sp-axis"/>
      <path d="M25 96 C48 38 71 154 94 96 S140 38 163 96 S209 154 232 96 S278 38 301 96 S324 154 342 96"
            className="sp-wave"/>
      <line x1="94" y1="157" x2="232" y2="157" className="sp-arrow"/>
      <text x="162" y="178" className="sp-formula">λ</text>
    </svg>;
  }

  if (type === "sound") {
    return <svg viewBox="0 0 360 190">
      {[0,1,2,3,4,5,6].map(i => (
        <circle
          key={i}
          cx={40+i*43}
          cy="96"
          r={i%2 ? 7 : 13}
          className={`sp-sound-particle sound-${i}`}
        />
      ))}
      <line x1="25" y1="96" x2="335" y2="96" className="sp-axis"/>
      <text x="180" y="40" className="sp-small">Compression</text>
      <text x="95" y="155" className="sp-small">Rarefaction</text>
      <text x="180" y="178" className="sp-formula">Longitudinal wave</text>
    </svg>;
  }

  if (type === "echo") {
    return <svg viewBox="0 0 360 190">
      <circle cx="72" cy="112" r="17" className="sp-person"/>
      <line x1="88" y1="112" x2="255" y2="112" className="sp-arrow sp-echo-out"/>
      <line x1="255" y1="112" x2="94" y2="112" className="sp-arrow sp-echo-back"/>
      <rect x="255" y="42" width="20" height="125" className="sp-wall"/>
      <text x="150" y="91" className="sp-small">sound</text>
      <text x="180" y="176" className="sp-small">Reflection → Echo</text>
    </svg>;
  }

  if (type === "planeMirror") {
    return <svg viewBox="0 0 360 200">
      <line x1="225" y1="32" x2="225" y2="168" className="sp-mirror"/>
      <line x1="225" y1="100" x2="70" y2="55" className="sp-ray sp-ray-in"/>
      <line x1="225" y1="100" x2="315" y2="60" className="sp-ray sp-ray-out"/>
      <line x1="225" y1="25" x2="225" y2="175" className="sp-normal"/>
      <path d="M190 100 A36 36 0 0 0 201 82" className="sp-angle"/>
      <path d="M250 82 A36 36 0 0 0 260 100" className="sp-angle"/>
      <text x="175" y="75" className="sp-small">i</text>
      <text x="267" y="75" className="sp-small">r</text>
      <text x="180" y="188" className="sp-formula">i = r</text>
    </svg>;
  }

  if (type === "reflection") {
    return <svg viewBox="0 0 360 200">
      <line x1="232" y1="28" x2="232" y2="172" className="sp-mirror"/>
      <line x1="232" y1="100" x2="55" y2="50" className="sp-ray sp-ray-in"/>
      <line x1="232" y1="100" x2="312" y2="58" className="sp-ray sp-ray-out"/>
      <line x1="232" y1="20" x2="232" y2="178" className="sp-normal"/>
      <circle cx="55" cy="50" r="6" className="sp-dot"/>
      <text x="157" y="40" className="sp-small">incident ray</text>
      <text x="274" y="48" className="sp-small">reflected ray</text>
    </svg>;
  }

  if (type === "refraction") {
    return <svg viewBox="0 0 360 200">
      <line x1="24" y1="95" x2="336" y2="95" className="sp-medium-boundary"/>
      <line x1="180" y1="25" x2="180" y2="175" className="sp-normal"/>
      <line x1="55" y1="42" x2="180" y2="95" className="sp-ray sp-ref-in"/>
      <line x1="180" y1="95" x2="292" y2="148" className="sp-ray sp-ref-out"/>
      <text x="67" y="82" className="sp-small">medium 1</text>
      <text x="246" y="123" className="sp-small">medium 2</text>
      <text x="180" y="190" className="sp-formula">n₁ sin i = n₂ sin r</text>
    </svg>;
  }

  if (type === "lens") {
    return <svg viewBox="0 0 360 200">
      <line x1="35" y1="100" x2="325" y2="100" className="sp-axis"/>
      <path d="M180 32 Q150 100 180 168 Q210 100 180 32" className="sp-lens"/>
      <line x1="65" y1="60" x2="180" y2="60" className="sp-ray sp-lens-ray"/>
      <line x1="180" y1="60" x2="280" y2="100" className="sp-ray sp-lens-ray"/>
      <line x1="65" y1="125" x2="180" y2="100" className="sp-ray sp-lens-ray"/>
      <line x1="180" y1="100" x2="280" y2="100" className="sp-ray sp-lens-ray"/>
      <circle cx="280" cy="100" r="6" className="sp-dot sp-focus"/>
      <text x="284" y="88" className="sp-small">F</text>
      <text x="180" y="190" className="sp-small">Convex lens → convergence</text>
    </svg>;
  }

  if (type === "charges") {
    return <svg viewBox="0 0 360 190">
      <circle cx="102" cy="92" r="27" className="sp-charge positive"/>
      <circle cx="258" cy="92" r="27" className="sp-charge negative"/>
      <text x="102" y="99" className="sp-charge-text">+</text>
      <text x="258" y="99" className="sp-charge-text">−</text>
      {[55,80,105,130].map((y,i) =>
        <line key={i} x1="130" y1={y} x2="230" y2={y} className="sp-electric-arrow"/>
      )}
      <text x="180" y="158" className="sp-small">Like repel • unlike attract</text>
    </svg>;
  }

  if (type === "electricField") {
    return <svg viewBox="0 0 360 190">
      <circle cx="180" cy="95" r="24" className="sp-charge positive"/>
      <text x="180" y="102" className="sp-charge-text">+</text>
      {[0,1,2,3,4].map(i =>
        <path
          key={i}
          d={`M${180} ${72-i*7} Q${70} ${95} ${35+i*8} ${95}`}
          className="sp-field-line"
        />
      )}
      {[0,1,2,3,4].map(i =>
        <path
          key={`r${i}`}
          d={`M${180} ${118+i*7} Q${290} ${95} ${325-i*8} ${95}`}
          className="sp-field-line"
        />
      )}
      <text x="180" y="174" className="sp-small">Electric field lines</text>
    </svg>;
  }

  if (type === "ohm") {
    return <svg viewBox="0 0 360 210">
      <line x1="45" y1="170" x2="315" y2="170" className="sp-axis"/>
      <line x1="45" y1="170" x2="45" y2="32" className="sp-axis"/>
      <line x1="57" y1="158" x2="282" y2="52" className="sp-graph-rise sp-ohm-line"/>
      <circle cx="58" cy="158" r="5" className="sp-graph-dot"/>
      <circle cx="282" cy="52" r="5" className="sp-graph-dot"/>
      <text x="180" y="196" className="sp-small">I</text>
      <text x="28" y="44" className="sp-small">V</text>
      <text x="180" y="30" className="sp-formula">V = IR</text>
    </svg>;
  }

  if (type === "resistors") {
    return <svg viewBox="0 0 360 205">
      <text x="90" y="30" className="sp-small">Series</text>
      <line x1="35" y1="58" x2="72" y2="58" className="sp-wire"/>
      <rect x="72" y="47" width="50" height="22" className="sp-resistor"/>
      <rect x="138" y="47" width="50" height="22" className="sp-resistor"/>
      <line x1="188" y1="58" x2="220" y2="58" className="sp-wire"/>
      <text x="102" y="62" className="sp-small">R₁</text>
      <text x="168" y="62" className="sp-small">R₂</text>

      <text x="90" y="113" className="sp-small">Parallel</text>
      <line x1="35" y1="142" x2="72" y2="142" className="sp-wire"/>
      <line x1="72" y1="142" x2="72" y2="125" className="sp-wire"/>
      <line x1="72" y1="125" x2="188" y2="125" className="sp-wire"/>
      <rect x="103" y="114" width="45" height="22" className="sp-resistor"/>
      <line x1="72" y1="160" x2="188" y2="160" className="sp-wire"/>
      <rect x="103" y="149" width="45" height="22" className="sp-resistor"/>
      <line x1="188" y1="125" x2="188" y2="160" className="sp-wire"/>
      <line x1="188" y1="142" x2="220" y2="142" className="sp-wire"/>
      <text x="105" y="109" className="sp-small">R₁</text>
      <text x="105" y="185" className="sp-small">R₂</text>
    </svg>;
  }

  if (type === "circuit") {
    return <svg viewBox="0 0 360 205">
      <path d="M48 48 H312 V158 H48 Z" className="sp-wire"/>
      <circle cx="48" cy="103" r="28" className="sp-source"/>
      <text x="48" y="110" className="sp-text">V</text>
      <rect x="145" y="36" width="58" height="24" rx="4" className="sp-resistor"/>
      <circle cx="250" cy="48" r="5" className="sp-electron c1"/>
      <circle cx="280" cy="48" r="5" className="sp-electron c2"/>
      <circle cx="310" cy="48" r="5" className="sp-electron c3"/>
      <circle cx="312" cy="78" r="5" className="sp-electron c4"/>
      <circle cx="312" cy="108" r="5" className="sp-electron c5"/>
      <circle cx="312" cy="138" r="5" className="sp-electron c6"/>
      <text x="175" y="54" className="sp-small">R</text>
      <text x="180" y="192" className="sp-small">Closed circuit → continuous current</text>
    </svg>;
  }

  if (type === "magneticField") {
    return <svg viewBox="0 0 360 200">
      <rect x="120" y="78" width="120" height="36" rx="8" className="sp-magnet"/>
      <text x="140" y="101" className="sp-small">N</text>
      <text x="220" y="101" className="sp-small">S</text>
      <path d="M120 78 C70 38 65 38 48 78" className="sp-field-line"/>
      <path d="M120 114 C70 154 65 154 48 114" className="sp-field-line"/>
      <path d="M240 78 C290 38 295 38 312 78" className="sp-field-line"/>
      <path d="M240 114 C290 154 295 154 312 114" className="sp-field-line"/>
      <text x="180" y="179" className="sp-small">Magnetic field lines outside: N → S</text>
    </svg>;
  }

  if (type === "motor") {
    return <svg viewBox="0 0 360 205">
      <rect x="125" y="78" width="110" height="55" rx="8" className="sp-coil-frame"/>
      <circle cx="180" cy="105" r="32" className="sp-coil"/>
      <line x1="180" y1="73" x2="180" y2="137" className="sp-axis sp-rotor"/>
      <path d="M80 55 Q180 15 280 55" className="sp-field-line"/>
      <path d="M80 155 Q180 195 280 155" className="sp-field-line"/>
      <line x1="235" y1="105" x2="280" y2="105" className="sp-arrow sp-motor-arrow"/>
      <text x="180" y="185" className="sp-small">Electric current + magnetic field → torque</text>
    </svg>;
  }

  if (type === "generator") {
    return <svg viewBox="0 0 360 205">
      <circle cx="180" cy="102" r="45" className="sp-coil"/>
      <line x1="180" y1="57" x2="180" y2="147" className="sp-axis sp-rotate-generator"/>
      <line x1="132" y1="102" x2="76" y2="102" className="sp-arrow"/>
      <line x1="228" y1="102" x2="284" y2="102" className="sp-arrow"/>
      <text x="180" y="178" className="sp-small">Mechanical rotation → induced EMF</text>
    </svg>;
  }

  if (type === "radiation") {
    return <svg viewBox="0 0 360 200">
      <circle cx="92" cy="100" r="24" className="sp-radio-source"/>
      <text x="92" y="106" className="sp-text">Ra</text>
      <line x1="116" y1="100" x2="275" y2="65" className="sp-radiation alpha"/>
      <line x1="116" y1="100" x2="286" y2="100" className="sp-radiation beta"/>
      <line x1="116" y1="100" x2="275" y2="135" className="sp-radiation gamma"/>
      <text x="296" y="68" className="sp-small">α</text>
      <text x="302" y="103" className="sp-small">β</text>
      <text x="296" y="140" className="sp-small">γ</text>
      <text x="180" y="182" className="sp-small">Different penetrating abilities</text>
    </svg>;
  }

  if (type === "decay") {
    return <svg viewBox="0 0 360 210">
      <line x1="45" y1="170" x2="320" y2="170" className="sp-axis"/>
      <line x1="45" y1="170" x2="45" y2="35" className="sp-axis"/>
      <path d="M58 52 C105 67 120 95 158 116 S240 151 305 162" className="sp-decay"/>
      <line x1="58" y1="113" x2="305" y2="113" className="sp-half"/>
      <text x="18" y="47" className="sp-small">N</text>
      <text x="175" y="194" className="sp-small">time</text>
      <text x="252" y="106" className="sp-small">½N₀</text>
      <text x="175" y="31" className="sp-formula">Half-life</text>
    </svg>;
  }

  if (type === "diode") {
    return <svg viewBox="0 0 360 205">
      <line x1="45" y1="100" x2="120" y2="100" className="sp-wire"/>
      <polygon points="120,75 120,125 178,100" className="sp-diode-triangle"/>
      <line x1="178" y1="75" x2="178" y2="125" className="sp-diode-line"/>
      <line x1="178" y1="100" x2="315" y2="100" className="sp-wire"/>
      <text x="98" y="145" className="sp-small">P</text>
      <text x="195" y="145" className="sp-small">N</text>
      <line x1="80" y1="57" x2="260" y2="57" className="sp-arrow"/>
      <text x="180" y="40" className="sp-small">Forward bias</text>
    </svg>;
  }

  if (type === "rectifier") {
    return <svg viewBox="0 0 360 205">
      <path d="M35 120 Q60 55 85 120 T135 120 T185 120 T235 120 T285 120" className="sp-ac"/>
      <line x1="35" y1="150" x2="300" y2="150" className="sp-axis"/>
      <path d="M35 150 Q60 90 85 150 L85 150 Q110 150 135 150 Q160 90 185 150 L185 150 Q210 150 235 150 Q260 90 285 150"
            className="sp-dc"/>
      <text x="78" y="46" className="sp-small">AC input</text>
      <text x="200" y="186" className="sp-small">Pulsating DC output</text>
    </svg>;
  }

  if (type === "transistor") {
    return <svg viewBox="0 0 360 205">
      <line x1="175" y1="55" x2="175" y2="155" className="sp-trans-base"/>
      <line x1="95" y1="105" x2="155" y2="105" className="sp-wire"/>
      <line x1="175" y1="67" x2="235" y2="40" className="sp-wire"/>
      <line x1="175" y1="143" x2="235" y2="170" className="sp-wire"/>
      <polygon points="232,166 249,172 238,156" className="sp-arrow-head"/>
      <text x="87" y="96" className="sp-small">B</text>
      <text x="242" y="40" className="sp-small">C</text>
      <text x="242" y="174" className="sp-small">E</text>
      <text x="180" y="190" className="sp-small">BJT: Base • Collector • Emitter</text>
    </svg>;
  }

  return null;
}


export default function TopicMicroDemo({concept}) {
  const model = topicModel(concept);

  // No artificial generic diagram for topics that do not have a
  // standard physics model/diagram.
  if (!model) return null;

  return (
    <aside className="physics-standard-demo">
      <div className="psd-head">
        <span>STANDARD PHYSICS VISUAL</span>
        <b>3.8s LOOP</b>
      </div>

      <div className="psd-stage">
        <Visual type={model.type}/>
      </div>

      <div className="psd-title">
        <strong>{model.label}</strong>
        <span>{model.note}</span>
      </div>
    </aside>
  );
}
