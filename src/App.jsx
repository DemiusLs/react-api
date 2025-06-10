import { useEffect, useState } from 'react'
import axios from 'axios';


function App() {

  const actorLink = "https://lanciweb.github.io/demo/api/actors/";
  const actressLink = "https://lanciweb.github.io/demo/api/actresses/";


  const [listType, setListType] = useState("actors")
  const [arrList, setArrList] = useState([])

  useEffect(() => {
    let url;
    let newArr = []
    if (listType === "actors") {
      url = actorLink;

    }
    if (listType === "actress") {
      url = actressLink;
    }

    if (listType === "tutti") {
      
    }




    axios.get(url).then((resp) => {


     newArr = resp.data
      setArrList(newArr)

    })



  }, [listType])




  return (
    <>

      <div className="container">
        <h2 className='text-center'>Attori e attrici</h2>
        <h2 className='text-center'>{listType}</h2>

        <select className="form-select" aria-label="Default select example" value={listType} onChange={(event) => setListType(event.target.value)}>

          <option value="actors">Attori</option>
          <option value="actress">Attrici</option>
          <option value="all">Tutti</option>
        </select>

        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4  my-3'>

          {arrList.map(curEl => (

            <div className="card" key={listType + curEl.id} >
              <div className='img-container'>
                <img src={curEl.image} className=" " alt="..." />
              </div>

              <div className="card-body">
                <h5 className="card-title">{curEl.name} </h5>
                <p className="card-text">{curEl.birth_year} {curEl.death_year} </p>
                <p className="card-text">{curEl.nationality} </p>
                <p className="card-text">{curEl.known_for} </p>
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
