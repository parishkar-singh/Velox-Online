import {Validator} from "@/utils/validation/models/Validator";

export const ValidateEmail:Validator = (email:string):boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim())
}
