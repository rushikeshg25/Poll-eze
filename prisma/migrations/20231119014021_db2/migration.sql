-- AlterTable
ALTER TABLE `poll` MODIFY `desc` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Option` (
    `id` VARCHAR(191) NOT NULL,
    `pollId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Option` ADD CONSTRAINT `Option_pollId_fkey` FOREIGN KEY (`pollId`) REFERENCES `Poll`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
