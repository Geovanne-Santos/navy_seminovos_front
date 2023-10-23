import { Header } from "./components/Header";
import { AppRouter } from "./router";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <AppRouter /> 
      </main>
    </>
  )
};
