import ReviewCard from "./ReviewCard"

const ListReviews = ({ reviews }) => {
  return (
    <div className="border border-cyan-700 w-3/6 h-44">
      <label>User's reviews for this item</label>
      {reviews
      ? reviews.map((review) => 
        <ReviewCard creator={review.creator} text={review.text}/>)
      : <p>Loading...</p>}
    </div>
  )
}

export default ListReviews