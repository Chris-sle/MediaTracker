function loginView() {
    const app = document.getElementById('app');

    if(model.inputs.loginpage.registerNewUser.isActive != true){

    app.innerHTML = /*HTML*/ `
        <div class="loginContainer">
            <div id="logginPageInputs">
                ${loginInputs()}
            </div>
            <div class="ErrorMessage">${model.inputs.loginpage.errorMessage}</div>
            <div id="loginButtons">
                <button onclick="login()">Login</button>
                <button onclick="changeHTML(true)">New User</button>
            </div>
        </div>
    `;
    } else {
        app.innerHTML = /*HTML*/ `
        <div class="loginContainer">
            <div id="logginPageInputs">
                ${registrationInputs()}
            </div>
            <div class="ErrorMessage">${model.inputs.loginpage.errorMessage}</div>
            <div id="loginButtons">
                <button onclick="changeHTML(false)">Sign in with existing user</button>
                <button onclick="registerNewUser()">Register</button>
            </div>
        </div>
        `;
    }
}

function loginInputs() {
    let html = /*HTML*/ `
        <input 
            type="text" 
            oninput="model.inputs.loginpage.username=this.value" 
            placeholder="Enter Username"/>
        <input 
            type="password" 
            oninput="model.inputs.loginpage.passWord=this.value" 
            placeholder="Enter Password"/>
    `;
    
    return html;
}

function registrationInputs() {
    let html = /*HTML*/`
    <input 
        type="text" 
        oninput="model.inputs.loginpage.registerNewUser.usernameInput=this.value" 
        placeholder="Enter Username"/>
    <input 
        type="password" 
        oninput="model.inputs.loginpage.registerNewUser.passWordInput=this.value" 
        placeholder="Enter Password"/>
    <input 
        type="password" 
        oninput="model.inputs.loginpage.registerNewUser.rePassWordInput=this.value" 
        placeholder="ReEnter Password"/>
    <input 
        type="text" 
        oninput="model.inputs.loginpage.registerNewUser.emailInput=this.value" 
        placeholder="Enter Email"/>
    `;

    return html;
}