import { Fragment } from "react";
import profile from "../assets/me2.png";
import Typewriter from "typewriter-effect";

const Project = () => {
  return (
    <>
      <section className="h-screen" id="projects">
        <h4 className="text-white text-2xl font-semibold">
          EECS 494 Project 1: Metroid Recreation
        </h4>
        <h4 className="text-white text-2xl font-semibold">
          Personal Contributions:
        </h4>
        <ul className="ml-3">
          <li className="text-white text-xl">
            I built all of the enemies AI's and created half the weapons
          </li>
          <li className="text-white text-xl">
            I created the reflectable and physics components related to the
            laser needed for our custom level
          </li>
          <li className="text-white text-xl">
            I contributed towards the overall feel of the player movement and
            authentic recreation of the map
          </li>
        </ul>
        <h4 className="text-white text-2xl">Tech Stack: Unity and C#</h4>
        <h4 className="text-white text-2xl">
          Check out the game below! Or at this{" "}
          <a
            className="text-blue-500 hover:underline"
            href="https://linkstorm.itch.io/metroid"
          >
            link
          </a>
        </h4>
        <a
          className="text-blue-500 hover:underline"
          href="https://linkstorm.itch.io/metroid"
        >
          Game On Itch.io
        </a>

        <div>---------------------------------------</div>
        <h4 className="text-white text-2xl font-semibold">
          EECS 494 Project 2: First Person Horror Game
        </h4>
        <ul className="ml-3">
          <li className="text-white text-xl">
            This is my take on the survival horror genre, where the main
            challenge is managing a tedious reload process as enemies slowly
            hunt you down.
          </li>
        </ul>
        <h4 className="text-white text-2xl">Tech Stack: Unity and C#</h4>
        <h4 className="text-white text-2xl">
          You can download the Windows and Mac builds from this google drive{" "}
          <a
            className="text-blue-500 hover:underline"
            href="https://drive.google.com/file/d/19TioZxhb7rw--5kT0huusPm9pIBNqCQ6/view?usp=sharing"
          >
            link
          </a>
        </h4>
        <div>---------------------------------------</div>
        <h4 className="text-white text-2xl font-semibold">
          EECS 494 Project 3: Hand of Light
        </h4>
        <ul className="ml-3">
          <li className="text-white text-xl">
            A unit-focused RTS game with a blend of futuristic and medieval warfare.
          </li>
        </ul>
        <h4 className="text-white text-2xl">Tech Stack: Unity and C#</h4>
        <h4 className="text-white text-2xl font-semibold">
          Personal Contributions:
        </h4>
        <ul className="ml-3">
          <li className="text-white text-xl">
            I built the terrain for the levels, the enemy AI, and parts of the damage and stats system for units.
          </li>
        </ul>
        <h4 className="text-white text-2xl">
          You can play the game on itch.io here: {" "}
          <a
            className="text-blue-500 hover:underline"
            href="https://linkstorm.itch.io/hand-of-light"
          >
            link
          </a>
        </h4>
      </section>
    </>
  );
};

export default Project;
