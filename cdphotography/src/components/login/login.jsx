import {FaUser, FaLock} from 'react-icons/fa'
import {useState} from 'react';
import './login.css'


const login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log()
  return (

      <div className="container">
        <form onSubmit={handlesubmit}>
          <h1>login</h1>
          <div>
            <input type="email" placeholder= "E-mail"/>
            <FaUser className="icon"/>
          </div>
          <div>
            <input type="password" placeholder= "Senha"/>
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

export default login
