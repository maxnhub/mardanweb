import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './Movie.module.scss'
import axios from 'axios';
import { fetchMovie, clearMovie } from '../../store/actions/movies'

class Movie extends React.PureComponent {
  componentDidMount() {
    const { match, fetchMovie } = this.props;
    const id = (match.params.id) - 1;

    axios.get('https://mardanusers.firebaseio.com/movies.json')
    .then(response => {
        const movies = response.data;
        const movie = movies[id];
        
        if (movie) {
          fetchMovie(movie);
        }
    });
  }

  // Этот метод лучше не использовать
  // componentWillMount() {
  //   this.props.fetchMovie(this.props.params.id)
  // }

  // Этот метод лучше не использовать
  // componentWillUpdate(next) {
  //   if (this.props.params.id !== next.params.id) {
  //     this.props.fetchMovie(next.params.id)
  //   }
  // }
  
  componentWillUnmount() {
    const { clearMovie, movie } = this.props;
    if (movie) {
      clearMovie(movie);
    }
    
  }

  render() {
    const { isMovieLoaded, movie } = this.props;
    if (!isMovieLoaded) return null;

    return (
      <div
        className={styles.movie}
        style={{backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(${movie.cover})`}}
      >
        <div
          className={styles.cover}
          style={{backgroundImage: `url(${movie.cover})`}} />
        <div className={styles.description}>
          <div className={styles.title}>{movie.title}</div>
          <div className={styles.year}>{movie.year}</div>
          <div className={styles.starring}>
            {movie.starring.map((actor = {}, index) => (
              <div
                key={index}
                className={styles.actor}>
                {actor.name}
              </div>
            ))}
          </div>
        </div>
        <Link
          className={styles.closeButton}
          to="/services">
          ←
        </Link>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return state.movies;
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovie: (movie) => dispatch(fetchMovie(movie)),
    clearMovie: (movie) => dispatch(clearMovie(movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
// export default Movie