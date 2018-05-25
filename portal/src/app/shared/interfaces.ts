

export interface DelegationData {
    delegationID: string;
    delegationUniversity: string;
    numberOfDelegates: string;
    countryAssigned: string;
    delegationStatus: string;
    paymentVerified: string;
    delegates: DelegateData[];
};


export interface DelegateData {
    id: number;
    delegateId: string;
    headDelegate: string;
    firstName: string;
    lastName: string;
    telNum: string;
    email: string;
    photo: string;
    delegateCountry: string;
    committeePreferenceOne: string;
    committeePreferenceTwo: string;
    committeeAssigned: string;

};


/*
export interface DelegationData {
    parentField1: string;
    parentField2: string;
    parentHiddenField1: string;
    delegates: DelegateData[];
};

export interface DelegateData {
    id: number;
    childField1: string;
    childField2: string;
    childHiddenField1: string;
};

*/

