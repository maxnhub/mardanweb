import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import movies from '../../movies.json'
import styles from './movies.css'
import axios from 'axios';
import { fetchMovies } from '../../store/actions/movies'


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

  // componentWillMount() {
  //   this.props.fetchMovies(movies)
  // }

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

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (movies) => dispatch(fetchMovies(movies))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
// export default Movies