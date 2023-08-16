import {
  Feature,
  FeatureImage,
  FeatureText,
  Footer,
  Hero,
  Navbar,
} from "../../components";
import featureOne from "../../assets/featureOne.png";
import featureTwo from "../../assets/featureTwo.png";

/**
 * Landing page component that introduces the Discord clone.
 * @component
 */

const Landing = () => {
  return (
    <div>
      {/* Header Section */}
      <div className={`bg-illustration bg-cover bg-top `}>
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />
      </div>

      {/* Main Content Section */}
      <main>
        <div className="relative overflow-hidden pt-16 pb-32">
          {/* Feature 1 */}
          <Feature>
            <FeatureText
              title="Streamline Communication with Your Community"
              description=" Effortlessly connect with your community through our
             Discord clone. Seamlessly manage discussions, share
             updates, and foster engagement. Whether you're a gaming
             group, hobby club, or professional team, our platform
             empowers you to stay connected and informed"
              align="right"
            />
            {/* Feature Image */}
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <FeatureImage imageUrl={featureTwo} alignImage="right" />
              </div>
            </div>
          </Feature>

          {/* Feature 2 */}
          <Feature>
            <FeatureText
              title="Interaction with Dynamic Chats"
              description="Chats Description: Revolutionize your community
             interactions using our innovative Discord chat feature.
             Engage in real-time conversations, share multimedia
             content, and collaborate effortlessly. From lively
             discussions to focused brainstorming, our Discord chat
             brings your community together like never before"
              align="left"
            />
            {/* Feature Image */}
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <FeatureImage imageUrl={featureOne} alignImage="left" />
              </div>
            </div>
          </Feature>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
