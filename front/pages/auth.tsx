import Login from "./login";
import SignUp from "./signup";

const Auth = () => {
  var isLogin:boolean = true;
  const changePage = () => {
    console.log(isLogin)
    isLogin = !isLogin;
  };

  return (
    <div>
      {!isLogin
        ? <Login/>
        : <SignUp/>
      }
      <button onClick={changePage}>change page</button>
    </div>
  )
}
export default Auth;