import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { IntlProvider } from "next-intl";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import MyProjects from "@/app/[locale]/Components/MyProject/MyProjects";
import message from "@/messages/en.json";
import { setShowKickOffBox } from "@/app/redux/features/authSlice";
describe("MyProjects component", () => {
  let store;

  it("should render loader when matchedProject is empty", () => {
    const mockStore = configureStore([]);
    const initialState = {
      auth: {
        user: {},
        projects: [],
      },
    };
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <IntlProvider locale="en" messages={message}>
          <MyProjects />
        </IntlProvider>
      </Provider>
    );

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
