# IPTV System Walkthrough

## 1. Web Portal & Backend (Next.js)

The web portal handles user registration, payments (mock), and the admin dashboard.

### Setup & Run
1.  Open a terminal in `iptv-platform-web`.
2.  Install dependencies (if not done): `npm install`
3.  Initialize Database (if not done): `npx prisma db push`
4.  Start Development Server:
    ```bash
    npm run dev
    ```
5.  Access in Browser:
    -   **Landing Page**: [http://localhost:3000](http://localhost:3000)
    -   **Register**: [http://localhost:3000/register](http://localhost:3000/register)
    -   **Admin**: [http://localhost:3000/admin](http://localhost:3000/admin) (View created users here)

## 2. Client App (Flutter)

The client app allows users to log in and watch streams.

### Setup & Run
1.  Open a terminal in `iptv_client_app`.
2.  Install dependencies: `flutter pub get`
3.  Run on Platform (Chrome, Windows, or Android Emulator):
    ```bash
    flutter run -d windows
    # OR
    flutter run -d chrome
    ```

### Usage
1.  **Login**: Use any email and password. (Mock authentication is enabled for demo).
2.  **Player**: After login, you will see a list of channels on the left. Click one to play.

## 3. Workflow Demo
1.  Go to the Web Portal, register a new user.
2.  Go to the Admin Dashboard to see the new user.
3.  Open the Flutter App, log in with the credentials (mock token generated).

## 4. Test Scenarios (Demo)

Follow these scenarios to verify the system functionality.

### Scenario 1: New User Registration (Web)
1.  **Navigate** to `http://localhost:3000`.
2.  **Click** "Get Started" or scroll to Pricing.
3.  **Select** the "Quarterly" plan ($30).
4.  **Fill** in the form:
    *   Email: `demo@test.com`
    *   Password: `password123`
5.  **Click** "Pay $30 & Subscribe".
6.  **Verify**: You should be redirected to the Dashboard showing "Active" status and generated Credentials.

### Scenario 2: Admin Dashboard (Web)
1.  **Navigate** to `http://localhost:3000/admin`.
2.  **Verify**:
    *   Total Users count has increased.
    *   `demo@test.com` appears in the "Recent Users" list.
    *   Status shows "Active".

### Scenario 3: Mobile App Login (Flutter)
1.  **Launch** the app (`flutter run -d windows` or Android).
2.  **Enter Credentials** (from Web Dashboard):
    *   Email: `demo@test.com`
    *   Password: `password123`
3.  **Click** "Sign In".
4.  **Verify**: App navigates to the Home Screen showing the channel list.

### Scenario 4: Streaming Content (Flutter)
1.  **On Home Screen**, look at the "Channels" list sidebar.
2.  **Select** "Big Buck Bunny".
3.  **Verify**: Video starts playing automatically in the main player area.
4.  **Select** "Sintel".
5.  **Verify**: Player switches content and plays the new stream.
