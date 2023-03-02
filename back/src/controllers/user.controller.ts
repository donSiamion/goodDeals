import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UploadedFiles, Put, Req, Res } from "@nestjs/common";
import { User } from "../model/user.schema";
import { UserService } from "../service/user.service";
import { JwtService } from '@nestjs/jwt'

@Controller('/api/v1/user')
export class UserController {
    constructor(private readonly userServerice: UserService,
        private jwtService: JwtService
    ) { }


    @Post('/signup')
    async Signup(@Res() response, @Body() user: User) {
        const newUSer = await this.userServerice.signup(user);
        return response.status(HttpStatus.CREATED).json({
            newUSer
        })
    }
    @Post('/login')
    async Login(@Res() response, @Body() user: User) {
        const token = await this.userServerice.login(user, this.jwtService);
        return response.status(HttpStatus.OK).json(token)
    }
    
    @Post('/verify')
    async Verify(@Res() response, @Body() token: string) {
        const verify = await this.userServerice.verify(token, this.jwtService);
        return response.status(HttpStatus.OK).json(verify)
    }
}