var officers = [
    {"pic":"assets/images/brian.jpg", "firstName":"Brian", "lastName":"Wang", "job":"iOS President", "github":"https://github.com/brianwang9100"},
    {"pic":"assets/images/cal.jpg", "firstName":"Cal", "lastName":"Stephens", "job":"iOS Developer", "github":"https://github.com/calda"},
    {"pic":"assets/images/ale.jpg", "firstName":"Ale", "lastName":"Patron", "job":"iOS Developer", "github":"https://github.com/apatronl"},
    {"pic":"assets/images/luke.jpg", "firstName":"Luke", "lastName":"Newman", "job":"iOS Developer", "github":"https://github.com/lukenewman"},
    {"pic":"assets/images/kevin.jpg", "firstName":"Kevin", "lastName":"Randrup", "job":"iOS Developer", "github":"https://github.com/kevinrandrup"},
    {"pic":"assets/images/komal.jpg", "firstName":"Komal", "lastName":"Hirani", "job":"iOS Developer", "github":"https://github.com/khirani6"},
    {"pic":"assets/images/joe.jpg", "firstName":"Joe", "lastName":"Wang", "job":"iOS Developer", "github":"https://github.com/joewang704"},
    {"pic":"assets/images/anushk.jpg", "firstName":"Anushk", "lastName":"Mittal", "job":"iOS Developer", "github":"https://github.com/anushkmittal"},
    {"pic":"assets/images/varun.jpg", "firstName":"Varun", "lastName":"Ballari", "job":"iOS Designer", "github":"https://github.com/Varun-Ballari"}
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
