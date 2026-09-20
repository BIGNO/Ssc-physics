import React, { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "physics-whiteboard-v3";

const CANVAS_W = 1400;
const CANVAS_H = 2200;

function emptyScene() {
  return {
    objects: [],
    strokes: []
  };
}

function loadUnit(chapterId) {
  try {
    const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return all?.[chapterId] || {
      scene: emptyScene(),
      note: ""
    };
  } catch {
    return {
      scene: emptyScene(),
      note: ""
    };
  }
}

function saveUnit(chapterId, scene, note) {
  try {
    const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

    all[chapterId] = {
      scene,
      note
    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(all)
    );
  } catch {}
}

function copyScene(scene) {
  return JSON.parse(JSON.stringify(scene));
}

function getPreset(chapter = {}) {
  const text = [
    chapter.title,
    chapter.focus
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (/গতি|motion|velocity|acceleration|ত্বরণ|বেগ/.test(text)) {
    return {
      name: "Motion Board",
      formulas: [
        "v = u + at",
        "s = ut + ½at²",
        "v² = u² + 2as",
        "v = Δs/Δt",
        "a = Δv/Δt"
      ]
    };
  }

  if (/বল|force|newton|ঘর্ষণ|friction/.test(text)) {
    return {
      name: "Force & Newton Board",
      formulas: [
        "F = ma",
        "W = mg",
        "Fnet = ΣF",
        "f opposes motion"
      ]
    };
  }

  if (/কাজ|শক্তি|ক্ষমতা|work|energy|power/.test(text)) {
    return {
      name: "Work–Energy Board",
      formulas: [
        "W = Fs cosθ",
        "KE = ½mv²",
        "PE = mgh",
        "P = W/t"
      ]
    };
  }

  if (/ঘনত্ব|চাপ|density|pressure|fluid|তরল/.test(text)) {
    return {
      name: "Matter & Pressure Board",
      formulas: [
        "ρ = m/V",
        "P = F/A",
        "P = hρg"
      ]
    };
  }

  if (/তাপ|temperature|heat|thermal/.test(text)) {
    return {
      name: "Heat Board",
      formulas: [
        "Q = mcΔT",
        "ΔT = T₂ − T₁",
        "Heat flows hot → cold"
      ]
    };
  }

  if (/তরঙ্গ|শব্দ|wave|sound|frequency|wavelength/.test(text)) {
    return {
      name: "Wave & Sound Board",
      formulas: [
        "v = fλ",
        "f = 1/T",
        "T = 1/f"
      ]
    };
  }

  if (/আলো|দর্পণ|প্রতিফলন|reflection|mirror/.test(text)) {
    return {
      name: "Reflection Board",
      formulas: [
        "i = r",
        "Normal ⟂ mirror",
        "Angle is measured from normal"
      ]
    };
  }

  if (/প্রতিসরণ|লেন্স|refraction|lens/.test(text)) {
    return {
      name: "Refraction & Lens Board",
      formulas: [
        "n₁ sin i = n₂ sin r",
        "1/f = 1/v − 1/u",
        "m = v/u"
      ]
    };
  }

  if (/বিদ্যুৎ|বর্তনী|রোধ|ওহম|current|voltage|resistance|circuit|ohm/.test(text)) {
    return {
      name: "Electricity Board",
      formulas: [
        "V = IR",
        "P = VI",
        "P = I²R",
        "P = V²/R",
        "Q = It"
      ]
    };
  }

  if (/চৌম্বক|magnetic|magnet|motor|generator/.test(text)) {
    return {
      name: "Magnetism Board",
      formulas: [
        "N → S outside magnet",
        "Motor: Electrical → Motion",
        "Generator: Motion → Electrical"
      ]
    };
  }

  return {
    name: "Physics General Board",
    formulas: [
      "Known → Unknown",
      "Formula → Calculation",
      "Draw → Label → Solve"
    ]
  };
}

function drawGrid(ctx) {
  ctx.fillStyle = "#07111f";
  ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

  ctx.strokeStyle = "rgba(103,232,249,.045)";
  ctx.lineWidth = 1;

  for (let x = 0; x <= CANVAS_W; x += 35) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, CANVAS_H);
    ctx.stroke();
  }

  for (let y = 0; y <= CANVAS_H; y += 35) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(CANVAS_W, y);
    ctx.stroke();
  }
}

