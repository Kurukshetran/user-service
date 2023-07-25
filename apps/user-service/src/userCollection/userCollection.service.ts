import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserCollectionServiceBase } from "./base/userCollection.service.base";

@Injectable()
export class UserCollectionService extends UserCollectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
