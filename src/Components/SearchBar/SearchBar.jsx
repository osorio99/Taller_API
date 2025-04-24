
import "../../Styles/Components/SearchBar.css";
const SearchBar = ({ setSearchTerm }) => {
    return (
      <input
        type="text"
        placeholder="Buscar productos..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className=".search-bar"
      />
    );
  };
  
  export default SearchBar;