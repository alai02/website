# Alex Lai Portfolio

A modern portfolio website built with Next.js and TypeScript, showcasing professional experience and projects.

## Overview

This is a personal portfolio website for Alex Lai, a Lead Software Engineer. The site features a responsive design with detailed documentation of professional work experiences, particularly focusing on co-op work terms and technical projects.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tools**: PostCSS, Autoprefixer
- **Linting**: ESLint

## Features

- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Detailed Work Experience**: Comprehensive case studies of co-op and professional experiences
- **Component-Based Architecture**: Modular, reusable React components
- **Type Safety**: Full TypeScript support throughout the project
- **Static Pages**: Optimized co-op experience pages with detailed content

## Project Structure

```
src/
├── app/                           # Next.js app directory
│   ├── page.tsx                  # Main landing page
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   ├── error.tsx                 # Error boundary
│   ├── not-found.tsx             # 404 page
│   └── coop/                     # Co-op experience pages
│       ├── cooperators/
│       ├── ibm/
│       ├── scotia/
│       ├── scotia2/
│       └── veden/
├── components/                    # React components
│   ├── Navigation.tsx            # Navigation bar
│   ├── Hero.tsx                  # Hero section
│   ├── About.tsx                 # About section
│   ├── Experience.tsx            # Experience section
│   ├── Projects.tsx              # Projects section
│   ├── Contact.tsx               # Contact section
│   ├── Footer.tsx                # Footer
│   └── CoopPage.tsx              # Co-op page template
├── data/                         # Data files
│   └── coop-experiences.ts       # Co-op experience data
└── public/                       # Static assets
legacy/                           # Legacy HTML pages (reference)
```

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Building

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Check for code quality issues:

```bash
npm run lint
```

## Co-op Experiences

The portfolio includes detailed documentation of co-op work terms:

- **The Cooperators** (Sep 2017 - Dec 2017): Junior Software Developer - Legacy system upgrade project involving IBM Master Data Management
- **IBM**: Experience with enterprise-scale systems and integrations
- **Scotia**: Banking and financial services experience
- **v-Eden**: Additional work experience documentation
- **Scotia2**: Supplementary financial services work

Each experience includes sections covering introduction, company background, job responsibilities, goals & learning outcomes, conclusions, and acknowledgments.

## Pages

### Main Routes

- `/` - Landing page with hero, about, experience, and projects sections
- `/coop/cooperators` - The Cooperators co-op experience
- `/coop/ibm` - IBM co-op experience
- `/coop/scotia` - Scotia co-op experience
- `/coop/scotia2` - Scotia (part 2) co-op experience
- `/coop/veden` - v-Eden co-op experience

### Navigation

The site includes a responsive navigation component providing access to all main sections and experiences.

## Configuration

### Tailwind CSS

Tailwind configuration is in `tailwind.config.ts`. The site uses a custom color scheme with accent colors defined per co-op experience.

### TypeScript

TypeScript configuration in `tsconfig.json` includes strict type checking and path aliases for cleaner imports.

## Legacy Content

The `legacy/` directory contains the original HTML pages from a previous version of the portfolio. These are kept for reference but are not part of the current Next.js application.

## Development Notes

- The project uses component-based React with functional components
- CSS modules and Tailwind CSS are used for styling
- Co-op experience content is structured as TypeScript data objects for easy maintenance
- The site is fully responsive and optimized for mobile, tablet, and desktop viewing

## License

This project is private and personal.
