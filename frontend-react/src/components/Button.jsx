
import { Link } from 'react-router-dom'

const Login = (props) => {
  return (
    <>
    <Link to={props.url} className={`btn ${props.class}`}>{props.text}</Link>
    </>
  )
}

export default Login