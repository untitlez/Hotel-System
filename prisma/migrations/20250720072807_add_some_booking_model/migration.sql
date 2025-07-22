/*
  Warnings:

  - Added the required column `statusPaid` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED');

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "request" TEXT[],
ADD COLUMN     "statusPaid" "BookingStatus" NOT NULL;
