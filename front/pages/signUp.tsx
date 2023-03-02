import { useDispatch } from 'react-redux'
import { auth } from '../slices/authSlice'

import AuthService from '../services/auth.service'

export default function SignUp() {
    const dispatch = useDispatch()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      const target = event.target as typeof event.target & {
          login: { value: string };
          password: { value: string };
        };
        const login = target.login.value;
        const password = target.password.value;

      let auths = AuthService.signUp(login, password)
      console.log(auths)
      dispatch(auth());
  }

    return (
      <div>
        <h1>Registr</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" id="login" name="login" required />
    
          <label htmlFor="pass">Pass</label>
          <input type="text" id="pass" name="pass" required />
    
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }