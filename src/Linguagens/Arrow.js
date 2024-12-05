export default function Arrow({ x1, y1, x2, y2 }) {
  const arrowHeadSize = 10; // Tamanho da ponta da seta

  // Cálculo do ângulo da linha
  const angle = Math.atan2(y2 - y1, x2 - x1);

  // Pontos da ponta da seta
  const arrowPoint1 = {
    x: x2 - arrowHeadSize * Math.cos(angle - Math.PI / 6),
    y: y2 - arrowHeadSize * Math.sin(angle - Math.PI / 6),
  };

  const arrowPoint2 = {
    x: x2 - arrowHeadSize * Math.cos(angle + Math.PI / 6),
    y: y2 - arrowHeadSize * Math.sin(angle + Math.PI / 6),
  };

  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      {/* Linha da seta */}
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="black"
        strokeWidth="2"
      />
      {/* Ponta da seta */}
      <polygon
        points={`
          ${x2},${y2} 
          ${arrowPoint1.x},${arrowPoint1.y} 
          ${arrowPoint2.x},${arrowPoint2.y}
        `}
        fill="black"
      />
    </svg>
  );
}