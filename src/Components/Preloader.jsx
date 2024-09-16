import PropTypes from 'prop-types';
import '../index.css';

export default function Preloader({ loaded }) {
  return (
    <div className="preloader">
      {loaded ? 'Content Loaded' : 'Loading...'}
      <div>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </div>
  );
}

Preloader.propTypes = {
  loaded: PropTypes.bool.isRequired,
};


