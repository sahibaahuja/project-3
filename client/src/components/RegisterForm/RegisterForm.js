import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../RegisterForm/registerform.css';

class RegisterForm extends Component {
  state = {
    email: '',
    password: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    const { email, password } = this.state;

    this.props.onSubmit(email, password);
    event.preventDefault();
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className='card-registerform'>
        <div className="card-header-registerform"><h1>Sign Up</h1><hr></hr><h4>Make this your drink destination!</h4></div>
        <div className="card-body">
          <form className='LoginForm' onSubmit={this.handleSubmit}>
            {/* <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div> */}
            <div className="form-group">
              <div className="card-header-registerform">
                {/* <label for="formGroupExampleInput"><h4>Email:</h4></label> */}
              </div>
              <div className="card-body">
                <input
                  style={{ padding: '2%' }}
                  className='form-control3'
                  id='email'
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={email}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            {/* <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text">a3b</span>
                </div> */}
            <div className="form-group">
              <div className="card-header-registerform">
                {/* <label for="formGroupExampleInput"><h4>Password:</h4></label> */}
              </div>
              <div className="card-body">
                <input
                  style={{ padding: '2%' }}
                  className='form-control4'
                  id='password'
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={password}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <Link to='/login'><button className='btn btn-primary btn-lg' type='submit'>Sign up</button></Link>
          </form>
        </div>
      </div>
    )
  }
}

export default RegisterForm;

