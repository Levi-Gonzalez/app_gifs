export const getGifts = async (categoria) => {
  
  const url = `https://api.giphy.com/v1/gifs/search?api_key=grnEZFAXC1lapvO0MPekB0akeJ4Q1VwG&q=${categoria}&limit=30`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    titulo: gif.title,
    img: gif.images.downsized_medium.url,
  }));
  return gifs;
};
