import { z } from "zod";
import { services } from "@/content/services";

export const inquirySchema = z.object({
  name: z.string().trim().min(2, "Укажите имя: минимум 2 символа.").max(80, "Имя должно быть не длиннее 80 символов."),
  contact: z.string().trim().max(120, "Контакт должен быть не длиннее 120 символов.").refine((value) => {
    if (/^@[a-zA-Z0-9_]{5,32}$/.test(value)) return true;
    return /^[+\d\s().-]+$/.test(value) && value.replace(/\D/g, "").length >= 7 && value.replace(/\D/g, "").length <= 15;
  }, "Укажите телефон (7–15 цифр) или Telegram в формате @username."),
  vehicle: z.string().trim().min(2, "Укажите марку и модель автомобиля.").max(120, "Описание автомобиля должно быть не длиннее 120 символов."),
  service: z.string().refine((value) => value === "consultation" || services.some((item) => item.slug === value), "Выберите услугу или консультацию."),
  message: z.string().trim().max(1500, "Сообщение должно быть не длиннее 1500 символов."),
});

export type Inquiry = z.infer<typeof inquirySchema>;
export type InquiryField = keyof Inquiry;
