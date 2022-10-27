import { CharactersResponse, LocationResponse } from './interfaces';

class RickAndMortyApi {
  declare apiUrl: string;
  declare charantersUri: string;
  declare abortTimeout: number;

  constructor() {
    this.apiUrl = 'https://rickandmortyapi.com/api';
    this.charantersUri = 'character';
    this.abortTimeout = 5000;
  }

  async getAllCharacters(): Promise<CharactersResponse> {
    const formattedUrl = `${this.apiUrl}/${this.charantersUri}`;
    const response = await fetch(formattedUrl);
    const data = await response.json();

    return data as CharactersResponse;
  }

  async getCharacterById(id: string | number) {
    const formattedUrl = `${this.apiUrl}/${this.charantersUri}/${id}`;
    const response = await fetch(formattedUrl);
    const data = await response.json();

    return data as LocationResponse;
  }

  async searchCharacters(search: string) {
    const timeout = this.abortTimeout;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const formattedUrl = `${this.apiUrl}/${this.charantersUri}?${search}`;
    const response = await fetch(formattedUrl, {
      signal: controller.signal
    });
    clearTimeout(id);
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
