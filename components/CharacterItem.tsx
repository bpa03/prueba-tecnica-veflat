import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Character } from '../services/interfaces';
import CharacterStatus from './CharacterStatus';

interface CharacterItemProps {
  character: Character;
}

const CharacterItem: FC<CharacterItemProps> = ({
  character: { location, origin, name, image, status, id },
}) => {
  return (
    <li className="hover:scale-105 transition-transform will-change-transform duration-300">
      <Link href={`/location/${id}`}>
        <div className="w-full bg-white rounded-lg border border-gray-200 shadow-md">
          <div className="relative w-full h-64">
            <Image
              src={image}
              alt="character.png"
              className="rounded-t-lg object-cover bg-center"
              fill
            />
          </div>
          <div className="p-5 space-y-4">
            <div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {name}
              </h2>
            </div>
            <div>
              <h3 className="mb-3 font-normal text-gray-700 space-x-2">
                <span className="font-bold text-gray-800">
                  Status:
                </span>
                <CharacterStatus status={status} />
              </h3>
              <h3 className="mb-3 font-normal text-gray-700 space-x-2">
                <span className="font-bold text-gray-800">
                  Origin:
                </span>
                <span>{origin.name}</span>
              </h3>
              <h3 className="mb-3 font-normal text-gray-700 space-x-2">
                <span className="font-bold text-gray-800">
                  Location:
                </span>
                <span>{location.name}</span>
              </h3>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CharacterItem;
