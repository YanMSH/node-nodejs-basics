import fs from "node:fs";

const read = async () => {

    const FILE_DEST = 'files';
    const FILE_NAME = 'fileToRead.txt';

    const input = fs.createReadStream(`${FILE_DEST}/${FILE_NAME}`);

    input.on('readable', () => {
        const data = input.read();
        if (data) {
            process.stdout.write(data);
        }
    });
};

await read();