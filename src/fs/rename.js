import fs from 'node:fs';

const rename = async () => {
    const ERR_STRING = 'FS operation failed';
    const FILE_PATH = 'files';
    const OLD_FILENAME = 'wrongFilename.txt';
    const NEW_FILENAME = 'properFilename.md';

    try {
        const files = await fs.promises.readdir(FILE_PATH);
        if (files.includes(NEW_FILENAME)) {
            throw new Error(ERR_STRING);
        }
        fs.promises.rename(`${FILE_PATH}/${OLD_FILENAME}`, `${FILE_PATH}/${NEW_FILENAME}`)
            .catch(err => {
                if (err) {
                    throw new Error(ERR_STRING);
                }
            });
    } catch {
        throw new Error(ERR_STRING);
    }
};

await rename();