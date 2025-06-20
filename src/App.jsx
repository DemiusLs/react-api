import { useEffect, useState } from 'react'
import axios from 'axios';
import CardComponent from './components/CardComponent';


function App() {

  const actorLink = "https://lanciweb.github.io/demo/api/actors/";
  const actressLink = "https://lanciweb.github.io/demo/api/actresses/";


  const [listType, setListType] = useState("actors")
  const [arrList, setArrList] = useState([])

  const options = ["actors", "actress", "all"];

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
        // newArr = newArr.concat(resp.data)
        newArr = [...newArr, ...resp.data]
      });


      setArrList(newArr)


    })




  }, [listType])




  return (
    <>

      <div className="container">
        <h2 className='text-center'>Attori e attrici</h2>
        <h2 className='text-center'>{listType}</h2>

        <select id="select" className="form-select" aria-label="Default select example" value={listType} onChange={(event) => setListType(event.target.value)}>
          {options.map((curOpt, index) =>  < option key={`opt-${index}`} value={curOpt}>{curOpt}</option> )}


        </select>

        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4  my-3'>

          {arrList.map((curEl, index) => (
            <div className="col" key={listType + index}>
              <CardComponent curEl={curEl} />
            </div>
          ))}
        </div>





      </div>



    </>
  )
}

export default App
