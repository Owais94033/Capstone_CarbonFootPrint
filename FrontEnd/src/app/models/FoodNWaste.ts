export class FoodWaste {
    userId: number;
    date: string;
    amountSpent: number;
    foodType: string;
    waterUsage: number;
  
    constructor(
      userId: number,
      date: string,
      amountSpent: number,
      foodType: string,
      waterUsage: number
    ) {
      this.userId = userId;
      this.date = date;
      this.amountSpent = amountSpent;
      this.foodType = foodType;
      this.waterUsage = waterUsage;
    }
  }
  