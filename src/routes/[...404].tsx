import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <p>
        Click here ---> {" "}
        <a href="https://fnaf1.netlify.app" target="_blank">
          fnaf1.netlify.app
        </a>{" "}
        to play full fnaf 1.
      </p>
    </main>
  );
}
