import React, { useContext, useState } from 'react'
import Card from './card-main-page'
import Filter from './filter-main-page'
import './main.css';
import { GlobalContext } from "../context/global-context";
import ApartmentCardList from '../components/apartmentCardList';


export default function Main() {
  const { neighborhoods, setNeighborhoods } = useContext(GlobalContext);
  const [ aggResults, setAggResults ] = useState()
  
  return (
  
    <center className="Main-Page-Wrapper">
        <Filter aggResults={aggResults} setAggResults={setAggResults}/>
        <Card />
        <ApartmentCardList aggResults={aggResults} setAggResults={setAggResults} />
    </center>
  )
}

