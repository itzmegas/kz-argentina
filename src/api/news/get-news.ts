import { get } from "../base";

type News = {
  id: number;
  url: string;
  title: string;
  htmlContent: string;
  htmlContentExtended: string | null;
  isOldNews: boolean;
  author: string;
  authorId: number;
  authorCountry: string;
  icons: {
    isMapper: boolean;
    isRecordHolder: boolean;
    isLjRecordHolder: boolean;
    isMovieMaker: boolean;
    isTournamentRank1: boolean;
    isTournamentRank2: boolean;
    isTournamentRank3: boolean;
    isVip: boolean;
    hasBirthday: boolean;
  };
  newsDate: string;
  isNew: boolean;
  commentsNumber: number;
};

type NewsResponse = {
  lastNews: News[];
  totalPages: number;
};

export const getNews = async () => {
  const response = await get<NewsResponse>("/news/last-news", {
    params: {
      page: 0,
    },
  });

  return response.lastNews;
};
