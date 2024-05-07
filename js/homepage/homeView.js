function homeView() {
    const app = document.getElementById('app');
    app.innerHTML = /*HTML*/ `
        
        
        ${createMainPageHtml()}
            
        
    `;
}

function createMainPageHtml() {
    let html = /*HTML*/ `
        ${createHtmlHeader()}
        <div class="homepage">
            <h1> MediaTracker </h1>
            <div class="introduction">
                <p> 
                    An app where you can save into a list all the media you have watched,<br> 
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
            ${!model.data.anime == 0 ? `
            <div id="showResultInGrid">
                ${createResultHtml()}
            </div>` : ''}
        </div>
    `;
    return html;
}

function createResultHtml() {
    const animes = model.data.anime;
    let html = '';
    if (animes.length > 0) {
        for (let index = 0; index < animes.length; index++) {
            const anime = animes[index];
            const isFlipped = model.inputs.homepage.currentlyFlippedIndex === index;
            const genreParagraphs = anime.genres.map(genre => `<p class="genre">${genre}</p>`).join('');
            html += /*HTML*/ `
                <div class="resultCard" onclick="turnAnimeCard(${index})">
                    <div class="cardTitle">
                        <h3>${anime.title.english ? anime.title.english : anime.title.romaji}</h3>
                        <span>${genreParagraphs}</span>
                    </div>
                    <div class="cardContent" >
                        ${isFlipped ? `
                            <p>${anime.format} - ${anime.episodes} episodes</p>
                            <p>Status:${anime.status}</p>
                            <p class="description" onmouseleave="resetScroll(this)">Synopsis:<br>${anime.description}</p>
                        ` : `
                            <img src="${anime.coverImage.large}" alt="Cover image of ${anime.title.english ? anime.title.english : anime.title.romaji}">
                        `}
                        <button onclick="addToMyList(anime)">Add to Mylist</button>
                    </div>
                </div>
            `;
        }
    }
    return html;
}



