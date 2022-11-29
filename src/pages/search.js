import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import MicSharpIcon from "@mui/icons-material/MicSharp";
import { UseStateValue } from "../ContextApi";
import { Button } from "@material-ui/core";
import { actionTypes } from "../reducer";
import "./search.css";
const Search = ({ hideButtons = false }) => {
  const [input, setInput] = useState("");
  const [{}, dispatch] = UseStateValue();
  const Navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    });
    Navigate("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchSharpIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicSharpIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            I'm feeling lucky
          </Button>
          <Button variant="outlined">Google Search</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            I'm feeling lucky
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            Google Search
          </Button>
        </div>
      )}
    </form>
  );
};
export default Search;
