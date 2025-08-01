# JUT Ranchi Website

A modern, responsive website for Jharkhand University of Technology, Ranchi built with Next.js and Tailwind CSS. This website features a professional design similar to SRMIST's website with modern UI/UX practices and a well-organized component structure.

## Features

- **Modern Design**: Clean and professional design with a color scheme similar to SRMIST
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Navigation**: Dropdown menus and mobile-friendly navigation
- **Hero Section**: Eye-catching hero section with call-to-action buttons
- **Features Section**: Highlighting key university features and benefits
- **Academic Programs**: Showcasing different programs offered by the university
- **News & Events**: Latest news and upcoming events sections
- **Contact Information**: Complete contact details and social media links
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Component-Based Architecture**: Well-organized, reusable components

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **Inter Font**: Modern typography

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jut-ranchi-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
jut-ranchi-website/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage component
├── components/
│   ├── index.ts             # Component exports
│   ├── Header.tsx           # Header component with navigation
│   ├── Footer.tsx           # Footer component
│   ├── HeroSection.tsx      # Hero section component
│   ├── FeaturesSection.tsx  # Features section component
│   ├── ProgramsSection.tsx  # Academic programs section
│   └── NewsEventsSection.tsx # News and events section
├── types/
│   └── index.ts             # TypeScript type definitions
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── next.config.js           # Next.js configuration
└── tsconfig.json           # TypeScript configuration
```

## Component Architecture

The website is built using a modular component architecture:

### Core Components
- **Header**: Navigation, logo, and mobile menu
- **Footer**: Contact info, links, and social media
- **HeroSection**: Main banner with call-to-action
- **FeaturesSection**: University features and benefits
- **ProgramsSection**: Academic programs showcase
- **NewsEventsSection**: Latest news and upcoming events

### Benefits of Component Structure
- **Reusability**: Components can be reused across pages
- **Maintainability**: Easy to update individual sections
- **Scalability**: Easy to add new components or pages
- **Testing**: Components can be tested in isolation
- **Type Safety**: TypeScript interfaces for better development experience

## Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- Primary colors (blue shades)
- Secondary colors (gray shades)
- Accent colors (yellow for highlights)

### Content
To customize the content:
1. Edit the text content in individual component files
2. Update contact information, programs, and news sections
3. Modify the logo and branding elements

### Styling
- All styles are managed through Tailwind CSS classes
- Custom styles can be added in `app/globals.css`
- Component-specific styles are co-located with components

### Adding New Components
1. Create a new component file in the `components/` directory
2. Export it from `components/index.ts`
3. Import and use it in your pages

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any questions or support, please contact:
- Email: info@jutranchi.ac.in
- Phone: +91 651 123 4567

---

Built with ❤️ for JUT Ranchi 