import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';
import "./facialExpression.css"
export default function FacialExpression() {
    const videoRef = useRef();
    // const canvasRef = useRef();

    const loadModels = async () => {
        const MODEL_URL = '/models';
        await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
        await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    };
    const startVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                videoRef.current.srcObject = stream;
            })
            .catch((err) => console.error("Error accessing webcam: ", err));
    };

    async function detectMood() {

        const detections = await faceapi
            .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
            .withFaceExpressions();

        let mostProbableExpression = 0
        let _expression = '';

        if (!detections || detections.length === 0) {
            console.log("No face detected")
            return;
        }

        for (const expression of Object.keys(detections[0].expressions)) {
            if (detections[0].expressions[expression] > mostProbableExpression) {
                mostProbableExpression = detections[0].expressions[expression]
                _expression = expression
            }
        }
        console.log(_expression)

        // const canvas = canvasRef.current;
        // const displaySize = {
        //     width: videoRef.current.videoWidth,
        //     height: videoRef.current.videoHeight,
        // };
        // faceapi.matchDimensions(canvas, displaySize);
        // const resized = faceapi.resizeResults(detections, displaySize);
        // canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
        // faceapi.draw.drawDetections(canvas, resized);
        // faceapi.draw.drawFaceExpressions(canvas, resized);

    }

    useEffect(() => {

        loadModels().then(startVideo);
        // videoRef.current && videoRef.current.addEventListener('play', handleVideoPlay);
    }, []);
    return (
        <div className='mood-element'>
            <video
                ref={videoRef}
                autoPlay
                muted
                className='user-video-feed'
            />
            {/* <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '720px',
                    height: '560px',
                }}
            /> */}
            <button onClick={detectMood}>Detect Mood</button>
        </div>
    );
}