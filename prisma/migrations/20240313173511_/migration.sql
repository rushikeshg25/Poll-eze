/*
  Warnings:

  - You are about to drop the column `optionId` on the `Option` table. All the data in the column will be lost.
  - You are about to drop the column `pollId` on the `Poll` table. All the data in the column will be lost.
  - Added the required column `PollId` to the `Option` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UserId` to the `Poll` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Option" DROP CONSTRAINT "Option_optionId_fkey";

-- DropForeignKey
ALTER TABLE "Poll" DROP CONSTRAINT "Poll_pollId_fkey";

-- AlterTable
ALTER TABLE "Option" DROP COLUMN "optionId",
ADD COLUMN     "PollId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Poll" DROP COLUMN "pollId",
ADD COLUMN     "UserId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Poll" ADD CONSTRAINT "Poll_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_PollId_fkey" FOREIGN KEY ("PollId") REFERENCES "Poll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
