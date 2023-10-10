import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {


      letterSpacing :{
        wide : '0.125em'
      },




      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'construction-bg': "url('/construction.jpg')",
        'email-icon': "url('../public/email.png')",
        'link-icon': "url('../public/link.png)"
      },
    },
  },
  plugins: [],
}
export default config
