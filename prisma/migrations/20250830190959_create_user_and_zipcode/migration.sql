-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "zipCodeId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ZipCode" (
    "id" TEXT NOT NULL,
    "cep" TEXT,
    "logradouro" TEXT,
    "complemento" TEXT,
    "unidade" TEXT,
    "bairro" TEXT,
    "localidade" TEXT,
    "uf" TEXT,
    "estado" TEXT,
    "regiao" TEXT,
    "ibge" TEXT,
    "gia" TEXT,
    "ddd" TEXT,
    "siafi" TEXT,

    CONSTRAINT "ZipCode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_zipCodeId_fkey" FOREIGN KEY ("zipCodeId") REFERENCES "public"."ZipCode"("id") ON DELETE SET NULL ON UPDATE CASCADE;
