<div align="center">

# 🚀 DevStack

**An interactive workspace to organize, visualize, and build your ideal technology stack.**

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)

[Live Demo](https://mdredoanhasan.github.io/Project-DevStack/)

</div>

---

## 📖 About

**DevStack** is an interactive workspace for developers to organize, visualize, and build their ideal technology stack. It offers a curated directory of modern web development tools, letting you explore, compare, and assemble the exact stack that fits your next project.

---

## ✨ Features

### 🧩 Dynamic Stack Management
Seamlessly add and remove technologies from your personalized stack in real time — build and reshape your ideal setup on the fly.

### 📚 Curated Technology Directory
Explore modern web development tools categorized by function, complete with skill ratings and descriptions to help you choose the right tool for the job.

### 🔔 Interactive UI Notifications
Instantly receive toast alerts as you manage your custom development stack, keeping every action clear and confirmed.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Frontend Library** | React.js |
| **Language** | TypeScript / JavaScript (ES6+) |
| **Styling** | Tailwind CSS, DaisyUI |
| **Notifications** | React-Toastify |
| **Data** | JSON (technology data) |
| **Build Tool** | Vite |

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/mdredoanhasan/Project-DevStack.git

# Navigate into the project directory
cd Project-DevStack

# Install dependencies
npm install

# Run the development server
npm run dev
```

---

## 🧠 React Concepts Q&A

### 1. What is JSX, and why is it used in React?
JSX is a syntax extension that lets you write HTML-like code inside JavaScript. React uses it because it makes describing what the UI should look like much more readable than writing plain `React.createElement()` calls — you can mix markup and logic in one place.

### 2. What is the difference between props and state?
Props are data passed **into** a component from its parent — they're read-only from the child's side. State is data a component manages **internally**, and it can change over time, causing the component to re-render.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` lets a component hold and update its own data without needing a class. In DevStack, I used it to keep track of the technologies the user has added to their custom stack, so the UI updates instantly whenever an item is added or removed.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` runs side effects — code that happens outside the normal render flow, like fetching data or subscribing to something. I used it to load the technology data from the JSON file once when the component first mounts, so the directory is ready as soon as the page loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
The `key` prop helps React tell items apart when the list changes. Without a stable, unique key, React can't efficiently figure out which items were added, removed, or reordered, which can lead to buggy re-renders or items updating incorrectly.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means showing different UI depending on some condition. For example, in DevStack, if the user's stack is empty, I show a friendly "Your stack is empty — start adding technologies!" message instead of an empty list, using something like:
```jsx
{stack.length === 0 ? (
  <p>Your stack is empty — start adding technologies!</p>
) : (
  <StackList items={stack} />
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data down to a child through props, just like function arguments. For a child to send something back up, the parent passes down a function as a prop (e.g. `onAddTech`), and the child calls that function — usually with some data — whenever it needs to update the parent's state.

---

## 👤 Author

**Md Redoan Hasan**

- GitHub: [@mdredoanhasan](https://github.com/mdredoanhasan)

<div align="center">

⭐ **If you like this project, consider giving it a star!** ⭐

</div>
