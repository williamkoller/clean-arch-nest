import {
  IsArray,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateRouteDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsObject()
  @IsNotEmpty()
  start: LatLng;

  @IsObject()
  @IsNotEmpty()
  end: LatLng;

  @IsArray()
  @IsOptional()
  points?: LatLng[];
}

type LatLng = {
  lat: number;
  lng: number;
};
