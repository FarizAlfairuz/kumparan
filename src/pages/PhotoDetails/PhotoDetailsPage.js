import React, { useEffect } from "react";
import Layout from "@components/Layout";
import { useParams } from "react-router-dom";
import usePhoto from "@hooks/usePhoto";
import { GridLoader } from "react-spinners";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function PhotoDetailsPage() {
  const params = useParams();

  const { photo, getSinglePhoto } = usePhoto();

  useEffect(() => {
    getSinglePhoto(params.id);
  }, [getSinglePhoto, params.id]);

  return (
    <Layout width="w-5/6 md:w-3/5">
      {photo.loading ? (
        <div className="flex justify-center items-center h-screen w-full">
          <GridLoader size={30} margin={2} color="teal" />
        </div>
      ) : (
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-ellipsis overflow-hidden">
            Photo number {photo.data.id}
          </h1>
          <TransformWrapper
            initialScale={1}
            initialPositionX={0}
            initialPositionY={0}
          >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <React.Fragment>
                <div className="space-x-4">
                  <button className="bg-white text-black px-4 py-3 rounded shadow" onClick={() => zoomIn()}>Zoom In</button>
                  <button className="bg-white text-black px-4 py-3 rounded shadow" onClick={() => zoomOut()}>Zoom Out</button>
                  <button className="bg-white text-black px-4 py-3 rounded shadow" onClick={() => resetTransform()}>Reset</button>
                </div>
                <TransformComponent>
                  <img src={photo.data.url} alt="" />
                </TransformComponent>
              </React.Fragment>
            )}
          </TransformWrapper>
          <div className="text-xl font-bold">{photo.data.title}</div>
        </div>
      )}
    </Layout>
  );
}

export default PhotoDetailsPage;
