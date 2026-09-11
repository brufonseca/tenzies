export default function Die(props) {
	return <button className={`button ${props.isHeld ? 'green' : ''}`}>{props.value}</button>
}
