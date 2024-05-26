import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { logger } from "../utils/logger";

const prisma = new PrismaClient();

type User = {
  name: string;
  email: string;
};

const generateFakeUser = (): User => {
  const name = faker.person.firstName();
  const email = faker.internet.email({
    firstName: name,
  });
  return { name, email };
};

const generateUsers = (n: number) => {
  return Array.from({ length: n }, generateFakeUser);
};

const main = async () => {
  try {
    await prisma.user.deleteMany();
    const users = generateUsers(50);

    await prisma.user.createMany({ data: users });

    logger.log(`Successfully created ${users.length} users`);
  } catch (err) {
    logger.error(err);
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    logger.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
