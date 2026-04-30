import Image from "next/image";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const CarDetailsPage = async ({ params }) => {
    const { id } = params;

    // 🔥 simulate loading so loading.jsx works
    await delay(1500);

    // 🔥 static data (replace with API later)
    const car = {
        id: 1003,
        title: "Tesla Model 3",
        carImg: "https://images.unsplash.com/photo-1549924231-f129b911e442",
        price: 42000,
        video: "https://www.youtube.com/watch?v=t0d0u5uYw1M",
        category: "Electric",
        brand: "Tesla",
        fuel: "Electric",
        transmission: "Automatic",
        topSpeed: "261 km/h",
    };

    return (
        <div className="max-w-6xl mx-auto p-6">

            {/* Top Section */}
            <div className="grid md:grid-cols-2 gap-8">

                {/* Image */}
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                    <img
                        src={car.carImg}
                        alt={car.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Info */}
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">{car.title}</h1>

                    <p className="text-gray-500">{car.category}</p>

                    <p className="text-2xl text-green-600 font-semibold">
                        ${car.price}
                    </p>

                    <div className="space-y-2 text-sm">
                        <p><strong>Brand:</strong> {car.brand}</p>
                        <p><strong>Fuel:</strong> {car.fuel}</p>
                        <p><strong>Transmission:</strong> {car.transmission}</p>
                        <p><strong>Top Speed:</strong> {car.topSpeed}</p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-4">
                        <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800">
                            Buy Now
                        </button>

                        <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* Video */}
            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">Car Overview</h2>

                <div className="aspect-video">
                    <iframe
                        className="w-full h-full rounded-xl"
                        src={car.video.replace("watch?v=", "embed/")}
                        title="Car Video"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default CarDetailsPage;