function drawArrowHead(ctx, x1, y1, x2, y2, size = 20) {
  const angle = Math.atan2(
    y2 - y1,
    x2 - x1
  );

  ctx.beginPath();

  ctx.moveTo(
    x2,
    y2
  );

  ctx.lineTo(
    x2 - size * Math.cos(angle - Math.PI / 6),
    y2 - size * Math.sin(angle - Math.PI / 6)
  );

  ctx.lineTo(
    x2 - size * Math.cos(angle + Math.PI / 6),
    y2 - size * Math.sin(angle + Math.PI / 6)
  );

  ctx.closePath();
  ctx.fill();
}

function drawObject(ctx, obj, selected = false) {

  ctx.save();

  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  const color = obj.color || "#e9f7ff";

  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = obj.lineWidth || 4;

  if (selected) {
    ctx.shadowColor = "#67e8f9";
    ctx.shadowBlur = 14;
  }

  if (obj.type === "line") {

    ctx.beginPath();
    ctx.moveTo(obj.x1, obj.y1);
    ctx.lineTo(obj.x2, obj.y2);
    ctx.stroke();

  }

  if (obj.type === "arrow") {

    ctx.beginPath();
    ctx.moveTo(obj.x1, obj.y1);
    ctx.lineTo(obj.x2, obj.y2);
    ctx.stroke();

    drawArrowHead(
      ctx,
      obj.x1,
      obj.y1,
      obj.x2,
      obj.y2
    );
  }

  if (obj.type === "rect") {

    ctx.strokeRect(
      obj.x,
      obj.y,
      obj.w,
      obj.h
    );
  }

  if (obj.type === "circle") {

    ctx.beginPath();

    ctx.arc(
      obj.x,
      obj.y,
      obj.r,
      0,
      Math.PI * 2
    );

    ctx.stroke();
  }

  if (obj.type === "text") {

    ctx.font =
      obj.font ||
      "bold 32px Arial";

    ctx.fillText(
      obj.text || "",
      obj.x,
      obj.y
    );
  }

  ctx.restore();

  if (selected) {
    drawSelection(ctx, obj);
  }
}

function drawSelection(ctx, obj) {

  ctx.save();

  ctx.strokeStyle =
    "rgba(103,232,249,.85)";

  ctx.lineWidth = 2;

  ctx.setLineDash([8, 6]);

  const box = getBounds(obj);

  ctx.strokeRect(
    box.x - 9,
    box.y - 9,
    box.w + 18,
    box.h + 18
  );

  ctx.setLineDash([]);

  ctx.fillStyle = "#67e8f9";

  ctx.beginPath();

  ctx.arc(
    box.x + box.w + 8,
    box.y - 8,
    5,
    0,
    Math.PI * 2
  );

  ctx.fill();

  ctx.restore();
}

function getBounds(obj) {

  if (
    obj.type === "line" ||
    obj.type === "arrow"
  ) {
    const x1 = Number(obj.x1 || 0);
    const y1 = Number(obj.y1 || 0);
    const x2 = Number(obj.x2 || 0);
    const y2 = Number(obj.y2 || 0);

    return {
      x: Math.min(x1, x2),
      y: Math.min(y1, y2),
      w: Math.abs(x2 - x1),
      h: Math.abs(y2 - y1)
    };
  }

  if (obj.type === "circle") {
    const r = Math.abs(Number(obj.r || 0));

    return {
      x: Number(obj.x || 0) - r,
      y: Number(obj.y || 0) - r,
      w: r * 2,
      h: r * 2
    };
  }

  if (obj.type === "text") {
    const text = String(obj.text || "");

    return {
      x: Number(obj.x || 0),
      y: Number(obj.y || 0) - 38,
      w: Math.max(100, text.length * 20),
      h: 50
    };
  }

  // Rectangle / square
  const x = Number(obj.x || 0);
  const y = Number(obj.y || 0);
  const w = Number(obj.w || 0);
  const h = Number(obj.h || 0);

  return {
    x: Math.min(x, x + w),
    y: Math.min(y, y + h),
    w: Math.abs(w),
    h: Math.abs(h)
  };
}

