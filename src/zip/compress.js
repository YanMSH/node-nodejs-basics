import fs from "node:fs";
import zlib from "zlib";

const compress = async () => {
    const FILE_DEST = 'files';
    const FILE_NAME = 'fileToCompress.txt';
    const ARCHIVE_NAME = 'archive.gz';

    fs.createReadStream(`${FILE_DEST}/${FILE_NAME}`).pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(`${FILE_DEST}/${ARCHIVE_NAME}`));
};

await compress();