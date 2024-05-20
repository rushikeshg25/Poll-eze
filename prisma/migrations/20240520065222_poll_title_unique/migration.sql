/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Poll` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Poll_title_key" ON "Poll"("title");
