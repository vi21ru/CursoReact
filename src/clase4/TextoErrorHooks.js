import { useState } from 'react';

const TextoErrorHooks = () => {
  const [show, isShown] = useState(false);

  const handleChange = (e) => {
    let text = e.target.value;
    if (text === 'Hooks') {
      isShown(!show);
    } else {
      isShown(false);
    }
  };

  return (
    <>
      <input type="text" onChange={handleChange}></input>
      <p>{show && 'ERROR!!!'}</p>
    </>
  );
};

export default TextoErrorHooks;
