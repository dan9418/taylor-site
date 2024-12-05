import PageHeader from "@/components/PageHeader";
import Icon from "@/components/icons/Icon";
import { IconId } from "@/components/icons/icons";

const HomePage = () => {
  return (
    <>
      <PageHeader text="Taylor Morgan" />
      <div className="text-center theme-l-fg-2 pt-4">
        <div>Drummer</div>
        <div className="flex align-center justify-center mt-2">
          <Icon
            iconId={IconId.Location}
            className="theme-l-fg-2 h-4 w-4 mt-1 mr-1"
          />
          <span>Morgantown, WV</span>
        </div>
      </div>
    </>
  );
};

export default HomePage;
