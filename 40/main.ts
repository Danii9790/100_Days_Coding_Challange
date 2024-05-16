// Explain & TIP: Use functions to return objects. This exercise practices creating and manipulating objects, and introducing optional function parameters.

function make_album(artist:string,tittle:string,tracks?:number){
let album ={artist,tittle,}
{
    if (tracks){
        album['tracks']=tracks
    }
}
return album;
}
console.log(make_album("Artist One","The first album"))
console.log(make_album("Artist two","The second album"))
console.log(make_album("Artist three","The 3rd album",20))