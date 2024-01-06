export type CustomerInfo = {
    id: number;
    code: string;
    name: string;
    phone: string;
}

class Customer {
   private id: number;
   private code: string;
   private name: string;
   private phone: string;
       constructor(props: CustomerInfo) {
         this.id = props.id
         this.code = props.code
         this.name = props.name
         this.phone = props.phone
       };
     }