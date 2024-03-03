import { TextField, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/phone/filtersSlice";

const SearchBar = () => {
  const filter = useSelector((state) => state.filters.name);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box sx={{ my: 2 }}>
      <TextField
        fullWidth
        id="search-filter"
        label="Find contacts by name:"
        variant="outlined"
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </Box>
  );
};

export default SearchBar;
