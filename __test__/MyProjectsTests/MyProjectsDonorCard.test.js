import { fireEvent, render, screen } from "@testing-library/react";
import { IntlProvider } from "next-intl";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import message from "@/messages/en.json";
import "@testing-library/jest-dom/extend-expect";
import MyProjectsDonorCard from "@/app/[locale]/Components/MyProjectDonorCard/MyProjectsDonorCard";
describe("MyProjectsDonorCard", () => {
  let store;
  const donation = {
    cardholder: "John Doe",
    description: "test donation",
    amount: 100,
  };
  it("renders the donor card with correct information", () => {
    const mockStore = configureStore([]);
    const initialState = {};
    store = mockStore(initialState);
    const title = "My Projects";
    render(
      <Provider store={store}>
        <IntlProvider locale="en" messages={message}>
          <MyProjectsDonorCard donation={donation} />
        </IntlProvider>
      </Provider>
    );
    const donorName = screen.getByText("John Doe");
    const donationDescription = screen.getByText("Test donation");
    const donationAmount = screen.getByText("$100");
    expect(donorName).toBeInTheDocument();
    expect(donationDescription).toBeInTheDocument();
    expect(donationAmount).toBeInTheDocument();
  });
});
