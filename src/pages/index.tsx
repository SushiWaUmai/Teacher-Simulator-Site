import React from "react";
import type { NextPage } from "next";
import { Unity, useUnityContext } from "react-unity-webgl";
import { UNITY_URL } from "../utils/constants";

const Home: NextPage = () => {
  const { unityProvider, requestFullscreen } = useUnityContext({
    loaderUrl: `${UNITY_URL}/WebGL.loader.js`,
    dataUrl: `${UNITY_URL}/WebGL.data`,
    frameworkUrl: `${UNITY_URL}/WebGL.framework.js`,
    codeUrl: `${UNITY_URL}/WebGL.wasm`,
  });

  return (
    <div onClick={() => requestFullscreen(true)}>
      <Unity
        className="absolute inset-0 w-full h-full"
        unityProvider={unityProvider}
      />
    </div>
  );
};

export default Home;
