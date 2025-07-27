# Yoelvys Portfolio

This repository hosts my personal portfolio built with **Next.js**. The site showcases my projects, experience and skills as a frontend developer. It features smooth animations and a responsive layout optimized for deployment on **Vercel**.

---

## 📖 Description

The application displays several sections where I highlight my most relevant skills and projects. It relies on reusable **React** components styled with **Sass** and integrates **GSAP** animations for an engaging user experience.

---

## ✨ Features

- Built with **Next.js 15.2.4**.
- Fully responsive design for desktop and mobile.
- Smooth animations thanks to **GSAP**.
- Ready for component documentation with **Storybook**.
- Automatically deployed on **Vercel**.

---

## 📦 Dependencies

### Main

- **clsx**: Utility for conditional class names.
- **gsap**: Animation library.
- **next**: React framework for SSR and SSG.
- **react** and **react-dom**: Core libraries for the UI.
- **sass**: Style preprocessor.

### Development

- **@eslint/eslintrc**, **eslint** and plugins for code linting.
- **prettier** for consistent formatting.
- **typescript** for static typing.
- **@types/** definitions for Node and React.
- **@svgr/webpack** to load SVGs as components.

---

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yoelvyspc93/portfolio.git
   cd portfolio
   ```
2. Install the dependencies:
   ```bash
   yarn install
   ```

---

## ▶️ Usage

- Start the development server:
  ```bash
  yarn run dev
  ```
- Run the linter:
  ```bash
  yarn run lint
  ```
- Automatically fix lint issues:
  ```bash
  yarn run lint:fix
  ```
- Format the code with Prettier:
  ```bash
  yarn run format
  ```

---

## 🏗️ Build and Deployment

- Generate the production build:
  ```bash
  yarn run build
  ```
- Start the compiled application:
  ```bash
  yarn run start
  ```
- Check dependencies for security issues:
  ```bash
  yarn run audit:security
  ```
- Upgrade important dependencies:
  ```bash
  yarn run update:security
  ```

---

## 📚 Storybook

While this project is intended to use **Storybook** for documenting and testing components in isolation, no configuration is included by default. You can easily integrate it following the [official documentation](https://storybook.js.org/).

---

## 🧪 Testing

Run unit tests:

```bash
yarn test
```

Run mutation tests with Stryker:

```bash
yarn stryker
```

This project follows the Page Component Object Model pattern for component tests.

---

## ✉️ Contact

If you have questions or proposals, feel free to reach me at [yoelvyspc93@gmail.com](mailto:yoelvyspc93@gmail.com).
