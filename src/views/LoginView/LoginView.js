/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { toast } from 'react-toastify';
import { Form, Label } from './LoginView.styled';
import {BsFillKeyFill } from "react-icons/bs";
import { Button, Container, Title } from 'views/RegisterView/RegisterView.styled';
import { Span } from 'components/AuthNav/AuthNav.styled';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    if (!email.trim() || !password.trim()) {
      return toast.error('Not all fields are filled in!');
    } else if (password.length < 7) {
      return toast.info('Password is too short -shoud be 7 characters minimum');
    }
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Title>Log in</Title>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          <Label htmlFor="exampleInputEmail1" className="form-label ">
            Email address
          </Label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
         
        </div>

        <div className="form-group">
          <Label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </Label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
   
        <Button type="submit" className="btn btn-primary">
          <BsFillKeyFill />
          <Span>
          Sign In
          </Span></Button>
      </Form>
    </Container>
  );
}
