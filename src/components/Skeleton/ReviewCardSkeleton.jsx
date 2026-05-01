const ReviewCardSkeleton = () => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-md border animate-pulse">

            {/* Top */}
            <div className="flex justify-between items-center mb-2">
                <div className="h-5 w-32 bg-gray-300 rounded"></div>
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-2 space-x-1">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="h-4 w-4 bg-gray-300 rounded"></div>
                ))}
                <div className="h-4 w-10 bg-gray-300 rounded ml-2"></div>
            </div>

            {/* Review Text */}
            <div className="space-y-2">
                <div className="h-3 bg-gray-300 rounded w-full"></div>
                <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                <div className="h-3 bg-gray-300 rounded w-2/3"></div>
            </div>

        </div>
    );
};

export default ReviewCardSkeleton;