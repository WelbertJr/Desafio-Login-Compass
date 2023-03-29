import React, { FunctionComponent, useState } from "react";
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
} from "./ModalStyled";
import classNames from "classnames";
import { MdStar } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  setModalOpen: () => void;
}

export const Modal: FunctionComponent<ModalProps> = ({
  isOpen,
  setModalOpen,
}) => {
  const [isActiveRepository, setIsActiveRepository] = useState(true);
  const [isActiveFavorites, setIsActiveFavorites] = useState(false);
  const [isActiveIcon, setIsActiveIcon] = useState(false);
  const [numRepositories, setNumRepositories] = useState(4);
  const [numFavoritesRepositories, setFavoritesRepositories] = useState(4);
  const handleClickRepositoriesButton = () => {
    if (isActiveFavorites) {
      setIsActiveFavorites(false);
    }
    setIsActiveRepository(!isActiveRepository);
  };
  const handleClickFavoritesButton = () => {
    if (isActiveRepository) {
      setIsActiveRepository(false);
    }
    setIsActiveFavorites(!isActiveFavorites);
    setFavoritesRepositories(numFavoritesRepositories + 4);
  };
  const handleClickIcon = () => {
    setIsActiveIcon(!isActiveIcon);
  };
  const handleClickViewMore = () => {
    setNumRepositories(numRepositories + 4);
  };

  const repositories = [
    { title: "Repositório 1", description: "Descrição do repositório" },
    { title: "Repositório 2", description: "Descrição do repositório" },
    { title: "Repositório 3", description: "Descrição do repositório" },
    { title: "Repositório 4", description: "Descrição do repositório" },
    { title: "Repositório 5", description: "Descrição do repositório" },
    { title: "Repositório 6", description: "Descrição do repositório" },
    { title: "Repositório 7", description: "Descrição do repositório" },
    { title: "Repositório 8", description: "Descrição do repositório" },
    { title: "Repositório 9", description: "Descrição do repositório" },
  ];
  const favoritesRepositories = [
    { title: "Favorito 1", description: "Descrição do Favorito" },
    { title: "Favorito 2", description: "Descrição do Favorito" },
    { title: "Favorito 3", description: "Descrição do Favorito" },
    { title: "Favorito 4", description: "Descrição do Favorito" },
    { title: "Favorito 5", description: "Descrição do Favorito" },
    { title: "Favorito 6", description: "Descrição do Favorito" },
    { title: "Favorito 7", description: "Descrição do Favorito" },
    { title: "Favorito 8", description: "Descrição do Favorito" },
    { title: "Favorito 9", description: "Descrição do repositório" },
  ];
  const displayedRepositories = repositories.slice(0, numRepositories);
  const displayedFavorites = favoritesRepositories.slice(
    0,
    numFavoritesRepositories
  );
  if (isOpen) {
    return (
      <ContainerModal>
        <CardModal>
          <ContainerNameDescription>
            <UserImage />
            <div>
              <UserName>Nome</UserName>
              <RepositoryDescription>Description</RepositoryDescription>
            </div>
          </ContainerNameDescription>
          <ContainerButtonsCardRepositories>
            <ContainerButtonsTop>
              <Button
                type='button'
                text='Repositórios'
                counter={repositories.length}
                onClick={handleClickRepositoriesButton}
                className={classNames({
                  activeRepositoryButton: isActiveRepository,
                })}
              />
              <Button
                type='button'
                text='Favoritos'
                counter={favoritesRepositories.length}
                onClick={handleClickFavoritesButton}
                className={classNames({
                  activeFavoritesButton: isActiveFavorites,
                })}
              />
            </ContainerButtonsTop>
            <RepositoriesCard>
              {isActiveRepository &&
                displayedRepositories.map((repository) => (
                  <CardRepositoriesList key={repository.title}>
                    <ContainerTextRepositoriesList>
                      <TitleRepositoryList>
                        {repository.title}
                      </TitleRepositoryList>
                      <DescriptionRepository>
                        {repository.description}
                      </DescriptionRepository>
                    </ContainerTextRepositoriesList>
                    <ContainerFavoriteIcon>
                      <MdStar
                        id='favorite-icon'
                        onClick={handleClickIcon}
                        className={classNames({
                          active: isActiveIcon,
                        })}
                      />
                    </ContainerFavoriteIcon>
                    <Button type='button' text='COMPARTILHAR' />
                    <Button type='button' />
                  </CardRepositoriesList>
                ))}
              {isActiveFavorites &&
                displayedFavorites.map((repository) => (
                  <CardRepositoriesList key={repository.title}>
                    <ContainerTextRepositoriesList>
                      <TitleRepositoryList>
                        {repository.title}
                      </TitleRepositoryList>
                      <DescriptionRepository>
                        {repository.description}
                      </DescriptionRepository>
                    </ContainerTextRepositoriesList>
                    <ContainerFavoriteIcon>
                      <MdStar
                        id='favorite-icon'
                        onClick={handleClickIcon}
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
