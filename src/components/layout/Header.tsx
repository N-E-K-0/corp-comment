import { useFeedbackItemsStore } from "../../stores/feedbackItemStore";
import FeedbackForm from "../feedback/FeedbackForm";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import Pattern from "../Pattern";

export default function Header() {
  const addItemToFeedbackList = useFeedbackItemsStore(
    (state) => state.addItemToFeedbackList
  );
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddtoFeedbackList={addItemToFeedbackList} />
    </header>
  );
}
