import { AllCharactersResponse } from './interfaces';

class RickAndMortyApi {
  declare apiUrl: string;
  declare charantersUri: string;
  
  constructor() {
    this.apiUrl = "https://rickandmortyapi.com/api";
    this.charantersUri = "character";
  }

  async getAllCharacters(): Promise<AllCharactersResponse> {
    const formattedUrl = `${this.apiUrl}/${this.charantersUri}`
    const response = await fetch(formattedUrl);
    const data = await response.json();
    
    return data as AllCharactersResponse;
  }
}

export default new RickAndMortyApi();
