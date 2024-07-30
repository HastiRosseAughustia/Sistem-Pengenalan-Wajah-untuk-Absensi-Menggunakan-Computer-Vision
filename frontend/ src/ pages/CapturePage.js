import React, { useRef, useState } from 'react';
import axios from 'axios';
import './CapturePage.css'; // Mengimpor file CSS untuk styling

const CapturePage = () => {
    const [isCapturing, setIsCapturing] = useState(false);
    const [imageData, setImageData] = useState(null);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    const startCapture = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                }
                setIsCapturing(true);
            })
            .catch((error) => {
                console.error('Error accessing webcam:', error);
                alert('Could not access webcam.');
            });
    };

    const stopCapture = () => {
        if (videoRef.current) {
            const stream = videoRef.current.srcObject;
            if (stream) {
                const tracks = stream.getTracks();
                tracks.forEach((track) => track.stop());
            }
            videoRef.current.srcObject = null;
        }
        setIsCapturing(false);
    };

    const captureImage = () => {
        if (videoRef.current && canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            canvasRef.current.width = videoRef.current.videoWidth;
            canvasRef.current.height = videoRef.current.videoHeight;
            context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
            const dataUrl = canvasRef.current.toDataURL('image/png');
            setImageData(dataUrl);
        }
    };

    const uploadImage = async () => {
        if (!imageData) {
            alert('No image to upload.');
            return;
        }

        try {
            const response = await axios.post('/api/face', { image: imageData });
            console.log('Image uploaded successfully:', response.data);
            alert('Image uploaded successfully.');
        } catch (error) {
            console.error('Failed to upload image:', error);
            alert('Failed to upload image.');
        }
    };

    return (
        <div className="capture-page">
            <h1>Capture and Upload Image</h1>
            <div className="video-container">
                <video ref={videoRef} autoPlay muted></video>
                <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
            </div>
            <div className="controls">
                {!isCapturing ? (
                    <button onClick={startCapture}>Start Capture</button>
                ) : (
                    <>
                        <button onClick={captureImage}>Capture Image</button>
                        <button onClick={stopCapture}>Stop Capture</button>
                    </>
                )}
                {imageData && (
                    <>
                        <h2>Captured Image</h2>
                        <img src={imageData} alt="Captured" />
                        <button onClick={uploadImage}>Upload Image</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default CapturePage;

