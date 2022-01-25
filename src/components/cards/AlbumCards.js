import React, { useEffect } from "react";
import useAlbum from "@hooks/useAlbum";

function AlbumCards(props) {
  const { id } = props;
  const { album, getSingleAlbum } = useAlbum();
  useEffect(() => {
    getSingleAlbum(id);

  }, [getSingleAlbum, id]);

  console.log(album)

  return album.loading ? (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <div className="h-20 bg-gray-200 rounded-sm animate-pulse"></div>
      <div className="h-20 bg-gray-100 rounded-sm animate-pulse"></div>
      <div className="h-20 bg-gray-50 rounded-sm animate-pulse"></div>
    </div>
  ) : (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {album.data.map((single, index) => (
        <div key={index}>
          <img src={single.thumbnailUrl} alt={single.title} />
          <p className="text-sm line-clamp-2">{single.title}</p>
        </div>
      ))}
    </div>
  );
}

export default AlbumCards;
