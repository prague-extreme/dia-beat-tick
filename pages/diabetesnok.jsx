import Navbar from "@/components/Navbar"
import Link from "next/link"

function diabetesnok() {

  return (
    <div className="flex flex-col h-full">
        <Navbar />

        <div className="flex justify-center">
            <div className="mt-12 flex flex-col w-2/3 gap-8 p-5 bg-blue-800 rounded-lg shadow-2xl">
                <div className="text-5xl text-red-700">
                    Oh No!! Seems like you might have Diabetes
                </div>
                <div>
                    Living with diabetes can be challenging, but it's important to know that you're not alone. Remember to take good care of yourself by managing your blood sugar levels, eating a healthy and balanced diet, staying physically active, and taking your medication as prescribed. Don't hesitate to reach out to your healthcare team for support and guidance. With the right approach, you can still lead a happy and fulfilling life while managing your diabetes.                </div>
                <div className="flex flex-col border-2 border-red-300 p-5 gap-3 rounded-lg">
                    <p className="text-xl font-extrabold">How you can control Diabetes</p>
                    <p> <span className="font-bold">○ Follow a healthy diet:</span> A diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats can help reduce the risk of heart disease.</p>
                    <p> <span className="font-bold">○ Exercise regularly:</span> Physical activity can help lower blood pressure, improve cholesterol levels, and maintain a healthy weight.</p>
                    <p> <span className="font-bold">○ Maintain a healthy weight:</span> Being overweight or obese increases the risk of heart disease.</p>
                    <p> <span className="font-bold">○ Quit smoking:</span> Smoking damages the blood vessels and increases the risk of heart disease.</p>
                    <p> <span className="font-bold">○ Manage stress:</span> Chronic stress can contribute to high blood pressure and other risk factors for heart disease.</p>
                </div>
                <div className="flex justify-between gap-4">
                    <Link href="/" className="font-bold border-red-300 text-center w-1/4 border-2 rounded-md px-4 py-2    transition hover:text-red-600 hover:border-red-600">
                        Home
                    </Link>
                    <Link href="/heart" className="font-bold border-red-300 text-center w-2/4 border-2 rounded-md px-4 py-2   transition hover:text-red-600 hover:border-red-600">
                        Predict Heart Health 
                    </Link>
                    <Link href="/diabetes" className="font-bold border-red-300 text-center w-1/4 border-2 rounded-md px-4 py-2   transition hover:text-red-600 hover:border-red-600">
                        Check Again
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default diabetesnok
