import React from "react";
import Image from "next/image";
import styles from "../../styles/pages/home.module.scss";
import { TEpisodes } from "../../typing/homeTypes";

function MainPodcastBox({ episode }: { episode: TEpisodes }) {
  return (
    <li>
      <Image
        width={192}
        height={192}
        objectFit="cover"
        alt={episode.title}
        src={episode.thumbnail}
      />
      <div className={styles.episodesDetails}>
        <a href="">{episode.title}</a>
        <p>{episode.members}</p>
        <span>{episode.publishedAt}</span>
        <span>{episode.durationFormatted}</span>
      </div>

      <button type="button">
        <img src="/play-green.svg" alt="play podcast" />
      </button>
    </li>
  );
}

export default MainPodcastBox;
