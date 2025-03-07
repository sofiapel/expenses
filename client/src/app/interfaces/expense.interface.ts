export interface Expense {
    id: number;
    userId: number;
    title: string;
    amount: number;
    description: string; 
    date: Date;
    isDeleted: boolean;

}