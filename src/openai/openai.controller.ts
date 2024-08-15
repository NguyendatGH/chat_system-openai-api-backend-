import { OpenaiService } from './openai.service';
import { Controller, Post, Body } from '@nestjs/common';
import { CreateChatCompletionRes } from './dto/create-chat-completion-resquest';

@Controller('openai')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) {}
  @Post('chatCompletion')
  async createChatCompletion(@Body() body: CreateChatCompletionRes) {
    return this.openaiService.createChatCompletion(body.messages);
  }
}
