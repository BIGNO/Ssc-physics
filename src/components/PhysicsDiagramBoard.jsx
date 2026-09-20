import React, { useEffect, useMemo, useState } from "react";
import "./PhysicsDiagramBoard.css";

const DEFAULTS = {
  lens: {
    focalLength: 60,
    objectDistance: 120,
    objectHeight: 60
  },

  mirror: {
    focalLength: 60,
    objectDistance: 120,
    objectHeight: 60
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

  wave: {
    wavelength: 100,
    amplitude: 45,
    frequency: 2
  },

  pressure: {
    force: 100,
    area: 20,
    depth: 5
  },

  heat: {
    temperature: 50,
    mass: 2,
    specificHeat: 4.2
  },

  circuit: {
    voltage: 12,
    resistance: 10
  },

  magnetic: {
    current: 4,
    distance: 6,
    strength: 6
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
    primaryVoltage: 220,
    primaryTurns: 100,
    secondaryTurns: 50
  },

  atom: {
    protons: 6,
    neutrons: 6,
    electrons: 6
  }
};

function detectType(text = "") {
  const t = text.toLowerCase();

  if (/লেন্স|lens|প্রতিসরণ|refraction/.test(t)) return "lens";
  if (/দর্পণ|আয়না|আয়না|mirror|প্রতিফলন|reflection/.test(t)) return "mirror";
  if (/গতি|বেগ|দ্রুতি|ত্বরণ|motion|velocity|speed|acceleration/.test(t)) return "motion";
  if (/বল|ঘর্ষণ|নিউটন|force|friction|newton|momentum/.test(t)) return "force";
  if (/তরঙ্গ|শব্দ|কম্পন|wave|sound|vibration/.test(t)) return "wave";
  if (/চাপ|pressure|pascal/.test(t)) return "pressure";
  if (/তাপ|তাপমাত্রা|heat|temperature|thermal|calor/.test(t)) return "heat";
  if (/বিদ্যুৎ|তড়িৎ|তড়িৎ|current|voltage|resistance|circuit|ohm|ওহম/.test(t)) return "circuit";
  if (/চৌম্বক|চুম্বক|magnetic|magnet/.test(t)) return "magnetic";
  if (/মোটর|motor/.test(t)) return "motor";
  if (/জেনারেটর|generator/.test(t)) return "generator";
  if (/ট্রান্সফরমার|transformer/.test(t)) return "transformer";
  if (/পরমাণু|ইলেকট্রন|প্রোটন|নিউট্রন|atom|electron|proton|neutron/.test(t)) return "atom";

  return "motion";
}

function getDefaults(type) {
  return {
    ...(DEFAULTS[type] || DEFAULTS.motion),
    type
  };
}

function num(v, fallback = 0) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

function safeId(value) {
  return String(value || "physics")
    .replace(/[^a-zA-Z0-9_-]/g, "")
    .slice(0, 30) || "physics";
}

function PhysicsDiagramBoard({ chapter, state, update }) {

  const concepts = chapter?.concepts || [];

  const fallbackConcept = {
    id: `${chapter?.id || "chapter"}-diagram`,
    title: chapter?.title || "Physics"
  };

  const conceptList = concepts.length ? concepts : [fallbackConcept];

  const savedChapter = state?.diagrams?.[chapter.id] || {};

  const initialConceptId =
    savedChapter.activeConceptId ||
    savedChapter.conceptId ||
    conceptList[0].id;

  const [activeConceptId, setActiveConceptId] = useState(initialConceptId);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const nextId =
      savedChapter.activeConceptId ||
      savedChapter.conceptId ||
      conceptList[0].id;

    setActiveConceptId(nextId);
  }, [chapter.id]);

  const activeConcept =
    conceptList.find(c => c.id === activeConceptId) ||
    conceptList[0];

  const autoType = detectType(
    `${chapter?.title || ""} ${chapter?.focus || ""} ${activeConcept?.title || ""}`
  );

  const storedByConcept =
    savedChapter.valuesByConcept?.[activeConcept.id] || {};

  const values = {
    ...getDefaults(autoType),
    ...storedByConcept
  };

  const saveValues = (nextValues) => {
    const previous =
      state?.diagrams?.[chapter.id] || {};

    update({
      diagrams: {
        ...state.diagrams,
        [chapter.id]: {
          ...previous,
          activeConceptId,
          valuesByConcept: {
            ...(previous.valuesByConcept || {}),
            [activeConcept.id]: {
              ...nextValues,
              type: autoType
            }
          }
        }
      }
    });
  };

  const changeValue = (key, value) => {
    saveValues({
      ...values,
      [key]: num(value)
    });
  };

  const changeConcept = (id) => {
    setActiveConceptId(id);

    const target =
      conceptList.find(c => c.id === id) ||
      conceptList[0];

    const nextType = detectType(
      `${chapter?.title || ""} ${chapter?.focus || ""} ${target?.title || ""}`
    );

    const previous =
      state?.diagrams?.[chapter.id] || {};

    update({
      diagrams: {
        ...state.diagrams,
        [chapter.id]: {
          ...previous,
          activeConceptId: id,
          valuesByConcept: {
            ...(previous.valuesByConcept || {}),
            [id]: getDefaults(nextType)
          }
        }
      }
    });
  };

  const reset = () => {
    saveValues(getDefaults(autoType));
  };

  const controlSets = useMemo(() => ({
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

    wave: [
      ["Wavelength (λ)", "wavelength", 40, 180, 1, "px"],
      ["Amplitude (A)", "amplitude", 10, 90, 1, "px"],
      ["Frequency (f)", "frequency", 1, 10, 0.5, "Hz"]
    ],

    pressure: [
      ["Force (F)", "force", 10, 500, 5, "N"],
      ["Area (A)", "area", 1, 100, 1, "cm²"],
      ["Depth (h)", "depth", 1, 20, 1, "m"]
    ],

    heat: [
      ["Temperature (T)", "temperature", 0, 100, 1, "°C"],
      ["Mass (m)", "mass", 1, 10, 0.5, "kg"],
      ["Specific Heat (c)", "specificHeat", 1, 10, 0.1, "kJ/kg°C"]
    ],

    circuit: [
      ["Voltage (V)", "voltage", 1, 24, 1, "V"],
      ["Resistance (R)", "resistance", 1, 50, 1, "Ω"]
    ],

    magnetic: [
      ["Current (I)", "current", 1, 10, 0.5, "A"],
      ["Distance", "distance", 1, 20, 0.5, "cm"],
      ["Field Strength", "strength", 1, 12, 1, ""]
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
      ["Primary Voltage (Vp)", "primaryVoltage", 50, 400, 5, "V"],
      ["Primary Turns (Np)", "primaryTurns", 20, 200, 5, ""],
      ["Secondary Turns (Ns)", "secondaryTurns", 10, 200, 5, ""]
    ],

    atom: [
      ["Protons (p⁺)", "protons", 1, 12, 1, ""],
      ["Neutrons (n⁰)", "neutrons", 0, 18, 1, ""],
      ["Electrons (e⁻)", "electrons", 1, 12, 1, ""]
    ]
  }), []);

  const controls =
    controlSets[autoType] ||
    controlSets.motion;

  let metric = "";
  let status = "";

  if (autoType === "lens" || autoType === "mirror") {
    const u = num(values.objectDistance, 120);
    const f = num(values.focalLength, 60);

    const denominator = u - f;

    const v =
      Math.abs(denominator) < 0.5
        ? Infinity
        : (u * f) / denominator;

    if (!Number.isFinite(v)) {
      metric = "v → ∞";
      status = "Object at focal point";
    } else {
      metric = `v = ${Math.abs(v).toFixed(1)} cm`;

      status =
        u < f
          ? "Virtual • Upright • Enlarged"
          : Math.abs(u - 2 * f) < 2
            ? "Real • Inverted • Same Size"
            : u > 2 * f
              ? "Real • Inverted • Diminished"
              : "Real • Inverted • Enlarged";
    }
  }

  if (autoType === "motion") {
    const velocity = num(values.velocity);
    const acceleration = num(values.acceleration);
    const time = num(values.time);

    const distance =
      velocity * time +
      0.5 * acceleration * time * time;

    metric = `s = ${distance.toFixed(1)} m`;
    status =
      acceleration === 0
        ? "Uniform Motion"
        : "Accelerated Motion";
  }

  if (autoType === "force") {
    const force = num(values.force);
    const mass = Math.max(0.1, num(values.mass));

    metric =
      `a = ${(force / mass).toFixed(2)} m/s²`;

    status = `F = ${force} N`;
  }

  if (autoType === "wave") {
    const speed =
      num(values.wavelength) *
      num(values.frequency);

    metric = `v = ${speed.toFixed(1)} px/s`;
    status = `A = ${values.amplitude} px`;
  }

  if (autoType === "pressure") {
    const pressure =
      num(values.force) /
      Math.max(0.1, num(values.area));

    metric = `P = ${pressure.toFixed(2)} N/cm²`;
    status = `Depth = ${values.depth} m`;
  }

  if (autoType === "heat") {
    const q =
      num(values.mass) *
      num(values.specificHeat) *
      num(values.temperature);

    metric = `Q ≈ ${q.toFixed(1)} kJ`;
    status = `T = ${values.temperature}°C`;
  }

  if (autoType === "circuit") {
    const current =
      num(values.voltage) /
      Math.max(0.1, num(values.resistance));

    metric = `I = ${current.toFixed(2)} A`;
    status =
      `P = ${(num(values.voltage) * current).toFixed(1)} W`;
  }

  if (autoType === "magnetic") {
    metric = `B ∝ ${values.strength}`;
    status = `I = ${values.current} A`;
  }

  if (autoType === "motor") {
    metric =
      `Torque ∝ ${(num(values.current) * num(values.strength)).toFixed(1)}`;
    status = `Turns = ${values.turns}`;
  }

  if (autoType === "generator") {
    metric =
      `Output ∝ ${(num(values.speed) * num(values.strength)).toFixed(0)}`;
    status = `Turns = ${values.turns}`;
  }

  if (autoType === "transformer") {
    const secondaryVoltage =
      num(values.primaryVoltage) *
      num(values.secondaryTurns) /
      Math.max(1, num(values.primaryTurns));

    metric =
      `Vs = ${secondaryVoltage.toFixed(1)} V`;

    status =
      secondaryVoltage >
      num(values.primaryVoltage)
        ? "Step-up Transformer"
        : secondaryVoltage <
            num(values.primaryVoltage)
          ? "Step-down Transformer"
          : "1 : 1 Transformer";
  }

  if (autoType === "atom") {
    metric = `Z = ${values.protons}`;
    status =
      `Electrons = ${values.electrons}`;
  }

  return (
    <section className="physics-diagram-board">

      <header className="pdb-header">

        <div>
          <div className="pdb-brand">
            CLASS 9–10 PHYSICS LAB
          </div>

          <h2>
            {activeConcept?.title || chapter?.title || "Physics"}
          </h2>

          <p>
            Interactive Physics Visualization
          </p>
        </div>

        <div className="pdb-actions">

          <button
            type="button"
            className="pdb-round"
            onClick={() => setPlaying(x => !x)}
            title={playing ? "Pause" : "Play"}
          >
            {playing ? "Ⅱ" : "▶"}
          </button>

          <button
            type="button"
            className="pdb-round"
            onClick={reset}
            title="Reset"
          >
            ↻
          </button>

        </div>
      </header>

      <div className="pdb-canvas">

        <DiagramVisual
          type={autoType}
          values={values}
          playing={playing}
          chapter={chapter}
          concept={activeConcept}
        />

      </div>

      <div className="pdb-metrics">

        <div>
          <span>PRIMARY METRIC</span>
          <strong>{metric}</strong>
        </div>

        <div className="pdb-line"></div>

        <div>
          <span>STATUS</span>
          <strong>{status}</strong>
        </div>

      </div>

      <div className="pdb-controls">

        <div className="pdb-select-row">

          <label>Concept / Diagram</label>

          <select
            value={activeConcept?.id}
            onChange={e => changeConcept(e.target.value)}
          >
            {conceptList.map((c, index) => (
              <option
                key={c.id || index}
                value={c.id}
              >
                {String(index + 1).padStart(2, "0")} — {c.title}
              </option>
            ))}
          </select>

        </div>

        <div className="pdb-current-type">
          <span>DIAGRAM TYPE</span>
          <b>{autoType}</b>
        </div>

        <div className="pdb-sliders">

          {controls.map(
            ([label, key, min, max, step, unit]) => (
              <div
                className="pdb-slider"
                key={key}
              >

                <div className="pdb-slider-label">
                  {label}
                </div>

                <input
                  type="range"
                  min={min}
                  max={max}
                  step={step}
                  value={values[key]}
                  onChange={e =>
                    changeValue(key, e.target.value)
                  }
                />

                <div className="pdb-number">
                  <span>{values[key]}</span>
                  {unit && <small>{unit}</small>}
                </div>

              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
}

function DiagramVisual({
  type,
  values,
  playing
}) {

  const uid =
    `${safeId(type)}-${Math.round(
      num(
        values?.focalLength ||
        values?.velocity ||
        values?.force ||
        values?.voltage ||
        1
      )
    )}`;

  const arrowId = `pdb-arrow-${uid}`;
  const glowId = `pdb-glow-${uid}`;

  const defs = (
    <defs>

      <marker
        id={arrowId}
        markerWidth="11"
        markerHeight="11"
        refX="9"
        refY="5.5"
        orient="auto"
      >
        <path
          d="M0,0 L11,5.5 L0,11 z"
          className="pdb-arrow"
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
          result="b"
        />

        <feMerge>
          <feMergeNode in="b"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>

      </filter>

    </defs>
  );

  const frame = (
    title,
    subtitle,
    children
  ) => (
    <svg
      viewBox="0 0 980 570"
      className="pdb-svg"
    >

      {defs}

      <rect
        x="15"
        y="15"
        width="950"
        height="540"
        rx="24"
        className="pdb-bg"
      />

      <g className="pdb-grid">

        {Array.from({ length: 19 }).map((_, i) => (
          <line
            key={`vx-${i}`}
            x1={55 + i * 48}
            y1="120"
            x2={55 + i * 48}
            y2="510"
          />
        ))}

        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`hy-${i}`}
            x1="55"
            y1={130 + i * 44}
            x2="925"
            y2={130 + i * 44}
          />
        ))}

      </g>

      <text
        x="55"
        y="55"
        className="pdb-svg-kicker"
      >
        PHYSICS LAB
      </text>

      <text
        x="55"
        y="88"
        className="pdb-svg-title"
      >
        {title}
      </text>

      <text
        x="55"
        y="110"
        className="pdb-svg-subtitle"
      >
        {subtitle}
      </text>

      {children}

    </svg>
  );

  // -------------------------------------------------------
  // LENS
  // -------------------------------------------------------
  if (type === "lens") {

    const f = Math.max(
      1,
      num(values.focalLength, 60)
    );

    const u = Math.max(
      2,
      num(values.objectDistance, 120)
    );

    const h = Math.max(
      5,
      num(values.objectHeight, 60)
    );

    const axisY = 340;
    const lensX = 500;

    const denominator = u - f;

    const v =
      Math.abs(denominator) < 0.5
        ? Infinity
        : (u * f) / denominator;

    const span = Math.max(
      120,
      u,
      2 * f,
      Number.isFinite(v)
        ? Math.abs(v)
        : 120
    );

    const scale =
      Math.min(2.8, 360 / span);

    const objectX =
      Math.max(
        85,
        lensX - u * scale
      );

    const imageX =
      Number.isFinite(v)
        ? Math.max(
            85,
            Math.min(
              900,
              v >= 0
                ? lensX + Math.abs(v) * scale
                : lensX - Math.abs(v) * scale
            )
          )
        : 885;

    const objectH =
      Math.max(
        45,
        Math.min(160, h * 1.8)
      );

    const magnification =
      Number.isFinite(v)
        ? Math.abs(v / u)
        : 3;

    const imageH =
      Math.max(
        35,
        Math.min(
          190,
          objectH * magnification
        )
      );

    const f1 = lensX - f * scale;
    const f2 = lensX + f * scale;
    const twoF1 = lensX - 2 * f * scale;
    const twoF2 = lensX + 2 * f * scale;

    return frame(
      "Convex Lens — Ray Diagram",
      `f = ${f} cm   •   u = ${u} cm   •   1/f = 1/v + 1/u`,
      <g>

        <line
          x1="65"
          y1={axisY}
          x2="915"
          y2={axisY}
          className="pdb-axis"
        />

        <path
          d={`M478 135 Q500 ${axisY} 478 545`}
          className="pdb-lens"
        />

        <path
          d={`M522 135 Q500 ${axisY} 522 545`}
          className="pdb-lens"
        />

        <text
          x="458"
          y="120"
          className="pdb-element"
        >
          CONVEX LENS
        </text>

        <circle cx={f1} cy={axisY} r="5" className="pdb-focus"/>
        <circle cx={f2} cy={axisY} r="5" className="pdb-focus"/>

        <circle cx={twoF1} cy={axisY} r="5" className="pdb-focus"/>
        <circle cx={twoF2} cy={axisY} r="5" className="pdb-focus"/>

        <text x={f1 - 9} y={axisY + 28} className="pdb-mark">
          F₁
        </text>

        <text x={f2 - 9} y={axisY + 28} className="pdb-mark">
          F₂
        </text>

        <text x={twoF1 - 18} y={axisY + 28} className="pdb-mark">
          2F₁
        </text>

        <text x={twoF2 - 18} y={axisY + 28} className="pdb-mark">
          2F₂
        </text>

        <circle
          cx={lensX}
          cy={axisY}
          r="4"
          className="pdb-optical-center"
        />

        <text
          x={lensX + 8}
          y={axisY + 28}
          className="pdb-mark"
        >
          O
        </text>

        <line
          x1={objectX}
          y1={axisY}
          x2={objectX}
          y2={axisY - objectH}
          className="pdb-object"
        />

        <line
          x1={objectX - 14}
          y1={axisY - objectH}
          x2={objectX + 14}
          y2={axisY - objectH}
          className="pdb-object-cap"
        />

        <text
          x={objectX - 28}
          y={axisY - objectH - 14}
          className="pdb-object-label"
        >
          OBJECT
        </text>

        {playing && (
          <g>

            <line
              x1={objectX}
              y1={axisY - objectH}
              x2={lensX}
              y2={axisY - objectH}
              className="pdb-ray"
              markerEnd={`url(#${arrowId})`}
              filter={`url(#${glowId})`}
            />

            <line
              x1={lensX}
              y1={axisY - objectH}
              x2={f2}
              y2={axisY}
              className="pdb-ray2"
              markerEnd={`url(#${arrowId})`}
            />

            <line
              x1={objectX}
              y1={axisY - objectH}
              x2={lensX}
              y2={axisY}
              className="pdb-ray"
              markerEnd={`url(#${arrowId})`}
            />

            <line
              x1={lensX}
              y1={axisY}
              x2={imageX}
              y2={axisY - imageH}
              className="pdb-ray2"
            />

            <line
              x1={objectX}
              y1={axisY - objectH}
              x2={lensX}
              y2={axisY - objectH}
              className="pdb-construction"
            />

            {Number.isFinite(v) && v < 0 && (
              <line
                x1={lensX}
                y1={axisY - objectH}
                x2={imageX}
                y2={axisY - imageH}
                className="pdb-virtual-ray"
              />
            )}

          </g>
        )}

        {Number.isFinite(v) && (
          <>
            <line
              x1={imageX}
              y1={axisY}
              x2={imageX}
              y2={
                v > 0
                  ? axisY - imageH
                  : axisY + imageH
              }
              className="pdb-image"
            />

            <line
              x1={imageX - 14}
              y1={
                v > 0
                  ? axisY - imageH
                  : axisY + imageH
              }
              x2={imageX + 14}
              y2={
                v > 0
                  ? axisY - imageH
                  : axisY + imageH
              }
              className="pdb-image-cap"
            />

            <text
              x={imageX - 42}
              y={
                v > 0
                  ? axisY - imageH - 15
                  : axisY + imageH + 22
              }
              className="pdb-image-label"
            >
              {v > 0 ? "REAL IMAGE" : "VIRTUAL IMAGE"}
            </text>
          </>
        )}

        <text
          x="70"
          y="520"
          className="pdb-formula"
        >
          Lens Formula: 1/f = 1/v + 1/u
        </text>

      </g>
    );
  }

  // -------------------------------------------------------
  // MIRROR
  // -------------------------------------------------------
  if (type === "mirror") {

    const f = Math.max(
      1,
      num(values.focalLength, 60)
    );

    const u = Math.max(
      2,
      num(values.objectDistance, 120)
    );

    const h = Math.max(
      5,
      num(values.objectHeight, 60)
    );

    const axisY = 340;
    const mirrorX = 650;

    const denominator = u - f;

    const v =
      Math.abs(denominator) < 0.5
        ? Infinity
        : (u * f) / denominator;

    const span = Math.max(
      120,
      u,
      2 * f,
      Number.isFinite(v)
        ? Math.abs(v)
        : 120
    );

    const scale =
      Math.min(2.8, 390 / span);

    const objectX =
      Math.max(
        80,
        mirrorX - u * scale
      );

    const imageX =
      Number.isFinite(v)
        ? Math.max(
            75,
            Math.min(
              900,
              v >= 0
                ? mirrorX - Math.abs(v) * scale
                : mirrorX + Math.abs(v) * scale
            )
          )
        : 110;

    const objectH =
      Math.max(
        45,
        Math.min(160, h * 1.8)
      );

    const magnification =
      Number.isFinite(v)
        ? Math.abs(v / u)
        : 3;

    const imageH =
      Math.max(
        35,
        Math.min(
          190,
          objectH * magnification
        )
      );

    const fX = mirrorX - f * scale;
    const cX = mirrorX - 2 * f * scale;

    return frame(
      "Concave Mirror — Ray Diagram",
      `f = ${f} cm   •   u = ${u} cm   •   mirror formula`,
      <g>

        <line
          x1="65"
          y1={axisY}
          x2="915"
          y2={axisY}
          className="pdb-axis"
        />

        <path
          d={`M650 135 Q585 ${axisY} 650 545`}
          className="pdb-mirror"
        />

        <line
          x1="662"
          y1="135"
          x2="662"
          y2="545"
          className="pdb-mirror-back"
        />

        <text
          x="570"
          y="120"
          className="pdb-element"
        >
          CONCAVE MIRROR
        </text>

        <circle cx={fX} cy={axisY} r="5" className="pdb-focus"/>
        <circle cx={cX} cy={axisY} r="5" className="pdb-focus"/>

        <text x={fX - 8} y={axisY + 28} className="pdb-mark">
          F
        </text>

        <text x={cX - 8} y={axisY + 28} className="pdb-mark">
          C
        </text>

        <line
          x1={objectX}
          y1={axisY}
          x2={objectX}
          y2={axisY - objectH}
          className="pdb-object"
        />

        <line
          x1={objectX - 14}
          y1={axisY - objectH}
          x2={objectX + 14}
          y2={axisY - objectH}
          className="pdb-object-cap"
        />

        <text
          x={objectX - 28}
          y={axisY - objectH - 14}
          className="pdb-object-label"
        >
          OBJECT
        </text>

        {playing && (
          <g>

            <line
              x1={objectX}
              y1={axisY - objectH}
              x2={mirrorX}
              y2={axisY - objectH}
              className="pdb-ray"
            />

            <line
              x1={mirrorX}
              y1={axisY - objectH}
              x2={imageX}
              y2={axisY - imageH}
              className="pdb-ray2"
              markerEnd={`url(#${arrowId})`}
            />

            <line
              x1={objectX}
              y1={axisY - objectH}
              x2={fX}
              y2={axisY}
              className="pdb-ray"
            />

            <line
              x1={fX}
              y1={axisY}
              x2={mirrorX}
              y2={axisY - objectH}
              className="pdb-ray2"
            />

          </g>
        )}

        {Number.isFinite(v) && (
          <>
            <line
              x1={imageX}
              y1={axisY}
              x2={imageX}
              y2={axisY - imageH}
              className="pdb-image"
            />

            <line
              x1={imageX - 14}
              y1={axisY - imageH}
              x2={imageX + 14}
              y2={axisY - imageH}
              className="pdb-image-cap"
            />

            <text
              x={imageX - 25}
              y={axisY - imageH - 15}
              className="pdb-image-label"
            >
              IMAGE
            </text>
          </>
        )}

      </g>
    );
  }

  // -------------------------------------------------------
  // MOTION
  // -------------------------------------------------------
  if (type === "motion") {

    const velocity = num(values.velocity, 10);
    const acceleration = num(values.acceleration, 2);
    const time = num(values.time, 5);

    const distance =
      velocity * time +
      0.5 * acceleration * time * time;

    return frame(
      "Motion — Position / Time",
      `v = ${velocity} m/s   •   a = ${acceleration} m/s²   •   t = ${time} s`,
      <g>

        <line
          x1="90"
          y1="400"
          x2="900"
          y2="400"
          className="pdb-axis"
        />

        <line
          x1="110"
          y1="450"
          x2="110"
          y2="145"
          className="pdb-axis"
        />

        <path
          d="M110 360 Q320 330 525 255 T890 145"
          className="pdb-motion-curve"
        />

        <circle
          cx="150"
          cy="400"
          r="19"
          className="pdb-motion-object"
        >
          {playing && (
            <animate
              attributeName="cx"
              values="150;840;150"
              dur="4s"
              repeatCount="indefinite"
            />
          )}
        </circle>

        <line
          x1="160"
          y1="400"
          x2={Math.min(340, 170 + velocity * 11)}
          y2="400"
          className="pdb-vector"
          markerEnd={`url(#${arrowId})`}
        />

        <text
          x="175"
          y="370"
          className="pdb-blue"
        >
          v = {velocity} m/s
        </text>

        <text
          x="95"
          y="500"
          className="pdb-muted"
        >
          Distance = {distance.toFixed(1)} m
        </text>

      </g>
    );
  }

  // -------------------------------------------------------
  // FORCE
  // -------------------------------------------------------
  if (type === "force") {

    const force = num(values.force, 30);
    const mass = Math.max(0.1, num(values.mass, 5));
    const angle = num(values.angle, 30);

    const length =
      Math.min(280, 60 + force * 5);

    const radians =
      angle * Math.PI / 180;

    const x2 =
      480 + length * Math.cos(radians);

    const y2 =
      395 - length * Math.sin(radians);

    return frame(
      "Force — Free Body Diagram",
      `F = ${force} N   •   m = ${mass} kg   •   θ = ${angle}°`,
      <g>

        <line
          x1="100"
          y1="430"
          x2="900"
          y2="430"
          className="pdb-axis"
        />

        <rect
          x="400"
          y="355"
          width="160"
          height="75"
          rx="12"
          className="pdb-force-block"
        />

        <text
          x="440"
          y="401"
          className="pdb-block-text"
        >
          {mass} kg
        </text>

        <line
          x1="480"
          y1="395"
          x2={x2}
          y2={y2}
          className="pdb-vector"
          markerEnd={`url(#${arrowId})`}
        />

        <line
          x1="480"
          y1="395"
          x2="480"
          y2="240"
          className="pdb-vector2"
          markerEnd={`url(#${arrowId})`}
        />

        <text
          x={Math.min(730, x2)}
          y={Math.max(200, y2 - 14)}
          className="pdb-blue"
        >
          F = {force} N
        </text>

        <text
          x="495"
          y="225"
          className="pdb-purple"
        >
          W = mg
        </text>

        <text
          x="500"
          y="418"
          className="pdb-orange"
        >
          θ = {angle}°
        </text>

      </g>
    );
  }

  // -------------------------------------------------------
  // WAVE
  // -------------------------------------------------------
  if (type === "wave") {

    const wavelength =
      num(values.wavelength, 100);

    const amplitude =
      num(values.amplitude, 45);

    const frequency =
      num(values.frequency, 2);

    let d = "M65 330";

    for (let x = 65; x <= 915; x += 6) {
      const y =
        330 +
        amplitude *
        Math.sin(
          ((x - 65) / wavelength) *
          Math.PI * 2
        );

      d += ` L${x} ${y}`;
    }

    return frame(
      "Wave — Wavelength & Amplitude",
      `λ = ${wavelength} px   •   A = ${amplitude} px   •   f = ${frequency} Hz`,
      <g>

        <line
          x1="65"
          y1="330"
          x2="915"
          y2="330"
          className="pdb-axis"
        />

        <path
          d={d}
          className="pdb-wave"
        />

        <line
          x1="150"
          y1={330 - amplitude}
          x2="150"
          y2="330"
          className="pdb-dimension"
        />

        <text
          x="165"
          y={312 - amplitude}
          className="pdb-orange"
        >
          A = {amplitude}
        </text>

        <line
          x1="250"
          y1="450"
          x2={Math.min(780, 250 + wavelength)}
          y2="450"
          className="pdb-dimension"
        />

        <text
          x="350"
          y="480"
          className="pdb-orange"
        >
          λ = {wavelength}
        </text>

      </g>
    );
  }

  // -------------------------------------------------------
  // PRESSURE
  // -------------------------------------------------------
  if (type === "pressure") {

    const force = num(values.force, 100);
    const area = Math.max(0.1, num(values.area, 20));
    const depth = num(values.depth, 5);

    const pressure = force / area;

    return frame(
      "Pressure in Liquid",
      `F = ${force} N   •   A = ${area} cm²   •   h = ${depth} m`,
      <g>

        <path
          d="M220 175 V450 Q500 510 780 450 V175"
          className="pdb-container"
        />

        <line
          x1="225"
          y1="300"
          x2="775"
          y2="300"
          className="pdb-liquid"
        />

        {Array.from({length: 5}).map((_, i) => (
          <line
            key={i}
            x1="500"
            y1={320 + i * 35}
            x2="500"
            y2={345 + i * 35}
            className="pdb-vector2"
            markerEnd={`url(#${arrowId})`}
          />
        ))}

        <text
          x="285"
          y="278"
          className="pdb-blue"
        >
          Liquid
        </text>

        <text
          x="525"
          y="350"
          className="pdb-orange"
        >
          Depth = {depth} m
        </text>

        <text
          x="290"
          y="500"
          className="pdb-blue"
        >
          P = F/A = {pressure.toFixed(2)} N/cm²
        </text>

      </g>
    );
  }

  // -------------------------------------------------------
  // HEAT
  // -------------------------------------------------------
  if (type === "heat") {

    const temperature =
      num(values.temperature, 50);

    const fill =
      Math.max(
        15,
        Math.min(210, temperature * 2.1)
      );

    return frame(
      "Heat — Temperature",
      `T = ${temperature}°C   •   m = ${values.mass} kg`,
      <g>

        <rect
          x="430"
          y="145"
          width="72"
          height="235"
          rx="36"
          className="pdb-thermo"
        />

        <rect
          x="450"
          y={365 - fill}
          width="32"
          height={fill}
          rx="16"
          className="pdb-thermo-fluid"
        />

        <circle
          cx="466"
          cy="390"
          r="52"
          className="pdb-thermo-bulb"
        />

        <circle
          cx="466"
          cy="390"
          r="32"
          className="pdb-thermo-fluid"
        />

        {[0, 25, 50, 75, 100].map(n => (
          <g key={n}>

            <line
              x1="525"
              y1={365 - n * 2.05}
              x2="555"
              y2={365 - n * 2.05}
              className="pdb-scale"
            />

            <text
              x="565"
              y={370 - n * 2.05}
              className="pdb-muted"
            >
              {n}°C
            </text>

          </g>
        ))}

      </g>
    );
  }

  // -------------------------------------------------------
  // CIRCUIT
  // -------------------------------------------------------
  if (type === "circuit") {

    const voltage = num(values.voltage, 12);
    const resistance =
      Math.max(0.1, num(values.resistance, 10));

    const current =
      voltage / resistance;

    return frame(
      "Electric Circuit — Ohm's Law",
      `V = ${voltage} V   •   R = ${resistance} Ω   •   I = ${current.toFixed(2)} A`,
      <g>

        <path
          d="M165 175 H820 V440 H165 Z"
          className="pdb-wire"
        />

        <line
          x1="165"
          y1="175"
          x2="165"
          y2="250"
          className="pdb-wire"
        />

        <line
          x1="165"
          y1="365"
          x2="165"
          y2="440"
          className="pdb-wire"
        />

        <line
          x1="145"
          y1="250"
          x2="145"
          y2="365"
          className="pdb-battery-long"
        />

        <line
          x1="185"
          y1="270"
          x2="185"
          y2="345"
          className="pdb-battery-short"
        />

        <rect
          x="390"
          y="152"
          width="130"
          height="46"
          rx="8"
          className="pdb-resistor"
        />

        <text
          x="446"
          y="182"
          className="pdb-component"
        >
          R
        </text>

        <circle
          cx="720"
          cy="308"
          r="36"
          className="pdb-bulb"
        />

        <path
          d="M705 287 Q720 308 735 287"
          className="pdb-filament"
        />

        {playing && (
          <line
            x1="210"
            y1="175"
            x2="350"
            y2="175"
            className="pdb-current"
            markerEnd={`url(#${arrowId})`}
          />
        )}

        <text
          x="220"
          y="140"
          className="pdb-blue"
        >
          I = {current.toFixed(2)} A
        </text>

        <text
          x="410"
          y="130"
          className="pdb-purple"
        >
          R = {resistance} Ω
        </text>

        <text
          x="103"
          y="415"
          className="pdb-orange"
        >
          V = {voltage} V
        </text>

        <text
          x="410"
          y="490"
          className="pdb-blue"
        >
          V = IR
        </text>

      </g>
    );
  }

  // -------------------------------------------------------
  // MAGNET
  // -------------------------------------------------------
  if (type === "magnetic") {

    const strength =
      Math.max(1, Math.min(12, num(values.strength, 6)));

    const count =
      Math.max(3, Math.min(8, Math.round(strength / 1.5)));

    return frame(
      "Magnetic Field",
      `I = ${values.current} A   •   strength = ${strength}`,
      <g>

        <rect
          x="410"
          y="270"
          width="90"
          height="75"
          rx="9"
          className="pdb-magnet-n"
        />

        <rect
          x="500"
          y="270"
          width="90"
          height="75"
          rx="9"
          className="pdb-magnet-s"
        />

        <text
          x="445"
          y="318"
          className="pdb-magnet-letter"
        >
          N
        </text>

        <text
          x="532"
          y="318"
          className="pdb-magnet-letter"
        >
          S
        </text>

        {Array.from({length: count}).map((_, i) => (
          <path
            key={`top-${i}`}
            d={`M${410 - i * 34} 270 Q500 ${115 - i * 9} ${590 + i * 34} 270`}
            className="pdb-field"
          />
        ))}

        {Array.from({length: count}).map((_, i) => (
          <path
            key={`bottom-${i}`}
            d={`M${410 - i * 34} 345 Q500 ${470 + i * 8} ${590 + i * 34} 345`}
            className="pdb-field"
          />
        ))}

        <text
          x="280"
          y="490"
          className="pdb-orange"
        >
          Higher strength → denser field lines
        </text>

      </g>
    );
  }

  // -------------------------------------------------------
  // MOTOR
  // -------------------------------------------------------
  if (type === "motor") {

    return frame(
      "Electric Motor",
      `I = ${values.current} A   •   field = ${values.strength}   •   turns = ${values.turns}`,
      <g>

        <rect
          x="250"
          y="205"
          width="170"
          height="190"
          rx="16"
          className="pdb-motor-field"
        />

        <rect
          x="560"
          y="205"
          width="170"
          height="190"
          rx="16"
          className="pdb-motor-field"
        />

        <text
          x="310"
          y="300"
          className="pdb-magnet-letter"
        >
          N
        </text>

        <text
          x="620"
          y="300"
          className="pdb-magnet-letter"
        >
          S
        </text>

        <circle
          cx="490"
          cy="300"
          r="82"
          className="pdb-coil"
        />

        <circle
          cx="490"
          cy="300"
          r="30"
          className="pdb-core"
        />

        <line
          x1="408"
          y1="300"
          x2="572"
          y2="300"
          className="pdb-axis"
        />

        <path
          d="M430 300 Q490 245 550 300"
          className="pdb-current"
        />

        <text
          x="430"
          y="465"
          className="pdb-blue"
        >
          Motor effect ∝ B × I × turns
        </text>

      </g>
    );
  }

  // -------------------------------------------------------
  // GENERATOR
  // -------------------------------------------------------
  if (type === "generator") {

    const speed = num(values.speed, 120);

    return frame(
      "Generator",
      `speed = ${speed} rpm   •   field = ${values.strength}   •   turns = ${values.turns}`,
      <g>

        <circle
          cx="490"
          cy="305"
          r="105"
          className="pdb-coil"
        />

        <circle
          cx="490"
          cy="305"
          r="30"
          className="pdb-core"
        />

        {playing && (
          <circle
            cx="490"
            cy="200"
            r="11"
            className="pdb-motion-object"
          >
            <animateMotion
              dur={`${Math.max(1, 8 - speed / 60)}s`}
              repeatCount="indefinite"
              path="M0 0 A105 105 0 1 1 -1 0"
            />
          </circle>
        )}

        <path
          d="M490 200 Q350 120 245 205"
          className="pdb-field"
        />

        <path
          d="M490 410 Q630 490 735 405"
          className="pdb-field"
        />

        <text
          x="412"
          y="470"
          className="pdb-blue"
        >
          Faster rotation → greater induced emf
        </text>

      </g>
    );
  }

  // -------------------------------------------------------
  // TRANSFORMER
  // -------------------------------------------------------
  if (type === "transformer") {

    const vp = num(values.primaryVoltage, 220);
    const np = num(values.primaryTurns, 100);
    const ns = num(values.secondaryTurns, 50);

    const vs =
      vp * ns / Math.max(1, np);

    return frame(
      "Transformer",
      `Vp = ${vp} V   •   Np = ${np}   •   Ns = ${ns}`,
      <g>

        <rect
          x="365"
          y="160"
          width="270"
          height="300"
          rx="18"
          className="pdb-transformer"
        />

        <path
          d="M430 195 Q350 310 430 425"
          className="pdb-coil"
        />

        <path
          d="M570 195 Q650 310 570 425"
          className="pdb-coil"
        />

        <text
          x="270"
          y="315"
          className="pdb-orange"
        >
          PRIMARY
        </text>

        <text
          x="650"
          y="315"
          className="pdb-orange"
        >
          SECONDARY
        </text>

        <text
          x="415"
          y="500"
          className="pdb-blue"
        >
          Vs = {vs.toFixed(1)} V
        </text>

      </g>
    );
  }

  // -------------------------------------------------------
  // ATOM
  // -------------------------------------------------------
  if (type === "atom") {

    const electrons =
      Math.max(
        1,
        Math.min(
          12,
          Math.round(num(values.electrons, 6))
        )
      );

    const points = [];

    const first = Math.min(2, electrons);
    const second = Math.max(0, electrons - first);

    for (let i = 0; i < first; i++) {
      const a =
        (i / first) *
        Math.PI * 2;

      points.push({
        x: 500 + 100 * Math.cos(a),
        y: 310 + 100 * Math.sin(a)
      });
    }

    for (let i = 0; i < second; i++) {
      const a =
        (i / Math.max(1, second)) *
        Math.PI * 2;

      points.push({
        x: 500 + 185 * Math.cos(a),
        y: 310 + 185 * Math.sin(a)
      });
    }

    return frame(
      "Atomic Structure",
      `p⁺ = ${values.protons}   •   n⁰ = ${values.neutrons}   •   e⁻ = ${electrons}`,
      <g>

        <circle
          cx="500"
          cy="310"
          r="48"
          className="pdb-nucleus"
        />

        <circle
          cx="500"
          cy="310"
          r="100"
          className="pdb-orbit"
        />

        <circle
          cx="500"
          cy="310"
          r="185"
          className="pdb-orbit"
        />

        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="10"
            className="pdb-electron"
          />
        ))}

        <text
          x="472"
          y="315"
          className="pdb-nucleus-text"
        >
          N
        </text>

      </g>
    );
  }

  return frame(
    "Physics Visualization",
    "Interactive physics model",
    <g>

      <circle
        cx="500"
        cy="310"
        r="65"
        className="pdb-motion-object"
      />

      <line
        x1="220"
        y1="310"
        x2="420"
        y2="310"
        className="pdb-vector"
        markerEnd={`url(#${arrowId})`}
      />

    </g>
  );
}

export default PhysicsDiagramBoard;
