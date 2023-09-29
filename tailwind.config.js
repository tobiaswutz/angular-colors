/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "var(--primary-100)",
        "primary-200": "var(--primary-200)",
        "primary-300": "var(--primary-300)",
        "primary-400": "var(--primary-400)",
        "primary-500": "var(--primary-500)",
        "primary-600": "var(--primary-600)",
        "primary-700": "var(--primary-700)",
        "primary-800": "var(--primary-800)",
        "primary-900": "var(--primary-900)",
        "primary-100-text": "var(--text-primary-100)",
        "primary-200-text": "var(--text-primary-200)",
        "primary-300-text": "var(--text-primary-300)",
        "primary-400-text": "var(--text-primary-400)",
        "primary-500-text": "var(--text-primary-500)",
        "primary-600-text": "var(--text-primary-600)",
        "primary-700-text": "var(--text-primary-700)",
        "primary-800-text": "var(--text-primary-800)",
        "primary-900-text": "var(--text-primary-900)",
        "secondary-100": "var(--secondary-100)",
        "secondary-200": "var(--secondary-200)",
        "secondary-300": "var(--secondary-300)",
        "secondary-400": "var(--secondary-400)",
        "secondary-500": "var(--secondary-500)",
        "secondary-600": "var(--secondary-600)",
        "secondary-700": "var(--secondary-700)",
        "secondary-800": "var(--secondary-800)",
        "secondary-900": "var(--secondary-900)",
        "secondary-100-text": "var(--text-secondary-100)",
        "secondary-200-text": "var(--text-secondary-200)",
        "secondary-300-text": "var(--text-secondary-300)",
        "secondary-400-text": "var(--text-secondary-400)",
        "secondary-500-text": "var(--text-secondary-500)",
        "secondary-600-text": "var(--text-secondary-600)",
        "secondary-700-text": "var(--text-secondary-700)",
        "secondary-800-text": "var(--text-secondary-800)",
        "secondary-900-text": "var(--text-secondary-900)",
        "contrast-100": "var(--contrast-100)",
        "contrast-200": "var(--contrast-200)",
        "contrast-300": "var(--contrast-300)",
        "contrast-400": "var(--contrast-400)",
        "contrast-500": "var(--contrast-500)",
        "contrast-600": "var(--contrast-600)",
        "contrast-700": "var(--contrast-700)",
        "contrast-800": "var(--contrast-800)",
        "contrast-900": "var(--contrast-900)",
        "contrast-100-text": "var(--text-contrast-100)",
        "contrast-200-text": "var(--text-contrast-200)",
        "contrast-300-text": "var(--text-contrast-300)",
        "contrast-400-text": "var(--text-contrast-400)",
        "contrast-500-text": "var(--text-contrast-500)",
        "contrast-600-text": "var(--text-contrast-600)",
        "contrast-700-text": "var(--text-contrast-700)",
        "contrast-800-text": "var(--text-contrast-800)",
        "contrast-900-text": "var(--text-contrast-900)",
        "surface-100": "var(--surface-100)",
        "surface-200": "var(--surface-200)",
        "surface-300": "var(--surface-300)",
        "surface-400": "var(--surface-400)",
        "surface-500": "var(--surface-500)",
        "surface-600": "var(--surface-600)",
        "surface-700": "var(--surface-700)",
        "surface-800": "var(--surface-800)",
        "surface-900": "var(--surface-900)",
        "background-100": "var(--background-100)",
        "background-200": "var(--background-200)",
        "background-300": "var(--background-300)",
        "background-400": "var(--background-400)",
        "background-500": "var(--background-500)",
        "background-600": "var(--background-600)",
        "background-700": "var(--background-700)",
        "background-800": "var(--background-800)",
        "background-900": "var(--background-900)",
        "background-100-text": "var(--text-background-100)",
        "background-200-text": "var(--text-background-200)",
        "background-300-text": "var(--text-background-300)",
        "background-400-text": "var(--text-background-400)",
        "background-500-text": "var(--text-background-500)",
        "background-600-text": "var(--text-background-600)",
        "background-700-text": "var(--text-background-700)",
        "background-800-text": "var(--text-background-800)",
        "background-900-text": "var(--text-background-900)",
        "error-100": "var(--error-100)",
        "error-200": "var(--error-200)",
        "error-300": "var(--error-300)",
        "error-400": "var(--error-400)",
        "error-500": "var(--error-500)",
        "error-600": "var(--error-600)",
        "error-700": "var(--error-700)",
        "error-800": "var(--error-800)",
        "error-900": "var(--error-900)",
        "error-100-text": "var(--text-error-100)",
        "error-200-text": "var(--text-error-200)",
        "error-300-text": "var(--text-error-300)",
        "error-400-text": "var(--text-error-400)",
        "error-500-text": "var(--text-error-500)",
        "error-600-text": "var(--text-error-600)",
        "error-700-text": "var(--text-error-700)",
        "error-800-text": "var(--text-error-800)",
        "error-900-text": "var(--text-error-900)",
        "success-100": "var(--success-100)",
        "success-200": "var(--success-200)",
        "success-300": "var(--success-300)",
        "success-400": "var(--success-400)",
        "success-500": "var(--success-500)",
        "success-600": "var(--success-600)",
        "success-700": "var(--success-700)",
        "success-800": "var(--success-800)",
        "success-900": "var(--success-900)",
        "success-100-text": "var(--text-success-100)",
        "success-200-text": "var(--text-success-200)",
        "success-300-text": "var(--text-success-300)",
        "success-400-text": "var(--text-success-400)",
        "success-500-text": "var(--text-success-500)",
        "success-600-text": "var(--text-success-600)",
        "success-700-text": "var(--text-success-700)",
        "success-800-text": "var(--text-success-800)",
        "success-900-text": "var(--text-success-900)",
        "warning-100": "var(--warning-100)",
        "warning-200": "var(--warning-200)",
        "warning-300": "var(--warning-300)",
        "warning-400": "var(--warning-400)",
        "warning-500": "var(--warning-500)",
        "warning-600": "var(--warning-600)",
        "warning-700": "var(--warning-700)",
        "warning-800": "var(--warning-800)",
        "warning-900": "var(--warning-900)",
        "warning-100-text": "var(--text-warning-100)",
        "warning-200-text": "var(--text-warning-200)",
        "warning-300-text": "var(--text-warning-300)",
        "warning-400-text": "var(--text-warning-400)",
        "warning-500-text": "var(--text-warning-500)",
        "warning-600-text": "var(--text-warning-600)",
        "warning-700-text": "var(--text-warning-700)",
        "warning-800-text": "var(--text-warning-800)",
        "warning-900-text": "var(--text-warning-900)",
        "info-100": "var(--info-100)",
        "info-200": "var(--info-200)",
        "info-300": "var(--info-300)",
        "info-400": "var(--info-400)",
        "info-500": "var(--info-500)",
        "info-600": "var(--info-600)",
        "info-700": "var(--info-700)",
        "info-800": "var(--info-800)",
        "info-900": "var(--info-900)",
        "info-100-text": "var(--text-info-100)",
        "info-200-text": "var(--text-info-200)",
        "info-300-text": "var(--text-info-300)",
        "info-400-text": "var(--text-info-400)",
        "info-500-text": "var(--text-info-500)",
        "info-600-text": "var(--text-info-600)",
        "info-700-text": "var(--text-info-700)",
        "info-800-text": "var(--text-info-800)",
        "info-900-text": "var(--text-info-900)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
