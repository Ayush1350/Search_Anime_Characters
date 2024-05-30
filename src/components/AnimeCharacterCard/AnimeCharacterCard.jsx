import PropTypes from "prop-types";
import "../../App.css";

const AnimeCharacterCard = ({ character }) => {
  const handleClick = () => {
    window.open(character.url, "_blank");
  };

  return (
    <li className="anime-character-card" onClick={handleClick}>
      <img
        src={character.images.jpg.image_url}
        alt={character.name}
        className="anime-image"
      />
      <div className="character-details">
        <h2>{character.name}</h2>
        {character.name_kanji && <p>{character.name_kanji}</p>}
        <div className="nickname-tags">
          {character.nicknames &&
            character.nicknames.map((nickname, index) => (
              <span key={index} className="nickname-tag">
                {nickname}
              </span>
            ))}
        </div>
      </div>
      <div className="likes-and-link">
        <span className="likes">❤️ {character.favorites || 0}</span>
        <button className="details-button">➡️</button>
      </div>
    </li>
  );
};

AnimeCharacterCard.propTypes = {
  character: PropTypes.shape({
    url: PropTypes.string.isRequired,
    images: PropTypes.shape({
      jpg: PropTypes.shape({
        image_url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    name_kanji: PropTypes.string,
    nicknames: PropTypes.arrayOf(PropTypes.string),
    favorites: PropTypes.number,
  }).isRequired,
};

export default AnimeCharacterCard;
