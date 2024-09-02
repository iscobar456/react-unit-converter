function calculateOutput(inUnit, quantity, outUnit, conversionTable) {
  let baseUnits = quantity * conversionTable[inUnit].relativeToBase;
  let output = baseUnits / conversionTable[outUnit].relativeToBase;
  return output;
}

export { calculateOutput };
