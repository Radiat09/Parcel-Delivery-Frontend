# Parcel Delivery Frontend

A modern, responsive web application for managing parcel deliveries, built with React, TypeScript, Redux Toolkit, and RTK Query.

[https://img.shields.io/badge/Parcel-Delivery-blue](https://img.shields.io/badge/Parcel-Delivery-blue)[https://img.shields.io/badge/React-18.2.0-blue](https://img.shields.io/badge/React-18.2.0-blue) [https://img.shields.io/badge/TypeScript-5.0-blue](https://img.shields.io/badge/TypeScript-5.0-blue) [https://img.shields.io/badge/Redux_Toolkit-1.9.0-purple](https://img.shields.io/badge/Redux_Toolkit-1.9.0-purple) [https://img.shields.io/badge/RTK_Query-1.9.0-purple](https://img.shields.io/badge/RTK_Query-1.9.0-purple) [https://img.shields.io/badge/Tailwind_CSS-3.3.0-blue](https://img.shields.io/badge/Tailwind_CSS-3.3.0-blue)

## 🚀 Features

### 🔐 Authentication System

- JWT-based authentication with secure login/logout
- Role-based registration (Sender/Receiver)
- Persistent authentication state
- Protected routes based on user roles

### 📦 Parcel Management

- Create and manage parcel delivery requests
- Track parcels with unique tracking IDs
- Status updates with detailed history logs
- Cancel parcels (if not dispatched)

### 👥 Role-Based Dashboards

- **Sender Dashboard**: Create and track outgoing parcels
- **Receiver Dashboard**: View and confirm incoming deliveries
- **Admin Dashboard**: Manage users, parcels, and system analytics

### 📊 Data Visualization

- Overview cards with parcel statistics
- Charts showing delivery trends and status distribution
- Interactive data tables with pagination and filtering
- Visual status timeline for parcels

### 📱 Responsive Design

- Mobile-first approach with Tailwind CSS
- Consistent UI across all device sizes
- Accessible components with proper contrast

## 🛠️ Technology Stack

### Frontend

- **React 18** with TypeScript
- **Redux Toolkit** for state management
- **RTK Query** for API integration
- **React Router v6** for navigation
- **Tailwind CSS** for styling
- **React Hook Form** for form handling
- **React Toastify** for notifications
- **Recharts** for data visualization

### Backend API

- Node.js/Express REST API
- MongoDB with Mongoose ODM
- JWT authentication with bcrypt
- Role-based authorization

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Backend API server running

### Setup Instructions

1.  Clone the repository:

```bash 
git clone
cd parcel-delivery-frontend
```

1.  Install dependencies:
```bash
 npm install  # or  yarn install
```

1.  Configure environment variables:

```bash
cp .env.example .env
```

Edit the .env file with your configuration:

```bash
REACT_APP_API_BASE_URL=http://localhost:5000/api
REACT_APP_APP_NAME=Parcel Delivery System
REACT_APP_DEFAULT_TIMEOUT=5000
```

1.  Start the development server:

```bash
npm start  # or  yarn start
```

1.  Open [http://localhost:3000](http://localhost:3000/) to view the application.

## 🏗️ Project Structure
src/
├── components/          # Reusable UI components
│   ├── common/         # Common components (buttons, modals, etc.)
│   ├── layout/         # Layout components (header, sidebar, etc.)
│   ├── auth/           # Authentication components
│   ├── parcels/        # Parcel-related components
│   └── charts/         # Data visualization components
├── features/           # Redux Toolkit feature slices
│   ├── auth/           # Authentication slice
│   ├── parcels/        # Parcel management slice
│   ├── users/          # User management slice
│   └── dashboard/      # Dashboard slice
├── pages/              # Page components
│   ├── public/         # Public pages (home, about, contact)
│   ├── auth/           # Authentication pages
│   └── dashboard/      # Role-specific dashboards
├── services/           # API service definitions
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── constants/          # Application constants
└── assets/             # Static assets (images, icons)

## 🚀 Usage

### As a Sender

1.  Register/Login with Sender role
2.  Create parcel delivery requests with recipient details
3.  Track your parcels and view status history
4.  Cancel parcels if not yet dispatched

### As a Receiver

1.  Register/Login with Receiver role
2.  View incoming parcels awaiting delivery
3.  Confirm delivery of received parcels
4.  View delivery history

### As an Admin

1.  Login with admin credentials
2.  Manage users (view, block/unblock)
3.  Manage parcels (update status, view all records)
4.  View system analytics and reports

### Public Tracking

- Search parcels by tracking ID without authentication
- View parcel status and delivery progress

## 📋 Available Scripts

- npm start - Runs the app in development mode
- npm test - Launches the test runner
- npm run build - Builds the app for production
- npm run lint - Runs ESLint for code quality
- npm run type-check - Runs TypeScript compiler check

## 🚀 Deployment

### Build for Production

bash

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML` npm run build `

This creates a build folder with optimized production files.

### Deploy to Vercel

1.  Install Vercel CLI: npm i -g vercel
2.  Run vercel in the project directory
3.  Follow the prompts to deploy

### Deploy to Netlify

1.  Build the project: npm run build
2.  Drag and drop the build folder to Netlify
3.  Or connect your repository for continuous deployment

### Environment Variables for Production

Ensure these environment variables are set in your deployment platform:

- REACT_APP_API_BASE_URL - Your backend API URL
- REACT_APP_APP_NAME - Application name
- REACT_APP_DEFAULT_TIMEOUT - API timeout setting

## 🤝 Contributing

1.  Fork the repository
2.  Create a feature branch: git checkout -b feature-name
3.  Commit your changes: git commit -m 'Add feature'
4.  Push to the branch: git push origin feature-name
5.  Submit a pull request

### Development Guidelines

- Follow TypeScript best practices
- Use Redux Toolkit and RTK Query for state management
- Ensure responsive design with Tailwind CSS
- Write meaningful commit messages
- Add appropriate documentation for new features

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](https://license/) file for details.

## 🆘 Support

For support, please open an issue in the GitHub repository or contact the development team.

## 🙏 Acknowledgments

- Icons from [LucidReact](https://lucidreact.com/)
- UI inspiration from modern dashboard designs shadcn
- Backend team for API development
