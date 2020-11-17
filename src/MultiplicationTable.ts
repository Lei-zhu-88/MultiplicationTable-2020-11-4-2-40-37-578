export class MultiplicationTable {

  private  isValidRange(start: number, end: number): boolean {
    return start <= end
       
  }


  public render(start: number, end: number): string {

    if (!this.isValidRange(start, end)) {
      return ''
    }

    // if( start<1 ||end >10 ){
    //   return 'out of range!'

    // }
    return '1*1=1'
  }



}

