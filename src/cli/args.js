const parseArgs = () => {
    // Write your code here 
    const  arrArguments = process.argv;
    arrArguments.forEach((item, index) => {
        if (item.startsWith('--')) {
            console.log(`${item.slice(2)} is ${arrArguments[index + 1]}`)
        }
    })
};

parseArgs();