const parseEnv = () => {
    let resultString = '';
    for (const variable in process.env) {
        if (variable.includes('RSS_')) {
            if (resultString) {
                resultString += `; ${variable}=${process.env[variable]}`;
            } else {
                resultString = `${variable}=${process.env[variable]}`;
            }
        }
    }
    if (resultString) {
        console.log(resultString);
    }
};

parseEnv();