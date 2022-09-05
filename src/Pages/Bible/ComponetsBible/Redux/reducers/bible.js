import { GET_BOOKS, LOADING_CHAPTER, LOADING_VERSE, GET_VERSES } from "../actions";

const INITIAL_STATE = {
  books: [],
  loadingChapter: false,
  loadingVerse: false,
  verses: false,
}

const bibleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING_CHAPTER:
    return {
      ...state,
      loadingChapter: true,
    }
  case LOADING_VERSE:
    return {
      ...state,
      loadingVerse: true,
    }
  case GET_BOOKS:
    return {
      ...state,
      loadingChapter: false,
      books: action.books,
    }
  case GET_VERSES:
    return {
      ...state,
      loadingVerse: false,
      verses: action.verses,
    }
  default:
      return state;
  }
}

export default bibleReducer;
