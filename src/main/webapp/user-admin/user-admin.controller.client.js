// alert("Welcome Alert")
// console.log("console alert")

//'Add user' Button
var addCourseBtn = jQuery("#wbdv-create-user") // $ = jQuery
function addUser() {
    createUser({
        username: 'newUser',
        password: 'elsie000',
        firstname: 'Huilian',
        lastname: 'Jiang',
        role: 'Admin'})
}
addCourseBtn.click(addUser)
var users = [
    {username: 'Ada0', password: 'Ada', firstname: 'Ada', lastname: 'ada', role: 'student'},
    {username: 'Ada1', password: 'Ada', firstname: 'Ada', lastname: 'ada', role: 'student'},
    {username: 'Ada2', password: 'Ada', firstname: 'Ada', lastname: 'ada', role: 'student'},
];

// play with heading style
var theHeading = jQuery("h1#h-heading")
// theHeading.remove()
theHeading.html("Changed")
theHeading.css("background-color", "red")
theHeading.css("color", "yellow")
theHeading
    .html("Changed")
    .css("background-color", "blue")
    .css("color", "red")
    .append(" - add, remove courses!")
    .append("<button>Go!</button>")
console.log(theHeading)

var theTableBody = jQuery("tbody")

// create user function, re-render user list
function createUser(user) {
    users.push(user)
    renderUsers(users)
}
// create user example
createUser({username: 'Elsie', password: 'elsie000', firstname: 'Huilian', lastname: 'Jiang', role: 'Admin'})

//render user list
function renderUsers(users) {
    theTableBody.empty()
    for (var i = 0; i < users.length; i++) {
        var user = users[i]
        theTableBody
            .prepend(`<tr>
                    <td>${user.username}</td>
                    <td>${user.password}</td>
                    <td>${user.firstname}</td>
                    <td>${user.lastname}</td>
                    <td>${user.role}</td>
                    <td>
                        <button class="wbdv-delete" id="${i}">Delete</button>
                        <button>Select</button>
                    </td>
                </tr>`)
    }
    jQuery(".wbdv-delete")
        .click(function (event) {
            console.log(event.target.id)
            var deleteBtn = jQuery(event.target)
            var theClass = deleteBtn.attr("class")
            var theId = deleteBtn.attr("id")
            users.splice(theId, 1)
            renderUsers(users)
        })
}
renderUsers(users)

// dom variables
var $usernameFld = $(".wbdv-username-fld")
var $passwordFld = $(".wbdv-password-fld")
var $firstnameFld = $(".wbdv-firstname-fld")
var $lastnameFld = $(".wbdv-lastname-fld")
var $roleFld = $(".wbdv-role-fld")
var $updateBtn = $(".wbdv-update-btn")
var $createBtn = $(".wbdv-create-btn")

// 'Create' button - create new user, empty fields afterward
$createBtn.click(function() { // lambda function: 'function ()'  =  '() =>' and '{}' can be removed
    var newUser = {
        username: $usernameFld.val(),
        password: $passwordFld.val(),
        firstname: $firstnameFld.val(),
        lastname: $lastnameFld.val(),
        role: $roleFld.val()
    }
    createUser(newUser)
    //clearing fields
    $usernameFld.val("")
    $passwordFld.val("")
    $firstnameFld.val("")
    $lastnameFld.val("")
    $roleFld.val("Faculty")
})