var officers = [
    {"pic":"assets/images/person.png", "firstName":"Brian", "lastName":"W", "job":"President", "github":"https://github.com"},
    {"pic":"assets/images/person.png", "firstName":"Cal", "lastName":"S", "job":"Senior Tech Lead", "github":"https://github.com"},
    {"pic":"assets/images/person.png", "firstName":"Ale", "lastName":"P", "job":"Tech Lead", "github":"https://github.com"},
    {"pic":"assets/images/person.png", "firstName":"Komal", "lastName":"H", "job":"Tech Lead", "github":"https://github.com"},
    {"pic":"assets/images/person.png", "firstName":"Varun", "lastName":"B", "job":"Designer", "github":"https://github.com/Varun-Ballari"},
];

getDataFromOfficers(officers);

function getDataFromOfficers(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<li><div class="team_image" style="background-image: url(' + arr[i].pic + ')"></div>' +
                '<div class="name"><a href="' + arr[i].github + '" target="_blank">' + arr[i].firstName + " " + arr[i].lastName + '</a></div>' +
                '<div class="job">' + arr[i].job + '</div></li>';
    }
    document.getElementById("officer-data").innerHTML = out;
}

window.addEventListener('resize', function(event){
    var elmnt = document.getElementById("long-page");
    var maxX = elmnt.offsetWidth;
    console.log(maxX);

});

$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#iphone');
   var offset = startchange.offset();

   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start + 500 > offset.top) {
          $('.siri').css('background-color', '#4B4F56');
      } else {
          $('.siri').css('background-color', 'white');
      }
   });
});
