const parseArgs = () => {
    // Write your code here 
    console.log(process.argv);
    const  arrArguments = process.argv;
    arrArguments.forEach((item, index) => {
        if (item.startsWith('--')) {
            console.log(`${item.slice(2)}: ${arrArguments[index + 1]}`)
        }
    })
};

parseArgs();