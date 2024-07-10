import { Input } from '../components/Input/Input';
import { Button } from '../components/Button/Button';

export function LoginPage({handleLogin,setPassword, setUsername}) {

    return (
        <form >
            <h1>Connexion</h1>
            <Input placeholder="username" type="text" onChange={ (e) => setUsername(e.target.value)}/>
            <Input placeholder="password" type="password" onChange={ (e) => setPassword(e.target.value)}/>
            <Button handleLogin={handleLogin} type="submit" buttonText="se connecter"></Button>
        </form>
    );
}