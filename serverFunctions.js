function doGet() {
  const html = HtmlService.createTemplateFromFile("main");
  const output = html.evaluate();
  return output;
}

function include(fileName) {
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}
