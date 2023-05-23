import {Controller, Get, Param} from '@nestjs/common';
import {UserService} from "./user.service";
import {UserDocument} from "./user.schema";
import {UserDetails} from "./user-details.interface";

@Controller('user')
export class UserController {
    constructor(private userService:UserService) {
    }
    @Get(':id')
    getUser(@Param('id') id: string):Promise<UserDetails> {
        return this.userService.findById(id);
    }
    @Get()
    findAllUsers():Promise<UserDocument[]> {
        return this.userService.find();
    }
}
