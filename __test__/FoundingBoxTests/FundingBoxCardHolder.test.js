import { render, screen } from "@testing-library/react";
import { IntlProvider } from "next-intl";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import message from "@/messages/en.json";
import "@testing-library/jest-dom/extend-expect";
import FundingBoxCardHolder from "@/app/[locale]/Components/FundingBoxCardHolder/FundingBoxCardHolder";
describe("FundingBoxCardHolder", () => {
  let store;
  const mockSetDonorName = jest.fn();
  const mockRegister = jest.fn();
  it("should display input placeholder with correct text", () => {
    const mockStore = configureStore([]);
    const initialState = {};
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <IntlProvider locale="en" messages={message}>
          <FundingBoxCardHolder
            donorName=""
            setDonorName={mockSetDonorName}
            register={mockRegister}
            errors={{}}
          />
        </IntlProvider>
      </Provider>
    );
    const input = screen.getByPlaceholderText("PHIL DUNPHY");
    expect(input).toBeInTheDocument();
  });
});
