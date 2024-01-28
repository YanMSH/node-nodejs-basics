import fs from 'node:fs';

const list = async () => {
    const ERR_STRING = 'FS operation failed';
    const FILE_DEST = 'files';

    try {
         fs.promises.readdir(FILE_DEST)            
            .catch(err => {
                if (err) {
                    throw new Error(ERR_STRING);
                }
            })
            .then(files => {
                files.forEach(file => {
                    console.log(file);
            })
         });
    } catch {
        throw new Error(ERR_STRING);
    }
};

await list();