import PropTypes from 'prop-types';
import css from "../ContactsList/ContactsList.module.css"
const ContactsList=({contacts,onDelete})=>{
    return(
        contacts.length===0?<h2 className={css.notify}>There isn`t such contact</h2>:
        <ul className={css.list}>
            {contacts.map(({id,name,number})=>
            <li className={css.item} key={id}>
                <p className={css.name}>{name}: </p>
                <p className={css.number}>{number}</p>
                <button className={css.button} type="button" onClick={()=>onDelete(id)}>Delete</button>
            </li>
            )}
        </ul>)
}
export default ContactsList

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    onDelete: PropTypes.func.isRequired,
  };