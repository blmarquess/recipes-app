import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../components/assets/Input';
import ButtonSD from '../components/assets/ButtonSD';
import { DispatchContext } from '../context/store';
import { login } from '../context/action';
import LayoutPage from '../components/assets/LayoutPage';

const loginP = `loginPage p-10 border-2 rounded-xl shadow-md w-full h-full justify-center
grid grid-1 alingn-center m-t-30`;

const Login = () => {
  const dispatch = useContext(DispatchContext);
  const [loginState, setInfLogin] = useState({ user: '', psw: '', redirect: false });
  const stateUpdate = (e) => setInfLogin({ ...loginState, [e.name]: e.value });

  const PSW_MIN = 6;
  const dotCom = /^[a-z0-9._-]+@[a-z0-9]+\.com$/;
  const isValidForm = () => loginState.psw.length > PSW_MIN
    && dotCom.test(loginState.user);

  return (
    <LayoutPage className="h-full">
      <section
        className={ loginP }
      >
        <span>Login:</span>
        <Input
          type="email"
          name="user"
          data-testid="email-input"
          wsize="100%"
          value={ loginState.user }
          onChange={ ({ target }) => stateUpdate(target) }
        />
        <span>Senha:</span>
        <Input
          value={ loginState.psw }
          type="password"
          name="psw"
          data-testid="password-input"
          wsize="100%"
          onChange={ ({ target }) => stateUpdate(target) }
        />
        <Link to="./foods">
          <ButtonSD
            wsize="100%"
            msize="20px 0 0 0"
            data-testid="login-submit-btn"
            onClick={ () => dispatch(login(loginState.user)) }
            disabled={ !isValidForm() }
          >
            Entrar
          </ButtonSD>
        </Link>
      </section>
    </LayoutPage>
  );
};

export default Login;
