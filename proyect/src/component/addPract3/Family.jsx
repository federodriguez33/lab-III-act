import PropTypes from 'prop-types';
import FamilyMemberd from "./FamilyMember";

const Family = ({personsAge}) => {

    return(

        personsAge.map((f, i) => (
            
            <FamilyMemberd name={f.name} age={f.age} key={i}/>

        ))
    )

}

Family.propTypes = {
    personsAge: PropTypes.array
  };

  export default Family