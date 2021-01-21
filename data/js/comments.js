function addComment() {
    var defaultNamesArray = [];
    var defaultCommentsArray = [];
    var defaultTimesArray = [];
    defaultNamesArray[0] = [
        'Julia',
    ]
    defaultNamesArray[1] = [
        'Lily'
    ]
    defaultNamesArray[2] = [
        'Miley'
    ]
    defaultNamesArray[3] = [
        'Tani'
    ]
    defaultNamesArray[4] = [
        'Sam',
    ]
    defaultNamesArray[5] = [
        'Mini'
    ]

    defaultCommentsArray[0] = [
        'Very helpul!',
    ]
    defaultCommentsArray[1] = [
        'Well said',
    ]
    defaultCommentsArray[2] = [
        'Good',
    ]
    defaultCommentsArray[3] = [
        'Nice',
    ]
    defaultCommentsArray[4] = [
        'Nice, but need to be precise!'
    ]
    defaultCommentsArray[5] = [
        'Not true!'
    ]

    defaultTimesArray[0] = [
        '2020-5-28 12:30:49',
    ]
    defaultTimesArray[1] = [
        '2020-4-28 19:50:24',
    ]
    defaultTimesArray[2] = [
        '2020-4-28 19:50:24',
    ]
    defaultTimesArray[3] = [
        '2020-4-28 19:50:24',
    ]
    defaultTimesArray[4] = [
        '2020-3-30 16:48:38'
    ]
    defaultTimesArray[5] = [
        '2020-8-06 10:19:23'
    ]
    var blog = sessionStorage.getItem("blog");
    var message = document.getElementById("message");
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    var nameArray = JSON.parse(localStorage.getItem("comment-names"+blog))?.name || defaultNamesArray[blog];
    var commentArray = JSON.parse(localStorage.getItem("comments"+blog))?.comment || defaultCommentsArray[blog];
    var timeArray = JSON.parse(localStorage.getItem("comment-time"+blog))?.time || defaultTimesArray[blog];
    var newName = document.getElementById("name").value;
    var newEmail = document.getElementById("c-email").value;
    var newComment = document.getElementById("comment").value;
    nameArray.push(newName);
    commentArray.push(newComment);
    timeArray.push(dateTime);
    if(newName !="" && newComment !="" && newEmail !="") {
        setCommentData(commentArray, nameArray, timeArray);
        showComments();
        message.innerHTML = "Comment added!";
        message.className = "comment-success";
        setTimeout(function () {
            message.className = "display-none";
            location.reload();
        }, 2500);
    } else {
        message.innerHTML = "All fields required";
        message.className = "comment-errors";
        setTimeout(function () {
            message.className = "display-none";
        }, 2500);
    }
}

function showComments() {   
    var blog = sessionStorage.getItem("blog"); 
    var defaultNamesArray = [];
    var defaultCommentsArray = [];
    var defaultTimesArray = [];
    defaultNamesArray[0] = [
        'Julia',
    ]
    defaultNamesArray[1] = [
        'Lily'
    ]
    defaultNamesArray[2] = [
        'Miley'
    ]
    defaultNamesArray[3] = [
        'Tani'
    ]
    defaultNamesArray[4] = [
        'Sam',
    ]
    defaultNamesArray[5] = [
        'Mini'
    ]

    defaultCommentsArray[0] = [
        'Very helpul!',
    ]
    defaultCommentsArray[1] = [
        'Well said',
    ]
    defaultCommentsArray[2] = [
        'Good',
    ]
    defaultCommentsArray[3] = [
        'Nice',
    ]
    defaultCommentsArray[4] = [
        'Nice, but need to be precise!'
    ]
    defaultCommentsArray[5] = [
        'Not true!'
    ]

    defaultTimesArray[0] = [
        '2020-5-28 12:30:49',
    ]
    defaultTimesArray[1] = [
        '2020-4-28 19:50:24',
    ]
    defaultTimesArray[2] = [
        '2020-4-28 19:50:24',
    ]
    defaultTimesArray[3] = [
        '2020-4-28 19:50:24',
    ]
    defaultTimesArray[4] = [
        '2020-3-30 16:48:38'
    ]
    defaultTimesArray[5] = [
        '2020-8-06 10:19:23'
    ]

    nameArray = JSON.parse(localStorage.getItem("comment-names"+blog)) ? JSON.parse(localStorage.getItem("comment-names"+blog)).name : defaultNamesArray[blog];
    commentArray = JSON.parse(localStorage.getItem("comments"+blog)) ? JSON.parse(localStorage.getItem("comments"+blog)).comment : defaultCommentsArray[blog];
    timeArray = JSON.parse(localStorage.getItem("comment-time"+blog)) ? JSON.parse(localStorage.getItem("comment-time"+blog)).time : defaultTimesArray[blog];
    setCommentData(commentArray, nameArray, timeArray);
    for(i=nameArray.length-1; i>=0; i--) {
        var node = document.createElement("DIV");
        node.innerHTML = `<div class="new_comment">
                          <div class="comment-img"><img src="../assets/user.png" style="border-radius: 50%;" width="100%"/></div>
                          <b class="text-end">`+nameArray[i]+`</b><p class="op-6">`+timeArray[i]+`</p>
                          <div class="comment-section">`+commentArray[i]+`</div>
                          </div>`;
        document.getElementById("new-comment").appendChild(node);
    }
}

function setCommentData(comment, name, time) {
    var blog = sessionStorage.getItem("blog");
    var comments = {
        comment: comment
    };
    var names = {
        name: name
    };
    var times = {
        time: time
    };
    localStorage.setItem("comments"+blog, JSON.stringify(comments))
    localStorage.setItem("comment-names"+blog, JSON.stringify(names))
    localStorage.setItem("comment-time"+blog, JSON.stringify(times))
}