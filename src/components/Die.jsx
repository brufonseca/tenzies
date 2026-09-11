export default function Die(props) {
	return (
		<button className={`button ${props.isHeld ? 'green' : ''}`} onClick={props.hold}>
			{props.value}
		</button>
	)
}
