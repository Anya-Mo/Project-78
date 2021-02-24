var image_array=["Family Book.jpg","Family Book Project.png","Family Book Project (1).jpg","Girl.jpg"]
var name_array=["Family Book","Ayaz","Mitul","Anya"]
var i=0;
function Next() {
    document.getElementById("image").src= image_array[i];
    document.getElementById("family_member_name").innerHTML= name_array[i];
    i++;
    if (i == 3) {
        i=0;
    }
}
