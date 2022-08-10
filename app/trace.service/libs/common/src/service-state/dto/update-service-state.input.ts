import { CreateServiceStateInput } from './create-service-state.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateServiceStateInput extends PartialType(CreateServiceStateInput) {
  @Field(() => Int)
  id: number;
}
