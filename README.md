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