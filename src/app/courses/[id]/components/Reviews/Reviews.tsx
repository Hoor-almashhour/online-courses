"use client";

import { BsStarFill, BsStar, BsReply } from "react-icons/bs";
import { CourseReview } from "@/types";

type ReviewsProps = {
  reviews: CourseReview[];
};

const Reviews = ({ reviews }: ReviewsProps) => {
  if (!reviews || reviews.length === 0) {
    return <p className="text-center text-gray-500">No reviews available.</p>;
  }

  const totalReviews = reviews.length;
  const averageRating = (
    reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews
  ).toFixed(1);

  const getStars = (rating: number) => (
    <div className="flex gap-1 text-yellow-400">
      {[...Array(5)].map((_, index) =>
        index < rating ? <BsStarFill key={index} /> : <BsStar key={index} />
      )}
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Summary Section */}
      <div>
        <h2 className="text-2xl font-semibold">Comments</h2>

        <div className="flex items-center gap-4 mt-4">
          <p className="text-4xl font-bold">{averageRating}</p>
          <div>
            {getStars(Math.round(Number(averageRating)))}
            <p className="text-gray-500 text-sm">
              based on 146,951 {totalReviews.toLocaleString()} ratings
            </p>
          </div>
        </div>

       
        <div className="mt-6 space-y-2 w-full max-w-md">
          {[5, 4, 3, 2, 1].map((star) => {
            const count = reviews.filter((r) => Math.round(r.rating) === star).length;
            const percentage = ((count / totalReviews) * 100).toFixed(0);

            return (
              <div key={star} className="flex items-center gap-3 ">
                <div className="flex gap-1 text-yellow-400 min-w-[80px]">
                  {[...Array(5)].map((_, index) =>
                    index < star ? <BsStarFill key={index} /> : <BsStar key={index} />
                  )}
                </div>
             
                <div className="text-sm text-gray-600 min-w-[30px] text-right">
                  {percentage}%
                </div>

                <div className="w-full bg-gray-200 h-2 rounded">
                  <div
                    className="h-2 bg-yellow-400 rounded"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>

                
              </div>
            );
          })}
        </div>
      </div>

      {reviews.map((review) => (
        <div key={review.id} className="border-b border-gray-200 pb-6 ">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <img
                src={review.avatar || "/images/default-user.png"}
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{review.name}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">{review.date}</p>
          </div>
          
          <p className="text-gray-700 text-sm mt-2">{review.comment}</p>
          <button className="text-sm text-black mt-2 flex gap-1.5">
            <BsReply className="text-red-500" /> Reply
          </button>
        </div>
      ))}

      <div className="flex justify-center gap-2 mt-6">
        <button className="px-3 py-2 rounded-full h-[48px] w-[48px] bg-gray-200 hover:bg-gray-300">&lt;</button>
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`h-[48px] w-[48px] px-3 py-1 rounded-full font-medium border border-gray-300 ${
              page === 1 ? "bg-black text-white" : "bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}
        <button className="px-3 py-1 h-[48px] w-[48px] rounded-full  bg-gray-200 hover:bg-gray-300">&gt;</button>
      </div>
    </div>
  );
};

export default Reviews;
