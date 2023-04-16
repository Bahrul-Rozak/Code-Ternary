function convertToTernary() {
  const input = document.getElementById("input").value;
  const output = input
    .replace(
      /if\s*\((.*?)\)\s*{\s*(.*?)\s*}\s*else\s*{\s*(.*?)\s*}/gs,
      "($1) ? $2 : $3"
    )
    .replace(/if\s*\((.*?)\)\s*{\s*(.*?)\s*}/gs, "($1) ? $2 : ''");
  document.getElementById("result").innerText = output;
}

function convertToIfElse() {
  const input = document.getElementById("input").value;
  const output = input
    .replace(
      /\((.*?)\)\s*\?\s*(.*?)\s*:\s*(.*)/gs,
      "if ($1) {\n  $2\n} else {\n  $3\n}"
    )
    .replace(/\((.*?)\)\s*\?\s*(.*?)\s*:\s*''/gs, "if ($1) {\n  $2\n}");
  document.getElementById("result").innerText = output;
}
