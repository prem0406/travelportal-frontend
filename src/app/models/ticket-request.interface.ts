import { User } from './user.interface';

export interface TicketRequest {
    ticketRequestId: number,
    user: User,
    requestType: string,
    priority: string,
    travelCity: string,
    fromCityLocation: string,
    travelStartDate : Date,
    travelEndDate : Date,
    passportNo :string,
    projectName : string,
    expenseBourneBy: string,
    travelApproverName: string
    expectedDuration : string,
    upperBound: string,
    additionalDetails : string,
    status: string,
    dateCreated : Date,
    lastUpdated : Date
}