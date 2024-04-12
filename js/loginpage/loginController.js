function login() {
    let userId = findUser();
    const login = model.inputs.loginpage;
    if (userId == null) {
        login.errorMessage = 'Feil brukernavn og/eller passord';
    } else {
        model.app.currentPage = 'home';
        model.app.loggedInUser = userId;
        login.errorMessage = '';
        login.username = null;
        login.passWord = null;
    }
    updateView();
}

function findUser() {
    console.log("Logging inn med:", model.inputs.loginpage.username, model.inputs.loginpage.passWord);
    for (let user of model.data.registeredUsers) {
        if (user.username == model.inputs.loginpage.username
            && user.passWord == model.inputs.loginpage.passWord) {
            return user.id;
        }
    }
    return null;
}

function changeHTML(bolean) {
    model.inputs.loginpage.registerNewUser.isActive=bolean;
    loginView();
}

function registerNewUser() {
    const newUserInputs = model.inputs.loginpage.registerNewUser;

    if (newUserInputs.passWordInput === newUserInputs.rePassWordInput) {
        const newUser = {
            id: model.data.registeredUsers.length + 1,
            userName: newUserInputs.usernameInput,
            passWord: newUserInputs.passWordInput,
            email: newUserInputs.emailInput,
            profileImg: null,
            savedAnime: [],
            savedSeries: [],
            savedMovies: []
        };

        model.data.registeredUsers.push(newUser);

        model.app.currentPage = 'homepage'
        model.app.loggedInUser = model.inputs.loginpage.registerNewUser.usernameInput;
        
        resetRegistrationInputs();
        updateView()
    } else {
        // Handle password mismatch, perhaps by updating the errorMessage
        console.error("Passwords do not match.");
        // Update the model to reflect the error and invoke view update if applicable
        model.inputs.loginpage.errorMessage = "Passwords do not match.";
        // For example: logginPageView();
    }
}

function resetRegistrationInputs() {
    // Resets the input fields for registration
    model.inputs.loginpage.registerNewUser = {
        usernameInput: '',
        passWordInput: '',
        rePassWordInput: '',
        emailInput: '', // Assuming typo correction has been applied
    };
}