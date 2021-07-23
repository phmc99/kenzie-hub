import { TechIcon } from "../TechIcon/TechIcon";
import { TechBox } from "./style";

const TechContainer = ({ title, techs, openTechOptionModal }) => {
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
                  onClick={(event) => openTechOptionModal(event.target.dataset)}
                />
              </li>
            ))}
        </ul>
      </TechBox>
    </>
  );
};

export default TechContainer;
