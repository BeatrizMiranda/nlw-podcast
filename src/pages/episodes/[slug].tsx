import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { api } from "../../services/api";
import { convertTimeStampToTimeString, formatDateTime } from "../../utils/dataTimeFormat";
import { TPodcastItem } from "../../typing/homeTypes";
import styles from "./episodes.module.scss";
import Link from "next/link";

const Episode = ({ ep }: TPodcastItem) => {
  const router = useRouter();

  return (
    <div className={styles.episode}>
      <div className={styles.thumbnailContainer}>
        <Link href="/">
          <button type="button">
            <img src="/arrow-left.svg" alt="voltar" />
          </button>
        </Link>
        <Image width={700} height={160} objectFit="cover" alt={ep.title} src={ep.thumbnail} />
        <button type="button">
          <img src="/play.svg" alt="Tocar Episodio" />
        </button>
      </div>
      <header>
        <h1>{ep.title}</h1>
        <span>{ep.members}</span>
        <span>{ep.publishedAt}</span>
        <span>{ep.durationFormatted}</span>
      </header>

      <div className={styles.description} dangerouslySetInnerHTML={{ __html: ep.description }} />
    </div>
  );
};

export default Episode;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const { data } = await api.get(`/episodes/${slug}`);

  const ep = {
    ...data,
    durationFormatted: convertTimeStampToTimeString(Number(data.file.duration)),
    publishedAt: formatDateTime(data.published_at, "d MMM yy"),
  };

  return {
    props: {
      ep,
    },
    revalidate: 60 * 60 * 24,
  };
};
