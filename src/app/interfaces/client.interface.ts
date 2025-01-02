export interface Client {
    id?: number;
    lastName: string;
    firstName: string;
    cin: string;
    num_piece_identite: string;
    birthdate: string;
    address: string;
    email: string;
    telephone: string;
    commercialRn?: string;
    patent?: string;
    description: string;
}
