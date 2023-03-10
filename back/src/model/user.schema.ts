import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({required:true, unique:true})
    id: number;
    @Prop({required:true})
    login: string;
    @Prop({required:true})
    password: string
    @Prop({required:true})
    name: string
    @Prop({required:true})
    frends: [any]
}
export const UserSchema = SchemaFactory.createForClass(User)