function Avatar({person, size=100}) {
  return (
    <img
      className="avatar"
      src={'https://i.imgur.com/' + person.imageId + '.jpg'}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Profile({scientist,size}) {
  return (
    <section className="profile">
        <h2>{scientist.name}</h2>
        <Avatar
            person={scientist}
            size={size} />
         <ul>
          <li>
            <b>Profession: </b>
            {scientist.profession}
          </li>
          <li>
            <b>Awards: {scientist.awards.split(',').length} </b>
            {scientist.awards}
          </li>
          <li>
            <b>Discovered: </b>
            {scientist.discoverd}
          </li>
        </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        scientist={{name:"Maria Skłodowska-Curie",
                    imageId:"szV5sdGs",
                    profession:"physicist and chemist",
                    awards:"(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
                    discoverd:"polonium (element)"
                  }}
        size={70}
      />
      <Profile
        scientist={{name:"Katsuko Saruhashi",
                    imageId:"YfeOqp2s",
                    profession:"geochemist",
                    awards:"((Miyake Prize for geochemistry, Tanaka Prize)",
                    discoverd:"a method for measuring carbon dioxide in seawater"
                  }}
        size={70}
      />
    </div>
  );
}
