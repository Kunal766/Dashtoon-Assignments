import query from "../../utilities/getImage";
import { useEffect, useState } from 'react';
import Massagebox from "../Massagebox/Massagebox";
import Inoutbox from "../Inputbox/Inputbox";
import './Display.css'

function Display() {

    const [imageUrl, setImageUrl] = useState(null);
    useEffect(() => {
        query({ "inputs": "Astronaut riding a horse" }).then((response) => {

            console.log(response);
            const imageBytes = response
            const blob = new Blob([imageBytes], { type: 'image/jpeg' });
            const imageUrl = URL.createObjectURL(blob);
            setImageUrl(imageUrl);
        })
        return () => {
            URL.revokeObjectURL(imageUrl);
        };
    }, []);

    return (<div className="display">
        <Massagebox/>
        <Inoutbox/>
    </div>)
}


export default Display;