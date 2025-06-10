
const CardComponent = ({ curEl }) => {

    return (<div className="card"  >

        <img src={curEl.image} className="card-image" alt="..." />


        <div className="card-body">
            <h5 className="card-title">{curEl.name} </h5>
            <p className="card-text">{curEl.birth_year} {curEl.death_year} </p>
            <p className="card-text">{curEl.nationality} </p>
            <p className="card-text">{curEl.known_for || curEl.most_famous_movies} </p>
            <p className="card-text">{curEl.awards} </p>
            <p className="card-text">{curEl.biography} </p>

        </div>
    </div>)
}

export default CardComponent;