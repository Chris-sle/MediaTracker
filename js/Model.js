const model = {
    app: {
        currentPage: 'home',
        darkMode: false,
        loggedInUser: 'Chris',
    },
    inputs: {
        loginpage: {
            username: null,
            passWord: null,
            registerNewUser: {
                isActive: false,
                usernameInput: null,
                passWordInput: null,
                rePassWordInput: null,
                emailInput: null
            },
            errorMessage: '',
        },
        homepage: {
            movieIsChecked: false,
            seriesIsChecked: false,
            animeIsChecked: false,
            searchbar: null,
        },
        directory: {},
    },
    data: {
        registeredUsers: [
            {
                id: 1,
                userName: 'Chris',
                passWord: '1234',
                email: 'chris@this.com',
                profileImg: null,
                savedAnime: [],
                savedSeries: [],
                savedMovies: []
            }
        ],
        anime: [],
        movies: [],
        series: [],
    }
};