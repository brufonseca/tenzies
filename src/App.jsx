import { useState } from 'react'
import Die from './components/Die'

export default function App() {
	const [randomNumbers, setRandomNumbers] = useState(generateAllNewDice())

	function getRandomInt(min, max) {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	function generateAllNewDice() {
		const randomNumbers = []
		for (let i = 1; i <= 10; i++) {
			randomNumbers.push(getRandomInt(1, 6))
		}

		return randomNumbers
	}

	function rollDice() {
		setDice(generateAllNewDice())
	}

	const dieComponents = randomNumbers.map((num) => <Die value={num} />)

	return (
		<main>
			<main>
				<div className="dice-container">{dieComponents}</div>
				<button className="roll" onClick={rollDice}>
					Roll Dice
				</button>
			</main>
		</main>
	)
}
