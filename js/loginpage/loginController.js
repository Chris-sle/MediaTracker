function login() {
    let userId = findUser();
    const login = model.inputs.loginpage;
    if (userId == null) {
        login.errorMessage = 'Feil brukernavn og/eller passord';
        // Reset fields or prompt user for re-entry without altering model placeholders
    } else {
        model.app.currentPage = 'homepage';
        model.app.loggedInUser = userId;
        login.errorMessage = '';
        login.username = ''; // Clear username field if necessary
        login.passWord = ''; // Make sure this matches your model structure
    }
    updateView();
}

function findUser() {
    for (let user of model.data.registeredUsers) {
        if (user.userName == model.inputs.loginpage.username
            && user.passWord == model.inputs.loginpage.passWord) {
            return user.id;
        }
    }
    return null;
}