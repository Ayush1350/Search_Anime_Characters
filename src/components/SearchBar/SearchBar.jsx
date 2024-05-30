import PropTypes from "prop-types";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../App.css";

const SearchBar = ({ searchText, handleSearchChange }) => {
  return (
    <div className="search-bar">
      <i className="fas fa-search search-icon"></i>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchText}
        onChange={handleSearchChange}
        className="search-input"
      />
    </div>
  );
};

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;
