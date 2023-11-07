import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Thank Christian</Title>
      <h1>Clicker by Christian</h1>
      <Counter />
      <p>
        Click Here --->{" "}
        <a href="https://fnaf1.netlify.app" target="_blank">
          fnaf1.netlify.app
        </a>{" "}
        for fully unblocked fnaf 1.
      </p>
    </main>
  );
}
