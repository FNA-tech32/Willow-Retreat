# 🌲 Willow Retreat - Luxury Hotel & Resort Web Application

[![React](https://img.shields.io/badge/React-17.0.2-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-9.6.1-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Redux](https://img.shields.io/badge/Redux-4.1.2-764ABC?logo=redux&logoColor=white)](https://redux.js.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.1.3-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Material_UI](https://img.shields.io/badge/Material--UI-5.2.5-0081CB?logo=mui&logoColor=white)](https://mui.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Welcome to **Willow Retreat**, a full-featured, modern web application designed for luxury hospitality, room reservations, and guest management. Nestled in a picturesque setting, Willow Retreat combines serenity, elegant suites, wellness retreats, and world-class service. This platform enables guests to discover room options, check real-time availability, make online reservations, manage their bookings, and reach out to our concierge desk with ease.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Room Inventory & Specifications](#-room-inventory--specifications)
- [Official Contact & Alternative Details](#-official-contact--alternative-details)
- [Technology Stack](#-technology-stack)
- [Project Architecture & Directory Structure](#-project-architecture--directory-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Firebase Configuration](#firebase-configuration)
  - [Running the Application](#running-the-application)
- [Available Scripts](#-available-scripts)
- [Application Flow & Routes](#-application-flow--routes)
- [Contributing & License](#-contributing--license)

---

## 🌟 Overview

The **Willow Retreat** web application provides an intuitive and seamless guest experience from room browsing to booking confirmation. Built with React and powered by Firebase, the platform delivers fast performance, reactive state updates with Redux, secure customer authentication, and a responsive design across desktop, tablet, and mobile devices.

---

## ✨ Key Features

- **🌲 Brand-Centric Experience**: Elegant branding showcasing Willow Retreat's serene resort atmosphere with high-resolution imagery and video backgrounds.
- **🛋️ Dynamic Room Catalog**: Browse handcrafted suites including Single, Double, Family, and Presidential rooms with detailed amenities, square footage, guest capacities, and pricing.
- **🔍 Advanced Room Filter & Search**: Filter accommodations in real time by room category (Single, Double, Family, Presidential) and price bracket.
- **📅 Interactive Booking Engine**:
  - Check-in and Check-out date selection with `react-datepicker`.
  - International telephone input with `react-phone-number-input`.
  - Guest identity verification (CNIC / National ID) and contact capture.
  - Automated dynamic total cost calculation based on duration of stay.
- **🔐 Secure Authentication**:
  - Email & Password registration and login via Firebase Auth.
  - One-click Google OAuth authentication.
  - Facebook OAuth login integration.
  - Protected routes restricting booking completion to authenticated guests.
- **📋 "My Bookings" Customer Dashboard**:
  - Live synchronization with Firebase Realtime Database.
  - Real-time reservation status indicators (`Pending`, `Accepted`, `Rejected`).
  - Ability to cancel or manage active reservations.
- **📞 Comprehensive Contact & Concierge Support**:
  - Primary and alternative contact details (phone, email, 24/7 front desk).
  - Interactive message dispatch form with submission feedback.
- **📱 Fully Responsive Design**: Optimized layouts utilizing Bootstrap 5, Material-UI, and Styled-Components for seamless rendering on any screen size.

---

## 🛏️ Room Inventory & Specifications

| Room Type | Guest Capacity | Size | Base Price | Breakfast | Pets Policy | Key Highlights |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Single Room** | 1 Person | 250 sq.ft | Rs 1,200 / night | Included | Allowed | Garden view, plush linens, high-speed Wi-Fi |
| **Double Room** | 2 Persons | 500 sq.ft | Rs 2,400 / night | Included | Allowed | King-size bed, balcony, climate control |
| **Family Room** | 6 Persons | 750 sq.ft | Rs 3,500 / night | Not Included | Not Allowed | Multiple bedrooms, living lounge, kitchenette |
| **Presidential Suite** | 4 Persons | 1,000 sq.ft | Rs 4,300 / night | Included | Not Allowed | Panoramic mountain view, jacuzzi, butler service |

---

## 📞 Official Contact & Alternative Details

Willow Retreat provides multiple communication channels to ensure guests and event organizers can connect with our concierge and reservations teams at any time.

| Contact Channel | Primary Details | Alternative Details | Notes |
| :--- | :--- | :--- | :--- |
| **Physical Address** | Willow Retreat Resort & Spa<br/>100 Willow Valley Way, Suite 200<br/>Aspen, Colorado, 81611, USA | Willow Retreat Guest Reception<br/>Mountain View Pavilion, Gate 2<br/>Aspen, Colorado, 81611, USA | On-site valet and guest check-in desk available 24/7 |
| **Telephone** | **+1 (800) 555-0199** *(Toll-Free)* | **+1 (970) 555-0142** *(Direct Desk / Reception)* | 24/7 support for bookings, inquiries & emergencies |
| **Email Address** | **info@willowretreat.com** *(General Inquiries)* | **reservations@willowretreat.com** *(Bookings & VIP Support)* | Guaranteed response within 2 hours |
| **Service Hours** | **Front Desk:** 24 Hours / 7 Days a Week | **Concierge Office:** Daily, 7:00 AM – 11:00 PM EST | Room service and urgent assistance available around the clock |

---

## 💻 Technology Stack

### **Frontend**
- **Library**: [React 17.0.2](https://reactjs.org/)
- **Routing**: [React Router DOM v6.2.1](https://reactrouter.com/)
- **State Management**: [Redux 4.1.2](https://redux.js.org/) & [React-Redux 7.2.6](https://react-redux.js.org/)
- **UI Frameworks & Styling**:
  - [Bootstrap 5.1.3](https://getbootstrap.com/) & [React-Bootstrap 2.1.0](https://react-bootstrap.github.io/)
  - [Material-UI (MUI v5.2.5)](https://mui.com/)
  - [Styled-Components 5.3.3](https://styled-components.com/)
  - Emotion (`@emotion/react`, `@emotion/styled`)
- **Icons & Visuals**: [React Icons 4.3.1](https://react-icons.github.io/react-icons/), FontAwesome Kit

### **Backend & Cloud Infrastructure**
- **Authentication**: [Firebase Authentication v9](https://firebase.google.com/docs/auth) (Email/Password, Google OAuth, Facebook Auth)
- **Database**: [Firebase Realtime Database v9](https://firebase.google.com/docs/database) (Real-time synchronization for guest bookings and room data)

### **Forms & Date Utilities**
- **Date Picking**: [React Datepicker 4.6.0](https://reactdatepicker.com/)
- **Phone Formatting**: [React Phone Number Input 3.1.44](https://gitlab.com/catamphetamine/react-phone-number-input)
- **Date Manipulation**: [Moment.js 2.29.1](https://momentjs.com/)
- **Form Handling**: [React Hook Form 7.22.5](https://react-hook-form.com/)
- **Identifier Generation**: [UUID 8.3.2](https://github.com/uuidjs/uuid)

---

## 📁 Project Architecture & Directory Structure

```text
Willow-Retreat/
├── public/
│   ├── favicon.ico              # Willow Retreat site favicon
│   ├── index.html               # Main HTML entry template with CDN links
│   ├── logo192.png              # App icon (192x192)
│   ├── logo512.png              # App icon (512x512)
│   ├── manifest.json            # PWA manifest with Willow Retreat metadata
│   └── robots.txt               # Search engine crawler instructions
├── src/
│   ├── App.css                  # Global root styles
│   ├── App.js                   # Root component with Route configuration
│   ├── index.css                # Global typographic & layout reset
│   ├── index.js                 # React DOM mount point & Redux Provider
│   ├── components/
│   │   ├── Booking/
│   │   │   ├── Booknow.css      # Booking form layout styling
│   │   │   ├── Booknow.js       # Check-in/out reservation engine
│   │   │   └── MyBookings.js    # Guest reservation status table
│   │   ├── Cards/
│   │   │   ├── MyCards.css      # Card hover & animation styles
│   │   │   └── MyCards.js       # Featured room preview cards
│   │   ├── Carousel/
│   │   │   ├── MyCarousel.css   # Fullscreen hero carousel styles
│   │   │   └── MyCarousel.js    # Hero banner with slide transitions
│   │   ├── Copyright/
│   │   │   ├── MyCopyright.css  # Footer bottom copyright bar styles
│   │   │   └── MyCopyright.js   # Willow Retreat copyright footer
│   │   ├── Footer/
│   │   │   ├── FooterStyles.js  # Styled-components for footer grid
│   │   │   ├── MyFooter.css     # Footer spacing & theme styles
│   │   │   └── MyFooter.js      # Multi-column footer with contact channels
│   │   ├── Login/
│   │   │   ├── Login.css        # Authentication UI styling
│   │   │   └── Login.js         # Email/Google/Facebook login portal
│   │   ├── Navbar/
│   │   │   ├── Navbar.css       # Navigation bar & mobile drawer styles
│   │   │   └── Navbar.js        # Responsive brand navbar with auth state
│   │   ├── ProtectedRoutes.js   # Auth-guard protecting booking workflows
│   │   └── Signup/
│   │       ├── Signup.css       # Registration UI styling
│   │       └── Signup.js        # New guest account registration
│   ├── config/
│   │   ├── authMethods.js       # Social authentication provider configuration
│   │   └── firebase-config.js   # Firebase app initialization & DB instances
│   ├── Context/
│   │   └── UserAuthContext.js   # React Context for authentication state
│   ├── imgs/                    # High-resolution media, photography, and video
│   ├── Redux/
│   │   ├── action.js            # Redux action creators
│   │   ├── actionTypes.js       # Redux action constants (READ, FILTER)
│   │   ├── reducer.js           # Room state reducer & filter logic
│   │   └── store.js             # Redux central store configuration
│   └── screens/
│       ├── About/
│       │   ├── About.css        # Video overlay & brand story styles
│       │   └── About.js         # Brand introduction & video showcase
│       ├── Contact/
│       │   ├── Contact.css      # Contact page & form styling
│       │   └── Contact.js       # Contact info, alternative details & message form
│       ├── Home/
│       │   └── Home.js          # Homepage composing carousel, cards & footer
│       └── Rooms/
│           ├── Rooms.css        # Room listing and detail styling
│           ├── Rooms.js         # Room overview screen
│           ├── SearchRooms.js   # Filterable room search component
│           └── SingleRoom.js    # In-depth room detail view & amenities
├── package.json                 # Project dependencies & build scripts
└── README.md                    # Project documentation
```

---

## 🚀 Getting Started

Follow these instructions to set up and run the Willow Retreat web application locally.

### Prerequisites

- **Node.js**: `v16.x` or higher (compatible with Node 18, 20, 22+)
- **NPM**: `v7.x` or higher (or Yarn / PNPM)
- **Git** installed on your system
- A **Firebase Project** for authentication and realtime database

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/Willow-Retreat.git
   cd Willow-Retreat
   ```

2. **Install project dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```
   *(Note: `--legacy-peer-deps` ensures seamless installation across varying npm versions with React 17)*

### Firebase Configuration

The project connects to Firebase for user authentication and booking storage.

1. Create a project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable **Authentication** with the following sign-in methods:
   - Email/Password
   - Google
   - Facebook (Optional)
3. Create a **Realtime Database** and set the security rules for development or authenticated access:
   ```json
   {
     "rules": {
       ".read": true,
       ".write": true
     }
   }
   ```
4. Verify or update your Firebase credentials in [`src/config/firebase-config.js`](src/config/firebase-config.js):
   ```javascript
   import { initializeApp } from "firebase/app";
   import { getAuth } from "firebase/auth";
   import { getDatabase } from "firebase/database";

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
     databaseURL: "YOUR_DATABASE_URL"
   };

   const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);
   export const db = getDatabase(app);
   ```

### Running the Application

Start the local development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your web browser. The app will automatically reload whenever you make changes to the source code.

---

## 🛠️ Available Scripts

In the project root directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm start` | Runs the app in development mode at [http://localhost:3000](http://localhost:3000). |
| `npm run build` | Bundles and optimizes the production build to the `build/` folder. |
| `npm test` | Launches the interactive test runner in watch mode. |
| `npm run eject` | Copies build configuration and dependencies out of `react-scripts`. *(One-way operation)* |

---

## 🗺️ Application Flow & Routes

| Route | Component | Access | Description |
| :--- | :--- | :--- | :--- |
| `/` | `Home` | Public | Welcome banner, featured rooms, and retreat introduction |
| `/about` | `About` | Public | Brand narrative, video background, and resort amenities |
| `/rooms` | `Rooms` | Public | Complete room catalog with category & price filtering |
| `/singleRoom/:roomType` | `SingleRoom` | Public | Room profile, capacity, pet policy, breakfast, extras & pricing |
| `/booknow/:roomType` | `Booknow` | Protected (Logged In) | Reservation checkout, dates, contact capture & database write |
| `/mybookings` | `MyBookings` | Protected (Logged In) | Guest dashboard tracking reservation status and cancellation |
| `/contact` | `Contact` | Public | Resort address, primary & alternative phone/email, and message form |
| `/login` | `Login` | Public | Account sign-in (Email, Google, Facebook) |
| `/signup` | `Signup` | Public | New guest registration portal |

---

## 🤝 Contributing & License

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/NewFeature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/NewFeature`).
5. Open a Pull Request.

This project is licensed under the **MIT License**.

---

<p align="center">
  <strong>Willow Retreat © 2026. All Rights Reserved.</strong><br/>
  <em>Escape to Serenity. Experience Unmatched Luxury.</em>
</p>
