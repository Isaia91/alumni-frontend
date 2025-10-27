export interface AlumniDto {
  id: number;
  nom: string;
  prenom: string;
  linkedin?: string | null;
  promotion?: string | null;
  formation?: string | null;
  profil?: string | null;
  email?: string | null;
  telephone?: string | null;
  contacte_par?: string | null;
  accord_itv?: boolean;
  date_passage?: string | null; // YYYY-MM-DD
  temoignage_parcours?: string | null;
  date_rencontre?: string | null; // YYYY-MM-DD
}


export const displayName = (a: AlumniDto) => `${a.prenom ?? ''} ${a.nom ?? ''}`.trim();
