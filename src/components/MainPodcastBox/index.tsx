import React from "react";
import Image from "next/image";
import styles from "../../styles/pages/home.module.scss";
import { TEpisodes } from "../../typing/homeTypes";
import Link from "next/link";

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
        <Link href={`/episodes/${episode.id}`}>
          <a>{episode.title}</a>
        </Link>
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
