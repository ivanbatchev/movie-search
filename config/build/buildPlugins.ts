import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugins({
  paths: { html, favicon },
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new webpack.DefinePlugin({
      "process.env": {
        TOKEN: JSON.stringify(process.env.TOKEN),
      },
    }),
    new HTMLWebpackPlugin({
      template: html,
      favicon,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name]-[contenthash:8].css",
      chunkFilename: "css/[id]-[contenthash:8].[ext]",
    }),
  ];
}
