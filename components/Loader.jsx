
function Loader() {
    return (
        <div className="flex flex-col border-red-900 border-2 items-center justify-center h-screen ">
            <div className="flex flex-col text-blue-600 justify-center  items-center">
                <img src="/load.gif" alt="" className="object-scale-down h-28 w-28 pr-10" />
                <div className="font-bold text-1xl">
                    Sorry for the inconvenience
                </div>
                <div className="font-bold text-1xl">
                    The API needs time to wake up
                </div>
                <div className="font-semibold text-md">
                    {`(It's Free 😬)`}
                </div>
            </div>
        </div>
    )
}

export default Loader
