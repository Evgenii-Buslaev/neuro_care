import MiniCssExtractPlugin from 'mini-css-extract-plugin';
export default function buildLoaders(options) {
    var isDev = options.mode === 'development';
    var scssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : '[hash:base64:8]',
            }
        },
    };
    var scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            scssLoaderWithModules,
            "sass-loader",
            "postcss-loader"
        ],
    };
    var cssLoader = {
        test: /\.css$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader"
        ],
    };
    var tsLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: isDev
                }
            }
        ],
        exclude: /node_modules/,
    };
    var assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };
    var svgLoader = {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true
                                }
                            }
                        ]
                    }
                },
            },
        ],
    };
    return [
        scssLoader,
        cssLoader,
        tsLoader,
        assetsLoader,
        svgLoader
    ];
}
