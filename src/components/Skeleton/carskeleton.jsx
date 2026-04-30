const CarSkeleton = () => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">

            <div className="w-full h-48 bg-gray-300"></div>

            <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2"></div>

                <div className="flex justify-between items-center">
                    <div className="h-5 bg-gray-300 rounded w-1/4"></div>
                    <div className="h-8 bg-gray-300 rounded w-16"></div>
                </div>
            </div>
        </div>
    );
};

export default CarSkeleton;