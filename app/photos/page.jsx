import Image from "next/image"
import logo from "../images/Designer.png"
import Nav from "../components/Nav"
import PhotoGrid from "../components/PhotoGrid"
import PhotoUploader from "../components/PhotoUploader"
import SignOut from "../components/SignOut"

function Photos() {
  return (
    <main className="min-h-screen bg-sinyo text-white relative p-10">
<Nav/>
        <div className=" container mx-auto px-4 py-4">
            <div className="flex flex-col items-center mb-6">
                <h1 className=" text-4xl font-bold mb-4">
                    Photos
                </h1>
                <Image 
                src={logo}
                width={300}
                height={300}
                alt="Logo of PicUp"
                />
<PhotoUploader />
            </div>
<PhotoGrid/>
        </div>
        <div className="absolute top-4 right-4">
        <SignOut />
        </div>
    </main>
  )
}

export default Photos