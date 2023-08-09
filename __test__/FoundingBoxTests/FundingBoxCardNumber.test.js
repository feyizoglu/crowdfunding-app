import { fireEvent, render, screen } from "@testing-library/react";
import { IntlProvider } from "next-intl";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import message from "@/messages/en.json";
import "@testing-library/jest-dom/extend-expect";
import FundingBoxCardNumber from "@/app/[locale]/Components/FundingBoxCardNumber/FundingBoxCardNumber";
describe("FundingBoxCardNumber", () => {
  let store;
  it("should update card number input value correctly", () => {
    const mockStore = configureStore([]);
    const initialState = {};
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <IntlProvider locale="en" messages={message}>
          <FundingBoxCardNumber
            register={() => {}}
            errors={{ cardCvv: "This is an error message" }}
          />
        </IntlProvider>
      </Provider>
    );
    const input = screen.getByPlaceholderText("XXXX-XXXX-XXXX-XXXX");
    fireEvent.change(input, { target: { value: "1234567890123456" } });
    expect(input.value).toBe("1234-5678-9012-3456");
  });
});
