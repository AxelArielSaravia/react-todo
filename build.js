import {readdirSync, appendFileSync} from "node:fs";
import * as path from "node:path";

import {HTMLMinify} from "./utils.js";
import CleanCSS from "clean-css";

console.info("Global dir:", import.meta.dir);

const PRODUCTION_ENV = Bun.env.NODE_ENV === "production";
console.info("Production:", PRODUCTION_ENV);

const PUBLIC_PATH = path.join(import.meta.dir, "public");
const SRC_PATH = path.join(import.meta.dir, "src");

console.info("PUBLIC_PATH", PUBLIC_PATH);
console.info("SRC_PATH", SRC_PATH);

/*********************
* JS Builds
**********************/
{
    const config_build = {
        entrypoints: ["./src/index.jsx"],
        outdir: PUBLIC_PATH,
        minify: PRODUCTION_ENV
    };
    const build = await Bun.build(config_build);
    if (!build.success) {
        console.error(build);
        throw Error("Se rompio esta vaina wacho, el js build. Fijate que ondera");
    }
    console.info("JS Build Successful");
}

/*********************
* CSS Builds
**********************/
{
    const CSS_FILE = "style.css";
    const CSS_EXT = ".css";
    const default_css_file = path.join(SRC_PATH, CSS_FILE);
    const public_css_file = path.join(PUBLIC_PATH, CSS_FILE);

    if (PRODUCTION_ENV) {
        const file = await Bun.file(default_css_file).text();
        const s = new CleanCSS().minify(file).styles;
        await Bun.write(
            Bun.file(public_css_file),
            s
        );
    } else {
        await Bun.write(
            Bun.file(public_css_file),
            Bun.file(default_css_file)
        );
    }

    const read_dir_path = path.join(SRC_PATH, "components");
    const read_dir = readdirSync(read_dir_path);
    for (const file_name of read_dir) {
        const extname = path.extname(file_name);
        if (extname !== CSS_EXT) {
            continue;
        }
        const read_file = path.join(read_dir_path, file_name);
        const file = await Bun.file(read_file).text();

        if (PRODUCTION_ENV) {
            let s = new CleanCSS().minify(file).styles;
            appendFileSync(public_css_file, s);
        } else {
            appendFileSync(public_css_file, file);
        }
    }
    console.info("CSS Build Successful");
}


/*********************
* HTML Builds
**********************/
{
    const HTML_FILES = ["index.html", "404.html"];
    for (const html_file of HTML_FILES) {
        const read = path.join(SRC_PATH, html_file);
        const public_file = path.join(PUBLIC_PATH, html_file);
        if (PRODUCTION_ENV) {
            const html_string = await Bun.file(read).text();
            const html_mini = HTMLMinify(html_string);
            await Bun.write(Bun.file(public_file), html_mini);
        } else {
            await Bun.write(
                Bun.file(public_file),
                Bun.file(read)
            );
        }
    }
    console.info("HTML Build Successful");
}


/*********************
* MANIFEST Builds
**********************/
{
    const src_file = path.join(SRC_PATH, "manifest.json");
    const public_file = path.join(PUBLIC_PATH, "app.webmanifest");
    Bun.write(Bun.file(public_file), Bun.file(src_file));
}
