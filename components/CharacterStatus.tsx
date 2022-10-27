import { FC } from 'react';
import { Status } from '../services/interfaces';

interface CharacterStatusProps {
  status: Status;
}

const characterClasses: { [key in Status]: string } = {
  Alive: 'text-green-600',
  Dead: 'text-red-600',
  unknown: 'text-gray-600'
};

const CharacterStatus: FC<CharacterStatusProps> = ({ status }) => {
  const statusColor = characterClasses[status];

  return <span className={`${statusColor}`}>{status}</span>;
};

export default CharacterStatus;
