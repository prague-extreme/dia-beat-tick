import Navbar from "@/components/Navbar"
import Link from "next/link"

function heartnok() {

  return (
    <div className="flex flex-col h-full">
        <Navbar />
        <div className="flex justify-center">
            <div className="mt-12 flex flex-col w-2/3  gap-8 p-5 rounded-lg bg-blue-800 shadow-2xl">
                <div className="text-5xl text-red-700 font-black">
                    Oh No!! Seems like your Heart is not in good Condition
                </div>
                <div>
                    It can be tough to hear that you're not in the best shape when it comes to your heart health. However, it's important to remember that there are steps you can take to improve your condition and live a healthier life. Talk to your healthcare provider about creating a personalized plan that includes healthy eating habits, regular physical activity, managing stress, quitting smoking, and taking medications. Remember that small changes over time can lead to big improvements in your heart health.             </div>
                <div className="flex flex-col border-2 p-5 gap-3 rounded-lg border-red-300 ">
                    <p className="text-xl font-extrabold">How you can improve Heart Health</p>
                    <p> <span className="font-bold">○ Follow a healthy diet:</span> A diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats can help reduce the risk of heart disease.</p>
                    <p> <span className="font-bold">○ Exercise regularly:</span> Physical activity can help lower blood pressure, improve cholesterol levels, and maintain a healthy weight.</p>
                    <p> <span className="font-bold">○ Maintain a healthy weight:</span> Being overweight or obese increases the risk of heart disease.</p>
                    <p> <span className="font-bold">○ Quit smoking:</span> Smoking damages the blood vessels and increases the risk of heart disease.</p>
                    <p> <span className="font-bold">○ Manage stress:</span> Chronic stress can contribute to high blood pressure and other risk factors for heart disease.</p>
                </div>
                <div className="flex justify-between gap-4">
                    <Link href="/" className="text-center w-1/4 border-2 font-bold border-red-300 rounded-md px-4 py-2   transition hover:text-red-600 hover:border-red-600">
                        Home
                    </Link>
                    <Link href="/diabetes" className="text-center w-2/4 border-2 font-bold border-red-300 rounded-md px-4 py-2   transition hover:text-red-600 hover:border-red-600">
                        Predict Diabetes
                    </Link>
                    <Link href="/heart" className="text-center w-1/4 border-2 font-bold border-red-300 rounded-md px-4 py-2   transition hover:text-red-600 hover:border-red-600">
                        Check Again
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default heartnok
