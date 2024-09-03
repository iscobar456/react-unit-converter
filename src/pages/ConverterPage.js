import { RiArrowLeftRightLine } from "@remixicon/react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Nav from "../components/Nav";
import { calculateOutput } from "../util";
import "../css/ConverterPage.css";


function ConverterPage() {
  const [measure, conversionTable] = useLoaderData();

  return (
    <div className="converter-page">
      <main>
        <Nav measure={measure}/>
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

  useEffect(() => {
    setInputUnit(Object.keys(conversionTable)[0]);
    setOutputUnit(Object.keys(conversionTable)[0]);
  }, [conversionTable]);

  const generateUnitInputs = (name, unit, updateUnit) => (
    Object.keys(conversionTable).map(key => (
      <label htmlFor={name + "-input-" + key} key={key}>
        <input
          type="radio"
          name={name}
          id={name + "-input-" + key}
          value={key}
          checked={key === unit}
          onChange={(event) => { updateUnit(event.target.value) }} />
        { key }
      </label>
    ))
  )

  return (
    <form id="measurement-form">
      <fieldset name="in-quantity" className="quantity">
        <input
          type="text"
          name="quantity"
          id="quantity-input"
          defaultValue={inputQuantity}
          onChange={
            (event) => {setInputQuantity(parseFloat(event.target.value))}
          }/>
      </fieldset>
      <fieldset name="in-unit" className="units">
        <label htmlFor="in-unit-input">Input Unit</label>
        { generateUnitInputs("in-unit", inputUnit, setInputUnit) }
      </fieldset>
      <fieldset name="out-quantity" className="quantity">
        <output id="conversion-output" htmlFor="quantity-input">
          { calculateOutput(inputUnit, inputQuantity, outputUnit, conversionTable) }
        </output>
      </fieldset>
      <fieldset name="out-unit" className="units">
        <label htmlFor="out-unit-input">Output Unit</label>
        { generateUnitInputs("out-unit", outputUnit, setOutputUnit) }
      </fieldset>
    </form>
  );
}

export default ConverterPage;
