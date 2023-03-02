import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "../model/user.schema";
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
    ) { }

    async signup(user: User): Promise<User> {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);
        const params = {
            login: user.login,
            password: hash
        }
        const newUser = new this.userModel(params);
        return newUser.save();
    }

    async login(user: User, jwt: JwtService): Promise<any> {
        const foundUser = await this.userModel.findOne({ login: user.login }).exec();
        if (foundUser) {
            const { password } = foundUser;
            if (bcrypt.compare(user.password, password)) {
                const payload = { login: user.login };
                return {
                    token: jwt.sign(payload),
                };
            }
            return new HttpException('Incorrect username or password', HttpStatus.UNAUTHORIZED)
        }
        return new HttpException('Incorrect username or password', HttpStatus.UNAUTHORIZED)
    }

    async verify(token: string, jwt: JwtService): Promise<User> {
        return jwt.verify(token);
    }

    async getOne(login: string) {
        return await this.userModel.findOne({ login: login }).exec();
    }
}