import { format, parseISO } from 'date-fns';
import { first } from 'lodash';
import api from '../../..';
import { NoticiaVisualizarProps } from '../interface/noticias';

interface Props {
  url: string;
}

export async function getOneNoticia({ url }: Props) {
  const getNoticia = await api.get(
    `/noticias/${url}?filter[where][url]=${url}&filter[fields][titulo]=true&filter[fields][subtitulo]=true&filter[fields][imagem]=true&filter[fields][texto]=true&filter[fields][createdAt]=true&filter[fields][imagemDescricao]=true&filter[fields][referencia]=true`
  );

  const getFirst = first(getNoticia.data) as NoticiaVisualizarProps;

  return { ...getFirst, time: format(parseISO(getFirst.createdAt), 'dd/MMM/yyyy HH:mm') };
}
