import {  useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import contextProvider from "../../context/appContext";
import {useDropzone} from 'react-dropzone'
import uploadlogo from "../../../public/images/uploadlogo.png"
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import Swal from "sweetalert2";
const Popup = () => {
  const { isModalOpen, setModalOpen } = useContext(contextProvider);

  // modal close handle.
  const closeModal = () => {
    setModalOpen(false);
  };

//   image submit handle.
const[imgReqError,setimgError]=useState(false)
  const[binariImg,setBinariImg]=useState(null)
  const{getRootProps,getInputProps,acceptedFiles,isDragActive}=useDropzone({ accept: {
    'image/png': ['.png',".jpeg",".jpg"],
    
  }})

const selectedfiles=acceptedFiles[0]
if(selectedfiles){
    const reader=new FileReader()
    reader.onload=()=>{
        setBinariImg(reader.result)
        setimgError(false)
    }
    reader.readAsDataURL(selectedfiles)
}


// form submit handle .validation also included.
const schema=yup.object().shape({
    name:yup.string().required("Product name is required!"),
    price:yup.number("Product price is required!").typeError("Product price must be a number type!").positive("Product price must be positive!").required("Product price is required!"),
    popular:yup.string().required("Specify product popularity!"),
    recommended:yup.string().required("Specify recommendation quality!")

})
const { register, handleSubmit,formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

const formSubmitHandle=(data)=>{
   console.log(data)
   if(!binariImg){
    setimgError(true)
   } else if(binariImg&&data){
    Swal.fire("Added!", "Product Added Successfully.", "success");
   }

}


  return (
    <div
      className={`w-screen z-50 h-screen  fixed top-0 bg-[#0000008c] left-0 duration-200 delay-200  ${
        isModalOpen ? "flex" : "hidden"
      }  justify-center items-center`}
    >
      <div className="lg:min-w-[850px] lg:min-h-[400px] bg-gray-200 rounded-3xl p-2">
        <div className=" text-end text-black">
          <button onClick={closeModal} className="text-3xl">
            <IoClose />
          </button>
        </div>

        {/* main container */}
        <h1 className="font-normal text-center lg:hidden block">Add new item</h1>
        <div className="flex lg:flex-row flex-col p-3 gap-x-3" >
          <div className="lg:w-2/5 flex flex-col gap-2 justify-center items-center">
            <div {...getRootProps()} className={`w-[200px] h-[200px] ${imgReqError?"border-red-500":"border-black"}  rounded-xl border-dashed border-2`} >
              


              {
                isDragActive?<div className="flex h-full justify-center items-center "><img className="w-[70%]" src={uploadlogo} alt="upload logo" /></div>:binariImg?<img className="w-full h-full object-cover" src={binariImg} />:<div className="w-full h-full  flex justify-center items-center text-center cursor-pointer flex-col ">
                <h1 className="text-xs">Drag and Drop Food image</h1>
                <h1 className="text-xs">or</h1>
                <h1 className="underline text-xs">Upload From Device</h1>
                <h1 className="text-xs text-gray-500">(only accept png, jpg, jpeg)</h1>
              </div>
              }


              <input {...getInputProps()} className="hidden"  type="file"  />



            </div>
            <p className={`${imgReqError?"block":"hidden"} text-red-500`}>product image is required!</p>
          </div>




          <form onSubmit={handleSubmit(formSubmitHandle)} className="lg:w-3/5 flex flex-col justify-center items-start gap-3">
            <h1 className="font-normal hidden lg:block">Add new item</h1>
            <label className=" w-full" htmlFor="name">
              <h1 className="text-base font-bold">Item Name</h1>
              <input {...register("name",{required:true})}
                className="w-full focus:outline-none p-2 rounded-lg"
                id="name"
                type="text"
              />
              <p className={`min-h-8  ${errors?.name?.message?"opacity-100 text-red-500":"opacity-0"}`}>{errors?.name?.message}</p>
            </label>
            <label className=" w-full" htmlFor="price">
              <h1 className="text-base font-bold">Item Price</h1>
              <input {...register("price",{required:true})}
                className="w-full focus:outline-none p-2 rounded-lg"
                id="price"
                type="number"
              />
              <p className={`min-h-8  ${errors?.price?.message?"opacity-100 text-red-500":"opacity-0"}`}>{errors?.price?.message}</p>
            </label>

            <div className="flex w-full">
              <div className=" w-full">
                <h1 className="text-base font-bold">Is this item popular?</h1>

                <div className="flex items-center gap-x-3">
                  <div className="form-check">
                    <input {...register("popular",{required:true})}
                      className="form-check-input"
                      type="radio"
                      value={true}
                      id="popyes"
                    />
                    <label className="form-check-label" htmlFor="popyes">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      {...register("popular",{required:true})}
                      id="popno"
                      value={false}
                    />
                    <label className="form-check-label" htmlFor="popno">
                      No
                    </label>
                  </div>
                </div>
                <p className={`min-h-8  ${errors?.popular?.message?"opacity-100 text-red-500":"opacity-0"}`}>{errors?.popular?.message}</p>
              </div>
              <div className=" w-full">
                <h1 className="text-base font-bold">
                  Is this item Recommended?
                </h1>

                <div className="flex items-center gap-x-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      {...register("recommended",{required:true})}
                      id="reqyes"
                      value={true}
                    />
                    <label className="form-check-label" htmlFor="reqyes">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      {...register("recommended",{required:true})}
                      id="reqno"
                      value={false}
                    />
                    <label className="form-check-label" htmlFor="reqno">
                      No
                    </label>
                  </div>
                </div>
                <p className={`min-h-8  ${errors?.recommended?.message?"opacity-100 text-red-500":"opacity-0"}`}>{errors?.recommended?.message}</p>
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
