const fs = require('fs');

function countStudents(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, fileContents) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const data = fileContents.split('\n').filter((line) => line.trim() !== '');
        const field = {};
        let total = 0;

        for (let i = 1; i < data.length; i += 1) {
          const line = data[i];
          const line_array = line.split(",");
          const fd = line_array[3]
          if (!field[line_array[3]]) {
            field[line_array[3]] = [];
          }
          field[line_array[3]].push(line_array[0]);
          total += 1;
        }

        console.log(`Number of students: ${total}`);
        for (const f in field) {
          if (Object.prototype.hasOwnProperty.call(field, f)) {
            console.log(`Number of students in ${f}: ${field[f].length}. List: ${field[f].join(', ')}`);
          }
        }
      } catch (error) {
        throw Error('Cannot load the database');
      }
      resolve();
    });
  });
}

module.exports = countStudents;
