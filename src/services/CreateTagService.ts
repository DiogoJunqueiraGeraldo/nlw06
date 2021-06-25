import { getCustomRepository } from "typeorm";
import TagsRepository from "../repositories/TagsRepository";

interface ITagRequest {
  name: string;
}

class CreateTagService {
  async execute({ name }: ITagRequest) {
    const tagsRepository = getCustomRepository(TagsRepository);

    if (!name) {
      throw new Error("Name Required");
    }

    const alreadyExists = await tagsRepository.findOne({
      name,
    });

    if (alreadyExists) {
      throw new Error("Tag already exists");
    }

    const tag = tagsRepository.create({
      name,
    });

    await tagsRepository.save(tag);

    return tag;
  }
}

export default CreateTagService;
