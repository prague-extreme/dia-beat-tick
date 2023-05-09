import Navbar from "@/components/Navbar"
import Link from "next/link"

function diabetesok() {

  return (
    <div className="flex flex-col h-full ">
        <Navbar />

        <div className="flex justify-center">
            <div className="mt-12 flex flex-col w-2/3 gap-8 p-5 rounded-lg bg-blue-800 shadow-2xl">
                <div className="text-5xl text-green-500">
                    Oh Great!! Seems like you don't have Diabetes
                </div>
                <div>
                Maintaining a healthy weight through regular exercise and a balanced diet is crucial. Incorporating whole foods such as fruits, vegetables, and whole grains into your diet can help regulate blood sugar levels and reduce the risk of developing diabetes. Additionally, reducing your intake of processed foods and sugary drinks can have a positive impact on your overall health. 
                </div>
                <div className="flex flex-col border-2 p-5 gap-3 rounded-lg transition ">
                    <p className="text-xl font-extrabold">How you can prevent Diabetes</p>
                    <p> <span className="font-bold">○ Follow a healthy diet:</span> A diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats can help reduce the risk of heart disease.</p>
                    <p> <span className="font-bold">○ Exercise regularly:</span> Physical activity can help lower blood pressure, improve cholesterol levels, and maintain a healthy weight.</p>
                    <p> <span className="font-bold">○ Maintain a healthy weight:</span> Being overweight or obese increases the risk of heart disease.</p>
                    <p> <span className="font-bold">○ Quit smoking:</span> Smoking damages the blood vessels and increases the risk of heart disease.</p>
                    <p> <span className="font-bold">○ Manage stress:</span> Chronic stress can contribute to high blood pressure and other risk factors for heart disease.</p>
                </div>
                <div className="flex justify-between gap-4">
                    <Link href="/" className="font-bold text-center w-1/4 border-2 rounded-md px-4 py-2 border-green-300   transition hover:text-green-600 hover:border-green-600">
                        Home
                    </Link>
                    <Link href="/heart" className="font-bold text-center w-2/4 border-2 rounded-md px-4 py-2 border-green-300   transition hover:text-green-600 hover:border-green-600">
                        Predict Heart Health 
                    </Link>
                    <Link href="/diabetes" className="font-bold text-center w-1/4 border-2 rounded-md px-4 py-2 border-green-300   transition hover:text-green-600 hover:border-green-600">
                        Check Again
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default diabetesok
