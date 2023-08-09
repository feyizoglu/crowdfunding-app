import { render, screen } from "@testing-library/react";
import { IntlProvider } from "next-intl";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import message from "@/messages/en.json";
import "@testing-library/jest-dom/extend-expect";
import Footer from "@/app/[locale]/Components/Footer/Footer";
describe("Footer", () => {
  let store;
  it("renders footer component", () => {
    const mockStore = configureStore([]);
    const initialState = {
      auth: {
        projects: [],
      },
    };
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <IntlProvider locale="en" messages={message}>
          <Footer />
        </IntlProvider>
      </Provider>
    );
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
