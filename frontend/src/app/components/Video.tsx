"use client";
import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

interface Props {
  id: string;
  title: string;
}

const Video = (props: Props) => {
  return (
    <LiteYouTubeEmbed
      id={props.id}
      title={props.title}
      adNetwork={false}
      muted={true}
      poster="mqdefault"
    />
  );
};

export default Video;
