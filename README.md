# The Latin Action - Dance Academy Website

<img alt="The Latin Action Logo" src="https://res.cloudinary.com/dgvvnopu7/image/upload/v1755345770/logo_the_latin_action_salsa_y_bachata_elche_oolbov.png">

<p>This website showcases The Latin Action dance academy, featuring classes in Salsa, Bachata, and Lady Style in Elche, Spain. Built with modern web technologies, the site offers visitors information about classes, events, instructors, and more.</p>

## 📋 Features
- Class Information: Details about Salsa, Bachata, and Lady Style classes
- Event Calendar: Upcoming workshops, social dances, and special events
- Photo Gallery: Visual showcase of past classes and events
- Location Details: Multiple class locations throughout the Elche region
- Contact Form: Easy way for visitors to get in touch
- Responsive Design: Optimized for both desktop and mobile devices

## 🚀 Project Structure
```
/
├── public/
│ ├── favicon.svg
│ └── ...static assets
├── src/
│ ├── components/
│ │ ├── HeroSection.astro
│ │ ├── Knowledge.astro
│ │ ├── Partners.astro
│ │ ├── Schedule.astro
│ │ └── Benefits.astro
│ │ └── ... other components
│ ├── layouts/
│ │ ├── Layout.astro
│ ├── pages/
│ │ ├── index.astro
│ │ ├── bachata-y-salsa-en-pareja-elche/
│ │ ├── lady-style-elche/
│ │ ├── contacto/
│ │ ├── galeria/
│ │ └── eventos/
│ └── data/
│ │ └── galleryImages.js
└── package.json
```
## 💻 Tech Stack
- Astro: Core framework for building the website
- Tailwind CSS: Utility-first CSS framework for styling
- Cloudinary: Image and video management
- Formspree: Form handling for the contact page

## 🎨 Design System
The website uses a custom design system with:

- Color schemes: Specific gradients for each dance style section
- Typography: Bebas Neue for headings, Inter for body text
- Components: Consistent design language across all pages

## 🧞 Commands
All commands are run from the root of the project, from a terminal:

| Command            | Action                                      |
|--------------------|---------------------------------------------|
| npm install        | Installs dependencies                       |
| npm run dev       | Starts local dev server at localhost:4321   |
| npm run build     | Build your production site to ./dist/      |
| npm run preview   | Preview your build locally, before deploying|
| npm run astro ... | Run CLI commands like astro add, astro check|
| npm run astro -- --help | Get help using the Astro CLI         |

## 📝 License
Copyright © 2025 The Latin Action. All rights reserved.