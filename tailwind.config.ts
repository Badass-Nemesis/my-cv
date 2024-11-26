import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Monsterrat', 'monospace'],
        content: ['JetBrains Mono', 'sans-serif'],
      },
      width: {
        'a4': '8in',
        'a4lite': '7in',
      },
      colors: {
        background: 'var(--background-color)',
        'text-heading': 'var(--text-color-heading)',
        'text-content': 'var(--text-color-content)',
        'text-content-hover': 'var(--text-color-content-hover)',
        'tag': 'var(--tag-color)',
        'tag-hover': 'var(--tag-color-hover)',
        border: 'var(--border-color)',
        'icon-hover': 'var(--icon-color-hover)',
        'edu-heading': 'var(--education-color-heading)',
        'pulse-color': 'var(--pulse-animation-color)',
        'skills': 'var(--skills-tag-color)',
        'skills-hover': 'var(--skills-tag-color-hover)', 
        'skills-text': 'var(--skills-tag-text-color)',
        'modal-container': 'var(--modal-container-bg-color)',
        'modal-btn': 'var(--modal-btn-border-color)',
        'modal-btn-hover': 'var(--modal-btn-color-hover)',

      }
    },
  },
  plugins: [],
} satisfies Config;
