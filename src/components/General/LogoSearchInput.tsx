import React, { useCallback, useState } from "react";
import { SearchWhiteIcon } from "../../assets/images/Icons";
import _ from "lodash";
import { useHistory } from "react-router-dom";

type Props = {
  handleQueryChange: (query: string) => void;
  queryFromUrl?: string;
};

export const LogoSearchInput: React.FC<Props> = (props) => {
  const { handleQueryChange, queryFromUrl } = props;
  const history = useHistory();

  const [query, setQuery] = useState(queryFromUrl || "");

  const delayedQuery = useCallback(
    _.debounce((q: string) => {
      handleQueryChange(q);
      setQuery(q);
    }, 100),
    []
  );

  const handleSearch = () => {
    if (query) {
      history.push(`/search?q=${query}`);
    }
  };

  return (
    <React.Fragment>
      <span className="home-preview-search-icon" onClick={() => handleSearch()}>
        <span className="m-auto">
          <SearchWhiteIcon />
        </span>
      </span>
      <input
        type="text"
        defaultValue={query}
        onChange={(e) => delayedQuery(e.target.value)}
        autoFocus
        autoComplete="off"
        style={{ textIndent: "20px" }}
        className="content-input"
        placeholder="Search logo"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
    </React.Fragment>
  );
};
