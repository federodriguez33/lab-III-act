import PropTypes from 'prop-types';

const Persons = ({names}) => {

    const nameFilt = names.filter((name => name[0] === "P"));
    //const filteredNames = sortedNames.filter(name => name.startsWith("P"));
    
    return(
        
        nameFilt.map((name, i) => (

            console.log(<Persons name={name} key={i}/>)

        ))
    )

}

Persons.propTypes = {
    names: PropTypes.array
  };

  export default Persons