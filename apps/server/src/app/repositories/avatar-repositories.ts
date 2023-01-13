import { Avatar } from "../entities/avatar";

export abstract class AvatarRepository {
	abstract create(user: Avatar): Promise<void>
}
