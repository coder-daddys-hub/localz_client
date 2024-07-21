import './Select.css';

export function Select ({ labelText, idSelect, nameSelect, handleSelect, selectOptions, optionKey, optionValue, optionText }) {
  return ( 
    <>
      <label htmlFor={idSelect}> {labelText}  </label>
      <select type="text" className="select" id={idSelect} name={nameSelect} onChange={ handleSelect }>
        { selectOptions.map((property) => <option key={ property[optionKey] } value={ property[optionValue] } > { property[optionText] } </option>)};
      </select>
      </>
    )
  }