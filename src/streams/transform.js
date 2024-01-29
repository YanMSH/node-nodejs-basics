import stream from "node:stream";

const transform = async () => {

    const transform = new stream.Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        }
    });

    process.stdin.pipe(transform).pipe(process.stdout);
};

await transform();