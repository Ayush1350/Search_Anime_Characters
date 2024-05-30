import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar/SearchBar";
import AnimeCharacterCard from "./AnimeCharacterCard/AnimeCharacterCard";
import "./AnimeHomePage.css";

const AnimeHomePage = () => {
  const [animeData, setAnimeData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredAnime, setFilteredAnime] = useState([]);

  const AnimeURL = "https://api.jikan.moe/v4/characters";

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await axios.get(AnimeURL);
        setAnimeData(response.data.data);
        setFilteredAnime(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnimeData();
  }, []);

  const handleSearchChange = (event) => {
    const search = event.target.value;
    setSearchText(search);
    const filtered = animeData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredAnime(filtered);
    setCurrentPage(1);
  };

  const itemsPerPage = 15;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAnime.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (indexOfLastItem < filteredAnime.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Search Anime Characters</h1>
        <SearchBar
          searchText={searchText}
          handleSearchChange={handleSearchChange}
        />
      </header>

      <div className="content">
        {filteredAnime.length > 0 ? (
          <p>Total {filteredAnime.length} matching anime characters found</p>
        ) : (
          <p>No characters found for your search: {searchText}</p>
        )}
        <ul className="character-list">
          {currentItems.map((item) => (
            <AnimeCharacterCard key={item.mal_id} character={item} />
          ))}
        </ul>
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Back
          </button>
          <button
            onClick={handleNextPage}
            disabled={indexOfLastItem >= filteredAnime.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimeHomePage;
