import '../Button/Button.css';

export function Button({className, handleClick, type,  buttonText}) {
    return (
        <button className={className} onClick={handleClick} type={type}>{buttonText}</button>
    );
}