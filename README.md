# NOIR Detailing — Portfolio Project

Концепт многостраничного сайта premium detailing studio для портфолио.

## Цель проекта

Создать реалистичный коммерческий сайт, который можно показывать потенциальным клиентам как пример уровня разработки, визуального вкуса и работы с conversion UX.

## Стек

- Next.js
- TypeScript
- Tailwind CSS
- Motion
- Lucide
- Zod

## Главный принцип

Сайт должен выглядеть как premium automotive atelier, а не как типичный шаблон детейлинга.

## Локальная разработка

Требуется Node.js 20.9 или новее. Для настройки использован Node.js 22.

```sh
npm ci
npm run dev
```

Сайт доступен на `http://localhost:3000`.

```sh
npm run build      # production-сборка и проверка TypeScript
npm start          # запуск production-сборки
npm run typecheck  # отдельная проверка типов и генерация типов маршрутов
npm run lint       # отдельная проверка ESLint
```

Версии зависимостей зафиксированы в `package.json` и `package-lock.json`.

## Структура приложения

```text
src/
├── app/                  # Next.js App Router, корневой layout и глобальные стили
├── components/
│   ├── layout/           # шапка, подвал, навигация
│   ├── sections/         # секции страниц
│   ├── ui/               # общие UI-компоненты
│   └── motion/           # компоненты анимации
└── content/              # типизированные данные из docs/03-content.md
public/images/            # локальные изображения
```

Настроены TypeScript strict, алиас `@/*` → `src/*` и Tailwind CSS через PostCSS.
Цвета бренда, ширина контента и шкала отступов определены в `src/styles/tokens.css`.
Общие компоненты находятся в `src/components/ui/`, их стили — в `src/styles/primitives.css`.
Правила использования: [docs/design-primitives.md](docs/design-primitives.md).
Компоненты по умолчанию серверные; `use client` добавляется только для интерактивности.

На главной реализованы шапка, Hero, показатели доверия, четыре услуги,
избранный проект, материал PPF, шесть шагов процесса, интерактивное сравнение,
три пакета, три отзыва, финальный CTA и общий подвал.
Общие компоненты этапа 10 используются в текущем интерфейсе.
Статичные секции серверные; сравнение использует нативный range input.
Его круглый маркер перетаскивается прямо на фотографии мышью или пальцем;
доступны также стрелки, Home и End на клавиатуре. Нижнего ползунка нет.
Стили главной: `src/styles/homepage.css`; содержание: `src/content/`.
Production-сборка и проверка TypeScript этапа 11 прошли.
Доступ к встроенному браузеру восстановлен после запуска локального сервера.
Проверены отсутствие overflow на 390/768/1024/1440px, Hero на desktop/mobile,
загрузка изображений сравнения и работа slider стрелками клавиатуры.
Ошибок в захваченной консоли нет. Полный визуальный проход всех секций предстоит.
Ссылки навигации и CTA используют маршруты из sitemap; страницы назначения
и форма заявки будут реализованы на следующих этапах. Их prefetch пока отключён.
Для запуска не требуются переменные окружения или внешние сервисы.

### Адрес сайта для SEO

Перед production-сборкой задайте `SITE_URL` в окружении хостинга или `.env.local`
по образцу `.env.example`: это публичный origin сайта, включая `https://`.
Canonical, Open Graph, Twitter Cards и `sitemap.xml` используют этот адрес;
без переменной локальная разработка использует `http://localhost:3000`.
При смене домена требуется новая сборка. Параметры заявки и выбранных зон PPF
не включаются в canonical.

Manrope подключён локально; лицензия находится в `src/assets/fonts/OFL.txt`.
Изображения созданы встроенным ImageGen для вымышленного проекта; описание и промпты
сохранены в `public/images/README.md`.

## Документы

- `docs/01-brief.md` — продукт и бренд
- `docs/02-sitemap.md` — структура сайта
- `docs/03-content.md` — тексты и контент
- `docs/04-visual-direction.md` — визуальное направление и референсы
- `docs/05-site-spec.md` — спецификация страниц и блоков
- `docs/06-acceptance-criteria.md` — критерии готовности
- `docs/development-stages.md` — порядок разработки
- `docs/homepage-implementation.md` — реализация и проверка этапа 11
- `.skills/visual-qa/SKILL.md` — визуальный QA workflow
- `AGENTS.md` — инструкции для Codex

## Базовая структура страниц

```text
/
/services
/services/ppf
/services/ceramic-coating
/services/paint-correction
/services/interior-detailing
/projects
/projects/[slug]
/pricing
/about
/contacts
```
