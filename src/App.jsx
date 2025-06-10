import { useEffect, useState } from 'react'
import axios from 'axios';


function App() {

  const actorLink = "https://lanciweb.github.io/demo/api/actors/";
  const actressLink = "https://lanciweb.github.io/demo/api/actresses/";


  const [listType, setListType] = useState("actors")
  const [arrList, setArrList] = useState([])

  useEffect(() => {

    axios.get(actorLink).then((resp) => {

      const newArr = resp.data
      setArrList(newArr)

    })



  }, [listType])

  return (
    <>

      <div className="container">
        <h2 className='text-center'>Attori e attrici</h2>
        <h2 className='text-center'>{listType}</h2>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4  my-3'>

          {arrList.map(curEl => (
            <div className="card" key={listType + curEl.id} >
              <img src={curEl.image} className="object-fit-fill  " alt="..." />
              <div className="card-body">
                <h5 className="card-title">{curEl.name} </h5>
                <p className="card-text">{curEl.birth_year} </p>
                <p className="card-text">{curEl.nationality} </p>
                <p className="card-text">{curEl.most_famous_movies} </p>
                <p className="card-text">{curEl.awards} </p>
                <p className="card-text">{curEl.biography} </p>

              </div>
            </div>

          ))}
        </div>





      </div>



    </>
  )
}

export default App
