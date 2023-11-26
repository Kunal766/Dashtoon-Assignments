import React, { useState } from 'react';
import html2canvas from 'html2canvas';

const ShareableImage = ({ refre }) => {
    const [image, setImage] = useState(null);

    const captureImage = async () => {
        await document.fonts.ready;
        const elements = document.getElementsByClassName('chat-bubble-content');

        for (let i = 0; i < elements.length; i++) {
            const e = elements[i];
            console.log(e.style.top)
            e.style.top = '125px';
        }

        let options = {
            logging: true,
        };
        const canvas = await html2canvas(refre, options);
        const capturedImage = canvas.toDataURL('image/png');
        setImage(capturedImage);

        for (let i = 0; i < elements.length; i++) {
            const e = elements[i];
            console.log(e.style.top)
            e.style.top = '0px';
        }
    };

    const handleShare = () => {
        if (image && navigator.share) {
            const blob = dataURItoBlob(image);
            const files = [new File([blob], 'shareable_image.png', { type: 'image/png' })];

            navigator.share({
                files,
                title: 'Shareable Image',
                text: 'Check out this image!',
            });
        } else {
            // Handle sharing for non-supported browsers or missing image
            console.log('Sharing not supported or image not captured');
        }
    };

    // Convert data URI to Blob
    const dataURItoBlob = (dataURI) => {
        const byteString = atob(dataURI.split(',')[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);

        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ab], { type: 'image/png' });
    };

    return (
        <div >
            <button onClick={captureImage}>Capture Image</button>
            {image && <img src={image} alt="Shareable" />}
            {image && <button onClick={handleShare}>Share</button>}
        </div>
    );
};

export default ShareableImage;
