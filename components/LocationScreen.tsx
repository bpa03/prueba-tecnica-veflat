import { FC } from 'react';
import Image from 'next/image';
import { Character } from '../services/interfaces';
import CharacterStatus from './CharacterStatus';

interface LocationScreenProps {
  character: Character;
}

const LocationScreen: FC<LocationScreenProps> = ({
  character: { image, episode, location, origin, status, species, gender },
}) => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-xs">
        <div className="relative flex justify-center">
          <Image
            className="object-contain rounded-lg"
            src={image}
            width={300}
            height={300}
            alt="character.png"
          />
        </div>
        <div className="mt-8 space-y-4">
          <h3 className="font-normal text-gray-700 space-x-2">
            <span className="font-bold text-gray-800">Status:</span>
            <CharacterStatus status={status} />
          </h3>
          <h3 className="font-normal text-gray-700 space-x-2">
            <span className="font-bold text-gray-800">Gender:</span>
            <span>{gender}</span>
          </h3>
          <h3 className="font-normal text-gray-700 space-x-2">
            <span className="font-bold text-gray-800">Specie:</span>
            <span>{species}</span>
          </h3>
          <h3 className="font-normal text-gray-700 space-x-2">
            <span className="font-bold text-gray-800">Origin:</span>
            <span>{origin.name}</span>
          </h3>
          <h3 className="font-normal text-gray-700 space-x-2">
            <span className="font-bold text-gray-800">
              Location:
            </span>
            <span>{location.name}</span>
          </h3>
          <h3 className="font-normal text-gray-700 space-x-2">
            <span className="font-bold text-gray-800">
              Episodes:
            </span>
            <span>{episode.length}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LocationScreen;
