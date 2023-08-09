import { render, screen, fireEvent } from "@testing-library/react";
import { IntlProvider } from "next-intl";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import message from "@/messages/en.json";
import "@testing-library/jest-dom/extend-expect";
import SignIn from "@/app/[locale]/Components/SignIn/SignIn";

describe("SignIn", () => {
  let store;
  beforeEach(() => {
    const mockStore = configureStore([]);
    const initialState = {
      auth: {
        projects: [],
      },
    };
    store = mockStore(initialState);
  });

  it("renders SignUp component", () => {
    render(
      <Provider store={store}>
        <IntlProvider locale="en" messages={message}>
          <SignIn />
        </IntlProvider>
      </Provider>
    );
    expect(screen.getByTestId("welcome-back")).toBeInTheDocument();
  });
});
