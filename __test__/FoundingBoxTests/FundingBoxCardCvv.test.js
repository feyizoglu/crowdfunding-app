import { fireEvent, render, screen } from "@testing-library/react";
import { IntlProvider } from "next-intl";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import message from "@/messages/en.json";
import "@testing-library/jest-dom/extend-expect";
import FundingBoxCardCvv from "@/app/[locale]/Components/FundingBoxCardCvv/FundingBoxCardCvv";
describe("FundingBoxCardCvv", () => {
  let store;
  it("CVV input field should display the entered value correctly", () => {
    const mockStore = configureStore([]);
    const initialState = {};
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <IntlProvider locale="en" messages={message}>
          <FundingBoxCardCvv
            register={() => {}}
            errors={{ cardCvv: "This is an error message" }}
          />
        </IntlProvider>
      </Provider>
    );
    const cvvInput = screen.getByPlaceholderText("***");
    fireEvent.change(cvvInput, { target: { value: "123" } });
    expect(cvvInput.value).toBe("123");
  });
});
