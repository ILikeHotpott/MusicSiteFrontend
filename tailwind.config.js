const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            keyframes: {
                gradientFlow: {
                    '0%, 100%': {backgroundPosition: '0% 50%'},
                    '50%': {backgroundPosition: '100% 50%'},
                },
                rotate: {
                    '0%': {transform: 'rotateY(0deg)'},
                    '100%': {transform: 'rotateY(360deg)'},
                },
            },
            animation: {
                'gradient-flow': 'gradientFlow 10s ease infinite',
                rotate: 'rotate 20s infinite linear',
            },
            backgroundSize: {
                '300%': '300% 300%',
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
