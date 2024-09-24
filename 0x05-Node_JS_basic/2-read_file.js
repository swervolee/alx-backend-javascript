const fs = require('fs');

function countStudents(filename) {
  try {
    const fileContents = fs.readFileSync(filename, 'utf8');
    const lines = fileContents.split('\n').filter((line) => line.trim() !== '');

    const fields = {};
    let totalStudents = 0;

    for (let i = 1; i < lines.length; i += 1) {
      const lineContent = lines[i].split(',');

      if (lineContent[3]) {
        const field = lineContent[3].trim();

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(lineContent[0].trim());
        totalStudents += 1;
      }
    }

    console.log(`Number of students: ${totalStudents}`);

    for (const field in fields) {
      if (fields.hasOwnProperty(field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
