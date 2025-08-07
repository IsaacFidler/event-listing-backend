-- CreateEnum
CREATE TYPE "RegistrationStatus" AS ENUM ('INTERESTED', 'ATTENDING', 'NOT_ATTENDING');

-- CreateTable
CREATE TABLE "Registration" (
    "id" SERIAL NOT NULL,
    "status" "RegistrationStatus" NOT NULL,
    "userId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,
    "updated_at" TIMESTAMP(3),
    "create_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
