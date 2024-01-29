import fs from "node:fs";

const write = async () => {

    const FILE_DEST = 'files';
    const FILE_NAME = 'fileToWrite.txt';

    const output = fs.createWriteStream(`${FILE_DEST}/${FILE_NAME}`);

    process.stdin.pipe(output);
};

await write();