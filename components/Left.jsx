import { useRouter } from 'next/router'
import Link from 'next/link';

function Left() {
    const router = useRouter();
    const route = () => {
        return router.push('/heart')
    }
    return (
        <div className="flex flex-col h-full w-1/2 bg-blue-800 p-10 justify-between rounded-lg hover:bg-blue-900 transition shadow-2xl">
            <a href="https://en.wikipedia.org/wiki/Cardiovascular_disease" className="flex flex-col items-start gap-1 border p-3 rounded-md transition hover:bg-blue-500">
               <div className='text-2xl font-bold'> 
                    Heath Health
                </div>
                <div className='text-start'>
                 <p>Heart health is an important aspect of overall health and well-being. The heart is a vital organ that pumps blood throughout the body, providing oxygen and nutrients to the tissues and organs. A healthy heart is important for maintaining good circulation, preventing cardiovascular diseases, and living a long, healthy life.</p>
                </div>
            </a>
            <div className="flex flex-col items-center gap-2 ">
                <img src="/heart.gif" alt="" className='object-scale-down h-20 w-20'/>
                <div className='text-2xl'>
                    Let's get your Heart condition checked
                </div>
                <Link href="" onClick={route} className="flex rounded-md border-2 px-3 py-1 text-xl font-bold justify-center   transition hover:text-green-600 hover:border-green-600">
                    Predict Heart Disease
                </Link>
            </div>
            <div className="flex flex-col items-start gap-1">
                <div>
                    How to keep your Heart Healthy :
                </div>
                <div className='text-start'>
                    <p>○ Eat a balanced diet with plenty of fruits and vegetables</p>
                    <p>○ Stay hydrated by drinking enough water throughout the day</p>
                    <p>○ Exercise regularly to maintain a healthy weight and reduce the risk of diseases</p>
                    <p>○ Get enough sleep each night to promote physical and mental well-being</p>
                </div>
            </div>
        </div>
    )
}

export default Left
