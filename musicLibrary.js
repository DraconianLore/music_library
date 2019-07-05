const Library = function() {
    this.name = 'Unnamed Library'
    this.creator = 'Unknown'
    this.playlists = []
    this.tracks = []
}
const Playlist = function() {
  this.name = 'Unnamed Playlist'
  this.tracks = []
  this.overallRating = function() {
    let totalRating = 0;
    this.tracks.forEach(track => {
      totalRating += track.rating;
    });
    return totalRating / this.tracks.length;
  }
  this.totalDuration = function() {
    let totalTime = 0;
    this.tracks.forEach(track => {
      totalTime += track.duration;
    });
    return totalTime;
  }
};

const Track = function() {
  this.title = 'unknown'
  this.artist = 'unknown'
  this.album = 'unknown'
  this.rating = 1
  this.duration = 0
}

// create a library
let coolLibrary = new Library();
coolLibrary.name = 'Cool Library';
coolLibrary.creator = 'Sumwun';

// create a playlist
let coolPlaylist = new Playlist();
coolPlaylist.name = 'Cool Playlist';

// create tracks
let codeMonkey = new Track();
codeMonkey.title = 'Code Monkey';
codeMonkey.artist = 'Jonathan Coulton';
codeMonkey.album = 'Thing a Week Three'
codeMonkey.rating = 2;
codeMonkey.duration = 300000;
coolLibrary.tracks.push(codeMonkey);
coolPlaylist.tracks.push(codeMonkey);

let mvc = new Track();
mvc.title = 'Model View Controller';
mvc.artist = 'James Dempsey';
mvc.album = 'WWDC 2003'
mvc.rating = 3;
mvc.duration = 390000;
coolLibrary.tracks.push(mvc);
coolPlaylist.tracks.push(mvc);



coolLibrary.playlists.push(coolPlaylist);

console.log('\n', coolLibrary.name, 'playlists -\n ------------- \n ', coolLibrary.playlists)

console.log('\n', coolPlaylist.name, 'tracks -\n ------------- \n ', coolPlaylist.tracks)
console.log('\n', coolPlaylist.name, 'overall rating -\n ------------- \n ', coolPlaylist.overallRating());
console.log('\n', coolPlaylist.name, 'total runtime -\n ------------- \n ', coolPlaylist.totalDuration());

// var library = {
//     tracks: { t01: { id: "t01",
//                      name: "Code Monkey",
//                      artist: "Jonathan Coulton",
//                      album: "Thing a Week Three" },
//               t02: { id: "t02",
//                      name: "Model View Controller",
//                      artist: "James Dempsey",
//                      album: "WWDC 2003"},
//               t03: { id: "t03",
//                      name: "Four Thirty-Three",
//                      artist: "John Cage",
//                      album: "Woodstock 1952"}
//             },
//     playlists: { p01: { id: "p01",
//                         name: "Coding Music",
//                         tracks: ["t01", "t02"]
//                       },
//                  p02: { id: "p02",
//                         name: "Other Playlist",
//                         tracks: ["t03"]
//                       }
//                },
//     printPlaylists: function () {
//       for (let lists in this.playlists) {
//         console.log(lists + ': ' + this.playlists[lists].name + ' - ' + this.playlists[lists].tracks.length + ' tracks');
//       }
//     },
//     printTracks: function () {
//       for (let songs in this.tracks) {
//         console.log(songs + ': ' + this.tracks[songs].name + ' by ' + this.tracks[songs].artist + ' (' + this.tracks[songs].album + ')');
//       }
//     },
//     printPlaylist: function (playlistId) {
//       console.log(playlistId+ ': ' + this.playlists[playlistId].name + ' - ' + this.playlists[playlistId].tracks.length + ' tracks');
//       for (let songs in this.playlists[playlistId].tracks) {
//         let songID = this.playlists[playlistId].tracks[songs];
//         console.log(songID + ': ' + this.tracks[songID].name + ' by ' + this.tracks[songID].artist + ' (' + this.tracks[songID].album + ')');
//       }
//     },
//     addTrackToPlaylist: function (trackId, playlistId) {
//       this.playlists[playlistId].tracks.push(trackId);
//     },
//     addTrack: function (name, artist, album) {
//       let newKey = uid();
//       this.tracks[newKey] = {
//         id: newKey,
//         name: name,
//         artist: artist,
//         album: album
//       };
//     },
//     addPlaylist: function (name) {
//       let newKey = uid();
//       this.playlists[newKey] = {
//         id: newKey,
//         name: name,
//         tracks: []
//       }
//     },
//     printSearchResults: function(query) {
//       for (let searching in this.tracks) {
//         if (this.tracks[searching].name.toLowerCase().search(query.toLowerCase()) != '-1') {
//           console.log(searching + ': ' + this.tracks[searching].name + ' by ' + this.tracks[searching].artist + ' (' + this.tracks[searching].album + ')');
//         }
//         if (this.tracks[searching].artist.search(query) != '-1') {
//           console.log(searching + ': ' + this.tracks[searching].name + ' by ' + this.tracks[searching].artist + ' (' + this.tracks[searching].album + ')');
//         }
//         if (this.tracks[searching].album.search(query) != '-1') {
//           console.log(searching + ': ' + this.tracks[searching].name + ' by ' + this.tracks[searching].artist + ' (' + this.tracks[searching].album + ')');
//         }
  
//       }
//     }
  
  
//   }
  
//   // FUNCTIONS TO IMPLEMENT:
  
//   // prints a list of all playlists, in the form:
//   // p01: Coding Music - 2 tracks
//   // p02: Other Playlist - 1 tracks
  
  
//   console.log('playlists: ');
//   library.printPlaylists();
  
//   // prints a list of all tracks, in the form:
//   // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
//   // t02: Model View Controller by James Dempsey (WWDC 2003)
//   // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  
  
//   console.log('Tracks: ')
//   library.printTracks();
//   // prints a list of tracks for a given playlist, in the form:
//   // p01: Coding Music - 2 tracks
//   // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
//   // t02: Model View Controller by James Dempsey (WWDC 2003)
  
//   console.log('Playlist tracks');
//   library.printPlaylist('p01');
  
//   // adds an existing track to an existing playlist
  
  
//   console.log('added track');
//   library.addTrackToPlaylist('t03', 'p01');
//   library.printPlaylist('p01');
  
//   // generates a unique id
//   // (use this for addTrack and addPlaylist)
  
//   var uid = function() {
//     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
//   }
  
  
//   // adds a track to the library
  
//   console.log ('adding a track');
//   library.addTrack('OMG', 'myself', 'solo');
//   library.printTracks();
//   // adds a playlist to the library
  
//   console.log('adding playlist');
//   library.addPlaylist('cool songs');
//   library.printPlaylists();
  
//   // STRETCH:
//   // given a query string string, prints a list of tracks
//   // where the name, artist or album contains the query string (case insensitive)
//   // tip: use "string".search("tri")
//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
  
//   console.log('\n searching for "ou"')
//   library.printSearchResults('ou');