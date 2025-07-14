import {useState} from "react"

export function ArtsIndex({arts}) {
  console.log(arts,"arts")

  const [searchFilter, setSearchFilter] = useState("");
  const selectedArt = arts.find(
    (art) => art.title.toLowerCase() === searchFilter.toLowerCase()
  );
  const displayArts = selectedArt ? [selectedArt] : arts;
  

  return (
    <div>
      <h1 className="headline">Art Institude of Chicago</h1>

  Search filter: 
      <br />
        <input 
        type="text" 
        value={searchFilter} 
        onChange={(event) => setSearchFilter(event.target.value)} 
        list="title" 
        />
        <datalist id="title">
            {arts.map(art => (
              <option key={art.id} value={art.title} />
            ))}
        </datalist>

        {searchFilter && (
        <div style={{ marginTop: "10px" }}>
          <button onClick={() => setSearchFilter("")}>Clear Filter</button>
        </div>
      )}
      
        {displayArts.map((art) => (
          <div key={(art.id)}>
            <h2 className="artTitle">{art.title}</h2>
            <div className="info">
            <p>Artist: {art.artist_titles}</p>
            <p>Place of Origin: {art.place_of_origin}</p>
            <img src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`} />
            <p>Department: {art.department_title}</p>
            </ div>
          </div>
        ))}
    </div>
  )
}