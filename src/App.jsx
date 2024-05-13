import { useEffect, useState } from "react";
import "./App.css";
import { CardContent } from "./components/CardContent/CardContent";
import { Stack } from "./components/Stack/Stack";
import {
  FontSizeGiant,
  SpacingInlineSizeXxs,
} from "./style-dictionary-dist/variables";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=6ae9b538ed0b4f9ba18552cc49e29631"
    )
      .then((response) => response.json())
      .then(
        (response) => response.status === "ok" && setArticles(response.articles)
      );
  }, []);

  return (
    <Stack>
      <h1
        style={{
          fontSize: FontSizeGiant,
          textAlign: "center",
          marginBottom: SpacingInlineSizeXxs,
        }}
      >
        Meiuca News
      </h1>
      {articles.map((article, index) => (
        <CardContent
          title={article.title.split(" - ")[0]}
          subtitle={article.author}
          url={article.url}
          paragraph={article.description}
          key={index}
        ></CardContent>
      ))}
    </Stack>
  );
}

export default App;
