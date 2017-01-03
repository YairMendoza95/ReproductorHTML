$(document).ready(function(){
	GetSongs();
});
var audio = document.getElementById('player');
var music;

function GetSongs(){
	$.getJSON("js/app.json", function(mjson){
		music = mjson;
		//console.log(music);
		GenList(music);
	});
}

function GenList(music){
	$.each(music.songs, function(i, song){
		$('#playlist').append('<li class="list-group-item" id="' + i + '">' + song.nombre + '</li>')
	});

	$('#playlist li').click(function(){
		var selectedSong = $(this).attr('id');
		//console.log(selectedSong);
		PlaySong(selectedSong);
	});
}

function PlaySong(id){
	console.log(id);
	$('#img-album').attr('src', music.songs[id].img);
	$('#player').attr('src', music.songs[id].song);
	audio.play();
}