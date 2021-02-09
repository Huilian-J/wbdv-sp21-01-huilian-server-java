// dom variables
var $usernameFld
var $passwordFld
var $firstnameFld
var $lastnameFld
var $roleFld
var $updateBtn
var $createBtn
var addCourseBtn
var theTableBody

var users = [
    {username: 'Ada0', password: 'Ada', firstname: 'Ada', lastname: 'ada', role: 'student'},
    {username: 'Ada1', password: 'Ada', firstname: 'Ada', lastname: 'ada', role: 'student'},
    {username: 'Ada2', password: 'Ada', firstname: 'Ada', lastname: 'ada', role: 'student'},
];

function addUser() {
    createUser({
        username: 'newUser',
        password: 'elsie000',
        firstname: 'Huilian',
        lastname: 'Jiang',
        role: 'Admin'})
}

// create user function, re-render user list
function createUser(user) {
    users.push(user)
    renderUsers(users)
}
// create user example
// createUser({username: 'Elsie', password: 'elsie000', firstname: 'Huilian', lastname: 'Jiang', role: 'Admin'})

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


function init() {
    $usernameFld = $(".wbdv-username-fld")
    $passwordFld = $(".wbdv-password-fld")
    $firstnameFld = $(".wbdv-firstname-fld")
    $lastnameFld = $(".wbdv-lastname-fld")
    $roleFld = $(".wbdv-role-fld")
    $updateBtn = $(".wbdv-update-btn")
    $createBtn = $(".wbdv-create-btn")
    addCourseBtn = jQuery("#wbdv-create-user")
    addCourseBtn.click(addUser)
    theTableBody = jQuery("tbody")

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

    renderUsers(users)
}
jQuery(init)