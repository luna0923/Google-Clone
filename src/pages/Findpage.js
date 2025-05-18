import React from 'react';
import '../pages/Findpage.css';
import { useStateValue } from '../StateProvider';
import { Link } from '@mui/material';
import Search from './Searchpage';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ImageIcon from '@mui/icons-material/Image';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Usegooglesearch from '../Usegooglesearch';

function Findpage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = Usegooglesearch(term); 

  console.log(data);

  return (
    <div className='findpage'>
      <div className='findpage_header'>
        <Link to='/'>
          <img className='findpage_logo' src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='' />
        </Link>
        <div className='findpage_header_body'>
          <Search hideButtons />
          <div className='findpage_options'>
            <div className='findpage_optionsleft'>
              <div className='findpage_option'>
                <SearchIcon />
                <Link to="/all">ALL</Link>
              </div>
              <div className='findpage_option'>
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className='findpage_option'>
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className='findpage_option'>
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className='findpage_option'>
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>
              <div className='findpage_option'>
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className='findpage_optionsright'>
              <div className='findpage_option'>
                <Link to="/settings">Settings</Link>
              </div>
              <div className='findpage_option'>
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className='findpage_results'>
          <p className='findpage_resultcounts'>
  About {data?.searchInformation?.formattedTotalResults} results 
  ({data?.searchInformation?.formattedSearchTime} seconds) for {term}
</p>


        {data?.items.map(item => (
            <div className='findpage_result'>
             <a href={item.link} className="findpage_resultImage">
                                {item.pagemap?.cse_image?.length > 0 &&
                                    item.pagemap?.cse_image[0]?.src && (
                                        <img
                                            className="findpage_resultImage"
                                            src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                                            alt="Featured Visual" />
                                    )
                                }
                                {item.displayLink}
                                <ArrowDropDownIcon />
                            </a>
                

                <a className='findpage_resultTitle' href={item.link}>
                <h2> {item.title}</h2>
                </a>
                <p className='findpage_resultSnippet'>
                  {item.snippet}
                </p>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Findpage; 
