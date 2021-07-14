import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroresById } from '../../selectors/getHeroesById';

export const HeroesScreen = ({ history }) => {
    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroresById(heroeId), [heroeId])

    if (!hero) { <Redirect to="/" /> }

    const { superhero, publisher, alter_ego, first_appearance, characters, } = hero[0];
    const handleReturn = () => {
        history.replace('/');
    }
    return (
        < div style={{ backgroundImage: `url("../assets/${heroeId}.jpg")`, overflow: 'hidden' }} className="bcg">
            <div className="container-fluid  p-0 bcg-effect">
                <div className="row p-sm-0 p-md-5" >
                    <div className="col-md-4 col-sm-12 ">
                        <img src={`../assets/${heroeId}.jpg`} className="card card-img card-glass animate__animated animate__fadeInLeft"
                            style={{ maxWidth: 500 }} alt={superhero} />
                    </div>

                    <div className="card-body card-glass col-md-5 col-sm-12 animate__animated animate__fadeInLeft">
                        <h5 className="card-title"> {superhero} </h5>
                        <p className="card-text "> {alter_ego}</p>  {(alter_ego !== characters) && <p className="card-text">{characters}</p>}
                        <p className="card-text"> <small className="text-muted">{first_appearance}</small> </p>
                        <button className="btn btn-outline-primary"
                            onClick={handleReturn}>
                            Return
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}
