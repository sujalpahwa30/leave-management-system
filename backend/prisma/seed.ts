import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("password123", 10);

  await prisma.user.createMany({
    data: [
      {
        name: "Manager",
        email: "manager@test.com",
        password: hashedPassword,
        department: "Engineering",
        role: Role.MANAGER,
      },
      {
        name: "Employee",
        email: "employee@test.com",
        password: hashedPassword,
        department: "Engineering",
        role: Role.EMPLOYEE,
      },
    ],
    skipDuplicates: true,
  });

  console.log("Seed completed.");
}

main()
  .catch(console.error)
  .finally(async () => prisma.$disconnect());