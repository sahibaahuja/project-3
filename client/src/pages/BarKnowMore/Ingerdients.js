import React, { Component } from 'react';
import '../BarKnowMore/bar.css'
import top5 from '../Images/top5.jpg';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';


class Ingredients extends Component {
    render() {
        return (
            <>
                <div>
                    <div className='container-ingredients'>
                        <br />
                        <div className='row'>
                            <div className='col-sm-4'></div>
                            <div className='col-sm-4'>
                                <div className="book">
                                    <div className="back"></div>
                                    <div className="page6"><h1 style={{color:'#ff0000'}}>BAR Knowledge</h1><p>All about your ingredients!</p><p> Know More!</p></div>
                                    <div className="page5"></div>
                                    <div className="page4"></div>
                                    <div className="page3"></div>
                                    <div className="page2"></div>
                                    <div className="page1"></div>
                                    <div className="front "><h1 className='pages-header'>Ingredients Input</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-4'></div>
                        </div>
                        <div style={{ textAlign: 'center', padding: '2%' }}>
                            <div className='row'>
                                <div className="card" style={{border:'none', margin:'2%', padding:'2%'}}>
                                    <div className="card-header">
                                        <h1 style={{color:'#ff0000'}}>Simple Syrup</h1>
                                        <h6>Syrup</h6>
                                    </div>
                                    <div className="card-body">
                                        <h4>Simple syrup is a commonly used ingredient in many cocktails and other drink recipes. Simple syrup is a commonly used ingredient in many cocktails and other drink recipes. It's also easy to make!</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="card" style={{border:'none', margin:'2%', padding:'2%'}}>
                                    <div className="card-header">
                                        <h1 style={{color:'#ff0000'}}>Carbonated Water</h1>
                                        <h6>Soda</h6>
                                    </div>
                                    <div className="card-body">
                                        <h4>Carbonated water is water that has been infused with carbon dioxide gas under pressure. This produces a bubbly drink that's also known as sparkling water, club soda, soda water, seltzer water and fizzy water. Carbonated water (also known as soda water, sparkling water or, especially in the U.S., seltzer or seltzer water) is water containing dissolved carbon dioxide gas, either artificially injected under pressure or occurring due to natural geological processes. Carbonation causes small bubbles to form, giving the water an effervescent quality. Common forms include sparkling natural mineral water, club soda, and commercially produced sparkling water.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="card" style={{border:'none', margin:'2%', padding:'2%'}}>
                                    <div className="card-header">
                                        <h1 style={{color:'#ff0000'}}>Milk</h1>
                                        <h6>Drink</h6>
                                    </div>
                                    <div className="card-body">
                                        <h4>Milk is a white liquid produced by the mammary glands of mammals. It is the primary source of nutrition for infant mammals (including humans who breastfeed) before they are able to digest other types of food. Early-lactation milk contains colostrum, which carries the mother's antibodies to its young and can reduce the risk of many diseases. It contains many other nutrients including protein and lactose.\r\n\r\nAs an agricultural product, milk is extracted from non-human mammals during or soon after pregnancy. Dairy farms produced about 730 million tonnes of milk in 2011, from 260 million dairy cows. India is the world's largest producer of milk, and is the leading exporter of skimmed milk powder, yet it exports few other milk products. The ever increasing rise in domestic demand for dairy products and a large demand-supply gap could lead to India being a net importer of dairy products in the future. The United States, India, China and Brazil are the world's largest exporters of milk and milk products. China and Russia were the world's largest importers of milk and milk products until 2016 when both countries became self-sufficient, contributing to a worldwide glut of milk.\r\n\r\nThroughout the world, there are more than six billion consumers of milk and milk products. Over 750 million people live in dairy farming households</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="card" style={{border:'none', margin:'2%', padding:'2%'}}>
                                    <div className="card-header">
                                        <h1 style={{color:'#ff0000'}}>Yoghurt</h1>
                                        <h6>Cream</h6>
                                    </div>
                                    <div className="card-body">
                                        <h4>Yogurt, yoghurt, or yoghourt (/ˈjoʊɡərt/ or /ˈjɒɡət/; from Turkish: yoğurt; other spellings listed below) is a food produced by bacterial fermentation of milk.[1] The bacteria used to make yogurt are known as \"yogurt cultures\". Fermentation of lactose by these bacteria produces lactic acid, which acts on milk protein to give yogurt its texture and characteristic tart flavor. Cow's milk is commonly available worldwide, and, as such, is the milk most commonly used to make yogurt. Milk from water buffalo, goats, ewes, mares, camels, and yaks is also used to produce yogurt where available locally. Milk used may be homogenized or not (milk distributed in many parts of the world is homogenized); both types may be used, with substantially different results.\r\n\r\nYogurt is produced using a culture of Lactobacillus delbrueckii subsp. bulgaricus and Streptococcus thermophilus bacteria. In addition, other lactobacilli and bifidobacteria are also sometimes added during or after culturing yogurt. Some countries require yogurt to contain a certain amount of colony-forming units of bacteria; in China, for example, the requirement for the number of lactobacillus bacteria is at least 1 × 106 CFU per milliliter.\r\n\r\nTo produce yogurt, milk is first heated, usually to about 85 °C (185 °F), to denature the milk proteins so that they do not form curds. After heating, the milk is allowed to cool to about 45 °C (113 °F). The bacterial culture is mixed in, and a temperature of 45 °C (113 °F) is maintained for four to twelve hours to allow fermentation.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="card" style={{border:'none', margin:'2%', padding:'2%'}}>
                                    <div className="card-header">
                                        <h1 style={{color:'#ff0000'}}>Coffee</h1>
                                        <h6>Coffee</h6>
                                    </div>
                                    <div className="card-body">
                                        <h4>Coffee is a brewed drink prepared from roasted coffee beans, which are the seeds of berries from the Coffea plant. The genus Coffea is native to tropical Africa (specifically having its origin in Ethiopia and Sudan) and Madagascar, the Comoros, Mauritius, and Réunion in the Indian Ocean. The plant was exported from Africa to countries around the world and coffee plants are now cultivated in over 70 countries, primarily in the equatorial regions of the Americas, Southeast Asia, India, and Africa. The two most commonly grown are the highly regarded arabica, and the less sophisticated but stronger and more hardy robusta. Once ripe, coffee berries are picked, processed, and dried. Dried coffee seeds (referred to as beans) are roasted to varying degrees, depending on the desired flavor. Roasted beans are ground and brewed with near-boiling water to produce coffee as a beverage.\r\n\r\nCoffee is slightly acidic and can have a stimulating effect on humans because of its caffeine content. Coffee is one of the most popular drinks in the world. It can be prepared and presented in a variety of ways (e.g., espresso, French press, cafe latte, etc.). It is usually served hot, although iced coffee is also served. Clinical studies indicate that moderate coffee consumption is benign or mildly beneficial in healthy adults, with continuing research on whether long-term consumption inhibits cognitive decline during aging or lowers the risk of some forms of cancer.\r\n\r\nThe earliest credible evidence of coffee-drinking appears in the middle of the 15th century in the Sufi shrines of Yemen. It was here in Arabia that coffee seeds were first roasted and brewed in a similar way to how it is now prepared. Coffee seeds were first exported from East Africa to Yemen, as the coffea arabica plant is thought to have been indigenous to the former. Yemeni traders took coffee back to their homeland and began to cultivate the seed. By the 16th century, it had reached Persia, Turkey, and North Africa. From there, it spread to Europe and the rest of the world.\r\n\r\nCoffee is a major export commodity: it is the top agricultural export for numerous countries and is among the world's largest legal agricultural exports. It is one of the most valuable commodities exported by developing countries. Green (unroasted) coffee is one of the most traded agricultural commodities in the world. Some controversy is associated with coffee cultivation and the way developed countries trade with developing nations and the impact of its cultivation on the environment, in regards to clearing of land for coffee-growing and water use. Consequently, the markets for fair trade coffee and organic coffee are expanding.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="card" style={{border:'none', margin:'2%', padding:'2%'}}>
                                    <div className="card-header">
                                        <h1 style={{color:'#ff0000'}}>Tea</h1>
                                        <h6>Tea</h6>
                                    </div>
                                    <div className="card-body">
                                        <h4>Tea is an aromatic beverage commonly prepared by pouring hot or boiling water over cured leaves of the Camellia sinensis, an evergreen shrub (bush) native to East Asia.[3] After water, it is the most widely consumed drink in the world.[4] There are many different types of tea; some, like Darjeeling and Chinese greens, have a cooling, slightly bitter, and astringent flavour,[5] while others have vastly different profiles that include sweet, nutty, floral or grassy notes. Tea originated in Southwest China during the Shang dynasty, where it was used as a medicinal drink.[6] An early credible record of tea drinking dates to the 3rd century AD, in a medical text written by Hua Tuo.[7] It was popularized as a recreational drink during the Chinese Tang dynasty, and tea drinking spread to other East Asian countries. Portuguese priests and merchants introduced it to Europe during the 16th century.[8] During the 17th century, drinking tea became fashionable among Britons, who started large-scale production and commercialization of the plant in India. Combined, China and India supplied 62% of the world's tea in 2016. The term herbal tea refers to drinks not made from Camellia sinensis: infusions of fruit, leaves, or other parts of the plant, such as steeps of rosehip, chamomile, or rooibos. These are sometimes[9] called tisanes or herbal infusions to prevent confusion with tea made from the tea plant</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="card" style={{border:'none', margin:'2%', padding:'2%'}}>
                                    <div className="card-header">
                                        <h1 style={{color:'#ff0000'}}>Heavy Cream</h1>
                                        <h6>Cream</h6>
                                    </div>
                                    <div className="card-body">
                                        <h4>Cream is a dairy product composed of the higher-butterfat layer skimmed from the top of milk before homogenization. In un-homogenized milk, the fat, which is less dense, will eventually rise to the top. In the industrial production of cream, this process is accelerated by using centrifuges called \"separators\". In many countries, cream is sold in several grades depending on the total butterfat content. Cream can be dried to a powder for shipment to distant markets. Cream has high levels of saturated fat.\r\n\r\nCream skimmed from milk may be called \"sweet cream\" to distinguish it from whey cream skimmed from whey, a by-product of cheese-making. Whey cream has a lower fat content and tastes more salty, tangy and \"cheesy\".[3] In many countries, cream is usually sold partially fermented: sour cream, crème fraîche, and so on.\r\n\r\nCream has many culinary uses in sweet, bitter, salty and tangy dishes.\r\n\r\nCream produced by cattle (particularly Jersey cattle) grazing on natural pasture often contains some natural carotenoid pigments derived from the plants they eat; this gives the cream a slight yellow tone, hence the name of the yellowish-white color, cream. This is also the origin of butter's yellow color. Cream from goat's milk, or from cows fed indoors on grain or grain-based pellets, is white.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="card" style={{border:'none', margin:'2%', padding:'2%'}}>
                                    <div className="card-header">
                                        <h1 style={{color:'#ff0000'}}>7-Up</h1>
                                        <h6>Soft-Drink</h6>
                                    </div>
                                    <div className="card-body">
                                        <h4>7 Up (stylized as 7up outside of the U.S.) is a brand of lemon-lime flavored, non-caffeinated soft drink. The rights to the brand are held by Dr Pepper Snapple Group in the United States, and PepsiCo (or its licensees) in the rest of the world. The U.S. version of the 7 Up logo includes a red cherry between the \"7\" and \"Up\"; this red cherry has been animated and used as a mascot for the brand as Cool Spot.\r\n\r\n7 Up was created by Charles Leiper Grigg, who launched his St. Louis–based company The Howdy Corporation in 1920.[1] Grigg came up with the formula for a lemon-lime soft drink in 1929. The product, originally named \"Bib-Label Lithiated Lemon-Lime Soda\", was launched two weeks before the Wall Street Crash of 1929.[2] It contained lithium citrate, a mood-stabilizing drug, until 1950.[3] It was one of a number of patent medicine products popular in the late-19th and early-20th centuries. Its name was later shortened to \"7 Up Lithiated Lemon Soda\" before being further shortened to just \"7 Up\" by 1936.\r\n\r\nWestinghouse bought 7 Up in 1969 and sold it in 1978 to Philip Morris, who then in 1986 sold it to a group led by the investment firm Hicks & Haas.[4] 7 Up merged with Dr Pepper in 1988; Cadbury Schweppes bought the combined company in 1995. The Dr Pepper Snapple Group was spun off from Cadbury Schweppes in 2008.\r\n\r\n7 Up has been reformulated several times since its launch in 1929. In 2006, the version of the product sold in the U.S. was re-formulated so that it could be marketed as being \"100% natural\". This was achieved by eliminating the chelating-agent calcium disodium EDTA, and replacing sodium citrate with potassium citrate in order to reduce the beverage's sodium content.[5] This re-formulation contains no fruit juice and, in the U.S., is sweetened with high-fructose corn syrup (HFCS). The manufacturing process used in the production of HFCS has led some public health and advocacy groups to challenge the ad campaign's \"natural\" claims.[6] In 2007, after the Center for Science in the Public Interest threatened to sue 7 Up, it was announced that 7 Up would stop being marketed as \"100% natural\". Instead, it is now promoted as having \"100% Natural Flavors\". The controversy does not extend to other countries, such as the United Kingdom, where HFCS is not generally used in foods, including 7 Up. In 2011, 7 Up began test-marketing a formula, called 7 Up Retro, using sugar rather than HFCS. Container labels sport the caption, \"Made With Real Sugar\".\r\n\r\nThere exists a myth that the 7 Up name comes from the drink having a pH over 7. That would make it neutral or basic on the scale; however, this is not the case, as the 7 Up pH is close to 3.79, similar to other drinks of the type.[7] The real origin of the name is unclear,[8] though Britvic claims that the name comes from the seven main ingredients in the drink,[9] while others have claimed that the number was a coded reference to the lithium contained in the original recipe, which has an atomic mass of approximately 7.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="card" style={{border:'none', margin:'2%', padding:'2%'}}>
                                    <div className="card-header">
                                        <h1 style={{color:'#ff0000'}}>Lime</h1>
                                        <h6>Fruit</h6>
                                    </div>
                                    <div className="card-body">
                                        <h4>A lime (from French lime, from Arabic līma, from Persian līmū, \"lemon\") is a hybrid citrus fruit, which is typically round, lime green, 3–6 centimetres (1.2–2.4 in) in diameter, and contains acidic juice vesicles.\r\n\r\nThere are several species of citrus trees whose fruits are called limes, including the Key lime (Citrus aurantifolia), Persian lime, kaffir lime, and desert lime. Limes are an excellent source of vitamin C, and are often used to accent the flavours of foods and beverages. They are grown year-round. Plants with fruit called \"limes\" have diverse genetic origins; limes do not form a monophyletic group.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="card" style={{border:'none', margin:'2%', padding:'2%'}}>
                                    <div className="card-header">
                                        <h1 style={{color:'#ff0000'}}>Lemon</h1>
                                        <h6>Fruit</h6>
                                    </div>
                                    <div className="card-body">
                                        <h4>The lemon, Citrus limon (L.) Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to Asia.\r\n\r\nThe tree's ellipsoidal yellow fruit is used for culinary and non-culinary purposes throughout the world, primarily for its juice, which has both culinary and cleaning uses. The pulp and rind (zest) are also used in cooking and baking. The juice of the lemon is about 2% to 6% citric acid, with a pH of around 2.2, giving it a sour taste. The distinctive sour taste of lemon juice makes it a key ingredient in drinks and foods such as lemonade and lemon meringue pie.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="card" style={{border:'none', margin:'2%', padding:'2%'}}>
                                    <div className="card-header">
                                        <h1 style={{color:'#ff0000'}}>Orange</h1>
                                        <h6>Fruit</h6>
                                    </div>
                                    <div className="card-body">
                                        <h4>The orange is the fruit of the citrus species Citrus × sinensis in the family Rutaceae. It is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.\r\n\r\nThe orange is a hybrid between pomelo (Citrus maxima) and mandarin (Citrus reticulata). It has genes that are ~22% pomelo and ~72% mandarin; however, it is not a simple backcrossed BC1 hybrid, but hybridized over multiple generations. The chloroplast genes, and therefore the maternal line, seem to be pomelo. The sweet orange has had its full genome sequenced. Earlier estimates of the percentage of pomelo genes varying from ~50% to 6% have been reported.\r\n\r\nSweet oranges were mentioned in Chinese literature in 314 BC. As of 1987, orange trees were found to be the most cultivated fruit tree in the world. Orange trees are widely grown in tropical and subtropical climates for their sweet fruit. The fruit of the orange tree can be eaten fresh, or processed for its juice or fragrant peel. As of 2012, sweet oranges accounted for approximately 70% of citrus production.\r\n\r\nIn 2014, 70.9 million tonnes of oranges were grown worldwide, with Brazil producing 24% of the world total followed by China and India.sdaf</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="card" style={{border:'none', margin:'2%', padding:'2%'}}>
                                    <div className="card-header">
                                        <h1 style={{color:'#ff0000'}}>strawberry</h1>
                                        <h6>Fruit</h6>
                                    </div>
                                    <div className="card-body">
                                        <h4>The garden strawberry (or simply strawberry; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries. It is cultivated worldwide for its fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness. It is consumed in large quantities, either fresh or in such prepared foods as preserves, juice, pies, ice creams, milkshakes, and chocolates. Artificial strawberry flavorings and aromas are also widely used in many products like lip gloss, candy, hand sanitizers, perfume, and many others.\r\n\r\nThe garden strawberry was first bred in Brittany, France, in the 1750s via a cross of Fragaria virginiana from eastern North America and Fragaria chiloensis, which was brought from Chile by Amédée-François Frézier in 1714. Cultivars of Fragaria × ananassa have replaced, in commercial production, the woodland strawberry (Fragaria vesca), which was the first strawberry species cultivated in the early 17th century.\r\n\r\nThe strawberry is not, from a botanical point of view, a berry. Technically, it is an aggregate accessory fruit, meaning that the fleshy part is derived not from the plant's ovaries but from the receptacle that holds the ovaries.Each apparent \"seed\" (achene) on the outside of the fruit is actually one of the ovaries of the flower, with a seed inside it.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Ingredients;
