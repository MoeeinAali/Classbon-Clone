import {Config} from "tailwindcss";
import {colord, extend} from "colord";
import mixPlugin from "colord/plugins/mix";

extend([mixPlugin]);


export function generateDarkenColorFrom(input: string, percentage = 0.07): string {
    return colord(input)
        .darken(percentage)
        .toHex();
}

export function generateForegroundColorFrom(input: string, percentage = 0.8): string {
    return colord(input)
        .mix(colord(input).isDark() ? "white" : "black", percentage)
        .toHex();
}

type ColorObject = {
    [key: string]: string;
};

type MainColors = {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
    info: string;
    success: string;
    warning: string;
    error: string;
    white: string;
}

const COLORS: MainColors = {
    white: "#ffffff",
    primary: "#007BEC",
    secondary: "#6c5ce7",
    accent: "#1FB2A5",
    neutral: "#2a323c",
    info: "#3abff8",
    success: "#36d399",
    warning: "#fbbd23",
    error: "#f87272",
}

export const tailwindColors: ColorObject = {
    current: "currentColor",
    transparent: "transparent",
    white: "#F9F9F9",
    primary: COLORS.primary,
    "primary-content": "#FFFFFF",
    "primary-focus": generateDarkenColorFrom(COLORS.primary),
    secondary: COLORS.secondary,
    "secondary-content": COLORS.white,
    "secondary-focus": generateDarkenColorFrom(COLORS.secondary),
    accent: COLORS.accent,
    "accent-content": COLORS.white,
    "accent-focus": generateDarkenColorFrom(COLORS.accent),
    neutral: COLORS.neutral,
    "neutral-content": generateForegroundColorFrom(COLORS.white),
    "neutral-focus": generateDarkenColorFrom(COLORS.neutral, 0.03),
    "base-25": "#353d47",
    "base-50": "#2a323c",
    "base-75": "#20272e",
    "base-100": "#1d232a",
    "base-200": "#191e24",
    "base-300": "#15191e",
    "base-content": "#A6ADBB",
    info: COLORS.info,
    "info-content": generateForegroundColorFrom(COLORS.info),
    success: COLORS.success,
    "success-content": generateForegroundColorFrom(COLORS.success),
    warning: COLORS.warning,
    "warning-content": generateForegroundColorFrom(COLORS.warning),
    error: COLORS.error,
    "error-content": generateForegroundColorFrom(COLORS.error),
    "gradient-first": "#34eaa0",
    "gradient-second": "#0fa2e9",
};

const config: Config = {
    content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        colors: tailwindColors,
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                lg: '3rem',
                xl: '4rem',
            },
        },
        extend: {
            backgroundImage: {
                'hero-pattern': "url('/images/tile.svg')"
            }
        }
    },
    darkMode: "class",
    plugins: [],
};
export default config;