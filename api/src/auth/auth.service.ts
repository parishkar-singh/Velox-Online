import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {UserService} from "../user/user.service";
import * as bcrypt from 'bcrypt';
import {NewUserDTO} from "../user/dtos/new-user.dto";
import {UserDetails} from "../user/user-details.interface";
import {ExistingUserDTO} from "../user/dtos/existing-user.dto";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {
    }

    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 12)
    }

    async register(user: Readonly<NewUserDTO>): Promise<UserDetails | null | string> {
        const {name, email, password} = user
        const existingUser = await this.userService.findByEmail(email, true)
        if(existingUser) throw new HttpException('Account with that email already exists!',(HttpStatus.UNAUTHORIZED))
        const hashedPassword = await this.hashPassword(password);
        const newUser = await this.userService.create(name, email, hashedPassword);
        return this.userService._getUserDetails(newUser);
    }
    async doesPasswordMatch(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword)
    }
    async validateUser(email: string, password: string): Promise<UserDetails | any | null> {
        const user = await this.userService.findByEmail(email, true)
        if (!user) return null
        const isPasswordMatching = await this.doesPasswordMatch(password, user.password)
        if (!isPasswordMatching) return null
        return this.userService._getUserDetails(user)
    }
    async login(existingUser: ExistingUserDTO): Promise<{ token: string } | null> {
        const {email, password} = existingUser
        const user = await this.validateUser(email, password)
        if (!user) return null
        const jwt = await this.jwtService.signAsync({user})
        return {token: jwt}
    }
    async verifyJwt(jwt: string): Promise<{ exp: number }> {
        try {
            const {exp} = await this.jwtService.verifyAsync(jwt)
            return {exp}
        } catch (e) {
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED)
        }
    }
}


