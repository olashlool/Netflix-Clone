import React, { useState, useEffect} from "react";

import MovieList from '../MovieList/movieList';
import axios from 'axios';

function Home() {
    const [data, setData] = useState([]);
    const getMovies = async () => {
        return await axios.get(`https://library-movies.herokuapp.com/trending`)
            .then(res => {
                return res.data;
            }).catch((err) => {
                // console.log(err);
            })
    }
    useEffect(() => {
        void(async()=>{
            let data = await getMovies();
            setData(data);
        })();
    }, [])
    
    return (
        <>
        <MovieList data={data}/>
          
        </>
    )
}
export default Home;
