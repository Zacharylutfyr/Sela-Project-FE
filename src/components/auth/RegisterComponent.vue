<template>
   <div class="register">
      <div class="container">
        <div class="login-box">
          <div class="left-container">
            <img src="../../assets/images/register-image.jpg" alt="background-1.png" />
          </div>
          <div class="right-container">
            <form class="user" action="">
              <img class="logo" src="../../assets/images/sela-logo.jpg" alt="" />
              <div class="right-container-top"></div>
              <div class="form-group row name-input">
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control form-control-user input-name"
                    id="exampleFirstName"
                    placeholder="First Name"
                  />
                </div>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control form-control-user input-name"
                    id="exampleLastName"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="input form-control form-control-user"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="input form-control form-control-user"
                  id="exampleInputPassword"
                  placeholder="Password"
                />
              </div>

              <hr />
              <button type="button" class="btn button btn-blue">
                Register Account
              </button>
              <hr />

              <div class="text-center">
                <a class="small" href="3-forgot-password.html"
                  >Forgot Password?</a
                >
              </div>
              <div class="text-center">
                <a class="small" href="2-login.html"
                  >Already have an account? Login!</a
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  