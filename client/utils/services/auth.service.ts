import {NewUser} from "@/models/NewUser";
import {DisplayUser} from "@/models/interfaces/DisplayUser.interface";
import axios from "axios";
import {LoginUser} from "@/models/interfaces/LoginUser.interface";
import {Jwt} from "@/models/Jwt";
import {DecodedJwt} from "@/models/interfaces/DecodedJwt.interface";
import jwt_decode from "jwt-decode";

const register = async (newUser: NewUser): Promise<DisplayUser | null> => {
    const response = await axios.post(process.env.BASE_API + '/auth/register', newUser)
    return response.data
}
const login = async (user: LoginUser): Promise<Jwt> => {
    const response = await axios.post(process.env.BASE_API + '/auth/login', user)
    localStorage.setItem('jwt', JSON.stringify(response.data))
    const decodedJwt:DecodedJwt=jwt_decode(response.data.token)
    localStorage.setItem('user', JSON.stringify(decodedJwt.user))
    return response.data
}
const logout=():void=>{
    localStorage.removeItem('jwt')
    localStorage.removeItem('user')
}
const verifyJwt=async(jwt:string):Promise<boolean> =>{
   const response=await axios.post(process.env.BASE_API+'/auth/verify-jwt',{jwt}
    )
    if(response.data){
        const jwtExpirationMs=response.data.exp*1000
        return jwtExpirationMs>Date.now()
    }
    return false
}
const authService = {
    register,login,logout,verifyJwt
}
export default authService;
