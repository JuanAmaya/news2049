import { useEffect, useState } from "react";
import NewsDetails from "./components/NewsDetails";
import NewsTab from "./components/NewsTab";
import EmptyDetails from "./components/EmptyDetails";
import ErrorMessage from "./components/ErrorMessage";

// const DUMMY_NEWS = {
//   data: [
//     {
//       date: "1.1.2024",
//       title: "Title 1",
//       description: "Description of the news 1",
//       categories: ["Categorie 1", "Categorie 2"],
//       snippet: "snippet",
//       source: "soource",
//       url: "url",
//       image_url: "https://media.breitbart.com/media/2024/08/trump-answers-questions-640x335.jpg",
//     },
//     {
//       date: "1.1.2024",
//       title: "Title 2",
//       description: "Description of the news 2",
//       categories: ["Categorie 1", "Categorie 2"],
//       snippet: "snippet",
//       source: "soource",
//       url: "url",
//       image_url: "https://media.breitbart.com/media/2024/08/trump-answers-questions-640x335.jpg",
//     },
//     {
//       date: "1.1.2024",
//       title: "Title 3",
//       description: "Description of the news 3",
//       categories: ["Categorie 1", "Categorie 2"],
//       snippet: "snippet",
//       source: "soource",
//       url: "url",
//       image_url: "https://media.breitbart.com/media/2024/08/trump-answers-questions-640x335.jpg",
//     },
//   ]
// };

export default function App() {
  const [openDetails, setOpenDetails] = useState(false);
  const [showFullNew, setShowFullNew] = useState();
  const [topNews, setTopNews] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getNews();
  }, []);

  async function getNews() {
    try {
      setIsLoading(true);
      const res = await fetch(`https://api.thenewsapi.com/v1/news/top?locale=us&language=en&api_token=${process.env.REACT_APP_NEWS_KEY}`);
      const data = await res.json();
      if (!data.error) {
        setIsLoading(false);
        setError(false);
        setTopNews(data);
      } else {
        setIsLoading(false);
        setError(true);
        setErrorMessage(data.error.message);
      }
    }
    catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div>
      <div className="top-0 h-14 w-full bg-bgCol border-b-1 border-mainTxt fixed z-10"></div>
      <div className="bottom-0 h-8 w-full bg-bgCol border-t-1 border-mainTxt fixed z-10"></div>
      <div className="left-0 top-0 w-6 h-full bg-bgCol border-r-1 border-mainTxt fixed z-10"></div>
      <div className="right-0 top-0 w-6 h-full bg-bgCol border-l-1 border-mainTxt fixed z-10"></div>

      <h1 onClick={() => setOpenDetails(false)} className="text-mainTxt text-3xl mb-6 ml-4 fixed w-screen p-4 h-14 top-0 left-0 z-20 select-none hover:cursor-pointer">{isLoading ? "LOADING" : "NEWS"}</h1>

      {error &&
        <div className="xl:w-2/6">
          <ErrorMessage errorMessage={errorMessage} />
        </div>
      }

      <div className="my-20 mx-6 xl:left-6 xl:mx-0 relative xl:flex">
        {topNews.length !== 0 && topNews !== undefined &&
          <div className={`flex flex-col gap-4 xl:w-2/6 ${openDetails ? "hidden xl:flex" : ""}`}>

            {topNews.data.map((topNew, i) => (
              <NewsTab key={topNew.uuid} styles={i % 2 == 0 ? "bg-firstBG" : "bg-secondBG"} setOpenDetails={setOpenDetails} setShowFullNew={setShowFullNew} date={topNew.published_at} title={topNew.title} desc={topNew.description} orderNum={i} />
            ))}
          </div>
        }

        <div className="fixed bg-bgCol w-full overflow-x-hidden xl:w-4/6 right-0 xl:border-l-1 xl:border-mainTxt xl:h-full xl:bg-bgCol xl:top-14 xl:py-8 overflow-scroll">
          {!openDetails && <EmptyDetails />}
          {openDetails && <NewsDetails title={topNews.data[showFullNew].title} snippet={topNews.data[showFullNew].snippet} categories={topNews.data[showFullNew].categories} source={topNews.data[showFullNew].source} url={topNews.data[showFullNew].url} imgUrl={topNews.data[showFullNew].image_url} />}
        </div>
      </div>
    </div >
  );
}
