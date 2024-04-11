function goTo(page) {
    model.app.currentPage = page;
    updateView()
}

function logOut(){
    model.app.loggedInUser = null;
    goToPage('loginpage');
}