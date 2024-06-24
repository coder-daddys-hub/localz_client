import "./Input.css";

export function Input({ onChange , placeholder, type, defaultValue}) {
    return (
        <input className="input" onChange={onChange} placeholder={placeholder} type={type} defaultValue={defaultValue} />
    );
    }