import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {NewUserDTO} from "../user/dtos/new-user.dto";
import {UserDetails} from "../user/user-details.interface";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @Post('register')
    async register(@Body() user: NewUserDTO): Promise<UserDetails | null | string> {
        return await this.authService.register(user)

    }
}
