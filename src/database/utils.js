const fs = require('fs');

const saveToDatabase = (DB) => {
  fs.writeFile(
    './src/database/db.json',
    JSON.stringify(DB, null, 2),
    {
      encoding: 'utf-8',
    },
    (err) => {
      if (err) {
        console.error(err);
        return;
      } else {
        console.log('File written successfully\n');
      }
    }
  );
};

module.exports = { saveToDatabase };
