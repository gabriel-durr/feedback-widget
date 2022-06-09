module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                brand: {
                    300: "#D3c682",
                    500: "#C5B358",
                },
                borderRadius: {
                    md: "4px",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
