import fs from 'node:fs';

const copy = async () => {
    const ERR_STRING = 'FS operation failed';
    const COPY_DEST = 'files_copy';
    const FILE_DEST = 'files';
    try {
        fs.mkdir(COPY_DEST, {}, (err) => {
            if (err) {
                throw new Error(ERR_STRING);
            }
        });
         const files = await fs.promises.readdir(FILE_DEST);
         files.forEach(file => {
            fs.copyFile(`${FILE_DEST}/${file}`, `${COPY_DEST}/${file}`, fs.constants.COPYFILE_EXCL, err => {
                if (err) {
                    throw new Error(ERR_STRING);
                }
            });
         });
    } catch {
        throw new Error(ERR_STRING);
    }
};

await copy();