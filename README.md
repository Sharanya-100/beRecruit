# 🎯 beRecruit - AI-Powered Interview Platform

<div align="center">

![beRecruit Logo](./public/logo.png)
<img width="1915" height="794" alt="image" src="https://github.com/user-attachments/assets/bceb4db8-5474-4448-a751-34a145a1d541" />
<img width="3692" height="2432" alt="localhost_3000_dashboard_create-interview" src="https://github.com/user-attachments/assets/3182bdae-e5bd-46ea-8dc1-f1fc80d19453" />
<img width="1918" height="759" alt="image" src="https://github.com/user-attachments/assets/4f86b88a-e8ab-42e6-af1c-40eb2f0d09a1" />
<img width="3692" height="3178" alt="localhost_3000_dashboard_create-interview (1)" src="https://github.com/user-attachments/assets/8e0869be-f16b-42d8-be43-efde9ddeef97" />





_AI-Driven Interview, Hassle-free Hiring_

[![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-green)](https://supabase.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-AI%20Integration-orange)](https://openai.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-38bdf8)](https://tailwindcss.com/)

</div>

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Overview

**beRecruit** is a modern, AI-powered interview platform that revolutionizes the hiring process. It combines the power of artificial intelligence with an intuitive user interface to create seamless interview experiences for both recruiters and candidates.

### Key Highlights

- 🤖 **AI-Generated Questions**: Dynamic interview questions powered by OpenAI
- 📊 **Real-time Dashboard**: Comprehensive interview management
- 🎨 **Smooth Animations**: Enhanced UX with anime.js
- 🔐 **Secure Authentication**: Google OAuth via Supabase
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS

## ✨ Features

### For Recruiters

- **Create Custom Interviews**: Design interviews for specific job positions
- **AI Question Generation**: Automatically generate relevant questions based on job descriptions
- **Interview Management**: Track and manage all interviews from a centralized dashboard
- **Duration Control**: Set custom interview durations (15, 30, 45, 60 minutes)
- **Multiple Interview Types**: Support for technical, behavioral, and mixed interviews

### For Candidates

- **User-Friendly Interface**: Clean and intuitive interview experience
- **Real-time Feedback**: Immediate response and guidance
- **Flexible Scheduling**: Join interviews at your convenience
- **Progress Tracking**: Visual progress indicators during interviews

### Technical Features

- **Responsive Design**: Optimized for all devices
- **Dark/Light Mode**: Theme switching with next-themes
- **Real-time Updates**: Live data synchronization
- **Smooth Animations**: Enhanced UX with anime.js
- **Component Library**: Reusable UI components with Radix UI

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 15.4.6 (App Router)
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS 4.0
- **Components**: Radix UI Primitives
- **Animations**: Anime.js
- **Icons**: Lucide React
- **Notifications**: Sonner

### Backend & Database

- **Backend**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth (Google OAuth)
- **Real-time**: Supabase Realtime

### AI & API

- **AI Provider**: OpenRouter (DeepSeek Chat)
- **HTTP Client**: Axios
- **API**: Next.js API Routes

### Development Tools

- **TypeScript**: Full type safety
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Supabase Account**
- **OpenRouter API Key**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Sharanya-100/beRecruit.git
   cd beRecruit
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

4. **Configure your environment variables** (see [Environment Variables](#environment-variables))

5. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
berecruit/
├── app/                          # Next.js App Router
│   ├── (main)/                   # Protected routes group
│   │   ├── dashboard/            # Dashboard pages
│   │   │   ├── page.jsx          # Main dashboard
│   │   │   ├── create-interview/ # Interview creation
│   │   │   └── _components/      # Dashboard components
│   │   ├── layout.js             # Main layout
│   │   ├── provider.js           # Dashboard providers
│   │   └── _components/          # Shared main components
│   ├── api/                      # API routes
│   │   └── ai-model/             # AI question generation
│   ├── auth/                     # Authentication pages
│   ├── interview/                # Interview pages
│   │   ├── [interview_id]/       # Dynamic interview routes
│   │   └── _components/          # Interview components
│   ├── globals.css               # Global styles
│   ├── layout.js                 # Root layout
│   ├── page.js                   # Home page
│   └── provider.jsx              # App-wide providers
├── components/                   # Reusable UI components
│   └── ui/                       # Shadcn/ui components
├── context/                      # React contexts
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions
├── public/                       # Static assets
├── services/                     # API services and constants
├── components.json               # Shadcn/ui configuration
├── jsconfig.json                 # JavaScript configuration
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration
└── README.md                     # Project documentation
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# OpenRouter API (for AI question generation)
OPENROUTER_API_KEY=your_openrouter_api_key

# Optional: Additional configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Setting up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from the project settings
3. Set up Google OAuth in Supabase Auth settings
4. Create the necessary database tables (Users, interviews, etc.)

### Setting up OpenRouter

1. Sign up at [openrouter.ai](https://openrouter.ai)
2. Get your API key from the dashboard
3. The app uses DeepSeek Chat model for cost-effective AI generation

## 💻 Usage

### Creating an Interview

1. **Sign in** with your Google account
2. **Navigate** to the Dashboard
3. **Click** "Create New Interview"
4. **Fill in** interview details:
   - Job Position
   - Job Description
   - Interview Duration
   - Interview Type
5. **Generate** AI questions or add custom ones
6. **Share** the interview link with candidates

### Taking an Interview

1. **Click** the interview link
2. **Enter** your full name
3. **Review** the interview guidelines
4. **Join** the interview
5. **Answer** questions as they appear
6. **Submit** when complete

### Dashboard Features

- **Recent Interviews**: View your latest interview sessions
- **Quick Actions**: Create new interviews or access settings
- **Statistics**: Track interview performance and metrics
- **User Management**: Manage your profile and preferences

## 🔌 API Routes

### `/api/ai-model`

**POST** - Generate AI interview questions

```javascript
// Request body
{
  "jobPosition": "Full Stack Developer",
  "jobDescription": "React, Node.js, PostgreSQL experience required",
  "interviewDuration": "30",
  "type": "technical"
}

// Response
{
  "content": "Generated interview questions...",
  "role": "assistant"
}
```

## 🎨 UI Components

The project uses a comprehensive set of UI components built with Radix UI:

- **Button**: Primary and secondary actions
- **Input**: Form inputs with validation
- **Select**: Dropdown selections
- **Progress**: Progress indicators
- **Dialog**: Modal dialogs
- **Tooltip**: Contextual help
- **Sidebar**: Navigation sidebar
- **Separator**: Visual separators
- **Sheet**: Slide-out panels

## 🚧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Code Style

- **ESLint**: Enforces code quality
- **Prettier**: Code formatting (recommended)
- **Tailwind**: Utility-first CSS

### Adding New Features

1. Create components in appropriate directories
2. Use TypeScript for type safety
3. Follow the established folder structure
4. Add proper error handling
5. Update documentation

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass
- Add meaningful commit messages

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Supabase** for the backend infrastructure
- **OpenRouter** for AI API access
- **Radix UI** for accessible components
- **Tailwind CSS** for utility-first styling
- **Anime.js** for smooth animations

## 📞 Support

If you have any questions or need help, please:

- 📧 **Email**: sharanya.developer@gmail.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/Sharanya-100/beRecruit/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/Sharanya-100/beRecruit/discussions)

---

<div align="center">

**Made with ❤️ by [Sharanya](https://github.com/Sharanya-100)**

⭐ Star this repository if you find it helpful!

</div>
