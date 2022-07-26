import React from 'react'
import Banner from "../../components/Banner"
import Row from "../../components/Row"
import requests from '../../api/requests' 

export default function MainPage() {
  return (
    <div>
         <Banner />
      <Row
        title="NETFLIX ORIGTINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTreding} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" id="CM" fetchUrl={requests.fecthComedyMovies} />
      <Row title="Horror Movies" id="HM" fetchUrl={requests.fecthHorrorMovies} />
      <Row title="Romance Movies" id="RM" fetchUrl={requests.fecthRomanceMovies} />
    </div>
  )
}
