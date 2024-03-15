const Loadingdata = () =>{

  return (
      <>
          <div className="flex justify-center  items-center h-screen">
              <div className="relative inline-flex">
                  <div className="w-8 h-8 bg-[#4F46E5] rounded-full"></div>
                  <div className="w-8 h-8 bg-[#4F46E5] rounded-full absolute top-0 left-0 animate-ping"></div>
                  <div className="w-8 h-8 bg-[#4F46E5] rounded-full absolute top-0 left-0 animate-pulse"></div>
              </div>
          </div>
      </>
  )
}

export default Loadingdata