import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Comment, CommentsDocument } from "../model/comments.schema";

@Injectable()
export class CommentService {
    constructor(
        @InjectModel(Comment.name) private CommentModel: Model<CommentsDocument>,
    ) { }

    async getAllDealComments(commentId: number): Promise<any> {
        const comments = await this.CommentModel.find({ commentId });
        return comments;
    }

    async addComment(comment: Comment): Promise<any> {
        try {
            return await this.CommentModel.create(comment);
        } catch(e) {
            return new HttpException('Error create comment', HttpStatus.BAD_REQUEST);
        }
    }

    async editComment(comment: Comment): Promise<any> {
        try {
            return await this.CommentModel.findOneAndUpdate({id: comment.id}, comment);
        } catch(e) {
            return new HttpException('Error edid comment', HttpStatus.BAD_REQUEST);
        }
    }

    
    async deleteComment(id: number): Promise<any> {
        try {
            return await this.CommentModel.findOneAndRemove({id});
        } catch(e) {
            return new HttpException('Error delete comment', HttpStatus.BAD_REQUEST);
        }
    }
}