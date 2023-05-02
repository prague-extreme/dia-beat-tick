import Navbar from "@/components/Navbar"
import Link from "next/link"

function heartok() {

  return (
    <div className="flex flex-col h-full ">
        <Navbar />

        <div className="flex justify-center">
            <div className="mt-12 flex flex-col w-2/3  gap-8 p-5rounded-lg bg-blue-800 shadow-2xl">
                <div className="text-5xl text-green-400 font-black">
                    Oh Greatt!! Seems like your Heart is in good Condition
                </div>
                <div>
                Congratulations on taking care of your heart health! By making conscious choices to eat a healthy diet, exercise regularly, manage stress, and get enough sleep, you are giving your heart the love and attention it deserves. Keep up the good work and enjoy the many benefits of a healthy heart, including increased energy, improved mood, and reduced risk of heart disease.
                </div>
                <div className="flex flex-col border-2 p-5 gap-3 rounded-lg border-green-300 ">
                    <p className="text-xl font-extrabold">How you can maintain good Heart Health</p>
                    <p> <span className="font-bold">○ Follow a healthy diet:</span> A diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats can help reduce the risk of heart disease.</p>
                    <p> <span className="font-bold">○ Exercise regularly:</span> Physical activity can help lower blood pressure, improve cholesterol levels, and maintain a healthy weight.</p>
                    <p> <span className="font-bold">○ Maintain a healthy weight:</span> Being overweight or obese increases the risk of heart disease.</p>
                    <p> <span className="font-bold">○ Quit smoking:</span> Smoking damages the blood vessels and increases the risk of heart disease.</p>
                    <p> <span className="font-bold">○ Manage stress:</span> Chronic stress can contribute to high blood pressure and other risk factors for heart disease.</p>
                </div>
                <div className="flex justify-between gap-4">
                    <Link href="/" className="border-green-300 font-bold text-center w-1/4 border-2 rounded-md px-4 py-2   transition hover:text-green-600 hover:border-green-600">
                        Home
                    </Link>
                    <Link href="/diabetes" className="border-green-300 font-bold text-center w-2/4 border-2 rounded-md px-4 py-2   transition hover:text-green-600 hover:border-green-600">
                        Predict Diabetes
                    </Link>
                    <Link href="/heart" className="border-green-300 font-bold text-center w-1/4 border-2 rounded-md px-4 py-2   transition hover:text-green-600 hover:border-green-600">
                        Check Again
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default heartok
