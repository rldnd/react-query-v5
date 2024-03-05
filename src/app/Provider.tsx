"use client";

import type { ReactNode } from "react";

import { keepPreviousData, QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Props {
  children: ReactNode;
}

const queryClient = new QueryClient({ defaultOptions: { queries: { placeholderData: keepPreviousData } } });

const Provider: React.FC<Props> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default Provider;
