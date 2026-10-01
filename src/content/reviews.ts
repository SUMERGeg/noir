// Approved portfolio reviews: docs/03-content.md.
export interface Review {
  id: string;
  author: string;
  vehicle: string;
  quote: string;
}

export const reviews = [
  {
    id: "alexander-porsche-911",
    author: "Александр",
    vehicle: "Porsche 911",
    quote:
      "Автомобиль вернулся как новый с завода. Но главное — насколько аккуратно плёнка установлена по краям. Ничего лишнего не видно.",
  },
  {
    id: "maksim-bmw-m3",
    author: "Максим",
    vehicle: "BMW M3",
    quote:
      "Я хотел защитить кузов, не меняя внешний вид покрытия. Именно такой результат и получил.",
  },
  {
    id: "denis-range-rover-sport",
    author: "Денис",
    vehicle: "Range Rover Sport",
    quote:
      "Консультация оказалась полезнее обычного предложения услуг. Защитили только те зоны, которые действительно важны при моём использовании автомобиля.",
  },
] as const satisfies readonly Review[];
