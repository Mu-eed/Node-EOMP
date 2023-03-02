<template >
  <div class="container">
        <div class="form-body">
        <div class="row">
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items" style="background-color: rgb(0,0,0,0.3);">
                        <h3>Register</h3>
                        <p>Fill in the data below to register your account.</p>
                        <form class="requires-validation" novalidate>

                            <div class="col-md-12">
                               <input class="form-control" type="text" name="name" placeholder="Full Name" required>
                               <div class="valid-feedback">Username field is valid!</div>
                               <div class="invalid-feedback">Username field cannot be blank!</div>
                            </div>

                            <div class="col-md-12">
                                <input class="form-control" type="email" name="email" placeholder="E-mail Address" required>
                                 <div class="valid-feedback">Email field is valid!</div>
                                 <div class="invalid-feedback">Email field cannot be blank!</div>
                            </div>

                           <div class="col-md-12">
                              <input class="form-control" type="password" name="password" placeholder="Password" required>
                               <div class="valid-feedback">Password field is valid!</div>
                               <div class="invalid-feedback">Password field cannot be blank!</div>
                           </div>


                           <div class="col-md-12 mt-3">
                            <label class="mb-3 mr-1" for="gender">Gender: </label>
                            <br>

                            <input  type="checkbox" class="form-check-input" name="gender" id="male" autocomplete="off" required>
                            <label class="form-check-label" for="male"> Male </label>
                            <br>

                            <input  type="checkbox" class="form-check-input" name="gender" id="female" autocomplete="off" required>
                            <label class="form-check-label" for="female"> Female </label>
                            <br>

                            <input type="checkbox" class="form-check-input" name="gender" id="prefernot" autocomplete="off" required>
                            <label class="form-check-label" for="prefernot"> Prefer not to say</label>
                               <div class="valid-feedback mv-up">You selected a gender!</div>
                                <div class="invalid-feedback mv-up">Please select a gender!</div>
                            </div>


                            <div class="form-button mt-3">
                                <button id="submit" type="submit" class="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>


    <main class="min-vh-100">
        <div class="container ">
             <h1>Login</h1>
            <div class="account">
             <p>Create a new account 
                <router-link to="/register">here</router-link>.</p>
            </div>
            <form class="login" action="" method="post"> 
              <div><label for="username">Username</label>
               <input type="text" name="username" id="username"></div>
              <div><label for="password">Password</label>
                <input type="password" name="password" id="password"></div>
    
      <div class="actions">
        <input type="submit" name="login" value="Login">
        <router-link to="/forgot">I forgot my password</router-link> 
      </div>
    </form>
    </div>
    </main>
    
    
</template>
<script>
export default {
    
}
</script>
<style scoped>

.container{
    margin-top: 5rem;
    padding: 2rem;
    background-color: #ffffff7e;
    border-radius: 15px;
}

div.form {
  background-color: #ffffff7e;
  border-radius: 15px;
}
h1,
.login,
.account,
.contact{
  width:80%;
  margin: 0 auto;
}

@supports (display: flex) {
  body {
    padding:0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  h1, .login, .account, .contact {
    margin: 0;
    width: 80%;
  }
}

@supports (display: grid) {
  
  @media (min-width: 650px) {
    body {
      grid-template-columns: repeat(2, minmax(150px, 30%));
    }
    h1,
    .login {
      grid-column-end: span 2;
      width: auto;
    }
    .login > div {
      display: grid;
      grid-template-columns: 1fr 2fr;
      align-items: center;
    }
    .login > div.actions {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .account {
      padding: 0 10px 0 0;
      align-self: end;
      width: auto;
    }
    .contact {
      padding: 0 0 0 10px;
      width: auto;
    }
    input[type="submit"] {
      grid-column: 2;
    }
    .actions a {
      justify-self: end;
    }
  }
}

h1 {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding: 10px;
  font-size: 24px;
  line-height: 1.4;
}

.login {
  background-color: rgba(191, 216, 227, .4);
  border: 1px solid rgba(245, 204, 204, 0.8);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

.login > div {
  padding: 5px 0;
}

input[type="submit"] {
  border: 1px solid rgba(191, 216, 227, .8);
  border-radius: 5px;
  color: #fff;
  background-color: rgb(54, 134, 169);
  font-size: 110%;
}

input[type="text"],
input[type="password"] {
  border: 1px solid rgba(191, 216, 227, .8);
  padding: 5px;
  border-radius: 5px;
  font-size: 110%;
  width: 100%;
}

.actions a {
  font-size: 80%;
}
    
</style>