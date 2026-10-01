# 05 — Site Specification

## Global Requirements

- Multi-page website.
- Responsive design.
- Premium editorial automotive direction.
- Shared header and footer.
- Shared design tokens.
- Structured content data.
- Realistic CTA and form flows.
- Accessible interaction states.
- SEO metadata for each page.

---

# Global Header

Desktop:

- brand left;
- navigation center/right;
- primary CTA;
- transparent over hero where appropriate;
- solid background after scroll if needed.

Mobile:

- brand;
- menu trigger;
- compact full-screen or sheet navigation.

Navigation:

- Services
- Projects
- Pricing
- About
- Contacts

Primary CTA:

**Получить расчёт**

---

# Homepage `/`

## 1. Hero

Must include:

- premium automotive image/video;
- eyebrow;
- large headline;
- short supporting copy;
- primary CTA;
- secondary CTA;
- trust metadata.

## 2. Credibility Row

Must include:

- cars protected;
- warranty;
- rating;
- installation metric.

## 3. Services Preview

Must include 4 main services.

Each item:

- title;
- short description;
- price from;
- link.

## 4. Featured Project

Must include:

- vehicle name;
- project title;
- large image;
- service list;
- technical metadata;
- CTA.

## 5. Material / Technology Story

Explain PPF or ceramic material visually.

## 6. Process

6-step process.

## 7. Before / After

Interactive comparison where useful.

## 8. Pricing Preview

3 main packages.

## 9. Reviews

3–5 reviews.

## 10. Final CTA

Large visual close with inquiry CTA.

---

# Services `/services`

Include:

- page hero;
- service overview;
- 4–6 service categories;
- comparison logic;
- who each service is for;
- CTA.

---

# Service Page Template

Used for:

- `/services/ppf`
- `/services/ceramic-coating`
- `/services/paint-correction`
- `/services/interior-detailing`

Required sections:

1. Hero
2. Service summary
3. Key benefits
4. Who it is for
5. Process
6. Packages / price from
7. Material / technology
8. Warranty or expected durability
9. FAQ
10. CTA

---

# Projects `/projects`

Required:

- page hero;
- project index;
- premium photography;
- vehicle name;
- services;
- result summary;
- optional filtering.

Avoid a generic blog-grid appearance.

---

# Project Page `/projects/[slug]`

Required:

1. Hero
2. Vehicle metadata
3. Challenge
4. Work performed
5. Technical details
6. Gallery
7. Before / after
8. Result
9. Related service
10. CTA

---

# Pricing `/pricing`

Required:

- package cards or comparison table;
- starting prices;
- inclusions;
- disclaimer that exact cost depends on vehicle;
- CTA.

Do not hide all pricing behind a form.

---

# About `/about`

Required:

- studio philosophy;
- craftsmanship;
- working environment;
- inspection process;
- quality control;
- materials;
- trust signals;
- CTA.

---

# Contacts `/contacts`

Required:

- phone;
- Telegram;
- WhatsApp;
- address;
- working hours;
- map;
- inquiry form;
- parking / arrival note.

Form fields:

- Name
- Phone or Messenger
- Vehicle
- Interested service
- Message

---

# Form Behavior

Required:

- client-side validation;
- clear error states;
- clear success state;
- no page reload if avoidable;
- labels must remain understandable;
- form must be keyboard usable.

---

# SEO

Each page must have:

- unique title;
- unique description;
- Open Graph image;
- canonical URL where relevant.

Service pages should use descriptive headings and internal linking.

---

# Content Architecture

Recommended data files:

```text
src/content/services.ts
src/content/projects.ts
src/content/reviews.ts
src/content/pricing.ts
```

Avoid hardcoding repeated content directly inside large page components.

---

# Component Architecture

Recommended groups:

```text
components/layout/
components/sections/
components/ui/
components/motion/
```

Pages should compose sections.

Avoid monolithic 500–700 line page files.

---

# Motion Rules

Motion should be added only after static layout is visually approved.

All meaningful animations must respect reduced-motion preferences.
