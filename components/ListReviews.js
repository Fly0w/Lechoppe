import ReviewCard from "./ReviewCard"

const ListReviews = ({ reviews }) => {
  return (
    <div className="border border-cyan-700 w-screen h-44">
      {reviews
      ? reviews.map(() => 
        <ReviewCard/>)
      : <p>Loading...</p>}
    </div>
  )
}

export default ListReviews