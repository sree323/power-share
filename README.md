# ⚡ Charging Point – EV Charging Station Finder

A responsive **EV charging point discovery prototype** built using HTML, CSS and vanilla JavaScript. This repository is suitable for a student web development demonstration or a GitHub Pages showcase.

> **Important:** All stations, charging speeds, connector types and availability statuses are **fictional sample data**, not verified real-world information. The reservation form is a browser-only demonstration and **does not create an actual booking**.

## Features
- Responsive EV charging landing page
- Search charging stations by name or area
- Filter by **CCS2**, **Type 2**, or **CHAdeMO** connector
- Filter stations by sample Available / Busy status
- View example power ratings
- Create a demo charging plan with date, time and name
- Save the most recent plan locally in the browser using `localStorage`
- No external libraries, accounts or API keys required

## Technology Stack
- **HTML5** – semantic page structure
- **CSS3** – responsive design
- **JavaScript (ES6)** – station data, filters and demo reservation interaction

## Project Structure
```text
charging-point/
├── index.html
├── style.css
├── script.js
├── README.md
├── LICENSE
└── .gitignore
```

## Run Locally
1. Download or clone this repository.
2. Open `index.html` in your browser.
3. Explore sample stations, filter results and try the demo planning form.

No installation or build process is required.

## Publish with GitHub Pages
1. Create a **public** GitHub repository named `charging-point`.
2. Upload the files at the **repository root** (not inside an extra nested folder).
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.
6. The published site will typically appear at `https://YOUR-USERNAME.github.io/charging-point/`.

## Push via Git Command Line
```bash
git init
git add .
git commit -m "Initial Charging Point website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/charging-point.git
git push -u origin main
```
Create the GitHub repository before pushing, and replace `YOUR-USERNAME` with your GitHub username.

## Customize
- Update the sample `stations` array at the beginning of `script.js`.
- Change brand colors and layout in `style.css`.
- Edit content and navigation in `index.html`.
- To support **real** locations, live charger availability or actual reservations, integrate an authorized external API and a secure backend.

## Limitations
- No real-time station updates, map routing, authentication, or payment system.
- Sample station data is not associated with actual charger operators.
- Browser-local demo plans are not synchronized with other users or devices.

## License
MIT License. See [LICENSE](LICENSE).
