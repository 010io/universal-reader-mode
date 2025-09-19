# Universal Reader Mode

**Універсальний режим читання для всіх сайтів** / **Universal reader mode for all websites**

*(Shadow DOM, читацький режим за замовчанням з поверненням до повної версії / Shadow DOM, auto reader-preview, instant full-page switch)*

## 🌟 About / Про проєкт

Це браузерне розширення створює universal reader mode, який працює на всіх веб-сайтах, включаючи ті, що використовують Shadow DOM. Розширення автоматично покращує читабельність сторінок, видаляє відволікаючі елементи та забезпечує комфортне читання.

This browser extension creates a universal reader mode that works on all websites, including those using Shadow DOM. The extension automatically improves page readability, removes distracting elements, and provides comfortable reading experience.

## ✨ Features / Можливості

• 🔍 Universal compatibility - працює на всіх сайтах  
• 🌙 Shadow DOM support - підтримка сучасних веб-технологій  
• ⚡ Auto reader mode - автоматичний режим читання  
• 🔄 Instant switch - миттєве перемикання до повної версії  
• 🎨 Customizable styles - налаштування зовнішнього вигляду  
• 📱 Responsive design - адаптивний дизайн  

## 🚀 Quick Start / Швидкий старт

1. Clone the repository / Клонуйте репозиторій
2. Load extension in browser / Завантажте розширення в браузер
3. Navigate to any website / Перейдіть на будь-який сайт
4. Enjoy enhanced reading experience / Насолоджуйтесь покращеним читанням

## 📋 Installation / Встановлення

```bash
git clone https://github.com/010io/universal-reader-mode.git
cd universal-reader-mode
```

Then load the extension folder in your browser's developer mode.

## 🛠️ Development / Розробка

Project is under active development. The basic structure has been set up!

## 📁 Project Structure / Структура проєкту

```
universal-reader-mode/
├── manifest.json          # Extension manifest (Manifest V3)
├── background.js           # Background service worker
├── src/                   # Source code directory
│   ├── style.css         # Reader mode styles with CSS variables
│   ├── inject.js         # Content injection script
│   └── readability.js    # Content extraction module (placeholder)
├── popup/                 # Extension popup interface
│   ├── popup.html        # Popup HTML structure
│   └── popup.js          # Popup functionality
├── .gitignore            # Git ignore file
├── LICENSE               # MIT License
└── README.md             # Project documentation
```

### File Descriptions:

- **manifest.json**: Chrome extension configuration with permissions and scripts
- **background.js**: Service worker handling extension lifecycle and message passing
- **src/style.css**: CSS styles with variables for theming and responsive design
- **src/inject.js**: Content script for DOM manipulation and reader mode activation
- **src/readability.js**: Placeholder for content extraction algorithms
- **popup/popup.html**: Extension popup interface with basic controls
- **popup/popup.js**: Popup functionality and communication with background script

All files are properly structured with header comments and TODO markers for future development.

## 🤝 Contributing / Внесок у розвиток

Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License / Ліцензія

MIT License - see LICENSE file for details.

This project aims to improve web reading experience for everyone. / Цей проєкт має на меті покращити досвід читання в Інтернеті для всіх.
