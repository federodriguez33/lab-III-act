import PropTypes from 'prop-types';

const Product = ({products}) => {

    return(
        products.map((product, i) => (
            console.log(<Product name={product} key={i}/>)

        ))
    )

}

Product.propTypes = {
    products: PropTypes.array
  };

  export default Product