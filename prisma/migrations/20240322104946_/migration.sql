/*
  Warnings:

  - Made the column `totalVotes` on table `Option` required. This step will fail if there are existing NULL values in that column.
  - Made the column `totalVotes` on table `Poll` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Option" ALTER COLUMN "totalVotes" SET NOT NULL;

-- AlterTable
ALTER TABLE "Poll" ALTER COLUMN "totalVotes" SET NOT NULL;
