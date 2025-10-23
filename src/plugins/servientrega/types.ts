/**
 * @description
 * The plugin can be configured using the following options:
 */
import { ArgsType, Field, Int } from '@nestjs/graphql';

export interface PluginInitOptions {
    url: string
}

/**
 * Args para el query getQuote
 */
@ArgsType()
export class GetQuoteArgs {
  @Field(() => Int) originCityId!: number;
  @Field(() => Int) destinationCityId!: number;
  @Field(() => Int) largoCm!: number;
  @Field(() => Int) altoCm!: number;
  @Field(() => Int) anchoCm!: number;
  @Field(() => Int) pesoKg!: number;
  @Field(() => Int) valorDeclaradoCOP!: number;
  @Field(() => Int) productId!: number;
  @Field(() => String, { nullable: true }) language?: string;
}