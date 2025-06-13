/*
  Warnings:

  - You are about to drop the column `açıklama` on the `Uygulamalar` table. All the data in the column will be lost.
  - Added the required column `description` to the `Uygulamalar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Uygulamalar" DROP COLUMN "açıklama",
ADD COLUMN     "description" TEXT NOT NULL;
