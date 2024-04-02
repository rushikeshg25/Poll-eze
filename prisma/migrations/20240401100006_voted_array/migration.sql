/*
  Warnings:

  - You are about to drop the column `VotedPollId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_VotedPollId_fkey";

-- AlterTable
ALTER TABLE "Poll" ADD COLUMN     "Voters" TEXT[];

-- AlterTable
ALTER TABLE "User" DROP COLUMN "VotedPollId";
