import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import AuthProvider from "./context/AuthProvider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PaymentProvider from "./context/PaymentProvider";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <AuthProvider>
        <PaymentProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </PaymentProvider>
      </AuthProvider>
    </>
  );
};

export default App;
