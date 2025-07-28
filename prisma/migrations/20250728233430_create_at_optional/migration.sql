-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "create_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Location" ALTER COLUMN "create_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "create_at" DROP NOT NULL;
