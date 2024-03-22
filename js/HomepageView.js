function updateViewHomepage() {
    const app = document.getElementById('app');
    app.innerHTML = /*HTML*/ `
        <div class="homepage">
            <div class="header">
                <span onlcick="">&#9898</span>
                <p>Dark Mode </p> 
                <input type="" /> 
                <input type="text" /> 
                <img 
                    src="img/DefaultProfileImg.webp" 
                    alt="Profile picture"/>
            </div>
            <h1> MediaWatcher <h1>
            <p> An app where you can save into a list all the media you have watched, rate it and give it a personal note </p>
            <div class="directionalButtons">
                <button onclick="goTo('directory')">Directory</button>
            </div>
            <input type="text" onchange="model.inputs.homepage.searchbar=this.value" value="${model.inputs.homepage.searchbar}"/>

        </div>
    `;
}