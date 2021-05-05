import React from "react";

import { GetStaticProps } from "next";
import { getEpisodes } from "../services/home";
import { THomeProps } from "../typing/homeTypes";
import { convertTimeStampToTimeString, formatDateTime } from "../utils/dataTimeFormat";
import styles from "../styles/pages/home.module.scss";
import MainPodcastBox from "../components/MainPodcastBox";
import PodcastList from "../components/PodcastList";

export default function Home({ restEpisodes, latestEpisodes }: THomeProps) {
  const renderLatestPodcast = () =>
    latestEpisodes.map((ep) => <MainPodcastBox key={ep.id} episode={ep} />);

  return (
    <div className={styles.homePage}>
      <section className={styles.latestEpisodes}>
        <h2>Últimos Lançamentos</h2>

        <ul>{renderLatestPodcast()}</ul>
      </section>
      <section className={styles.allEpisodes}>
        <h2>Todos os episodeos</h2>
        <PodcastList restEpisodes={restEpisodes} />{" "}
      </section>
    </div>
  );
}

// server side render SSR
// in any page
// Toda vez que alguem acessar a pagina
// export async function getServerSideProps() {

// STATIC SIDE GENERATION
// first people do the request and other see the same page
// revalidade é o tempo que a pagina vai ser montada novamente, a chamada sera feita somente de 8 em 8 horas

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getEpisodes({
    _limit: 12,
    _sort: "published_at",
    _order: "desc",
  });

  const episodes = data.map((episode) => ({
    ...episode,
    durationFormatted: convertTimeStampToTimeString(Number(episode.file.duration)),
    publishedAt: formatDateTime(episode.published_at, "d MMM yy"),
  }));

  const latestEpisodes = episodes.splice(0, 2);
  const restEpisodes = episodes.splice(2, episodes.length);

  return {
    props: { restEpisodes, latestEpisodes },
    revalidate: 60 * 60 * 8,
  };
};
