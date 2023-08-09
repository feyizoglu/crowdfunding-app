import { render, screen } from "@testing-library/react";
import { IntlProvider } from "next-intl";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import message from "@/messages/en.json";
import "@testing-library/jest-dom/extend-expect";
import MyProjectsStatisticsDetails from "@/app/[locale]/Components/MyProjectStatisticsDetails/MyProjectsStatisticsDetails";

jest.mock("next/image", () => {
  return {
    __esModule: true,
    default: (props) => {
      return <img {...props} />;
    },
  };
});

describe("MyProjectsStatisticsDetails", () => {
  let store;
  const project = {
    profilPic: "profile-picture.jpg",
    creator: "john@example.com",
    timeline: "2022-12-31",
    category: "technology",
  };
  it("should render the component with correct project details", () => {
    const mockStore = configureStore([]);
    const initialState = {};
    store = mockStore(initialState);
    const title = "My Projects";
    render(
      <Provider store={store}>
        <IntlProvider locale="en" messages={message}>
          <MyProjectsStatisticsDetails project={project} />
        </IntlProvider>
      </Provider>
    );
    expect(screen.getByText("Creator:")).toBeInTheDocument();
    expect(screen.getByAltText("profil picture")).toBeInTheDocument();
    expect(screen.getByText("john")).toBeInTheDocument();
    expect(screen.getByText("End Date:")).toBeInTheDocument();
    expect(screen.getByText("2022-12-31")).toBeInTheDocument();
    expect(screen.getByText("Category:")).toBeInTheDocument();
    expect(screen.getByText("technology")).toBeInTheDocument();
  });
});
