export type StaffInfo = {
    id: number,
    code: string,
    name: string,
    phone: string,
    role: string,
    username: string,
}
  
  // Product: Laptop
  class Staff {
  private id: number
  private code: string
  private name: string
  private phone: string
  private role: string
  private username: string
    constructor(props: StaffInfo) {
        this.id = props.id;
        this.code = props.code;
        this.name = props.name;
        this.phone = props.phone;
        this.role = props.role;
        this.username = props.username;
    };
  }
