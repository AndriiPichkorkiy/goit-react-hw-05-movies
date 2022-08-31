const apiMovies = {
  root: 'https://api.themoviedb.org/3',
  key: 'api_key=5108aaa75445a4269ccf5b5cfc34d595',
  language: '&language=en',

  // test: 'https://api.themoviedb.org/3/movie/550?api_key=5108aaa75445a4269ccf5b5cfc34d595',

  changeLanguage(lang) {
    apiMovies.language = `&language=${lang}`;
  },

  async getMovies(page) {
    const path = '/trending/all/day?';
    return await this.doFetch(path);
  },

  async getOneMovie(id) {
    const path = `/movie/${id}?`;
    return await this.doFetch(path);
  },

  async getOneTv(id) {
    const path = `/tv/${id}?`;
    return await this.doFetch(path);
  },

  async getCredits(id, type) {
    const path = `/${type}/${id}/credits?`;
    return await this.doFetch(path);
  },

  async getReviews(id, type) {
    const path = `/${type}/${id}/reviews?`;
    return await this.doFetch(path);
  },

  async getMovieByName(name) {
    const path = `/search/movie?query=${name}&`;
    return await this.doFetch(path);
  },

  doFetch: path => {
    return fetch(apiMovies.root + path + apiMovies.key + apiMovies.language);
  },
};

export default apiMovies;
