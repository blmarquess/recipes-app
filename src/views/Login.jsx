import React, { useState } from 'react';
import Input from '../components/assets/Input';
import ButtonSD from '../components/assets/ButtonSD';

const Login = () => {
  const [loginState, setInfLogin] = useState({ user: '', psw: '' });
  const stateUpdate = (e) => setInfLogin({ ...loginState, [e.name]: e.value });
  const PSW_MIN = 6;
  const dotCom = /^[a-z0-9._-]+@[a-z0-9]+\.com$/;
  const isValidForm = () => loginState.psw.length >= PSW_MIN
    && dotCom.test(loginState.user);

  return (
    <div className="loginView">
      <span>Login:</span>
      <Input
        type="email"
        name="user"
        data-testid="email-input"
        wsize="200px"
        value={ loginState.user }
        onChange={ ({ target }) => stateUpdate(target) }
      />
      <span>Senha:</span>
      <Input
        value={ loginState.psw }
        type="password"
        name="psw"
        data-testid="password-input"
        wsize="200px"
        onChange={ ({ target }) => stateUpdate(target) }
      />
      <ButtonSD
        data-testid="login-submit-btn"
        disabled={ !isValidForm() }
      >
        Entrar
      </ButtonSD>
    </div>
  );
};

export default Login;
