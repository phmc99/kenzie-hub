import { HiLink, HiPencil } from "react-icons/hi";
import { useUserData } from "../../providers/userData";
import { WorkBox, WorkItem } from "./style";

interface WorkContainerProps {
  setModalOptions: (value: string) => void;
}

const WorkContainer = ({ setModalOptions }: WorkContainerProps) => {
  const { userWorks } = useUserData();

  return (
    <WorkBox>
      <ul>
        {userWorks.map((item, index) => (
          <WorkItem key={index}>
            <div className="title">
              <a href={item.deploy_url} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            </div>
            <div className="desc">
              <p>{item.description}</p>
            </div>
            <div className="see-more">
              <span
                className="open-modal"
                onClick={() => setModalOptions(item.id!)}
              >
                <HiPencil />
              </span>
              <a href={item.deploy_url} target="_blank" rel="noreferrer">
                <HiLink />
              </a>
            </div>
          </WorkItem>
        ))}
      </ul>
    </WorkBox>
  );
};

export default WorkContainer;
