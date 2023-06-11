import { useSearchParams } from "next/navigation"
import moment from "moment/moment";


const ReviewCard = ({ creator, text, date, _id, getItemInfo }) => {
  const searchParams = useSearchParams();
  const itemId = searchParams.get("id");

  const handleDeleteReview = async () => {
    const validation = confirm("Are you sure you want to delete this review ?");
    try {
      if (validation){
      const response = await fetch(`/api/items/${itemId}/reviews/delete`, {
        method: "PATCH",
        body: JSON.stringify({
          reviewId: _id
        })
      })}
    } catch (error) {
      console.log(error)
    }

    getItemInfo();
  }


  return (
    <div className="flex flex-col border-2 border-emerald-400 bg-slate-100 mx-1 p-3 rounded-3xl shadow-lg shadow-teal-200">
      <div className="flex flex-raw justify-between text-center">
        <div className="w-4/5 flex flex-col items-start">
          <p className=" text-gray-500 text-xs">{moment(date).format("MM/DD/YYYY")}</p>
          <p className=" text-lg text-cyan-800 font-bold cursor-pointer" onClick={() => console.log("redirect to user's page")}>{creator}</p>
        </div>  
        <div className="w-1/5">
          <div className="rounded-full bg-red-600 text-white review_del_btn cursor-pointer" onClick={() => handleDeleteReview()}>X</div>
        </div>
      </div>
      <p className="w-44 overflow-y-auto text-sm">{text}</p>
      
    </div>
  )
}

export default ReviewCard