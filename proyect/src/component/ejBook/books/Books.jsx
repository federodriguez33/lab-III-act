import PropTypes from 'prop-types';
import BookItem from "../bookItem/BookItem";

const Books = ({ books }) => {

    return (

        <div className="d-flex justify-content-center flex-wrap">
            {books.map((book, index) => (
                <BookItem
                    key={index}
                    title={book.bookTitle}
                    author={book.bookAuthor}
                    rating={book.bookRating}
                    pageCount={book.pageCount}
                    imageUrl={book.imageUrl}
                />
            ))}
        </div>

    );

};

Books.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
      bookTitle: PropTypes.string,
      bookAuthor: PropTypes.string,
      bookRating: PropTypes.array,
      pageCount: PropTypes.number,
      imageUrl: PropTypes.string,
    })).isRequired
    }

export default Books