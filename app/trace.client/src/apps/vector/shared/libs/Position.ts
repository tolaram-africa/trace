export interface IPositionAttributes {
  ignition: boolean;
  battery: number;
}

export interface IPosition {
  latitude?: number;
  longitude?: number;
  time?: string;
  address?: string;
  speed?: number;
  course?: number;
  attributes?: IPositionAttributes;
}
