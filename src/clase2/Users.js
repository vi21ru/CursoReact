import { render } from '@testing-library/react';
import React from 'react';

const ListaUsers = () => {
  const users = ['sergio', 'victoria', 'iván', 'liviu'];

  return (
    <ul>
      {users.map((user) => {
        <li key={Math.random()}>{user.toString()}</li>;
      })}
    </ul>
  );
};

export default ListaUsers;
