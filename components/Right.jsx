import { useRouter } from 'next/router'
import Link from 'next/link';

function Right() {
    const router = useRouter();
    const route = () => {
        router.push('/diabetes')
    }
    return (
        <div className="flex flex-col h-full w-1/2 bg-blue-800 p-10 justify-between rounded-lg hover:bg-blue-900 transition shadow-2xl">
            <a href="https://en.wikipedia.org/wiki/Diabetes" className="flex flex-col items-start gap-1 border p-3 rounded-md transition hover:bg-blue-500">
                <div className='text-2xl font-bold'>
                    Diabetes
                </div>
                <div className='text-start'> 
                    Diabetes is a chronic condition that affects how the body uses blood sugar (glucose). Glucose is the primary source of energy for the body's cells, and it's regulated by insulin, a hormone produced by the pancreas.Diabetes affects how the body uses glucose, its primary energy source, due to insufficient insulin production or usage.
                </div>
            </a>
            <div className="flex flex-col items-center gap-2">
                <img src="/diabetes.gif" alt="" className='object-scale-down h-20 w-20'/>
                <div className='text-2xl'>
                    Let's check your Diabetic condition
                </div>
                <Link href="" onClick={route} className="flex rounded-md border-2 px-3 py-1 text-xl font-bold justify-center   transition hover:text-green-600 hover:border-green-600">
                    Predict Diabetes
                </Link>
            </div>
            <div className="flex flex-col items-start gap-1">
                <div>
                    How to control Diabetes :
                </div>
                <div className='text-start'>
                    <p>○ Maintain a healthy weight</p>
                    <p>○ Eat a balanced diet with a focus on whole foods and low-glycemic index foods</p>
                    <p>○ Take medications as prescribed by a healthcare provider</p>
                    <p>○ Manage stress through activities such as yoga and meditation</p>
                </div>
            </div>
        </div>
    )
}

export default Right
