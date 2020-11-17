import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('1*1=1')
  })

  it('should remind that the range is not valid', () => {
    // given
    const table = new MultiplicationTable()
    const start = 0
    const end = 10

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('out of range!')
  })

  it('should return an empty string', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })

  // it('should render multiplication table of (9, 10)', () => {
  //   // given
  //   const table = new MultiplicationTable()
  //   const start = 9
  //   const end = 10

  //   //when
  //   const rendered = table.render(start, end)

  //   //then
  //   expect(rendered).toBe('9*9=81')
  // })
  




})
