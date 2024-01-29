import child_process from "child_process";

const spawnChildProcess = async (args) => {
    await child_process.fork('./files/script.js', args);
};

// Put your arguments in function call to test this functionality
await spawnChildProcess([99, 'a', true]);
