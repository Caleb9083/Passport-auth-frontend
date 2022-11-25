import React, {useState} from 'react'
import "./Login.css"

import Button from 'react-bootstrap/esm/Button';
import Form from "react-bootstrap/Form"

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  
  const handleChange = (e) => {
    const newLoginData = { ...loginData };
    newLoginData[e.target.name] = e.target.value;
    setLoginData(newLoginData);
  };
  
  const {email, password} = loginData
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="login_container">
      <div className="login_top_text">
        <p className="top_text_large">Already have an account?</p>
        <p>Sign in with your email and password</p>
      </div>
      <Form onSubmit={(e) => handleSubmit(e)} style={{ color: "#034078" }}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            value={email}
            onChange={(e) => {
              handleChange(e);
            }}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            value={password}
            onChange={(e) => handleChange(e)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit">
          Sign in
        </Button>
      </Form>
    </div>
  )
}

export default Login