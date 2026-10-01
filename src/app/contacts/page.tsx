import { InquiryForm } from "@/components/contacts/inquiry-form";
import { LocationMap } from "@/components/contacts/location-map";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { Heading, Label, Text } from "@/components/ui/typography";
import { pricing } from "@/content/pricing";
import { parsePpfZones } from "@/content/ppf-zones";
import { services } from "@/content/services";
import { studio } from "@/content/studio";
import { pageMetadata } from "@/lib/page-metadata";
import "@/styles/pages.css";

export const metadata = pageMetadata("Контакты", "Запрос расчёта NOIR Detailing: модель автомобиля, выбор услуги и пакет защиты. Контакты и форма концептуального проекта.", "/contacts");

export default async function ContactsPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const query = await searchParams;
  const packageId = typeof query.package === "string" ? query.package : undefined;
  const selectedPackage = pricing.find((item) => item.id === packageId);
  const requestedService = typeof query.service === "string" ? query.service : "";
  const initialService = selectedPackage?.serviceSlug ?? (services.some((item) => item.slug === requestedService) ? requestedService : "");
  const initialZones = initialService === "ppf" && !selectedPackage ? parsePpfZones(query.zones) : [];
  const contacts = studio.contacts;
  return <main id="main-content" tabIndex={-1}>
    <PageIntro eyebrow="NOIR / Контакты" title="Начнём с вашего автомобиля." description="Расскажите о модели автомобиля и о том, что хотите защитить. Мы подберём подходящий пакет и рассчитаем стоимость." cta={{href:"#inquiry",label:"Получить расчёт"}} />
    <Section spacing="none" className="contact-information" aria-labelledby="contacts-heading"><Container>
      <Heading id="contacts-heading" className="sr-only">Контактные данные студии</Heading>
      <dl className="contact-details"><div><dt>Телефон</dt><dd>{contacts.phone}</dd></div><div><dt>Telegram</dt><dd>{contacts.telegram}</dd></div><div><dt>WhatsApp</dt><dd>{contacts.whatsapp}</dd></div><div><dt>Адрес</dt><dd>{contacts.address}</dd></div><div><dt>Часы работы</dt><dd>{contacts.hours}</dd></div></dl>
      <Text className="contact-disclosure">{contacts.disclosure}</Text>
    </Container></Section>
    <Section tone="light" id="inquiry" aria-labelledby="inquiry-heading"><Container className="inquiry-layout">
      <div><Label marker className="section-eyebrow">01 / Расчёт</Label><Heading id="inquiry-heading">Что хотите сохранить?</Heading><Text className="page-note">Укажите автомобиль и интересующую услугу. Поля со звёздочкой обязательны.</Text></div>
      <InquiryForm key={`${initialService}:${selectedPackage?.id ?? ""}:${initialZones.join(",")}`} initialService={initialService} initialPackage={selectedPackage?.id} initialZones={initialZones} />
    </Container></Section>
    <Section aria-labelledby="arrival-heading"><Container className="arrival-layout"><div><Label marker className="section-eyebrow">02 / Визит в студию</Label><Heading id="arrival-heading">Как нас найти</Heading><Text className="page-note">{contacts.address}</Text><Text>{contacts.arrival}</Text><Text className="page-note">Адрес и схема вымышлены.</Text></div><LocationMap /></Container></Section>
  </main>;
}
