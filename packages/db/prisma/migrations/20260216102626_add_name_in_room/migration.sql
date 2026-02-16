/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `room` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "room" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "room_name_key" ON "room"("name");
