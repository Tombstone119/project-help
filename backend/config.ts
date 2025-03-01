import path from "path";
import dotenv from "dotenv";
import moduleAlias from "module-alias";

// Check the env
const NODE_ENV = process.env.NODE_ENV ?? "development";

// Configure "dotenv"
const envPath = path.join(__dirname, `./config/.env.${NODE_ENV}`);
const result = dotenv.config({ path: envPath });

// eslint-disable-next-line no-console
console.log("__dirname: =-->", __dirname);

if (result.error) {
  throw result.error;
}

// Configure moduleAlias
if (__filename.endsWith("js")) {
  moduleAlias.addAlias("@src", path.join(__dirname, "dist"));
}
