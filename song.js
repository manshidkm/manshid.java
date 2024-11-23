// let songs = ["Song1", "Song2", "Song3"];

// // Adding a new song
// songs.push("New Song");

// console.log(songs);  ["Song1", "Song2", "Song3", "New Song"]/

// let songs = ["Song 1", "Song 2", "Song 3"];
// songs.push("New Song");  // Adds "New Song" to the end
// console.log(songs);

// let playlist = ["Song 1", "Song 2", "Song 3", "Song 4"];
// let playlistLength = playlist.length;
// console.log(playlistLength);

// let playlist = ["Song 1", "Song 2", "Song 3", "Song 4"];
// let firstSong = playlist[0];  // Accesses the first song
// console.log(firstSong);

// let playlist = ["Song 1", "Song 2", "Song 3", "Song 4"];
// let songTitles = playlist.join(", ");  // Joins all songs with a comma and space
// console.log(songTitles);

// let playlist = ["Song 1", "Song 2", "Song 3", "Song 4"];
// let newSongs = ["Song 5", "Song 6", "Song 7"];

// let combinedPlaylist = playlist.concat(newSongs);  // Combines both arrays
// console.log(combinedPlaylist);

// let nestedPlaylist = [
//     ["Song 1", "Song 2"], 
//     ["Song 3", "Song 4"], 
//     ["Song 5", "Song 6"]
//   ];
  
//   let flatPlaylist = nestedPlaylist.flat();  // Flattens the array by one level
//   console.log(flatPlaylist);

let playlist = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"];

playlist.splice(2, 2, "New Song 1", "New Song 2");  // Removes 2 songs starting from index 2 and adds 2 new songs

console.log(playlist);

// let playlist = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"];

// playlist.sort();  // Sorts the songs alphabetically

// console.log(playlist);


// let playlist = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"];

// playlist.sort();  // Sorts the songs alphabetically

// console.log(playlist);

// let playlist = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"];

// // Copy the first 2 songs and add them to the end of the array
// let firstTwoSongs = playlist.slice(0, 2);  // Extract the first 2 songs
// playlist = playlist.concat(firstTwoSongs);  // Add them to the end of the array

// console.log(playlist);
