import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';

function Heartform({ heartdata, setHeartdata }) {
    const router = useRouter();
    // useEffect(() => {
    //     console.log(heartdata)
    // }, [heartdata]);

    const predict = async (e) => {
        e.preventDefault()
        const response = await fetch('https://heart-i5bb.onrender.com/heart_prediction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(heartdata.data)
        })
        const data = await response.json()
        //console.log(data)
        if (data === 'The person has Heart Disease') {
            return router.push('/heartnok')
        }
        else {
            return router.push('/heartok')
        }
        
    }
    const [name, setName] = useState('')
    const [show, setShow] = useState(false)
    const changeValue = (code, e) => {

        setHeartdata({
            data: {
                ...heartdata.data,
                [code]: e.target.value // replace with new code value
            }
        });

        let count = 0;
        for (let key in heartdata.data) {
            if (heartdata.data[key] === null) count++;
            //console.log(key + ": " + heartdata.data[key]);
        }
        if (count === 1) setShow(true)

        //console.log(count)
    }

    return (

        <div className='flex justify-center my-10 '>
            <form className="w-4/6 flex flex-col justify-center items-center p-8 gap-10 rounded-lg bg-blue-800 shadow-2xl	" action="">
                <div className='flex text-3xl font-extrabold items-center'>
                    <img src="/health.png" alt="" className='object-scale-down h-20 w-20'/>
                    <h1>Fill Details</h1>
                </div>

                <div className='flex gap-16'>
                    <div className='flex flex-col gap-10'>
                        <div className="gap-2">
                            <label className="text-xl font-semibold" htmlFor="age">Name : </label>
                            <input onChange={(e) => { setName(e.target.value) }} className="px-2 bg-transparent border rounded-md w-32" type="text" name="ha" id="age" placeholder="Your Name" />
                        </div>
                        <div className="gap-2">
                            <label className="text-xl font-semibold" htmlFor="cars">Chest Pain : </label>
                            <select onChange={(e) => changeValue('cp', e)} className="px-2 bg-transparent border rounded-md w-32" name="cars" id="cars" form="carform" required>
                                <option value="" defaultValue>Select an option</option>
                                <option value="0">Typical angina</option>
                                <option value="1">Atypical angina </option>
                                <option value="2">Non-anginal pain</option>
                                <option value="3">Asymptomatic</option>
                            </select>
                        </div>
                        <div className="flex gap-2">
                            <label className="text-xl font-semibold" htmlFor="">Fasting Blood Sugar : </label>
                            <select onChange={(e) => changeValue('fbs', e)} className="px-2 bg-transparent border rounded-md w-32" name="" id="" form="" required>
                                <option value="" defaultValue>Select an option</option>
                                <option value="0">{'<'} 120 mg/dl</option>
                                <option value="1">{'>'} 120 mg/dl</option>
                            </select>
                        </div>
                        <div className="flex gap-2">
                            <label className="text-xl font-semibold" htmlFor="">Exercise Induced Angina : </label>
                            <select onChange={(e) => changeValue('exang', e)} className="px-2 bg-transparent border rounded-md w-32" name="" id="" form="" required>
                                <option value="" defaultValue>Select an option</option>
                                <option value="0">No</option>
                                <option value="1">Yes</option>
                            </select>
                        </div>
                        <div className="flex gap-2">
                            <label className="text-xl font-semibold" htmlFor="">Major Vessels : </label>
                            <select onChange={(e) => changeValue('ca', e)} className="px-2 bg-transparent border rounded-md w-32" name="" id="" form="" required>
                                <option value="" defaultValue>Select an option</option>
                                <option value="0">Colour 1</option>
                                <option value="1">Colour 2</option>
                                <option value="2">Colour 3</option>
                            </select>
                        </div>
                        <div className="gap-2">
                            <label className="text-xl font-semibold" htmlFor="age">Age : </label>
                            <input onChange={(e) => changeValue('age', e)} className="px-2 bg-transparent border rounded-md w-32" type="number" name="ha" id="age" placeholder="Your Age" required />
                        </div>
                        <div className="flex gap-2">
                            <label className="text-xl font-semibold" htmlFor="rbp">Resting Blood Pressure : </label>
                            <input onChange={(e) => changeValue('trestbps', e)} className="px-2 bg-transparent border rounded-md w-32" type="number" placeholder="in mmHg" required />
                        </div>
                    </div>

                    <div className='flex flex-col gap-10'>
                        <div className="flex gap-2">
                            <label className="text-xl font-semibold" htmlFor="">Resting Elec. Results : </label>
                            <select onChange={(e) => changeValue('restecg', e)} className="px-2 bg-transparent border rounded-md w-32" name="" id="" form="" required>
                                <option value="" defaultValue>Select an option</option>
                                <option value="0">Normal</option>
                                <option value="1">ST-T wave abnormality</option>
                                <option value="2">Left ventricular hypertrophy</option>
                            </select>
                        </div>
                        <div className="flex gap-2">
                            <label className="text-xl font-semibold" htmlFor="">ST Depression : </label>
                            <input onChange={(e) => changeValue('oldpeak', e)} className="px-2 bg-transparent border rounded-md w-32" type="number" placeholder="0.00" required step={0.1} />
                        </div>
                        <div className="flex gap-2">
                            <label className="text-xl font-semibold" htmlFor="">Thal : </label>
                            <select onChange={(e) => changeValue('thal', e)} className="px-2 bg-transparent border rounded-md w-32" name="" id="" form="" required>
                                <option value="" defaultValue>Select an option</option>
                                <option value="0">Normal</option>
                                <option value="1">Fixed defect</option>
                                <option value="2">Reversible defect</option>
                            </select>
                        </div>
                        <div className="gap-2">
                            <label className="text-xl font-semibold" htmlFor="cars">Sex : </label>
                            <select onChange={(e) => changeValue('sex', e)} className="px-2 bg-transparent border rounded-md w-32" name="cars" id="cars" form="carform" required>
                                <option value="" defaultValue>Select an option</option>
                                <option value="1">Male</option>
                                <option value="0">Female</option>
                            </select>
                        </div>
                        <div className="flex gap-2">
                            <label className="text-xl font-semibold" htmlFor="">Serum Cholestoral : </label>
                            <input onChange={(e) => changeValue('chol', e)} className="px-2 bg-transparent border rounded-md w-32" type="number" placeholder="in mg/dl" required />
                        </div>
                        <div className="flex gap-2">
                            <label className="text-xl font-semibold" htmlFor="">Max Heart rate : </label>
                            <input onChange={(e) => changeValue('thalach', e)} className="px-2 bg-transparent border rounded-md w-32" type="number" name="" id="" placeholder="per min" required />
                        </div>
                        <div className="flex gap-2">
                            <label className="text-xl font-semibold" htmlFor="">ST Segment : </label>
                            <select onChange={(e) => changeValue('slope', e)} className="px-2 bg-transparent border rounded-md w-32" name="slope" id="" form="" required>
                                <option value="" defaultValue>Select an option</option>
                                <option value="0">Upsloping</option>
                                <option value="1">Flat</option>
                                <option value="2">Downsloping</option>
                            </select>
                        </div>
                        
                    </div>
                </div>
                {show ? <button onClick={predict} className="flex rounded-md border-2 px-3 py-1 text-xl font-bold justify-center   transition hover:text-green-600 hover:border-green-600">
                    Predict Heart Condition
                </button> : <div className='text-red-600 font-bold '>
                    Please fill all the details
                </div>}
                
            </form>
        </div>
    )
}

export default Heartform
