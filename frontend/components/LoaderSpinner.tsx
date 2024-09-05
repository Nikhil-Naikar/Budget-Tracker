import { Loader } from "lucide-react"

const LoaderSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full py-20">
      <Loader className="animate-spin text-light_brown" size={30}/>
    </div>
  )
}

export default LoaderSpinner;
