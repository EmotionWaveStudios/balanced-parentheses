const App = () => {
  function paranthesesChecker() {
    let openBracket = 0;
    let closedBracket = 0;
    let openSquareBrack = 0;
    let closedSquareBrack = 0;
    let openCurlyBrace = 0;
    let closedCurlyBrace = 0;
    let str = document.getElementById("statement").value;
    let arr = str.split("");

    console.log(str);
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "(") {
        openBracket + 1;
        continue;
      } else if (arr[i] === "{") {
        openCurlyBrace += 1;
        continue;
      } else if (arr[i] === "[") {
        openSquareBrack += 1;
        continue;
      } else if (arr[i] === ")") {
        closedBracket += 1;
        continue;
      } else if (arr[i] === "}") {
        closedCurlyBrace += 1;
        continue;
      } else if (arr[i] === "]") {
        closedSquareBrack += 1;
        continue;
      }
    }

    console.log(openBracket);
    console.log(openCurlyBrace);
    console.log(openSquareBrack);
    console.log(closedBracket);
    console.log(closedCurlyBrace);
    console.log(closedSquareBrack);

    if (
      openBracket % 2 === 0 &&
      openCurlyBrace % 2 === 0 &&
      openSquareBrack % 2 === 0 &&
      closedBracket % 2 === 0 &&
      closedCurlyBrace % 2 === 0 &&
      closedSquareBrack % 2 === 0
    ) {
      document.getElementById("answer").innerHTML = true;
    } else {
      document.getElementById("answer").innerHTML = false;
    }
  }

  return (
    <div>
      <h1>Balanced Paranthesis</h1>
      <h2>
        Enter your statement below to check if the parantheses are balanced
      </h2>
      <input type="text" id="statement" />
      <button onClick={paranthesesChecker}>Check Balance</button>
      <br />
      <h1 id="answer"></h1>
      <br />
    </div>
  );
};
export default App;
