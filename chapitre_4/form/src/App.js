import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>

        <form>

          <div className= "mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter mail"></input>
          </div>

          <div>
            <label for="exampleFormControlInput1" class="form-label">Password</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter password"></input>
          </div>
        </form>


      </div>

    );

  }

}
export default App

