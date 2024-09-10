# Telegram Mini Apps (TMA) Boilerplate

This project is a comprehensive boilerplate for creating Telegram Mini Apps using modern web technologies. It combines the power of React, TypeScript, Vite, TailwindCSS, and React Router to provide a robust and efficient development environment.

## Features

- **React + TypeScript**: Leverage the power of React with TypeScript for type-safe development.
- **Vite**: Enjoy fast build times and instant hot module replacement (HMR).
- **TailwindCSS**: Utilize utility-first CSS framework for rapid UI development.
- **React Router**: Implement client-side routing for a seamless single-page application experience.
- **Telegram Theme Support**: Automatic theme detection and application based on the user's Telegram settings.
- **Authentication**: Built-in support for Telegram's authentication mechanism.
- **Telegram WebApp Integration**: Easy access to Telegram WebApp functions through the global `window.Telegram.WebApp` object.
- **Auto-expand**: Automatically expands the app to full height in the Telegram client.
- **Persistent Storage**: Utilizes Zustand for state management with persistence.
- **Environment Variables**: Support for environment-specific configurations.
- **ESLint**: Integrated linting for code quality assurance.

## Getting Started

1. Set up environment variables:
   Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file to set your specific values for `VITE_AUTH`, `VITE_USER_ID`, and `VITE_USERNAME` if needed.

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev -- --host
   # or
   yarn dev --host
   ```

4. Open the provided URL in your Telegram client or browser.

## Advanced Features

### Telegram Theme Support
The app automatically adapts to the user's Telegram theme (light or dark). This is implemented using Tailwind CSS and custom CSS variables.

### Authentication
The `useAuth` hook provides easy access to the user's authentication data, supporting both Telegram WebApp and custom authentication methods.

### Telegram WebApp Integration
All Telegram WebApp functions are accessible through the global `window.Telegram.WebApp` object, allowing you to interact with the Telegram client seamlessly.

### Auto-expand
The `useTgAutoExpand` hook ensures that your app always expands to full height in the Telegram client, providing a native-like experience.

### Persistent Storage
Zustand is used for state management, with built-in persistence to maintain user data across sessions.

## Deployment

This template is configured for easy deployment to GitHub Pages. Simply push your changes to the `master` branch, and the GitHub Action will automatically build and deploy your app.

## Links

- [Telegram Mini Apps Documentation](https://docs.ton.org/develop/dapps/twa)
- [Example TMA](https://t.me/vite_twa_example_bot/app)
- [Live Demo](https://twa-dev.github.io/vite-boilerplate/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).