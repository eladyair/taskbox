module.exports = {
    stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)', '../src/pages/**/*.stories.@(js|jsx|ts|tsx)'],
    staticDirs: ['../public'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-create-react-app', '@storybook/addon-interactions'],
    features: {
        postcss: false
    },
    framework: '@storybook/react',
    core: {
        builder: 'webpack4'
    }
}
