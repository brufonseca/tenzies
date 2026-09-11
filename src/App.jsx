import nanoId from 'nano-id'
import { useState } from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import Die from './components/Die'

export default function App() {
	const [dice, setDice] = useState(generateAllNewDice())
	const { width, height } = useWindowSize()

	const gameWon =
		dice.every((die) => die.isHeld) && dice.every((die) => die.value === dice[0].value)

	function getRandomInt(min, max) {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	function generateAllNewDice() {
		const randomDice = []
		for (let i = 1; i <= 10; i++) {
			randomDice.push({ value: getRandomInt(1, 6), isHeld: false, id: nanoId() })
		}

		return randomDice
	}

	function rollDice() {
		setDice(generateAllNewDice())
		setDice((prev) =>
			prev.map((item) => {
				if (item.isHeld) {
					return { ...item }
				} else {
					return {
						...item,
						value: getRandomInt(1, 6),
					}
				}
			}),
		)
	}

	function hold(id) {
		setDice((prev) =>
			prev.map((item) => {
				if (item.id === id) {
					return { ...item, isHeld: !item.isHeld }
				}

				return { ...item }
			}),
		)
	}

	const dieComponents = dice.map((die) => (
		<Die value={die.value} isHeld={die.isHeld} key={die.id} hold={() => hold(die.id)} />
	))

	return (
		<main>
			<h1 className="title">Tenzies</h1>
			<p className="instructions">
				Roll until all dice are the same. Click each die to freeze it at its current value
				between rolls.
			</p>
			<div className="dice-container">{dieComponents}</div>
			<button className="roll" onClick={rollDice}>
				{gameWon ? 'New Game' : 'Roll'}
			</button>
			{gameWon && <Confetti width={width} height={height} />}
		</main>
	)
}
