import { fireEvent, render, screen } from "@testing-library/react";
import { IntlProvider } from "next-intl";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import message from "@/messages/en.json";
import "@testing-library/jest-dom/extend-expect";
import FundingBoxCardDate from "@/app/[locale]/Components/FundingBoxCardDate/FundingBoxCardDate";
describe("FundingBoxCardDate", () => {
  let store;
  it("should render the component without errors", () => {
    const mockStore = configureStore([]);
    const initialState = {};
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <IntlProvider locale="en" messages={message}>
          <FundingBoxCardDate
            register={() => {}}
            errors={{ cardCvv: "This is an error message" }}
          />
        </IntlProvider>
      </Provider>
    );
    expect(screen.getByLabelText("Card Date")).toBeInTheDocument();
  });
  it("should update the input value correctly", () => {
    const mockStore = configureStore([]);
    const initialState = {};
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <IntlProvider locale="en" messages={message}>
          <FundingBoxCardDate
            register={() => {}}
            errors={{ cardCvv: "This is an error message" }}
          />
        </IntlProvider>
      </Provider>
    );
    const input = screen.getByPlaceholderText("MM/YY");
    fireEvent.change(input, { target: { value: "12/23" } });
    expect(input.value).toBe("12/23");
  });
});
