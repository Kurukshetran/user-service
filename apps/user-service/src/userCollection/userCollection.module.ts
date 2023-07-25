import { Module } from "@nestjs/common";
import { UserCollectionModuleBase } from "./base/userCollection.module.base";
import { UserCollectionService } from "./userCollection.service";
import { UserCollectionController } from "./userCollection.controller";

@Module({
  imports: [UserCollectionModuleBase],
  controllers: [UserCollectionController],
  providers: [UserCollectionService],
  exports: [UserCollectionService],
})
export class UserCollectionModule {}
