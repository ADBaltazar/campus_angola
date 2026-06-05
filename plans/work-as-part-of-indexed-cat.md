# Campus Angola — v1 Implementation Plan

## Context

Build the v1 of **Campus Angola**, the digital ecosystem for Angolan higher education: public portal (university/course discovery + applications), student area (dashboard, grades, schedule), and admin area (management + analytics). The project ships inside a single Figma Make app (React 18 + Tailwind v4 + Radix + react-router 7 + Motion + lucide).

The official design system lives in `src/imports/campus_angola_design_system.html` — Angolan/editorial aesthetic with primary red `#C0182A`, academic gold `#C49A2A`, Sora display + DM Sans body, 4px spacing scale, ease-out motion. The current `src/styles/theme.css` ships generic OKLCH tokens that must be replaced. `src/app/App.tsx` is empty.

The plan must ship a real, institutional-feeling product — no generic SaaS look, no AI-template aesthetic — and must reuse design-system tokens and component patterns exclusively.

---

## Phase 0 — Tokens & fonts

Files:
- `src/styles/fonts.css` — `@import` Sora (300–700) and DM Sans (300–600) at the top of the file.
- `src/styles/theme.css` — replace OKLCH placeholders with Tailwind v4 `@theme` tokens extracted from `src/imports/campus_angola_design_system.html`:
  - Colors: `--color-primary #C0182A`, `--color-primary-deep #8B0F1E`, `--color-ink #0E0E10`, `--color-gold #C49A2A`, `--color-success #1A7A4A`, `--color-warning #B07A10`, `--color-info #1A5AA0`, `--color-paper #FAFAF8`, gray-100..800.
  - Type: `--font-display: Sora`, `--font-sans: "DM Sans"`. Body 15/1.55, headings tight tracking `-0.01em`.
  - Spacing 4/8/12/16/24/32/48/64; radius sm4 / md8 / lg12 / xl20 / pill; shadows sm/md/lg.
  - Motion: `--ease-out: cubic-bezier(0.16,1,0.3,1)`, durations 140/240/380ms.

---

## Phase 1 — Folder structure

```
src/app/
  App.tsx                       # BrowserRouter + routes
  router/routes.tsx
  layouts/{PublicLayout,StudentLayout,AdminLayout}.tsx
  design-system/                # primitives (Radix + system styling)
  components/                   # composed UI
  features/
    public/{Landing,UniversitiesList,UniversityDetail,CoursesList,CourseDetail,Application}.tsx
    student/{Dashboard,Historico,Notas,Horario,Disciplinas,Documentos,Perfil}.tsx
    admin/{Dashboard,Alunos,Cursos,Candidaturas,Analytics}.tsx
  shared/
    mock/{universities,courses,students,grades,schedule,applications,provinces}.ts
    hooks/, utils/, types/
```

### Routes

- Public: `/`, `/universidades`, `/universidades/:slug`, `/cursos`, `/cursos/:slug`, `/candidatura`
- Student: `/aluno`, `/aluno/historico`, `/aluno/notas`, `/aluno/horario`, `/aluno/disciplinas`, `/aluno/documentos`, `/aluno/perfil`
- Admin: `/admin`, `/admin/alunos`, `/admin/cursos`, `/admin/candidaturas`, `/admin/analytics`

### Fidelity tiers (cut to ship)

- **Full:** Landing, UniversitiesList, UniversityDetail, Student Dashboard, Notas, Horario, Admin Dashboard.
- **Functional shells:** CoursesList, CourseDetail, Application (multi-step), Disciplinas, Historico, Admin Alunos, Candidaturas.
- **Light stubs:** Documentos, Perfil, Admin Cursos, Admin Analytics.

---

## Phase 2 — Design-system primitives (`src/app/design-system/`)

All wrap Radix where relevant, styled per spec — never the default Shadcn look:

