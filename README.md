# 🗺️ Mapty — Workout Tracker on a Map

An interactive app to log your running and cycling workouts directly on a map.
Click anywhere on the map → fill in the details → your workout is pinned.

> Built while learning JavaScript. Original project concept by Jonas Schmedtmann.

---

## 🚀 Live Demo

(https://belevtsov91.github.io/mapty-workout-tracker/)

---

## ✨ Features

- 📍 Click on the map to log a workout at that location
- 🏃 **Running** — tracks distance, duration, pace, cadence
- 🚴 **Cycling** — tracks distance, duration, speed, elevation gain
- 💾 Workouts saved to **localStorage** — persist after page refresh
- 🗺️ Click a workout in the list → map flies to that marker
- 📱 Fully **responsive** — works on mobile, tablet, and desktop

---

## 🎓 What Was Learned & What Was Added

This project was built as a hands-on exercise to deeply understand core JavaScript concepts:

- **OOP with ES6 Classes** — inheritance, private class fields, encapsulation
- **Geolocation API** — working with real browser coordinates
- **Third-party library integration** — Leaflet.js for interactive maps
- **localStorage** — persisting workout data between sessions
- **Dynamic DOM manipulation** — rendering workout cards on the fly
- **Event delegation** — handling clicks on dynamically created elements

### 🔧 What was improved and added during this build:

The original project was desktop-only. As part of this learning journey,
a **full responsive layout** was designed and implemented from scratch:

- Tablet view: sidebar adjusts width and padding gracefully
- Mobile view: sidebar moves above the map, remains scrollable
- Small screens: compact spacing, readable typography at any size

Additionally the codebase was cleaned up for a more production-ready state —
debug logs, test objects, and leftover scaffold files were removed.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| Vanilla JavaScript (ES6+) | App logic, OOP classes |
| [Leaflet.js](https://leafletjs.com/) | Interactive map |
| OpenStreetMap | Map tiles |
| CSS3 | Styling, responsive layout |
| Vite | Dev server & build tool |
| localStorage | Data persistence |

---

## 📦 Getting Started

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/mapty-workout-tracker.git

# Go into the project
cd mapty-workout-tracker

# Install dependencies
npm install

# Start dev server
npm run dev
```

Then open `http://localhost:5173` in your browser.
Allow location access when prompted.

---

## 📁 Project Structure

```
TrackerOnTheMap/
├── index.html
├── package.json
├── public/
│   ├── icon.png
│   └── logo.png
└── src/
    ├── script.js   ← all app logic
    └── style.css   ← all styles
```

---

## 📱 Responsive Breakpoints

| Screen | Layout |
|---|---|
| > 900px | Sidebar left, map right |
| ≤ 768px | Sidebar on top, map below |
| ≤ 480px | Compact sidebar, adjusted font sizes |

---

## 📄 License

For learning and portfolio use only. Not for commercial use.
