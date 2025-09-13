import type { BaseQueryApi, FetchArgs } from "@reduxjs/toolkit/query";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "../layouts/uiSlice";

const customBaseQuery = fetchBaseQuery({
  baseUrl: "https://localhost:5001/api",
});

const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000));

export const baseQueryWithErroHandling = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extarOptions: object
) => {
  api.dispatch(startLoading());
  await sleep();
  const result = await customBaseQuery(args, api, extarOptions);
  api.dispatch(stopLoading());
  if (result.error) {
    const { status, data } = result.error;
    console.log({ status, data });
  }
  return result;
};
