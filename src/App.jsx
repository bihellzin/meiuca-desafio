import { useEffect, useState } from "react";
import "./App.css";
import { CardContent } from "./components/CardContent/CardContent";
import * as tokens from "./style-dictionary-dist/variables";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=6ae9b538ed0b4f9ba18552cc49e29631"
    )
      .then((response) => response.json())
      .then((response) => setArticles(response.articles));
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: tokens.SpacingStackSizeNano,
        }}
      >
        {articles.map((article, index) => (
          <CardContent
            title={article.title.split(" - ")[0]}
            subtitle={article.author}
            url={article.url}
            paragraph={article.description}
            key={index}
          ></CardContent>
        ))}
      </div>
    </>
  );
}

export default App;
