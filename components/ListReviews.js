import ReviewCard from "./ReviewCard"

const ListReviews = ({ reviews, getItemInfo }) => {

  return (
    <div className="border-4 rounded-lg border-cyan-600 w-3/6 h-44">
      <label className=" font-montserrat">User's reviews for this item</label>
      <div className="flex flex-raw h-36 overflow-x-scroll overflow-y-hidden">
        {reviews
        ? reviews.map((review, key) => 
          <ReviewCard key={key} creator={review.creator} text={review.text} date={review.date} _id={review._id} getItemInfo={getItemInfo}/>)
        : <p>Loading...</p>}
      </div>
    </div>
  )
}

export default ListReviews