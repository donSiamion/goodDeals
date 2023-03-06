import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({required:true, auto: true})
    id: number;
    @Prop({required:true})
    login: string;
    @Prop({required:true})
    password: string
    @Prop({required:true})
    name: string
    @Prop({required:true})
    frends: Array<object>
    @Prop({required:true})
    rate: number
}
export const UserSchema = SchemaFactory.createForClass(User)