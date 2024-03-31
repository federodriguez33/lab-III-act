import PropTypes from 'prop-types';

const FamilyMemberd = ({family}) => {

    return(
        
        <>
        <h3>{family.name}</h3>
        <p>{family.age}</p>
        </>
        
        )
    

}

FamilyMemberd.propTypes = {
    family: PropTypes.array
  };

  export default FamilyMemberd