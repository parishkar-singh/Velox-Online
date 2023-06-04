import {DisplayUser} from "@/models/interfaces/DisplayUser.interface";

export interface DecodedJwt {
    user:DisplayUser
    exp:number
    iat:number
}