`Button` (primary/secondary/ghost/gold/danger × sm/md/lg + loading), `Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `Badge` (red/gold/success/warning/info/gray pill), `Alert` (4px left border, 4 tones), `Card` + `CardHeader/Body/Footer`, `StatCard` (Sora 28 value + delta arrow), `Tabs` (red underline), `Progress` (gold fill on gray-200), `Avatar`, `Dialog`, `DropdownMenu`, `Tooltip`, `Toast` (sonner re-export), `Table`, `SectionHeading` (Sora + optional gold underline).

Motion: enter/hover transitions use `--ease-out` and 140/240ms durations via Motion.

---

## Phase 3 — Composed components (`src/app/components/`)

`PublicNav`, `Footer`, `HeroSearch`, `StatStrip`, `UniversityCard` (photo header + gold accent stripe + meta), `CourseRow`, `CourseCard`, `TestimonialCard`, `PromoCarousel` (react-slick), `StudentSidebar`, `StudentBottomNav`, `ScheduleItem` (with "agora" marker), `GradeRow`, `UpcomingEvents`, `AdminSidebar`, `KanbanColumn`.

---

## Phase 4 — Landing composition

In order: PublicNav → HeroSearch (institutional student photo + intelligent search) → StatStrip (universidades, cursos, alunos, candidaturas abertas) → Featured Universities (6 cards) → Popular Courses (8 cards + área filter chips) → Application CTA band (red bg, gold button) → Testimonials (3) → PromoCarousel (news/events) → Footer.

Editorial, breathable, photographic — mirrors reference screenshots, not generic startup hero.

---

## Phase 5 — Student dashboard

Per design-system dashboard pattern: greeting + semester badge → 4 StatCards (Média Geral, Disciplinas Ativas, Créditos, Frequência) → 2-col grid: Disciplinas em Curso (rows + progress bars) | Próximas Aulas + Próximos Eventos. Single-column collapse < 1024px with bottom nav.

---

## Phase 6 — Admin

Dashboard: 4 StatCards + recharts LineChart (matrículas/mês) + BarChart (alunos/faculdade) + recent applications list. Alunos: filterable Table with Avatar + status badges. Candidaturas: 3-column board (Pendente / Em Análise / Decidida) — visual only, no real DnD.

---

## Phase 7 — Mock data (Angolan-realistic)

Universities: Universidade Agostinho Neto, Universidade Católica de Angola, ISPTEC, Universidade Lueji A'Nkonde, Universidade Mandume Ya Ndemufayo, Universidade Katyavala Bwila. Provinces: Luanda, Benguela, Huambo, Huíla, Cabinda, Namibe, Cuanza Sul. Courses: Engenharia Informática, Medicina, Direito, Arquitetura, Gestão, Economia, Enfermagem, Engenharia Civil. Names: Kiala, Domingos, Nzinga, Mateus, Aissa. Grade scale 0–20.

Photos: Unsplash via the unsplash MCP tool (campus, students, architecture) — rendered through `ImageWithFallback`.

---

## Phase 8 — Responsive (mobile-first)

- Public: hamburger < 768px, hero type scales display → h1.
- Student: sidebar ≥ 1024px; bottom nav (Início, Notas, Horário, Disciplinas, Perfil) < 1024px.
- Tables collapse to stacked cards < 640px. Stat strips 4 → 2 → 1 cols.

---

## Cut line — NOT in v1

No auth/Supabase, payments, chat, real uploads, drag-drop, i18n switcher (PT only), dark mode, real search backend (client-side filter), notifications center, calendar export, PDF generation, professor portal, library, forum, scholarships flow.

---

## Critical files

- `src/styles/theme.css`, `src/styles/fonts.css`
- `src/app/App.tsx`, `src/app/router/routes.tsx`
- `src/app/design-system/*` (Button, Card, StatCard, Badge, Tabs, Alert, Input, Progress…)
- `src/app/layouts/{PublicLayout,StudentLayout,AdminLayout}.tsx`
- `src/app/features/public/Landing.tsx`, `features/student/Dashboard.tsx`, `features/admin/Dashboard.tsx`
- `src/app/shared/mock/*`
- Reference: `src/imports/campus_angola_design_system.html`

---

## Verification

1. Open the running dev preview — confirm Sora/DM Sans load, primary red and gold tokens render.
2. Walk routes: `/` → `/universidades` → `/universidades/:slug` → `/cursos` → `/candidatura` → `/aluno` → `/aluno/notas` → `/aluno/horario` → `/admin` → `/admin/alunos` → `/admin/candidaturas`.
3. Resize 1440 → 1024 → 768 → 375 to verify sidebar/bottom-nav switch and table → card collapse.
4. Compare landing and faculty cards against `src/imports/Captura_de_ecr__*.png` reference screenshots — institutional/editorial feel, not generic SaaS.
5. Spot-check primitives against the spec page in `campus_angola_design_system.html` (button states, badges, alert left border, tab underline).
