import GifCard from './GifCard';
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ({ categoria }) => {

  
  const {images, loading} = useFetchGifs(categoria)

  return (

    <div className='card-grid'>
    
      {
        loading && (<h2>Cargando</h2>)
      }
      <h3>{categoria}</h3>
      {images.map((image) => (
        <GifCard key={image.id}
        {...image}
        />
      ))}
    </div>
  );
};

export default GifGrid;
