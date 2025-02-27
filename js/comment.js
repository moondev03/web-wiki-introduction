const nicknames = [
    "태강",  
    "건우",  
    "도현",  
    "승호",  
    "강빈",  
    "재욱",  
    "혁준",  
    "진우",  
    "동건",  
    "철민"
];

function getRandomNickname() {
    return nicknames[Math.floor(Math.random() * nicknames.length)];
}

function getRandomImage() {
    return `https://picsum.photos/300/300?random=${Math.random()}`;
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".submit-btn").addEventListener("click", function () {
        const commentInput = document.querySelector(".comment-input");
        const commentList = document.querySelector(".comment-list");

        const commentText = commentInput.value.trim();
        if (commentText !== "") {
            const commentItem = document.createElement("div");
            commentItem.classList.add("comment-item");

            const profileImg = document.createElement("img");
            profileImg.src = getRandomImage();
            profileImg.alt = "프로필 이미지";
            profileImg.classList.add("profile-img");

            const commentContent = document.createElement("div");
            commentContent.classList.add("comment-content");

            const commentHeader = document.createElement("div");
            commentHeader.classList.add("comment-header");

            const nickname = document.createElement("span");
            nickname.classList.add("comment-nickname");
            nickname.textContent = getRandomNickname(); // 랜덤 닉네임 적용

            const commentTextDiv = document.createElement("div");
            commentTextDiv.classList.add("comment-text");
            commentTextDiv.textContent = commentText;

            commentHeader.appendChild(profileImg);
            commentHeader.appendChild(nickname);

            commentContent.appendChild(commentHeader);

            commentItem.appendChild(commentContent);
            commentItem.appendChild(commentTextDiv);

            commentList.appendChild(commentItem);
            commentInput.value = "";

            alert("댓글이 등록되었습니다");
        }
    });

    document.querySelector(".cancel-btn").addEventListener("click", function () {
        document.querySelector(".comment-input").value = "";
    });
});
