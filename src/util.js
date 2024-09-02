function calculateOutput(inUnit, quantity, outUnit, conversionTable) {
  if (!Object.keys(conversionTable).includes(inUnit) || !Object.keys(conversionTable).includes(outUnit)) {
    return 0;
  }
  let baseUnits = quantity * conversionTable[inUnit].relativeToBase;
  let output = baseUnits / conversionTable[outUnit].relativeToBase;
  return output.toFixed(3);
}

export { calculateOutput };
