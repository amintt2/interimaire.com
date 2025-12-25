-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "founders" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT,
    "tier" "FounderTier" NOT NULL,
    "stripeCustomerId" TEXT,
    "stripeSubscriptionId" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "founders_pkey" PRIMARY KEY ("id")
);

-- CreateEnum
CREATE TYPE "FounderTier" AS ENUM('SUPPORTER', 'FOUNDER', 'PARTNER');

-- CreateIndex
CREATE UNIQUE INDEX "founders_email_key" ON "founders"("email");

-- CreateIndex
CREATE UNIQUE INDEX "founders_stripeCustomerId_key" ON "founders"("stripeCustomerId");

-- CreateIndex
CREATE UNIQUE INDEX "founders_stripeSubscriptionId_key" ON "founders"("stripeSubscriptionId");