const OMDB_API_KEY = "dc353f2c";

const app = Vue.createApp({
    data() {
        return {
            search_query: "Batman",
            search_year: '',
            search_type: '',
            movies_list: [{ "Title": "Batman Begins", "Year": "2005", "imdbID": "tt0372784", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" }, { "Title": "Batman v Superman: Dawn of Justice", "Year": "2016", "imdbID": "tt2975590", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" }, { "Title": "Batman", "Year": "1989", "imdbID": "tt0096895", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg" }, { "Title": "Batman Returns", "Year": "1992", "imdbID": "tt0103776", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg" }, { "Title": "Batman Forever", "Year": "1995", "imdbID": "tt0112462", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" }, { "Title": "Batman & Robin", "Year": "1997", "imdbID": "tt0118688", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg" }, { "Title": "The Lego Batman Movie", "Year": "2017", "imdbID": "tt4116284", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg" }, { "Title": "Batman: The Animated Series", "Year": "1992–1995", "imdbID": "tt0103359", "Type": "series", "Poster": "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg" }, { "Title": "Batman: Under the Red Hood", "Year": "2010", "imdbID": "tt1569923", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" }, { "Title": "Batman: The Dark Knight Returns, Part 1", "Year": "2012", "imdbID": "tt2313197", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg" }],
            movie_info: {},
            showModal: false,
            favorites: [],
            blocksView: true,
            openFav: false,
            ratings: '',
            page: 1

        };
    },

    created() {
        window.goToPage = this.goToPage.bind(this);
        let fav_list = localStorage.getItem('favorites');
        if (fav_list != null) {
            this.favorites = JSON.parse(fav_list);
            console.log(this.favorites);
        }
        let view = this.getCookie('view');
        if (typeof(view) != 'undefined') {
            if (view == 'blocks') {
                this.blocksView = true;
            } else {
                this.blocksView = false;
            }
        }
    },

    methods: {
        searchMovie(reset_page) {
            if (this.searchMovie != '') {
                if (reset_page) {
                    this.page = 1;
                }
                let url = "http://www.omdbapi.com/?apikey=" + OMDB_API_KEY + '&s=' + this.search_query + '&page=' + this.page;
                if (this.search_year != '') {
                    url += '&y=' + this.search_year;
                }
                if (this.search_type != '') {
                    url += '&type=' + this.search_type;
                }
                if (this.search_query !== "") {
                    axios.get(url)
                        .then((resp) => {
                            console.log(JSON.stringify(resp.data.Search));
                            if (resp.data.Response == "True") {
                                this.movies_list = resp.data.Search;
                                this.pagination(resp.data.totalResults);
                            } else {
                                vanillaToast.error(resp.data.Error);
                            }
                        }).catch((err) => {
                            vanillaToast.error(err);
                        })
                }
            }
        },
        pagination(total) {
            const per_page = 10;
            const pages = Math.floor(total / per_page);
            let list = '';
            if (this.page > 1) {
                list += `<li class="page-item"><a class="page-link" href="javascript:void(0)" onclick="goToPage(${this.page-1})">Previous</a></li>`;
            }
            for (let i = 1; i < pages; i++) {
                if (i == this.page) {
                    list += `<li class="page-item active"><span class="page-link">${i}</span></li>`
                } else {
                    list += `<li class="page-item"><a class="page-link" href="javascript:void(0)" onclick="goToPage(${i})">${i}</a></li>`
                }
            }
            if (this.page != pages) {
                list += `<li class="page-item"><a class="page-link" href="javascript:void(0)" onclick="goToPage(${this.page+1})">Next</a></li>`;
            }
            document.getElementById('pagination').innerHTML = list;
        },
        goToPage(p) {
            this.page = p;
            this.searchMovie(false);
        },
        getDetail(id) {
            axios.get("http://www.omdbapi.com/?apikey=" + OMDB_API_KEY + '&i=' + id)
                .then((resp) => {
                    if (resp.data.Response == "True") {
                        this.movie_info = resp.data;
                        this.getRatingsHTML();
                        this.toggleModalDetail(true)
                    } else {
                        alert(resp.data.Error);
                    }
                    console.log(resp.data)
                }).catch((err) => {
                    console.log(err);
                    vanillaToast.error(err);
                })
        },
        getRatingsHTML() {
            let html = '';
            for (let i = 0; i < this.movie_info.Ratings.length; i++) {
                let rating = this.movie_info.Ratings[i];
                html += `
                <div class="row">
                    <div class="col-6 kind">
                        ${rating.Source}
                    </div>
                    <div class="col-6 percent text-right">
                        ${rating.Value}
                    </div>
                </div>
                `;
                let width = 0;
                switch (rating.Source) {
                    case 'Internet Movie Database':
                        width = 100 - parseFloat(rating.Value.split("/")[0]) * 10;
                        break;
                    case 'Rotten Tomatoes':
                        width = 100 - parseInt(rating.Value);
                        break;
                    case 'Metacritic':
                        width = 100 - parseInt(rating.Value.split("/")[0]);
                        break;
                }
                html += `
                <div class="rating_wrap">
                    <div class="scale" style="width:${width}%"></div>
                </div>
                `;
            }
            this.ratings = html;
        },
        toggleModalDetail(show) {
            this.showModal = show;
            if (show) {
                document.getElementById('exampleModal').style.display = 'block';
            } else {
                document.getElementById('exampleModal').style.display = 'none';
            }
        },
        toggleFavorites(item) {
            let a = this.favorites.findIndex(function(el) {
                return el.imdbID == item.imdbID;
            });
            console.log(a);
            if (a === -1) {
                this.favorites.push(item)
            } else {
                this.favorites.splice(a, 1);
            }
            localStorage.setItem('favorites', JSON.stringify(this.favorites));
            console.log(this.favorites)
        },
        showFavorites() {
            if (this.openFav == false) {
                this.openFav = true;
            } else {
                this.openFav = false;
            }
        },
        toggleView(is_blocks) {
            console.log(is_blocks);
            if (this.blocksView != is_blocks) {
                this.blocksView = is_blocks;
                let view = (is_blocks) ? 'blocks' : 'rows';
                this.setCookie('view', view, { expires: 60 * 60 * 24 * 365 })
            }
        },
        setCookie(name, value, props) {
            props = props || {}
            let exp = props.expires
            if (typeof exp == "number" && exp) {
                var d = new Date()
                d.setTime(d.getTime() + exp * 1000)
                exp = props.expires = d
            }
            if (exp && exp.toUTCString) { props.expires = exp.toUTCString() }
            value = encodeURIComponent(value)
            let updatedCookie = name + "=" + value
            for (var propName in props) {
                updatedCookie += "; " + propName
                let propValue = props[propName]
                if (propValue !== true) { updatedCookie += "=" + propValue }
            }
            document.cookie = updatedCookie

        },
        getCookie(name) {

            let matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ))
            return matches ? decodeURIComponent(matches[1]) : undefined
        }
    }
});

app.component('movie-item', {
    props: ['item'],
    methods: {
        getDetail(id) {
            this.$parent.getDetail(id)
        },
        toggleFavorites(item) {
            this.$parent.toggleFavorites(item)
        }
    },
    template: '#movie_item'
});

app.component('movie-detail', {
    props: ['item', 'ratings'],
    methods: {
        getDetail(id) {
            this.$parent.getDetail(id)
        },
        toggleFavorites(item) {
            this.$parent.toggleFavorites(item)
        }
    },
    template: '#movie_detail'
});

app.mount("#app");

$(document).ready(function() {
    $('.like').on('click', function() {
        $(this).toggleClass('clicked');
    });
});

/*

document.getElementsByClassName('like').addEventListener('click', function() {
    let like = document.getElementsByClassName('like');
    if (!like.classList.contains('clicked')) {
        like.classList.add('clicked')
    } else {
        like.classList.remove('clicked');
    }
});

*/