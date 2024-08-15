import { createRequire } from "module";
import esbuild from "esbuild";

const require = createRequire(import.meta.url);
const pkg = require("./package");
const ppl = [pkg.author.name, ...pkg.contributors].join(", ");
const date = (new Date()).toDateString();
const banner = `/**
 * ${pkg.name} v${pkg.version} build ${date}
 * ${pkg.homepage}
 * Copyright ${date.slice(-4)} ${ppl}
 * @license ${pkg.license}
 */`;

esbuild.build({
	entryPoints: ["js/src/index.ts", "js/src/index.editor.ts"],
	outdir: "js/dist",
	external: Object.keys(pkg.peerDependencies || {}),
	minify: (process.env.NODE_ENV === "production"),
	watch: process.argv.includes("-w"),
	banner: { js: banner },
	logLevel: "info",
	format: "iife",
	bundle: true
}).catch(() => process.exit(1));
