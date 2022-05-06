import { fLMS, mLMS } from "./bmiLMSfacts.js";

/**
 * Source: Shypailo RJ (2020) Age-based Pediatric Growth Reference Charts.
 * Retrieved 5/6/2022 from the Baylor College of Medicine,
 * Children's Nutrition Research Center,
 * Body Composition Laboratory Web Site:
 * http://www.bcm.edu/bodycomplab/BMIapp/BMI-calculator-kids.html
 */

 function computePcnt(z) {
  var pP, pcnt;
  //
  pP = 1 - 1 / Math.sqrt(2 * 3.14159265) * Math.exp(-(Math.pow(Math.abs(z), 2)) / 2) * (0.4361836 * (1 / (1 + 0.33267 * Math.abs(z))) - 0.1201676 * Math.pow((1 / (1 + 0.33267 * Math.abs(z))), 2) + 0.937298 * Math.pow((1 / (1 + 0.33267 * Math.abs(z))), 3));
  //
  if (z > 0) {
      pcnt = pP * 100;
  } else {
      pcnt = 100 - (pP * 100);
  }
  return pcnt;
}

export function compute(age, bmi, sex) {
  var bmiLMS = new Array(3);
  if (sex == "0") {
      //female
      bmiLMS = fLMS(age);
  } else {
      //male
      bmiLMS = mLMS(age);
  }
  var L = bmiLMS[0];
  var M = bmiLMS[1];
  var S = bmiLMS[2];
  var z = (Math.pow((bmi / M), L) - 1) / (L * S);

  var pcnt = computePcnt(z);

  z = Math.round(z * 100) / 100;
  pcnt = Math.round(pcnt * 100) / 100;

  return { z, pcnt };
}