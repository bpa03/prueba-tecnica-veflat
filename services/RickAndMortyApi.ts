import { CharactersResponse, LocationResponse } from './interfaces';

class RickAndMortyApi {
  declare apiUrl: string;
  declare charantersUri: string;
  declare locationUri: string;

  constructor() {
    this.apiUrl = 'https://rickandmortyapi.com/api';
    this.charantersUri = 'character';
    this.locationUri = 'location';
  }

  async getAllCharacters(): Promise<CharactersResponse> {
    const formattedUrl = `${this.apiUrl}/${this.charantersUri}`;
    const response = await fetch(formattedUrl);
    const data = await response.json();

    return data as CharactersResponse;
  }

  async getLocationById(id: string | number) {
    const formattedUrl = `${this.apiUrl}/${this.locationUri}/${id}`;
    const response = await fetch(formattedUrl);
    const data = await response.json();

    return data as LocationResponse;
  }

  async searchCharacters(search: string) {
    const formattedUrl = `${this.apiUrl}/${this.charantersUri}?${search}`;
    const response = await fetch(formattedUrl);
    const data = await response.json();

    return data as CharactersResponse;
  }

  async getCharactersFromUrl(url: string) {
    const response = await fetch(url);
    const data = await response.json();

    return data as CharactersResponse;
  }
}

export default new RickAndMortyApi();
