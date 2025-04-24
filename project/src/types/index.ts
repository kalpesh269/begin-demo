export interface Device {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  price: number;
  releaseDate: string;
  specs: {
    [key: string]: string | number;
  };
}

export interface ComparisonState {
  devices: Device[];
  filters: {
    [key: string]: string[];
  };
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export type SortOption = {
  id: string;
  label: string;
  field: keyof Device | ((device: Device) => any);
};