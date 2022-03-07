import Carousel from 'react-bootstrap/Carousel';
import React from 'react';



function Carousel1() {
    return <div>
            <Carousel>
    <Carousel.Item>
        <img className="d-block w-100"
            src="https://static0.srcdn.com/wordpress/wp-content/uploads/2019/02/Jon-Snow-Game-of-Thrones-poster.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5"
            alt="First slide"/>
    <Carousel.Caption>
        <h3>Game of Thrones</h3>
        <p>Years after a rebellion spurred by a stolen bride to be and the blind ambitions of a mad King, Robert of the house Baratheon (Mark Addy) sits on the much desired Iron Throne. In the mythical land of Westeros, nine noble families fight for every inch of control and every drop of power..</p>
    </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
    <img className="d-block w-100"
        src="https://i0.wp.com/www.fredzone.org/wp-content/uploads/2021/09/squid-game-1-640x359.jpg?resize=696%2C390&ssl=1"
        alt="Second slide"/>
    <Carousel.Caption>
        <h3>Squid Game</h3>
        <p>The series revolves around Seong Gi-hun, a divorced and indebted chauffeur, who is invited to play a series of children's games for a chance earning a large cash prize. When he accepts the offer, he is taken to an unknown location where he finds himself among 455 other players who are also deeply in debt..</p>
    </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
        <img className="d-block w-100"
            src="https://www.ladbible.com/cdn-cgi/image/width=720,quality=70,format=jpeg,fit=pad,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2Ffd687a65596f4b26d2b7a7c6504a4b28.png"
            alt="Third slide"/>
    <Carousel.Caption>
        <h3>The Walking Dead</h3>
        <p>The Walking Dead tells the story of the months and years that follow after a zombie apocalypse. It follows a group of survivors, led by former police officer Rick Grimes, who travel in search of a safe and secure home.</p>
    </Carousel.Caption>
    </Carousel.Item>
</Carousel>
    </div>

}
export default Carousel1;

