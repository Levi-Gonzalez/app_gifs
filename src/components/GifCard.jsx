const GifCard = ({titulo, img}) => {


  return (
    <div className='card'>
        <img src={img} alt={titulo} />
        <p>{titulo}</p>
    </div>
  )
}

export default GifCard