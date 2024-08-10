import Description from "./Description";

export default function NewsDetails({ title, snippet, categories, source, url, imgUrl }) {
    return (
        <div className="showFullNew">
            <Description title={"published"} info={"17.08.2024"} />
            <Description title={"title"} info={title} />
            <Description title={"snippet"} info={snippet} />
            <Description title={"categories"} info={categories} />
            <div className="w-full bg-mainTxt h-px"></div>
            <Description title={"source"} info={source} />
            <div className="bg-firstBG p-4 w-full text-center border-1 border-mainTxt hover:bg-activeBG transition-colors">
                <a href={url} target="_blank" className="text-2xl text-mainTxt">FULL STORY</a>
            </div>
            <div className="flex justify-center">
                <img src={imgUrl} alt={title} className="border-r-1 border-l-1 border-mainTxt max-w-2xl" />
            </div>
            <div className="border-b-1 w-full border-mainTxt"></div>
        </div>
    );
}