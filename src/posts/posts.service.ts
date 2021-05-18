import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {  Post  } from './entities/post.entity'

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private entityRepository: Repository<Post>
  ){}

  create(createPostDto: CreatePostDto) {
    this.entityRepository.insert(createPostDto);
  }

  findAll() {
    return this.entityRepository.find();
  }

  findOne(id: number) {
    return this.entityRepository.findOne(id);
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return this.entityRepository.delete(id);
  }
}
