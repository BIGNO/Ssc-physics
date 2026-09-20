import React, { useEffect, useMemo, useState } from "react";
import "./PerTopicPhysicsDiagrams.css";

const DEFAULTS = {
  measurement: {
    length: 30,
    division: 10
  },

  motion: {
    velocity: 10,
    acceleration: 2,
    time: 5
  },

  force: {
    force: 30,
    mass: 5,
    angle: 30
  },

  momentum: {
    mass: 5,
    velocity: 10
  },

  energy: {
    mass: 5,
    height: 10,
    gravity: 9.8
  },

  density: {
    mass: 5,
    volume: 2
  },

  pressure: {
    force: 100,
    area: 20,
    depth: 5
  },

  wave: {
    wavelength: 100,
    amplitude: 45,
    frequency: 2
  },

  sound: {
    frequency: 4,
    amplitude: 20,
    wavelength: 100
  },

  reflection: {
    angle: 35
  },

  refraction: {
    angle: 35,
    refractiveIndex: 1.5
  },

  lens: {
    focalLength: 60,
    objectDistance: 140,
    objectHeight: 55
  },

  mirror: {
    focalLength: 60,
    objectDistance: 140,
    objectHeight: 55
  },

  circuit: {
    voltage: 12,
    resistance: 10
  },

  seriesparallel: {
    voltage: 12,
    r1: 10,
    r2: 20
  },

  magnetic: {
    current: 4,
    strength: 6,
    distance: 5
  },

  motor: {
    current: 4,
    strength: 6,
    turns: 10
  },

  generator: {
    speed: 120,
    strength: 6,
    turns: 10
  },

  transformer: {
    voltage: 220,
    primaryTurns: 100,
    secondaryTurns: 50
  },

  heat: {
    temperature: 50,
    mass: 2,
    specificHeat: 4.2
  },

  atom: {
    protons: 6,
    neutrons: 6,
    electrons: 6
  },

  radioactivity: {
    nuclei: 20,
    halfLife: 5
  },

  semiconductor: {
    voltage: 5,
    doping: 50
  },

  machine: {
    effort: 40,
    load: 100,
    distance: 5
  },

  graph: {
    x: 5,
    y: 10
  }
};

