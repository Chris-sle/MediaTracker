function updateView() {
    const page = model.app.currentPage;
    if (page == null) loginView();
    else if (page == 'home') homeView();
    else if (page == 'directory') updateViewDirectory();
}

function createHtmlHeader() {
    let html = /*HTML*/ `
        <div class="header">
            <div class="darkmode">
                <span onlcick="darkmode()">&#9898</span>
                <p>Dark Mode </p>
            </div> 
            <button onclick="goTo('directory')">Directory</button>
            <img
                onclick="goTo('profile')" 
                src="img/DefaultProfileImg.webp" 
                alt="Profile picture"/>
        </div>
    `;
    return html;
}