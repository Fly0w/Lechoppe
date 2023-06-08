const ReviewCard = ({ creator, text }) => {
  return (
    <div>
      <p>{creator}</p>
      <p>{text}</p>
    </div>
  )
}

export default ReviewCard