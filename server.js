import * as path from "path";
import {statSync} from "fs";


const DIR = path.resolve(import.meta.dir, "public");
const PORT = 3000;

const response_OPTIONS = {status: 404};
const statSync_OPTIONS = {bigint: false, throwIfNoEntry: false};


const badResponse = new Response("File not found", response_OPTIONS);


console.info("Watch:", DIR);
const server = Bun.serve({
    port: PORT,
    fetch(request) {
        let reqPath = new URL(request.url).pathname;
        console.info(request.method, reqPath);
        if (reqPath === "/") {
            reqPath = "/index.html";
        }
        const basePath = path.join(DIR, reqPath);
        console.info("file path:", basePath);
        let stat;
        try {
            stat = statSync(basePath, statSync_OPTIONS);
        } catch {};

        if (stat !== undefined && stat.isFile()) {
                return new Response(Bun.file(basePath));
        } else {
            console.warn(`WARNING: No such file or directory: ${basePath}`);
        }
        return badResponse;
    }
});

console.info(`Server listening on http://localhost:${server.port}`);
