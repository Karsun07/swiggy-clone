export default function Shimmer() {
  return (
    <div className="max-w-[80%] mx-auto mt-10">

      {/* Section 1 (Mind / categories) */}
      <div className="flex gap-6 overflow-hidden mb-10">
        {Array(8).fill("").map((_, i) => (
          <div
            key={i}
            className="w-[100px] h-[100px] bg-gray-200 rounded-xl animate-pulse"
          ></div>
        ))}
      </div>

      {/* Section 2 (horizontal cards) */}
      <div className="mb-12">
        <div className="h-6 w-64 bg-gray-200 mb-6 rounded animate-pulse"></div>

        <div className="flex gap-6 overflow-hidden">
          {Array(6).fill("").map((_, i) => (
            <div key={i} className="w-[320px] flex-shrink-0">
              
              {/* Image */}
              <div className="w-full h-[200px] bg-gray-200 rounded-2xl animate-pulse"></div>

              {/* Text */}
              <div className="mt-3 space-y-2">
                <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 (grid cards like online section) */}
      <div>
        <div className="h-6 w-80 bg-gray-200 mb-6 rounded animate-pulse"></div>

        <div className="grid grid-cols-4 gap-8">
          {Array(8).fill("").map((_, i) => (
            <div key={i}>
              
              {/* Image */}
              <div className="w-full h-[180px] bg-gray-200 rounded-2xl animate-pulse"></div>

              {/* Text */}
              <div className="mt-3 space-y-2">
                <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}