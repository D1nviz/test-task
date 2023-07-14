export interface IBeer {
  image_url: string;
  name: string;
  id: number ;
  tagline: string;
  first_brewed: string;
  description: string;
}

export interface BeerStore {
  beers: IBeer[];
  beer: IBeer[];
  loading: boolean;
  error: string | null;
  setBeers: (newBeers: IBeer[]) => void;
  fetchAllBeers: () => Promise<void>;
  fetchBeer: (id: number) => Promise<void>;
}
