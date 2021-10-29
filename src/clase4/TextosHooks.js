import { useState } from 'react';

const TextoHooks = () => {
  const [text, setText] = useState('');

  const handleChangeText = (e) => {
    let val = e.target.value;
    setText(val.replace('a', 'b'));
  };

  return (
    <>
      <input onChange={handleChangeText} value={text} type="text" />
    </>
  );
};

export default TextoHooks;
