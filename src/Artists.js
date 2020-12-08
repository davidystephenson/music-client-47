import axios from 'axios'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { selectJwt } from './selectors'

export default function Artists () {
  const [artists, setArtists] = useState([])

  const jwt = useSelector(selectJwt)
  console.log('jwt test:', jwt)

  async function getArtists () {
    try {
      const artists = await axios
        .get('http://localhost:4000/artist', {
          headers: { Authorization: `Bearer ${jwt}` }
        })
 
      console.log('artists.data test:', artists.data)

      const isArray = Array.isArray(artists.data)
      if (isArray) setArtists(artists.data)
    } catch (error) {
      console.log('error test:', error)
    }
  }

  function effect () { getArtists() }

  useEffect(getArtists, [jwt])


  console.log('artists test:', artists)

  const items = artists
    .map(artist => <li key={artist.name}>{artist.name}</li>)
   
  return (
    <>
      <h3>Artists</h3> 

      <ul>
        {items}
      </ul>
    </>
  )
}