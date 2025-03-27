function account(userId) {
    var savedUser = "박준하"; // DB
    if (userId == savedUser) {
        console.log("반갑습니다 " + userId + "님");
    } else {
        console.log('로그인에 실패했습니다 ㅜㅜ');
    }
}

account('박준하');
