export function cloneDate(date:number): number 
  
export function addDays(date: number, days: number): number
  
export const backendPort: number
export const localStorageKey: string

export interface flat {
    id: string,
    title: string,
    details: string,
    photos: [string, string],
    coordinates: [number,number],
    bookedDates: [],
    price: number
}
  
export class FlatRentSdk {
  constructor() 
  
  get(id: string): object|number 
  
  search(parameters: [string, Date, Date, number]): object 
  
  
  book(flatId: number, checkInDate: Date, checkOutDate: Date): number 
       
  _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): Date 
  
  _resetTime(date: Date): Date 
  
  _calculateDifferenceInDays(startDate: Date, endDate: Date): number 
  
  _generateDateRange(from: Date, to: Date): [Date, Date] 
  
  _generateTransactionId(): number 
  
  _areAllDatesAvailable(flat: flat, dateRange: [Date, Date]): Date 

  _formatFlatObject(flat: flat, nightNumber: number): flat 
  
  _readDatabase(): flat 
  
  _writeDatabase(database: object): void 
  
  _syncDatabase(database:object): void 
}
  