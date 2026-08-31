# Eman's Website

A modern, beautiful website built with React and Vite.

## Features

- 🎨 Modern UI with gradient backgrounds and smooth animations
- 📱 Fully responsive design
- ⚡ Fast development with Vite
- 🔄 Dynamic tab-based navigation
- ✨ Beautiful animations and transitions

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── public/          # Static assets
├── src/
│   ├── App.jsx      # Main application component
│   ├── App.css      # Application styles
│   ├── main.jsx     # Entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
├── vite.config.js   # Vite configuration
└── package.json     # Dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features

## Customization

The website includes multiple sections:
- **Home**: Hero with a cross-fading stills slideshow, tagline, and call-to-action buttons
- **Work**: "Selected Projects" grid — each card links to a project video
- **Services**: Sound design / post-production service list
- **About**: Bio and behind-the-scenes images
- **Contact**: Contact form and social links

You can easily customize the content by editing the components in `src/App.jsx`.

## License

This project is open source and available for personal use.

