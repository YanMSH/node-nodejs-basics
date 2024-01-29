import fs from 'node:fs';

const create = async () => {
    const FILE_PATH = 'files/fresh.txt';
    const FILE_DATA = 'I am fresh and young';

    fs.readFile(FILE_PATH, (err) => {
        if (err) {
            fs.writeFile(FILE_PATH, FILE_DATA, err => console.log(err));
        } else {
            throw new Error('FS operation failed');
        }
    })
};

await create();