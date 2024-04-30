import {FaUser, FaLock} from 'react-icons/fa'
import {useState} from 'react';
import './login.css'


const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const response = fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    });


  }

  return (

      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>login</h1>
          <div className= "input-field">
            <input type="email" placeholder= "E-mail"
            onchange={(e) => setUsername(e.target.value )} />
            <FaUser className="icon"/>
          </div>
          <div className= "input-field">
            <input type="password" placeholder= "Senha"
            onchange={(e) => setPassword(e.target.value )}/>
            <FaLock className="icon"/>
          </div>

          <div className="recall-forget">
            <label>
              <input type="checkbox"/>
                Lembrar-me
            </label>
            <a href="#">Esqueci minha senha</a>
          </div>

          <button>Entrar</button>

          <div className="signup_link">
            <p>Não tem conta?</p> <a href="#">Registar</a>
          </div>
        </form>
      </div>

  )
}

export default Login
