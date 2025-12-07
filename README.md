# IPTV Platform Ecosystem

This repository contains the complete source code for a scalable IPTV business ecosystem, including a Next.js Web Portal and a Flutter Cross-Platform Client Application.

## Project Structure

*   **`iptv-platform-web/`**: The web application powered by Next.js 14.
    *   **Landing Page**: High-converting marketing page.
    *   **User Dashboard**: For customers to view credentials (`/dashboard`).
    *   **Admin Dashboard**: For business owners to manage users (`/admin`).
    *   **API**: Handles registration and mock payment processing.
*   **`iptv_client_app/`**: The client application built with Flutter.
    *   **Cross-Platform**: Runs on Android, Android TV, Windows, Web, and iOS.
    *   **Features**: TV-optimized Login, Channel List, Video Player (HLS/MP4).

## Getting Started

Please refer to the [WALKTHROUGH.md](./WALKTHROUGH.md) for detailed setup instructions and test scenarios.

### Quick Start (Web)
1.  `cd iptv-platform-web`
2.  `npm install`
3.  `npm run dev`

### Quick Start (Client)
1.  `cd iptv_client_app`
2.  `flutter run`
