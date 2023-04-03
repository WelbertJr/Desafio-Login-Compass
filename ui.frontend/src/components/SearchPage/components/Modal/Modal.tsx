import React, { FunctionComponent, useEffect, useState } from "react";
import { Button } from "../../../Buttons/Buttons";
import {
  CardModal,
  ContainerButtonsTop,
  ContainerButtonsCardRepositories,
  ContainerModal,
  ContainerNameDescription,
  RepositoriesCard,
  RepositoryDescription,
  UserImage,
  UserName,
  ContainerTextRepositoriesList,
  TitleRepositoryList,
  DescriptionRepository,
  CardRepositoriesList,
  ContainerFavoriteIcon,
  ContainerViewMore,
  UserNameDescription,
} from "./ModalStyled";
import classNames from "classnames";
import { MdStar } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { User } from "../../types/types";
interface ModalProps {
  isOpen: boolean;
  setModalOpen: () => void;
  user: string;
  repositories: User | null;
}

export const Modal: FunctionComponent<ModalProps> = ({
  isOpen,
  setModalOpen,
  user,
  repositories,
}) => {
  const [userData, setUserData] = useState<User[]>([]);
  const [userStarred, setUserStarred] = useState<User[]>([]);
  useEffect(() => {
    if (isOpen) {
      fetch(`https://api.github.com/users/${user}/repos`)
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => {
          console.error(`API error: ${error}`);
        });
      fetch(`https://api.github.com/users/${user}/starred`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (Array.isArray(data)) {
            setUserStarred(data);
          } else {
            console.error(`Invalid API response: ${data}`);
          }
        })
        .catch((error) => {
          console.error(`API error: ${error}`);
        });
    }
  }, [isOpen, user]);

  const [isActiveRepository, setIsActiveRepository] = useState(true);
  const [isActiveFavorites, setIsActiveFavorites] = useState(false);
  const [isActiveIcon] = useState(true);
  const [numRepositories, setNumRepositories] = useState(4);
  const [numFavoritesRepositories, setFavoritesRepositories] = useState(4);
  const handleClickRepositoriesButton = () => {
    if (isActiveFavorites) {
      setIsActiveFavorites(false);
    }
    setIsActiveRepository(!isActiveRepository);
  };

  const handleClickViewMore = () => {
    setNumRepositories(numRepositories + 4);
    setFavoritesRepositories(numFavoritesRepositories + 4);
  };

  const handleClickFavoritesButton = () => {
    if (isActiveRepository) {
      setIsActiveRepository(false);
    }
    setIsActiveFavorites(!isActiveFavorites);
    setFavoritesRepositories(4);
  };

  const displayedRepositories = userData.slice(0, numRepositories);
  const displayedFavorites = userStarred.slice(0, numFavoritesRepositories);

  if (isOpen) {
    return (
      <ContainerModal>
        <CardModal>
          {repositories && (
            <ContainerNameDescription>
              <UserImage src={repositories.avatar_url} />
              <div>
                <UserName>{repositories.login}</UserName>
                <RepositoryDescription>
                  {repositories.bio
                    ? repositories.bio
                    : "Sem descrição de perfil"}
                </RepositoryDescription>
                <UserNameDescription>{repositories.login}</UserNameDescription>
              </div>
            </ContainerNameDescription>
          )}
          <ContainerButtonsCardRepositories>
            <ContainerButtonsTop>
              <Button
                type='button'
                text='Repositórios'
                counter={userData.length}
                onClick={handleClickRepositoriesButton}
                className={classNames({
                  activeRepositoryButton: isActiveRepository,
                })}
              />
              <Button
                type='button'
                text='Favoritos'
                counter={userStarred.length}
                onClick={handleClickFavoritesButton}
                className={classNames({
                  activeFavoritesButton: isActiveFavorites,
                })}
              />
            </ContainerButtonsTop>
            <RepositoriesCard>
              {isActiveRepository &&
                displayedRepositories.map((repo, index) => (
                  <CardRepositoriesList key={index}>
                    <ContainerTextRepositoriesList>
                      <TitleRepositoryList>{repo.name}</TitleRepositoryList>
                      <DescriptionRepository>
                        {repo.description ? repo.description : "Sem descrição"}
                      </DescriptionRepository>
                    </ContainerTextRepositoriesList>
                    <ContainerFavoriteIcon>
                      <MdStar
                        id='favorite-icon'
                        className={classNames({
                          active: !isActiveIcon,
                        })}
                      />
                    </ContainerFavoriteIcon>
                    <Button type='button' text='COMPARTILHAR' />
                    <Button type='button' />
                  </CardRepositoriesList>
                ))}

              {isActiveFavorites &&
                displayedFavorites.map((repo, index) => (
                  <CardRepositoriesList key={index}>
                    <ContainerTextRepositoriesList>
                      <TitleRepositoryList>{repo.name}</TitleRepositoryList>
                      <DescriptionRepository>
                        {repo.description ? repo.description : "Sem descrição"}
                      </DescriptionRepository>
                    </ContainerTextRepositoriesList>
                    <ContainerFavoriteIcon>
                      <MdStar
                        id='favorite-icon'
                        className={classNames({
                          active: isActiveIcon,
                        })}
                      />
                    </ContainerFavoriteIcon>
                    <Button type='button' text='COMPARTILHAR' />
                    <Button type='button' />
                  </CardRepositoriesList>
                ))}
            </RepositoriesCard>
            <ContainerViewMore>
              <Button
                type='button'
                text='Ver mais repositórios'
                onClick={handleClickViewMore}
              />
              <IoIosArrowDown color={"white"} size={"2.4rem"} />
            </ContainerViewMore>
          </ContainerButtonsCardRepositories>
          <Button type='button' text='VOLTAR' onClick={setModalOpen} />
        </CardModal>
      </ContainerModal>
    );
  }
  return null;
};
