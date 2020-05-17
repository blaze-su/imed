const path = require("path");
const withSass = require("@zeit/next-sass");
const withFonts = require("next-fonts");
const withImages = require("next-images");

const config = withSass({
    publicRuntimeConfig: {
        ENV: process.env,
        PROCESS_ENV_NODE_ENV: process.env.NODE_ENV,
        PROCESS_ENV_HOST_API: process.env.HOST_API,
        PROCESS_ENV_HOST_IMAGE: process.env.HOST_IMAGE,
    },
    typescript: {
        ignoreDevErrors: true,
    },
    cssModules: true,
    webpack(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            "@components": path.join(__dirname, "./src/components"),
            "@redux": path.join(__dirname, "./src/redux"),
            "@interfaces": path.join(__dirname, "./src/interfaces"),
            "@data": path.join(__dirname, "./src/data"),
            "@keys": path.join(__dirname, "./src/keys"),
        };

        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: "url-loader",
            },
        });

        return config;
    },
});

module.exports = withImages(withFonts(config));

// module.exports = {
//   env: {
//     textEnvExport: "TEST"
//   }
// }
