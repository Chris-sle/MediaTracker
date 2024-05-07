function updateModel(inputId) {
    const checkbox = document.getElementById(inputId);
    const homepage = model.inputs.homepage;
    
    if (inputId === 'movieCheckbox' && checkbox.checked) {
        homepage.moviesIsChecked = true;
        homepage.seriesIsChecked = false;
        homepage.animeIsChecked = false;
        document.getElementById('seriesCheckbox').checked = false;
        document.getElementById('animeCheckbox').checked = false;
    } else if (inputId === 'seriesCheckbox' && checkbox.checked) {
        homepage.moviesIsChecked = false;
        homepage.seriesIsChecked = true;
        homepage.animeIsChecked = false;
        document.getElementById('movieCheckbox').checked = false;
        document.getElementById('animeCheckbox').checked = false;
    } else if (inputId === 'animeCheckbox' && checkbox.checked) {
        homepage.moviesIsChecked = false;
        homepage.seriesIsChecked = false;
        homepage.animeIsChecked = true;
        document.getElementById('movieCheckbox').checked = false;
        document.getElementById('seriesCheckbox').checked = false;
    };
}

function search() {
    const homepage =  model.inputs.homepage;
    model.data.anime = [];

    // if(homepage.movieIsChecked = true){
        
    // }
    // if(homepage.seriesIsChecked = true){

    // }
    if(homepage.animeIsChecked == true){
        searchForAnimeWithAniListAPI()
    }
}

function searchForAnimeWithAniListAPI() {
    const searchInput = model.inputs.homepage.searchbar;
    let query = model.data.API.AniList.query;
    let variables = {
        search: searchInput,
    
        page: 1,
        perPage: 20
    };
    let url = model.data.API.AniList.url;
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
    },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    } ;

    fetch(url, options)
        .then(handleResponse)
        .then(handleData) 
        .catch(handleError);
}

function handleResponse(response) {
    return response.json().then(function (json) {
    return response.ok ? json : Promise.reject(json);
    });
}

function handleData(data) {
    console.log(data);
    const results = data.data.Page.media;
    let newAnimes = results.filter(result => (!result.isAdult && result.type == 'ANIME'))
        .map(result => ({
            title: {
                english: result.title.english,
                romaji: result.title.romaji
            },
            genres: result.genres,
            coverImage: {
                extraLarge: result.coverImage.extraLarge,
                large: result.coverImage.large,
                medium: result.coverImage.medium,
                color: result.coverImage.color
            },
            format: result.format,
            episodes: result.episodes,
            description: result.description,
            status: result.status,
            cardFlipper: false,
        }));
    
    model.data.anime = newAnimes;
    console.log(model.data.anime);
    updateView();
}

function handleError(error) {
    alert('Error, check console');
    console.error(error);
}

function turnAnimeCard(clickedIndex) {
    if (model.inputs.homepage.currentlyFlippedIndex === clickedIndex) {
        model.inputs.homepage.currentlyFlippedIndex = null;
    } else {
        model.inputs.homepage.currentlyFlippedIndex = clickedIndex;
    }
    updateView();
}

function resetScroll(element) {
    element.scrollTop = 0;
}

function addToMyList(anime) {
    const myList = model.data.registeredUsers[model.app.loggedInUserId -1]
    console.log(anime)
}
