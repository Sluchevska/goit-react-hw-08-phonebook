import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { authOperations } from '../../redux/auth';
import { Forma, Label } from './RegisterView.styled';
import { BsPersonCheckFill } from "react-icons/bs";

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
    if (!name.trim() || !email.trim() || !password.trim()) {
      return toast.error('Please fill out all required fields!');
    } else if (password.length < 7) {
      return toast.info('The password should be least at 7 characters long');
    }
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Register</h1>
 
      <Forma onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
        <Label className="form-label">
          Name
          <input
            type="text"
            name="name"
            required
            value={name}
              onChange={handleChange}
              className="form-control"
          />
        </Label>
</div>
        <div className="form-group">
          <Label htmlFor="exampleInputEmail1" className="form-label">
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
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
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
           <div id="passwordHelpBlock" className="form-text">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </div>
        </div>
         
        

        <button type="submit">
          <BsPersonCheckFill/>
          Sign Up</button>
      </Forma>
    </div>
  );
}
