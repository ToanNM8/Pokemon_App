export interface ResponseGeneration {
  count: number;
  next: string;
  previous: string;
  results: [];
}

export interface Results {
  name: string;
  url: string;
}
