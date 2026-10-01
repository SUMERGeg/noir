export function LocationMap() {
  return <figure className="location-map">
    <svg viewBox="0 0 800 440" role="img" aria-labelledby="map-title map-description">
      <title id="map-title">Демонстрационная схема проезда к NOIR</title><desc id="map-description">Вымышленная улица Примерная проходит перед студией. Въезд со стороны улицы ведёт к парковке у здания.</desc>
      <rect width="800" height="440" fill="#1a1a1a" />
      <path d="M0 330H800M160 0V440M660 0V440" stroke="#353535" strokeWidth="60" />
      <path d="M0 330H800" stroke="#777" strokeDasharray="12 16" />
      <rect x="310" y="90" width="250" height="130" fill="#f1f0ec" />
      <text x="435" y="151" textAnchor="middle" fill="#0b0b0b" fontSize="32" fontFamily="Arial, sans-serif">NOIR.</text>
      <text x="435" y="185" textAnchor="middle" fill="#0b0b0b" fontSize="13" fontFamily="Arial, sans-serif">ДЕМОНСТРАЦИЯ</text>
      <rect x="320" y="240" width="60" height="45" fill="none" stroke="#a7a9a7" /><text x="350" y="272" textAnchor="middle" fill="#f1f0ec" fontSize="28" fontFamily="Arial, sans-serif">P</text>
      <path d="M435 330V252H390" fill="none" stroke="#f1f0ec" strokeWidth="3" /><path d="m402 242-12 10 12 10" fill="none" stroke="#f1f0ec" strokeWidth="3" />
      <text x="500" y="392" fill="#a7a9a7" fontSize="18" fontFamily="Arial, sans-serif">ул. Примерная</text>
    </svg>
    <figcaption>Схема вымышленного адреса для портфолио-проекта.</figcaption>
  </figure>;
}
