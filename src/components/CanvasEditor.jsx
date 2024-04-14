import React from 'react';
import { Stage, Layer, Image, Text, Rect, Circle } from 'react-konva';
import car from '../assets/SVG/image7.jpg';
const CanvasEditor = () => {
  return (
    <Stage className='bg-white' width={900} height={900}>
      <Layer>
        {/* Image */}
        {/* <Image
          image={car} // Pass your image source here
          x={100}
          y={100}
          draggable
        /> */}
        {/* Text */}
        <Text
          text="Hello, React-Konva!"
          x={200}
          y={200}
          fontSize={24}
          fontFamily="Arial"
          fill="red"
          draggable
        />
        {/* Shape */}
        <Rect
          x={300}
          y={300}
          width={100}
          height={100}
          fill="blue"
          draggable
        />
        <Circle
          x={500}
          y={500}
          radius={50}
          fill="green"
          draggable
        />
      </Layer>
    </Stage>
  );
};

export default CanvasEditor;
