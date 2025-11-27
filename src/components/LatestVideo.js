import React from "react";

export default function Video({ videoSrcURL, videoTitle }) {
  const embedURL = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    videoSrcURL
  )}&show_text=false`;

  return (
    <div className="video">
      <iframe
        title={videoTitle}
        src={embedURL}
        width="500"
        height="900"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}

