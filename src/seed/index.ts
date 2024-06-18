import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { logger } from "../utils/logger";

const prisma = new PrismaClient();

type Author = {
  name: string;
  email: string;
};

type Post = {
  title: string;
  content: string;
  authorId: string;
};

const generateFakeAuthor = (): Author => {
  const name = faker.person.firstName();
  const email = faker.internet.email({
    firstName: name,
  });
  return { name, email };
};

const generateEntities = <T>(n: number, callback: () => T): T[] => {
  return Array.from({ length: n }, callback);
};

const generateFakePost = async (): Promise<Post> => {
  const title = faker.word.words(2);
  const content = faker.word.words(2);
  const authorIds = (await prisma.author.findMany()).map((author) => author.id);
  const randomAuthorId =
    authorIds[Math.floor(Math.random() * authorIds.length)];

  return { title, content, authorId: randomAuthorId };
};

const main = async () => {
  try {
    await prisma.post.deleteMany();
    await prisma.author.deleteMany();

    const authors = generateEntities(10, generateFakeAuthor);

    await prisma.author.createMany({ data: authors });
    logger.log(`Successfully created ${authors.length} users`);

    const posts = await Promise.all(generateEntities(50, generateFakePost));
    await prisma.post.createMany({ data: posts });
    logger.log(`Successfully created ${posts.length} posts`);
  } catch (err) {
    logger.error(err);
  }
};

main().then(async () => {
  try {
    await prisma.$disconnect();
  } catch (err) {
    logger.error(err);
    await prisma.$disconnect();
    process.exit(1);
  }
});
