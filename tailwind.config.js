module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {

                    "primary": "#f27b63",

                    "secondary": "#ccb614",

                    "accent": "#d8434a",

                    "neutral": "#151628",

                    "base-100": "#FAF9FA",

                    "info": "#4898D5",

                    "success": "#33CC80",

                    "warning": "#FDDA68",

                    "error": "#F61340",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
}