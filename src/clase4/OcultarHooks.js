import { useEffect, useState } from 'react';

const OcultarHooks = (props) => {
  useEffect(() => {
    console.log(props.show);
    console.log('Actualizando!!');
  }, [props.show]);

  useEffect(() => {
    return () => {
      console.log('Desmontado!!');
    };
  }, []);

  return (
    <>
      <h1>Componente</h1>
    </>
  );
};

export default OcultarHooks;
