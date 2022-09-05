import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGetBooks, fetchGetVerses } from "./ComponetsBible/Redux/actions";
import { Link } from 'react-router-dom';
import Loading from "./ComponetsBible/Loading";
import './Bible.css';

class Bible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: 'Gênesis',
      abv: 'gn',
      chapter: 1,
      chapters: 50,
      verses: 0,
      versionBible: 'acf',
      versions: ['acf', 'apee', 'bbe', 'kjv', 'nvi', 'ra', 'rvr'],
      versionsName: [
        'Almeida Corrigida Fiel',
        'La Bible de l´Épée',
        'Bible in Basic English',
        'King James Version',
        'Nova Versão Internacional',
        'Almeida Revisada e Atualizada',
        'La Biblia Reina-Valera',
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleVersion = this.handleVersion.bind(this);
  }

  componentDidMount() {
    const { handleFetch, handleFetchVerse } = this.props;
    const { chapter, versionBible, abv } = this.state;
    handleFetch();
    handleFetchVerse(chapter, versionBible, abv)
    .then(() => this.setState({ verses: this.props.verses.verses }));
  }

  handleChange({ target }) {
    const { value } = target;
    const { books, handleFetchVerse } = this.props;
    const { book, versionBible } = this.state;
    if (value !== book) this.setState({ verses: [] });
    const bookInfo = books.filter((book) => book.name === value)[0];
    this.setState({ book: value, chapters: bookInfo.chapters, abv: bookInfo.abbrev.pt, chapter: 1, });
    handleFetchVerse(1, versionBible, bookInfo.abbrev.pt)
    .then(() => this.setState({ verses: this.props.verses.verses }));
  }

  handleClick({ target }) {
    const { handleFetchVerse } = this.props;
    const { abv, versionBible } = this.state;
    handleFetchVerse(target.innerHTML, versionBible, abv)
    .then(() => this.setState({ verses: this.props.verses.verses, chapter: target.innerHTML }));
  }

  handleVersion({ target }) {
    const { handleFetchVerse } = this.props;
    const { chapter, abv } = this.state;
    this.setState({ versionBible: target.id });
    handleFetchVerse(chapter, target.id, abv)
    .then(() => this.setState({ verses: this.props.verses.verses }));
  }

  render() {
    const { loadingVerse, loadingChapter, books } = this.props;
    const {
      book,
      chapters,
      verses,
      versions,
      versionBible,
      chapter,
      versionsName
    } = this.state;
    if (books.msg) return (
      <p className="not-found">
        Page Not Found! <br/>
        <Link className="link" to="/github-page">Home</Link>
      </p>
    )
    const chaptersQnt = [];
    for(let i = 1; i <= chapters; i += 1) {
      chaptersQnt.push(i);
    }
    return (
      <div className="bible">
        <header className="header-bible">
          <h4 className="version-title">{ `Versão ${ versionBible.toUpperCase() }` }</h4>
          <div className="div-version-bibles">
            {
              versions.map((version, index) => (
              <div className="squares-versions" key={ index }>
                <span
                  onClick={ (event) => this.handleVersion(event) }
                  className="versions"
                  id={ version }
                >
                  { versionsName[index] }
                </span>
              </div>))
            }
          </div>
          
        </header>
        <div className="outside-header-bible">
          {
            loadingChapter ? <Loading />
            : (<div>
              <select
                onChange={ (event) => this.handleChange(event) }
                className="form-select select-chapter"
                aria-label="Default select example"
              >
                { books.map((book, index) => <option key={ index }>{ book.name }</option>) }
              </select>
              <div className="book-showed">
                <h3>{ `${book} ${chapter}` }</h3>
              </div>
            </div>)
          }

          <div className="squares">
            {
              chaptersQnt.map((chapter, index) => (
              <span
                className="chapter"
                key={ index }
                onClick={ (event) => this.handleClick(event) }
              >
                { chapter }
              </span>)
              )
            }
          </div>

          {
            loadingVerse ? <Loading />
            : (<div className="verses">
              {
                !verses ? null
                 : verses.map(({number, text}) => (
                 <span key={ number } className="verse-text">
                  <sup className="vers-number">
                    { number }
                  </sup>{ text }
                </span>))
              }
            </div>)
          }
          <hr/>
          <footer>
            <p><em>Projeto desenvolvido por Patrick Gomes</em></p>
            <p><a className="link href" target="_blank"  rel="noreferrer" href="https://github.com/marciovsena/abibliadigital/blob/master/DOCUMENTATION.md">API utilizada</a></p>
            <Link className="link" to="/github-page">Home</Link>
          </footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.bibleReducer.books,
  verses: state.bibleReducer.verses,
  loadingChapter: state.bibleReducer.loadingChapter,
  loadingVerse: state.bibleReducer.loadingVerse
});

const mapDispatchToProps = (dispatch) => ({
  handleFetch: () => dispatch(fetchGetBooks()),
  handleFetchVerse: (book, version, abv) => (
    dispatch(fetchGetVerses(book, version, abv))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bible);
