const config = {
    stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-essentials', '@storybook/addon-docs'],
    tags: ['autodocs'],
    framework: {name: '@storybook/nextjs', options: {}},
    staticDirs: ['../public'],
    docs: {autodocs: 'tag'},
};
export default config;
