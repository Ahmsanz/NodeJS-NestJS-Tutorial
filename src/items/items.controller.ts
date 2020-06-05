import { Controller, Get, Post, Put, Delete, Body, Req, Res } from '@nestjs/common';
import { CreateItemDto } from './dto/create_item_dto';
import { Request, Response } from 'express'; 

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return 'Get all items'; 
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string{
        return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`
    }
}
