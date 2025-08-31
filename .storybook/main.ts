const config = {
    stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [ '@storybook/addon-docs', '@storybook/addon-jest'],
    tags: ['autodocs'],
    framework: {name: '@storybook/nextjs', options: {}},
    staticDirs: ['../public'],
    docs: {autodocs: 'tag'},
};
export default config;
