
export class ProductModel {
    public Products : RecordModel[];

    constructor() {
        this.Products = [];
    }
}

export class RecordModel {
    
    public _id:number;
    public name:string;
    public barcode:string;
    public createdOn:string;
    public expiredOn:string;
    public price:number;
    public qty:number;
    

    constructor() {
        this._id = 0;
        this.name = "";
        this.barcode = "";
        this.createdOn = "";
        this.expiredOn = "";
        this.price = 0;
        this.qty = 0;
    }
}