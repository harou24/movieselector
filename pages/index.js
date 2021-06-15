import Head from 'next/head'
import {useState, useEffect } from 'react'
import Movies from '../components/Movies';
import SearchBox from '../components/SearchBox';
import Header from '../components/Header';

export default function Home() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  
  const getMovieRequest = async () => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=7ac48157&7ac48157`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.Search)
    {
      setMovies(data.Search);
    }
    else
    {
      setMovies([]);
    }
  }

  useEffect(()=> {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div>
      <Head>
        <title>Movieselector</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mt-8'>
         <Header/></div>
      <div>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div>
        <Movies movies = {movies}/>
      </div>
    </div>
  )
}