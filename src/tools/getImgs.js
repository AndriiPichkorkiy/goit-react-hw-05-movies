import img404 from '../imgs/img404.png';

const imgApi = {
  get(img) {
    if (!img) return img404;
    const path = 'https://image.tmdb.org/t/p/w500';
    return path + img;
  },

  getOrigin(img) {
    if (!img)
      return `
      radial-gradient(circle at 50% 0,
        rgba(255,0,0,.5),
        rgba(255,0,0,0) 70.71%),
      radial-gradient(circle at 6.7% 75%,
        rgba(0,0,255,.5),
        rgba(0,0,255,0) 70.71%),
      radial-gradient(circle at 93.3% 75%,
        rgba(0,255,0,.5),
        rgba(0,255,0,0) 70.71%) beige 
    `;
    const path = 'https://image.tmdb.org/t/p/original';
    return path + img;
  },

  imgOnError({ target }) {
    console.log('!!!');
    console.log(target);
    target.src = img404;
  },
};

export { imgApi };
