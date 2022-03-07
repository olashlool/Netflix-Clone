import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import './modalMovie.css';
import axios from 'axios';
import { useRef } from 'react';



function ModalMovie({cardInfo, show, handleClose}) {
    const commentInputRef = useRef("");

    const addToFav = async () => {
        let comment = commentInputRef.current.value;
        let fav = { title: cardInfo.title, poster_path: cardInfo.poster_path, overview: cardInfo.overview, adult: cardInfo.adult, comment:comment}
        
        await axios.post(`${process.env.REACT_APP_BASE_URL}/addMovie`,fav)
        .then(()=>{
            console.log('Done')
        }).catch((err)=>{
            console.log(err)
        });
  
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD TO FAVORITE</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <h3>{cardInfo.title}</h3>
                    <img alt="" src={`https://image.tmdb.org/t/p/w500/${cardInfo.poster_path}`} width='550px'/>
                    <div>
                        <label htmlFor="op">Your Comment</label>
                        <input placeholder="Your Comment..." type="text" id="op" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button id='btu' variant="primary" onClick={()=>{ addToFav(); handleClose(); }}> Add To Favorite </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalMovie;
