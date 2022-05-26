export interface IStatusTypes {
  name: string;
  color: string;
  count: number;
}

export const StatusTypes: Array<IStatusTypes> = [
  {
    name: 'Moving',
    color: '#7ec27f',
    count: 13,
  },
  {
    name: 'Parked',
    color: 'DodgerBlue',
    count: 22,
  },
  {
    name: 'Idle',
    color: 'orange',
    count: 3,
  },
  {
    name: 'Offline',
    color: 'crimson',
    count: 2,
  },
];
