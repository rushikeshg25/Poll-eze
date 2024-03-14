/*
  Warnings:

  - You are about to drop the column `Link` on the `Poll` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Poll" DROP COLUMN "Link",
ADD COLUMN     "Duration" TIMESTAMP(3),
ADD COLUMN     "PollType" TEXT;
