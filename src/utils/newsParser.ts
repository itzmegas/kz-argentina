import { API_FLAGS_URL } from "astro:env/client";

export const newsParser = (htmlContent: string) => {
  const regexLinkTag = /\[(user|map|timer)\](\d+)\|([^|]+)\|?(.*?)\[\/\1\]/g;

  const getAnchor = (
    _match: string,
    tagType: string,
    id: string,
    flagOrContent: string,
    label?: string,
  ) => {
    const display = `${tagType === "user" ? `<img src='${API_FLAGS_URL}/w20/${flagOrContent}.png' style="width: 20px; display: inline;"/>` : flagOrContent} ${label ? label : ""}`;
    const linkTo = `/${tagType}/${id}`;

    return `<a href="${linkTo}" style="color: blue; display: inline-block;">${display}</a>`;
  };

  const htmlContentEntries = htmlContent.replace(regexLinkTag, getAnchor);

  return htmlContentEntries;
};
