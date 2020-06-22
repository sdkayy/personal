import cn from "classnames";
import NextHead from "next/head";
import Layout from "../components/layout";

const ABOUT_SECTIONS = [
  {
    heading: `About Me`,
    body: `Hi! I am a ${
      new Date().getFullYear() - 1997 - (new Date().getMonth() >= 7 ? 0 : 1)
    } year old self-taught software engineer. I mainly focus on web development but am always looking to expand my horizons.`
  },
  {
    heading: `My Stack`,
    body: `The stack I've been working with for a while now is Next.js, GraphQL, React and Typescript. Recently I started to pick up Hasura as a backend service and have been loving it.`
  },
  {
    heading: `My Goals`,
    body: `I have one goal in my career. Learn. I want to tackle React Native evnetually, I've messed about with it and the little amount I did I loved it. Just haven't gotten an opportunity to use it in a professional capacity.`
  }
];

const HISTORY = [
  {
    company: "White Label Labs",
    title: "Lead Software Engineer",
    dates: "July 2019 - Present",
    body: (
      <>
        <h1>Responsibilities</h1>
        <p className={"ml-2"}>- Spec, prototype and deliver new features</p>
        <h1>Stack</h1>
        <p className={"ml-2"}>- React / Next</p>
        <p className={"ml-2"}>- Typescript</p>
        <p className={"ml-2"}>- GraphQL</p>
        <p className={"ml-2"}>- Hasura</p>
        <p className={"ml-2"}>- Postgres</p>
      </>
    ),
    color: "bg-purple-700"
  },
  {
    company: "NICKL",
    title: "Software Engineer",
    dates: "Feb 2018 - Apr 2019",
    body: (
      <>
        <h1>Responsibilities</h1>
        <p className={"ml-2"}>
          - Built / maintained an extension / plugin for client websites
        </p>
        <p className={"ml-2"}>- Lead development efforts on crucial features</p>
        <p className={"ml-2"}>
          - Played a crucial role in designer =&gt; production chain
        </p>
        <p className={"ml-2"}>- Lead development efforts on crucial features</p>
        <h1>Stack</h1>
        <p className={"ml-2"}>- React / Next</p>
        <p className={"ml-2"}>- Typescript</p>
        <p className={"ml-2"}>- GraphQL</p>
        <p className={"ml-2"}>- RethinkDB</p>
      </>
    ),
    color: "bg-gray-700"
  },
  {
    company: "Trueshot",
    title: "Software Engineer",
    dates: "Dec 2017 - Jun 2018",
    body: (
      <>
        <h1>Responsibilities</h1>
        <p className={"ml-2"}>- Helped develop new software solutions</p>
        <p className={"ml-2"}>
          - Built / maintained a microservice infrastructure
        </p>
        <h1>Stack</h1>
        <p className={"ml-2"}>- Javascript</p>
        <p className={"ml-2"}>- AWS</p>
      </>
    ),
    color: "bg-gray-700"
  }
];
function IndexPage() {
  return (
    <>
      <NextHead>
        <title>Austin Quinn | Software Engineer</title>
        <meta
          name="description"
          content={`Hi! I am a ${
            new Date().getFullYear() -
            1997 -
            (new Date().getMonth() >= 7 ? 0 : 1)
          } year old self-taught software engineer. I mainly focus on web development but am always looking to expand my horizons.`}
        />
      </NextHead>
      <Layout>
        <div className="flex flex-col items-center justify-center">
          <div className={"flex flex-col md:flex-row flex-wrap mb-4"}>
            {HISTORY.map((job) => {
              return (
                <div
                  key={job.company}
                  className={cn(
                    "p-6 rounded-xl shadow-lg text-white w-full md:w-96 my-2 md:m-2",
                    job.color
                  )}
                  style={{ height: "fit-content" }}
                >
                  <h3 className={"text-xl font-thin"}>{job.title}</h3>
                  <div
                    className={
                      "flex flex-row items-center opacity-80 font-hairline "
                    }
                  >
                    <p className={"text-sm mr-2"}>{job.company}</p>•
                    <p className={"text-sm  ml-2"}>{job.dates}</p>
                  </div>
                  <div className={"font-hairline my-2"}>{job.body}</div>
                </div>
              );
            })}
          </div>
        </div>{" "}
        <div className="flex flex-col items-center justify-center max-w-4xl m-auto space-y-6 md:flex-row md:space-x-6 md:space-y-0">
          <div className="space-y-6 md:w-1/2">
            {ABOUT_SECTIONS.map((section) => (
              <div key={section.heading}>
                <h2 className="mb-3 text-xl font-thin">{section.heading}</h2>
                <p className={"font-hairline"}>{section.body}</p>
              </div>
            ))}
          </div>

          <div className="md:w-1/2">
            <img
              alt="A one-eyed alien holding a broken cable connected between a server and a desktop computer"
              className="w-full"
              src="critter.svg"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default IndexPage;
