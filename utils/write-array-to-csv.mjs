import { writeFile } from 'node:fs';

function writeToCsv(arr, fileName) {
  const array = [Object.keys(arr[0])].concat(arr);

  const csv = array
    .map((row) => {
      const values = Object.values(row);
      let str = '';
      for (let i = 0; i < values.length; i++) {
        const value = values[i];
        if (Array.isArray(value)) {
          str += `"${value
            .map((temp) =>
              typeof value === 'object' ? JSON.stringify(temp) : temp
            )
            .toString()
            .replaceAll('"', '""')}"`;
        } else {
          str += value.toString();
        }

        if (i < values.length - 1) {
          str += ',';
        }
      }

      return str;
    })
    .join('\n');

  writeFile(`${fileName}.csv`, csv, function (err) {
    if (err) {
      throw err;
    }

    console.log(`Done writing ${fileName}`);
  });
}
