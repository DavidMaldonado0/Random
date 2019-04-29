// LISTEN FOR FORM SUBMIT
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e){
  //GET FORM VALUES
  var siteName = document.getElementById('siteName').value;
  var siteURL = document.getElementById('siteURL').value;
  
  var bookmark = {
    name: siteName,
    url: siteURL
  }
  
  if(localStorage.getItem('bookmarks') === null){
    var bookmarks = [];
    bookmarks.push(bookmark);
    //SET TO LOCALSTORAGE
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    bookmarks.push(bookmark);

    //RESET BACK TO LOCALSTORAGE

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
  
  
  e.preventDefault();
}


//FETCH BOOKMARKS
function fetchBookmarks(){
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  //GET OUTPUT ID 
  var bookmarksResults = document.getElementById('bookmarksResults');
  bookmarksResults.innerHTML = '';

  for (var i = 0; i < bookmarks.length; i++ ) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += name;
  }
}
