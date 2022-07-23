import {useState, useEffect} from 'react';
import axios from 'axios';

function Search()
{
    const [data, setData] = useState({imgs:[]});
    const [query, setQuery] = useState('');
    
    useEffect(() => {
     const fetchData = async() =>{
       const result = await axios(
       `https://api.giphy.com/v1/gifs/search?api_key=XNuamkpe9ftC5CK06o75Ye0MR4VkB0gH&q=${query}&limit=10&offset=0&rating=g&lang=en`
       );
         setData(result.data);
     };
        fetchData();
    }, []);
    
    return (
        <div>
        <div className="Input">
            <h1>NEW GIPHY API</h1>
        </div>
        </div>
        <div>
        <div className="Display">
        </div>
        </div>
    );
}

export default Giphy;