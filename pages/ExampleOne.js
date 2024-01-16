import { useEffect, useState } from "react"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ExampleOnee(){
    
        const [number, setNumber] = useState(0);
        useEffect(() => {
            console.log(number);
        })

        /**usually this will cause an infinit loop so it is best not to do this
        *in case your code break.
        *code on pages will run two times. Once to render what we want and another is to render strict mode to find any common bugs
        */

    return(
        <>
            <Header/>
            <main>
                <h1>Example 1</h1>
                <div>Infinit loop</div>
                {number}
            </main>
            <Footer/>
        </>
    )
}