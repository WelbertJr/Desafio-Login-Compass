import React, { FunctionComponent, useRef, useState } from "react";
import { Input } from "../Inputs/Input";
import { Button } from "../Buttons/Buttons";
import { LoginLogo } from "../LoginPage/LoginPageStyled";
import {
  ContainerSearch,
  ContainerSearchPage,
  ContainerImage,
  ContainerInputButtonSearch,
  SearchUsers,
  ParagraphSearch,
  TitleSearch,
  CardUser,
  UserImage,
  UserName,
  UserNameDescription,
  ContainerInputError,
  SearchError,
  ContainerUsersRepos,
  UserDescription,
} from "./SearchStyled";
import { Modal } from "./components/Modal/Modal";
import { User } from "./types/types";

export const SearchPage: FunctionComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  /* const handleSearch = (user: string) => {
    setUser(user);
    if (!user) {
      setError("Digite um nome de usuário");
      return;
    }
    fetch(`https://api.github.com/search/users?q=${user}`)
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Usuário não encontrado, tente novamente");
          } else {
            throw new Error("Erro ao buscar usuário");
          }
        }
        setError(null);
        return response.json();
      })
      .then((data) => {
        if (data.items.length === 0) {
          setRepositories([]);
          setError("Usuário não encontrado, tente novamente");
        } else {
          setRepositories(data.items);
          setError(null);
        }
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      })
      .catch((error) => setError(error.message));
  };*/

  const handleSearch = (user: string) => {
    setUser(user);
    if (!user) {
      setError("Digite um nome de usuário");
      return;
    }
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Usuário não encontrado, tente novamente");
          } else {
            throw new Error("Erro ao buscar usuário");
          }
        }
        setError(null);
        return response.json();
      })
      .then((data) => {
        setRepositories(data);
        setError(null);
      })
      .catch((error) => setError(error.message));
  };

  const [user, setUser] = useState<string>("");
  const [repositories, setRepositories] = useState<User | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <ContainerSearchPage>
      <ContainerSearch width='70%'>
        <SearchUsers>
          <>
            <TitleSearch>Busca</TitleSearch>
            <ParagraphSearch>
              Para encontrar o usuário desejado digite seu nome abaixo.
            </ParagraphSearch>
            <ContainerInputButtonSearch>
              <ContainerInputError>
                <Input
                  type='text'
                  placeholder='Ex.: Thauany'
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setUser(event.target.value)
                  }
                  inputRef={inputRef}
                />
                {<SearchError>{error}</SearchError>}
              </ContainerInputError>
              <Button
                type='button'
                text='Buscar'
                onClick={() => {
                  handleSearch(user);
                }}
              />
            </ContainerInputButtonSearch>
            <ContainerUsersRepos>
              {repositories && (
                <CardUser>
                  <UserImage
                    src={repositories.avatar_url}
                    alt='Foto de perfil'
                  />
                  <UserNameDescription>
                    <UserName>{repositories.login}</UserName>
                    <UserDescription>
                      {repositories.bio ? repositories.bio : "Sem descrição"}
                    </UserDescription>
                  </UserNameDescription>
                  <Button
                    type='button'
                    text='VER MAIS'
                    onClick={() => {
                      handleSearch(repositories.login);
                      setOpenModal(true);
                    }}
                  />
                </CardUser>
              )}
            </ContainerUsersRepos>
            <Modal
              isOpen={openModal}
              setModalOpen={() => setOpenModal(!openModal)}
              repositories={repositories}
              user={user}
            />
          </>
        </SearchUsers>
      </ContainerSearch>
      <ContainerImage width='30%'>
        <LoginLogo alt='Login Logo' />
      </ContainerImage>
    </ContainerSearchPage>
  );
};
