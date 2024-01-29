import crypto from 'crypto';
import fs from 'node:fs';

const calculateHash = async () => {

    const FILE_DEST = 'files';
    const FILE_NAME = 'fileToCalculateHashFor.txt';

    const hash = crypto.createHash('sha256');
    const input = fs.createReadStream(`${FILE_DEST}/${FILE_NAME}`);

    input.on('readable', () => {
        const data = input.read();
        if (data) {
            hash.update(data);
        } else {
            console.log(`${hash.digest('hex')}`);
        }
    });
};

await calculateHash();