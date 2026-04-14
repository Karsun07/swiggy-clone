export default function Shimmer() {
  return (
    <div>

  
      <div className="bg-[#171a29] h-[300px] flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-gray-500 border-t-white rounded-full animate-spin mb-4"></div>
        <h2 className="text-white text-xl">
          Looking for great food near you ...
        </h2>
      </div>

    
      <div className="max-w-[80%] mx-auto mt-10">

      
        <div className="flex gap-10">

         
          <div className="w-[250px] space-y-6">
            {Array(6).fill("").map((_, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>

        
          <div className="flex-1">

        
            <div className="h-6 w-64 bg-gray-200 rounded mb-6 animate-pulse"></div>

       
            <div className="grid grid-cols-3 gap-8">
              {Array(6).fill("").map((_, i) => (
                <div key={i}>

           
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

      </div>
    </div>
  );
}