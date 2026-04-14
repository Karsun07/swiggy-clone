import Onlinecard from "./Onlinecard";

export default function Restaurantonline({ onlineData }) {
  return (
    <div className="max-w-[80%] mx-auto mb-20 ">
      <h1 className="text-2xl font-bold mt-20">
        Restaurants with online food delivery in Delhi
      </h1>

      {/* GRID (not scroll) */}
      <div className="grid grid-cols-4 gap-8 mt-6">
        {onlineData.map((value, index) => (
          <Onlinecard
            key={`${value?.info?.id}-${index}`}
            value={value}
          />
        ))}
      </div>
    </div>
  );
}