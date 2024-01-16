import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleThree(){
const [number, setNumber] = useState(0);

const colors = ["red", "orange", "yellow", "green", "blue", "violet"];

useEffect(() => {
    console.log("changing number value" + colors[number]);
//length = 6. you do 6-1 to get to five. 
    if ( number >= colors.length){
        setNumber(0);
        console.log("changing color value: " + colors[0]);
    }else{
        console.log("changing number values: " + colors[number])
    }

    }, [number])

    return(
        <>
            <Header/>
            <main>
                <h1>Example 3</h1>

                <button 
                    style={{backgroundColor: colors[number]}}
                    onClick={() => setNumber(number + 1)}>
                        Increment Number
                </button>
                <div>
                    {number}
                </div>
            </main>
            <Footer/>
        </>
    )
}