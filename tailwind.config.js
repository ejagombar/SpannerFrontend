const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: 'Inter',
            },
        },
    },

    darkMode: 'class',
    plugins: [
        nextui({
            themes: {
                dark: {
                    colors: {
                        primary: {
                            DEFAULT: '#3ea5ab',
                            foreground: '#000000',
                        },
                        focus: '#3ea5ab',
                    },
                },
                light: {
                    colors: {
                        primary: {
                            DEFAULT: '#3ea5ab',
                            foreground: '#000000',
                        },
                        focus: '#3ea5ab',
                    },
                },
            },
        }),
    ],
}
