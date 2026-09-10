import Die from './components/Die'

export default function App() {
	return (
		<main>
			<main>
				<div className="dice-container">
					<Die value={5} />
					<Die value={1} />
					<Die value={6} />
					<Die value={3} />
					<Die value={5} />
					<Die value={5} />
					<Die value={5} />
					<Die value={2} />
					<Die value={5} />
					<Die value={5} />
					<Die value={3} />
				</div>
			</main>
		</main>
	)
}
