function homeView() {
    const app = document.getElementById('app');
    app.innerHTML = /*HTML*/ `
        ${createHtmlHeader()}
        <div class="homepage">
            <h1> MediaWatcher <h1>
            <p> An app where you can save into a list all❤ the media you have watched, rate it and give it a personal note </p>
            <div class="directionalButtons">
                <button onclick="goTo('directory')">Directory</button>
            </div>
            <input 
                type="text" 
                oninput="model.inputs.homepage.searchbar=this.value" 
                value="${model.inputs.homepage.searchbar}"/>
            <div id="showResultInGrid"></div>
        </div>
    `;
}