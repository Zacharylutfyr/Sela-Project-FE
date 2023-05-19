<template>
  <div class="forgot-password">
    <div class="container">
      <div class="login-box">
        <div class="left-container">
          <img src="../../assets/images/forgot-password-image.jpg" alt="background-1.png" />
        </div>
        <div class="right-container d-flex flex-column justify-content-between">
          <div class="right-top text-center">
            <img class="logo" src="../../assets/images/sela-logo.jpg" alt="" />
            <p class="fw-bold right-top-paragraf">
              Lost Your Password ? Please Enter Your Email Address. You Will
              receive a link to create a new Password via Email
            </p>
          </div>
          <div class="right-middle">
            <form class="user">
              <div class="form-group">
                <input
                  type="email"
                  class="form-control form-control-user input"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email Address..."
                />
              </div>
              <button type="button" class="btn btn-danger">
                Reset Password
              </button>
            </form>
          </div>
          <div class="right-botom">
            <div class="text-center">
              <a class="small" href="1-register.html">Create an Account!</a>
            </div>
            <div class="text-center">
              <a class="small" href="2-login.html"
                >Already have an account? Login!</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
