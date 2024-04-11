const model = {
    app: {
        currentPage: 'logginpage',
        darkMode: false,
        loggedInUser: null,
    },
    inputs: {
        loginpage: {
            username: null,
            passWord: null,
            registerNewUser: {
                usernameInput: 'Enter New Username',
                passWordInput: 'Enter New Password',
                rePassWordInput: 'Enter New Password Again',
                emailImput: 'Enter email'
            },
            errorMessage: '',
        },
        homepage: {
            searchbar: 'Write here to search',
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