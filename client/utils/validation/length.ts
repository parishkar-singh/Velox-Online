import {Validator} from "@/utils/validation/models/Validator";
import {LengthOptions} from "@/utils/validation/models/options/length";

const ValidateLength:Validator = (text: string, options?:LengthOptions): boolean => {
    const textLength = text.trim().length
    if(options?.min && textLength < options.min){
        return false
    }
    if(options?.max && textLength > options.max){
        return false
    }
    return true
    
}
