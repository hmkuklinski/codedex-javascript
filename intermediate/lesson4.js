// Write code below 💖
const fiveSongs = [
    {
      name: 'Blinding Lights',
      artist: 'The Weeknd',
      streams: 4260000000
    },
    {
      name: 'Shape of You',
      artist: 'Ed Sheeran',
      streams: 3901000000
    },
    {
      name: 'Someone You loved',
      artist: 'Lewis Capaldi',
      streams: 3413000000
    },
    {
      name: 'Sunflower',
      artist: 'Post Malone (feat. Swae Lee)',
      streams: 3345000000
    },
    {
      name: 'As It Was',
      artist: 'Harry Styles',
      streams: 3278000000
    }
  ];
  
  for (let song of fiveSongs){
    for (let info in song){
      console.log(`${song[info]}`);
    }
    console.log();
  }