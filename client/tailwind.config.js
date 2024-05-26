/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        // Primary colors for the chat app interface
        primary: {
          DEFAULT: "#007bff", // Dark blue (base color)
          light: "#1B2061",   // Lighter blue (accent)
          dark: "#1A1E52",   // Darker blue (accent)
        },
        secondary: {
          DEFAULT: "#e9ecef", // Light blue (background)
        },
        gray: {
          DEFAULT: "#7f8c8d", // Neutral gray (text)
          light: "#f8fafc",  // Light gray (background variant)
        },
        success: "#28a745",  // Green (success message)
        warning: "#ffc107", // Yellow (warning message)
        error: "#dc3545",   // Red (error message)
        // Additional colors based on requirements (customize as needed)
        info: "#007bff33", // Light blue with opacity (info message)
        accent1: "#f09819", // Orange (accent)
        accent2: "#38a3a5", // Teal (accent)
      },
    },
  },
 plugins: [
    require('daisyui'),
  ],
}

