import { useSearchParams } from "next/navigation";

export const useGetSearchParams = (params: string) => {
  const searchParams = useSearchParams();

  return searchParams.get(params);
};
