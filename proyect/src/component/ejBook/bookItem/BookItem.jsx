import PropTypes from 'prop-types';
import { Card } from "react-bootstrap";



const BookItem = ({ title, author, pageCount, rating, imageUrl }) => {

  return (
    
    <Card style={{ width: "15rem", height: "auto", marginTop: "20px"}} className="mx-3">

    <Card.Img
    height={250}
    variant="top"
    src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
    />

    <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Subtitle>{author}</Card.Subtitle>
    <div>{rating?.length} estrellas</div>
    <p>{pageCount} páginas</p>
    </Card.Body>

    </Card>

  );
};

BookItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pageCount: PropTypes.number,
  rating: PropTypes.array,
  imageUrl: PropTypes.string,
}

export default BookItem;