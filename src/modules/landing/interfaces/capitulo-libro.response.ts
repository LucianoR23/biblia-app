export interface InfoCapitulo {
  testament:    string;
  name:         string;
  num_chapters: number;
  chapter:      number;
  vers:         Ver[];
}

export interface Ver {
  verse:  string;
  number: number;
  study?: string;
  id:     number;
}

