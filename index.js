import csv from 'csv-parser';
import fs from 'fs';
import { compute } from './src/compute.js';
import { createObjectCsvWriter } from 'csv-writer';

const csvWriter = createObjectCsvWriter({
  path: 'output.csv',
  header: [
    {id: 'age', title: 'age'},
    {id: 'bmi', title: 'bmi'},
    {id: 'sex', title: 'sex'},
    {id: 'score', title: 'score'},
    {id: 'percentile', title: 'percentile'},
  ]
});

const records = [];

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', ({ age, bmi, sex }) => {
    const { z, pcnt } = compute(age, bmi, sex);
    console.log(z, pcnt, age, bmi, sex);
    records.push({ score: z, percentile: pcnt, age, bmi, sex });
  })
  .on('end', () => {
    csvWriter
      .writeRecords(records)
      .then(()=> console.log('The CSV file was written successfully'));
  });
