export class Contact{
    splice(index: void, arg1: number) {
      throw new Error("Method not implemented.");
    }
    findIndex(arg0: (d: any) => boolean) {
      throw new Error("Method not implemented.");
    }
    firstname: String;
    lastname : String
    mobile : String;
    constructor(firstname?, lastname?, mobile?)
    {
        this.firstname= firstname;
        this.lastname = lastname;
        this.mobile=mobile;
    }
}