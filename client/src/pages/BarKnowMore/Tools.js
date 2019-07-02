import React, { Component } from 'react';
import '../BarKnowMore/bar.css'
import top5 from '../Images/top5.jpg';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';

import jigger from '../Images/jigger.jpg';
import shaker from '../Images/shaker.jpg';
import strainer from '../Images/strainer.jpg';
import spoon from '../Images/spoon.jpg';
import muddler from '../Images/muddler.jpg';
import knife from '../Images/knife.jpg';
import glass from '../Images/glass.jpg';
import citrus from '../Images/citrus.jpg';
// import jumbo from '../Images/jumbo.jpg';
// import jumbo1 from '../Images/jumbo1.jpg';
// import jumbo3 from '../Images/jumbo3.jpg';
// import jumbo4 from '../Images/jumbo4.jpg';
// import jumbo6 from '../Images/jumbo6.jpg';
// import jumbo11 from '../Images/jumbo11.jpg';

class Tools extends Component {
    render() {
        return (
            <>
                <div>
                    <div className='container-tools'>
                        <h2 className='pages-header'>Bar Tools</h2>
                        <div className='barpage'>
                            <div className="box">
                                <img src={jigger} alt="Drinks" />
                                <span>Jigger</span>
                                <p>Jigger is a handy measurement tool to help you create a perfect cocktail. 
                                </p>
                            </div>
                            <div className="box">
                                <img src={shaker} alt="Drinks" />
                                <span>Shaker</span>
                                <p>A cocktail shaker is used to mix beverages by shaking. When ice is put in the shaker this allows for a quicker cooling of the drink before serving.</p>
                            </div>
                            <div className="box">
                                <img src={strainer} alt="Drinks" />
                                <span>Strainer</span>
                                <p>A cocktail strainer is a metal bar accessory used to remove ice from a mixed drink as it is poured into the serving glass.</p>
                            </div>
                            <div className="box">
                                <img src={spoon} alt="Drinks" />
                                <span>Bar Spoon</span>
                                <p>It is a metal spoon with a long and spiral handle, great for stirring drinks. Bar spoon is better than a normal spoon because it fits in any type of glassware and since cocktails require different glassware, a bar spoon comes in handy.
                                </p>
                            </div>
                        </div>
                        <div className='barpage'>
                        <div className="box">
                                <img src={muddler} alt="Drinks" />
                                <span>Muddler</span>
                                <p>For cocktails like Caipirinha or Mojito, you need a muddler to process the herbs. Muddling requires some technique but the key is to wake up the aromas of your herbs without bruising it. Bruising the herbs releases a chemical that damage the taste of cocktails.</p>
                            </div>
                            <div className="box">
                                <img src={knife} alt="Drinks" />
                                <span>Channel Knife</span>
                                <p>Channel knives, a small spoon-shaped knife, are used for garnish by peeling long, thin spirals from citrus fruits. </p>
                            </div>
                            <div className="box">
                                <img src={glass} alt="Drinks" />
                                <span>Glasses</span>
                                <p>A nice glass will make your cocktail even more attractive and the center of everyone's attention.</p>
                            </div>
                            <div className="box">
                                <img src={citrus} alt="Drinks" />
                                <span>Citrus Juicer</span>
                              <p>Citrus Juicer it is a simple deep round dish with a cone to squeeze the juice out of any citrus fruits. Some even have a strainer to separate the pulp from the juice. </p>
                            </div>
                           
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default Tools;
