function profileView() {
    const app = document.getElementById('app');
    const currentUser = model.data.registeredUsers.find(user => user.id === model.app.loggedInUserId);


    app.innerHTML = /*HTML*/`
        ${createHtmlHeader()}
        <div class="profileContainer">
            <div class="ProfileBio">
                <img
                    class="profilePicture" 
                    src="${currentUser.profileImg}" 
                    alt="Profile picture"/>
                <div>
                    <p>Total Time Watched:</p>
                    <p>Shows completed:</p>
                    <p>Movies completed:</p>
                </div>
            </div>
            <div class="CurrentlyWatching">Her kommer liste av dem jeg ser på</div>
            <div class="myList">${createMyListHtml()}</div>
            <div class="completedWatching"></div>
        </div>
    `;
}

function createMyListHtml() {
    const loggedInUserId = model.app.loggedInUserId;
    const currentUser = model.data.registeredUsers.find(user => user.id === loggedInUserId)
    
    let html;

    html = /*HTML*/`
    
    `;
    return html;
}