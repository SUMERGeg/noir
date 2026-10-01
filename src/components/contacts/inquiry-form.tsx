"use client";

import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/action";
import Link from "next/link";
import { Heading, Text } from "@/components/ui/typography";
import { pricing } from "@/content/pricing";
import { ppfZones, ppfZonesQuery, type PpfZoneId } from "@/content/ppf-zones";
import { services } from "@/content/services";
import { inquirySchema, type Inquiry, type InquiryField } from "@/lib/inquiry-schema";

const fieldLabels: Record<InquiryField, string> = { name: "Имя", contact: "Телефон или Telegram", vehicle: "Автомобиль", service: "Интересующая услуга", message: "Сообщение" };

export function InquiryForm({ initialService, initialPackage, initialZones = [] }: { initialService: string; initialPackage?: string; initialZones?: readonly PpfZoneId[] }) {
  const [values, setValues] = useState<Inquiry>({ name: "", contact: "", vehicle: "", service: initialService, message: "" });
  const [errors, setErrors] = useState<Partial<Record<InquiryField, string>>>({});
  const [result, setResult] = useState<Inquiry | null>(null);
  const [copyState, setCopyState] = useState("");
  const form = useRef<HTMLFormElement>(null);
  const resultHeading = useRef<HTMLHeadingElement>(null);
  const selectedPackage = pricing.find((item) => item.id === initialPackage && item.serviceSlug === values.service);
  const customZones = values.service === "ppf" && !selectedPackage ? ppfZones.filter((zone) => initialZones.includes(zone.id)) : [];
  const serviceName = (value: string) => services.find((item) => item.slug === value)?.title ?? "Помощь с выбором";

  const change = (field: InquiryField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = inquirySchema.safeParse(values);
    if (!parsed.success) {
      const nextErrors: Partial<Record<InquiryField, string>> = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as InquiryField;
        nextErrors[field] ??= issue.message;
      }
      setErrors(nextErrors);
      const firstInvalid = Object.keys(nextErrors)[0];
      form.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    setErrors({});
    setResult(parsed.data);
    setCopyState("");
    requestAnimationFrame(() => resultHeading.current?.focus());
  };

  const copy = async () => {
    if (!result) return;
    const text = ["Запрос расчёта — NOIR Detailing", `Имя: ${result.name}`, `Контакт: ${result.contact}`, `Автомобиль: ${result.vehicle}`, `Услуга: ${serviceName(result.service)}`, selectedPackage && `Пакет: ${selectedPackage.title}`, customZones.length && `Индивидуальные зоны PPF: ${customZones.map((zone) => zone.label).join(", ")}`, result.message && `Сообщение: ${result.message}`].filter(Boolean).join("\n");
    try { await navigator.clipboard.writeText(text); setCopyState("Текст заявки скопирован."); }
    catch { setCopyState("Не удалось скопировать. Вы можете выделить текст заявки вручную."); }
  };

  if (result) return <div className="inquiry-result">
    <Heading as="h3" variant="subheading" ref={resultHeading} tabIndex={-1}>Заявка подготовлена</Heading>
    <Text>Это демонстрационный сайт. Данные проверены, но заявка не отправлена. Вы можете сохранить её текст.</Text>
    <dl>{(Object.keys(fieldLabels) as InquiryField[]).filter((field) => result[field]).map((field) => <div key={field}><dt>{fieldLabels[field]}</dt><dd>{field === "service" ? serviceName(result[field]) : result[field]}</dd></div>)}{selectedPackage && <div><dt>Пакет</dt><dd>{selectedPackage.title}</dd></div>}{!!customZones.length && <div><dt>Индивидуальные зоны PPF</dt><dd>{customZones.map((zone) => zone.label).join(", ")}</dd></div>}</dl>
    <div className="inquiry-result-actions"><Button onClick={copy}>Скопировать заявку</Button><Button variant="secondary" onClick={() => { setResult(null); requestAnimationFrame(() => form.current?.querySelector<HTMLInputElement>("input")?.focus()); }}>Изменить данные</Button></div>
    <p role="status" className="form-status">{copyState}</p>
  </div>;

  const props = (field: InquiryField) => ({ id: `inquiry-${field}`, name: field, value: values[field], "aria-invalid": !!errors[field], "aria-describedby": errors[field] ? `inquiry-${field}-error${field === "contact" ? " inquiry-contact-hint" : ""}` : field === "contact" ? "inquiry-contact-hint" : undefined });
  const error = (field: InquiryField) => errors[field] && <p className="field-error" id={`inquiry-${field}-error`}>{errors[field]}</p>;

  return <form ref={form} noValidate onSubmit={submit} className="inquiry-form" aria-describedby="inquiry-demo-note">
    <p className="form-demo-note" id="inquiry-demo-note">Демонстрация формы. Заявки не отправляются; данные не сохраняются на сервере.</p>
    {selectedPackage && <p className="selected-package">Выбран пакет: <strong lang="en">{selectedPackage.title}</strong></p>}
    {!!customZones.length && <div className="selected-package selected-custom-zones"><strong>Индивидуальная защита PPF</strong><ul>{customZones.map((zone) => <li key={zone.id}>{zone.label}</li>)}</ul><Link href={`/services/ppf?${ppfZonesQuery(initialZones)}#service-packages`} prefetch={false}>Изменить зоны</Link></div>}
    <div className="form-fields">
      <div className="form-field"><label htmlFor="inquiry-name">Имя <span aria-hidden="true">*</span></label><input {...props("name")} required autoComplete="name" maxLength={80} onChange={(event) => change("name", event.target.value)} />{error("name")}</div>
      <div className="form-field"><label htmlFor="inquiry-contact">Телефон или Telegram <span aria-hidden="true">*</span></label><input {...props("contact")} required autoComplete="off" maxLength={120} onChange={(event) => change("contact", event.target.value)} /><p className="field-hint" id="inquiry-contact-hint">Например, +7 999 123-45-67 или @username</p>{error("contact")}</div>
      <div className="form-field"><label htmlFor="inquiry-vehicle">Марка и модель <span aria-hidden="true">*</span></label><input {...props("vehicle")} required autoComplete="off" maxLength={120} onChange={(event) => change("vehicle", event.target.value)} />{error("vehicle")}</div>
      <div className="form-field"><label htmlFor="inquiry-service">Интересующая услуга <span aria-hidden="true">*</span></label><select {...props("service")} required onChange={(event) => change("service", event.target.value)}><option value="">Выберите услугу</option>{services.map((item) => <option key={item.slug} value={item.slug}>{item.title}</option>)}<option value="consultation">Помогите выбрать</option></select>{error("service")}</div>
      <div className="form-field form-field-wide"><label htmlFor="inquiry-message">Сообщение <span className="field-optional">необязательно</span></label><textarea {...props("message")} rows={4} maxLength={1500} onChange={(event) => change("message", event.target.value)} />{error("message")}</div>
    </div>
    {Object.values(errors).some(Boolean) && <p role="alert" className="field-error">Проверьте отмеченные поля.</p>}
    <Button type="submit" arrow>Подготовить заявку</Button>
  </form>;
}
