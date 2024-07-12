import sfTypography from '@storefront-ui/typography';
/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            colors: {
                'primary': {
                    '50': '#fbf6f5',
                    '100': '#f6ecea',
                    '200': '#f0dcd8',
                    '300': '#e4c3bd',
                    '400': '#d3a096',
                    '500': '#ba7264',
                    '600': '#aa6558',
                    '700': '#8e5347',
                    '800': '#77463d',
                    '900': '#643f38',
                    '950': '#351e1a',
                },
                secondary: {
                    '50': '#f1f9fa',
                    '100': '#dceef1',
                    '200': '#bddfe4',
                    '300': '#8fc7d1',
                    '400': '#64acba',
                    '500': '#3f8b9b',
                    '600': '#377283',
                    '700': '#325e6c',
                    '800': '#2f4f5b',
                    '900': '#2b434e',
                    '950': '#192b33',
                },
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui'],
                'heading': ['Arial', 'Georgia'],
            }
        }
    },
    plugins: [sfTypography]
}
