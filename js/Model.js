const model = {
  app: {
    currentPage: 'home',
    darkMode: false,
    loggedInUserId: 1,
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
      currentlyFlippedIndex: null,
    },
    directory: {},
  },
  data: {
    registeredUsers: [
      {
        id: 1,
        username: 'Chris',
        passWord: '1234',
        email: 'chris@this.com',
        profileImg: 'img/profileImg-Chris.jpg',
        savedAnimes: [
          {
            title: {
              english: "Love Hina",
              romaji: "Love Hina"
            },
            genres: ['Comedy', 'Ecchi', 'Romance', 'Slice of Life'],
            coverImage: {
              extraLarge: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx189-ybxKAazvr7cH.png",
              large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx189-ybxKAazvr7cH.png",
              medium: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx189-ybxKAazvr7cH.png",
              color: "#e4ae5d"
            },
            format: "TV",
            episodes: 24,
            description: "Keitaro Urashima promised a girl when he was young that they would meet up again at Tokyo University in the future. Sadly, in the National Practice Exam, Keitaro ranked 27th from the bottom. Knowing his grandmother owned a hotel, Keitaro intended to stay there while continuing his studies for Tokyo U, only to find out the hotel had long been transformed into an all-girls dormitory. Through an odd twist of fate, Keitaro eventually became the manager of the dorm, beginning his life of living with 5 other girls.",
            status: "FINISHED",
            watchingStatus: {
              complete: true,
              toWatch: false,
            },
          },
        ],
        savedSeries: [],
        savedMovies: []
      }
    ],
    API: {
      AniList: {
        query: `
          query ($id: Int, $page: Int, $perPage: Int, $search: String) {
              Page(page: $page, perPage: $perPage) {
                pageInfo {
                  total
                  currentPage
                  lastPage
                  hasNextPage
                  perPage
                }
                media(id: $id, search: $search) {
                  id
                  title {
                    romaji
                    english
                  }
                  coverImage {
                    extraLarge
                    large
                    medium
                    color
                  }
                  type
                  genres
                  format
                  status
                  description
                  episodes
                  isAdult
                }
              }
            }
          `,
        url: 'https://graphql.anilist.co',
      },
      IMBd: {},
    },
    anime: [
      {
        title: {
          english: "Love Hina",
          romaji: "Love Hina"
        },
        genres: ['Comedy', 'Ecchi', 'Romance', 'Slice of Life'],
        coverImage: {
          extraLarge: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx189-ybxKAazvr7cH.png",
          large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx189-ybxKAazvr7cH.png",
          medium: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx189-ybxKAazvr7cH.png",
          color: "#e4ae5d"
        },
        format: "TV",
        episodes: 24,
        description: "Keitaro Urashima promised a girl when he was young that they would meet up again at Tokyo University in the future. Sadly, in the National Practice Exam, Keitaro ranked 27th from the bottom. Knowing his grandmother owned a hotel, Keitaro intended to stay there while continuing his studies for Tokyo U, only to find out the hotel had long been transformed into an all-girls dormitory. Through an odd twist of fate, Keitaro eventually became the manager of the dorm, beginning his life of living with 5 other girls.",
        status: "FINISHED",
        cardFlipper: false,
      },
      {
        title: {
          english: "Love Hina Again",
          romaji: "Love Hina Again"
        },
        genres: ['Comedy', 'Drama', 'Romance'],
        coverImage: {
          extraLarge: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx190-oapgxvKLl3uW.png",
          large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx190-oapgxvKLl3uW.png",
          medium: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx190-oapgxvKLl3uW.png",
          color: "#78a1d6"
        },
        format: "OVA",
        episodes: 3,
        description: "Keitaro needs some time to evaluate himself and his goals, so he goes onto a trip with Seta to attempt the life of an archaeologist. However, not all is safe at the Hinata Inn while he is gone. A woman claiming to be Keitaro's sister comes and claims right to being the manager of the inn. Life gets complicated when Keitaro returns, and attempts to deal with his sister of yesteryear.",
        status: "FINISHED",
        cardFlipper: false,
      },
      {
        title: {
          english: null,
          romaji: "Koi Kaze"
        },
        genres: ['Drama', 'Psychological', 'Romance', 'Slice of Life'],
        coverImage: {
          extraLarge: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx634-gziccUWhJQBB.png",
          large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx634-gziccUWhJQBB.png",
          medium: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx634-gziccUWhJQBB.png",
          color: "#d61a78"
        },
        format: "TV",
        episodes: 13,
        description: "Saeki Koushirou works as a wedding planner, but his own love life is a shambles. His background makes it difficult for him to commit himself wholeheartedly to love. The child of a divorced couple, he lives with his father. He has a mother and a sister, but he has not seen them in years. After being dumped by his girlfriend, a chance encounter with a female high school student shakes Koushirou's calm and awakens new feelings in him - but he learns that the girl is in fact his sister, who will now be staying with his father and him.",
        status: "FINISHED",
        cardFlipper: false,
      },
      {
        title: {
          english: "Love Hina Spring Movie",
          romaji: "Love Hina: Haru Special - Kimi Sakura Chiru Nakare!!"
        },
        genres: ['Adventure', 'Comedy', 'Romance'],
        coverImage: {
          extraLarge: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx192-mEQSZUwiu2Na.jpg",
          large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx192-mEQSZUwiu2Na.jpg",
          medium: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx192-mEQSZUwiu2Na.jpg",
          color: "#5da1e4"
        },
        format: "SPECIAL",
        episodes: 1,
        description: "The tests have come, and Keitaro can only hope to succeed. However, in the final stretch, he fails miserably and daydreams through the test. Assuming that he has failed, he runs away, so the rest of the cast hunts him down on a remote desert island to bring him back. The Toudai entrance exams have finally come (again) for Keitaro. With all his confidence Keitaro sits for the paper, but ends up falling asleep and dreaming about Narusegawa. Waking up with barely any time to complete the paper, Keitaro thinks he will fail the paper and tries to escape from Hinata Lodge and forget all the memories with it. By a stroke of luck he meets Seta, but ends up in a faraway island with the whole cast trying to look for him.",
        status: "FINISHED",
        cardFlipper: false,
      },
      {
        title: {
          english: "Love Hina Christmas Movie",
          romaji: "Love Hina Christmas Special: Silent Eve"
        },
        genres: ['Comedy', 'Romance', 'Slice of Life'],
        coverImage: {
          extraLarge: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx191-pKngFO6EOiqI.jpg",
          large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx191-pKngFO6EOiqI.jpg",
          medium: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx191-pKngFO6EOiqI.jpg",
          color: "#a16b28"
        },
        format: "SPECIAL",
        episodes: 1,
        description: "As another round of preliminary tests approach for Keitaro, so does Christmas. And as the first Christmas of the millennium, there is a rumor that if one confesses his love on this special eve it will come true. Keitaro has decided what he needs to do on this Christmas eve, but being a retaker can he afford taking attention away from the tests on the same day... The Winter has begun in Hinata. X-mas is coming up. There are rumors about this special christmas eve: If someone is going to confess his love on this christmas eve, any wish will come true. Keitaro decides to confess his love to Naru. But he isn't the only one confessing on this christmas eve...",
        status: "FINISHED",
        cardFlipper: false,
      },
      {
        title: {
          english: "Love Hina: Motoko's Choice, Love or the Sword: Don't Cry",
          romaji: "Love Hina: Motoko no Sentaku, Koi ka Ken... Naku na"
        },
        genres: ['Drama', 'Ecchi', 'Romance', 'Slice of Life'],
        coverImage: {
          extraLarge: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx963-SYYLzJFKc3Hb.jpg",
          large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx963-SYYLzJFKc3Hb.jpg",
          medium: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx963-SYYLzJFKc3Hb.jpg",
          color: "#f1e4c9"
        },
        format: "SPECIAL",
        episodes: 1,
        description: "Out of nowhere, Motoko's sister appears and is ready to pass on the dojo. However, Motoko is still not quite as strong as her sister and when her sister finds out about this, she gives Motoko an ultimatum: Motoko must beat her sister or marry Keitaro!",
        status: "FINISHED",
        cardFlipper: false,
      }
    ],
    movies: [],
    series: [],
  }
};
