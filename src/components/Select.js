import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    border: 'red',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectTrends = ({ handleSubmit }) => {
  const classes = useStyles();
  const [trending, setTrending] = React.useState('');

  console.log('TRENDING', trending);

  const handleChange = (event) => {
    setTrending(event.target.value);
  };

  return (
    <div>
      <FormControl onSubmit={handleSubmit} variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Trending</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={trending}
          onChange={handleChange}
          label="Trending"
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value="all">Todos</MenuItem>
          <MenuItem value="movie">Filmes</MenuItem>
          <MenuItem value="tv">Séries</MenuItem>
          <MenuItem value="person">Pessoas</MenuItem>
        </Select>
      </FormControl>

    </div>
  );
};

export default SelectTrends;
