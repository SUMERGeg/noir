const rubles = new Intl.NumberFormat("ru-RU");

export function formatPrice(value: number) {
  return `от ${rubles.format(value)} ₽`;
}
