import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';

function Diabetesform({ diabetesdata, setDiabetesdata }) {
    const router = useRouter();

    // useEffect(() => {
    //     console.log(diabetesdata)
    // }, [diabetesdata]);

    const predict = async () => {
        const response = await fetch('https://diabetes-nhpg.onrender.com/diabetes_prediction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(diabetesdata.data)
        })
        const data = await response.json()

        if (data === "The person is not Diabetic") {
            router.push('/diabetesok')
        }
        else {
            router.push('/diabetesnok')
        }

        //console.log(data)
    }
    const [show, setShow] = useState(false)
    const changeValue = (code, e) => {
        setDiabetesdata({
            data: {
                ...diabetesdata.data,
                [code]: e.target.value // replace with new code value
            }
        });
        //console.log(diabetesdata.data);

        let count = 0;
        for (let key in diabetesdata.data) {
            if (diabetesdata.data[key] === null) count++;
            //console.log(key + ": " + diabetesdata.data[key]);
        }
        if (count === 1) setShow(true)

        //console.log(count)
    }

    return (
        <div className='flex justify-center my-10'>
            <form className="w-4/6 flex flex-col justify-center items-center p-8 gap-10 rounded-lg bg-blue-800 shadow-2xl	" action="">
                <div className='flex text-3xl font-extrabold items-center'>
                    <img src="/health.png" alt="" className='object-scale-down h-20 w-20'/>
                    <h1>Fill Details</h1>
                </div>
                <div className='flex gap-16'>
                    <div className='flex flex-col gap-10'>
                        <div className="gap-2">
                            <label className="text-xl font-bold" htmlFor="age">Pregnancies : </label>
                            <input onChange={(e) => changeValue('Pregnancies', e)} className="px-2 bg-transparent border rounded-md w-32" type="text" name="ha" id="age" placeholder="No. of Pregnancies" />
                        </div>
                        <div className="gap-2">
                            <label className="text-xl font-bold" htmlFor="age">Skin Thickness : </label>
                            <input onChange={(e) => changeValue('SkinThickness', e)} className="px-2 bg-transparent border rounded-md w-32" type="text" name="ha" id="age" placeholder="in mm" />
                        </div>
                        <div className="gap-2">
                            <label className="text-xl font-bold" htmlFor="age">Pedigree Func. : </label>
                            <input onChange={(e) => changeValue('DiabetesPedigreeFunction', e)} className="px-2 bg-transparent border rounded-md w-32" type="text" name="ha" id="age" placeholder="predegree" />
                        </div>
                        <div className="gap-2">
                            <label className="text-xl font-bold" htmlFor="age">Glucose : </label>
                            <input onChange={(e) => changeValue('Glucose', e)} className="px-2 bg-transparent border rounded-md w-32" type="text" name="ha" id="age" placeholder="tolerance test" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div className="gap-2">
                            <label className="text-xl font-bold" htmlFor="age">Insulin : </label>
                            <input onChange={(e) => changeValue('Insulin', e)} className="px-2 bg-transparent border rounded-md w-32" type="text" name="ha" id="age" placeholder="mu U/m" />
                        </div>
                        <div className="gap-2">
                            <label className="text-xl font-bold" htmlFor="age">Age : </label>
                            <input onChange={(e) => changeValue('Age', e)} className="px-2 bg-transparent border rounded-md w-32" type="text" name="ha" id="age" placeholder="Your age" />
                        </div>
                        <div className="gap-2">
                            <label className="text-xl font-bold" htmlFor="age">Blood Pressure : </label>
                            <input onChange={(e) => changeValue('BloodPressure', e)} className="px-2 bg-transparent border rounded-md w-32" type="text" name="ha" id="age" placeholder="mm Hg" />
                        </div>
                        <div className="gap-2">
                            <label className="text-xl font-bold" htmlFor="age">BMI : </label>
                            <input onChange={(e) => changeValue('BMI', e)} className="px-2 bg-transparent border rounded-md w-32" type="text" name="ha" id="age" placeholder="Your BMI" />
                        </div>
                    </div>
                </div>

                {show ? <div onClick={predict} className="rounded-md border-2 px-3 py-1 text-xl font-bold   transition hover:text-green-600 hover:border-green-600">
                    Predict Diabetes Condition
                </div> : <div className='text-red-600 font-bold '>
                    Please fill all the details
                </div>}


            </form>
        </div>
    )
}

export default Diabetesform
