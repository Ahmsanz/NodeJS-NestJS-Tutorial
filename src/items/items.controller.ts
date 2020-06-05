import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create_item_dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {
        
    }

    @Get()
    findAll(): Promise <Item[]> {
        return this.itemsService.findAll();         
    }

    @Get(':id')
     findOne(@Param('id') id: string): Promise <Item> {
        return this.itemsService.findOne(id)
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise<Item>{
        return this.itemsService.create(createItemDto); 
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id: string): Promise <Item> {
        return this.itemsService.update(id, updateItemDto);
    }


    @Delete(':id')
    delete(@Param('id') id: string): Promise<Item> {
        return this.itemsService.delete(id);
    }
}
