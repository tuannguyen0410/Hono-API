export type ReceiptInfo = {
    id: number;
    code: string;
    customerName: string;
    staffName: string;
    purchaseDate: string;
    laptopList: {
        id: number;
        name: string;
    }[];
    totalPrice: number;
    paymentStrategy: string;
}

class Receipt {
    private id: number;
    private code: string;
    private customerName: string;
    private staffName: string;
    private purchaseDate: string;
    private laptopList: {
        id: number;
        name: string;
    }[];
    private totalPrice: number;
    private paymentStrategy: string;
       constructor(props: ReceiptInfo) {
        this.id = props.id
        this.code = props.code
        this.customerName = props.customerName
        this.staffName = props.staffName
        this.purchaseDate = props.purchaseDate
        this.laptopList = props.laptopList
        this.totalPrice = props.totalPrice
        this.paymentStrategy = props.paymentStrategy
       };
    }