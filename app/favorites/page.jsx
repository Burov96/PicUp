import Nav from "../components/Nav"
import PhotoGrid from "../components/PhotoGrid"
// import SignOut from "../components/SignOut"

function Favorites() {
  return (
    <main className="min-h-screen bg-sinyo text-white relative p-10">
<Nav/>
        <div className=" container mx-auto px-4 py-4">
            <div className="flex flex-col items-center mb-6">
                <h1 className=" text-4xl font-bold mb-4">
                    Your favorite photos
                </h1>
            </div>
<PhotoGrid favorites={true}/>
        </div>
        <div className="absolute top-4 right-4">
        {/* <SignOut /> */}
        </div>
    </main>
  )
}

export default Favorites