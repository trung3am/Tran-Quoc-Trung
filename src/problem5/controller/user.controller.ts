// import * as express from "express";s
import { UserService } from "../services/user.service";
import { CreateUserDto } from "../dtos/create-user.dto";
import { DetailUserDto } from "../dtos/detail-user.dto";
import { UpdateUserDto } from "../dtos/update-user.dto";
import { ListUserDto } from "../dtos/list-user.dto";
import { Get, Route, Put, Post, Delete, Body, Path, Tags } from "tsoa";



@Route("Users")
@Tags("Users")
export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    @Post("/")
    async createUser(@Body() createUserDto: CreateUserDto): Promise<void> {
        await this.userService.createUser(createUserDto);


    }

    @Get("/")
    async getAllUsers(): Promise<ListUserDto> {
        return await this.userService.getAllUsers();
    }

    @Get("/:id")
    async getUserDetail(@Path() id: string): Promise<DetailUserDto> {
        return await this.userService.getUser(id);
    }


    @Put("/:id")
    async updateUser(@Path() id: string, @Body() updateUserDto: UpdateUserDto): Promise<void> {
        return await this.userService.updateUser(id, updateUserDto);
    }
    @Delete('/:id')
    async deleteUser(@Path() id: string): Promise<void> {
        return await this.userService.deleteUser(id)
    }

}