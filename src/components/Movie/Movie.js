import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './movie.css'
import axios from 'axios';
import { fetchMovie } from '../../store/actions/movies'

class Movie extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     movie : {
  //       starring: []
  //     }
  //   }
  // }
  componentDidMount() {
    const { fetchMovies } = this.props;

    axios.get('https://mardanusers.firebaseio.com/movies.json')
    .then(response => {
        const movies = response.data;
        // this.setState({
        //   movies
        // })
        fetchMovies(movies);
    });

  }
  componentWillMount() {
    this.props.fetchMovie(this.props.params.id)
  }

  componentWillUpdate(next) {
    if (this.props.params.id !== next.params.id) {
      this.props.fetchMovie(next.params.id)
    }
  }

  render() {
    const {
      movie = {
        starring: []
      }
    } = this.props
    

    return (
      <div
        className={styles.movie}
        style={{backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(${movie.cover})`}}>
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
          to="/movies">
          ←
        </Link>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovie: (movie) => dispatch(fetchMovie(movie))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
// export default Movie