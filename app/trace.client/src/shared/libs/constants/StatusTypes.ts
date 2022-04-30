import { IStatusTypes } from 'src/shared/libs/types/resources/IObjects';

const StatusTypes: Array<IStatusTypes> = [
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

export default StatusTypes;
