const button = document.querySelector("#추가버튼");
const input = document.querySelector("#입력창");
const todos = document.querySelector("#할일들");

button.addEventListener("click", () => {
  //input에 있는 입력값들 가져오기
  const value = input.value;

  //입력값을 바탕으로 새로운 할일 만들기
  //새로운 할 일 표시용 <p>가 필요함.
  const p = document.createElement("p");
  p.innerText = value;
  todos.appendChild(p);
  input.value = ""; //입력창의 값 비워주기

  p.addEventListener("click", () => {
    if (p.className !== "done") {
      p.className = "done";
    } else {
      p.className = "";
    }
  });
});
