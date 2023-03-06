import { Body, Controller, Delete, Get, HttpStatus, Post, Res } from "@nestjs/common";
import { Deal } from "../model/deals.schema";
import { User } from "../model/user.schema";
import { DealsService } from "../service/deals.service";

@Controller('/api/v1/deals')
export class DealsController {
    constructor(private readonly dealsServerice: DealsService) { }

    @Get('/get')
    async Get (@Res() response, @Body() user: User) {
        const deals = await this.dealsServerice.getAllUserDeals(user.id);
        return response.status(HttpStatus.OK).json({ deals })
    }

    @Post('/add')
    async Add (@Res() response, @Body() deal: Deal) {
        await this.dealsServerice.addDeal(deal);
        return response.status(HttpStatus.OK);
    }

    @Post('/edit')
    async Edit (@Res() response, @Body() deal: Deal) {
        await this.dealsServerice.editDeal(deal);
        return response.status(HttpStatus.OK);
    }
    @Delete('/delete')
    async Delete (@Res() response, @Body() deal: Deal) {
        await this.dealsServerice.deleteDeal(deal);
        return response.status(HttpStatus.OK);
    }
}