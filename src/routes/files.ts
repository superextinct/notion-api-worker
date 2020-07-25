import { Params } from "tiny-request-router";
import { fetchSignedUrl } from "../api/notion";
import { createResponse } from "../response";

export async function filesRoute(params: Params, notionToken?: string) {
  const signedUrls = await fetchSignedUrl(params.blockId, params.fileUrl, notionToken);

  return createResponse(JSON.stringify(signedUrls));
}
