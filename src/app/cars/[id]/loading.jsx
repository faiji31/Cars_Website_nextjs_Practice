export default function Loading() {
    return (
        <div className="max-w-6xl mx-auto p-6 animate-pulse">

            {/* Top Section */}
            <div className="grid md:grid-cols-2 gap-8">

                {/* Image Skeleton */}
                <div className="w-full h-[400px] bg-gray-300 rounded-2xl"></div>

                {/* Info Skeleton */}
                <div className="space-y-4">
                    <div className="h-8 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                    <div className="h-6 bg-gray-300 rounded w-1/4"></div>

                    <div className="space-y-2 mt-4">
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-6">
                        <div className="h-10 bg-gray-300 rounded w-32"></div>
                        <div className="h-10 bg-gray-300 rounded w-32"></div>
                    </div>
                </div>
            </div>

            {/* Video Skeleton */}
            <div className="mt-10">
                <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
                <div className="w-full h-[300px] bg-gray-300 rounded-xl"></div>
            </div>

        </div>
    );
}