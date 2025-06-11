import { useState } from "react";

const CardComponent = ({ curEl }) => {

    const accordionEl = {
        collapseOne: false,
        collapseTwo: false,
        collapseThree: false,
        collapseFour: false,

    }
    const [isOpen, setIsOpen] = useState(accordionEl)


    const handleOpen = (e) => {

        const { name } = e.target


        setIsOpen(() => ({
            ...accordionEl, [name]: !isOpen[name]
        }))


    }

    return (


        <div className="card" >

            <img src={curEl.image} className="card-image" alt="..." />


            <div className="card-body">

                <h5 className="card-title">{curEl.name} </h5>
                <p className="card-text">{curEl.nationality} </p>
                





                <div className="accordion" id="accordionExample">

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className={`accordion-button  ${isOpen.collapseOne ? "" : "collapsed"}`} type="button" name="collapseOne" onClick={handleOpen}>
                                Age
                            </button>
                        </h2>
                        <div id="collapseOne" className={`accordion-collapse ${isOpen.collapseOne ? "show" : "collapse"}`} >
                            <div className="accordion-body">
                                <p>{curEl.birth_year} {curEl.death_year} {(curEl.death_year ? curEl.death_year - curEl.birth_year : 2025 - curEl.birth_year)}anni </p>


                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className={`accordion-button  ${isOpen.collapseTwo ? "" : "collapsed"}`} type="button" name="collapseTwo" onClick={handleOpen}>
                                Famous for:
                            </button>
                        </h2>
                        <div id="collapseTwo" className={`accordion-collapse ${isOpen.collapseTwo ? "show" : "collapse"}`} >
                            <div className="accordion-body">
                                {(curEl.known_for || curEl.most_famous_movies).map((curEl, index) => <p key={index}> {curEl}</p>)}
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className={`accordion-button  ${isOpen.collapseThree ? "" : "collapsed"}`} type="button" name="collapseThree" onClick={handleOpen}>
                                Awards:
                            </button>
                        </h2>
                        <div id="collapseThree" className={`accordion-collapse ${isOpen.collapseThree ? "show" : "collapse"}`} >
                            <div className="accordion-body">
                                {typeof curEl.awards === "string" ? curEl.awards : curEl.awards.join(", ")}
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className={`accordion-button  ${isOpen.collapseFour ? "" : "collapsed"}`} type="button" name="collapseFour" onClick={handleOpen}>
                                Biography:
                            </button>
                        </h2>
                        <div id="collapseFour" className={`accordion-collapse ${isOpen.collapseFour ? "show" : "collapse"}`} >
                            <div className="accordion-body">
                                {curEl.biography}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default CardComponent;