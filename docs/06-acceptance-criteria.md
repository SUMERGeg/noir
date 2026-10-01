# 06 — Acceptance Criteria

The site is considered ready only when all critical criteria below are satisfied.

---

# Viewports

Verify at minimum:

- 390px
- 768px
- 1024px
- 1440px

---

# Layout

- No horizontal overflow.
- No clipped headings.
- No broken image crops.
- No overlapping interactive elements.
- Mobile navigation is usable.
- Section spacing remains consistent across breakpoints.

---

# Typography

- Hero headline remains readable on mobile.
- Body text is not smaller than reasonable mobile reading size.
- Technical labels remain legible.
- No accidental widows/orphans that visually break major headings where avoidable.
- Line lengths remain comfortable.

---

# Navigation

- All links work.
- Active page state is clear where appropriate.
- Mobile menu can be opened and closed.
- Keyboard navigation works.
- Escape closes overlays where applicable.

---

# Forms

- Required fields are validated.
- Invalid state is visible and understandable.
- Success state is clear.
- No console errors during submission.
- Keyboard-only completion is possible.

---

# Accessibility

Target:

- Lighthouse Accessibility >= 90

Check:

- semantic heading structure;
- alt text;
- focus states;
- sufficient contrast;
- buttons vs links used correctly;
- reduced motion;
- form labels.

---

# Performance

Target:

- Lighthouse Performance >= 90 on representative production build.

Check:

- optimized images;
- responsive image sizes;
- no unnecessary client components;
- no oversized video;
- no layout shift from media;
- lazy loading where appropriate.

---

# SEO

Target:

- Lighthouse SEO >= 90

Check:

- title;
- description;
- canonical;
- Open Graph;
- semantic headings;
- internal links;
- sitemap where appropriate;
- robots configuration.

---

# Best Practices

Target:

- Lighthouse Best Practices >= 90

Check:

- no browser console errors;
- secure external links where relevant;
- valid image dimensions;
- no deprecated APIs.

---

# Motion

- No animation should block content.
- No motion should make reading harder.
- Reduced motion preference is respected.
- Hover-only information must not be essential.

---

# Content

- No lorem ipsum.
- No placeholder CTA.
- No accidental English/Russian language mixing unless intentionally styled.
- Pricing matches `03-content.md`.
- Trust numbers match `03-content.md`.

---

# Visual QA

Review:

- hierarchy;
- spacing;
- crop quality;
- alignment;
- consistency;
- mobile composition;
- hover/focus states;
- template-like AI patterns.

Use `.skills/visual-qa/SKILL.md`.

---

# Release Gate

Before deployment:

1. Production build passes.
2. All internal links checked.
3. No console errors.
4. Mobile and desktop visual pass complete.
5. Lighthouse targets checked.
6. Forms tested.
7. Metadata checked.
8. Final project screenshots captured for portfolio.
