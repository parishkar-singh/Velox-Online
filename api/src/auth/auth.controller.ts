import {Body, Controller, HttpCode, HttpStatus, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {NewUserDTO} from "../user/dtos/new-user.dto";
import {UserDetails} from "../user/user-details.interface";
import {ExistingUserDTO} from "../user/dtos/existing-user.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @Post('register')
    async register(@Body() user: NewUserDTO): Promise<UserDetails | null | string> {
        return await this.authService.register(user)
    }
    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() user: ExistingUserDTO): Promise<{ token: string } | null> {
        return await this.authService.login(user)
    }
    @Post('verify-jwt')
    @HttpCode(HttpStatus.OK)
    async verifyJwt(@Body() payload:{jwt:string}): Promise<boolean> {
        return await this.authService.verifyJwt(payload.jwt)
    }

}
