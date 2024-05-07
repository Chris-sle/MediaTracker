function updateView() {
    const page = model.app.currentPage;
    if (page == null) loginView();
    else if (page == 'home') homeView();
    else if (page == 'profile') profileView();
    else if (page == 'directory') updateViewDirectory();
}

function createHtmlHeader() {
    const currentUserId = model.app.loggedInUserId
    const profile = model.data.registeredUsers.find(user => user.id === currentUserId)
    const currentUser = model.data.registeredUsers.find(user => user.id === model.app.currentUserId);
    let html = /*HTML*/ `
        <div class="header">
            <div></div>
            <h1> MediaTracker </h1>
            <div class="dropdown">
                <div>
                    <img
                        class="dropbtn"
                        src=${"img/profileImg-Chris.jpg" || "img/DefaultProfileImg.webp"}
                        alt="Profile picture"/>
                        
                </div>
                <div class="dropdown-content">
                    <button onclick="mainPageView()">Main Page</button>
                    <button onclick="goTo('profile')">Profile Page</button>
                    <br>
                    <button onclick="logOut()">Logout</button>
                    <!-- Add more buttons here if needed -->
                </div>
            </div>
        </div>
    `;
    return html;
}