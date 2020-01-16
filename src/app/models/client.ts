export interface Client {
    id?: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    balance: number;
    created_at?: Date;
    updated_at?: Date;
}
