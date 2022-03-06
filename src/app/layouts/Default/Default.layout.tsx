import confirm from "../../../core/utils/confirm";
import info from "../../../core/utils/info";
import Logo from "../../components/Logo";
import NavBar from "../../components/NavBar";
import SessionController from "../../components/SessionController";
import * as DL from "./Default.layout.styles";

interface DefaultLayoutsProps {
  children: React.ReactNode;
}

function DefaultLayout(props: DefaultLayoutsProps) {
  return (
    <DL.Wrapper>
      <DL.Header>
        <Logo />
      </DL.Header>
      <DL.Main>
        <DL.Navigation>
          <NavBar />
        </DL.Navigation>
        <DL.FeaturedContent>{props.children}</DL.FeaturedContent>
        <DL.Aside>
          <SessionController
            name="Vitor Palhares"
            description="editor há 2 anos"
            onLogout={() => {
              confirm({
                title: "Você quer deslogar?",
                onConfirm: () => {
                  info({
                    title: "Você foi deslogado",
                    description:
                      "Você será redirecionado para a página de login",
                  });
                },
                onCancel: () => window.alert("Cancelou"),
              });
            }}
          />
        </DL.Aside>
      </DL.Main>
    </DL.Wrapper>
  );
}

export default DefaultLayout;
