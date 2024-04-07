import { BuildOptions } from "./types/config";
import { Configuration as DevServerConfig } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfig {
  const { port } = options;
  return {
    port,
    open: true,
    historyApiFallback: true,
  };
}
