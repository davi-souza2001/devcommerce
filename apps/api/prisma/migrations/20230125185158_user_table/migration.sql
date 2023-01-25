-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Avatar" (
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

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
