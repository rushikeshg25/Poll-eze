/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Option" DROP CONSTRAINT "Option_optionId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_postId_fkey";

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Poll" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "pollId" TEXT NOT NULL,

    CONSTRAINT "Poll_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Poll" ADD CONSTRAINT "Poll_pollId_fkey" FOREIGN KEY ("pollId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "Poll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
