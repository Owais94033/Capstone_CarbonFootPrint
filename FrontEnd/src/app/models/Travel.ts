

export class Travel {
    userId: number;                
    mode: string;                  
    distanceTravelled: number;     
    mileage: number;               
    fuelType: string;            
    date: string;     

    constructor(
        userId: number,
        mode: string,
        distanceTravelled: number,
        mileage: number,
        fuelType: string,
        date: string
    ) {
        this.userId = userId;
        this.mode = mode;
        this.distanceTravelled = distanceTravelled;
        this.mileage = mileage;
        this.fuelType = fuelType;
        this.date = date;
    }
}