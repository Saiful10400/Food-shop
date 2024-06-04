import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import contextProvider from "../../context/appContext";

const Popup = () => {
  const { isModalOpen, setModalOpen } = useContext(contextProvider);

  // modal close handle.
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      className={`w-screen z-50 h-screen  fixed top-0 bg-[#0000008c] left-0 duration-200 delay-200  ${
        isModalOpen ? "flex" : "hidden"
      }  justify-center items-center`}
    >
      <div className="min-w-[800px] min-h-[400px] bg-gray-200 rounded-3xl p-2">
        <div className=" text-end text-black">
          <button onClick={closeModal} className="text-3xl">
            <IoClose />
          </button>
        </div>

        {/* main container */}
        <div className="flex p-3 gap-x-5">
          <div className="w-2/5 flex justify-center items-center">
            <label className="w-[200px] h-[200px]" htmlFor="foodImg">
              <div className="w-full h-full border-2 flex justify-center items-center text-center cursor-pointer flex-col border-black border-dashed">
                <h1 className="text-xs">Drag and Drop Food image</h1>
                <h1 className="text-xs">or</h1>
                <h1 className="underline text-xs">Upload From Device</h1>
              </div>
              <input className="hidden" id="foodImg" type="file" />
            </label>
          </div>




          <form className="w-3/5 flex flex-col justify-center items-start gap-4">
            <h1 className="font-normal">Add new item</h1>
            <label className=" w-full" htmlFor="name">
              <h1 className="text-base font-normal">Item Name</h1>
              <input
                className="w-full focus:outline-none p-2 rounded-lg"
                id="name"
                type="text"
              />
            </label>
            <label className=" w-full" htmlFor="price">
              <h1 className="text-base font-normal">Item Price</h1>
              <input
                className="w-full focus:outline-none p-2 rounded-lg"
                id="price"
                type="number"
              />
            </label>

            <div className="flex w-full">
              <div className=" w-full">
                <h1 className="text-base font-normal">Is this item popular?</h1>

                <div className="flex items-center gap-x-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="popular"
                      id="yes"
                    />
                    <label className="form-check-label" htmlFor="yes">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="popular"
                      id="no"
                    />
                    <label className="form-check-label" htmlFor="no">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className=" w-full">
                <h1 className="text-base font-normal">
                  Is this item Recommended?
                </h1>

                <div className="flex items-center gap-x-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="popular"
                      id="yes"
                    />
                    <label className="form-check-label" htmlFor="yes">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="popular"
                      id="no"
                    />
                    <label className="form-check-label" htmlFor="no">
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn btn-primary w-full">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
