import {
	expect,
	it,
} from 'vitest'
import random from '~/utils/random/random.ts'

it('1. return "Random Int" between min and max', () =>
{
	const MIN = 1
	const MAX = 24
	
	const value = random.getRandomInt(MIN, MAX)
	
	expect(Number.isSafeInteger(value)).toBe(true)

	expect(value).toBeLessThanOrEqual(MAX)
	expect(value).toBeGreaterThanOrEqual(MIN)
	
	// 왜 작동 안하냐??
	// test.each(Array(100).fill([MIN, MAX]))('random(%i, %i) -> %i', () =>
	// {
	// 	// const value = random.getRandom(MIN, MAX)
	// 	const value = 100.112
	//
	// 	expect(Number.isSafeInteger(value)).toBe(true)
	// 	expect(value).toBeLessThanOrEqual(MAX)
	// 	expect(value).toBeGreaterThanOrEqual(MIN)
	// })
})

it('2. return "Random Date" ( server format )', () =>
{
	const value = random.getMockDate()
	
	console.log(value)
})
