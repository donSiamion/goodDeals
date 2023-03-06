import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type CommentsDocument = Comment & Document;

@Schema()
export class Comment {
    @Prop({required:true, unique: true, auto: true})
    id: number;
    @Prop({required:true})
    userId: number;
    @Prop({required:true})
    dealId: number;
    @Prop({required:true})
    text: string;
    @Prop({required:true})
    lastUpadteTime: string;
}
export const CommentsSchema = SchemaFactory.createForClass(Comment)