/*
  Warnings:

  - You are about to drop the column `description` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `roomNumber` on the `Room` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Room_roomNumber_key";

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "description",
DROP COLUMN "roomNumber",
ADD COLUMN     "amenities" TEXT[],
ADD COLUMN     "availableDates" TIMESTAMP(3)[],
ADD COLUMN     "beds" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "maxGuests" INTEGER,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "roomSize" INTEGER;
