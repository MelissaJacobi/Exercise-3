import { useEffect, useState } from "react"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ExampleFive(){
    
        const [number, setNumber] = useState(0);
    
            useEffect(() => {

                const interval = setInterval(() => {
                    setNumber(number + 1);},1000);

                    return() => clearInterval(interval);
                }, [number])
        
                    
                
               

        /**usually this will cause an infinit loop so it is best not to do this
        *in case your code break.
        *code on pages will run two times. Once to render what we want and another is to render strict mode to find any common bugs
        */
       //after every one second the number increases by 1
       //no button is needed automatic update

    return(
        <>
            <Header/>
            <main>
                <h1>Example 5</h1>
                <div>Timer</div>
                <div>{number}</div>
            </main>
            <Footer/>
        </>
    )
}