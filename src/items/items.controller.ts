import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create_item_dto';
 

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return 'Getting all items'
    }

    @Get(':id')
    findOne(@Param('id') id): string {
        return `Item ${id}`
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string{
        return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
        return `Update ${id} -- Name: ${updateItemDto.name}`
    }


    @Delete(':id')
    delete(@Param('id') id): string {
        return `Delete ${id}`
    }
}
