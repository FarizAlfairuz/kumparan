import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "@redux/actions/albumsAction";
import AlbumCards from "./AlbumCards";

function AlbumsList(props) {
  const { id } = props;
  const albums = useSelector((state) => state.album);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbums(id));
  }, [dispatch, id]);

  return albums.loading ? (
    <div className="space-y-4">
      <div className="h-5 bg-gray-200 rounded-sm animate-pulse"></div>
      <div className="h-5 bg-gray-200 rounded-sm animate-pulse"></div>
      <div className="h-5 bg-gray-200 rounded-sm animate-pulse"></div>
    </div>
  ) : (
    <div className="space-y-4">
      {albums.album.map((album, index) => (
        <div key={index} className="space-y-3">
          <h6 className="text-lg font-bold">{album.title}</h6>
          <AlbumCards id={album.id} />
        </div>
      ))}
    </div>
  );
}

export default AlbumsList;
