"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Plum = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const [size, setSize] = useState({ width: 0, height: 0 });

  // Configuration
  const r180 = Math.PI;
  const r15 = Math.PI / 12;
  const { random } = Math;
  const MIN_BRANCH = 30;
  const len = 6;
  const stopperRef = useRef<number | null>(null);

  useEffect(() => {
    const updateSize = () => {
      const newSize = { width: window.innerWidth, height: window.innerHeight };
      console.log("Plum: Window size updated:", newSize);
      setSize(newSize);
    };
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    console.log("Plum: Canvas ref:", canvas);
    console.log("Plum: Size:", size);
    console.log("Plum: Theme:", theme);

    if (!canvas || size.width === 0 || size.height === 0) {
      console.log("Plum: Skipping render - canvas or size not ready");
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.log("Plum: Failed to get 2d context");
      return;
    }

    console.log("Plum: Starting animation");

    const width = size.width;
    const height = size.height;

    // High DPI setup
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    // Opacity and color setup
    const isDark = theme === "dark";
    const opacity = isDark ? 0.03 : 0.03;
    ctx.strokeStyle = isDark
      ? `rgba(255, 255, 255, ${opacity})`
      : `rgba(0, 0, 0, ${opacity})`;
    ctx.lineWidth = 1.2;
    ctx.lineCap = "round";

    console.log("Plum: Stroke style:", ctx.strokeStyle);

    let steps: (() => void)[] = [];
    let prevSteps: (() => void)[] = [];
    let drawCount = 0;

    const step = (
      x: number,
      y: number,
      rad: number,
      counter = { value: 0 }
    ) => {
      const length = random() * len;
      counter.value += 1;

      const [nx, ny] = polar2cart(x, y, length, rad);

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(nx, ny);
      ctx.stroke();
      drawCount++;

      const rad1 = rad + random() * r15;
      const rad2 = rad - random() * r15;

      if (nx < -100 || nx > width + 100 || ny < -100 || ny > height + 100)
        return;

      const rate = counter.value <= MIN_BRANCH ? 0.8 : 0.5;

      if (random() < rate) steps.push(() => step(nx, ny, rad1, counter));
      if (random() < rate) steps.push(() => step(nx, ny, rad2, counter));
    };

    const polar2cart = (x = 0, y = 0, r = 0, theta = 0): [number, number] => {
      const dx = r * Math.cos(theta);
      const dy = r * Math.sin(theta);
      return [x + dx, y + dy];
    };

    let lastTime = performance.now();
    const interval = 1000 / 40;
    let frameCount = 0;

    const frame = () => {
      if (performance.now() - lastTime < interval) {
        stopperRef.current = requestAnimationFrame(frame);
        return;
      }

      prevSteps = steps;
      steps = [];
      lastTime = performance.now();
      frameCount++;

      if (!prevSteps.length) {
        console.log(
          "Plum: Animation complete. Frames:",
          frameCount,
          "Lines drawn:",
          drawCount
        );
        return;
      }

      prevSteps.forEach((i) => {
        if (random() < 0.5) steps.push(i);
        else i();
      });

      stopperRef.current = requestAnimationFrame(frame);
    };

    const start = () => {
      ctx.clearRect(0, 0, width, height);
      const midY1 = randomMiddle() * height;
      const midY2 = randomMiddle() * height;
      const midY3 = randomMiddle() * height;

      console.log("Plum: Starting positions:", [
        [0, midY1],
        [0, midY2],
        [0, midY3],
        [width, midY1],
        [width, midY2],
        [width, midY3],
      ]);

      steps = [
        () => step(0, midY1, 0),
        () => step(0, midY2, 0),
        () => step(0, midY3, 0),
        () => step(width, midY1, r180),
        () => step(width, midY2, r180),
        () => step(width, midY3, r180),
      ];
      if (width < 500) steps = steps.slice(0, 3);

      console.log("Plum: Initial steps count:", steps.length);
      frame();
    };

    const randomMiddle = () => random() * 0.6 + 0.2;

    start();

    return () => {
      if (stopperRef.current) cancelAnimationFrame(stopperRef.current);
    };
  }, [size, theme]);

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 1,
        opacity: size.width > 0 ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100vw",
          height: "100vh",
        }}
      />
    </div>
  );
};

export default Plum;
