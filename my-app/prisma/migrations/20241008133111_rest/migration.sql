/*
  Warnings:

  - Made the column `content` on table `Project` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "publishedAt" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "public" BOOLEAN NOT NULL,
    "link" TEXT NOT NULL
);
INSERT INTO "new_Project" ("content", "createdAt", "description", "id", "link", "public", "publishedAt", "status", "title") SELECT "content", "createdAt", "description", "id", "link", "public", "publishedAt", "status", "title" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;