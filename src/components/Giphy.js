import {useState, useEffect} from 'react';
import axios from 'axios';

function Search()
{
    const [query, setQuery] = useState('');
    
    useEffect(() => {
       const result = await axios(
       `https://api.giphy.com/v1/gifs/search?api_key=XNuamkpe9ftC5CK06o75Ye0MR4VkB0gH&q=${query}&limit=10&offset=0&rating=g&lang=en`
       );
    });
    
    return (
        <div className="Input">
            <h1>NEW GIPHY API</h1>
        </div>
        <div className="Display">
        </div>
    );
}

export default Giphy;