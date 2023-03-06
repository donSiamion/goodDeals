import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Deal, DealsDocument } from "../model/deals.schema";
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class DealsService {
    constructor(
        @InjectModel(Deal.name) private DealsModel: Model<DealsDocument>,
    ) { }

    async getAllUserDeals(userId: number): Promise<any> {
        const deals = await this.DealsModel.find({ userId });
        return deals;
    }

    async addDeal(deal: Deal): Promise<any> {
        try {
            return await this.DealsModel.create(deal);
        } catch(e) {
            return new HttpException('Error create deal', HttpStatus.BAD_REQUEST);
        }
    }

    async editDeal(deal: Deal): Promise<any> {
        try {
            return await this.DealsModel.findOneAndUpdate({id: deal.id}, deal);
        } catch(e) {
            return new HttpException('Error edid deal', HttpStatus.BAD_REQUEST);
        }
    }

    
    async deleteDeal(deal: Deal): Promise<any> {
        try {
            return await this.DealsModel.findOneAndRemove({id: deal.id});
        } catch(e) {
            return new HttpException('Error delete deal', HttpStatus.BAD_REQUEST);
        }
    }
}