# Alex Lai - Modern Portfolio

A clean, modern portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

## ⚡ Quick Start

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Features

- Clean, minimalist design
- Fully responsive (mobile, tablet, desktop)
- Fast performance with Next.js SSR
- Type-safe with TypeScript
- Easy to customize

## � Project Structure

```
src/
├── app/
│   ├── page.tsx       # Main page
│   ├── layout.tsx     # Root layout
│   └── globals.css    # Global styles
└── components/
    ├── Navigation.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Experience.tsx
    ├── Projects.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

## 📝 How to Customize

Edit these components with your information:

- **Hero**: `src/components/Hero.tsx` - Name, title, tagline
- **About**: `src/components/About.tsx` - Bio, skills
- **Experience**: `src/components/Experience.tsx` - Work history
- **Projects**: `src/components/Projects.tsx` - Your projects
- **Contact**: `src/components/Contact.tsx` - Email, social links

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: '#0F172A',
  secondary: '#F97316',
}
```

## 🚀 Build & Deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com) or [Netlify](https://netlify.com)

## 📦 Commands

- `npm run dev` - Start dev server
- `npm run build` - Build for production  
- `npm start` - Run production server
- `npm run lint` - Check code quality

## 🛠️ Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

---

Built with ❤️
