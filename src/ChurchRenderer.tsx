import React from "react";

const church = `
                                    +
                                    |
                                   ,|,
                                   |||
                                  /#|#\\
                                  |#|#|
                                  |#|#|
                                 /##|##\\
                                 |##|##|
                                 |##|###\\
                                /####\\##|
                                |####|##|
                                |####|###\\
                               /#####|###|
                8              |#####|###|
              ""8""           /######|####\\
                8            /########\\###,\\
              ,d8888888888888|========|=""#|
            ,d"##"88888888888|##,aa,##|##a#|
          ,d"######"888888888|##8##8##|##8#|
       ,d8888888b,###"8888888|##8aa8##|##8,|
     ,d"##"8888888b,###"88888|========|=""#|
   ,d"######"8888888b,###"888|##a##a##|##a#|
 ,d"###,aa,###"8888888b,###"8|##8##8##|##8,|
/|####d"##"b####|""""""|#####|========|=""#|
#|####8####8####|######|#####|##,aa,##|##a#|
#|####8aaaa8####|######|#####|##8##8##|##8#|
#|##############|######|#####|##""""##|#,,=|
#|aaaaaaaaaaaaaa|======"""""""""""""""""
`;

interface ChurchRendererProps {
  text: string;
}

function isValidURL(url: string) {
  const res = url.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  return res !== null;
}

function replaceHashesWithEmptySpace(text: string) {
  return text.replaceAll("#", " ");
}

function writeToClipboard(text: string) {
  const type = "text/html";
  const blob = new Blob(["<pre>" + text + "</pre>"], { type });
  const data = [new ClipboardItem({ [type]: blob })];
  navigator.clipboard.write(data).then();
}

function getRenderedText(text: string) {
  let renderedText = church;
  for (const char of text) {
    renderedText = renderedText.replace("#", char);
  }
  return replaceHashesWithEmptySpace(renderedText);
}

function getRenderedTextWithLink(text: string) {
  let renderedText = church;
  for (const char of text) {
    renderedText = renderedText.replace(
      "#",
      `<a href="` + text + `">${char}</a>`
    );
  }
  return replaceHashesWithEmptySpace(renderedText);
}

function writeRenderedTextToClipboard(text: string) {
  let renderedText = "";
  if (isValidURL(text)) {
    renderedText = getRenderedTextWithLink(text);
  } else {
    renderedText = getRenderedText(text);
  }

  writeToClipboard(renderedText);
}

function ChurchRenderer({ text }: ChurchRendererProps) {
  return (
    <pre onClick={() => writeRenderedTextToClipboard(text)}>
      {getRenderedText(text)}
    </pre>
  );
}

export default ChurchRenderer;
