import { useEffect } from "react";
import { useState } from "react";
import Markdown from "react-markdown";
import markdownUrl from "../about.md";

function About() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(markdownUrl).then(result => {
      result.text().then(text => {
        setMarkdown(text);
      })
    })
  })
  return <Markdown>{markdown}</Markdown>
}

export default About;
