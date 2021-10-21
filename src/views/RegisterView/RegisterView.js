import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { authOperations } from '../../redux/auth';
import { Forma, Label } from './RegisterView.styled';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Register</h1>

      <Forma onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Name
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={handleChange}
          />
        </Label>

        <Label>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
          />
        </Label>

        <Label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={handleChange}
          />
        </Label>

        <button type="submit">Sign Up</button>
      </Forma>
    </div>
  );
}
