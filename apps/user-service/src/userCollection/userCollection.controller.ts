import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserCollectionService } from "./userCollection.service";
import { UserCollectionControllerBase } from "./base/userCollection.controller.base";

@swagger.ApiTags("userCollections")
@common.Controller("userCollections")
export class UserCollectionController extends UserCollectionControllerBase {
  constructor(protected readonly service: UserCollectionService) {
    super(service);
  }
}
