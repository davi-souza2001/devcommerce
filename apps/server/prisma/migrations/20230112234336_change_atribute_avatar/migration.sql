/*
  Warnings:

  - You are about to alter the column `faceMask` on the `Avatar` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avatar" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idUser" TEXT NOT NULL,
    "accessory" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "circleColor" TEXT NOT NULL,
    "clothing" TEXT NOT NULL,
    "clothingColor" TEXT NOT NULL,
    "eyebrows" TEXT NOT NULL,
    "eyes" TEXT NOT NULL,
    "faceMask" BOOLEAN NOT NULL,
    "facialHair" TEXT NOT NULL,
    "graphic" TEXT NOT NULL,
    "hair" TEXT NOT NULL,
    "hairColor" TEXT NOT NULL,
    "hat" TEXT NOT NULL,
    "hatColor" TEXT NOT NULL,
    "lipColor" TEXT NOT NULL,
    "mouth" TEXT NOT NULL,
    "skinTone" TEXT NOT NULL,
    CONSTRAINT "Avatar_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Avatar" ("accessory", "body", "circleColor", "clothing", "clothingColor", "eyebrows", "eyes", "faceMask", "facialHair", "graphic", "hair", "hairColor", "hat", "hatColor", "id", "idUser", "lipColor", "mouth", "skinTone") SELECT "accessory", "body", "circleColor", "clothing", "clothingColor", "eyebrows", "eyes", "faceMask", "facialHair", "graphic", "hair", "hairColor", "hat", "hatColor", "id", "idUser", "lipColor", "mouth", "skinTone" FROM "Avatar";
DROP TABLE "Avatar";
ALTER TABLE "new_Avatar" RENAME TO "Avatar";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
