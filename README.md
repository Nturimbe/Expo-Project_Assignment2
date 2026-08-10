# Workout List & Details — DCIT 324 Assignment 2

React Native (Expo) app built around **reusable components driven by props**
and **interactive state**, per the assignment brief. Built on a fitness app
UI kit reference (Pump House — Free Fitness App UI Kit, Figma Community).

## What it does
- **Workout List screen** — renders 6 workout cards from a data array using a
  single reusable `WorkoutCard` component (no repeated card markup).
- **WorkoutCard** — receives `image`, `title`, `duration`, `calories`, and
  `difficulty` via props. Each card owns its own local `isFavorite` state, so
  toggling one card's heart icon never affects any other card.
- **Stack navigation** — tapping a card pushes a **Workout Details** screen,
  passing the tapped workout's full data through `route.params`.
- **Workout Details screen** — shows the workout's image, stats, description,
  and exercise list, plus a button that toggles between **"Start Workout"**
  and **"Completed"** using local state.

## Project structure
App.js
src/
theme/theme.js # colors, spacing, radii, typography
data/workouts.js # 6 workouts with props data + detail fields
components/
WorkoutCard.js # reusable card (props in, favorite state local)
screens/
WorkoutListScreen.js # maps workouts -> WorkoutCard, FlatList
WorkoutDetailsScreen.js # receives route.params.workout, toggle button
assets/
workouts/ # 6 workout photos (full-body.jpg, indoor-run.jpg, etc.)

## Design reference
Based on the **Pump House — Free Fitness App UI Kit** (Figma Community):
https://www.figma.com/community/file/1091263687486055207/free-fitness-app-ui-kit

Used as a guide for structure and color only — coral/raspberry accent
(`#FF4667`), white cards, light background — per the assignment instructions,
not a pixel-for-pixel copy of every illustration.

## Run it locally
1. Make sure you have Node.js (LTS) installed.
2. Install dependencies: npm install
3. Start the dev server: npx expo start -c 
4. Scan the QR code with the **Expo Go** app on your phone (make sure your
   phone's Expo Go SDK version matches the project's — this project targets
   **SDK 54**), or press `a`/`i` for an emulator/simulator.

## Dependencies
- `expo` (SDK 54)
- `@react-navigation/native`, `@react-navigation/native-stack`
- `react-native-screens`, `react-native-safe-area-context`
- `@expo/vector-icons`

## Submission checklist (per assignment instructions)
1. `git init`, commit this project, and push it to a new GitHub repository.
2. On GitHub: **Code** → **Download ZIP**.
3. Submit that ZIP file on Sakai under this assignment.