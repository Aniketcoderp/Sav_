<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>sav-App</h1>
  <p>
    This is a React-based application built with Vite. It uses several libraries to enhance functionality, 
    such as Axios for API requests, React Router DOM for routing, and Google reCAPTCHA for bot protection.
  </p>

  <h2>Project Structure</h2>
  <pre>
sav-App/
├── dist/                     # Production build files
├── node_modules/             # Installed dependencies
├── public/
│   └── vite.svg              # Public assets
├── src/
│   ├── assets/               # Project assets
│   ├── components/           # React components
│   │   ├── home/
│   │   │   ├── autorew_24d...# Home-related assets
│   │   │   ├── Home.css      # Styling for Home component
│   │   │   └── Home.jsx      # Home component
│   │   ├── product/
│   │   │   ├── product.css   # Styling for ProductPage
│   │   │   └── ProductPage.jsx # ProductPage component
│   ├── App.css               # Global styling
│   ├── App.jsx               # Root component
│   ├── index.css             # Index-level styling
│   └── main.jsx              # Entry point
├── .gitignore                # Files and directories to ignore in Git
├── eslint.config.js          # ESLint configuration
├── index.html                # Main HTML file
├── package-lock.json         # Dependency lock file
├── package.json              # Project metadata and dependencies
├── README.md                 # Project documentation
└── vite.config.js            # Vite configuration
  </pre>

  <h2>Libraries Used</h2>
  <ul>
    <li><strong>Axios</strong>: A promise-based HTTP client for making API requests. Version: <code>^1.7.9</code>.</li>
    <li><strong>React</strong>: A JavaScript library for building user interfaces. Version: <code>^18.3.1</code>.</li>
    <li><strong>React-DOM</strong>: The entry point for DOM-related rendering. Version: <code>^18.3.1</code>.</li>
    <li><strong>React Google reCAPTCHA</strong>: Provides Google reCAPTCHA integration for forms. Version: <code>^3.1.0</code>.</li>
    <li><strong>React Router DOM</strong>: Enables dynamic routing for the application. Version: <code>^7.1.1</code>.</li>
  </ul>

  <h2>Getting Started</h2>
  <h3>Prerequisites</h3>
  <p>Ensure you have the following installed:</p>
  <ul>
    <li>Node.js (v16 or later)</li>
    <li>npm (v7 or later)</li>
  </ul>

  <h3>Installation</h3>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/Aniketcoderp/Sav_.git
cd sav-App</code></pre>
    </li>
    <li>Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
  </ol>

  <h3>Development</h3>
  <p>To start the development server:</p>
  <pre><code>npm run dev</code></pre>
  <p>
    This will start the Vite development server. Open 
    <a href="http://localhost:5173" target="_blank">http://localhost:5173</a> 
    in your browser to see the application.
  </p>

  <h3>Build</h3>
  <p>To build the project for production:</p>
  <pre><code>npm run build</code></pre>
  <p>The optimized production files will be located in the <code>dist/</code> directory.</p>

  <h3>Linting</h3>
  <p>Run ESLint to check for code quality issues:</p>
  <pre><code>npm run lint</code></pre>

  <h2>Features</h2>
  <ul>
    <li>Home page with its own styles and components.</li>
    <li>Product page for displaying product-related information.</li>
    <li>Integrated Google reCAPTCHA for form validation.</li>
    <li>Dynamic routing using React Router DOM.</li>
  </ul>

  <h2>File Descriptions</h2>
  <ul>
    <li><code>App.jsx</code>: The root component that manages routes and global app logic.</li>
    <li><code>Home.jsx</code>: The Home page component.</li>
    <li><code>ProductPage.jsx</code>: Component for the Product page.</li>
    <li><code>vite.config.js</code>: Configuration file for the Vite bundler.</li>
  </ul>

  <h2>License</h2>
  <p>
    This project is licensed under the MIT License. See the 
    <code>LICENSE</code> file for details.
  </p>
</body>
</html>
