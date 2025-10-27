// src/app/features/alumni/alumni-detail/alumni-detail.component.ts
import { Component, OnInit, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { AlumniService, Alumni } from '../../../core/services/alumni.service';

@Component({
  selector: 'app-alumni-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './alumni-detail.html',
  styleUrls: ['./alumni-detail.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlumniDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private svc = inject(AlumniService);

  loading = true;
  error: string | null = null;
  data: Alumni | null = null;

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    if (!idParam || Number.isNaN(id)) {
      this.error = 'Identifiant invalide';
      this.loading = false;
      return;
    }

    const a = this.svc.getById(id);
    if (!a) {
      this.error = 'Alumni introuvable';
      this.loading = false;
      return;
    }

    this.data = a;
    this.loading = false;
  }

  displayName(a: Alumni) {
    return `${a.firstname ?? ''} ${a.name ?? ''}`.trim();
  }

  itemClass(a: Alumni) {
    const n = (a.id ?? 0) % 3;
    return ['item-a', 'item-b', 'item-c'][n];
  }

  initials(a: Alumni) {
    const p = (a.firstname || '').trim();
    const n = (a.name || '').trim();
    const i1 = p ? p[0] : '';
    const i2 = n ? n[0] : '';
    return (i1 + i2).toUpperCase() || 'AL';
  }
}
