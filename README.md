# Payal Goel - AI & Data Science Developer Portfolio

> A modern, responsive portfolio website showcasing skills, projects, and achievements as an AI & Data Science enthusiast.

**🌐 [Visit Live Portfolio](https://Payalgoel-coder.github.io/payal-portfolio/)**

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Project Sections](#project-sections)
- [Customization](#customization)
- [Performance](#performance)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 👋 About

This is a **modern, fully-responsive portfolio website** for **Payal Goel**, a B.Tech CSE (AI & Data Science) student at SISTec Bhopal. The portfolio showcases:

- 💻 **Technical Skills** - Python, Data Science, AI/ML, Problem-solving
- 🚀 **Projects** - Real-world solutions built with Python, data analysis, and ML
- 🏆 **Achievements** - Hackathon participation, competitions, and academic excellence
- 🎓 **Education** - B.Tech CSE (AI & DS) at SISTec Bhopal with 8.20 CGPA
- 📍 **Location** - Bhopal, M.P., India
- 🛠️ **Experience** - 3+ years of coding experience

---

## ✨ Features

### 🎨 Design & UX

- **Beautiful Design System** - Mint green + cream color palette with modern aesthetics
- **Dark Mode Support** - Complete dark theme with CSS variables
- **Responsive Layout** - Perfect on desktop, tablet, and mobile devices
- **Smooth Animations** - Glass morphism, gradient effects, and shimmer animations
- **Professional Typography** - Google Fonts (Syne, DM Sans, JetBrains Mono)

### ⚡ Performance

- **Ultra-Fast Loading** - Optimized Vite build, ~50-100KB gzipped
- **Client-Side Routing** - Instant navigation without page reloads
- **Tree-Shaken CSS** - Only used Tailwind utilities included
- **Code Splitting** - Lazy-loaded components for better performance
- **SEO Optimized** - Meta tags, Open Graph, semantic HTML

### 🚀 Development

- **Modern Stack** - React 19, Vite 7, TanStack Router
- **Type-Safe** - Full TypeScript support
- **Hot Module Reloading** - Instant updates during development
- **ESLint & Prettier** - Code quality and formatting
- **GitHub Pages Ready** - Automatic deployment with gh-pages

### 📱 Responsive Design

- **Mobile First** - Designed for all screen sizes
- **Touch Optimized** - Works perfectly on mobile devices
- **Fluid Typography** - Text scales beautifully
- **Flexible Layouts** - Adapts to any viewport

---

## 🛠️ Tech Stack

### Frontend Framework

- **React** `19.2.0` - UI library
- **Vite** `7.3.1` - Build tool & dev server
- **TanStack Router** `1.168.25` - Client-side routing
- **TypeScript** `5.8.3` - Type safety

### Styling

- **Tailwind CSS** `4.2.1` - Utility-first CSS framework
- **@tailwindcss/vite** `4.2.1` - Vite plugin for Tailwind v4
- **Radix UI** - Unstyled, accessible components
- **CSS Variables** - Custom oklch color system

### Form Handling

- **React Hook Form** `7.71.2` - Efficient form state
- **Zod** `3.24.2` - Schema validation
- **@hookform/resolvers** `5.2.2` - Form validation integration

### UI Components & Effects

- **Embla Carousel** `8.6.0` - Image carousel
- **Recharts** `2.15.4` - Data visualization
- **Framer Motion** `12.38.0` - Animations
- **Lucide React** `0.575.0` - Icons
- **Sonner** `2.0.7` - Toast notifications
- **Vaul** `1.1.2` - Drawer component

### Development Tools

- **ESLint** `9.32.0` - Code linting
- **Prettier** `3.7.3` - Code formatting
- **TypeScript ESLint** `8.56.1` - TS linting
- **Vite TSConfig Paths** `6.0.2` - Path aliases

### Deployment

- **GitHub Pages** - Static hosting
- **gh-pages** `5.0.0` - Deployment script

---

## 📁 Project Structure

```
payal-portfolio/
├── src/
│   ├── main.tsx                 # React entry point
│   ├── router.tsx               # TanStack Router configuration
│   ├── styles.css               # Global styles + Tailwind directives
│   ├── routes/
│   │   ├── __root.tsx          # Root layout with QueryClientProvider
│   │   └── index.tsx           # Home page with all sections
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar with theme toggle
│   │   ├── Hero.tsx            # Hero section with intro
│   │   ├── About.tsx           # About me section
│   │   ├── Skills.tsx          # Technical skills showcase
│   │   ├── Projects.tsx        # Featured projects
│   │   ├── Achievements.tsx    # Hackathons & competitions
│   │   ├── Education.tsx       # Education background
│   │   ├── Activities.tsx      # Co-curricular activities
│   │   ├── Contact.tsx         # Contact form
│   │   ├── Footer.tsx          # Footer with links
│   │   ├── SectionHeading.tsx  # Reusable section heading
│   │   ├── ThemeToggle.tsx     # Dark mode toggle
│   │   └── ui/                 # Radix UI components
│   ├── hooks/                  # Custom React hooks
│   └── lib/                    # Utility functions
├── index.html                  # HTML entry point with SPA redirect
├── 404.html                    # GitHub Pages SPA redirect handler
├── vite.config.ts              # Vite configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
├── eslint.config.js            # ESLint configuration
├── package.json                # Project dependencies
├── public/                     # Static assets
└── dist/                       # Production build (generated)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 16+ ([Download](https://nodejs.org/))
- **npm** 8+ (comes with Node.js)
- **Git** (for version control)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Payalgoel-coder/payal-portfolio.git
   cd payal-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to: `http://localhost:5173/payal-portfolio/`

---

## 💻 Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Build in development mode (unminified)
npm run build:dev

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint

# Format code with Prettier
npm run format

# Deploy to GitHub Pages
npm run deploy
```

### Development Workflow

1. **Start dev server**: `npm run dev`
2. **Edit components** in `src/`
3. **Save files** - hot reload applies changes instantly
4. **Check for errors**: Open browser console (F12)
5. **Test across devices**: Use browser DevTools

### Code Quality

```bash
# Check for linting errors
npm run lint

# Fix linting errors
npm run lint --fix

# Format all code
npm run format
```

---

## 🏗️ Building for Production

### Build Steps

```bash
npm run build
```

This will:

1. Compile React & TypeScript
2. Process Tailwind CSS
3. Optimize and minify code
4. Create bundle in `dist/` folder
5. Generate sourcemaps

### Build Output

```
dist/
├── index.html              # Optimized HTML with SPA redirect
├── 404.html               # GitHub Pages error handler
└── assets/
    ├── index-[hash].js    # Bundled JavaScript (~80-100KB)
    └── index-[hash].css   # Compiled CSS (~30-40KB)
```

### Build Optimization

- ✅ Tree-shaking removes unused code
- ✅ CSS purging keeps only used classes
- ✅ Image optimization for web
- ✅ Code splitting for faster loading
- ✅ Minification of all assets

---

## 🚀 Deployment

### Automatic Deployment to GitHub Pages

```bash
npm run deploy
```

This command:

1. Runs `npm run build` (builds the project)
2. Deploys `dist/` to `gh-pages` branch
3. Updates your live site in 1-2 minutes

### Manual Deployment

If you prefer manual deployment:

```bash
# 1. Build the project
npm run build

# 2. Deploy using gh-pages
npx gh-pages -d dist
```

### Live Site

**URL**: [https://Payalgoel-coder.github.io/payal-portfolio/](https://Payalgoel-coder.github.io/payal-portfolio/)

### GitHub Pages Configuration

The following files handle GitHub Pages deployment:

- **vite.config.ts** - `base: "/payal-portfolio/"` sets the base URL
- **index.html** - SPA redirect script for client-side routing
- **404.html** - Captures non-existent routes and redirects to app
- **package.json** - `homepage` and `deploy` script configured

---

## 📄 Project Sections

### 1. **Navigation Bar**

- Logo/name
- Navigation links
- Theme toggle (dark/light mode)
- Responsive mobile menu

### 2. **Hero Section**

- Welcome message
- Brief introduction
- Call-to-action buttons
- Background effects

### 3. **About Me**

- Personal introduction
- Key information:
  - CGPA: 8.20
  - Location: Bhopal, M.P.
  - Coding Experience: 3+ years
  - Specialization: AI & Data Science

### 4. **Skills**

- Technical skills categorized:
  - Languages (Python, JavaScript, TypeScript, SQL)
  - Data Science (Pandas, NumPy, Scikit-learn)
  - Web Development (React, Vite, Tailwind)
  - Tools (Git, GitHub, VS Code, Jupyter)

### 5. **Projects**

- Showcase of personal projects
- Each project includes:
  - Title and description
  - Technologies used
  - Links to code/demo

### 6. **Achievements**

- Hackathon participation
- Competitions & contests
- Recognition and awards
- Academic achievements

### 7. **Education**

- Current education details
- Degree: B.Tech CSE (AI & Data Science)
- Institution: SISTec Bhopal
- Current CGPA: 8.20

### 8. **Activities**

- Co-curricular activities
- Workshops attended
- Certifications
- Community involvement

### 9. **Contact**

- Contact form
- Email address
- Social media links
- Quick inquiry form

### 10. **Footer**

- Copyright information
- Quick links
- Social profiles
- Additional resources

---

## 🎨 Customization

### Colors & Theme

Edit `src/styles.css` to customize colors:

```css
/* Light mode colors */
:root {
  --background: oklch(0.985 0.012 165); /* Cream */
  --foreground: oklch(0.18 0.04 230); /* Dark blue */
  --primary: oklch(0.62 0.16 168); /* Mint green */
  /* ... more colors */
}

/* Dark mode colors */
.dark {
  --background: oklch(0.21 0.04 245); /* Dark navy */
  --foreground: oklch(0.96 0.015 165); /* Light mint */
  /* ... more colors */
}
```

### Font Families

Edit `tailwind.config.ts`:

```typescript
fontFamily: {
  display: ["Syne", "sans-serif"],           // Headings
  sans: ["DM Sans", "sans-serif"],           // Body text
  mono: ["JetBrains Mono", "monospace"],     // Code
}
```

### Content Updates

Edit component files in `src/components/` to update:

- About information
- Projects list
- Skills
- Education details
- Contact information

---

## ⚡ Performance

### Optimization Metrics

- **Bundle Size**: ~100-150 KB (gzipped)
- **Load Time**: < 1 second
- **Time to Interactive**: < 2 seconds
- **Performance Score**: 90+

### Performance Features

- ✅ Code splitting by route
- ✅ CSS tree-shaking
- ✅ Image optimization
- ✅ Lazy component loading
- ✅ Efficient state management
- ✅ No render-blocking resources

### Monitor Performance

```bash
# Build and check bundle size
npm run build

# Preview and profile in DevTools
npm run preview
# Open DevTools (F12) → Performance → Record
```

---

## 🌐 Browser Support

| Browser       | Support | Version           |
| ------------- | ------- | ----------------- |
| Chrome        | ✅      | Latest 2 versions |
| Firefox       | ✅      | Latest 2 versions |
| Safari        | ✅      | Latest 2 versions |
| Edge          | ✅      | Latest 2 versions |
| Mobile Safari | ✅      | iOS 12+           |
| Chrome Mobile | ✅      | Latest 2 versions |

---

## 🔄 Environment Setup

### Required Environment Variables

Currently, no environment variables are required. The app works out of the box!

### Optional: Custom Domain

To use a custom domain on GitHub Pages:

1. Add `CNAME` file to `public/` with your domain
2. Configure DNS settings at your domain provider
3. Enable GitHub Pages custom domain in repo settings

---

## 📦 Dependencies

### Production Dependencies

- React & React DOM - UI framework
- TanStack Router - Client-side routing
- TanStack React Query - Data fetching
- Tailwind CSS - Styling framework
- Radix UI - Component library

### Development Dependencies

- Vite - Build tool
- TypeScript - Type checking
- ESLint - Code linting
- Prettier - Code formatting
- @tailwindcss/vite - Tailwind plugin

See `package.json` for complete list and versions.

---

## 🚨 Troubleshooting

### Issue: Styles not loading

**Solution:**

1. Clear browser cache (Ctrl+Shift+Delete)
2. Restart dev server (`npm run dev`)
3. Check that `tailwind.config.ts` exists

### Issue: Dev server crashes

**Solution:**

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Issue: Routes not working

**Solution:**

1. Verify `src/router.tsx` has `basepath: "/payal-portfolio/"`
2. Check `vite.config.ts` has `base: "/payal-portfolio/"`
3. Ensure `404.html` exists with redirect script

### Issue: Deployment fails

**Solution:**

```bash
# Ensure build succeeds
npm run build

# Check dist folder exists
ls dist/

# Deploy manually
npm run deploy
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow ESLint rules: `npm run lint`
- Format code with Prettier: `npm run format`
- Use TypeScript for type safety
- Component names should be PascalCase
- Use functional components with hooks

---

## 📝 License

This project is open source and available under the MIT License.

**© 2026 Payal Goel. All rights reserved.**

---

## 📞 Contact

### Payal Goel

- **GitHub**: [Payalgoel-coder](https://github.com/Payalgoel-coder)
- **Portfolio**: [https://Payalgoel-coder.github.io/payal-portfolio/](https://Payalgoel-coder.github.io/payal-portfolio/)
- **Location**: Bhopal, M.P., India
- **College**: SISTec Bhopal

---

## 🎓 About the Developer

**Payal Goel** is a B.Tech CSE (AI & Data Science) student at SISTec Bhopal with:

- 🎓 **Education**: B.Tech CSE (AI & Data Science)
- 🏫 **Institution**: SISTec Bhopal
- 📊 **CGPA**: 8.20
- 💻 **Experience**: 3+ years of coding
- 🎯 **Focus**: Python, Data Science, AI/ML
- 🏆 **Achievements**: Hackathon participant, problem solver
- 🌍 **Location**: Bhopal, M.P., India

### Interests

- Artificial Intelligence & Machine Learning
- Data Science & Analytics
- Web Development
- Problem Solving
- Open Source Contribution

---

## 📚 Resources

### Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [TanStack Router](https://tanstack.com/router)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Useful Tools

- [VS Code](https://code.visualstudio.com/) - Code editor
- [GitHub](https://github.com) - Version control
- [GitHub Pages](https://pages.github.com/) - Static hosting

---

## 🎉 Acknowledgments

- **React Team** - For the amazing React library
- **Vite Community** - For the blazing fast build tool
- **Tailwind Labs** - For the utility-first CSS framework
- **Radix UI** - For accessible UI components
- **TanStack** - For excellent routing and query tools

---

## ⭐ Star & Follow

If you find this portfolio useful, please:

- ⭐ **Star** this repository
- 👁️ **Follow** on GitHub
- 🔄 **Share** with others
- 💬 **Provide feedback**

---

**Happy coding! 🚀**

Built with ❤️ by Payal Goel
