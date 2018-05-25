import { Delegate } from './delegate';

export class Delegation {
    delegationID: number;
    delegationUniversity: string;
    numberOfDelegates: number;
    countryAssigned: string;
    delegationStatus: string;
    paymentVerified: boolean;
    delegate: Delegate[];
};