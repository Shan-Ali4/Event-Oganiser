# SPOTT

SPOTT is a modern full-stack event discovery and ticketing platform where users can explore events, create their own events, register for tickets, and manage event check-ins using QR codes.

The platform is built with Next.js, Convex, Clerk, and Tailwind CSS, with features such as location-based event discovery, category browsing, QR ticket generation, and AI-assisted event creation.

## Features

- User authentication with Clerk
- Event creation and management
- Browse featured, nearby, and popular events
- Search events by keyword
- Filter events by category and location
- Register for free or paid events
- QR-code-based ticket system
- Organizer dashboard for managing events
- QR scanner for attendee check-in
- AI-powered event detail generation
- Responsive modern UI
- Convex-powered backend and real-time data

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Convex
- **Authentication:** Clerk
- **UI Components:** shadcn/ui, Lucide React
- **Forms & Validation:** React Hook Form, Zod
- **AI Integration:** Google Gemini API
- **Image Search:** Unsplash API
- **QR Codes:** react-qr-code, html5-qrcode

## Project Structure

```txt
SPOTT/
├── app/                 # Next.js app routes and pages
├── components/          # Reusable UI components
├── convex/              # Convex backend functions and schema
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and constants
├── public/              # Static assets
└── package.json         # Project dependencies and scripts
