function homeView() {
    const app = document.getElementById('app');
    app.innerHTML = /*HTML*/ `
        ${createHtmlHeader()}
        <div class="homepage">
            <h1> MediaTracker </h1>
            <div class="introduction">
                <p> 
                    An app where you can save into a list all the media you have watched, 
                    rate it and give it a personal note ♥
                </p>
            </div>
            <div class="searchField">
                <span>
                    <p>movies</p>
                    <input
                    onchange="updateModel('movieCheckbox')" 
                    type="checkbox" 
                    id="movieCheckbox">
                </span>
                <span>
                    <p>series</p>
                    <input 
                    onchange="updateModel('seriesCheckbox')"
                    type="checkbox" 
                    id="seriesCheckbox">
                </span>
                <span>
                    <p>anime</p>
                    <input 
                        onchange="updateModel('animeCheckbox')"
                        type="checkbox" 
                        id="animeCheckbox">
                </span>
            </div>
            <input 
                type="text" 
                oninput="model.inputs.homepage.searchbar=this.value" 
                placeholder="Write here to search"/>
            <button onclick="search()">Search</button>
            <div id="showResultInGrid"></div>
        </div>
    `;
}