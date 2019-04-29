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
  
  localStorage.setItem('test', 'Hello World');
  
  
  e.preventDefault();
}