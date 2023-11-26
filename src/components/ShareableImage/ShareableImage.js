import React, { useState } from 'react';
import html2canvas from 'html2canvas';

const ShareableImage = ({ element }) => {
    const [image, setImage] = useState(null);

    const captureImage = async () => {
        await document.fonts.ready;
        const canvas = await html2canvas(element);
        const capturedImage = canvas.toDataURL('image/png');
        setImage(capturedImage);
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
