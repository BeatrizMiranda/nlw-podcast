import React from "react";
import Image from "next/image";

import { TEpisodes, TPodcastItem } from "../../typing/homeTypes";

const PodcastItem = ({ ep }: TPodcastItem) => (
  <tr>
    <td style={{ width: 72 }}>
      <Image width={120} height={120} objectFit="cover" alt={ep.title} src={ep.thumbnail} />
    </td>
    <td>
      <a href="">{ep.title}</a>
    </td>
    <td>{ep.members}</td>
    <td style={{ whiteSpace: "nowrap" }}>{ep.publishedAt}</td>
    <td>{ep.durationFormatted}</td>
    <td>
      <button type="button">
        <img src="/play-green.svg" alt="play podcast" />
      </button>
    </td>
  </tr>
);

const PodcastList = ({ restEpisodes }: { restEpisodes: TEpisodes[] }) => {
  const renderAllPodcast = () => restEpisodes.map((ep) => <PodcastItem ep={ep} key={ep.id} />);

  return (
    <table cellSpacing={0}>
      <thead>
        <th></th>
        <th>Podcast</th>
        <th>Integrantes</th>
        <th>Data</th>
        <th>Duração</th>
        <th></th>
      </thead>
      <tbody>{renderAllPodcast()}</tbody>
    </table>
  );
};

export default PodcastList;
