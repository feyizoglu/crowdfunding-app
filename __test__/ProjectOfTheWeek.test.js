import { render, screen } from "@testing-library/react";
import { IntlProvider } from "next-intl";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import message from "@/messages/en.json";
import "@testing-library/jest-dom/extend-expect";
import ProjectOfTheWeek from "@/app/[locale]/Components/ProjectOfTheWeek/ProjectOfTheWeek";

jest.mock("next/image", () => {
  return {
    __esModule: true,
    default: (props) => {
      return <img {...props} priority={1} />;
    },
  };
});

describe("ProjectOfTheWeek", () => {
  let store;

  it("render the project", () => {
    const mockStore = configureStore([]);
    const initialState = {
      auth: {
        projects: [
          {
            docId: "1",
            title: "Project 1",
            image: "project1.jpg",
            creator: "user1@example.com",
            profilPic: "user1.jpg",
            description: "Lorem ipsum dolor sit amet",
            goalAmount: 1000,
            donations: [{ amount: 100 }, { amount: 200 }, { amount: 300 }],
          },
        ],
      },
    };
    store = mockStore(initialState);

    render(
      <Provider store={store}>
        <IntlProvider locale="en" messages={message}>
          <ProjectOfTheWeek />
        </IntlProvider>
      </Provider>
    );
    expect(screen.getByText("Project 1")).toBeInTheDocument();
  });
});
