// dom variables
var $usernameFld
var $passwordFld
var $firstnameFld
var $lastnameFld
var $roleFld
var $updateBtn
var $createBtn
var $theTableBody

var users = [
    {username: 'Ada0', password: 'Ada', firstname: 'Ada', lastname: 'ada', role: 'student'},
    {username: 'Ada1', password: 'Ada', firstname: 'Ada', lastname: 'ada', role: 'student'},
    {username: 'Ada2', password: 'Ada', firstname: 'Ada', lastname: 'ada', role: 'student'},
];

// create user function, re-render user list
function createUser(user) {
    users.push(user)
    renderUsers(users)
}

//delete user function
function deleteUser(event) {
    var deleteBtn = $(event.target)
    var theId = deleteBtn.attr("id")
    users.splice(theId, 1)
    renderUsers(users)
}

//render user list
function renderUsers(users) {
    $theTableBody.empty()
    for (var i = 0; i < users.length; i++) {
        var user = users[i]
        $theTableBody
            .prepend(`<tr>
                    <td>${user.username}</td>
                    <td>${user.password}</td>
                    <td>${user.firstname}</td>
                    <td>${user.lastname}</td>
                    <td>${user.role}</td>
                    <td>
                        <a class="btn wbdv-delete" id="${i}">
                            <i class="fa fa-times"></i>
                        </a>
                        <a class="btn wbdv-update" id="${i}">
                            <i class="fas fa-pencil-alt"></i>
                        </a>
                    </td>
                </tr>`)
    }
    // delete
    jQuery(".wbdv-delete")
        .click(deleteUser)
}

function init() {
    $usernameFld = $(".wbdv-username-fld")
    $passwordFld = $(".wbdv-password-fld")
    $firstnameFld = $(".wbdv-firstname-fld")
    $lastnameFld = $(".wbdv-lastname-fld")
    $roleFld = $(".wbdv-role-fld")
    $updateBtn = $(".wbdv-update-btn")
    $createBtn = $(".wbdv-create-btn")
    $theTableBody = $("tbody")

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