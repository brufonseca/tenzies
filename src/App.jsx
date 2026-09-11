import { useState } from 'react'
import Die from './components/Die'

export default function App() {
	const [dice, setDice] = useState(generateAllNewDice())

	function getRandomInt(min, max) {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	function generateAllNewDice() {
		const randomDice = []
		for (let i = 1; i <= 10; i++) {
			randomDice.push({ value: getRandomInt(1, 6), isHeld: false, id: i })
		}

		return randomDice
	}

	function rollDice() {
		setDice(generateAllNewDice())
	}

	const dieComponents = dice.map((die) => (
		<Die value={die.value} isHeld={die.isHeld} id={die.id} />
	))

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
