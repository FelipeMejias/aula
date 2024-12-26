import { useRef, useEffect, useState } from "react";

export default function Arrow({ x1, y1, x2, y2 }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    // Obter as dimensões da div contendo o SVG
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const { width, height } = dimensions;

  // Calcular coordenadas em pixels relativos ao tamanho da div
  const startX = (x1 / 100) * width;
  const startY = (y1 / 100) * height;
  const endX = (x2 / 100) * width;
  const endY = (y2 / 100) * height;

  // Tamanho da ponta da seta em pixels
  const arrowHeadSize = 10;

  // Calcular ângulo e pontos da ponta da seta
  const angle = Math.atan2(endY - startY, endX - startX);
  const arrowPoint1 = {
    x: endX - arrowHeadSize * Math.cos(angle - Math.PI / 6),
    y: endY - arrowHeadSize * Math.sin(angle - Math.PI / 6),
  };
  const arrowPoint2 = {
    x: endX - arrowHeadSize * Math.cos(angle + Math.PI / 6),
    y: endY - arrowHeadSize * Math.sin(angle + Math.PI / 6),
  };

  return (
    <div
      ref={containerRef}
      style={{
        zIndex:1,
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {/* Linha da seta */}
        <line
          x1={startX}
          y1={startY}
          x2={endX}
          y2={endY}
          stroke="black"
          strokeWidth="2"
        />
        {/* Ponta da seta */}
        <polygon
          points={` 
            ${endX},${endY}
            ${arrowPoint1.x},${arrowPoint1.y} 
            ${arrowPoint2.x},${arrowPoint2.y}
          `}
          fill="black"
        />
      </svg>
    </div>
  );
}
