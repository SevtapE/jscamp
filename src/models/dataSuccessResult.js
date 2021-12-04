import DataResult from "./dataResult.js";

export default class DataSuccessResult extends DataResult{
    constructor(message,data){
        super(true,message,data)
        // this.message=message;
        // this.data=data;

    }
}