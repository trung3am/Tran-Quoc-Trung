import { plainToInstance } from "class-transformer";
import { AppDataSource } from "../datasource";
import { CreateUserDto } from "../dtos/create-user.dto";
import { ListUserDto } from "../dtos/list-user.dto";
import { UpdateUserDto } from "../dtos/update-user.dto";
import { UserEntity } from "../entities/user";
import { DetailUserDto } from "../dtos/detail-user.dto";

export class UserService {
    private userRepository = AppDataSource.getRepository(UserEntity);

    async createUser(createUserDto: CreateUserDto): Promise<void> {
        const { email, username } = createUserDto;
        const user = this.userRepository.create({ username, email });

        await this.userRepository.save(user);
    }

    async getAllUsers(): Promise<ListUserDto> {
        const users = await this.userRepository.find();
        return plainToInstance(ListUserDto, { users })
    }

    async getUser(id: string): Promise<DetailUserDto> {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new Error("User not found");
        }
        return plainToInstance(DetailUserDto, user);
    }

    async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<void> {
        const { email, username } = updateUserDto;
        const user = this.userRepository.findOne({
            where: { id }
        });
        if (!user) {
            throw new Error("User not found");

        }
        await this.userRepository.update(id, {
            ...user,
            username,
            email,
        });
    }

    async deleteUser(id: string): Promise<void> {
        const user = this.userRepository.findOne({
            where: { id }
        });
        if (!user) {
            throw new Error("User not found");

        }
        await this.userRepository.delete(id);
    }
}
