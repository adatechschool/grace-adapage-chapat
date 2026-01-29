export interface ChronologieItem {
  id: string;
  date: string;
  description: string;
  photo?: string;
}

export interface RecordItem {
  id: string;
  titre: string;
  description: string;
  photo?: string;
}

export interface FormuleMagiqueItem {
  id: string;
  titre: string;
  date?: string;
  description: string;
}