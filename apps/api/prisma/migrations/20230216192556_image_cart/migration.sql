/*
  Warnings:

  - Added the required column `image` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cart" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idUser" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "image" TEXT NOT NULL,
    CONSTRAINT "Cart_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Cart" ("id", "idUser", "name", "price") SELECT "id", "idUser", "name", "price" FROM "Cart";
DROP TABLE "Cart";
ALTER TABLE "new_Cart" RENAME TO "Cart";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
