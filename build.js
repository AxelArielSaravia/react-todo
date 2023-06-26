import {readdirSync, appendFileSync, existsSync, rmSync} from "node:fs";
import * as path from "node:path";

const DEFAULT_PATH = path.join(import.meta.dir, "public");
const SRC_PATH = path.join(import.meta.dir, "src");
const BUILD_PATH = path.join(import.meta.dir, "build");

const rmOptions = {
    recursive: true,
    force: true
};


const production_build = {
    entrypoints: ["./src/index.jsx"],
    outdir: BUILD_PATH,
    minify: true
};

const development_build = {
    entrypoints: ["./src/index.jsx"],
    outdir: BUILD_PATH,
};

if (existsSync(BUILD_PATH)) {
    rmSync(BUILD_PATH, rmOptions);
}

const build = await Bun.build(
    Bun.env.production ? production_build
    : /*otherwise*/ development_build
);

if (!build.success) {
    console.log(build);
    throw Error("The build fails");
}

const dir = readdirSync(BUILD_PATH);
console.log(dir);

const cssFilePath = path.join(DEFAULT_PATH, "style.css");
const defaultCssPath = path.join(SRC_PATH, "style.css")
await Bun.write(cssFilePath, Bun.file(defaultCssPath));

for await (const filepath of dir) {
    const extname = path.extname(filepath);
    switch (extname) {
            //CSS simple bundler to the public dir
        case ".css":  {
            const readpath = path.join(BUILD_PATH, filepath);
            const file /*string*/ = await Bun.file(readpath).text();
            appendFileSync(cssFilePath, file);
        }; break;
            //copy the js file to the public dir
        default: {
            const writePath = path.join(DEFAULT_PATH, filepath);
            const copyPath = path.join(BUILD_PATH, filepath);
            Bun.write(Bun.file(writePath), Bun.file(copyPath));
        }; break;
    }
}

