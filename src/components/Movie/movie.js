import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import ModalMovie from '../ModalMovie/modalMovie';

import './movie.css'

function Movie(ele) {

    const [readMore, setreadMore] = useState(false);
    let { id } = useParams();



    const [cardInfo, setCardInfo] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = ()=>setShow(false);

    return (
        <>
            {
                <Card className='div-card'>
                    <Card.Img className='div-card-img' variant="top" src={`https://image.tmdb.org/t/p/w500/${ele.mov.poster_path}`} />
                    <Card.Body>
                        <Card.Title className='div-card-title'><h4>{ele.mov.title}</h4></Card.Title>
                        <Card.Text>
                            <p className='pragraph'>{readMore ? `${ele.mov.overview}`: `${ele.mov.overview.substring(0, 100)}...   `}
                            <button id='show' onClick={() => setreadMore(!readMore)}>{!readMore ? "show more" : "show less"}</button>
                            </p>
                            {/* {ele.mov.overview} */}
                        </Card.Text>
                        
                        <div>
                            <Button className='div-card-button'  id="btu"
                                onClick={() => {
                                    setCardInfo(ele.mov)
                                    setShow(true);
                                }}>Add To Favorite</Button>
                        </div>
                    </Card.Body>
                </Card>


            }
            {
                <ModalMovie cardInfo={cardInfo} show={show} handleClose={handleClose}/>
            }


            {
                // !preps.data.length && <div><h2>no data</h2></div>
            }
        </>
    )
}
export default Movie;
