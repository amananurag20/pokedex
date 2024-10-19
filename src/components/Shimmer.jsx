const Shimmer = () => (
    <div className="rounded-lg shadow-lg p-8 max-w-sm mx-auto bg-gray-200 animate-pulse">
      <div className="h-48 w-48 bg-gray-300 rounded-full mx-auto mb-6" />
      <div className="h-6 bg-gray-300 rounded mb-4" />
      <div className="flex justify-center">
        <div className="h-6 bg-gray-300 rounded-full w-24 mx-1" />
        <div className="h-6 bg-gray-300 rounded-full w-24 mx-1" />
      </div>
    </div>
  );

  export default Shimmer;