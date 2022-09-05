export const GET_BOOKS = 'GET_BOOKS';
export const LOADING_CHAPTER = 'LOADING_CHAPTER';
export const GET_VERSES = 'GET_VERSES';
export const LOADING_VERSE = 'LOADING_VERSE';

const loadingChapter = () => ({
  type: LOADING_CHAPTER,
});

const loadingVerse = () => ({
  type: LOADING_VERSE,
});

const getBooks = (data) => ({
  type: GET_BOOKS,
  books: data,
});

const getVerses = (data) => ({
  type: GET_VERSES,
  verses: data,
});

export const fetchGetBooks = () => {
  return (dispatch) => {
    dispatch(loadingChapter());
    return fetch('https://www.abibliadigital.com.br/api/books')
    .then((resolve) => resolve.json())
    .then((data) => dispatch(getBooks(data)));
  }
}

export const fetchGetVerses = (chapter, version, abv) => {
  return (dispatch) => {
    dispatch(loadingVerse());
    return fetch(`https://www.abibliadigital.com.br/api/verses/${version}/${abv}/${chapter}`)
    .then((resolve) => resolve.json())
    .then((data) => dispatch(getVerses(data)));
  }
}