function numberValue(value, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function detectModel(title = "", chapterTitle = "", focus = "") {
  const text =
    `${chapterTitle} ${focus} ${title}`.toLowerCase();

  if (
    /পরিমাপ|রাশি|একক|মাত্রা|measurement|quantity|unit|dimension|vernier|screw gauge|least count/
      .test(text)
  ) return "measurement";

  if (
    /বেগ|দ্রুতি|ত্বরণ|গতি|velocity|speed|acceleration|motion|distance|displacement/
      .test(text)
  ) return "motion";

  if (
    /ভরবেগ|momentum|impulse|impulse momentum/
      .test(text)
  ) return "momentum";

  if (
    /বল|নিউটন|ঘর্ষণ|force|newton|friction|weight|free body/
      .test(text)
  ) return "force";

  if (
    /কাজ|শক্তি|ক্ষমতা|work|energy|power|kinetic|potential|mechanical/
      .test(text)
  ) return "energy";

  if (
    /ঘনত্ব|density|আপেক্ষিক গুরুত্ব|relative density|specific gravity/
      .test(text)
  ) return "density";

  if (
    /চাপ|pressure|pascal|liquid pressure|তরলচাপ/
      .test(text)
  ) return "pressure";

  if (
    /তরঙ্গ|wave|wavelength|amplitude|frequency/
      .test(text)
  ) return "wave";

  if (
    /শব্দ|sound|echo|resonance|sonic|ultrasonic|infrasonic/
      .test(text)
  ) return "sound";

  if (
    /প্রতিফলন|reflection|আলোর প্রতিফলন|plane mirror/
      .test(text)
  ) return "reflection";

  if (
    /প্রতিসরণ|refraction|snell|প্রতিসরাঙ্ক|refractive index/
      .test(text)
  ) return "refraction";

  if (
    /লেন্স|lens|convex lens|concave lens/
      .test(text)
  ) return "lens";

  if (
    /দর্পণ|আয়না|আয়না|mirror|concave mirror|convex mirror/
      .test(text)
  ) return "mirror";

  if (
    /চল তড়িৎ|চল তড়িৎ|বিদ্যুৎ|electric|current|voltage|resistance|ohm|circuit/
      .test(text)
  ) return "circuit";

  if (
    /series|parallel|শ্রেণি|সমান্তরাল|combined resistance/
      .test(text)
  ) return "seriesparallel";

  if (
    /চৌম্বক|চুম্বক|magnetic|magnet|magnetic field/
      .test(text)
  ) return "magnetic";

  if (
    /মোটর|motor|electric motor|force on conductor/
      .test(text)
  ) return "motor";

  if (
    /জেনারেটর|generator|electromagnetic induction/
      .test(text)
  ) return "generator";

  if (
    /ট্রান্সফরমার|transformer/
      .test(text)
  ) return "transformer";

  if (
    /তাপ|তাপমাত্রা|heat|temperature|specific heat|calorimetry/
      .test(text)
  ) return "heat";

  if (
    /পরমাণু|atom|electron|proton|neutron|nucleus|ইলেকট্রন|প্রোটন|নিউট্রন/
      .test(text)
  ) return "atom";

  if (
    /তেজস্ক্রিয়|তেজস্ক্রিয়|radioactive|radioactivity|half life|অর্ধায়ু|অর্ধায়ু/
      .test(text)
  ) return "radioactivity";

  if (
    /semiconductor|অর্ধপরিবাহী|p-n junction|diode|ডায়োড|ডায়োড/
      .test(text)
  ) return "semiconductor";

  if (
    /যন্ত্র|machine|lever|pulley|inclined plane|mechanical advantage/
      .test(text)
  ) return "machine";

  return "graph";
}

function defaultsFor(model) {
  return {
    ...(DEFAULTS[model] || DEFAULTS.graph),
    model
  };
}

const CONTROL_MAP = {
  measurement: [
    ["Length", "length", 5, 100, 1, "cm"],
    ["Smallest Division", "division", 1, 20, 1, "mm"]
  ],

  motion: [
    ["Velocity (v)", "velocity", 0, 30, 0.5, "m/s"],
    ["Acceleration (a)", "acceleration", 0, 10, 0.5, "m/s²"],
    ["Time (t)", "time", 1, 20, 0.5, "s"]
  ],

  force: [
    ["Force (F)", "force", 1, 80, 1, "N"],
    ["Mass (m)", "mass", 1, 30, 0.5, "kg"],
    ["Angle (θ)", "angle", 0, 89, 1, "°"]
  ],

  momentum: [
    ["Mass (m)", "mass", 1, 30, 0.5, "kg"],
    ["Velocity (v)", "velocity", 0, 30, 0.5, "m/s"]
  ],

  energy: [
    ["Mass (m)", "mass", 1, 30, 0.5, "kg"],
    ["Height (h)", "height", 1, 30, 1, "m"],
    ["Gravity (g)", "gravity", 9.8, 10, 0.1, "m/s²"]
  ],

  density: [
    ["Mass (m)", "mass", 1, 30, 0.5, "kg"],
    ["Volume (V)", "volume", 0.5, 20, 0.5, "L"]
  ],

  pressure: [
    ["Force (F)", "force", 10, 500, 5, "N"],
    ["Area (A)", "area", 1, 100, 1, "cm²"],
    ["Depth (h)", "depth", 1, 20, 1, "m"]
  ],

  wave: [
    ["Wavelength (λ)", "wavelength", 40, 180, 1, "px"],
    ["Amplitude (A)", "amplitude", 10, 90, 1, "px"],
    ["Frequency (f)", "frequency", 1, 10, 0.5, "Hz"]
  ],

  sound: [
    ["Frequency", "frequency", 1, 10, 0.5, "kHz"],
    ["Amplitude", "amplitude", 5, 40, 1, "px"],
    ["Wavelength", "wavelength", 40, 180, 1, "px"]
  ],

  reflection: [
    ["Angle of Incidence", "angle", 5, 80, 1, "°"]
  ],

  refraction: [
    ["Incident Angle", "angle", 5, 80, 1, "°"],
    ["Refractive Index", "refractiveIndex", 1.1, 2.5, 0.1, ""]
  ],

  lens: [
    ["Focal Length (f)", "focalLength", 20, 120, 1, "cm"],
    ["Object Distance (u)", "objectDistance", 30, 250, 1, "cm"],
    ["Object Height", "objectHeight", 20, 100, 1, "cm"]
  ],

  mirror: [
    ["Focal Length (f)", "focalLength", 20, 120, 1, "cm"],
    ["Object Distance (u)", "objectDistance", 30, 250, 1, "cm"],
    ["Object Height", "objectHeight", 20, 100, 1, "cm"]
  ],

  circuit: [
    ["Voltage (V)", "voltage", 1, 24, 1, "V"],
    ["Resistance (R)", "resistance", 1, 50, 1, "Ω"]
  ],

  seriesparallel: [
    ["Supply Voltage", "voltage", 1, 24, 1, "V"],
    ["R₁", "r1", 1, 50, 1, "Ω"],
    ["R₂", "r2", 1, 50, 1, "Ω"]
  ],

  magnetic: [
    ["Current (I)", "current", 1, 10, 0.5, "A"],
    ["Field Strength", "strength", 1, 12, 1, ""],
    ["Distance", "distance", 1, 20, 1, "cm"]
  ],

  motor: [
    ["Current (I)", "current", 1, 10, 0.5, "A"],
    ["Field Strength", "strength", 1, 12, 1, ""],
    ["Turns", "turns", 1, 30, 1, ""]
  ],

  generator: [
    ["Speed", "speed", 20, 300, 10, "rpm"],
    ["Field Strength", "strength", 1, 12, 1, ""],
    ["Turns", "turns", 1, 30, 1, ""]
  ],

  transformer: [
    ["Primary Voltage", "voltage", 50, 400, 5, "V"],
    ["Primary Turns", "primaryTurns", 20, 200, 5, ""],
    ["Secondary Turns", "secondaryTurns", 10, 200, 5, ""]
  ],

  heat: [
    ["Temperature", "temperature", 0, 100, 1, "°C"],
    ["Mass", "mass", 1, 10, 0.5, "kg"],
    ["Specific Heat", "specificHeat", 1, 10, 0.1, "kJ/kg°C"]
  ],

  atom: [
    ["Protons", "protons", 1, 12, 1, ""],
    ["Neutrons", "neutrons", 0, 18, 1, ""],
    ["Electrons", "electrons", 1, 12, 1, ""]
  ],

  radioactivity: [
    ["Nuclei", "nuclei", 1, 40, 1, ""],
    ["Half-life", "halfLife", 1, 20, 1, "s"]
  ],

  semiconductor: [
    ["Voltage", "voltage", 0, 10, 0.5, "V"],
    ["Doping", "doping", 0, 100, 5, "%"]
  ],

  machine: [
    ["Effort", "effort", 5, 100, 5, "N"],
    ["Load", "load", 10, 200, 5, "N"],
    ["Distance", "distance", 1, 20, 1, "m"]
  ],

  graph: [
    ["X value", "x", 1, 20, 1, ""],
    ["Y value", "y", 1, 30, 1, ""]
  ]
};

function LiveMetric({label,value}) {
  return (
    <div className="ptpd-metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function PhysicsSVG({model,values,playing}) {

  const arrowId =
    `ptpd-arrow-${model}-${Math.round(
      numberValue(
        values?.velocity ||
        values?.force ||
        values?.voltage ||
        values?.x ||
        1
      )
    )}`;

  const glowId =
    `ptpd-glow-${model}-${Math.round(
      numberValue(values?.x || values?.force || 1)
    )}`;

  const defs = (
    <defs>

      <marker
        id={arrowId}
        markerWidth="12"
        markerHeight="12"
        refX="10"
        refY="6"
        orient="auto"
      >
        <path
          d="M0,0 L12,6 L0,12 z"
          className="ptpd-arrow"
        />
      </marker>

      <filter
        id={glowId}
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
      >
        <feGaussianBlur
          stdDeviation="3"
          result="blur"
        />

        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>

      </filter>

    </defs>
  );

  const Frame = ({title,subtitle,children}) => (
    <svg
      viewBox="0 0 980 570"
      className="ptpd-svg"
    >

      {defs}

      <rect
        x="18"
        y="18"
        width="944"
        height="534"
        rx="25"
        className="ptpd-bg"
      />

      <g className="ptpd-grid">

        {Array.from({length:18}).map((_,i)=>(
          <line
            key={`gx-${i}`}
            x1={55+i*50}
            y1="125"
            x2={55+i*50}
            y2="510"
          />
        ))}

        {Array.from({length:9}).map((_,i)=>(
          <line
            key={`gy-${i}`}
            x1="55"
            y1={135+i*42}
            x2="925"
            y2={135+i*42}
          />
        ))}

      </g>

      <text
        x="55"
        y="55"
        className="ptpd-kicker"
      >
        PHYSICS LAB
      </text>

      <text
        x="55"
        y="88"
        className="ptpd-svg-title"
      >
        {title}
      </text>

      <text
        x="55"
        y="110"
        className="ptpd-svg-subtitle"
      >
        {subtitle}
      </text>

      {children}

    </svg>
  );

  if(model==="measurement"){

    const length =
      numberValue(values.length,30);

    const divisions =
      Math.max(
        1,
        Math.min(
          20,
          Math.round(numberValue(values.division,10))
        )
      );

    const rulerWidth =
      Math.min(720,160+length*6);

    return Frame(
      "Measurement",
      `Length = ${length} cm • Smallest division = ${values.division} mm`,
      <g>

        <rect
          x="120"
          y="260"
          width={rulerWidth}
          height="70"
          rx="8"
          className="ptpd-ruler"
        />

        {Array.from({length:divisions+1}).map((_,i)=>(
          <line
            key={i}
            x1={120+i*(rulerWidth/divisions)}
            y1={260}
            x2={120+i*(rulerWidth/divisions)}
            y2={i%5===0?285:275}
            className="ptpd-ruler-mark"
          />
        ))}

        <line
          x1="120"
          y1="230"
          x2={120+rulerWidth}
          y2="230"
          className="ptpd-dimension"
          markerEnd={`url(#${arrowId})`}
        />

        <text
          x="390"
          y="215"
          className="ptpd-orange"
        >
          {length} cm
        </text>

        <rect
          x={120+rulerWidth*.42}
          y="190"
          width={Math.max(40,Math.min(170,length*1.3))}
          height="45"
          rx="7"
          className="ptpd-object"
        />

        <text
          x="355"
          y="380"
          className="ptpd-muted"
        >
          Live scale model
        </text>

      </g>
    );
  }

  if(model==="motion"){

    const velocity =
      numberValue(values.velocity,10);

    const acceleration =
      numberValue(values.acceleration,2);

    const time =
      numberValue(values.time,5);

    const distance =
      velocity*time +
      .5*acceleration*time*time;

    const carX =
      Math.min(
        790,
        120 + distance*8
      );

    return Frame(
      "Motion — Position / Time",
      `v = ${velocity} m/s • a = ${acceleration} m/s² • t = ${time} s`,
      <g>

        <line
          x1="80"
          y1="390"
          x2="900"
          y2="390"
          className="ptpd-axis"
        />

        {Array.from({length:9}).map((_,i)=>(
          <line
            key={i}
            x1={90+i*95}
            y1="382"
            x2={90+i*95}
            y2="398"
            className="ptpd-axis"
          />
        ))}

        <path
          d="M90 335 Q280 310 470 240 T890 145"
          className="ptpd-graph"
        />

        <g>
          <rect
            x={carX-32}
            y="345"
            width="64"
            height="32"
            rx="8"
            className="ptpd-car"
          />

          <circle
            cx={carX-19}
            cy="379"
            r="9"
            className="ptpd-wheel"
          />

          <circle
            cx={carX+19}
            cy="379"
            r="9"
            className="ptpd-wheel"
          />

          {playing && (
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="40 0"
              dur="1.2s"
              repeatCount="indefinite"
            />
          )}
        </g>

        <line
          x1={Math.max(130,carX-70)}
          y1="340"
          x2={Math.min(820,carX+170)}
          y2="340"
          className="ptpd-vector"
          markerEnd={`url(#${arrowId})`}
          filter={`url(#${glowId})`}
        />

        <text
          x={Math.max(145,carX-50)}
          y="315"
          className="ptpd-blue"
        >
          v = {velocity} m/s
        </text>

        <text
          x="95"
          y="485"
          className="ptpd-muted"
        >
          Distance = {distance.toFixed(1)} m
        </text>

      </g>
    );
  }

  if(model==="force"){

    const F=numberValue(values.force,30);
    const m=numberValue(values.mass,5);
    const angle=numberValue(values.angle,30);

    const length =
      Math.min(280,60+F*4);

    const r =
      angle*Math.PI/180;

    const x2 =
      500+length*Math.cos(r);

    const y2 =
      395-length*Math.sin(r);

    return Frame(
      "Force — Free Body Diagram",
      `F = ${F} N • m = ${m} kg • θ = ${angle}°`,
      <g>

        <line
          x1="90"
          y1="430"
          x2="900"
          y2="430"
          className="ptpd-axis"
        />

        <rect
          x="420"
          y="355"
          width="160"
          height="75"
          rx="12"
          className="ptpd-block"
        />

        <text
          x="464"
          y="400"
          className="ptpd-block-text"
        >
          {m} kg
        </text>

        <line
          x1="500"
          y1="395"
          x2={x2}
          y2={y2}
          className="ptpd-vector"
          markerEnd={`url(#${arrowId})`}
          filter={`url(#${glowId})`}
        />

        <line
          x1="500"
          y1="395"
          x2="500"
          y2="230"
          className="ptpd-vector2"
          markerEnd={`url(#${arrowId})`}
        />

        <text
          x={Math.min(760,x2)}
          y={Math.max(190,y2-14)}
          className="ptpd-blue"
        >
          F = {F} N
        </text>

        <text
          x="515"
          y="215"
          className="ptpd-purple"
        >
          W = mg
        </text>

        <text
          x="520"
          y="420"
          className="ptpd-orange"
        >
          θ = {angle}°
        </text>

      </g>
    );
  }

  if(model==="momentum"){

    const mass=numberValue(values.mass,5);
    const velocity=numberValue(values.velocity,10);
    const p=mass*velocity;

    const blockWidth =
      Math.min(190,70+mass*4);

    const arrowLen =
      Math.min(300,70+velocity*8);

    return Frame(
      "Momentum",
      `p = mv = ${p.toFixed(1)} kg·m/s`,
      <g>

        <line
          x1="100"
          y1="390"
          x2="900"
          y2="390"
          className="ptpd-axis"
        />

        <rect
          x="350"
          y="320"
          width={blockWidth}
          height="70"
          rx="10"
          className="ptpd-block"
        />

        <text
          x="390"
          y="362"
          className="ptpd-block-text"
        >
          m = {mass} kg
        </text>

        <line
          x1="500"
          y1="300"
          x2={500+arrowLen}
          y2="300"
          className="ptpd-vector"
          markerEnd={`url(#${arrowId})`}
        />

        <text
          x="515"
          y="275"
          className="ptpd-blue"
        >
          v = {velocity} m/s
        </text>

        <text
          x="395"
          y="475"
          className="ptpd-orange"
        >
          Momentum increases with mass and velocity
        </text>

      </g>
    );
  }

  if(model==="energy"){

    const m=numberValue(values.mass,5);
    const h=numberValue(values.height,10);
    const g=numberValue(values.gravity,9.8);

    const pe=m*g*h;

    const level =
      Math.min(250,40+h*7);

    return Frame(
      "Gravitational Potential Energy",
      `PE = mgh = ${pe.toFixed(1)} J`,
      <g>

        <line
          x1="100"
          y1="440"
          x2="900"
          y2="440"
          className="ptpd-axis"
        />

        <line
          x1="650"
          y1="440"
          x2="650"
          y2={440-level}
          className="ptpd-dimension"
        />

        <rect
          x="610"
          y={440-level-35}
          width="80"
          height="70"
          rx="10"
          className="ptpd-energy-object"
        />

        <line
          x1="650"
          y1={440-level-35}
          x2="650"
          y2="440"
          className="ptpd-vector2"
          markerEnd={`url(#${arrowId})`}
        />

        <rect
          x="180"
          y={440-Math.min(300,pe/5)}
          width="160"
          height={Math.min(300,pe/5)}
          rx="12"
          className="ptpd-energy-bar"
        />

        <text
          x="185"
          y={425-Math.min(300,pe/5)}
          className="ptpd-blue"
        >
          PE = {pe.toFixed(1)} J
        </text>

        <text
          x="710"
          y={440-level/2}
          className="ptpd-orange"
        >
          h = {h} m
        </text>

      </g>
    );
  }

  if(model==="density"){

    const mass=numberValue(values.mass,5);
    const volume=Math.max(.1,numberValue(values.volume,2));
    const density=mass/volume;

    const liquidLevel =
      315-Math.min(100,volume*5);

    return Frame(
      "Density",
      `ρ = m/V = ${density.toFixed(2)} kg/L`,
      <g>

        <path
          d="M220 175 V445 Q500 500 780 445 V175"
          className="ptpd-container"
        />

        <line
          x1="225"
          y1={liquidLevel}
          x2="775"
          y2={liquidLevel}
          className="ptpd-liquid"
        />

        <rect
          x="420"
          y={liquidLevel-80}
          width={120}
          height="80"
          rx="12"
          className="ptpd-density-block"
        />

        <text
          x="447"
          y={liquidLevel-35}
          className="ptpd-block-text"
        >
          {mass} kg
        </text>

        <text
          x="240"
          y="490"
          className="ptpd-orange"
        >
          V = {volume} L
        </text>

      </g>
    );
  }

  if(model==="pressure"){

    const F=numberValue(values.force,100);
    const A=Math.max(.1,numberValue(values.area,20));
    const h=numberValue(values.depth,5);

    const P=F/A;

    return Frame(
      "Liquid Pressure",
      `P = F/A = ${P.toFixed(2)} N/cm²`,
      <g>

        <path
          d="M220 170 V450 Q500 510 780 450 V170"
          className="ptpd-container"
        />

        <line
          x1="225"
          y1="285"
          x2="775"
          y2="285"
          className="ptpd-liquid"
        />

        {Array.from({length:5}).map((_,i)=>(
          <line
            key={i}
            x1="500"
            y1={315+i*32}
            x2="500"
            y2={340+i*32}
            className="ptpd-vector2"
            markerEnd={`url(#${arrowId})`}
          />
        ))}

        <text
          x="260"
          y="265"
          className="ptpd-blue"
        >
          Liquid
        </text>

        <text
          x="535"
          y="350"
          className="ptpd-orange"
        >
          h = {h} m
        </text>

        <text
          x="280"
          y="490"
          className="ptpd-muted"
        >
          More depth → greater pressure
        </text>

      </g>
    );
  }

  if(model==="wave"){

    const lambda=Math.max(40,numberValue(values.wavelength,100));
    const amp=numberValue(values.amplitude,45);
    const freq=numberValue(values.frequency,2);

    let d="M65 330";

    for(let x=65;x<=915;x+=5){
      const y=
        330+
        amp*
        Math.sin(
          ((x-65)/lambda)*Math.PI*2
        );

      d+=` L${x} ${y}`;
    }

    return Frame(
      "Transverse Wave",
      `λ = ${lambda} px • A = ${amp} px • f = ${freq} Hz`,
      <g>

        <line
          x1="65"
          y1="330"
          x2="915"
          y2="330"
          className="ptpd-axis"
        />

        <path
          d={d}
          className="ptpd-wave"
        >
          {playing && (
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-150"
              dur="2s"
              repeatCount="indefinite"
            />
          )}
        </path>

        <line
          x1="160"
          y1={330-amp}
          x2="160"
          y2="330"
          className="ptpd-dimension"
        />

        <text
          x="175"
          y={315-amp}
          className="ptpd-orange"
        >
          A = {amp}
        </text>

        <line
          x1="250"
          y1="455"
          x2={Math.min(800,250+lambda)}
          y2="455"
          className="ptpd-dimension"
        />

        <text
          x="355"
          y="485"
          className="ptpd-orange"
        >
          λ = {lambda}
        </text>

      </g>
    );
  }

  if(model==="sound"){

    const frequency=numberValue(values.frequency,4);
    const amplitude=numberValue(values.amplitude,20);
    const wavelength=numberValue(values.wavelength,100);

    const dots=[];

    for(let x=80;x<=900;x+=14){
      const compression =
        Math.sin(
          ((x-80)/wavelength)*
          Math.PI*2
        );

      const gap =
        8+Math.max(
          1,
          8-
          compression*5
        );

      dots.push(
        <circle
          key={x}
          cx={x}
          cy={330+
            Math.sin(
              x*.035
            )*amplitude*.15}
          r={gap/2}
          className="ptpd-sound-dot"
        />
      );
    }

    return Frame(
      "Sound — Longitudinal Wave",
      `f = ${frequency} kHz • λ = ${wavelength} • amplitude = ${amplitude}`,
      <g>

        <line
          x1="70"
          y1="330"
          x2="910"
          y2="330"
          className="ptpd-axis"
        />

        {dots}

        <text
          x="315"
          y="475"
          className="ptpd-orange"
        >
          Compression ↔ Rarefaction
        </text>

      </g>
    );
  }

  if(model==="reflection"){

    const angle=numberValue(values.angle,35);
    const rad=angle*Math.PI/180;

    const ix=500;
    const iy=330;

    const len=210;

    const incidentX=
      ix-len*Math.sin(rad);

    const incidentY=
      iy-len*Math.cos(rad);

    const reflectedX=
      ix+len*Math.sin(rad);

    const reflectedY=
      iy-len*Math.cos(rad);

    return Frame(
      "Reflection of Light",
      `Angle of incidence = ${angle}° • Angle of reflection = ${angle}°`,
      <g>

        <line
          x1="500"
          y1="135"
          x2="500"
          y2="470"
          className="ptpd-mirror-line"
        />

        <line
          x1="80"
          y1="330"
          x2="900"
          y2="330"
          className="ptpd-axis"
          strokeDasharray="7 7"
        />

        <line
          x1={incidentX}
          y1={incidentY}
          x2={ix}
          y2={iy}
          className="ptpd-ray"
          markerEnd={`url(#${arrowId})`}
        />

        <line
          x1={ix}
          y1={iy}
          x2={reflectedX}
          y2={reflectedY}
          className="ptpd-ray2"
          markerEnd={`url(#${arrowId})`}
        />

        <line
          x1={ix}
          y1={iy}
          x2={ix}
          y2={iy-210}
          className="ptpd-normal"
          strokeDasharray="6 6"
        />

        <text
          x="515"
          y="160"
          className="ptpd-element"
        >
          MIRROR
        </text>

        <text
          x="375"
          y="210"
          className="ptpd-blue"
        >
          i = {angle}°
        </text>

        <text
          x="570"
          y="210"
          className="ptpd-orange"
        >
          r = {angle}°
        </text>

      </g>
    );
  }

  if(model==="refraction"){

    const angle=numberValue(values.angle,35);
    const n=numberValue(values.refractiveIndex,1.5);

    const r =
      Math.asin(
        Math.sin(angle*Math.PI/180)/n
      );

    const refractedDeg =
      r*180/Math.PI;

    const ix=490;
    const iy=330;

    const len=230;

    return Frame(
      "Refraction — Snell's Law",
      `i = ${angle}° • n = ${n} • r ≈ ${refractedDeg.toFixed(1)}°`,
      <g>

        <line
          x1="70"
          y1={iy}
          x2="910"
          y2={iy}
          className="ptpd-interface"
        />

        <text
          x="100"
          y="300"
          className="ptpd-blue"
        >
          Medium 1
        </text>

        <text
          x="100"
          y="380"
          className="ptpd-orange"
        >
          Medium 2
        </text>

        <line
          x1={ix}
          y1={iy}
          x2={ix}
          y2={iy-220}
          className="ptpd-normal"
          strokeDasharray="6 6"
        />

        <line
          x1={ix-len*Math.sin(angle*Math.PI/180)}
          y1={iy-len*Math.cos(angle*Math.PI/180)}
          x2={ix}
          y2={iy}
          className="ptpd-ray"
          markerEnd={`url(#${arrowId})`}
        />

        <line
          x1={ix}
          y1={iy}
          x2={ix+len*.7*Math.sin(r)}
          y2={iy+len*.7*Math.cos(r)}
          className="ptpd-ray2"
          markerEnd={`url(#${arrowId})`}
        />

        <text
          x="360"
          y="210"
          className="ptpd-blue"
        >
          i = {angle}°
        </text>

        <text
          x="550"
          y="415"
          className="ptpd-orange"
        >
          r = {refractedDeg.toFixed(1)}°
        </text>

      </g>
    );
  }

  if(model==="lens"){

    const f=Math.max(
      1,
      numberValue(values.focalLength,60)
    );

    const u=Math.max(
      2,
      numberValue(values.objectDistance,140)
    );

    const h=Math.max(
      5,
      numberValue(values.objectHeight,55)
    );

    const axisY=340;
    const lensX=500;

    const denominator=u-f;

    const v=
      Math.abs(denominator)<.5
        ? Infinity
        : (u*f)/denominator;

    const span=Math.max(
      100,
      u,
      2*f,
      Number.isFinite(v)
        ? Math.abs(v)
        : 120
    );

    const scale=
      Math.min(
        2.7,
        390/span
      );

    const objectX=
      Math.max(
        80,
        lensX-u*scale
      );

    const imageX=
      !Number.isFinite(v)
        ? 885
        : v>0
          ? Math.min(
              900,
              lensX+Math.abs(v)*scale
            )
          : Math.max(
              90,
              lensX-Math.abs(v)*scale
            );

    const objectH=
      Math.max(
        45,
        Math.min(
          160,
          h*1.7
        )
      );

    const magnification=
      !Number.isFinite(v)
        ? 3
        : Math.abs(v/u);

    const imageH=
      Math.max(
        35,
        Math.min(
          195,
          objectH*magnification
        )
      );

    const f1=lensX-f*scale;
    const f2=lensX+f*scale;
    const twoF1=lensX-2*f*scale;
    const twoF2=lensX+2*f*scale;

    return Frame(
      "Convex Lens — Ray Diagram",
      `f = ${f} cm • u = ${u} cm • 1/f = 1/v + 1/u`,
      <g>

        <line
          x1="65"
          y1={axisY}
          x2="915"
          y2={axisY}
          className="ptpd-axis"
        />

        <path
          d="M478 130 Q500 340 478 550"
          className="ptpd-lens-shape"
        />

        <path
          d="M522 130 Q500 340 522 550"
          className="ptpd-lens-shape"
        />

        <text
          x="455"
          y="116"
          className="ptpd-element"
        >
          CONVEX LENS
        </text>

        <circle cx={f1} cy={axisY} r="5" className="ptpd-focus"/>
        <circle cx={f2} cy={axisY} r="5" className="ptpd-focus"/>
        <circle cx={twoF1} cy={axisY} r="5" className="ptpd-focus"/>
        <circle cx={twoF2} cy={axisY} r="5" className="ptpd-focus"/>

        <text x={f1-9} y={axisY+28} className="ptpd-mark">
          F₁
        </text>

        <text x={f2-9} y={axisY+28} className="ptpd-mark">
          F₂
        </text>

        <text x={twoF1-18} y={axisY+28} className="ptpd-mark">
          2F₁
        </text>

        <text x={twoF2-18} y={axisY+28} className="ptpd-mark">
          2F₂
        </text>

        <line
          x1={objectX}
          y1={axisY}
          x2={objectX}
          y2={axisY-objectH}
          className="ptpd-object-line"
        />

        <line
          x1={objectX-15}
          y1={axisY-objectH}
          x2={objectX+15}
          y2={axisY-objectH}
          className="ptpd-object-cap"
        />

        <text
          x={objectX-32}
          y={axisY-objectH-15}
          className="ptpd-object-label"
        >
          OBJECT
        </text>

        {playing && (
          <g>

            <line
              x1={objectX}
              y1={axisY-objectH}
              x2={lensX}
              y2={axisY-objectH}
              className="ptpd-ray"
              markerEnd={`url(#${arrowId})`}
              filter={`url(#${glowId})`}
            />

            <line
              x1={lensX}
              y1={axisY-objectH}
              x2={imageX}
              y2={axisY-imageH}
              className="ptpd-ray2"
            />

            <line
              x1={objectX}
              y1={axisY-objectH}
              x2={lensX}
              y2={axisY}
              className="ptpd-ray"
            />

            <line
              x1={lensX}
              y1={axisY}
              x2={imageX}
              y2={axisY-imageH}
              className="ptpd-ray2"
            />

          </g>
        )}

        {Number.isFinite(v) && (
          <g>

            <line
              x1={imageX}
              y1={axisY}
              x2={imageX}
              y2={axisY-imageH}
              className="ptpd-image-line"
            />

            <line
              x1={imageX-14}
              y1={axisY-imageH}
              x2={imageX+14}
              y2={axisY-imageH}
              className="ptpd-image-cap"
            />

            <text
              x={imageX-40}
              y={axisY-imageH-15}
              className="ptpd-image-label"
            >
              {v>0 ? "REAL IMAGE" : "VIRTUAL IMAGE"}
            </text>

          </g>
        )}

      </g>
    );
  }

  if(model==="mirror"){

    const f=Math.max(
      1,
      numberValue(values.focalLength,60)
    );

    const u=Math.max(
      2,
      numberValue(values.objectDistance,140)
    );

    const h=Math.max(
      5,
      numberValue(values.objectHeight,55)
    );

    const axisY=340;
    const mirrorX=650;

    const denominator=u-f;

    const v=
      Math.abs(denominator)<.5
        ? Infinity
        : (u*f)/denominator;

    const span=Math.max(
      100,
      u,
      2*f,
      Number.isFinite(v)
        ? Math.abs(v)
        : 120
    );

    const scale=Math.min(2.8,430/span);

    const objectX=
      Math.max(
        75,
        mirrorX-u*scale
      );

    const imageX=
      !Number.isFinite(v)
        ? 110
        : v>0
          ? Math.max(
              70,
              mirrorX-Math.abs(v)*scale
            )
          : Math.min(
              900,
              mirrorX+Math.abs(v)*scale
            );

    const objectH=
      Math.max(
        45,
        Math.min(
          165,
          h*1.7
        )
      );

    const imageH=
      Math.max(
        35,
        Math.min(
          190,
          objectH*
          (Number.isFinite(v)?Math.abs(v/u):2.5)
        )
      );

    const fX=mirrorX-f*scale;
    const cX=mirrorX-2*f*scale;

    return Frame(
      "Concave Mirror — Ray Diagram",
      `f = ${f} cm • u = ${u} cm`,
      <g>

        <line
          x1="65"
          y1={axisY}
          x2="915"
          y2={axisY}
          className="ptpd-axis"
        />

        <path
          d="M650 130 Q580 340 650 550"
          className="ptpd-mirror-shape"
        />

        <line
          x1="662"
          y1="130"
          x2="662"
          y2="550"
          className="ptpd-mirror-back"
        />

        <text
          x="570"
          y="115"
          className="ptpd-element"
        >
          CONCAVE MIRROR
        </text>

        <circle
          cx={fX}
          cy={axisY}
          r="5"
          className="ptpd-focus"
        />

        <circle
          cx={cX}
          cy={axisY}
          r="5"
          className="ptpd-focus"
        />

        <text
          x={fX-7}
          y={axisY+28}
          className="ptpd-mark"
        >
          F
        </text>

        <text
          x={cX-7}
          y={axisY+28}
          className="ptpd-mark"
        >
          C
        </text>

        <line
          x1={objectX}
          y1={axisY}
          x2={objectX}
          y2={axisY-objectH}
          className="ptpd-object-line"
        />

        <line
          x1={objectX-15}
          y1={axisY-objectH}
          x2={objectX+15}
          y2={axisY-objectH}
          className="ptpd-object-cap"
        />

        <text
          x={objectX-31}
          y={axisY-objectH-15}
          className="ptpd-object-label"
        >
          OBJECT
        </text>

        {playing && (
          <g>

            <line
              x1={objectX}
              y1={axisY-objectH}
              x2={mirrorX}
              y2={axisY-objectH}
              className="ptpd-ray"
            />

            <line
              x1={mirrorX}
              y1={axisY-objectH}
              x2={imageX}
              y2={axisY-imageH}
              className="ptpd-ray2"
            />

            <line
              x1={objectX}
              y1={axisY-objectH}
              x2={fX}
              y2={axisY}
              className="ptpd-ray"
            />

            <line
              x1={fX}
              y1={axisY}
              x2={mirrorX}
              y2={axisY-objectH}
              className="ptpd-ray2"
            />

          </g>
        )}

        {Number.isFinite(v) && (
          <g>

            <line
              x1={imageX}
              y1={axisY}
              x2={imageX}
              y2={axisY-imageH}
              className="ptpd-image-line"
            />

            <line
              x1={imageX-14}
              y1={axisY-imageH}
              x2={imageX+14}
              y2={axisY-imageH}
              className="ptpd-image-cap"
            />

            <text
              x={imageX-25}
              y={axisY-imageH-15}
              className="ptpd-image-label"
            >
              IMAGE
            </text>

          </g>
        )}

      </g>
    );
  }

  if(model==="circuit"){

    const voltage=numberValue(values.voltage,12);
    const resistance=Math.max(
      .1,
      numberValue(values.resistance,10)
    );

    const current=voltage/resistance;

    return Frame(
      "Electric Circuit — Ohm's Law",
      `V = ${voltage} V • R = ${resistance} Ω • I = ${current.toFixed(2)} A`,
      <g>

        <path
          d="M165 175 H820 V440 H165 Z"
          className="ptpd-wire"
        />

        <line
          x1="165"
          y1="175"
          x2="165"
          y2="250"
          className="ptpd-wire"
        />

        <line
          x1="165"
          y1="365"
          x2="165"
          y2="440"
          className="ptpd-wire"
        />

        <line
          x1="145"
          y1="250"
          x2="145"
          y2="365"
          className="ptpd-battery-long"
        />

        <line
          x1="185"
          y1="275"
          x2="185"
          y2="340"
          className="ptpd-battery-short"
        />

        <rect
          x="400"
          y="152"
          width="130"
          height="46"
          rx="8"
          className="ptpd-resistor"
        />

        <text
          x="455"
          y="182"
          className="ptpd-component"
        >
          R
        </text>

        <circle
          cx="720"
          cy="308"
          r="36"
          className="ptpd-bulb"
        />

        <path
          d="M705 287 Q720 308 735 287"
          className="ptpd-filament"
        />

        {playing && (
          <line
            x1="205"
            y1="175"
            x2="350"
            y2="175"
            className="ptpd-current"
            markerEnd={`url(#${arrowId})`}
          />
        )}

        <text
          x="220"
          y="140"
          className="ptpd-blue"
        >
          I = {current.toFixed(2)} A
        </text>

        <text
          x="410"
          y="130"
          className="ptpd-purple"
        >
          R = {resistance} Ω
        </text>

        <text
          x="105"
          y="415"
          className="ptpd-orange"
        >
          V = {voltage} V
        </text>

      </g>
    );
  }

  if(model==="seriesparallel"){

    const V=numberValue(values.voltage,12);
    const r1=Math.max(.1,numberValue(values.r1,10));
    const r2=Math.max(.1,numberValue(values.r2,20));

    const seriesR=r1+r2;
    const parallelR=(r1*r2)/(r1+r2);

    return Frame(
      "Series / Parallel Resistance",
      `Series = ${seriesR.toFixed(1)} Ω • Parallel = ${parallelR.toFixed(1)} Ω`,
      <g>

        <text
          x="125"
          y="165"
          className="ptpd-element"
        >
          SERIES
        </text>

        <line
          x1="120"
          y1="210"
          x2="420"
          y2="210"
          className="ptpd-wire"
        />

        <rect
          x="190"
          y="185"
          width="80"
          height="50"
          className="ptpd-resistor"
        />

        <rect
          x="310"
          y="185"
          width="80"
          height="50"
          className="ptpd-resistor"
        />

        <text
          x="218"
          y="217"
          className="ptpd-component"
        >
          R₁
        </text>

        <text
          x="338"
          y="217"
          className="ptpd-component"
        >
          R₂
        </text>

        <text
          x="125"
          y="330"
          className="ptpd-element"
        >
          PARALLEL
        </text>

        <line
          x1="120"
          y1="375"
          x2="210"
          y2="375"
          className="ptpd-wire"
        />

        <line
          x1="210"
          y1="375"
          x2="210"
          y2="320"
          className="ptpd-wire"
        />

        <line
          x1="210"
          y1="320"
          x2="390"
          y2="320"
          className="ptpd-wire"
        />

        <line
          x1="210"
          y1="375"
          x2="210"
          y2="430"
          className="ptpd-wire"
        />

        <line
          x1="210"
          y1="430"
          x2="390"
          y2="430"
          className="ptpd-wire"
        />

        <line
          x1="390"
          y1="320"
          x2="390"
          y2="430"
          className="ptpd-wire"
        />

        <rect
          x="260"
          y="295"
          width="80"
          height="50"
          className="ptpd-resistor"
        />

        <rect
          x="260"
          y="405"
          width="80"
          height="50"
          className="ptpd-resistor"
        />

        <text x="288" y="326" className="ptpd-component">R₁</text>
        <text x="288" y="436" className="ptpd-component">R₂</text>

        <text
          x="525"
          y="240"
          className="ptpd-blue"
        >
          V = {V} V
        </text>

      </g>
    );
  }

  if(model==="magnetic"){

    const strength=
      Math.max(
        1,
        Math.min(
          12,
          numberValue(values.strength,6)
        )
      );

    const count=
      Math.max(
        4,
        Math.min(
          9,
          Math.round(strength/1.35)
        )
      );

    return Frame(
      "Magnetic Field",
      `I = ${values.current} A • strength = ${strength}`,
      <g>

        <rect
          x="400"
          y="275"
          width="95"
          height="75"
          rx="9"
          className="ptpd-magnet-n"
        />

        <rect
          x="495"
          y="275"
          width="95"
          height="75"
          rx="9"
          className="ptpd-magnet-s"
        />

        <text
          x="437"
          y="323"
          className="ptpd-magnet-letter"
        >
          N
        </text>

        <text
          x="528"
          y="323"
          className="ptpd-magnet-letter"
        >
          S
        </text>

        {Array.from({length:count}).map((_,i)=>(
          <path
            key={`t-${i}`}
            d={`M${400-i*32} 275 Q495 ${115-i*8} ${590+i*32} 275`}
            className="ptpd-field"
          />
        ))}

        {Array.from({length:count}).map((_,i)=>(
          <path
            key={`b-${i}`}
            d={`M${400-i*32} 350 Q495 ${470+i*8} ${590+i*32} 350`}
            className="ptpd-field"
          />
        ))}

        <text
          x="280"
          y="490"
          className="ptpd-orange"
        >
          Stronger field → denser lines
        </text>

      </g>
    );
  }

  if(model==="motor"){

    const current=numberValue(values.current,4);
    const strength=numberValue(values.strength,6);
    const turns=numberValue(values.turns,10);

    return Frame(
      "Electric Motor",
      `I = ${current} A • B = ${strength} • turns = ${turns}`,
      <g>

        <rect
          x="235"
          y="220"
          width="170"
          height="180"
          rx="16"
          className="ptpd-pole-n"
        />

        <rect
          x="575"
          y="220"
          width="170"
          height="180"
          rx="16"
          className="ptpd-pole-s"
        />

        <text
          x="300"
          y="315"
          className="ptpd-magnet-letter"
        >
          N
        </text>

        <text
          x="640"
          y="315"
          className="ptpd-magnet-letter"
        >
          S
        </text>

        <ellipse
          cx="490"
          cy="310"
          rx="105"
          ry="70"
          className="ptpd-coil"
        />

        <circle
          cx="490"
          cy="310"
          r="28"
          className="ptpd-core"
        />

        <line
          x1="385"
          y1="310"
          x2="595"
          y2="310"
          className="ptpd-axis"
        />

        <line
          x1="490"
          y1="310"
          x2="490"
          y2={210-numberValue(strength)*3}
          className="ptpd-vector"
          markerEnd={`url(#${arrowId})`}
        />

        <text
          x="400"
          y="475"
          className="ptpd-blue"
        >
          Torque ∝ B × I × turns
        </text>

      </g>
    );
  }

  if(model==="generator"){

    const speed=numberValue(values.speed,120);

    return Frame(
      "Generator — Electromagnetic Induction",
      `speed = ${speed} rpm • field = ${values.strength}`,
      <g>

        <rect
          x="240"
          y="220"
          width="150"
          height="180"
          rx="15"
          className="ptpd-pole-n"
        />

        <rect
          x="590"
          y="220"
          width="150"
          height="180"
          rx="15"
          className="ptpd-pole-s"
        />

        <text
          x="296"
          y="315"
          className="ptpd-magnet-letter"
        >
          N
        </text>

        <text
          x="646"
          y="315"
          className="ptpd-magnet-letter"
        >
          S
        </text>

        <circle
          cx="515"
          cy="310"
          r="105"
          className="ptpd-coil"
        />

        {playing && (
          <circle
            cx="515"
            cy="205"
            r="10"
            className="ptpd-motion-dot"
          >
            <animateMotion
              dur={`${Math.max(1,8-speed/60)}s`}
              repeatCount="indefinite"
              path="M0 0 A105 105 0 1 1 -.1 0"
            />
          </circle>
        )}

        <text
          x="395"
          y="475"
          className="ptpd-blue"
        >
          Faster rotation → greater induced emf
        </text>

      </g>
    );
  }

  if(model==="transformer"){

    const V=numberValue(values.voltage,220);
    const Np=Math.max(1,numberValue(values.primaryTurns,100));
    const Ns=Math.max(1,numberValue(values.secondaryTurns,50));

    const Vs=V*Ns/Np;

    return Frame(
      "Transformer",
      `Vp = ${V} V • Np = ${Np} • Ns = ${Ns}`,
      <g>

        <rect
          x="370"
          y="170"
          width="260"
          height="300"
          rx="18"
          className="ptpd-transformer"
        />

        <path
          d="M430 205 Q340 320 430 435"
          className="ptpd-coil"
        />

        <path
          d="M570 205 Q660 320 570 435"
          className="ptpd-coil"
        />

        <text
          x="265"
          y="320"
          className="ptpd-orange"
        >
          PRIMARY
        </text>

        <text
          x="650"
          y="320"
          className="ptpd-orange"
        >
          SECONDARY
        </text>

        <text
          x="410"
          y="510"
          className="ptpd-blue"
        >
          Vs = {Vs.toFixed(1)} V
        </text>

      </g>
    );
  }

  if(model==="heat"){

    const T=numberValue(values.temperature,50);
    const fill=Math.max(
      15,
      Math.min(
        210,
        T*2.1
      )
    );

    const particles=[];

    for(let i=0;i<18;i++){

      const x=
        250+
        ((i*37)%270);

      const y=
        220+
        ((i*53)%120);

      particles.push(
        <circle
          key={i}
          cx={x}
          cy={y}
          r="5"
          className="ptpd-particle"
        >
          {playing && (
            <animate
              attributeName="cx"
              values={`${x};${x+15};${x-10};${x}`}
              dur={`${Math.max(.7,2.4-T/70)}s`}
              repeatCount="indefinite"
            />
          )}
        </circle>
      );
    }

    return Frame(
      "Heat & Temperature",
      `T = ${T}°C • m = ${values.mass} kg`,
      <g>

        <rect
          x="215"
          y="185"
          width="340"
          height="180"
          rx="15"
          className="ptpd-hot-box"
        />

        {particles}

        <rect
          x="650"
          y="150"
          width="65"
          height="225"
          rx="32"
          className="ptpd-thermo"
        />

        <rect
          x="669"
          y={350-fill}
          width="28"
          height={fill}
          rx="14"
          className="ptpd-thermo-fluid"
        />

        <circle
          cx="683"
          cy="390"
          r="48"
          className="ptpd-thermo-bulb"
        />

        <circle
          cx="683"
          cy="390"
          r="30"
          className="ptpd-thermo-fluid"
        />

      </g>
    );
  }

  if(model==="atom"){

    const e=Math.max(
      1,
      Math.min(
        12,
        Math.round(
          numberValue(values.electrons,6)
        )
      )
    );

    const points=[];

    const first=Math.min(2,e);
    const second=Math.max(0,e-first);

    for(let i=0;i<first;i++){

      const a=
        (i/first)*Math.PI*2;

      points.push({
        x:500+100*Math.cos(a),
        y:310+100*Math.sin(a)
      });
    }

    for(let i=0;i<second;i++){

      const a=
        (i/Math.max(1,second))*
        Math.PI*2;

      points.push({
        x:500+185*Math.cos(a),
        y:310+185*Math.sin(a)
      });
    }

    return Frame(
      "Atomic Structure",
      `p⁺ = ${values.protons} • n⁰ = ${values.neutrons} • e⁻ = ${e}`,
      <g>

        <circle
          cx="500"
          cy="310"
          r="48"
          className="ptpd-nucleus"
        />

        <circle
          cx="500"
          cy="310"
          r="100"
          className="ptpd-orbit"
        />

        <circle
          cx="500"
          cy="310"
          r="185"
          className="ptpd-orbit"
        />

        {points.map((p,i)=>(
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="10"
            className="ptpd-electron"
          />
        ))}

        <text
          x="475"
          y="315"
          className="ptpd-nucleus-text"
        >
          N
        </text>

      </g>
    );
  }

  if(model==="radioactivity"){

    const nuclei=Math.max(
      1,
      Math.round(
        numberValue(values.nuclei,20)
      )
    );

    const halfLife=
      Math.max(
        1,
        numberValue(values.halfLife,5)
      );

    const remaining=
      nuclei*
      Math.pow(
        .5,
        1/halfLife
      );

    return Frame(
      "Radioactive Decay",
      `Initial nuclei = ${nuclei} • half-life = ${halfLife} s`,
      <g>

        {Array.from({length:Math.min(40,nuclei)}).map((_,i)=>{

          const col=i%8;
          const row=Math.floor(i/8);

          return (
            <circle
              key={i}
              cx={220+col*65}
              cy={190+row*50}
              r="10"
              className={
                i <
                Math.round(remaining)
                  ? "ptpd-nucleus-small"
                  : "ptpd-decayed"
              }
            />
          );
        })}

        <path
          d="M500 340 C560 250 640 220 770 160"
          className="ptpd-ray"
          markerEnd={`url(#${arrowId})`}
        />

        <text
          x="490"
          y="380"
          className="ptpd-orange"
        >
          α / β / γ emission
        </text>

      </g>
    );
  }

  if(model==="semiconductor"){

    const voltage=numberValue(values.voltage,5);
    const doping=numberValue(values.doping,50);

    const depletion=
      Math.max(
        30,
        150-doping
      );

    return Frame(
      "Semiconductor — P-N Junction",
      `V = ${voltage} V • doping = ${doping}%`,
      <g>

        <rect
          x="210"
          y="220"
          width="250"
          height="170"
          className="ptpd-p-region"
        />

        <rect
          x="460"
          y="220"
          width="250"
          height="170"
          className="ptpd-n-region"
        />

        <rect
          x={435-depletion/3}
          y="220"
          width={depletion}
          height="170"
          className="ptpd-depletion"
        />

        <text
          x="320"
          y="305"
          className="ptpd-component"
        >
          P
        </text>

        <text
          x="570"
          y="305"
          className="ptpd-component"
        >
          N
        </text>

        <line
          x1="360"
          y1="445"
          x2={360+voltage*45}
          y2="445"
          className="ptpd-vector"
          markerEnd={`url(#${arrowId})`}
        />

      </g>
    );
  }

  if(model==="machine"){

    const effort=numberValue(values.effort,40);
    const load=numberValue(values.load,100);
    const distance=numberValue(values.distance,5);

    const ratio=
      effort>0
        ? load/effort
        : 0;

    const loadHeight=
      Math.min(
        180,
        50+ratio*45
      );

    return Frame(
      "Simple Machine",
      `Effort = ${effort} N • Load = ${load} N • Mechanical advantage = ${ratio.toFixed(2)}`,
      <g>

        <line
          x1="120"
          y1="420"
          x2="850"
          y2="420"
          className="ptpd-axis"
        />

        <rect
          x="430"
          y={420-loadHeight}
          width="90"
          height="70"
          rx="10"
          className="ptpd-block"
        />

        <line
          x1="475"
          y1={420-loadHeight}
          x2="310"
          y2="220"
          className="ptpd-vector"
          markerEnd={`url(#${arrowId})`}
        />

        <line
          x1="475"
          y1="340"
          x2="680"
          y2="220"
          className="ptpd-vector2"
          markerEnd={`url(#${arrowId})`}
        />

        <text
          x="170"
          y="470"
          className="ptpd-orange"
        >
          Distance = {distance} m
        </text>

      </g>
    );
  }

  return Frame(
    "Concept Graph",
    "Live concept visualization",
    <g>

      <line
        x1="110"
        y1="430"
        x2="880"
        y2="430"
        className="ptpd-axis"
      />

      <line
        x1="110"
        y1="450"
        x2="110"
        y2="150"
        className="ptpd-axis"
      />

      <path
        d={`M110 420 Q350 ${420-numberValue(values.y,10)*5} 880 ${420-numberValue(values.y,10)*10}`}
        className="ptpd-graph"
      />

      <circle
        cx={110+numberValue(values.x,5)*30}
        cy={420-numberValue(values.y,10)*12}
        r="13"
        className="ptpd-motion-dot"
      />

      <line
        x1="150"
        y1="390"
        x2={200+numberValue(values.x,5)*10}
        y2="390"
        className="ptpd-vector"
        markerEnd={`url(#${arrowId})`}
      />

      <text
        x="250"
        y="485"
        className="ptpd-orange"
      >
        Live concept graph
      </text>

    </g>
  );
}

export default function PerTopicPhysicsDiagrams({
  chapter,
  state,
  update
}) {

  const concepts =
    chapter?.concepts?.length
      ? chapter.concepts
      : [{
          id:`${chapter?.id || "chapter"}-topic`,
          title:chapter?.title || "Physics"
        }];

  const saved =
    state?.diagrams?.[chapter.id] || {};

  const [activeId,setActiveId] =
    useState(
      saved.activeConceptId ||
      concepts[0].id
    );

  const [playing,setPlaying] =
    useState(true);

  useEffect(()=>{
    const next =
      concepts.find(
        c=>c.id===activeId
      );

    if(!next){
      setActiveId(concepts[0].id);
    }
  },[chapter.id,concepts.length]);

  const activeConcept =
    concepts.find(
      c=>c.id===activeId
    ) || concepts[0];

  const model =
    detectModel(
      activeConcept?.title || "",
      chapter?.title || "",
      chapter?.focus || ""
    );

  const stored =
    saved.valuesByConcept?.[activeConcept.id] ||
    {};

  const values = {
    ...defaultsFor(model),
    ...stored
  };

  const controls =
    CONTROL_MAP[model] ||
    CONTROL_MAP.graph;

  const save = (patch={})=>{

    update({
      diagrams:{
        ...state.diagrams,
        [chapter.id]:{
          ...saved,
          activeConceptId:activeConcept.id,
          valuesByConcept:{
            ...(saved.valuesByConcept || {}),
            [activeConcept.id]:{
              ...values,
              ...patch,
              model
            }
          }
        }
      }
    });
  };

  const change = (key,value)=>{
    save({
      [key]:numberValue(
        value,
        values[key]
      )
    });
  };

  const reset = ()=>{
    save(
      defaultsFor(model)
    );
  };

  const selectConcept = (id)=>{
    setActiveId(id);

    const target =
      concepts.find(
        c=>c.id===id
      ) || concepts[0];

    const targetModel =
      detectModel(
        target?.title || "",
        chapter?.title || "",
        chapter?.focus || ""
      );

    update({
      diagrams:{
        ...state.diagrams,
        [chapter.id]:{
          ...saved,
          activeConceptId:id,
          valuesByConcept:{
            ...(saved.valuesByConcept || {}),
            [id]:
              saved.valuesByConcept?.[id] ||
              defaultsFor(targetModel)
          }
        }
      }
    });
  };

  let metric="";

  let status="";

  if(model==="motion"){
    const s=
      numberValue(values.velocity)*numberValue(values.time)+
      .5*numberValue(values.acceleration)*
      numberValue(values.time)*
      numberValue(values.time);

    metric=`s = ${s.toFixed(1)} m`;

    status=
      numberValue(values.acceleration)===0
        ? "Uniform Motion"
        : "Accelerated Motion";
  }

  if(model==="force"){
    metric=
      `a = ${(numberValue(values.force)/Math.max(.1,numberValue(values.mass))).toFixed(2)} m/s²`;

    status=`F = ${values.force} N`;
  }

  if(model==="momentum"){
    metric=
      `p = ${(numberValue(values.mass)*numberValue(values.velocity)).toFixed(1)} kg·m/s`;

    status="p = mv";
  }

  if(model==="energy"){
    metric=
      `PE = ${(numberValue(values.mass)*numberValue(values.gravity)*numberValue(values.height)).toFixed(1)} J`;

    status="Gravitational Potential Energy";
  }

  if(model==="density"){
    metric=
      `ρ = ${(numberValue(values.mass)/Math.max(.1,numberValue(values.volume))).toFixed(2)} kg/L`;

    status="Mass / Volume";
  }

  if(model==="pressure"){
    metric=
      `P = ${(numberValue(values.force)/Math.max(.1,numberValue(values.area))).toFixed(2)} N/cm²`;

    status="Pressure increases with depth";
  }

  if(model==="wave"){
    metric=
      `v = ${(numberValue(values.wavelength)*numberValue(values.frequency)).toFixed(1)} px/s`;

    status=`A = ${values.amplitude} px`;
  }

  if(model==="sound"){
    metric=
      `λ = ${values.wavelength}`;

    status=
      `f = ${values.frequency} kHz`;
  }

  if(model==="reflection"){
    metric=`i = r = ${values.angle}°`;
    status="Law of Reflection";
  }

  if(model==="refraction"){
    const r=
      Math.asin(
        Math.sin(numberValue(values.angle)*Math.PI/180)/
        numberValue(values.refractiveIndex)
      )*180/Math.PI;

    metric=`r ≈ ${r.toFixed(1)}°`;
    status="Snell's Law";
  }

  if(model==="lens" || model==="mirror"){
    const u=numberValue(values.objectDistance);
    const f=numberValue(values.focalLength);

    const v=
      Math.abs(u-f)<.5
        ? Infinity
        : (u*f)/(u-f);

    metric=
      Number.isFinite(v)
        ? `v = ${Math.abs(v).toFixed(1)} cm`
        : "v → ∞";

    status=
      u<f
        ? "Virtual • Upright • Enlarged"
        : Math.abs(u-2*f)<2
          ? "Real • Inverted • Same Size"
          : u>2*f
            ? "Real • Inverted • Diminished"
            : "Real • Inverted • Enlarged";
  }

  if(model==="circuit"){
    const I=
      numberValue(values.voltage)/
      Math.max(.1,numberValue(values.resistance));

    metric=`I = ${I.toFixed(2)} A`;
    status=`P = ${(numberValue(values.voltage)*I).toFixed(1)} W`;
  }

  if(model==="seriesparallel"){
    const r1=numberValue(values.r1);
    const r2=numberValue(values.r2);

    metric=
      `Req = ${((r1*r2)/(r1+r2)).toFixed(2)} Ω`;

    status=`Series = ${(r1+r2).toFixed(1)} Ω`;
  }

  if(model==="magnetic"){
    metric=`B ∝ ${values.strength}`;
    status=`I = ${values.current} A`;
  }

  if(model==="motor"){
    metric=
      `Torque ∝ ${(numberValue(values.current)*numberValue(values.strength)*numberValue(values.turns)).toFixed(1)}`;

    status="Motor effect";
  }

  if(model==="generator"){
    metric=
      `Output ∝ ${(numberValue(values.speed)*numberValue(values.strength)).toFixed(0)}`;

    status="Electromagnetic induction";
  }

  if(model==="transformer"){
    const vs=
      numberValue(values.voltage)*
      numberValue(values.secondaryTurns)/
      Math.max(1,numberValue(values.primaryTurns));

    metric=`Vs = ${vs.toFixed(1)} V`;

    status=
      vs>
      numberValue(values.voltage)
        ? "Step-up"
        : vs<
            numberValue(values.voltage)
          ? "Step-down"
          : "1 : 1";
  }

  if(model==="heat"){
    metric=`T = ${values.temperature}°C`;
    status="Thermal energy";
  }

  if(model==="atom"){
    metric=`Z = ${values.protons}`;
    status=`Electrons = ${values.electrons}`;
  }

  if(model==="radioactivity"){
    metric=
      `N ≈ ${(numberValue(values.nuclei)*Math.pow(.5,1/Math.max(1,numberValue(values.halfLife)))).toFixed(1)}`;

    status=`Half-life = ${values.halfLife} s`;
  }

  if(model==="semiconductor"){
    metric=`V = ${values.voltage} V`;
    status=`Doping = ${values.doping}%`;
  }

  if(model==="machine"){
    metric=
      `MA = ${(numberValue(values.load)/Math.max(.1,numberValue(values.effort))).toFixed(2)}`;

    status="Mechanical Advantage";
  }

  if(model==="measurement"){
    metric=`L = ${values.length} cm`;
    status=`Least count = ${values.division} mm`;
  }

  if(model==="graph"){
    metric=`(${values.x}, ${values.y})`;
    status="Live concept graph";
  }

  return (
    <section className="ptpd-board">

      <header className="ptpd-header">

        <div>
          <div className="ptpd-brand">
            CLASS 9–10 PHYSICS LAB
          </div>

          <h2>
            {activeConcept?.title || chapter?.title}
          </h2>

          <p>
            {chapter?.title} • Dedicated Live Diagram
          </p>
        </div>

        <div className="ptpd-actions">

          <button
            type="button"
            className="ptpd-round"
            onClick={()=>setPlaying(x=>!x)}
          >
            {playing ? "Ⅱ" : "▶"}
          </button>

          <button
            type="button"
            className="ptpd-round"
            onClick={reset}
          >
            ↻
          </button>

        </div>

      </header>

      <div className="ptpd-canvas">

        <PhysicsSVG
          model={model}
          values={values}
          playing={playing}
        />

      </div>

      <div className="ptpd-metrics">

        <LiveMetric
          label="PRIMARY METRIC"
          value={metric}
        />

        <div className="ptpd-divider"></div>

        <LiveMetric
          label="STATUS"
          value={status}
        />

      </div>

      <div className="ptpd-controls">

        <div className="ptpd-section-title">
          <span>TOPICS IN THIS CHAPTER</span>
          <b>{concepts.length} LIVE DIAGRAMS</b>
        </div>

        <div className="ptpd-topic-grid">

          {concepts.map((c,index)=>{

            const cModel =
              detectModel(
                c?.title || "",
                chapter?.title || "",
                chapter?.focus || ""
              );

            return (
              <button
                type="button"
                key={c.id || index}
                className={
                  `ptpd-topic ${
                    c.id===activeConcept?.id
                      ? "active"
                      : ""
                  }`
                }
                onClick={()=>selectConcept(c.id)}
              >

                <span className="ptpd-topic-num">
                  {String(index+1).padStart(2,"0")}
                </span>

                <span className="ptpd-topic-text">
                  <strong>{c.title}</strong>
                  <small>{cModel}</small>
                </span>

                <span className="ptpd-live-badge">
                  LIVE
                </span>

              </button>
            );
          })}

        </div>

        <div className="ptpd-current-topic">

          <div className="ptpd-current-title">
            <span>ACTIVE TOPIC</span>
            <strong>
              {activeConcept?.title}
            </strong>
          </div>

          <div className="ptpd-current-model">
            {model}
          </div>

        </div>

        <div className="ptpd-sliders">

          {controls.map(
            ([label,key,min,max,step,unit])=>(
              <div
                className="ptpd-slider"
                key={key}
              >

                <div className="ptpd-slider-label">
                  {label}
                </div>

                <input
                  type="range"
                  min={min}
                  max={max}
                  step={step}
                  value={values[key]}
                  onChange={e=>
                    change(
                      key,
                      e.target.value
                    )
                  }
                />

                <div className="ptpd-number">
                  <span>{values[key]}</span>

                  {unit && (
                    <small>{unit}</small>
                  )}
                </div>

              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
}
