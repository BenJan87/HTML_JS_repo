const fs = require('fs');
const archiver = require('archiver');

const directory = 'helloWorld';
const zipFile = 'helloWorld.zip';

const output = fs.createWriteStream(zipFile);
const archive = archiver('zip', {
  zlib: { level: 9 }
});


archive.pipe(output);
archive.directory(directory, false);
archive.finalize();