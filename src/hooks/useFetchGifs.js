import { useEffect, useState } from 'react';
import { getGifts } from '../helpers/getGif';

export default function useFetchGifs(categoria) {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const consulta = async () => {
    const nuevaImagenes = await getGifts(categoria);
    setImages(nuevaImagenes);
    setLoading(false)
  };

  useEffect(() => {
    consulta();
  }, []);

  return {
    images,
    loading
  };
}
