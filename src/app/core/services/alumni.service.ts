// src/app/services/alumni.service.ts
import { Injectable } from '@angular/core';
import raw from '../../../assets/data/alumni.json';

export type Alumni = {
  id: number;
  name: string;
  firstname: string;
  position?: string|null;
  company?: string|null;
  promotionType?: string|null;
  graduationYear?: number|null;
  city?: string|null;
  country?: string|null;
  image?: string|null;
  biography?: string|null;
  email?: string|null;
  linkedin?: string|null;
};

@Injectable({ providedIn: 'root' })
export class AlumniService {
  // Les données sont intégrées au bundle, pas d’HTTP
  private readonly data: Alumni[] = (raw as any).alumni as Alumni[];

  getAll(): Alumni[] {
    return this.data;
  }

  getById(id: number): Alumni | undefined {
    return this.data.find(a => a.id === id);
  }
}
