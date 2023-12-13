export interface ITank {
  id: number;
  name: string;
  species: string;
  fish_image: string;
  status: string;
  parameters: IParameters;
}

export interface IParameters {
  parameter_1: string;
  parameter_2: string;
  parameter_3: string;
}

export interface IFarm {
  id: number;
  name: string;
  location: string;
  tanks: ITank[];
}

export interface IBioMetric {
  id: number;
  name: string;
  species: string;
  location: string;
  farm: string;
  fish_image: string;
  info: string;
}
