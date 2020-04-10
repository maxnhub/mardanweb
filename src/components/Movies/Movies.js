import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import movies from '../../movies.json'
import styles from './Movies.module.scss'
import axios from 'axios';
import { fetchMovies, clearMovies } from '../../store/actions/movies'


class Movies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

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

  componentWillUnmount() {
    const { clearMovies, movies } = this.props;
    if (movies) {
      clearMovies(movies);
    }
    
  }

  render() {
    const {
      children,
      movies = [],
      params = {}
    } = this.props
    
    return (
      <div className={styles.movies}>
        <div className={params.id ? styles.listHidden : styles.list}>
          {movies.map((movie, index) => (
            <Link
              key={index}
              to={`/movies/${index + 1}`}>
              <div
                className={styles.movie}
                style={{backgroundImage: `url(${movie.cover})`}} />
            </Link>
          ))}
        </div>
        {children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {  // по сути это не state, а store... и данные приходят из стора, почему пишется state не понятно
  return {
    ...state.movies, // если редюсеров несколько (movies, users и т.д.) нужно обзательно ссылаться на state - state.movies
    user: state.users.users[0], // если бы мне нужен был кусок из юзеров, можно было бы на него сослаться таким образом, т.к. в сторе лежит всё, что мы туда отправляем
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (movies) => dispatch(fetchMovies(movies)),
    clearMovies: (movies) => dispatch(clearMovies(movies)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
// export default Movies