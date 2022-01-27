import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userAction } from '../redux/actions';

import Input from '../components/assets/Input';
import ButtonSD from '../components/assets/ButtonSD';

const Login = () => {
  const [loginState, setInfLogin] = useState({ user: '', psw: '', redirect: false });
  const stateUpdate = (e) => setInfLogin({ ...loginState, [e.name]: e.value });
  const dispatch = useDispatch();

  const PSW_MIN = 6;
  const dotCom = /^[a-z0-9._-]+@[a-z0-9]+\.com$/;
  const isValidForm = () => loginState.psw.length > PSW_MIN
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
      <Link to="/foods">
        <ButtonSD
          data-testid="login-submit-btn"
          onClick={ () => dispatch(userAction(loginState.user)) }
          disabled={ !isValidForm() }
        >
          Entrar
        </ButtonSD>
      </Link>
    </div>
  );
};

export default Login;
