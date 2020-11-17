export class MultiplicationTable {

  public render(start: number, end: number): string {

    if (!isValidRange(start, end)) {
      return ''
    }

    if (isNotValidScope(start, end)) {
      return 'out of range!'
    }

    const expressions: Expression[][] = buildExpressions(start, end)
    return renderTable(expressions)


  }
}

function isValidRange(start: number, end: number): boolean {
  return start <= end

}

function isNotValidScope(start: number, end: number): boolean {
  return start < 1 || start > 10 || end < 1 || end > 10

}

interface Expression {
  factor1: number
  factor2: number
  product: number
}

function buildExpressions(start: number, end: number): Expression[][] {


  const tempExpressions: Expression[][] = []
  var tempExpression: Expression

  for (var i = 0; i <= end - start; i++) {
    tempExpressions[i] = []
    for (var j = 0; j <= i; j++) {
      tempExpression = {
        factor1: start + j,
        factor2: start + i,
        product: (start + j) * (start + i)
      }
      tempExpressions[i].push(tempExpression)
    }

  }

  return tempExpressions
}

function renderTable(expressions: Expression[][]): string {

  // return expressions.map(row => row.map(({ factor1, factor2, product }) => `${factor1}*${factor2}=${product}`).join('  ')).join('\n')
  var expressionsString: string[][];
  expressionsString = expressions.map(row => row.map(({ factor1, factor2, product }) => `${factor1}*${factor2}=${product}`))

  for (var i = expressionsString.length - 2; i >= 0; i--) {
    for (var j = 0; j < expressionsString[i].length-1; j++) {
      if (expressionsString[i][j].length < expressionsString[expressionsString.length - 1][j].length) {
        for (var k = 0; k < expressionsString[expressionsString.length - 1][j].length - expressionsString[i][j].length; i++) {
          expressionsString[i][j] += ' '
          
        }
      }


    }

  }

  return expressionsString.map(row=>row.join('  ')).join('\n')

}

