/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'newsreader': ['Newsreader', 'serif'],
            },
            colors: {
                'dl-gray': '#555555'
            }
        },
    },
    plugins: [],
}

