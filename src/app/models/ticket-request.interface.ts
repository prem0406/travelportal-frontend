import { User } from './user.interface';

export interface TicketRequest {
    ticketRequestId: number,
    user: User,
    requestType: string,
    priority: string,
    travelCity: string,
    fromLocationCity: string,
    travelStartDate : Date,
    travelEndDate : Date,
    passportNo :string,
    projectName : string,
    expenseBourneBy: string,
    travelApproverName: string
    expectedDuration : string,
    anyUpperBound: boolean
    upperBound: string,
    additionalDetails : string
    dateCreated : Date,
    lastUpdated : Date
}