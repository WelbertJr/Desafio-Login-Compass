import React, { FunctionComponent } from "react";
import {
  CardModal,
  ContainerModal,
  ContainerNameDescription,
  RepositoriesCard,
  RepositoryDescription,
  UserImage,
  UserName,
} from "./ModalStyled";

interface ModalProps {
  isOpen: boolean;
}

export const Modal: FunctionComponent<ModalProps> = ({ isOpen }) => {
  if (isOpen) {
    return (
      <ContainerModal>
        <CardModal>
          <ContainerNameDescription>
            <UserImage />
            <UserName>Nome</UserName>
            <RepositoryDescription>Description</RepositoryDescription>
          </ContainerNameDescription>
          <RepositoriesCard></RepositoriesCard>
        </CardModal>
      </ContainerModal>
    );
  }
  return null;
};
