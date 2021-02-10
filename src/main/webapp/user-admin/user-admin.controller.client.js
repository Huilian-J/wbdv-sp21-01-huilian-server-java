// dom variables
var $usernameFld
var $passwordFld
var $firstnameFld
var $lastnameFld
var $roleFld
var $updateBtn
var $createBtn
var $theTableBody
var userService = new AdminUserServiceClient()

var users = [
    // {username: 'Ada0', password: 'Ada', firstname: 'Ada', lastname: 'ada', role: 'student'},
    // {username: 'Ada1', password: 'Ada', firstname: 'Ada', lastname: 'ada', role: 'student'},
    // {username: 'Ada2', password: 'Ada', firstname: 'Ada', lastname: 'ada', role: 'student'},
];

// create user function, re-render user list
function createUser(user) {
    userService.createUser(user)
        .then(function(userResult) {
            users.push(user)
            renderUsers(users)
        })
}

//delete user function
function deleteUser(event) {
    var deleteBtn = $(event.target)
    var theIndex = deleteBtn.attr("id")
    var theId = users[theIndex]._id
    userService.deleteUser(theId)
        .then(function(status){
            users.splice(theIndex, 1)
            renderUsers(users)
        })

}

//edit user function
// function editUser(event) {
//     var updateBtn = $(event.target)
//     var theId = updateBtn.attr("id")
//     users.splice(theId, 1)    //edit update!
//     renderUsers(users)
// }

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
                        <a class="btn wbdv-delete">
                            <i class="fa fa-times" id="${i}"></i>
                        </a>
                        <a class="btn wbdv-update">
                            <i class="fas fa-pencil-alt" id="${i}"></i>
                        </a>
                    </td>
                </tr>`)
    }
    // delete
    $(".wbdv-delete")
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

    // renderUsers(users)
    userService.findAllUsers()
        .then(function(usersResult) {
            users = usersResult
            renderUsers(users)
        })
}
$(init)