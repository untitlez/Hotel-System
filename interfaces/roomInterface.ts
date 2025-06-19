export type roomInterface = {
  id: string;
  number: string;
  location: string;
  type?: string | null;
  description?: string | null;
  pricePerNight: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
};
