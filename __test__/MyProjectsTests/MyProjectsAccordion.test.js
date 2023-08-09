import { fireEvent, render, screen } from "@testing-library/react";
import { IntlProvider } from "next-intl";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import message from "@/messages/en.json";
import "@testing-library/jest-dom/extend-expect";
import MyProjectsAccordion from "@/app/[locale]/Components/MyProjectAccordion/MyProjectsAccordion";
describe("MyProjectsAccordion", () => {
  let store;
  it("should toggle the dropdown when clicked", () => {
    const mockStore = configureStore([]);
    const initialState = {};
    store = mockStore(initialState);
    const title = "My Projects";
    render(
      <Provider store={store}>
        <IntlProvider locale="en" messages={message}>
          <MyProjectsAccordion title={title} />
        </IntlProvider>
      </Provider>
    );
    const accordion = screen.getByText(title);
    fireEvent.click(accordion);
    expect(accordion).toHaveClass(
      "text-center text-[24px] w-full md:text-left"
    );
    fireEvent.click(accordion);
    expect(accordion).not.toHaveClass("isOpen");
  });
});
