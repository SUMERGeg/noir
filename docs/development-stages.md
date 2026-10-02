# Development Stages

## Current Progress — 2026-10-03

- Документы подготовительных этапов 1–7 утверждены пользователем.
- Этап 8 выполнен: Next.js App Router, TypeScript strict, Tailwind CSS, Motion,
  структура компонентов и типизированный контент настроены.
- Production-сборка и проверка TypeScript прошли. Локальный запуск проверен:
  главная отвечает HTTP 200, CSS и Tailwind подключены.
- Этап 9 выполнен: шапка и Hero технически проверены и визуально утверждены пользователем.
  Проверены 390/768/1024/1440px, отсутствие горизонтального переполнения,
  кадрирование, hover/focus, reduced motion, мобильное меню, Escape и обход клавиатурой.
  Production-сборка проходит; ошибок браузерной консоли при проверке прототипа нет.
- Этап 10 выполнен: выделены контейнер, ссылки и кнопки, типографика, подписи,
  секции, карточки, оформление изображений и шкала отступов.
  Шапка и Hero используют общие компоненты; утверждённый вид сохранён.
  Production-сборка и браузерные проверки прошли. Сравнение скриншотов на четырёх
  размерах показало 0 изменённых пикселей. Правила: `docs/design-primitives.md`.
- Этап 11 реализован: показатели доверия, четыре услуги, проект Porsche,
  материал PPF, шесть этапов процесса, сравнение до/после, три пакета,
  три отзыва, финальный CTA и общий footer.
  Добавлены русские переводы утверждённых текстов и концептуальные WebP-изображения.
  Production-сборка и TypeScript прошли; порядок и состав секций, локальные
  изображения и подключение CSS проверены по артефактам сборки.
  Доступ к встроенному браузеру восстановлен после запуска локального сервера.
  Проверены отсутствие горизонтального overflow на 390/768/1024/1440px,
  Hero на desktop/mobile, загрузка обоих изображений сравнения, изменение
  slider клавиатурой 50→51→50. В захваченной консоли ошибок нет.
- Этап 12 выполнен: страница `/services/ppf` и общий шаблон услуги.
  Подробности: `docs/service-template-implementation.md`.
- Этап 13 выполнен: список проектов и кейс Porsche 911 Carrera 4S.
  Подробности: `docs/project-template-implementation.md`.
- Этап 14 выполнен: услуги, цены, студия, контакты, форма и ещё три страницы услуг.
  Контакты вымышлены по указанию пользователя; форма работает в демонстрационном режиме.
  Подробности: `docs/remaining-pages-implementation.md`.
- Десктопные вертикальные отступы сокращены на 25% при ширине от 1100px.
  Мобильные и планшетные отступы сохранены.
- Этап 15 выполнен: плавное появление заголовков и фотографий при прокрутке,
  лёгкое увеличение фотографий проектов при hover, поддержка reduced motion.
  Первый экран и контент без JavaScript доступны сразу; страницы остаются Server Components.
  Production-сборка и TypeScript прошли, выполнена проверка основных шаблонов
  на 390/768/1024/1440px и проверка перехода между страницами; ошибок консоли нет.
  Подробности и границы проверки: `docs/motion-implementation.md`.
- После этапа 15 добавлены индивидуальный выбор зон PPF с переносом в заявку
  и интерактивный просмотр четырёх деталей Porsche с новыми изображениями.
- Этап 16 выполнен: 11 маршрутов проверены на 390/768/1024/1440px,
  включая прокрутку страниц, загрузку изображений, меню, форму, сравнение,
  FAQ и новые интерактивные блоки. Адаптивных проблем, требующих исправления,
  не обнаружено; в консоли ошибок нет.
  Подробности и границы проверки: `docs/responsive-qa.md`.
- Этап 17 выполнен: добавлены canonical, полные метаданные для публикации ссылок,
  sitemap и robots; исправлены доступные названия логотипа и маркеров Porsche.
  Lighthouse на production-сборке: Performance 95–98 mobile / 100 desktop,
  Accessibility, Best Practices и SEO — 100 на проверенных шаблонах.
  Проверены метаданные всех 11 страниц и 34 внутренние ссылки; сборка проходит.
  Подробности и границы измерений: `docs/accessibility-performance-seo.md`.
- Этап 18 выполнен: финальное визуальное ревью 11 страниц desktop/mobile,
  независимое ревью кода и сверка с критериями готовности.
  Заменено изображение услуги салона; начальная прозрачность заголовков исправлена
  для устранения замечания по контрасту. Production-сборка и TypeScript прошли.
  Контрольный Lighthouse: Performance 96–97 mobile, остальные категории — 100;
  CLS 0, ошибок консоли нет. Подробности: `docs/final-review.md`.
- Этап 19 выполнен: сайт опубликован на https://sumergeg.github.io/noir/.
  Next.js экспортирует статический HTML; GitHub Actions собирает и публикует
  изменения из `main`. Настроены пути ресурсов, canonical и sitemap для `/noir/`.
  Выбор пакетов и зон читается в браузере и передаётся в демонстрационную заявку.
  Сборка и TypeScript прошли локально и в Actions. Проверены 567 ссылок/ресурсов
  экспорта, адаптив 390/768/1024/1440px и основные интерактивные сценарии.
  На живом сайте проверены главная, PPF и переход в заявку; ошибок консоли нет.
  Настройка и локальный preview описаны в `README.md`, раздел GitHub Pages.
- Следующий этап: 20 — Portfolio Case Study.

## 1. Research

Collect:

- premium automotive references;
- detailing competitors;
- typography references;
- motion references;
- gallery/case-study references.

## 2. Brief

Fix:

- positioning;
- audience;
- brand character;
- services;
- CTA;
- value proposition.

## 3. Sitemap

Define:

- routes;
- page goals;
- navigation;
- content hierarchy.

## 4. Content

Write and approve:

- headlines;
- service descriptions;
- prices;
- trust metrics;
- FAQs;
- reviews;
- project data;
- CTA copy.

## 5. Visual Direction

Fix:

- reference mix;
- colors;
- typography;
- spacing;
- image treatment;
- component style;
- motion principles.

## 6. Site Specification

Define exact requirements for every page and section.

## 7. Acceptance Criteria

Define what “done” means.

## 8. Repository Setup

Create:

- Next.js project;
- TypeScript strict mode;
- Tailwind;
- Motion;
- content structure;
- `AGENTS.md`.

## 9. Hero Prototype

Implement only:

- header;
- hero;
- desktop;
- mobile.

Do not continue until visual quality is approved.

## 10. Design Primitives

Extract:

- container;
- buttons;
- typography;
- section shell;
- labels;
- cards;
- image treatment;
- spacing scale.

## 11. Homepage

Build sequentially:

- services;
- featured project;
- technology;
- process;
- before/after;
- pricing;
- reviews;
- final CTA.

## 12. Service Template

Build `/services/ppf` first.

Once approved, reuse the structure for other service pages.

## 13. Project Template

Build one full project case first.

Then create remaining cases from structured content.

## 14. Remaining Pages

Build:

- services index;
- pricing;
- about;
- contacts.

## 15. Motion

Add motion only after static layout is approved.

## 16. Responsive QA

Verify:

- 390;
- 768;
- 1024;
- 1440.

## 17. Accessibility / Performance / SEO

Run audits and fix issues.

## 18. Final Review

Use:

- visual QA;
- code review;
- acceptance criteria.

## 19. Deploy

Deploy production build.

## 20. Portfolio Case Study

Capture:

- hero desktop;
- mobile;
- services;
- project page;
- before/after;
- design system;
- final live link.
