import {useState, useEffect} from 'react';
import axios from 'axios';

function Search()
{
    const [data, setData] = useState({imgs:[]});
    const [query, setQuery] = useState('random');
    const url = `https://api.giphy.com/v1/gifs/search?api_key=XNuamkpe9ftC5CK06o75Ye0MR4VkB0gH&q=${query}&limit=10&offset=0&rating=g&lang=en`;
    
    useEffect(() => {
     const fetchData = async() =>{
       const result = await axios(url);
         setData(result.data);
     };
        fetchData();
    }, [url]);
    
    return (
        <div>
        <div className="Input">
            <h1>NEW GIPHY API</h1>
            <p>Please enter a search topic:</p><br/>
            <input type="text" value={query} onChange={event => setQuery(event.target.value)} />
            <button
                type="button"
                onClick={() =>
                         fetch(url).then(response => response.json())
                         .then(json => {
                         json.data.map(imgs => imgs.images.fixed_height.url)
                         .forEach(url => {
                         <div className="Display">
                            <img className="Images" src={data.url}></img>
                         </div>
                        })
                        })
                        }>
                SEARCH
            </button>
        </div>
        </div>
    );
}

export default Search;