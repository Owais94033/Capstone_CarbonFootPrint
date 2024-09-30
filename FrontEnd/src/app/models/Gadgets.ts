export class Gadget {
    userId: number;          // ID of the user
    date: string;            // Date of usage (could be a string or Date object)
    mobileName: string;      // Name of the mobile device
    mobileUsageTime: number; // Usage time for mobile in hours (or minutes)
    laptopName: string;      // Name of the laptop device
    laptopUsageTime: number; // Usage time for laptop in hours (or minutes)

    constructor(
        userId: number,
        date: string,
        mobileName: string,
        mobileUsageTime: number,
        laptopName: string,
        laptopUsageTime: number
    ) {
        this.userId = userId;
        this.date = date;
        this.mobileName = mobileName;
        this.mobileUsageTime = mobileUsageTime;
        this.laptopName = laptopName;
        this.laptopUsageTime = laptopUsageTime;
    }
}