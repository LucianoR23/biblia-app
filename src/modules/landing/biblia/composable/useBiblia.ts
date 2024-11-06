import { onMounted, ref } from "vue"
import type { LibrosBiblia } from "../../interfaces"
import { bibliaApi } from "../api/bibliaApi";


export const useBiblia = () => {

  const libros = ref<LibrosBiblia[]>([]);
  const selectedLibro = ref<LibrosBiblia | null>(null);
  const selectedCapitulo = ref<number | null>(null);
  const capitulos = ref<number[]>([]);

  const getLibros = async() => {

    try {
      const resp = await bibliaApi.get<LibrosBiblia[]>('/rv1995');

      return resp.data
    } catch (error) {
      console.error('Error al obtener los libros:', error);
      return []
    }
  };

  const cargarCapitulos = () => {
    if (selectedLibro.value) {
      // Asegurar que 'selectedLibro' está correctamente tipado como 'LibrosBiblia'
      const libro = selectedLibro.value as LibrosBiblia;
      // Generar la lista de capítulos según el libro seleccionado
      capitulos.value = Array.from({ length: libro.chapters }, (_, i) => i + 1);
    }
  };




  onMounted( async() => {
    libros.value = await getLibros()
    console.log(libros)
  } )

  return {
    libros,
    selectedLibro,
    selectedCapitulo,
    capitulos,
    cargarCapitulos,
  }
}
