import fs from 'node:fs';

const remove = async () => {
    const ERR_STRING = 'FS operation failed';
    const FILE_PATH = 'files';
    const FILENAME = 'fileToRemove.txt';

    try {
        const files = await fs.promises.readdir(FILE_PATH);
        if (!files.includes(FILENAME)) {
            throw new Error(ERR_STRING);
        }
        fs.promises.rm(`${FILE_PATH}/${FILENAME}`)
            .catch(err => {
                if (err) {
                    throw new Error(ERR_STRING);
                }
            });
    } catch {
        throw new Error(ERR_STRING);
    }
};

await remove();