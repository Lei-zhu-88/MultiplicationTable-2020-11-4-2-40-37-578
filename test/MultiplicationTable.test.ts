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


  it('should render multiplication table of (2, 4)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 4

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('2*2=4\n2*3=6  3*3=9\n2*4=8  3*4=12  4*4=16')
  })







  // it('should render multiplication table of (2, 5)', () => {
  //   // given
  //   const table = new MultiplicationTable()
  //   const start = 2
  //   const end = 5

  //   //when
  //   const rendered = table.render(start, end)

  //   //then
  //   expect(rendered).toBe('2*2=4\n2*3=6   3*3=9\n2*4=8   3*4=12  4*4=16\n2*5=10  3*5=15  4*5=20  5*5=25')
  // })
  




})
