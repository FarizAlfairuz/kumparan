import React, { useEffect, useState } from "react";
import useAlbum from "@hooks/useAlbum";
import TruncatedList from "react-truncate-list";
import { Link } from "react-router-dom";

function AlbumCards(props) {
  const { id } = props;
  const { album, getSingleAlbum } = useAlbum();
  const [expanded, setExpanded] = useState(false);
  const expand = () => setExpanded(true);
  const collapse = () => setExpanded(false);

  useEffect(() => {
    getSingleAlbum(id);
  }, [getSingleAlbum, id]);

  return album.loading ? (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <div className="h-20 bg-gray-200 rounded-sm animate-pulse"></div>
      <div className="h-20 bg-gray-100 rounded-sm animate-pulse"></div>
      <div className="h-20 bg-gray-50 rounded-sm animate-pulse"></div>
    </div>
  ) : (
    <TruncatedList
      className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-h-72 ${
        expanded ? "max-h-full" : ""
      }`}
      alwaysShowTruncator
      renderTruncator={({ hiddenItemsCount }) => {
        if (hiddenItemsCount > 0) {
          return (
            <button
              className="text-white bg-blue-400 px-3 py-2 rounded"
              onClick={expand}
            >
              {hiddenItemsCount} more...
            </button>
          );
        } else {
          return (
            <button
              className="text-white bg-blue-400 px-3 py-2 rounded"
              onClick={collapse}
            >
              hide
            </button>
          );
        }
      }}
    >
      {album.data.map((single, index) => (
        <div key={index}>
          <Link to={`/photo/${single.id}`}>
            <img src={single.thumbnailUrl} alt={single.title} />
          </Link>
          <p className="text-sm line-clamp-2">{single.title}</p>
        </div>
      ))}
    </TruncatedList>
  );
}

export default AlbumCards;
