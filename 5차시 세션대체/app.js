console.log("프엔 아기사자, 처음으로... ");
let hi = 777;

let age = 12;
console.log("조건문 시작 전");
if (age > 19) {
  console.log("당신은 성인입니다!");
}
console.log("조건문 실행 후");

let userValue = prompt("숫자를 입력하세요.");
if (userValue > 0) {
  alert("양수입니다.");
} else if (userValue === 0) {
  alert("0이네요");
} else if (userValue < 0) {
  alert("음수입니다.");
} else {
  alert("이상한 값입니다.");
}

const password = prompt("새로운 비밀번호를 입력하세요");
if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    alert("비밀번호 변경 완료!");
  } else {
    alert("공백 노노!");
  }
} else {
  alert("더 길게 써주세요!");
}

const userInput = prompt("입력하시오.");
if (userInput) {
  alert("Truth-Y");
} else {
  alert("False-Y");
}
