/*
  Warnings:

  - Added the required column `açıklama` to the `Uygulamalar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fileName` to the `Uygulamalar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filePath` to the `Uygulamalar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fileSize` to the `Uygulamalar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fileType` to the `Uygulamalar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Uygulamalar" ADD COLUMN     "açıklama" TEXT NOT NULL,
ADD COLUMN     "fileName" TEXT NOT NULL,
ADD COLUMN     "filePath" TEXT NOT NULL,
ADD COLUMN     "fileSize" INTEGER NOT NULL,
ADD COLUMN     "fileType" TEXT NOT NULL;
