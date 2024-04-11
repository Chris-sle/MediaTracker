function logginPageView() {
    const app = document.getElementById('app');
    app.innerHTML = /*HTML*/ `
        <div class="loginContainer">
            <div id="logginPageInputs">
                <input 
                    type="text" 
                    oninput="model.inputs.loginpage.username=this.value" 
                    placeholder="Enter Username"/>
                <input 
                    type="password" 
                    oninput="model.inputs.loginpage.passWord=this.value" 
                    placeholder="Enter Password"/>
            </div>
            <div class="ErrorMessage">${model.inputs.loginpage.errorMessage}</div>
            <div class="loginButtons">
                <button onclick="login()">Login</button>
                <button onclick="registrationInputs()">New User</button>
            </div>
        </div>
    `;
}

function registrationInputs() {
    document.getElementById('logginPageInputs').innerHTML = /*HTML*/`
    <input 
        type="text" 
        oninput="model.inputs.loginpage.username=this.value" 
        placeholder="Enter Username"/>
    <input 
        type="password" 
        oninput="model.inputs.loginpage.passWord=this.value" 
        placeholder="Enter Password"/>
    `;
}