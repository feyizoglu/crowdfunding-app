import { fireEvent, render, screen } from "@testing-library/react";
import { IntlProvider } from "next-intl";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import message from "@/messages/en.json";
import "@testing-library/jest-dom/extend-expect";
import FundingBoxDonationBox from "@/app/[locale]/Components/FundingBoxDonationBox/FundingBoxDonationBox";
describe("FundingBoxDonationBox", () => {
  let store;
  const handleBtnClick = jest.fn();
  it("should handle custom value input", () => {
    const mockStore = configureStore([]);
    const initialState = {};
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <IntlProvider locale="en" messages={message}>
          <FundingBoxDonationBox handleBtnClick={handleBtnClick} amount={100} />
        </IntlProvider>
      </Provider>
    );
    const input = screen.getByPlaceholderText("Custom");
    fireEvent.change(input, { target: { value: "200" } });

    expect(handleBtnClick).toHaveBeenCalledWith("200");
  });
});
