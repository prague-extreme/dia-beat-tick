import Diabetesform from "@/components/Diabetesform"
import Navbar from "@/components/Navbar"
import React, { useState } from "react"

function heart() {
    const [diabetesdata, setDiabetesdata] = useState({
        data: {
            Pregnancies: null,
            Glucose: null,
            BloodPressure: null,
            SkinThickness: null,
            Insulin: null,
            BMI: null,
            DiabetesPedigreeFunction: null,
            Age: null,
        }
        
    })
    return (
        <div className="flex flex-col h-full ">
            <Navbar />
            <Diabetesform diabetesdata={diabetesdata} setDiabetesdata={setDiabetesdata} />
        </div>
    )
}

export default heart
