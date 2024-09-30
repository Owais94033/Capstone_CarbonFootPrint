export class Leaderboard {
    userId: number;
    name: string;
    score: number;

    constructor(userId: number, name: string, score: number) {
        this.userId = userId;
        this.name = name;
        this.score = score;
    }
}