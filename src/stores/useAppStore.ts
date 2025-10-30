import { create } from 'zustand'
import { Genres } from '../hooks/useGenres';
import { Platform } from '../hooks/usePlatforms';

export interface Query {
  genre: Genres | null;
  platform: Platform | null;
  search: string;
}

interface GameQueryStore {
  gameQuery: Query;
  setSearchText: (searchText: string) => void;
  setGenre: (genreObj: Genres | null) => void;
  setPlatform: (platformObj: Platform | null) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {
    genre: null,
    platform: null,
    search: ''
  },
  setGenre: (genre) => set((store) => ({ gameQuery: { ...store.gameQuery, genre } })),
  setPlatform: (platform) => set((store) => ({ gameQuery: { ...store.gameQuery, platform } })),
  setSearchText: (search) => set(() => ({ gameQuery: { search, platform: null, genre: null } }))
}));

export default useGameQueryStore;