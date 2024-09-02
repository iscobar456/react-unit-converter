import { RiArrowLeftRightLine } from "@remixicon/react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Nav from "../components/Nav";
import { calculateOutput } from "../util";


function ConverterPage() {
  const [measure, conversionTable] = useLoaderData();

  console.log(conversionTable)

  return (
    <div className="converter-page">
      <Nav measure={measure}/>
      <main>
        <ConversionForm conversionTable={conversionTable} />
      </main>
    </div>
  );
}

function ConversionForm({ conversionTable }) {
  const [inputUnit, setInputUnit] = useState(
    Object.keys(conversionTable)[0]
  );
  const [outputUnit, setOutputUnit] = useState(
    Object.keys(conversionTable)[0]
  );
  const [inputQuantity, setInputQuantity] = useState(0);

  const generateUnitInputs = (name, unit, updateUnit) => (
    Object.keys(conversionTable).map(key => (
      <label for={"in-unit-input-" + key} key={key}>
        <input
          type="radio"
          name={name}
          id={"in-unit-input-" + key}
          value={key}
          checked={key === unit}
          onChange={(event) => { updateUnit(event.target.value) }} />
        { key }
      </label>
    ))
  )

  return (
    <form id="measurement-form">
      <fieldset name="in-quantity">
        <label for="quantity-input"># of { conversionTable[inputUnit].name }</label>
        <input
          type="text"
          name="quantity"
          id="quantity-input"
          defaultValue={inputQuantity}
          onKeyUp={
            (event) => {setInputQuantity(parseInt(event.target.value))}
          }/>
      </fieldset>
      <fieldset name="in-unit">
        <label for="in-unit-input">Input Unit</label>
        { generateUnitInputs("in-unit", inputUnit, setInputUnit) }
      </fieldset>
      <label for="conversion-output"># of { outputUnit }: </label>
      <output id="conversion-output" for="quantity-input">
        { calculateOutput(inputUnit, inputQuantity, outputUnit, conversionTable) }
      </output>
      <fieldset name="out-unit">
        <label for="out-unit-input">Output Unit</label>
        { generateUnitInputs("out-unit", outputUnit, setOutputUnit) }
      </fieldset>
    </form>
  );
}

export default ConverterPage;
