test('name', () => {
  expect(2 + 2).toBe(4)
  expect(2 + 2).not.toBe(7)
})

test('to be true or false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('number', () => {
  expect(4).toBeGreaterThan(3)
  expect(2).toBeLessThan(3)
})

test('object', () => {
  expect({name: '222'}).toEqual({name: '222'})
})