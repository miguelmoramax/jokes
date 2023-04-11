
export interface Joke {
    id: number;
    Title: string;
    Body: string;
    Author: string;
    Views: number;
    CreatedAt: string;
  }
  
  export interface JokeResponse {
    data: Joke[];
    totalCount: number;
  }
  