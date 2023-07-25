/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserCollectionWhereUniqueInput } from "./UserCollectionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserCollectionUpdateInput } from "./UserCollectionUpdateInput";

@ArgsType()
class UpdateUserCollectionArgs {
  @ApiProperty({
    required: true,
    type: () => UserCollectionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserCollectionWhereUniqueInput)
  @Field(() => UserCollectionWhereUniqueInput, { nullable: false })
  where!: UserCollectionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserCollectionUpdateInput,
  })
  @ValidateNested()
  @Type(() => UserCollectionUpdateInput)
  @Field(() => UserCollectionUpdateInput, { nullable: false })
  data!: UserCollectionUpdateInput;
}

export { UpdateUserCollectionArgs as UpdateUserCollectionArgs };
