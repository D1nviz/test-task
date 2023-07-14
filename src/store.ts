import { create } from "zustand";
import { BeerStore } from "./types";

export const useBeers  = create<BeerStore>( set => ({
  beers: [],
  beer: [],
  loading: false,
  error: null,
  setBeers: (newBeers: any) => {
    set({beers: newBeers})
  },
    fetchAllBeers: async () => {
    set({loading: true})
    try {
      const res = await fetch("https://api.punkapi.com/v2/beers");
      if (!res.ok) throw new Error("failed to fetch beers");

      set({beers: await res.json(), error: null})
    }
    catch(e:any) {
      set({error: e.message})
    }
    finally {
      set({loading: false})
    }
  },
  fetchBeer: async (id:number) => {
    set({loading: true})
    try {
      const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
      if (!res.ok) throw new Error("failed to fetch beers");

      set({beer: await res.json(), error: null})
    }
    catch(e:any) {
      set({error: e.message})
    }
    finally {
      set({loading: false})
    }
  }
}));

