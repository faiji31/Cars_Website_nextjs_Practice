const ReviewCard = ({ review }) => {
    return (
        <div className="bg-green-300 p-4 rounded-xl shadow-md border hover:shadow-lg transition">

            {/* Top */}
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">{review.author}</h3>
                <span className="text-sm text-gray-400">{review.date}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-2">
                {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>
                        {index < review.rating ? "⭐" : "☆"}
                    </span>
                ))}
                <span className="ml-2 text-sm text-gray-500">
                    ({review.rating}/5)
                </span>
            </div>

            {/* Review Text */}
            <p className="text-gray-600 text-sm leading-relaxed">
                {review.review}
            </p>

        </div>
    );
};

export default ReviewCard;