# CSV BMI BY AGE

This script is completely based on the Age-based Pediatric Growth Reference Charts on the Baylor College of Medicines website on the 6th of May 2022.

> Shypailo RJ (2020) Age-based Pediatric Growth Reference Charts.Retrieved 5/6/2022 from the Baylor College of Medicine, Children's Nutrition Research Center, Body Composition Laboratory Web Site: http://www.bcm.edu/bodycomplab/BMIapp/BMI-calculator-kids.html

The only purpose of this script is to make it easy to calculate the z-score and percentiles from a csv file in bulk.

## Requirements

- [NodeJS](https://nodejs.org/en/) (created in v14.17.0)
- npm (installed with node)

## Usage

1. Install all requirements
2. Open the terminal in this folder
3. Run `npm install`
4. Add a data.csv file to the project folder with the following columns: `age`, `bmi` and `sex`
5. Run `npm start`
6. The result will be in the file `output.csv`