import { Coords } from 'google-map-react';

export interface Station {
  id: number;
  coords: Coords;
  isActive: boolean;
}

export const stations: Station[] = [
  {
    id: 1,
    coords: { lat: 18.62728, lng: 73.8388 },
    isActive: true,
  },
  {
    id: 2,
    coords: { lat: 18.639021, lng: 73.834503 },
    isActive: true,
  },
  {
    id: 3,
    coords: { lat: 18.622219, lng: 73.839523 },
    isActive: true,
  },
  {
    id: 4,
    coords: { lat: 18.643669, lng: 73.758018 },
    isActive: true,
  },
  {
    id: 5,
    coords: { lat: 18.61133, lng: 73.802004 },
    isActive: true,
  },
  {
    id: 6,
    coords: { lat: 18.6113712, lng: 73.8137999 },
    isActive: true,
  },
];
