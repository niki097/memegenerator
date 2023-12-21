import React, { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import AddText from "../components/AddText";
import Button from "react-bootstrap/esm/Button";
import {exportComponentAsJPEG} from 'react-component-export-image'
export default function Edit() {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
const memeRef=createRef();
  const addText = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div ref={memeRef}  className="meme mt-5 mb-2 d-grid justify-content-center">
        <img width='260px' src={params.get("url")} />
      {
        Array(count).fill().map(e=><AddText />)
      }
      </div>
      <Button variant="primary" onClick={addText}>Add Text</Button>
      <Button className="mx-3" variant="success" onClick={() => exportComponentAsJPEG(memeRef)}>Save</Button>
    </div>
  );
}
