/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg_color: 'var(--tg-theme-bg-color, #FFFFFF)',
        text_color: 'var(--tg-theme-text-color, #000000)',
        hint_color: 'var(--tg-theme-hint-color, #8E8E93)',
        link_color: 'var(--tg-theme-link-color, #007AFF)',
        button_color: 'var(--tg-theme-button-color, #007AFF)',
        secondary_button_color: 'var(--tg-theme-secondary-button-color, #FFFFFF70)',
        button_text_color: 'var(--tg-theme-button-text-color, #FFFFFF)',
        secondary_bg_color: 'var(--tg-theme-secondary-bg-color, #EFEFF4)',
        header_bg_color: 'var(--tg-theme-header-bg-color, #EFEFF3)',
        accent_text_color: 'var(--tg-theme-accent-text-color, #000000)',
        section_bg_color: 'var(--tg-theme-section-bg-color, #FFFFFF)',
        section_header_text_color: 'var(--tg-theme-section-header-text-color, #000000)',
        section_separator_color: 'var(--tg-theme-section-separator-color, #CCCCCC)',
        subtitle_text_color: 'var(--tg-theme-subtitle-text-color, #888888)',
        destructive_text_color: 'var(--tg-theme-destructive-text-color, #FF0000)',
      },
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        ':root': {
          '--tg-color-scheme': 'light',
        },
        '@media (prefers-color-scheme: dark)': {
          ':root': {
            '--tg-color-scheme': 'dark',
          },
        },
        'body[data-theme="dark"]': {
          '--tg-color-scheme': 'dark',
        },
        'body[data-theme="light"]': {
          '--tg-color-scheme': 'light',
        },
      });
    },
  ],
}
