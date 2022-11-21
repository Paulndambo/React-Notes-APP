import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext';

const LoginPage = () => {
  let {loginUser} = useContext(AuthContext)
  return (
    <div>
      <p>Login Here</p>
      <form onSubmit={loginUser}>
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LoginPage