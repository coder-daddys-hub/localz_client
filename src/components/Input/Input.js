import "./Input.css";

export function Input({ onChange , placeholder, type }) {
    return (
        <input className="input" onChange={onChange} placeholder={placeholder} type={type} />
    );
    }