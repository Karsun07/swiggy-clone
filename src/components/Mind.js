import Mindcard from "./Mindcard";
export default function Mind({ mindData }) {
  return (
    <div className="max-w-[80%] mx-auto">
      <h1 className="text-2xl font-bold mt-20 mb-5">
        What's on your mind?
      </h1>

      <div className="flex overflow-x-auto gap-6 scrollbar-hide">
        {mindData?.map((value) => (
          <div key={value.id} className="flex-shrink-0">
            <Mindcard value={value} />
          </div>
        ))}
      </div>
    </div>
  );
}