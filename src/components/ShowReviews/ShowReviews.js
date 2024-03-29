import ModalFun from "../ModalFun/ModalFun";
import UserReviewForm from "../UserReviewForm/UserReviewForm";
import { useEffect, useState } from "react";
import CalcDogWater from "../CalcDogWater/CalcDogWater";

const ShowReviews = ({id, coordinates}) => {
    const [reviews, setReviews] = useState(null);
    useEffect(() => {
        async function loadReviews() {
            const result = await fetch('https://dev.pawson.life/getTrail', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    placesID: id
                })
            });
            console.log(result.status);
            if(result.status===200){
                const rating = await result.json();
                console.log(rating);
                setReviews(rating);
            }
        }
        loadReviews();
    }, [id, setReviews])
    return (<>
        {reviews && <UserReviewForm  review={reviews}/>}
        <ModalFun 
        title={"Leave/Edit Review"}
        id={"review"}
        content={<UserReviewForm isForm={true}/>}
        />
        <ModalFun 
        title={"Plan a Hike!"}
        id={"plan"}
        content={<CalcDogWater latitude={coordinates.lat()} longitude={coordinates.lng()}/>}
        />
    </>)
}

export default ShowReviews;