import { render, screen, fireEvent } from "@testing-library/react";
import { IntlProvider } from "next-intl";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import message from "@/messages/en.json";
import "@testing-library/jest-dom/extend-expect";
import NewsLetterBox from "@/app/[locale]/Components/NewsLetterBox/NewsLetterBox";
import { setShowNewsletterForm } from "@/app/redux/features/authSlice";
describe("NewsLetterBox", () => {
  let store;
  it("dispatches setShowNewsletterForm action when button is clicked", () => {
    const mockStore = configureStore([]);
    const initialState = {
      auth: {
        projects: [],
      },
    };
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en" messages={message}>
          <NewsLetterBox />
        </IntlProvider>
      </Provider>
    );
    const button = screen.getByText("Join Newsletter");
    fireEvent.click(button);
    expect(store.dispatch).toHaveBeenCalledWith(setShowNewsletterForm());
  });
});
