import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  render() {
    // mon regex : "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
    return (
      <div>
        <h1>Login</h1>

        <form>
          <div class="form-group mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            
            <div class="invalid-feedback">
              Please enter an email.
            </div>
              {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
          </div>

          <div class="form-group mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>

          <div class=" form-check mb-3">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>




      </div>

    );

  }

}
export default App

