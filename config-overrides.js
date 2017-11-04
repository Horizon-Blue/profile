const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    const plugins = [
        ['import', { libraryName: 'antd', style: 'css' }],
        'transform-decorators-legacy',
        'transform-class-properties',
        [
            'module-resolver',
            {
                root: ['./src'],
                alias: {
                    '^@(.+)': './src/components/\\1',
                    info: './src/constants/info',
                },
            },
        ],
    ];

    for (let plugin of plugins) config = injectBabelPlugin(plugin, config);
    return config;
};
