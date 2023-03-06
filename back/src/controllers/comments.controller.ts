import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UploadedFiles, Put, Req, Res } from "@nestjs/common";
import { Comment } from "../model/comments.schema";
import { CommentService } from "../service/comment.service"
import { Deal } from "../model/deals.schema";

@Controller('/api/v1/comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentService) { }

    @Get('/get')
    async Get (@Res() response, @Body() deal: Deal) {
        const comments = await this.commentsService.getAllDealComments(deal.id);
        return response.status(HttpStatus.OK).json({ comments })
    }

    @Post('/add')
    async Add (@Res() response, @Body() comment: Comment) {
        await this.commentsService.addComment(comment);
        return response.status(HttpStatus.OK);
    }

    @Post('/edit')
    async Edit (@Res() response, @Body() comment: Comment) {
        await this.commentsService.editComment(comment);
        return response.status(HttpStatus.OK);
    }
    @Delete('/delete')
    async Delete (@Res() response, @Body() comment: Comment) {
        await this.commentsService.deleteComment(comment.id);
        return response.status(HttpStatus.OK);
    }
}