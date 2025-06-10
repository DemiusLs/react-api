import { useEffect, useState } from 'react'
import axios from 'axios';


function App() {

  const actorLink = "https://lanciweb.github.io/demo/api/actors/";
  const actressLink = "https://lanciweb.github.io/demo/api/actresses/";


  const [listType, setListType] = useState("actors")
  const [arrList, setArrList] = useState([])

  useEffect(() => {
    let urls;
    let newArr = []
    if (listType === "actors") {
      urls = [actorLink];

    }
    if (listType === "actress") {
      urls = [actressLink];
    }

    if (listType === "all") {
      urls = [actorLink, actressLink]
    }


    const requests = urls.map((url) => axios.get(url));

    axios.all(requests).then((responses) => {
      responses.forEach((resp) => {
        newArr = newArr.concat(resp.data)

      });


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

          {arrList.map((curEl, index) => (

            <div className="card" key={listType + index} >

              <img src={curEl.image} className=" " alt="..." />


              <div className="card-body">
                <h5 className="card-title">{curEl.name} </h5>
                <p className="card-text">{curEl.birth_year} {curEl.death_year} </p>
                <p className="card-text">{curEl.nationality} </p>
                <p className="card-text">{curEl.known_for || curEl.most_famous_movies} </p>
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
