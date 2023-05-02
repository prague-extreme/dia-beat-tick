import Heartform from "@/components/Heartform"
import Navbar from "@/components/Navbar"
import React, { useState } from "react"

function heart() {
    const [heartdata, setHeartdata] = useState({
        data : {
            age : null,
            sex : null,
            cp : null,
            trestbps : null,
            chol : null,
            fbs : null ,
            restecg :  null,
            thalach : null,
            exang : null ,
            oldpeak : null ,
            slope : null ,
            ca : null ,
            thal : null ,
        }
    })
    return (
        <div className="flex flex-col h-full">
            <Navbar />
            <Heartform heartdata={heartdata} setHeartdata={setHeartdata} />
        </div>
    )
}

export default heart
