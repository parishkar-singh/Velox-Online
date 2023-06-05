import {NewUser} from "@/models/NewUser";
import {DisplayUser} from "@/models/interfaces/DisplayUser.interface";
import axios from "axios";

const register = async (newUser: NewUser): Promise<DisplayUser | null> => {
    const response = await axios.post(process.env.BASE_API + '/auth/register', newUser)
    return response.data
}


const authService = {
    register
}
export default authService;