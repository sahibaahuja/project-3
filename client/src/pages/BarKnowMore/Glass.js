import React, { Component } from 'react';
import '../BarKnowMore/bar.css'
import top5 from '../Images/top5.jpg';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';

import high from '../Images/high.jpg';
import cocktail from '../Images/cocktail.jpg';
import old from '../Images/old.jpg';
import collins from '../Images/collins.jpg';
import champ from '../Images/champ.jpg';
import brandy from '../Images/brandy.jpg';
import hurricane from '../Images/hurricane.jpg';
import pint from '../Images/pint.jpg';
import wine from '../Images/wine.jpg';
import cordial from '../Images/cordial.jpg';
import beer from '../Images/beer.jpg';
import coupette from '../Images/coupette.jpg';
import pilsner from '../Images/pilsner.jpg';
import parfait from '../Images/parfait.jpg';
import margarita from '../Images/margarita.jpg';
import martini from '../Images/martini.jpg';
import balloon from '../Images/balloon.jpg';
import coupe from '../Images/coupe.jpg';
// import jumbo from '../Images/jumbo.jpg';
// import jumbo1 from '../Images/jumbo1.jpg';
// import jumbo3 from '../Images/jumbo3.jpg';
// import jumbo4 from '../Images/jumbo4.jpg';
// import jumbo6 from '../Images/jumbo6.jpg';
// import jumbo11 from '../Images/jumbo11.jpg';


class Glass extends Component {
    render() {
        return (
            <>
                <div>
                    <div className='container-glass'>
                        <h2 className='pages-header'>Glass Gallery</h2>
                        <div className='barpage'>
                            <div className="box">
                                <img src={high} alt="Drinks" />
                                <span className="header1">Highball Glass</span>
                            </div>
                            <div className="box">
                                <img src={cocktail} alt="Drinks" />
                                <span>Cocktail Glass</span>
                            </div>
                            <div className="box">
                                <img src={old} alt="Drinks" />
                                <span>Old Fashioned Glass</span>
                            </div>
                            <div className="box">
                                <img src={collins} alt="Drinks" />
                                <span>Collins Glass</span>
                            </div>
                            <div className="box">
                                <img src={champ} alt="Drinks" />
                                <span> Champagne Flute</span>
                            </div>
                            <div className="box">
                                <img src={brandy} alt="Drinks" />
                                <span>Brandy Snifter</span>
                            </div>
                        </div>
                        <div className='barpage'>
                            <div className="box">
                                <img src={hurricane} alt="Drinks" />
                                <span>Hurricane Glass</span>
                            </div>
                            <div className="box">
                                <img src={pint} alt="Drinks" />
                                <span>Pint Glass</span>
                            </div>
                            <div className="box">
                                <img src={wine} alt="Drinks" />
                                <span>Wine Glass</span>
                            </div>
                            <div className="box">
                                <img src={cordial} alt="Drinks" />
                                <span>Cordial Glass</span>
                            </div>
                            <div className="box">
                                <img src={beer} alt="Drinks" />
                                <span>Beer Mug</span>
                            </div>
                            <div className="box">
                                <img src={coupette} alt="Drinks" />
                                <span> Coupette glass</span>
                            </div>
                        </div>
                        <div className='barpage'>
                            <div className="box">
                                <img src={pilsner} alt="Drinks" />
                                <span>Beer Pilsner</span>
                            </div>
                            <div className="box">
                                <img src={parfait} alt="Drinks" />
                                <span>Parfait Glass</span>
                            </div>
                            <div className="box">
                                <img src={margarita} alt="Drinks" />
                                <span>Margarita Glass</span>
                            </div>
                            <div className="box">
                                <img src={martini} alt="Drinks" />
                                <span> Martini Glass</span>
                            </div>
                            <div className="box">
                                <img src={balloon} alt="Drinks" />
                                <span>Balloon Glass</span>
                            </div>
                            <div className="box">
                                <img src={coupe} alt="Drinks" />
                                <span>Coupe Glass</span>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default Glass;
