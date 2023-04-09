import { useRef } from 'react';
import './App.css';
import {graph_data} from './utils/data';
import ForceGraph2D from 'react-force-graph-2d';

function App() {
  const forceRef = useRef();
  return (
    <div className="App">
      <header className="App-header">
      <ForceGraph2D 
        graphData={graph_data}
        ref={forceRef}
        backgroundColor='white'
        nodeCanvasObjectMode={() => "after"}
        //nodeCanvasObject will add the node label as text onto the node after default drawing
        nodeCanvasObject={(node, ctx, globalScale) => {
          console.log(globalScale)
          const label = node.name;
          const fontSize = (globalScale < 12) ? (14 / (globalScale)) : (14 / (globalScale / 3));
          ctx.font = `${fontSize}px Sans-Serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "black"; //node.color;
          const lineHeight = fontSize * 1.2;
          const lines = label.split(" ");
          let x = node.x;
          //set initial y offset depending on how many lines there are, odd number of lines shift up a full line, even number of lines shift a half line
          let y = (lines.length % 2) ? node.y - (lineHeight * Math.trunc(lines.length/2)) : node.y - (lineHeight * ((lines.length-1)/2));
          for (let i = 0; i < lines.length; ++i) {
            ctx.fillText(lines[i], x, y);
            y += lineHeight;
          }
          }}
          onNodeClick={(node, event) => {
            forceRef.current.centerAt(node.x, node.y, 400);
            forceRef.current.zoom(15,400)
          }}
          onBackgroundClick={(event) => {
            forceRef.current.zoomToFit(400)
          }}
          nodeAutoColorBy={'type'}
      />
      </header>

    </div>
  );
}

export default App;
