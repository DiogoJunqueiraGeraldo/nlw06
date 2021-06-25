import { EntityRepository, Repository } from "typeorm";
import Tag from "../entities/Tag";

@EntityRepository(Tag)
class UsersRepository extends Repository<Tag> {}

export default UsersRepository;
