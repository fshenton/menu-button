const path = require("path");

const src = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");

function buildConfig(env){
	const { NODE_ENV : environment } = env;

	let modeOptions;
	switch(environment) {
		case "development":
			modeOptions = {
				mode: "development",
				devServer: {
					contentBase: dist
				}
			}
			break;
		case "production":
		default:
			modeOptions = {
				mode: "production",
			}
			break;
	}

	const config = {
		entry: `${src}/index.js`,
		...modeOptions,
		output: {
			filename: "main.js",
			path: dist
		},
		module: {
			rules: [
				{
					test: /\.scss$/,
					use: [
						{
							loader: "style-loader"
						}, {
							loader: "css-loader"
							options: {
								modules: {
									localIdentName: "[folder]__[local]"
								}
							}
						}, {
							loader: "sass-loader"
						}
					]
				}
			]
		}
	};

	return config;
}



module.exports = buildConfig;