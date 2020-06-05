import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create_item_dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {
        
    }

    @Get()
    async findAll(): Promise <Item[]> {
        return await this.itemsService.findAll();         
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise <Item> {
        return await this.itemsService.findOne(id)
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string{
        return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id: string): string {
        return `Update ${id} -- Name: ${updateItemDto.name}`
    }


    @Delete(':id')
    delete(@Param('id') id): string {
        return `Delete ${id}`
    }
}
