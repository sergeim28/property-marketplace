type PropertyImage = {
  id: number;
  original: string;
};
export type Property = {
  id: number;
  title: string;
  is_listed: boolean | undefined;
  description: string;
  total_occupancy: number;
  total_bedrooms: number;
  total_bathrooms: number;
  service_fee_percentage: number;
  tax_percentage: number;
  address: {
    full: string;
  };
  display_image: string;
  images: PropertyImage[];
  prices: {
    base_price: number;
    currency: string;
  };
  listInformation: {
    cost: number;
    tax: number;
    area: string;
  };
};
