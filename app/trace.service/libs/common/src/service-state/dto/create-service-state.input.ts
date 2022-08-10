import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateServiceStateInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
