import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ItemService } from './item.service';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';

@Resolver('Item')
export class ItemResolver {
  constructor(private readonly itemService: ItemService) {}

  @Mutation('createItem')
  create(@Args('createItemInput') createItemInput: CreateItemInput) {
    return this.itemService.create(createItemInput);
  }

  @Query('item')
  findAll() {
    return this.itemService.findAll();
  }

  @Query('item')
  findOne(@Args('id') id: number) {
    return this.itemService.findOne(id);
  }

  @Mutation('updateItem')
  update(@Args('updateItemInput') updateItemInput: UpdateItemInput) {
    return this.itemService.update(updateItemInput.id, updateItemInput);
  }

  @Mutation('removeItem')
  remove(@Args('id') id: number) {
    return this.itemService.remove(id);
  }
}
