import { Input } from '../components/Input/Input';

export function LoginPage({handleLogin}) {
    return (
        <form >
            <h1>Connexion</h1>
            <Input placeholder="Username" type="text" defaultValue="username" onChange={ (e) => console.log(e.target.value)}/>
            <Input placeholder="password" type="password" deFaultValue="password" onChange={ (e) => console.log(e.target.value)}/>
            <button type="submit" onClick={handleLogin}>Submit</button>
        </form>
    );
}