export const PageLoad = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-white/25">
        <div className="flex flex-col items-center space-y-6">
          <div className="w-16 h-16 border-4 border-blue-600 border-solid rounded-full animate-spin border-t-transparent" />
          <span className="text-center text-gray-700">loading please wait ....</span>
        </div>
      </div>
    );
  };