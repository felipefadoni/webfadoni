export interface NoticiaPrincipalHome {
  titulo: string;
  subtitulo?: string;
  url: string;
  createdAt: string;
  time?: string;
}

export interface NoticiasListadasHome {
  titulo: string;
  subtitulo?: string;
  url: string;
  createdAt: string;
  time?: string;
  imagem: string;
}

export interface NoticiaVisualizarProps {
  titulo: string;
  subtitulo?: string;
  texto: string;
  createdAt: string;
  time?: string;
  imagem: string;
  imagemDescricao?: string;
  referencia?: string;
}
