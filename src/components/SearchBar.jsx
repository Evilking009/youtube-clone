import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

function SearchBar() {

  const [searchTerm, setsearchTerm] = useState('');
  const navigate = useNavigate();

  const paperStyles = {
    borderRadius: 20,
    border: "1px solid #e3e3e3",
    pl: 2,
    boxShadow: "none",
    mr: { sm: 5 },
  };

  const iconStyles = {
    p: '10px',
    color: 'red',
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setsearchTerm('');
    }
  }

  return (
    <Paper component="form" onSubmit={handleSubmit} sx={paperStyles}>
      <input type="text" value={searchTerm} onChange={(e) => { setsearchTerm(e.target.value) }} className="search-bar" placeholder="search..." />
      <IconButton type="submit" sx={iconStyles}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
