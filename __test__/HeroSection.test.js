import { fireEvent, render, screen } from "@testing-library/react";
import { IntlProvider } from "next-intl";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import HeroSection from "@/app/[locale]/Components/HeroSection/HeroSection";
import message from "@/messages/en.json";
import { setCloseMobileNav } from "@/app/redux/features/authSlice";
describe("HeroSection", () => {
  let store;
  beforeEach(() => {
    const mockStore = configureStore([]);
    const initialState = {};
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en" messages={message}>
          <HeroSection />
        </IntlProvider>
      </Provider>
    );
  });

  it("should display the correct text content", () => {
    expect(screen.getByText("Givingly")).toBeInTheDocument();
  });
  it("should dispacth setCloseMobileNav action on link click", () => {
    fireEvent.click(screen.getByText("Start Today"));
    expect(store.dispatch).toHaveBeenCalledWith(setCloseMobileNav());
  });
});
