// src/app/features/alumni/alumni-list/alumni-list.ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { QRCodeComponent } from 'angularx-qrcode';
import { AlumniService, Alumni } from '../../../core/services/alumni.service';

@Component({
  selector: 'app-alumni-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, QRCodeComponent],
  templateUrl: './alumni-list.html',
  styleUrls: ['./alumni-list.css']
})
export class AlumniListComponent implements OnInit {
  private alumniSvc = inject(AlumniService);

  items: Alumni[] = [];
  loading = false;         // on les garde si tu veux le même template
  error: string | null = null;
  search = '';

  ngOnInit() { this.load(); }

  load() {
    // plus de HTTP, plus d'API : lecture synchronisée
    try {
      this.loading = true;
      this.items = this.alumniSvc.getAll();
      this.error = null;
    } catch {
      this.error = 'Erreur de chargement des données intégrées';
    } finally {
      this.loading = false;
    }
  }

  filtered(): Alumni[] {
    const s = this.search.toLowerCase().trim();
    if (!s) return this.items;
    return this.items.filter(a =>
      [a.name, a.firstname, a.position, a.company, a.promotionType, a.city, a.country]
        .some(v => (v ?? '').toLowerCase().includes(s))
    );
  }

  displayName(a: Alumni) { return `${a.firstname ?? ''} ${a.name ?? ''}`.trim(); }

  qrUrl(a: Alumni) { return `${location.origin}/alumni/${a.id}`; }
}
