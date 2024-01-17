const ListDetails = ({ result }) => {
    const { word, phonetics, meanings } = result;
  
    return (
      <div className="card mt-20">
        <div className="p-20">
          <h3> Word </h3>
          <div className="flex">
            <p style={{fontWeight: "bolder"}}> {word} </p>
  
            <p className="pl-20"> {meanings[0].partOfSpeech} </p>
            <p className="pl-20"> {phonetics[0].text} </p>
          </div>
  
          <div>
            <h3> Meaning: </h3>
            <p>{meanings[0].definitions[0].definition}</p>
          </div>

        </div>
      </div>
    );
  };
  
  export default ListDetails;
  