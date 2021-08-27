import { TechProps } from "../../types";
import { TechIcon } from "../TechIcon/TechIcon";
import { TechBox } from "./style";

interface TechContainerProps {
  title: string;
  techs: TechProps[];
  openTechOptionModal: (value: TechProps) => void;
}

const TechContainer = ({
  title,
  techs,
  openTechOptionModal,
}: TechContainerProps) => {
  return (
    <>
      <TechBox>
        <span>{title}</span>
        <ul>
          {techs &&
            techs.map((item, index) => (
              <li key={index}>
                <TechIcon
                  tech={item.title}
                  data-title={item.title}
                  data-id={item.id}
                  data-status={item.status}
                  onClick={(event: any) =>
                    openTechOptionModal(event.target.dataset)
                  }
                />
              </li>
            ))}
        </ul>
      </TechBox>
    </>
  );
};

export default TechContainer;
