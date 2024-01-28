import fs from 'node:fs';

const read = async () => {
    const ERR_STRING = 'FS operation failed';
    const FILE_DEST = 'files';
    const FILE_NAME = 'fileToRead.txt';

    try {
         fs.promises.readFile(`${FILE_DEST}/${FILE_NAME}`, { encoding: 'utf8' })            
            .catch(err => {
                if (err) {
                    throw new Error(ERR_STRING);
                }
            })
            .then(fileData => {
                console.log(fileData);
         });
    } catch {
        throw new Error(ERR_STRING);
    }
};

await read();