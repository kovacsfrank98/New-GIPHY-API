import {useState, useEffect} from 'react';
import axios from 'axios';

function Search()
{
    const [data, setData] = useState({imgs:[]});
    const [query, setQuery] = useState('');
    const [url, setUrl] = useState(
        'https://api.giphy.com/v1/gifs/search?api_key=XNuamkpe9ftC5CK06o75Ye0MR4VkB0gH&q'
    );
    
    useEffect(() => {
     const fetchData = async() =>{
       const result = await axios(url);
         setData(result.data);
     };
        fetchData();
    }, []);
    
    return (
        <div>
        <div className="Input">
            <h1>NEW GIPHY API</h1>
            <p>Please enter a search topic:</p><br/>
            <input type="text" value={query} onChange={event => setQuery(event.target.value)} />
            <button
                type="button"
                onClick={() => 
                         setUrl('https://api.giphy.com/v1/gifs/search?api_key=XNuamkpe9ftC5CK06o75Ye0MR4VkB0gH&q' + query)
                        }>
                SEARCH
            </button>
        </div>
        <div> 
        <div className="Display">
                {data.imgs.map(item =>(
                 <img className="Images"></img>
                 ))}
        </div>
        </div>
        </div>
    );
}

export default Search;