import PropTypes from 'prop-types';

const FamilyMemberd = ({name, age}) => {

    return(
        
        <>
        <h3>{name}</h3>
        <p>{age}</p>
        </>

        )
    

}

FamilyMemberd.propTypes = {
    name: PropTypes.array,
    age: PropTypes.number,
  };

  export default FamilyMemberd