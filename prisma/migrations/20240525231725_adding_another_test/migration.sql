/*
  Warnings:

  - Added the required column `another` to the `tests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tests" ADD COLUMN     "another" TEXT NOT NULL;
