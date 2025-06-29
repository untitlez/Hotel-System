/*
  Warnings:

  - You are about to drop the `UserProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserProfile" DROP CONSTRAINT "UserProfile_id_fkey";

-- DropTable
DROP TABLE "UserProfile";

-- CreateTable
CREATE TABLE "Profile" (
    "userId" TEXT NOT NULL,
    "fullName" TEXT,
    "gender" TEXT,
    "birthday" TIMESTAMP(3),
    "address" TEXT,
    "phone" TEXT,
    "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE INDEX "Profile_updatedAt_idx" ON "Profile"("updatedAt");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
