import Bluebird from 'bluebird';
import { format, parseISO } from 'date-fns';
import { first } from 'lodash';
import api from '../../..';
import { NoticiaPrincipalHome, NoticiasListadasHome } from '../interface/noticias';

interface Props {
  limit?: number;
  offset: number;
}

export async function getHomeNoticiasRepository({ limit = 12, offset = 0 }: Props) {
  const getTotal = await api.get('/noticias/count');
  const total = Number(getTotal.data.count);

  const totalPages = total > 0 ? Math.ceil(total / limit) : 0;

  const [noticiasSemDestaque, noticiaDestaque] = await Bluebird.all([
    api.get<NoticiasListadasHome[]>(
      `/noticias?filter[limit]=${limit}&filter[offset]=${offset}&filter[where][destaque]=N&filter[order]=createdAt%20DESC&filter[fields][createdAt]=true&filter[fields][titulo]=true&filter[fields][subtitulo]=true&filter[fields][url]=true&filter[fields][imagem]=true`
    ),
    api.get<NoticiaPrincipalHome[]>(
      `/noticias?filter[limit]=1&filter[offset]=0&filter[where][destaque]=S&filter[order]=createdAt%20DESC&filter[fields][createdAt]=true&filter[fields][titulo]=true&filter[fields][subtitulo]=true&filter[fields][url]=true`
    ),
  ]);

  const formatPrincipal = first(noticiaDestaque.data) as NoticiaPrincipalHome;

  const principal = {
    ...first(noticiaDestaque.data),
    time: format(parseISO(formatPrincipal.createdAt), 'dd/MMM/yyyy HH:mm'),
  };

  const noticias = noticiasSemDestaque.data.map((noticia) => ({
    ...noticia,
    time: format(parseISO(noticia.createdAt), 'dd/MMM/yyyy HH:mm'),
  }));

  return {
    props: {
      totalRows: total,
      noticias,
      principal,
      totalPages,
    },
  };
}
