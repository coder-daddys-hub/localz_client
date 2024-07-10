export function Button({className, handleLogin, type,  buttonText}) {
    return (
        <button className={className} onClick={handleLogin} type={type}>{buttonText}</button>
    );
}