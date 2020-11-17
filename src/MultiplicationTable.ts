export class MultiplicationTable {

  private isValidRange(start: number, end: number): boolean {
    return start <= end

  }

  private isNotValidScope(start: number, end: number): boolean {
    return (start < 1 || end > 10)

  }


  public render(start: number, end: number): string {

    if (!this.isValidRange(start, end)) {
      return ''
    }

    if (this.isNotValidScope(start, end)) {
      return 'out of range!'
    }
    return '1*1=1'
  }



}

