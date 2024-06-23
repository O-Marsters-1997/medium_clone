/*
  Warnings:

  - Added the required column `Another` to the `thingies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "thingies" ADD COLUMN     "Another" TEXT NOT NULL;
