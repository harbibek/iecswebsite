# IECS Solutions Website

Modern, responsive website for **Innovative Energy Conservation Solutions**, Mohali.

## 📁 Project Structure

```
iecs-website/
├── index.html          ← Main HTML file (open this in browser)
├── css/
│   ├── reset.css       ← Browser reset
│   ├── variables.css   ← Color & font tokens
│   ├── base.css        ← Body, buttons, utilities
│   ├── nav.css         ← Navigation bar
│   ├── hero.css        ← Hero section + ticker
│   ├── sections.css    ← Why Us, Process, About, Contact
│   ├── services.css    ← Services grid
│   ├── chatbot.css     ← AI chat widget
│   ├── footer.css      ← Footer
│   └── responsive.css  ← Mobile/tablet breakpoints
└── js/
    ├── cursor.js       ← Custom animated cursor
    ├── nav.js          ← Navbar + hamburger menu
    ├── reveal.js       ← Scroll animations
    ├── form.js         ← Contact form
    └── chatbot.js      ← AI chatbot (Claude API)
```

## 🚀 Features
- Dark, modern premium design
- Custom animated cursor (desktop)
- Smooth scroll-reveal animations
- Mobile-first responsive layout
- AI-powered chatbot (Claude AI)
- Contact form with validation
- Animated hero with energy ring
- Scrolling service ticker

## 🔧 How to run locally in VS Code

1. Open VS Code
2. Go to **File → Open Folder** → select the `iecs-website` folder
3. Install the **Live Server** extension (search in Extensions panel on the left)
4. Right-click `index.html` → **Open with Live Server**
5. Your browser will open automatically at `http://127.0.0.1:5500`

## 📤 How to deploy on GitHub Pages

See the full step-by-step guide provided by your developer.

## 📝 To customize

- **Colors**: Edit `css/variables.css`
- **Content**: Edit `index.html`
- **Chatbot personality**: Edit the `SYSTEM_PROMPT` in `js/chatbot.js`
- **Contact form backend**: Replace the `setTimeout` in `js/form.js` with a real API call (e.g., Formspree, EmailJS)
