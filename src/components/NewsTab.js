import { useEffect, useState } from "react";

export default function NewsTab({ styles, setOpenDetails, date, title, desc, orderNum, setShowFullNew }) {
    const [formattedDate, setFormattedDate] = useState("");

    useEffect(() => {
        const newDate = new Date(date);
        const day = newDate.getDate();
        const month = newDate.getMonth() + 1;
        const year = newDate.getFullYear();
        setFormattedDate(`${day}.${month}.${year}`);
    }, []);

    const handleOpenDetails = () => {
        setShowFullNew(orderNum);
        setOpenDetails(true);
    };

    return (
        <div onClick={handleOpenDetails} className={`${styles} p-4 xl:pr-6 hover:bg-activeBG active:bg-activeBG transition-colors hover:cursor-pointer select-none showFullNew`}>
            <span className="text-mainTxt text-lg">{formattedDate}</span>
            <h2 className="text-secondaryTxt text-2xl">{title}</h2>
            <span className="text-mainTxt text-lg">{desc}</span>
        </div>
    );
}