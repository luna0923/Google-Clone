import React, { useState } from 'react';
import '../pages/search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useNavigate} from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({ hideButtons = false }) {
  const [{},dispatch]= useStateValue();
  const [input, setInput] = useState("");
const navigate= useNavigate();
  const search = (e) => {
    e.preventDefault();
    console.log('You hit the search>>',input)
    dispatch({
type: actionTypes.SET_SEARCH_TERM,
term: input
    })
    navigate('/search');
  };

  return (
    <form className='search' onSubmit={search}>
      <div className='search_input'>
        <SearchIcon className='search_inputIcon' />
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>
      { !hideButtons ? (
  <div className="search-buttons">
    <Button type='submit' variant='outlined'>Google Search</Button>
    <Button variant='outlined'>I'm Feeling Lucky</Button>
  </div>
) : (
  <div className="search-buttons">
    <Button className='search-hide-button' type='submit' variant='outlined'>Google Search</Button>
    <Button className='search-hide-button' variant='outlined'>I'm Feeling Lucky</Button>
  </div>
)}



     </form>
  );
}

export default Search;

