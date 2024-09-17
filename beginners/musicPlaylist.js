const musicPlaylist = [
    "Tom Sawyer",
    "Sabotage",
    "I Wanna Dance With Somebody",
    "Don't Speak",
    "Bulls On Parade",
    "Thriller",
    "The Breaks",
    "Brick",
    "Aeroplane Over the Sea",
    "Tubthumping"
  ];
  
  const firstRemoved = musicPlaylist.shift();
  const lastRemoved = musicPlaylist.pop();
  
  const addEnd = musicPlaylist.push("Maniac");
  const addBeginning = musicPlaylist.unshift("Venom", "Charmer");
  
  console.log(musicPlaylist);