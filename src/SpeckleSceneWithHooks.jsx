import React, { useEffect, useRef, useState } from "react";
import { Viewer } from "@speckle/viewer";
import Container from "@mui/material/Container";

// TODO: Fix initial sizing of the threejs component on first render
// :facepalm: https://stackoverflow.com/questions/49058890/how-to-get-a-react-components-size-height-width-before-render
const SpeckleSceneWithHooks = ({ token, url }) => {
  const mount = useRef(null);
  const containerRef = useRef(null);
  const [size, setSize] = useState({ width: 900, height: 720 });

  const getContainerSize = () => {
    const width = containerRef.current.clientWidth;
    const height = width * 0.8; // should be set to preserve some aspect ratio?
    setSize({ width: width, height: height });
  };

  useEffect(() => {
    window.addEventListener("resize", getContainerSize);
  }, []);

  useEffect(() => {
    async function getModel(viewer, speckleURL, token) {
      await viewer.loadObject(speckleURL, token);
    }

    const v = new Viewer(mount.current);
    getModel(v, url, token);
    console.log("getting Model");

    return () => {
      while (mount.current.hasChildNodes()) {
        mount.current.removeChild(mount.current.firstChild);
      }
    };
  }, []);

  return (
    <Container maxWidth="md" ref={containerRef}>
      <div
        id="visHooks"
        style={{ width: `${size.width}px`, height: `${size.height}px` }}
        ref={mount}
      />
    </Container>
  );
};

export default SpeckleSceneWithHooks;
