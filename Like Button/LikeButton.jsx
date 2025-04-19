import { useState } from "react";
export default function LikeButton() {
    let [isliked, setisLiked] = useState(false);
    let [count, setCount] = useState(0);

    let toggleLike = () => {
        setisLiked(!isliked);
        setCount(count + 1);
    };
     let likeStyle = { color: "red" };

    return (
        <div>
            <p>Count = {count}</p>
            <p onClick={toggleLike}>
                {isliked ? (
                    <i className="fa-solid fa-heart" style={likeStyle}></i>
                ) : (
                    <i className="fa-regular fa-heart"></i>
                )}
                
            </p>
        </div>
    );
}

