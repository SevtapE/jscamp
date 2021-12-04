import DataResult from "./dataResult.js";

export default class DataErrorResult extends DataResult{
    constructor(message,data){
        super(false,message,data)
        // this.message=message;
        // this.data=data;

    }
}