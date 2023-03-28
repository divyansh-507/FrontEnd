export class Transaction{
    id !: string;
    employeeId !: string;
    customerId !: string;
    // dateTime !: LocalDateTime;
    productDetails !: string;
    totalAmount !: number;
    paymentType !: string;

    constructor(
        id: string, 
        employeeId: string,
        customerId : string,
        // dateTime !: LocalDateTime,
        productDetails : string,
        totalAmount : number,
        paymentType : string
    ){
        this.id = id;
        this.employeeId = employeeId;
        this.customerId = customerId;
        // this.dateTime = dateTime;
        this.productDetails = productDetails;
        this.totalAmount = totalAmount;
        this.paymentType = paymentType;
    }
}