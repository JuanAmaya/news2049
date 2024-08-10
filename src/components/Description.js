export default function Description({ title, info }) {
    return (
        <div className="flex flex-col mx-8 mb-4">
            <span className="text-mainTxt uppercase text-xl">{title}:</span>
            {Array.isArray(info) &&
                info.map((genre) => (
                    <span className="text-secondaryTxt ml-12 capitalize text-xl">{genre}</span>
                ))
            }
            {!Array.isArray(info) &&
                <span className="text-secondaryTxt ml-12 text-xl">{info}</span>
            }
        </div>
    );
}