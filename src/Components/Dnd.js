import NavBar from './NavBar'
import Footer from './Footer'
import dndheader from './imgs/DnD_Swath_Scndry_Center_V1_L_RGB.png'
import './css/Dnd.css'
function Dnd() {
  
   

    return(
        <>
        <NavBar />
        <div id="dnd-header">
           <img src={dndheader} width="100%"/> 
        </div>
        
        <div className="dnd-holder">
            <div className="wrapper">
                <div className="card-dnd1" >
                <div className="card__content">
                <i>The Player’s Handbook</i> is the essential reference for every Dungeons & Dragons roleplayer. It contains rules for character creation and advancement, backgrounds and skills, exploration and combat, equipment, spells, and much more. Use this book to create exciting characters from among the most iconic D&D races and classes.
                </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="card-dnd2" >
                <div className="card__content">
                    <i>The Monster Manual</i> presents a horde of classic Dungeons & Dragons creatures, including dragons, giants, mind flayers, and beholders—a monstrous feast for Dungeon Masters ready to challenge their players and populate their adventures.
                </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="card-dnd3" >
                <div className="card__content">
                    <i>The Dungeon Master’s Guide</i> provides the inspiration and the guidance you need to spark your imagination and create worlds of adventure for your players to explore and enjoy. Inside you’ll find world-building tools, tips and tricks for creating memorable dungeons and adventures, optional game rules, hundreds of classic D&D magic items, and much more!
                </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="card-dnd4" >
                <div className="card__content">
                The beholder Xanathar—Waterdeep’s most infamous crime lord—is known to hoard information on friend and foe alike. The beholder catalogs lore about adventurers and ponders methods to thwart them. Its twisted mind imagines that it can eventually record everything! Xanathar's Guide to Everything is the first major expansion for fifth edition Dungeons & Dragons, offering new rules and story options.
                </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="card-dnd5" >
                <div className="card__content" style={{fontSize: "13px"}}>
                The wizard Tasha, whose great works include the spell Tasha’s hideous laughter, has gathered bits and bobs of precious lore during her illustrious career as an adventurer.Full of expanded content for players and Dungeon Masters alike, this book is a great addition to the Player's Handbook and the Dungeon Master’s Guide. Baked in you'll find more rule options for all the character classes in the Player's Handbook, including more subclass options. Thrown in for good measure is the artificer class, a master of magical invention. And this witch's brew wouldn't be complete without a dash of added artifacts, spellbook options, spells for both player characters and monsters, magical tattoos, group patrons, and other tasty goodies.


                </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="card-dnd6" >
                <div className="card__content" style={{fontSize: "13px"}}>
                Under raging storm clouds, the vampire Count Strahd von Zarovich stands silhouetted against the ancient walls of Castle Ravenloft. Rumbling thunder pounds the castle spires. The wind’s howling increases as he turns his gaze down toward the village of Barovia. Far below, yet not beyond his keen eyesight, a party of adventurers has just entered his domain. Strahd’s face forms the barest hint of a smile as his dark plan unfolds. He knew they were coming, and he knows why they came—all according to his plan. A lightning flash rips through the darkness, but Strahd is gone. Only the howling of the wind fills the midnight air. The master of Castle Ravenloft is having guests for dinner. And you are invited.
                </div>
                </div>
            </div>
        </div>
        <div className="dnd-info">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet purus gravida quis blandit turpis. Varius morbi enim nunc faucibus a pellentesque sit. Nec sagittis aliquam malesuada bibendum. Elit eget gravida cum sociis natoque penatibus.</p>
            <p>Not immediately seeing what you were looking for? <a href="tel:+1">Call us</a> or <a href="/contact">send us a message</a>!</p>
        </div>
        <Footer />
        </>
    )
}

export default Dnd