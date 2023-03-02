import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type DealsDocument = Deal & Document;

@Schema()
export class Deal {
    @Prop({required:true, unique:true})
    id: number;
    @Prop({required:true})
    userId: number;
    @Prop({required:true})
    heder: string;
    @Prop({required:true})
    text: string;
    @Prop({required:true})
    lastUpadteTime: string;
}
export const DealsSchema = SchemaFactory.createForClass(Deal)