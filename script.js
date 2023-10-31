var button = document.querySelectorAll(".price-item-button");
// querySelectorAll (값) => '값'이 포함된 모든 개체를 찾아라.

// var -> 변수
// let -> 상수 선언 #Define

// for i of button, button 개수만큼 반복함. i는 버튼 이름
// i.addEventListener 각각 버튼에 이벤트 추가

for (i of button) {
    i.addEventListener("click", function() {
        alert("Just Practice repository, Don't get your hope up.");
    });
}
