import { useRef } from 'react';

const LoginHooks = () => {
  const userRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userRef.current.value, passwordRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={userRef} type="text"></input>
      <input ref={passwordRef} type="text"></input>
      <button>Login</button>
    </form>
  );
};
export default LoginHooks;
