import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { IntlProvider } from "next-intl";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import KickOffBox from "@/app/[locale]/Components/KickOffBox/KickOffBox";
import message from "@/messages/en.json";
import { setShowKickOffBox } from "@/app/redux/features/authSlice";
describe("KickOffBox", () => {
  let store;

  it("should submit the form successfully", async () => {
    const mockStore = configureStore([]);
    const initialState = {
      auth: {
        user: { id: 1, email: "test@example.com" },
        profilPic: "profile.jpg",
      },
    };
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en" messages={message}>
          <KickOffBox />
        </IntlProvider>
      </Provider>
    );
    fireEvent.change(screen.getByLabelText("Name of your project"), {
      target: { value: "My Project" },
    });
    fireEvent.change(screen.getByLabelText("Add your goal"), {
      target: { value: "3000" },
    });
    fireEvent.click(screen.getByLabelText("Add your timeline"));
    fireEvent.click(screen.getByText("15"));
    fireEvent.click(screen.getByText("25"));
    fireEvent.change(screen.getByLabelText("Select category"), {
      target: { value: "education" },
    });
    fireEvent.change(screen.getByLabelText("About your project"), {
      target: { value: "This is my project description" },
    });
    fireEvent.change(screen.getByLabelText("Add media"), {
      target: {
        files: [new File(["image"], "image.png", { type: "image/png" })],
      },
    });

    fireEvent.click(screen.getByText("Upload project"));

    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(setShowKickOffBox());
    });
  });
});
