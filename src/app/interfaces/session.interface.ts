import { Participant } from './participants.interface';
export interface Session{
    sessionName : string;
    date : string;
    participant : Participant[];
}