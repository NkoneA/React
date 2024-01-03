import "./RandomPokemon.css";
export default function RandomPokemon() {
  const random = Math.floor(Math.random() * 151) + 1;
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${random}.png`;
  return (
    <div className="RandomPokemon">
      <h1>Pokemon #{random}</h1>
      <img src={url} alt="Random Pokemon" />
    </div>
  );
}
