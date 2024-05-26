import { PrismaClient } from "@prisma/client";
import { logger } from "../utils/logger";

const prisma = new PrismaClient();

type User = {
  name: string;
  email: string;
};

const users: User[] = [
  { name: "Tom", email: "tom@hello.com" },
  { name: "Bob", email: "bob@hello.com" },
  { name: "Mark", email: "mark@hello.com" },
  { name: "Olly", email: "olly@hello.com" },
  { name: "Hannah", email: "hannah@hello.com" },
  { name: "Fred", email: "fred@hello.com" },
];

const main = async () => {
  try {
    await prisma.user.deleteMany();

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
