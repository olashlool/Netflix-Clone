import Movie from '../Movie/movie';
import { Container, Row, Col } from 'react-bootstrap';

function MovieList(preps) {
    return (
        <>
            <Container className='div-container'>
                <Row md={3}>
                    {
                        preps.data.length && preps.data.map((ele) => (
                            <Col key={ele.id} md={3}>
                                <Movie mov={ele}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}
export default MovieList;
