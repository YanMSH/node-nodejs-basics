const parseArgs = () => {
    let resultString = '';
    process.argv.forEach((arg, i) => {
        if (arg.startsWith('--')) {
            if (process.argv[i + 1]){
                if (resultString) {
                    resultString += `, ${arg} is ${process.argv[i + 1]}`
                } else {
                    resultString = `${arg} is ${process.argv[i + 1]}`
                }
            }
        }
    })
    if (resultString) {
        console.log(resultString);
    }
};

parseArgs();