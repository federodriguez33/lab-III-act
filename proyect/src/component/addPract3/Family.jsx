import PropTypes from 'prop-types';
import FamilyMemberd from "./FamilyMember";

const Family = ({family}) => {

    return(
        family.map((f, i) => (
            <FamilyMemberd name:family.name/>

        ))
    )

}

Family.propTypes = {
    family: PropTypes.array
  };

  export default Family