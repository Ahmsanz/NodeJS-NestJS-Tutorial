
import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface'

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "8484640",
            name: "Item one", 
            description: "Lorem ipsum dolor simet",
            qty: 100
        },
        {
            id: "8484641",
            name: "Item two", 
            description: "Lorem ipsum dolor simet",
            qty: 679
        },
        {
            id: "8484642",
            name: "Item three", 
            description: "Lorem ipsum dolor simet",
            qty: 420
        }        
    ];

    findAll(): Item[] {
        return this.items; 
    }

    findOne(id: string): Item {
        return this.items.find( item => item.id === id);
    }
}
