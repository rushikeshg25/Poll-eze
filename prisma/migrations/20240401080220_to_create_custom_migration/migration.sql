/*
  Warnings:

  - You are about to drop the column `PollType` on the `Poll` table. All the data in the column will be lost.
  - Added the required column `VotedPollId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Poll" DROP COLUMN "PollType";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "VotedPollId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_VotedPollId_fkey" FOREIGN KEY ("VotedPollId") REFERENCES "Poll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
