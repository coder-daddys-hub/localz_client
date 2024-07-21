import "./Input.css";

export function Input({ labelName, onChange , placeholder, type }) {
    return (
        <>
            <label> {labelName} </label>
            <input className="input" onChange={onChange} placeholder={placeholder} type={type} />
        </>
    );
    }