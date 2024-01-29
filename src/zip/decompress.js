import fs from "node:fs";
import zlib from "zlib";

const decompress = async () => {
    const FILE_DEST = 'files';
    const FILE_NAME = 'fileToCompress.txt';
    const ARCHIVE_NAME = 'archive.gz';

    fs.createReadStream(`${FILE_DEST}/${ARCHIVE_NAME}`).pipe(zlib.createUnzip())
        .pipe(fs.createWriteStream(`${FILE_DEST}/${FILE_NAME}`));
};

await decompress();