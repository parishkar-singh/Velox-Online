import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {AuthGuard, PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false, // TODO: change to false
            secretOrKey: 'secret',
        })
    }
    async validate(payload: any) {
        return {...payload.user}
    }
}
