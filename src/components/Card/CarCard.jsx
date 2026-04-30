import Image from "next/image";

const CarCard = ({ car }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

            <div className="relative w-full h-48">
                <img
                    src={car.carImg}
                    alt={car.title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-4 space-y-2">
                <h2 className="text-lg font-bold">{car.title}</h2>

                <p className="text-sm text-gray-500">{car.category}</p>

                <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold text-green-600">
                        ${car.price}
                    </span>

                    <button className="bg-black text-white px-3 py-1 rounded-lg text-sm hover:bg-gray-800">
                        Details
                    </button>
                    <button className="bg-black text-white px-3 py-1 rounded-lg text-sm hover:bg-gray-800">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarCard;  