const fs = require('fs');

const pathToFile = process.argv[2];  // get file path

try {

  const fileInfo = fs.statSync(pathToFile);  // get info


    // checking, if it is a file
    if (fileInfo.isFile()) {  
        console.log(`${pathToFile} jest plikiem, a to jego zawartość: `);

        // read from file
        const contents = fs.readFileSync(pathToFile, 'utf8');
        console.log(contents);
    }

    else if (fileInfo.isDirectory()) {console.log(`${pathToFile} jest katalogiem`);} 
    else {console.log(`${pathToFile} ani nie jest plikiem, ani katalogiem`);}
} 

catch (error) {
    console.error(`Błąd: ${error.message}`);
}