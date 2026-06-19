# 🦕 DINO.CORE — Jurassic Modern Interface

A cinematic, dark-themed **paleontology research archive** built with vanilla HTML, CSS, and JavaScript. DINO.CORE presents a beautifully styled multi-page web experience that lets users explore dinosaur species, geological eras, fossil records, and active research — wrapped in a sci-fi aesthetic inspired by next-gen data terminals.

---

## 🌐 Live Preview

> Open `index.html` in any modern browser to explore the archive.

---

## ✨ Features

- **Multi-page SPA-style navigation** — Discovery, Eras, Fossils, and Research sections
- **Cinematic dark UI** with glassmorphism cards, amber glows, and gradient text
- **Animated hero section** with parallax background and floating data card
- **Particle system** rendered on the hero canvas for atmosphere
- **Animated stat counters** that trigger on scroll into view
- **Tilt cards with card-shine effects** on hover
- **Scroll reveal animations** with staggered entrance transitions
- **Responsive layout** with a dedicated mobile bottom navigation bar
- **Custom Tailwind config** with a full Material Design 3-inspired dark color palette
- **Google Fonts** — Epilogue (headlines) and Inter (body)

---

## 🚀 Getting Started

### Prerequisites

Just a modern browser — no build tools or dependencies required.

### Installation

```bash
# Clone the repository
git clone https://github.com/bhargavajshetty/stitch.git

# Navigate into the project
cd stitch
```

### Run

Open `index.html` directly in your browser:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

Or use a local dev server for the best experience:

```bash
# Using VS Code Live Server, or:
npx serve .
```

---

## 📄 Pages

| Page | File | Description |
|---|---|---|
| Discovery | `index.html` | Hero landing page with stats and section overview |
| Eras | `eras.html` | Triassic, Jurassic & Cretaceous timeline database |
| Fossils | `fossils.html` | High-fidelity fossil scans and skeletal data |
| Research | `research.html` | Active expeditions and scientific whitepapers |

---

## 🗂️ Project Structure

```
stitch/
├── index.html        # Discovery / landing page
├── eras.html         # Geological eras database
├── fossils.html      # Fossil archive
├── research.html     # Research lab page
├── styles.css        # Global custom styles
├── animations.js     # Scroll reveal, parallax, particles, tilt effects
├── data.js           # Specimen and catalog data
├── images/           # Hero and specimen images
└── .stitch/          # Stitch design config
```

---

## 🛠️ Built With

- **HTML5** — Semantic multi-page structure
- **Tailwind CSS (CDN)** — Utility-first styling with a custom dark Material Design 3 theme
- **Vanilla JavaScript** — Animations, counters, particles, and parallax
- **Google Fonts** — Epilogue & Inter
- **Google Material Symbols** — Icon system

---

## 🎨 Design Highlights

- Dark background `#0b1326` with a deep navy/slate palette
- Accent colors: **green** (`#8bd79b`) for primary, **amber** (`#ffb95f`) for tertiary, **coral** (`#ffb693`) for secondary
- Glassmorphism `.glass-card` with `backdrop-filter: blur(12px)`
- Amber glow shadow on floating cards
- Custom Tailwind `borderRadius`, `fontFamily`, and full color token system

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/cool-feature`)
3. Commit your changes (`git commit -m 'Add cool feature'`)
4. Push to the branch (`git push origin feature/cool-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Bhargava J Shetty**
- GitHub: [@bhargavajshetty](https://github.com/bhargavajshetty)

---

*Explore the giants. Unearth the data. Welcome to DINO.CORE.* 🦖
