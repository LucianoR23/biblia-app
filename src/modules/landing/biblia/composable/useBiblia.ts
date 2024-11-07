import { onMounted, ref } from "vue"
import type { LibrosBiblia, Ver, InfoCapitulo } from "../../interfaces"
import { bibliaApi } from "../api/bibliaApi";
import router from "@/router";



export const useBiblia = () => {

  const libros = ref<LibrosBiblia[]>([]);
  const libroSeleccionado = ref<string>('');
  const capituloSeleccionado = ref<number>(1);
  const capitulos = ref<number[]>([]);
  const infoVersiculos = ref<Ver[]>([])

  const getLibros = async() => {

    try {
      const resp = await bibliaApi.get<LibrosBiblia[]>('/books');

      return resp.data
    } catch (error) {
      console.error('Error al obtener los libros:', error);
      return []
    }
  };

  const cargarCapitulos = async () => {
    if (libroSeleccionado.value) {
      const libro = libros.value.find(libro => libro.names[0] === libroSeleccionado.value);

      if (!libro) {
        console.error(`Libro con nombre ${libroSeleccionado.value} no encontrado.`);
        return;
      }

      // Generar la lista de capítulos según el libro seleccionado
      capitulos.value = Array.from({ length: libro.chapters }, (_, i) => i + 1);
    }
  };


  const cargarInfoVersiculos = async( capitulo: number, book: string ) => {
    try {
      const resp = await bibliaApi.get<InfoCapitulo>(`/read/rv1995/${book}/${capitulo}`);

      infoVersiculos.value = resp.data.vers
    } catch (error) {
      console.error('Error al obtener los libros:', error);
      infoVersiculos.value = [];
    }
  }

  const siguienteCapitulo = ( capitulo: number, book: string ) => {
    const libroActual = libros.value.find( libro => libro.names[0] === book );
    if(!libroActual || capitulo >= libroActual.chapters.valueOf()) return capitulo;
    return capitulo + 1;
  }

  const anteriorCapitulo = ( capitulo: number ) => {
    return capitulo > 1 ? capitulo - 1 : 1;
  }

  const navegarARuta = (libro: string, cap: number) => {
    if(libro && cap){
      router.push({ name: 'biblia', params: { book: libro, capitulo: cap } })
    }
  }

  onMounted( async() => {
    await new Promise( r => setTimeout(r, 1000) )
    libros.value = await getLibros()

  } )

  return {
    libros,
    libroSeleccionado,
    capituloSeleccionado,
    capitulos,
    infoVersiculos,
    cargarCapitulos,
    siguienteCapitulo,
    anteriorCapitulo,
    cargarInfoVersiculos,
    navegarARuta
  }
}
