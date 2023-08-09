import { fireEvent, render, screen } from "@testing-library/react";
import { IntlProvider } from "next-intl";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import message from "@/messages/en.json";
import "@testing-library/jest-dom/extend-expect";
import FundingBoxDescription from "@/app/[locale]/Components/FundingBoxDescription/FundingBoxDescription";
describe("FundingBoxDescription", () => {
  let store;
  const setDescMock = jest.fn();
  it("updates the description state when input changes", () => {
    const mockStore = configureStore([]);
    const initialState = {};
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <IntlProvider locale="en" messages={message}>
          <FundingBoxDescription
            register={() => {}}
            errors={{ cardCvv: "This is an error message" }}
            setDesc={setDescMock}
          />
        </IntlProvider>
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText(
      "I'm happy to fund this project."
    );
    fireEvent.change(inputElement, { target: { value: "Test description" } });
    expect(inputElement.value).toBe("Test description");
  });
});
