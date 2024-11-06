export interface LibrosBiblia {
  names:     string[];
  abrev:     string;
  chapters:  number;
  testament: Testament;
}

export enum Testament {
  AntiguoTestamento = "Antiguo Testamento",
  NuevoTestamento = "Nuevo Testamento",
}
