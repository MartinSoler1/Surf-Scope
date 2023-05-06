import React from "react";
import AboutUsCard from "../components/AboutUsCard";

const About = () => {
  return (
    <div className="m-4">
      <p className="mt-4 fs-4">
        <strong>
          Like you, we had no idea who to trust for travel advice.
        </strong>
      </p>
      <span className="lh-lg fw-normal">
        That’s why we made Surf scope, a travel site written by real experts,
        not anonymous reviewers. Our writers are locals with hometown pride,
        parents who are road trip heroes, cruise junkies who know every ship at
        sea, and virtually everyone else in-between. As one of the top-10 travel
        information sites in the world as measured by comScore, a leading
        Internet measurement company, we have more than 50 writers—from lifetime
        locals to licensed tour guides—sharing useful travel advice and
        inspiration from destinations around the world. Surf scope has been
        honored by multiple awards since its inception, including the Eppy
        Awards, the W3 Awards, and the Communicator Awards.
      </span>
      <br />
      <br />
      <span className="lh-lg fw-normal">
        Here are three principles that guide our coverage: Accuracy and
        integrity: We rigorously vet and update each article on the site using
        our staff and an army of freelance travel editors. Additionally, we
        don’t accept payment in exchange for coverage, ensuring that the places
        we write about and recommend are actually as cool as we say they are.
        Cultivated recommendations: We don’t just recommend everything—we only
        recommend the best. Unlike overwhelming review sites, our writers use
        their local knowledge to suggest the places that are worth your time,
        whether you’re traveling for a business trip or family vacation.
        Expertise: Most of our writers live and work every day in the
        destinations they write about. They can tell you how to catch the bus,
        where to find the best croissant and everything in between.
      </span>
      <div>
        <AboutUsCard />
      </div>
    </div>
  );
};

export default About;
