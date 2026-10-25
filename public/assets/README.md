# Logo / image assets

All dummy placeholder logos live here. To use your own logos, just **replace the
file** with the same name (keep the filename), or change the `src` path in the
component listed below. SVG, PNG, JPG, or WEBP all work.

| File                | Used in            | Component / position                     |
| ------------------- | ------------------ | ---------------------------------------- |
| `header-right.svg`  | Header             | right side (RTL start)                   |
| `header-left.svg`   | Header             | left side                                |
| `card-logo-1.svg`   | Verification card  | top strip, right side (first logo)       |
| `card-logo-2.svg`   | Verification card  | top strip, right side (second logo)      |
| `footer-logo-1.svg` | Footer             | left zone, nearest the support button    |
| `footer-logo-2.svg` | Footer             | left zone                                |
| `footer-logo-3.svg` | Footer             | left zone                                |
| `footer-logo-4.svg` | Footer             | left zone, furthest from support button  |

Components that reference them:
- `components/Header.tsx`
- `components/InfoCard.tsx`
- `components/Footer.tsx`

Tip: if your logo has a very different width, the layout will adapt — images are
sized by height (`height` in `app/globals.css`), width scales automatically.
