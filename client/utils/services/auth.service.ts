import {NewUser} from "@/models/NewUser";
import {DisplayUser} from "@/models/interfaces/DisplayUser.interface";

const register = async (newUser: NewUser): Promise<DisplayUser | null> => {

}

const authService = {
    register, login, logout, verifyJwt
}
export default authService;
