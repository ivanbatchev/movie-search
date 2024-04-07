import { buildPlugins, buildLoaders, buildResolvers } from ".";
import { buildDevServer } from "./buildDevServer";
import { BuildOptions } from "./types/config";
import webpack from "webpack";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const {
    mode,
    paths: { build, entry },
    isDev,
  } = options;

  return {
    mode,
    entry,
    output: {
      filename: "[name].[contenthash].js",
      path: build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devtool: isDev && "inline-source-map",
    devServer: isDev && buildDevServer(options),
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
}
