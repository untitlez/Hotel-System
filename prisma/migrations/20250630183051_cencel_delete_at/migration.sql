/*
  Warnings:

  - You are about to drop the column `deletedAt` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_userId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropIndex
DROP INDEX "Booking_deletedAt_idx";

-- DropIndex
DROP INDEX "Booking_updatedAt_idx";

-- DropIndex
DROP INDEX "Room_deletedAt_idx";

-- DropIndex
DROP INDEX "User_deletedAt_idx";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "deletedAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "deletedAt";

-- CreateIndex
CREATE INDEX "Booking_roomId_checkInDate_idx" ON "Booking"("roomId", "checkInDate");

-- CreateIndex
CREATE INDEX "Booking_roomId_checkOutDate_idx" ON "Booking"("roomId", "checkOutDate");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;