function hitObject(obj, x, y) {

  const box = getBounds(obj);

  const padding = 24;

  return (
    x >= box.x - padding &&
    x <= box.x + box.w + padding &&
    y >= box.y - padding &&
    y <= box.y + box.h + padding
  );
}

function moveObject(obj, dx, dy) {

  const next = { ...obj };

  if (
    obj.type === "line" ||
    obj.type === "arrow"
  ) {
    next.x1 = Number(obj.x1 || 0) + dx;
    next.x2 = Number(obj.x2 || 0) + dx;

    next.y1 = Number(obj.y1 || 0) + dy;
    next.y2 = Number(obj.y2 || 0) + dy;

    return next;
  }

  next.x =
    Number(obj.x || 0) + dx;

  next.y =
    Number(obj.y || 0) + dy;

  return next;
}

export default function Whiteboard({
  chapter,
  open,
  setOpen
}) {

  const canvasRef = useRef(null);

  const sceneRef =
    useRef(emptyScene());

  const historyRef =
    useRef([]);

  const historyIndexRef =
    useRef(-1);

  const drawingRef =
    useRef(false);

  const selectedIdRef =
    useRef(null);

  const dragRef =
    useRef(null);

  const previewRef =
    useRef(null);

  const beforeDragRef =
    useRef(null);

  const [scene, setSceneState] =
    useState(emptyScene());

  const [tool, setTool] =
    useState("select");

  const [color, setColor] =
    useState("#e9f7ff");

  const [size, setSize] =
    useState(4);

  const [circleSize, setCircleSize] =
    useState(100);

  const [note, setNote] =
    useState("");

  const [width, setWidth] =
    useState(720);

  const preset =
    getPreset(chapter);

  const setScene = (next) => {

    sceneRef.current = next;
    setSceneState(next);
  };

  // -------------------------------------------------------
  // INITIAL / UNIT LOAD
  // -------------------------------------------------------

  useEffect(() => {

    if (!chapter?.id) return;

    const saved =
      loadUnit(chapter.id);

    const next =
      saved.scene || emptyScene();

    setScene(next);
    setNote(saved.note || "");

    historyRef.current =
      [copyScene(next)];

    historyIndexRef.current = 0;

    setWidth(720);
    selectedIdRef.current = null;

    requestAnimationFrame(() => {
      redraw(next, null);
    });

  }, [chapter?.id]);

  // -------------------------------------------------------
  // SAVE
  // -------------------------------------------------------

  useEffect(() => {

    if (!chapter?.id) return;

    saveUnit(
      chapter.id,
      sceneRef.current,
      note
    );

  }, [scene, note, chapter?.id]);

  // -------------------------------------------------------
  // REDRAW
  // -------------------------------------------------------

  const redraw =
    (source = sceneRef.current, preview = null) => {

      const canvas =
        canvasRef.current;

      if (!canvas) return;

      const ctx =
        canvas.getContext("2d");

      ctx.clearRect(
        0,
        0,
        CANVAS_W,
        CANVAS_H
      );

      drawGrid(ctx);

      // Freehand strokes
      for (
        const stroke
        of source.strokes || []
      ) {

        if (!stroke.points?.length)
          continue;

        ctx.save();

        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        if (stroke.mode === "eraser") {

          ctx.globalCompositeOperation =
            "destination-out";

        } else {

          ctx.globalCompositeOperation =
            "source-over";
        }

        ctx.strokeStyle =
          stroke.color;

        ctx.lineWidth =
          stroke.width;

        ctx.beginPath();

        stroke.points.forEach(
          (point, index) => {

            if (index === 0) {
              ctx.moveTo(
                point.x,
                point.y
              );
            } else {
              ctx.lineTo(
                point.x,
                point.y
              );
            }
          }
        );

        ctx.stroke();

        ctx.restore();
      }

      // Objects
      for (
        const obj
        of source.objects || []
      ) {

        drawObject(
          ctx,
          obj,
          obj.id === selectedIdRef.current
        );
      }

      // Preview
      if (preview) {
        drawObject(ctx, preview, false);
      }
    };

  useEffect(() => {
    redraw(scene);
  }, [scene]);

  // -------------------------------------------------------
  // HISTORY
  // -------------------------------------------------------

  const commitHistory = (
    nextScene,
    oldScene = null
  ) => {

    const snapshot =
      copyScene(nextScene);

    if (oldScene) {

      // skip if nothing actually changed
      if (
        JSON.stringify(oldScene) ===
        JSON.stringify(nextScene)
      ) {
        return;
      }
    }

    const current =
      historyIndexRef.current;

    historyRef.current =
      historyRef.current.slice(
        0,
        current + 1
      );

    historyRef.current.push(
      snapshot
    );

    if (
      historyRef.current.length > 40
    ) {
      historyRef.current.shift();
    }

    historyIndexRef.current =
      historyRef.current.length - 1;
  };

  const undo = () => {

    if (
      historyIndexRef.current <= 0
    ) return;

    historyIndexRef.current--;

    const next =
      copyScene(
        historyRef.current[
          historyIndexRef.current
        ]
      );

    selectedIdRef.current = null;

    setScene(next);
  };

  const redo = () => {

    if (
      historyIndexRef.current >=
      historyRef.current.length - 1
    ) return;

    historyIndexRef.current++;

    const next =
      copyScene(
        historyRef.current[
          historyIndexRef.current
        ]
      );

    selectedIdRef.current = null;

    setScene(next);
  };

  // -------------------------------------------------------
  // CANVAS POINT
  // -------------------------------------------------------

  const getPoint = (event) => {

    const canvas =
      canvasRef.current;

    if (!canvas) return null;

    const rect =
      canvas.getBoundingClientRect();

    return {

      x:
        (
          (event.clientX - rect.left) /
          rect.width
        ) * CANVAS_W,

      y:
        (
          (event.clientY - rect.top) /
          rect.height
        ) * CANVAS_H
    };
  };

  // -------------------------------------------------------
  // SELECT / MOVE
  // -------------------------------------------------------

  const selectAt =
    (point) => {

      const objects =
        sceneRef.current.objects || [];

      for (
        let i = objects.length - 1;
        i >= 0;
        i--
      ) {

        const obj =
          objects[i];

        if (
          hitObject(
            obj,
            point.x,
            point.y
          )
        ) {

          selectedIdRef.current =
            obj.id;

          return obj;
        }
      }

      selectedIdRef.current =
        null;

      return null;
    };

  // -------------------------------------------------------
  // POINTER DOWN
  // -------------------------------------------------------

  const pointerDown =
    (event) => {

      const point =
        getPoint(event);

      if (!point) return;

      const canvas =
        canvasRef.current;

      canvas?.setPointerCapture?.(
        event.pointerId
      );

      // ----------------------------------------------
      // SELECT / MOVE
      // ----------------------------------------------

      if (tool === "select") {

      const obj = selectAt(point);

      if (obj) {

        drawingRef.current = true;

        dragRef.current = {
          id: obj.id,
          lastX: point.x,
          lastY: point.y
        };

        beforeDragRef.current =
          copyScene(sceneRef.current);

        redraw(sceneRef.current);

      } else {

        drawingRef.current = false;

        dragRef.current = null;

        beforeDragRef.current = null;

        selectedIdRef.current = null;

        redraw(sceneRef.current);
      }

      return;
    }

      // ----------------------------------------------
      // FREEHAND
      // ----------------------------------------------

      if (
        ["pen", "highlighter", "eraser"]
          .includes(tool)
      ) {

        drawingRef.current =
          true;

        const mode =
          tool === "eraser"
            ? "eraser"
            : "pen";

        const strokeColor =
          tool === "highlighter"
            ? "rgba(103,232,249,.32)"
            : color;

        const strokeWidth =
          tool === "highlighter"
            ? size * 5
            : tool === "eraser"
              ? size * 7
              : size;

        const next =
          copyScene(
            sceneRef.current
          );

        next.strokes.push({
          id:
            `stroke-${Date.now()}-${Math.random()}`,
          mode,
          color: strokeColor,
          width: strokeWidth,
          points: [point]
        });

        setScene(next);

        return;
      }

      // ----------------------------------------------
      // SHAPES
      // ----------------------------------------------

      if (
        [
          "line",
          "arrow",
          "rect",
          "circle"
        ].includes(tool)
      ) {

        drawingRef.current =
          true;

        previewRef.current =
          point;

        return;
      }
    };

  // -------------------------------------------------------
  // POINTER MOVE
  // -------------------------------------------------------

  const pointerMove =
    (event) => {

      const point =
        getPoint(event);

      if (!point) return;

      // ----------------------------------------------
      // MOVE OBJECT
      // ----------------------------------------------

      if (
        drawingRef.current &&
        tool === "select" &&
        dragRef.current
      ) {

        const drag = dragRef.current;

        const dx =
          point.x - drag.lastX;

        const dy =
          point.y - drag.lastY;

        if (dx === 0 && dy === 0) {
          return;
        }

        const next =
          copyScene(sceneRef.current);

        const index =
          next.objects.findIndex(
            obj => obj.id === drag.id
          );

        if (index !== -1) {

          next.objects[index] =
            moveObject(
              next.objects[index],
              dx,
              dy
            );

          drag.lastX = point.x;
          drag.lastY = point.y;

          sceneRef.current = next;

          setSceneState(next);

          requestAnimationFrame(() => {
            redraw(next);
          });
        }

        return;
      }

      // ----------------------------------------------
      // FREEHAND
      // ----------------------------------------------

      if (
        drawingRef.current &&
        ["pen", "highlighter", "eraser"]
          .includes(tool)
      ) {

        const next =
          copyScene(
            sceneRef.current
          );

        const stroke =
          next.strokes[
            next.strokes.length - 1
          ];

        if (!stroke) return;

        stroke.points.push(point);

        setScene(next);

        return;
      }

      // ----------------------------------------------
      // SHAPE PREVIEW
      // ----------------------------------------------

      if (
        drawingRef.current &&
        [
          "line",
          "arrow",
          "rect",
          "circle"
        ].includes(tool)
      ) {

        const start =
          previewRef.current;

        if (!start) return;

        let preview;

        if (
          tool === "line" ||
          tool === "arrow"
        ) {

          preview = {
            id: "preview",
            type: tool,
            x1: start.x,
            y1: start.y,
            x2: point.x,
            y2: point.y,
            color,
            lineWidth: size
          };

        } else if (
          tool === "rect"
        ) {

          preview = {
            id: "preview",
            type: "rect",
            x: start.x,
            y: start.y,
            w: point.x - start.x,
            h: point.y - start.y,
            color,
            lineWidth: size
          };

        } else {

          const dx =
            point.x - start.x;

          const dy =
            point.y - start.y;

          let radius =
            Math.sqrt(
              dx * dx + dy * dy
            );

          // Board-aware circle size
          radius =
            radius *
            (circleSize / 100);

          radius =
            Math.max(
              10,
              Math.min(
                650,
                radius
              )
            );

          preview = {
            id: "preview",
            type: "circle",
            x: start.x,
            y: start.y,
            r: radius,
            color,
            lineWidth: size
          };
        }

        redraw(
          sceneRef.current,
          preview
        );
      }
    };

  // -------------------------------------------------------
  // POINTER UP
  // -------------------------------------------------------

  const pointerUp =
    (event) => {

      if (!drawingRef.current)
        return;

      // ----------------------------------------------
      // MOVE FINISH
      // ----------------------------------------------

      if (
        tool === "select" &&
        dragRef.current
      ) {

        const before =
          beforeDragRef.current;

        const after =
          sceneRef.current;

        commitHistory(
          after,
          before
        );

        drawingRef.current = false;

        dragRef.current = null;

        beforeDragRef.current = null;

        redraw(after);

        return;
      }

      // ----------------------------------------------
      // FREEHAND FINISH
      // ----------------------------------------------

      if (
        ["pen", "highlighter", "eraser"]
          .includes(tool)
      ) {

        drawingRef.current =
          false;

        commitHistory(
          sceneRef.current
        );

        redraw(
          sceneRef.current
        );

        return;
      }

      // ----------------------------------------------
      // SHAPE FINISH
      // ----------------------------------------------

      if (
        [
          "line",
          "arrow",
          "rect",
          "circle"
        ].includes(tool)
      ) {

        const point =
          getPoint(event);

        const start =
          previewRef.current;

        if (
          !point ||
          !start
        ) {

          drawingRef.current =
            false;

          previewRef.current =
            null;

          return;
        }

        const id =
          `obj-${Date.now()}-${Math.random()}`;

        let obj;

        if (
          tool === "line" ||
          tool === "arrow"
        ) {

          obj = {
            id,
            type: tool,
            x1: start.x,
            y1: start.y,
            x2: point.x,
            y2: point.y,
            color,
            lineWidth: size
          };

        } else if (
          tool === "rect"
        ) {

          obj = {
            id,
            type: "rect",
            x: start.x,
            y: start.y,
            w: point.x - start.x,
            h: point.y - start.y,
            color,
            lineWidth: size
          };

        } else {

          const dx =
            point.x - start.x;

          const dy =
            point.y - start.y;

          let radius =
            Math.sqrt(
              dx * dx + dy * dy
            );

          radius =
            radius *
            (circleSize / 100);

          radius =
            Math.max(
              10,
              Math.min(
                650,
                radius
              )
            );

          obj = {
            id,
            type: "circle",
            x: start.x,
            y: start.y,
            r: radius,
            color,
            lineWidth: size
          };
        }

        const next =
          copyScene(
            sceneRef.current
          );

        next.objects.push(obj);

        setScene(next);

        selectedIdRef.current =
          obj.id;

        commitHistory(next);

        drawingRef.current =
          false;

        previewRef.current =
          null;

        redraw(next);
      }
    };

  // -------------------------------------------------------
  // TEXT / FORMULA
  // -------------------------------------------------------

  const addText =
    () => {

      const value =
        window.prompt(
          "Formula / Text লিখুন:",
          preset.formulas[0] ||
          "F = ma"
        );

      if (!value) return;

      const obj = {
        id:
          `text-${Date.now()}-${Math.random()}`,
        type: "text",
        x: 160,
        y: 180,
        text: value,
        color,
        lineWidth: size,
        font: "bold 32px Arial"
      };

      const next =
        copyScene(
          sceneRef.current
        );

      next.objects.push(obj);

      selectedIdRef.current =
        obj.id;

      setScene(next);
      commitHistory(next);
    };

  const quickFormula =
    (formula) => {

      const obj = {
        id:
          `formula-${Date.now()}-${Math.random()}`,
        type: "text",
        x: 120,
        y:
          170 +
          (
            (
              sceneRef.current.objects
                .length
            ) % 10
          ) * 75,
        text: formula,
        color: "#67e8f9",
        lineWidth: size,
        font: "bold 32px Arial"
      };

      const next =
        copyScene(
          sceneRef.current
        );

      next.objects.push(obj);

      selectedIdRef.current =
        obj.id;

      setScene(next);
      commitHistory(next);
    };

  // -------------------------------------------------------
  // DELETE SELECTED OBJECT
  // -------------------------------------------------------

  const deleteSelected =
    () => {

      const id =
        selectedIdRef.current;

      if (!id) return;

      const next =
        copyScene(
          sceneRef.current
        );

      next.objects =
        next.objects.filter(
          obj => obj.id !== id
        );

      selectedIdRef.current =
        null;

      setScene(next);
      commitHistory(next);
    };

  // -------------------------------------------------------
  // CLEAR
  // -------------------------------------------------------

  const clear =
    () => {

      const next =
        emptyScene();

      selectedIdRef.current =
        null;

      setScene(next);
      commitHistory(next);
    };

  // -------------------------------------------------------
  // PRESET
  // -------------------------------------------------------

  const loadPreset =
    () => {

      const next =
        emptyScene();

      next.objects.push({

        id:
          `preset-title-${Date.now()}`,

        type: "text",

        x: 80,
        y: 75,

        text: preset.name,

        color: "#67e8f9",

        font:
          "bold 40px Arial"
      });

      preset.formulas.forEach(
        (formula, index) => {

          next.objects.push({

            id:
              `preset-${index}-${Date.now()}`,

            type: "text",

            x: 100,

            y:
              160 +
              index * 62,

            text: formula,

            color: "#dbeafe",

            font:
              "bold 28px Arial"
          });

        }
      );

      // Big drawing workspace
      next.objects.push({

        id:
          `workspace-${Date.now()}`,

        type: "rect",

        x: 590,
        y: 145,

        w: 690,
        h: 650,

        color:
          "rgba(103,232,249,.38)",

        lineWidth: 2
      });

      next.objects.push({

        id:
          `workspace-label-${Date.now()}`,

        type: "text",

        x: 820,
        y: 185,

        text:
          "DRAW / SOLVE HERE",

        color:
          "#5e819d",

        font:
          "bold 22px Arial"
      });

      selectedIdRef.current =
        null;

      setScene(next);
      commitHistory(next);
    };

  // -------------------------------------------------------
  // WIDTH
  // -------------------------------------------------------

  const setBoardWidth =
    (value) => {

      setWidth(value);

      // Resize only the panel.
      // Canvas itself remains large and scrollable.
    };

  return (
    <>
      {/* RIGHT TAB */}

      <button
        type="button"
        className={
          `whiteboard-right-tab ${
            open ? "open" : ""
          }`
        }
        onClick={() =>
          setOpen(!open)
        }
      >
        <span>✎</span>
        <b>WHITEBOARD</b>
      </button>

      {/* PANEL */}

      <aside
        className={
          `physics-whiteboard ${
            open ? "open" : ""
          }`
        }
        style={{
          width:
            `min(${width}px,94vw)`
        }}
      >

        {/* RESIZE */}

        <div
          className="whiteboard-resize-handle"
          onPointerDown={() => {}}
        >
          <span />
        </div>

        {/* HEADER */}

        <div
          className="physics-whiteboard-header"
        >

          <div>

            <span className="wb-kicker">
              TEACHER / STUDENT WORKSPACE
            </span>

            <h2>
              Physics Whiteboard
            </h2>

            <p>
              Unit {chapter?.no ?? "—"}
              {" • "}
              {chapter?.title || "Current Unit"}
            </p>

          </div>

          <div className="wb-header-actions">

            <button
              onClick={() =>
                setWidth(720)
              }
            >
              Reset Size
            </button>

            <button
              className="wb-close"
              onClick={() =>
                setOpen(false)
              }
            >
              ×
            </button>

          </div>

        </div>

        {/* PANEL WIDTH */}

        <div className="whiteboard-size-row">

          <span>Panel Size</span>

          <input
            type="range"
            min="500"
            max="1100"
            value={width}
            onChange={(e) =>
              setBoardWidth(
                Number(e.target.value)
              )
            }
          />

          <b>{width}px</b>

        </div>

        {/* TOOLBAR */}

        <div className="whiteboard-toolbar">
          <button
            type="button"
            className={`move-object-btn ${tool === "select" ? "active" : ""}`}
            onClick={() => setTool("select")}
            title="Select an object and drag it to move"
          >
            ↖ Move Object
          </button>


          <button
            className={
              tool === "select"
                ? "active"
                : ""
            }
            onClick={() =>
              setTool("select")
            }
          >
            ↖ Select / Move
          </button>

          <button
            className={
              tool === "pen"
                ? "active"
                : ""
            }
            onClick={() =>
              setTool("pen")
            }
          >
            ✎ Pen
          </button>

          <button
            className={
              tool === "highlighter"
                ? "active"
                : ""
            }
            onClick={() =>
              setTool("highlighter")
            }
          >
            ▬ Highlight
          </button>

          <button
            className={
              tool === "eraser"
                ? "active"
                : ""
            }
            onClick={() =>
              setTool("eraser")
            }
          >
            ⌫ Eraser
          </button>

          <button
            className={
              tool === "line"
                ? "active"
                : ""
            }
            onClick={() =>
              setTool("line")
            }
          >
            ／ Line
          </button>

          <button
            className={
              tool === "arrow"
                ? "active"
                : ""
            }
            onClick={() =>
              setTool("arrow")
            }
          >
            ➜ Arrow
          </button>

          <button
            className={
              tool === "rect"
                ? "active"
                : ""
            }
            onClick={() =>
              setTool("rect")
            }
          >
            □ Square
          </button>

          <button
            className={
              tool === "circle"
                ? "active"
                : ""
            }
            onClick={() =>
              setTool("circle")
            }
          >
            ○ Circle
          </button>

          <button
            onClick={addText}
          >
            ∑ Formula / Text
          </button>

          <button onClick={undo}>
            ↶ Undo
          </button>

          <button onClick={redo}>
            ↷ Redo
          </button>

          <button
            onClick={deleteSelected}
            className="delete-object-btn"
          >
            🗑 Delete Object
          </button>

        </div>

        {/* STYLE */}

        <div className="whiteboard-style-row">

          <label>
            Pen Size

            <input
              type="range"
              min="1"
              max="12"
              value={size}
              onChange={(e) =>
                setSize(
                  Number(e.target.value)
                )
              }
            />
          </label>

          <label>
            Color

            <input
              type="color"
              value={color}
              onChange={(e) =>
                setColor(
                  e.target.value
                )
              }
            />
          </label>

          {tool === "circle" && (
            <label>
              Circle Size

              <input
                type="range"
                min="40"
                max="160"
                value={circleSize}
                onChange={(e) =>
                  setCircleSize(
                    Number(e.target.value)
                  )
                }
              />

              <b>{circleSize}%</b>
            </label>
          )}

          <button
            className="preset-load-btn"
            onClick={loadPreset}
          >
            Load Unit Preset
          </button>

          <button
            className="clear-btn"
            onClick={clear}
          >
            Clear All
          </button>

        </div>

        {/* FORMULAS */}

        <div className="whiteboard-formulas">

          <div className="formula-title">

            <span>
              UNIT FORMULAS
            </span>

            <small>
              {preset.name}
            </small>

          </div>

          <div className="formula-buttons">

            {preset.formulas.map(
              (formula, index) => (

                <button
                  key={index}
                  onClick={() =>
                    quickFormula(
                      formula
                    )
                  }
                >
                  {formula}
                </button>

              )
            )}

          </div>

        </div>

        {/* CANVAS */}

        <div className="whiteboard-scroll">

          <div
            className="whiteboard-canvas-holder"
          >

            <canvas
              ref={canvasRef}
              width={CANVAS_W}
              height={CANVAS_H}
              className="physics-board-canvas"
              onPointerDown={pointerDown}
              onPointerMove={pointerMove}
              onPointerUp={pointerUp}
              onPointerCancel={pointerUp}
            />

          </div>

        </div>

        {/* NOTE */}

        <section
          className="unit-note-panel"
        >

          <div
            className="unit-note-head"
          >

            <div>
              <span>UNIT NOTE</span>

              <strong>
                {chapter?.title ||
                  "Current Unit"}
              </strong>
            </div>

            <small>
              Auto saved
            </small>

          </div>

          <textarea
            value={note}
            onChange={(e) =>
              setNote(e.target.value)
            }
            placeholder={
              "Teacher explanation / student notes..."
            }
          />

        </section>

        <div className="whiteboard-footer">

          <span>
            Select / Move → object ধরে drag করো
          </span>

          <span>
            {preset.name}
          </span>

        </div>

      </aside>
    </>
  );
}
