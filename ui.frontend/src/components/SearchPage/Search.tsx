import React, { FunctionComponent, useRef, useState } from "react";
import { Input } from "../Inputs/Input";
import { Button } from "../Buttons/Buttons";
import { BackgroundImage, LoginLogo } from "../LoginPage/LoginPageStyled";
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
} from "./SearchStyled";
import { Modal } from "./components/Modal/Modal";
import { User } from "./types/types";
import loginIcon from "../../assets/compassuol-logo-login.png";
import backgroundLogin from "../../assets/img-notebook.png";
import { LoginPageProps } from "../LoginPage/LoginPage";
import { useHistory } from "react-router-dom";
interface SearchPageProps {
  searchTitle?: string;
  searchParagraph?: string;
  searchImage?: { src: string };
  searchLogo?: { src: string };
  searchButtonColor?: string;
  location?: {
    state: LoginPageProps;
  };
}
const SearchPage: FunctionComponent<SearchPageProps> = ({
  searchTitle,
  searchParagraph,
  searchImage = { src: backgroundLogin },
  searchLogo = { src: loginIcon },
  searchButtonColor,
  location,
}) => {
  const history = useHistory();
  const isLoggedIn =
    (location && location.state && location.state.isLoggedIn) ??
    (localStorage.getItem("userName") != null &&
      localStorage.getItem("userPassword") != null);
  if (!isLoggedIn) {
    history.push("./error-page-401.html");
    document.title = "Error Page - 401";
  }
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearch = (user: string) => {
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
        return response.json();
      })
      .then((data) => {
        if (data.total_count === 0) {
          throw new Error("Usuário não encontrado, tente novamente");
        } else {
          setRepositories(data.items);
          setError(null);
        }
      })
      .catch((error) => setError(error.message));
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const [user, setUser] = useState<string>("");
  const [repositories, setRepositories] = useState<User[] | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <ContainerSearchPage>
      <ContainerSearch width='70%'>
        <SearchUsers>
          <>
            <TitleSearch>{searchTitle ? searchTitle : "Busca"}</TitleSearch>
            <ParagraphSearch>
              {searchParagraph
                ? searchParagraph
                : "Para encontrar o usuário desejado digite seu nome abaixo."}
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
                bgColorSearch={searchButtonColor}
                onClick={() => {
                  handleSearch(user);
                }}
              />
            </ContainerInputButtonSearch>
            {repositories && (
              <ContainerUsersRepos>
                {repositories.map((user, index) => (
                  <CardUser key={index}>
                    <UserImage src={user.avatar_url} alt='Foto de perfil' />
                    <UserNameDescription>
                      <UserName>{user.login}</UserName>
                    </UserNameDescription>
                    <Button
                      type='button'
                      text='VER MAIS'
                      onClick={() => {
                        handleSearch(user.login);
                        setOpenModal(true);
                        document.title = "Compass - User";
                      }}
                    />
                  </CardUser>
                ))}
              </ContainerUsersRepos>
            )}
            <Modal
              isOpen={openModal}
              setModalOpen={() => setOpenModal(!openModal)}
              user={user}
            />
          </>
        </SearchUsers>
      </ContainerSearch>
      <ContainerImage width='30%'>
        <BackgroundImage
          src={searchImage && searchImage.src}
          alt='Background Image'
        />
        <LoginLogo src={searchLogo && searchLogo.src} alt='Login Logo' />
      </ContainerImage>
    </ContainerSearchPage>
  );
};

export default SearchPage;
