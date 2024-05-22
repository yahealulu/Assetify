import './Navitem.css'
const Navitem = (props) => {
  return (
    <li className="Navitem "><a className="nav" href="#">{props.children}</a> </li>
  )
}

export default Navitem