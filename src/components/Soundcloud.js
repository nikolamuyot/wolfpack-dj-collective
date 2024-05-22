// src/components/SoundCloud.js
import React from "react";

const SoundCloud = () => {
  return (
    <div>
      <h1>DJ [Your Brother's Name] SoundCloud</h1>
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/[Your Brother's SoundCloud ID]&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
    </div>
  );
};

export default SoundCloud;
