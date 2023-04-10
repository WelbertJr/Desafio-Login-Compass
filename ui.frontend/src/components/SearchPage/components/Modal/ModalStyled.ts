import styled from "styled-components";
import Elipse from "../../../../assets/Ellipse.png";

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  z-index: 1000;
  overflow: hidden;
`;

export const CardModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #242424;
  border-radius: 0.8rem;
  width: 90%;
  height: 80%;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    padding: 5%;
  }
`;

export const ContainerNameDescription = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  div {
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      height: 10rem;
      align-items: flex-start;
      justify-content: center;
    }
  }
  @media (max-width: 940px) {
    width: 25%;
  }
  @media (max-width: 768px) {
    width: 90%;
    order: 2;
    flex-direction: row;
    height: 20%;
    align-items: center;
    padding-top: 7%;
  }
`;

export const UserImage = styled.img`
  width: 17.4rem;
  height: 17.4rem;
  border-radius: 50%;
  background-image: url(${Elipse});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  margin: 15% 11.7% 6.3% 11.7%;
  @media (max-width: 940px) {
    width: 12.4rem;
    height: 12.4rem;
    margin: 5% 5% 6.3% 5%;
  }
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const UserName = styled.h2`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 3.2rem;
  color: #ffffff;
  margin: auto;
  @media (max-width: 940px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const RepositoryDescription = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 2rem;
  color: #8d8d8d;
  margin: 0 4%;
  text-align: center;
  @media (max-width: 940px) {
    font-size: 1.4rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const UserNameDescription = styled.p`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    font-size: 1.4rem;
    font-family: "Poppins";
    font-weight: 400;
    color: #8d8d8d;
  }
`;

export const RepositoriesCard = styled.div`
  width: 100%;
  background: #2b2b2b;
  display: flex;
  flex-direction: column;
  align-items: center;
  scrollbar-width: thin;
  scrollbar-color: #aaa;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 1rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 1rem;
  }
`;

export const ContainerButtonsCardRepositories = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 70rem;
  @media (max-width: 768px) {
    order: 3;
    height: 70%;
    margin: auto;
    width: 100%;
  }
`;

export const ContainerButtonsTop = styled.div`
  display: flex;
`;

export const CardRepositoriesList = styled.div`
  width: 90%;
  align-items: center;
  padding: 4% 2%;
  display: flex;
  border-bottom: 0.1rem solid rgba(159, 159, 159, 0.7);
  justify-content: space-between;
`;

export const ContainerTextRepositoriesList = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
export const TitleRepositoryList = styled.h3`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 1.8rem;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 940px) {
    font-size: 1.2rem;
  }
`;

export const DescriptionRepository = styled.p`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.7rem;
  color: #8d8d8d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 940px) {
    font-size: 1rem;
  }
`;

export const ContainerFavoriteIcon = styled.span`
  width: max-content;
  display: flex;
  margin: 1% 5%;
  #favorite-icon {
    color: #a8a8a8;
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
    &.active {
      color: #fad30a;
    }
  }
`;

export const ContainerViewMore = styled.div`
  display: flex;
  margin: 8% auto 4% auto;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 4% auto 1% auto;
    order: 4;
  }
`;
