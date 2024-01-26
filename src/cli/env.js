const parseEnv = () => {
    // Write your code here 
    const envVarObj = process.env;
    for (let key in envVarObj) {
        if (key.startsWith('RSS_')) {
            console.log(`${key}=${envVarObj[key]}`);
        }
    }
};

parseEnv();